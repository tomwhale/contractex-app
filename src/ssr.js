import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../App';
import templateFn from './template';
import { StaticRouter } from 'react-router-dom'

export default (req, res) => {
    const html = ReactDOMServer.renderToString(
        <App StaticRouter={StaticRouter} location={req.url}  />
    );
    res.send(templateFn(html));
};
