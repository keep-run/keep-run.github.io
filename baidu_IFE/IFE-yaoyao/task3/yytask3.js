/**
 * Created by wang on 2017/3/7.
 */

/*返回指定ID的节点*/
function $(id) {
    return document.getElementById(id);
}

/*对下拉框的操作，做出相应的变化*/
function operate(city, data) {
    var children = city.childNodes;
    var chosen = '';
    for (var i = 0; i < children.length; i++) {
        if (children[i].selected) {
            chosen = children[i].getAttribute('id');
            break;
        }
    }
    $("college").innerHTML = data[chosen].map(function (item) {
        return "<option>" + item + "</option>"
    }).join('');
}

/*初始化，绑定函数*/
function init() {
    var data = {
        beijing: ["北京大学", "清华大学", "中国人民大学", "北京师范大学"],
        shanghai: ["上海交通大学", "复旦大学", "上海大学"],
        wuhan: ["武汉大学", "华中科技大学", "华中师范大学", "武汉理工大学"],
        xian: ["西安交通大学", "西北工业大学", "西安电子科技大学"],
        chongqing: ["重庆大学", "重庆邮电大学", "西南大学"]
    };
    var city = $("city");
    $('inSchool').onclick = function () {
        $('inSchoolOption').style.display = 'block';
        $('outSchoolOption').style.display = 'none';
    };
    $('outSchool').onclick = function () {
        $('inSchoolOption').style.display = 'none';
        $('outSchoolOption').style.display = 'block';
    };
    city.onchange = function () {
        operate(city, data);
    }
}
window.onload = init;