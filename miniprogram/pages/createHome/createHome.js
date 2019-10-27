// miniprogram/pages/createHome/createHome.js

var sendEmail = require('sendEmail.js')


Page({

  /**
   * Page initial data
   */
  data: {

    active: 2

  },

  onClick(event) {
    wx.showToast({
      title: `点击标签 ${event.detail.index + 1}`,
      icon: 'none'
    });
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

  },

  submitHome: function(event){



    wx.cloud.callFunction({
      name: "saveHome",
      data: {
        content: event.detail.value.content
      },
      success: (res) => {
        // wx.navigateTo({
        //   url: '/pages/index/index'
        // })
        console.log("Demo")
      }
    });



    // sendEmail.sendEmail()



  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  send: function(){
    console.log("buttonEmail")


    wx.cloud.callFunction({
      name: "demo",
      data: {
        // content: event.detail.value.content
      },
      success: (res) => {
        // wx.navigateTo({
        //   url: '/pages/index/index'
        // })
        console.log("DemoEmail")
      }
    });
  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})