import express from 'express';
import proxy from 'express-http-proxy';
import { matchRoutes } from 'react-router-config';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';
import routes from './client/routes';
import { API_URL, PROXY_PATH } from './shared/constants';
const app = express();

app.use(PROXY_PATH, proxy(API_URL, {
    proxyReqPathResolver(req) {
        console.log(req.url);
        return `${PROXY_PATH}${req.url}`;
    }
}));
app.use(express.static('public'));
app.get('*', (req, res) => {
    const store = createStore();
    const promises = matchRoutes(routes, req.path)
        .map(({ route }) => {
            return route.loadData ? route.loadData(store) : null;
        })
        .map(promise => {
            if (promise) {
                return new Promise(resolve => {
                    promise
                        .then(resolve)
                        .catch((...args) => {
                            console.error(...args);
                            resolve(...args);
                        });
                });
            }
            return Promise.resolve();
        });
    Promise.all(promises)
        .then(() => {
            const context = {};
            const content = renderer(req, store, context);
            if (context.url) {
                return res.redirect(301, context.url);
            }
            if (context.notFound) {
                res.status(404);
            }
            res.send(content);
        })
        .catch((...args) => {
            console.error(...args);
        });
});
const envPort = process.env.PORT || 3000;
app.listen(envPort, () => {
    console.log(`Server up and running on PORT ${envPort}`);
});