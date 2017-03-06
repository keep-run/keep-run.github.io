/**
 * Created by wang on 2017/3/6.
 */
/*输入格式正确*/
function rightInput(input, result, str) {
    result.style.color = "#5EBB46";
    result.innerHTML = str;
    input.style.borderColor = "#5EBB46";
}

/*输入格式错误*/
function wrongInput(input, result, str) {
    result.style.color = "red";
    result.innerHTML = str;
    input.style.borderColor = "red";
}

/*输入为空*/
function noInput(input, result, str) {
    result.style.color = "red";
    result.innerHTML = str;
    input.style.borderColor = "red";
}


/*获得焦点时，先清除上次校验结果所做的改变*/
function reset(input, result, str) {
    result.style.color = "black";
    result.innerText = str;
    input.style.borderColor = "gray";
}

/*取得用于显示规则以及校验结果的span*/
function getSpan() {
    return document.getElementsByClassName("result")
}

/*名称获得焦点*/
function nameFocus(name) {
    reset(name, getSpan()[0], "必填，长度为4-16字符")
}

/*名称失去焦点，校验输入内容并显示校验结果*/
function nameBlur(name) {
    var flag = false;//标记是否校验结果
    var result = getSpan()[0];
    var data = name.value;
    var length = 0;
    var str = '';
    //匹配中文字符和汉字
    var reg = /[\u4E00-\u9FA5\u3002\uff1b\uff0c\uff1a\u201c\u201d\uff08\uff09\u3001\uff1f\u300a\u300b\u2019\u2018]/;
    if (data.trim()) {
        for (var i = 0; i < data.length; i++) {
            if (reg.test(data.charAt(i))) {
                length += 2;
            } else {
                length += 1;
            }
        }
    }
    if ((length >= 4) && (length <= 16)) {
        str = "格式正确";
        rightInput(name, result, str);
        flag = true;
    } else if (length == 0) {
        str = "名称不能为空";
        noInput(name, result, str);
    } else {
        str = "格式错误";
        wrongInput(name, result, str);
    }
    return flag;
}

/*密码框获得焦点*/
function passwordFocus(password) {
    reset(password, getSpan()[1], "必填，6-16位字母或数字或两者的组合");
}

/*密码框失去焦点*/
function passwordBlur(password) {
    var flag1 = false;
    var value = '';
    var data = password.value;
    console.log(data);
    var reg = /^[0-9a-zA-z]{6,16}$/;
    if (reg.test(data)) {
        rightInput(password, getSpan()[1], "密码可用");
        flag1 = true;
        value = data;
    } else if (data.trim().length == 0) {
        noInput(password, getSpan()[1], "密码不能为空");
    } else {
        wrongInput(password, getSpan()[1], "密码格式不对");
    }
    return [flag1, value];
}

/*确认密码框获得焦点*/
function checkFocus(checkPassword) {
    reset(checkPassword, getSpan()[2], "必填，与密码一致");
}

/*确认密码框失去焦点*/
function checkBlur(checkPassword, password) {
    var flag2 = false;
    var check = checkPassword.value;
    if (check.trim().length == 0) {
        noInput(checkPassword, getSpan()[2], "确认密码不能为空");
    } else if (check === password) {
        rightInput(checkPassword, getSpan()[2], "与密码一致 ");
        flag2 = true;
    } else {
        wrongInput(checkPassword, getSpan()[2], "与密码不一致 ");
    }
    return flag2;
}

/*邮箱获得焦点*/
function emailFocus(email) {
    reset(email, getSpan()[3], "必填");
}

/*邮箱失去焦点*/
function emailBlur(email) {
    var flag3 = false;
    var data = email.value;
    var reg = /^[a-zA-Z0-9]+([-_.][A-Za-z0-9]+)*@([A-Za-z0-9]+[-.])+[0-9A-Za-z]{2,5}$/;
    if (reg.test(data)) {
        rightInput(email, getSpan()[3], "邮箱格式正确");
        flag3 = true;
    } else if (data.trim().length == 0) {
        noInput(email, getSpan()[3], "邮箱不能为空");
    } else {
        wrongInput(email, getSpan()[3], "邮箱格式错误");
    }
    return flag3;
}

/*手机框获得焦点*/
function phoneFocus(phone) {
    reset(phone, getSpan()[4], "必填");
}

/*手机框失去焦点*/
function phoneBlur(phone) {
    var reg = /^1[34578]\d{9}$/;
    var data = phone.value;
    var flag4 = false;
    if (reg.test(data)) {
        rightInput(phone, getSpan()[4], "手机号有效");
        flag4 = true;
    } else if (data.trim().length == 0) {
        noInput(phone, getSpan()[4], "手机号不能为空")
    } else {
        wrongInput(phone, getSpan()[4], "手机号无效");
    }
    return flag4;
}

/*初始化，绑定事件*/
function init() {
    /*记录校验结果*/
    var flag1 = false;
    var flag2 = false;
    var flag3 = false;
    var flag4 = false;
    var flag5 = false;
    var value = '';
    var name = document.getElementById("name");
    var password = document.getElementById("password");
    var checkPassword = document.getElementById("checkPassword");
    var email = document.getElementById("email");
    var phone = document.getElementById("phone");
    var btn = document.getElementById("submit");
    name.onfocus = function () {
        nameFocus(name);
    };
    name.onblur = function () {
        flag1 = nameBlur(name)
    };
    password.onfocus = function () {
        passwordFocus(password);
    };
    password.onblur = function () {
        flag2 = passwordBlur(password)[0];
        value = passwordBlur(password)[1];
    };
    checkPassword.onfocus = function () {
        checkFocus(checkPassword);
    };
    checkPassword.onblur = function () {
        flag3 = checkBlur(checkPassword, value)
    };
    email.onfocus = function () {
        emailFocus(email);
    };
    email.onblur = function () {
        flag4 = emailBlur(email);
    };
    phone.onfocus = function () {
        phoneFocus(phone);
    };
    phone.onblur = function () {
        flag5 = phoneBlur(phone);
    };
    btn.onclick = function () {
        if (flag1 && flag2 && flag3 && flag4 && flag5) {
            alert("提交成功");
            return true
        } else {
            alert("提交失败");
            return false
        }
    }
}

window.onload = init;