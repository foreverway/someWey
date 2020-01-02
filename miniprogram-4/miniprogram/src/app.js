import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index'
import date from './public/imgs/svg/date.svg'
import todo from './public/imgs/svg/todo.svg'
import mail from './public/imgs/svg/mail.svg'
import photo from './public/imgs/svg/photo.svg'
import travel from './public/imgs/svg/travel.svg'
import './app.scss'
//app 入口文件

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {
//配置项列表
  config = {
    pages: [
      'pages/index/index',
      'pages/mine/mine',
      "pages/dialog/index",
      "pages/user/index"
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar:{
        list:[{
          "pagePath": "pages/index/index",
          "iconPath": "public/imgs/tab/tab1.png",
          "selectedIconPath": "public/imgs/tab/tab1-active.png",
          text:'首页',
        }, {
            "pagePath": "pages/dialog/index",
            "iconPath": "public/imgs/tab/tab2.png",
            "selectedIconPath": "public/imgs/tab/tab2-active.png",
            text: '我们'
          },
          {
            "pagePath": "pages/user/index",
            "iconPath": "public/imgs/tab/tab3.png",
            "selectedIconPath": "public/imgs/tab/tab3-active.png",
            "text": "我们"
          }]
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
