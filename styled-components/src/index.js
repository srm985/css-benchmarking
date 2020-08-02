import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';

const startApplication = () => {
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
};

startApplication();

if (module.hot) {
    module.hot.accept();
}
