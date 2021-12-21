/*****数据加载到页面*****/
let ulEle = document.querySelector('#listb')
async function list() {
    let res = await axios.get({ url: 'http://localhost:53000/data2' })
    let html = ''
    res.forEach(ele => {
        html += `<li class="item" onclick="toDetail(${ele.id})">
            <img src="${ele.src}" class="pic" alt="">
            <h3 class="item-name">${ele.name}</h3>
            <p class="item-info">${ele.info}</p>
            <p class="item-price">
                <span class="present-price">${ele.price}</span>
                <span class="primary-price">${ele.primary}</span>
            </p>
        </li>`
    });
    ulEle.innerHTML += html
}
list()

function toDetail(id) {
    location.href = '../pages/detailPage.html?=id' + id
}