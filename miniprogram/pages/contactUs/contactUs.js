// miniprogram/pages/contactUs/contactUs.js
// import Toast from '../miniprogram_npm/vant-weapp/toast/toast';
// var Toast = require('/miniprogram_npm/vant-weapp/toast/toast');

import Notify from "../../miniprogram_npm/vant-weapp/notify/notify";

// const flag = false;
var flag = true;

Page({

  /**
   * Page initial data
   */
  data: {
    emailRules: {
      type: 'email',
      required: true
    },
    phoneRules: [{
      type: "string",
      required: true,
    }, {
      pattern: "^1(3|4|5|7|8)\\d{9}$",
      message: 'Phone not Valid'
    }],
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

  },

  linvalidate(e) {
    // flag = false;
    console.log('linvalidate', e)
    if (e.detail.isError == true) {
      // console.log('Error hai bhai')
      Notify(e.detail.errors[0].message);
      flag = true;
    } else {
      // console.log('Error nahi hai bhai')
      flag = false;
    }
  },

  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    // console.log('Name: ', e.detail.value.name)
    console.log('flag: ', flag)

    if (flag == true) {
      Notify("Plese fill the form properly!");
    } else {
    wx.cloud.callFunction({
      name: "contactUs",
      data: {
        name: e.detail.value.name,
        email: e.detail.value.email,
        phone: e.detail.value.phone,
        message: e.detail.value.message,

      },
      success: (res) => {
        // wx.navigateTo({
        //   url: '/pages/index/index'
        // })
        console.log("Done")
      }

    });
    }

  },
  formReset: function () {
    console.log('form发生了reset事件')
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