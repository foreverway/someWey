Component({

  //页面将tabBar中的selected记录值更改，达到tabBar页面跳转图标更换
  pageLifetimes: {
    show() {
      this.getTabBar().setData({
        selected:0
      });
    }
  },
})