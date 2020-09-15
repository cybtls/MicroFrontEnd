import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
//和vue一样导入
import singleSpaReact from 'single-spa-react'

function render() {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  )
}

//当只作为自己运行，不是作为子项目的时候
if (!window.singleSpaNavigate) {
  render()
} else {
}

export function bootstrap(props) {}

export function mount(props) {
  render()
  //   return reactLifecycles.mount(props)
}

export function unmount(props) {
  ReactDOM.unmountComponentAtNode(document.getElementById('root'))
}
