
//获取构建首页商品数据
export function homeGoodsData(type) {
  let imgUlr = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598852177527&di=c499df3133dfac5f6c916020bcf81956&imgtype=0&src=http%3A%2F%2Fattach.bbs.miui.com%2Fforum%2F201105%2F17%2F113554rnu40q7nbgnn3lgq.jpg';
  if (type === 'pop') {
    imgUlr = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598852177527&di=c499df3133dfac5f6c916020bcf81956&imgtype=0&src=http%3A%2F%2Fattach.bbs.miui.com%2Fforum%2F201105%2F17%2F113554rnu40q7nbgnn3lgq.jpg';
  } else if (type === 'news') {
    imgUlr = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598852288893&di=309b2d5f8d49d0ab114a5f3a4a6a90aa&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201503%2F11%2F20150311075933_kxwYr.jpeg';
  } else if (type === 'sell') {
    imgUlr = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598852319084&di=40f68fafdf0bc9d49d3cce82fa1975ae&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn10113%2F505%2Fw580h725%2F20190628%2Fc9e2-hyzpvir8533150.jpg';
  }
  let dataList = []
  for (let i = 0; i < 30; i++) {
    let tempData = {
      imga: imgUlr,
      price:'￥:10'+i,
      collect:'20'+i,
      title: '这个标题内容'+type + '--' + i,
      iid:type+i+'-iid'
    }
    dataList.push(tempData)
  }
  return new Promise(resolve => {
        resolve(dataList);
  })
}

//构建商品信息
export function getGoodDetail(iid){
  let goodInfo = {
    goodTitle:'这个是商品的名称，2020年抖音爆款，很牛逼的',
    oldPrice:'998',
    newPrice:'9.9',
    discount:'满200减20',
    sellCount:'销量 20098',
    collect:'收藏50人',
    send:'36小时内发货'
  }
  return new Promise(resolve => {
    resolve(goodInfo);
  })
}

//构建商品的详情数据--图片
export function getGoodDetailImgs(iid){
  let imgUlr = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598852319084&di=40f68fafdf0bc9d49d3cce82fa1975ae&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn10113%2F505%2Fw580h725%2F20190628%2Fc9e2-hyzpvir8533150.jpg';
  let goodImgs =[];
  for (let i=0;i<10;i++){
    goodImgs.push(imgUlr);
  }
  let goodDetailImgInfo={
    descr:'穿着效果，鸡你太美，你太美',
    list:goodImgs
  }

  return new Promise(resolve => {
    resolve(goodDetailImgInfo)
  })
}
