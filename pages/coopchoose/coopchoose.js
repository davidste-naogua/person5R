// pages/coopchoose/coopchoose.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listData: [
      { "content": "01", 'text':"sun" },
      { "content": "02", "text":"moon"  },
      { "content": "03", "text":"star"  },
      { "content": "04", "text":"emperor" },
      { "content": "05", "text":"empress" },
      { "content": "06", "text":"star"  },
      { "content": "07", "text":"fortune"  },
      { "content": "08", "text":"fortune"  },
      { "content": "09", "text":"fortune"  },
      { "content": "10", "text":"fortune"  },
      { "content": "11", 'text':"sun" },
      { "content": "12", "text":"moon"  },
      { "content": "13", "text":"star"  },
      { "content": "14", "text":"emperor" },
      { "content": "15", "text":"empress" },
      { "content": "16", "text":"star"  },
      { "content": "17", "text":"fortune"  },
      { "content": "18", "text":"fortune"  },
      { "content": "19", "text":"fortune"  },
      { "content": "20", "text":"fortune"  },
      { "content": "20", "text":"fortune"  },


    ],
    chooseData:'',
  },

  coopShow:function(e){
    let chooseIndex = e.currentTarget.dataset.index
    console.log(e.currentTarget.dataset.index)
    console.log(this.data.listData[chooseIndex].text)
    this.setData({chooseData:this.data.listData[chooseIndex].text})
    // wx.navigateTo({
    //   url: '../cooperation/cooperation?text=' + this.data.chooseData ,
    //   // url: '../cooperation/cooperation?text=' + this.data.chooseData+'$' ,
    // })
    wx.switchTab({
      url: '/pages/cooperation/cooperation?text=' + this.data.chooseData ,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("onload",options)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})