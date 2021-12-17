    //表单输入框
    const userNameInput = document.querySelector('input[name="username"]')
    const passwordInput = document.querySelector('input[name="password"]')
        //提示信息
    const userNameP = document.querySelector('.usernamemsg')
    const passwordP = document.querySelector('.pswmsg')
        //登录按钮
    const loginBtn = document.querySelector('#login')

    //1.用户名非空验证
    const checkNullUserName = () => {
        if (userNameInput.value == '') {
            userNameP.innerHTML = '用户名不能为空!'
            return false
        } else {
            userNameP.innerHTML = ''
            return true
        }
    }

    //2.密码非空验证
    const checkNullPassword = () => {
            if (passwordInput.value == '') {
                passwordP.innerHTML = '密码不能为空!'
                return false
            } else {
                passwordP.innerHTML = ''
                return true
            }
        }
        // 密码强度
    const checkPassword = () => {
        // 密码必须是大写字母开头,是字母和数字组合，至少8位
        let reg = /[A-Z][a-zA-Z0-9]{7,}/
        if (!reg.test(passwordInput.value)) {
            passwordP.innerHTML = '密码必须是大写字母开头,是字母和数字组合，至少8位'
            return false
        } else {
            passwordP.innerHTML = ''
            return true
        }
    }

    loginBtn.onclick = function() {
        //1.非空验证
        let isCheckNullUserName = checkNullUserName()
        let isCheckNullPassword = checkNullPassword()
        if (!isCheckNullUserName || !isCheckNullPassword) {
            return
        }

        //2.密码强度
        let isCheckPassword = checkPassword()
        if (!isCheckPassword) {
            return
        }

        //3.注册成功
        alert('注册成功')
    }

    //用户名
    userNameInput.onblur = function() {
        checkNullUserName()
    }

    passwordInput.onblur = function() {
        let isCheckNullPassword = checkNullPassword()
            //非空验证没通过，不执行后面密码强度验证
        if (!isCheckNullPassword) {
            return
        }
        //密码强度验证
        checkPassword()
    }