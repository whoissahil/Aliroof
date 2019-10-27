// miniprogram/pages/homeInfo/homeInfo.js
Page({

  /**
   * Page initial data
   */
  data: {
    // homeInfo: homeInfo
    imgUrls: [
      'https://iamsahilsharma.com/aliroof/img/1.jpg',
      'https://iamsahilsharma.com/aliroof/img/2.jpg',
      'https://iamsahilsharma.com/aliroof/img/3.jpg',
      'https://iamsahilsharma.com/aliroof/img/4.jpg',
      'https://iamsahilsharma.com/aliroof/img/5.jpg',
      'https://iamsahilsharma.com/aliroof/img/6.jpg'
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000
  },

  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  },

  contactAgent: function(){
    wx.makePhoneCall({
      phoneNumber: '+971503682308',
    })
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    // console.log(options.idHome)
    this.setData({
      title: options.idHome
      // hID: options.homeInfoID
    })
    console.log(options.idHome + "HERE")

    wx.cloud.callFunction({
      name: "getHomesInfo",
      data: {
        id: options.idHome
      },
      success: (res) => {
        console.log(res);
        this.setData({
          homeInfo: res.result.data
        })
      }
    })
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