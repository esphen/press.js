import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import 'uikit/dist/css/uikit.css';
UIkit.use(Icons);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
