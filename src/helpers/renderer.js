import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import serialize from 'serialize-javascript';
import routes from '../client/routes';
import inlineCss from './main.scss';

export default (req, store, context) => {
    const content = renderToString(
        <Provider store={store}>
            <StaticRouter location={req.path} context={context}>
                {renderRoutes(routes)}
            </StaticRouter>
        </Provider>
    );

    return `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <title>Hacker News Clone</title>
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="keywords" content="react, ssr, hackernews, clone, demo, heroku" />
            <meta name="description" content="This page is a React SSR demo deployed to Heroku." />
            <link rel="icon" type="image/png" href="https://hn.algolia.com/packs/media/images/logo-hn-search-a822432b.png" />
            <style>
                ${inlineCss}
            </style>
            <link rel="preload" href="bundle.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
            <noscript><link rel="stylesheet" href="bundle.css" /></noscript>
        </head>
        <body>
            <div class="container pb-4">
                <div id="root">${content}</div>
            </div>
            <script>
                window.INITIAL_STATE = ${serialize(store.getState())}
            </script>
            <script src="bundle.js" async defer></script>
        </body>
    </html>
    `;
};