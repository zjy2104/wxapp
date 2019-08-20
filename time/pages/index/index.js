const util = require('../../utils/util.js')
var intt;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hours: '0' + 0,   // 时
    minute: '0' + 0,   // 分
    second: '0' + 0,  // 秒
    millisecond: 0,
    h:0,
    m:0,
    s:0,
    isRuning:false,
    complete:false,
    stop_time:false,
  },
  onLoad: function () {

  },
  start: function () 
  {
    var that=this;
      //停止（暂停）
      clearInterval(intt);
      //时间重置
      that.setData({
        hour: that.data.hour,
        minute: that.data.minute,
        second: that.data.second,
        isRuning:true,
      })
      intt = setInterval(function () { that.timer() }, 50);
    
    
    
  },
  stop: function () {
    clearInterval(intt);
  },
  //停止
  reset: function () {
    var that = this
    clearInterval(intt);
    that.setData({
      hour: '0' + 0,
      minute: '0' + 0,
      second: '0' + 0,
      h:0,
      m:0,
      s:0,
      millisecond: 0,
    })
  },
  timer: function () {
    var that = this;
    var s=that.data.s;
    var m=that.data.m;
    var h=that.data.h;
    console.log(that.data.millisecond)
    that.setData({
      millisecond: that.data.millisecond + 5
    })
    if (that.data.millisecond >= 100) {
      that.setData({
        millisecond: 0,
        s: that.data.s + 1,
        })
      if(that.data.s <=9) {
        that.setData({
          second: '0' + that.data.s
        })
        
      }
      else {
        that.setData({
          second: that.data.s
        })
      
      }
    }
    if (that.data.second >= 60) {
      that.setData({
        second: '0'+0,
        s:0,
        m: that.data.m + 1,
       })
      if (that.data.m <10) {
        that.setData({
          minute: '0' + that.data.m
        })
        
      }
      else {
        that.setData({
          minute: that.data.m
        })
        
      }
    }

    if (that.data.minute >= 60) {
      that.setData({
        minute: '0'+0,
        m:0,
        hour: that.data.h + 1
      })
      if(that.data.hour<10){
        that.setData({
          hour:that.data.h+1,
        })
      }
      else{
        that.setData({
          hour:that.data.h
        })
      }
    }
    that.setData({
      timecount: that.data.hour + ":" + that.data.minute + ":" + that.data.second + ":" + that.data.millisecond
    })
  }, 
  pageback: function(){
    var that=this;
    clearInterval(intt);
    that.setData({
      isRuning:false,
      hour:'0'+0,
      minute: '0' + 0,
      second: '0' + 0,
      h: 0,
      m: 0,
      s: 0,
      millisecond:0,
    })

  }
})