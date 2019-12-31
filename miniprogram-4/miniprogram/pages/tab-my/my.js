Component({
  pageLifetimes: {
    show() {
      this.getTabBar().setData({
        selected: 3
      });
    }
  },
  attached:function(){
  }
})