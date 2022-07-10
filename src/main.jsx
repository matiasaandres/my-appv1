import React from  'react';
import { ReactDOM } from 'react-dom/client';

import {App, hola} from './HelloWordApp';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)