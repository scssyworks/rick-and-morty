import HomePage from '../pages/HomePage';
import App from '../App';
import NotFoundPage from '../pages/NotFoundPage';

export default [
    {
        ...App,
        routes: [
            {
                ...HomePage,
                path: '/',
                exact: true
            },
            {
                ...NotFoundPage
            }
        ]
    }
];