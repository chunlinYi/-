/**
 * 数量加一操作
 */
function onPlus() {
    var plusEles = document.querySelectorAll('.plus')
    for (var i = 0; i < plusEles.length; i++) {
        plusEles[i].onclick = function() {
            var amountEle = this.previousElementSibling
            var num = amountEle.value //获取数量值
            num++ //加一
            amountEle.value = num //设置数量给元素节点
            var priceEle = this.parentElement.previousElementSibling
            var price = priceEle.innerHTML
            price = price.substring(0)
            var totalPrice = price * num //隐式转换
            var totalPriceEle = this.parentElement.nextElementSibling
            totalPriceEle.innerHTML = totalPrice.toFixed(2)
            var minusBtn = this.previousElementSibling.previousElementSibling
            minusBtn.removeAttribute('disabled')
            allTotalPrice()
        }
    }
}

/**
 * 数量减一
 */
function onMinus() {
    var minusEles = document.querySelectorAll('.minus')
    for (var i = 0; i < minusEles.length; i++) {
        minusEles[i].onclick = function() {
            var amountEle = this.nextElementSibling
            var num = amountEle.value
            if (--num < 0) {
                num = 0
                this.setAttribute('disabled', true)
            }
            amountEle.value = num
            var priceEle = this.parentElement.previousElementSibling
            var price = priceEle.innerHTML
            price = price.substring(0)
            console.log(price)
            var totalPrice = price * num
            var totalPriceEle = this.parentElement.nextElementSibling
            totalPriceEle.innerHTML = totalPrice.toFixed(2)
            allTotalPrice()
        }
    }
}

/*****全选*******/
function checkboxAll() {
    //1. 获取操作元素节点,全选框和所有复选框
    var checkboxAllEle = document.querySelector('.checkbox-all')
    var checkboxItems = document.querySelectorAll('.checkbox-item')
    checkboxAllEle.onclick = function() {
        //全选框选中
        if (checkboxAllEle.checked == true) {
            //  所有复选框全部选中
            for (var i = 0; i < checkboxItems.length; i++) {
                checkboxItems[i].checked = true
            }
        } else {
            //  所有复选框全部选中
            for (var i = 0; i < checkboxItems.length; i++) {
                checkboxItems[i].checked = false
            }
        }
    }
}

function checkboxItem() {
    //1. 获取操作元素节点,全选框和所有复选框
    var checkboxAllEle = document.querySelector('.checkbox-all')
    var checkboxItems = document.querySelectorAll('.checkbox-item')

    for (var i = 0; i < checkboxItems.length; i++) {
        //给每个复选框绑定事件
        checkboxItems[i].onclick = function() {
            var isCheckboxAll = true //默认值true表示全选框选中
            for (var i = 0; i < checkboxItems.length; i++) {
                if (checkboxItems[i].checked == false) {
                    //未选中
                    isCheckboxAll = false
                    break
                }
            }
            //根据isCheckboxAll设置全选框是否选中
            if (isCheckboxAll == true) {
                checkboxAllEle.checked = true
            } else {
                checkboxAllEle.checked = false
            }
        }
    }
}
/*****商品数量*******/
function goodsNum() {

}




/**
 * 计算所有商品总价
 */
function allTotalPrice() {
    var singleprices = document.querySelectorAll('.singleprice')
    var sum = 0
    for (var i = 0; i < singleprices.length; i++) {
        var singlePrice = singleprices[i].innerHTML
        singlePrice = singlePrice.substring(0)
        singlePrice = Number(singlePrice)
        sum += singlePrice
    }

    var totalPriceEle = document.querySelector('#totalPrice')
    totalPriceEle.innerHTML = `￥${sum.toFixed(2)}`
}


onPlus()
onMinus()
checkboxAll()
checkboxItem()
allTotalPrice()