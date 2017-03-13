import React from 'react'
import { render } from 'react-dom'
import { Root } from './routes'

import 'antd-mobile/dist/antd-mobile.css'
import './index.css'
import './assets/fonts/iconfont.css'

const root = document.getElementById('app')

if (__DEV__) {
  console.log('开发环境')
}
if (__PROD__) {
  console.log('生产环境')
}
if (__PROD_DEV__) {
  console.log('服务器端开发环境')
}
render(<Root />, root)
