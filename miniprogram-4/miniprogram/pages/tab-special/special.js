Component({
  pageLifetimes: {
    show() {
      this.getTabBar().setData({
        selected: 1
      });
    }
  },
  attached:function(){
  }
})