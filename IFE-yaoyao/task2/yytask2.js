/**
 * Created by wang on 2017/3/6.
 */
/*�����ʽ��ȷ*/
function rightInput(input, result, str) {
    result.style.color = "#5EBB46";
    result.innerHTML = str;
    input.style.borderColor = "#5EBB46";
}

/*�����ʽ����*/
function wrongInput(input, result, str) {
    result.style.color = "red";
    result.innerHTML = str;
    input.style.borderColor = "red";
}

/*����Ϊ��*/
function noInput(input, result, str) {
    result.style.color = "red";
    result.innerHTML = str;
    input.style.borderColor = "red";
}


/*��ý���ʱ��������ϴ�У���������ĸı�*/
function reset(input, result, str) {
    result.style.color = "black";
    result.innerText = str;
    input.style.borderColor = "gray";
}

/*ȡ��������ʾ�����Լ�У������span*/
function getSpan() {
    return document.getElementsByClassName("result")
}

/*���ƻ�ý���*/
function nameFocus(name) {
    reset(name, getSpan()[0], "�������Ϊ4-16�ַ�")
}

/*����ʧȥ���㣬У���������ݲ���ʾУ����*/
function nameBlur(name) {
    var flag = false;//����Ƿ�У����
    var result = getSpan()[0];
    var data = name.value;
    var length = 0;
    var str = '';
    //ƥ�������ַ��ͺ���
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
        str = "��ʽ��ȷ";
        rightInput(name, result, str);
        flag = true;
    } else if (length == 0) {
        str = "���Ʋ���Ϊ��";
        noInput(name, result, str);
    } else {
        str = "��ʽ����";
        wrongInput(name, result, str);
    }
    return flag;
}

/*������ý���*/
function passwordFocus(password) {
    reset(password, getSpan()[1], "���6-16λ��ĸ�����ֻ����ߵ����");
}

/*�����ʧȥ����*/
function passwordBlur(password) {
    var flag1 = false;
    var value = '';
    var data = password.value;
    console.log(data);
    var reg = /^[0-9a-zA-z]{6,16}$/;
    if (reg.test(data)) {
        rightInput(password, getSpan()[1], "�������");
        flag1 = true;
        value = data;
    } else if (data.trim().length == 0) {
        noInput(password, getSpan()[1], "���벻��Ϊ��");
    } else {
        wrongInput(password, getSpan()[1], "�����ʽ����");
    }
    return [flag1, value];
}

/*ȷ��������ý���*/
function checkFocus(checkPassword) {
    reset(checkPassword, getSpan()[2], "���������һ��");
}

/*ȷ�������ʧȥ����*/
function checkBlur(checkPassword, password) {
    var flag2 = false;
    var check = checkPassword.value;
    if (check.trim().length == 0) {
        noInput(checkPassword, getSpan()[2], "ȷ�����벻��Ϊ��");
    } else if (check === password) {
        rightInput(checkPassword, getSpan()[2], "������һ�� ");
        flag2 = true;
    } else {
        wrongInput(checkPassword, getSpan()[2], "�����벻һ�� ");
    }
    return flag2;
}

/*�����ý���*/
function emailFocus(email) {
    reset(email, getSpan()[3], "����");
}

/*����ʧȥ����*/
function emailBlur(email) {
    var flag3 = false;
    var data = email.value;
    var reg = /^[a-zA-Z0-9]+([-_.][A-Za-z0-9]+)*@([A-Za-z0-9]+[-.])+[0-9A-Za-z]{2,5}$/;
    if (reg.test(data)) {
        rightInput(email, getSpan()[3], "�����ʽ��ȷ");
        flag3 = true;
    } else if (data.trim().length == 0) {
        noInput(email, getSpan()[3], "���䲻��Ϊ��");
    } else {
        wrongInput(email, getSpan()[3], "�����ʽ����");
    }
    return flag3;
}

/*�ֻ����ý���*/
function phoneFocus(phone) {
    reset(phone, getSpan()[4], "����");
}

/*�ֻ���ʧȥ����*/
function phoneBlur(phone) {
    var reg = /^1[34578]\d{9}$/;
    var data = phone.value;
    var flag4 = false;
    if (reg.test(data)) {
        rightInput(phone, getSpan()[4], "�ֻ�����Ч");
        flag4 = true;
    } else if (data.trim().length == 0) {
        noInput(phone, getSpan()[4], "�ֻ��Ų���Ϊ��")
    } else {
        wrongInput(phone, getSpan()[4], "�ֻ�����Ч");
    }
    return flag4;
}

/*��ʼ�������¼�*/
function init() {
    /*��¼У����*/
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
            alert("�ύ�ɹ�");
            return true
        } else {
            alert("�ύʧ��");
            return false
        }
    }
}

window.onload = init;