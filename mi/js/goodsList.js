class Goods {
    constructor() {
        // 获取节点
        this.cont = document.querySelector('#cont')
            // 调用方法
        this.getGoods();

    }
    async getGoods() {
        // 发送请求,回去json数据
        let data = await axios.get({ url: '../js/goodsList.json', data: '' });
        // console.log(data);

        // 遍历追加到页面中
        let html = '';
        data.forEach(goods => {
            html += `<div class="box"><img src="${goods.src}" alt=""><p>${goods.name}</p><span class="goods_item_price" data-price-id="100004222715" style="">¥${goods.price}</span><a href="#none" id="InitCartUrl" class="btn-special1 btn-lg" onclick="Goods.addCart(${goods.id},1)">加入购物车</a></div>`;
        });

        // console.log(html);
        this.cont.innerHTML = html;
    }
}

new Goods;

{
    /* <li class="item">
    <img src="../images/手机5.webp" class="pic" alt="">
    <h3 class="item-name">小米11 Ultra</h3>
    <p class="item-info">1/1.12''GN2｜2K四微曲屏</p>
    <p class="item-price">
        <span class="present-price">5499元起</span>
        <span class="primary-price">5999元</span>
    </p>
    </li> */
}