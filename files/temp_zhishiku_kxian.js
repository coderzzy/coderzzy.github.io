// pages/knowledge/k_chart.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    activeCategoryIndex: 0,
    activeKIndex: [0, 0, 0], // 每个 category 有独立的 KIndex
    currentContent: {},
    // 参考: 
    // https://wiki.mbalib.com/wiki/%E9%94%A4%E5%BD%A2%E7%BA%BF
    // https://edu.fx678.com/baike/info/300061
    // https://blog.tangly1024.com/article/price-action-01-k-line
    // https://www.mitrade.com/cn/insights/others/technical-analysis/candlestick-patterns
    categoryList: [
      {
        categoryName: "中性/整理",
        kList: [
          {
            kName: '十字星型',
            kContent: {
              "image": "https://files.mdnice.com/user/44560/09a96f12-4286-4090-a0f7-a438f1137d68.png",
              "feature": "",
              "analysis": ""
            }
          },
          {
            kName: '纺锤线型',
            kContent: {
              "image": "https://files.mdnice.com/user/44560/ed91bfad-524b-4427-b960-3c4f08e215bf.png",
              "feature": "",
              "analysis": ""
            }
          },
          {
            kName: '上升三法',
            kContent: {
              "image": "https://files.mdnice.com/user/44560/e9dc6de6-f954-44ec-857d-c565e238c60c.png",
              "feature": "",
              "analysis": ""
            }
          },
          {
            kName: '下降三法',
            kContent: {
              "image": "https://files.mdnice.com/user/44560/0dac54c0-7198-4da9-a741-00841fae6654.png",
              "feature": "",
              "analysis": ""
            }
          },
        ]
      },
      {
        categoryName: "看涨",
        kList: [
          {
            kName: '锤形线',
            kContent: {
              "image": "https://files.mdnice.com/user/44560/b7ccf5a3-bee8-47ca-bb44-ddf6a862a0cf.png",
              "feature": "1、出现在下降途中，小实体在K线的顶部。\n2、下影线的长度一般至少是实体长度的2～3倍。\n3、上影线非常短，甚至没有。",
              "analysis": "1、通常出现在下降趋势或震荡行情的底部，表明空头曾经占据主导，但尾盘多头成功收复了大部分失地。\n2、一般是反转信号，但需要观察是否有确认信号，比如第二天价格继续上涨以证实反转。\n3、如果伴随成交量放大，则垂形线的可靠性更强。"
            }
          },
          {
            kName: '倒垂形',
            kContent: {
              "image": "https://files.mdnice.com/user/44560/dcdab225-45ab-4cfc-aed5-4fc54d70af9b.png",
              "feature": "",
              "analysis": ""
            }
          },
          {
            kName: '看涨吞没',
            kContent: {
              "image": "https://files.mdnice.com/user/44560/5dc25d0f-8959-4db7-ab62-d645a86a3662.png",
              "feature": "",
              "analysis": ""
            }
          },
          {
            kName: '刺穿线',
            kContent: {
              "image": "https://files.mdnice.com/user/44560/bf0ef3f8-54f4-45e5-868b-0a8f73ac6271.png",
              "feature": "",
              "analysis": ""
            }
          },
          {
            kName: '早晨之星',
            kContent: {
              "image": "https://files.mdnice.com/user/44560/c63ae51e-7277-4613-8438-971106807221.png",
              "feature": "",
              "analysis": ""
            }
          },
          {
            kName: '白色三兵',
            kContent: {
              "image": "https://files.mdnice.com/user/44560/5c72953b-de70-4d73-beb9-bdb7d09d8c88.png",
              "feature": "",
              "analysis": ""
            }
          },
          {
            kName: '',
            kContent: {
              "image": "",
              "feature": "",
              "analysis": ""
            }
          },
        ]
      },
      {
        categoryName: "看跌",
        kList: [
          {
            kName: '流星',
            kContent: {
              "image": "https://files.mdnice.com/user/44560/5b9134d5-e19e-4303-9989-bf830e1b036f.png",
              "feature": "",
              "analysis": ""
            }
          },
          {
            kName: '上吊线',
            kContent: {
              "image": "https://files.mdnice.com/user/44560/4c1d8d2f-f3b0-44ef-9394-ca49985f66f0.png",
              "feature": "",
              "analysis": ""
            }
          },
          {
            kName: '看跌吞没',
            kContent: {
              "image": "https://files.mdnice.com/user/44560/1f73d8c8-8ab1-4602-b62b-c50a1de4f53b.png",
              "feature": "",
              "analysis": ""
            }
          },
          {
            kName: '乌云盖顶',
            kContent: {
              "image": "https://files.mdnice.com/user/44560/96965626-3692-4a99-b976-0d5287594dfb.png",
              "feature": "",
              "analysis": ""
            }
          },
          {
            kName: '黄昏之星',
            kContent: {
              "image": "https://files.mdnice.com/user/44560/b9b98ac3-7094-45be-8f9f-48207fce0506.png",
              "feature": "",
              "analysis": ""
            }
          },
          {
            kName: '三只乌鸦',
            kContent: {
              "image": "https://files.mdnice.com/user/44560/254f8e4e-0df3-4a8d-817b-630b53a6e99d.png",
              "feature": "",
              "analysis": ""
            }
          },
          {
            kName: '',
            kContent: {
              "image": "",
              "feature": "",
              "analysis": ""
            }
          },
        ]
      },
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this._updateNewContent();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {
    return {
      title: "K线图整理",
      imageUrl: "/images/knowledge/k_chart.jpg"
    };
  },

  // tab内容切换相关
  _updateNewContent() {
    const { categoryList, activeCategoryIndex, activeKIndex } = this.data;
    const newContent = categoryList[activeCategoryIndex].kList[activeKIndex[activeCategoryIndex]].kContent;
    this.setData({ currentContent: newContent })
  },

  onCategoryChange(event) {
    // console.log(event.detail);
    this.setData({ activeCategoryIndex: event.detail.index });
    this._updateNewContent();
  },

  onKChange(event) {
    // console.log(event.detail);
    const { activeCategoryIndex, activeKIndex } = this.data;
    activeKIndex[activeCategoryIndex] = event.detail;
    this.setData({ activeKIndex });
    this._updateNewContent();
  },

  // 图片相关
  preview(event) {
    // console.log(event.target.dataset.url);
    wx.previewImage({
      current: event.target.dataset.url, // 当前显示图片的http链接
      urls: [event.target.dataset.url] // 需要预览的图片http链接列表
    })
  }
})