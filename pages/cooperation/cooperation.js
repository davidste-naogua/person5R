// pages/cooperation/cooperation.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    copText:'',
    text2:'',
    // backgroundImage:'../assets/img/Morgana.png'
  },

  whichCop:function(){
    let that=this;
    let text1=that.data.copText
    switch(text1){
      case "sun":{
        this.setData({text2:'sun222'})
        // return "../assets/img/Morgana.png"
      }
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.setData({copText:options.text})
    this.whichCop()
    
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