/**
 * Created by wang on 2017/3/21.
 */
function $(id) {
    return document.getElementById(id);
}

/*方块向上走*/
function goUp(box, headTop) {
    if (headTop > 41) {
        box.style.top = (headTop - 40) + 'px';
    }
}

/*方块向下走*/
function goDown(box, bodyTop) {
    if (bodyTop < 401) {
        box.style.top = (bodyTop + 40) + 'px';
    }
}

/*方块向左走*/
function goLeft(box, headLeft) {
    if (headLeft > 41) {
        box.style.left = (headLeft - 40) + 'px';
    }
}

/*方块向右走*/
function goRight(box, bodyLeft) {
    if (bodyLeft < 401) {
        box.style.left = (bodyLeft + 40) + 'px';
    }
}

/*旋转*/
function turn(box, degree) {
    var deg = 0;
    var temp = box.style.transform;
    if (temp) {
        deg = +temp.substring(7, temp.length - 4);
    }
    deg = (deg + degree) % 360;
    box.style.transform = ('rotate(' + deg + 'deg)');
}


/*监听输入指令，做出相应的响应*/
function orderBox(order, box, boxHead, boxBody) {
    /*getBoundingClientRect()
     这个方法返回一个矩形对象，包含四个属性：left、top、right和bottom。
     分别表示元素各边与页面上边和左边的距离。*/
    var headTop = boxHead.getBoundingClientRect().top;
    var bodyTop = boxBody.getBoundingClientRect().top;
    var headLeft = boxHead.getBoundingClientRect().left;
    var bodyLeft = boxBody.getBoundingClientRect().left;

    switch (order.value) {
        case 'GO':
            if (headTop < bodyTop) {
                goUp(box, headTop);
            } else if (headTop > bodyTop) {
                goDown(box, bodyTop)
            } else if (headLeft < bodyLeft) {
                goLeft(box, headLeft)
            } else {
                goRight(box, bodyLeft)
            }
            break;
        case 'TUN LEF':
            turn(box, 270);
            break;
        case 'TUN RIG':
            turn(box, 90);
            break;
        case 'TUN BAC':
            turn(box, 180);
            break;
        default :
            break;
    }
}

function init() {
    var order = $('order');
    var box = $('box');
    var boxHead = $('boxHead');
    var boxBody = $('boxBody');
    $('btn').onclick = function () {
        orderBox(order, box, boxHead, boxBody);
    }
}

window.onload = init;
