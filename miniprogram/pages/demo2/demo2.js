// miniprogram/pages/demo2/demo2.js
Page({

  /**
   * Page initial data
   */
  data: {

  },

  formSubmit(e) {
    const { formId } = e.detail;
    wx.request({
      // Use your local IP address if you're just testing
      url: `http://localhost:8888/Aliroof/sendEmail.php`,
      method: 'POST',
      header: {
        'content-type': 'application/json'
      },
      data: {
        // form_id: formId,
        // Use the openid saved earlier
        // touser: app.globalData.openid
      },
      success(res) {
        // Message should be sent, check your messages
      }
    });
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

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