import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


function render () {
    ReactDOM.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>,
        document.getElementById('single-spa-react')
    );
}

if (!window.singleSpaNavigate) {
    //挂载到项目本身
    ReactDOM.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>,
        document.getElementById('root')
    );
} else {
}

export async function bootstrap (props) {
}

export async function mount (props) {
    render()
}

export async function unmount (props) {
    ReactDOM.unmountComponentAtNode(document.getElementById('single-spa-react'))
}

