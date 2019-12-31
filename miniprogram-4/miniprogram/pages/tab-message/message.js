Component({
  pageLifetimes: {
    show() {
      this.getTabBar().setData({
        selected:2
      });
    }
  },
  attached:function(){
  }
})