 //var left = ball.offsetLeft; // 相对父元素的左边偏移量，只读
//var top = ball.offsetTop; // 相对父元素的右边偏移量，只读

// offsetWidth 和 offsetHight 用于检测盒子自身的宽高+padding+border，不包括margin
// ball.offsetWidth : clientWidth + padding + border
// ball.offsetHeight : clientHeight + padding + border

// style.left 只能获取行内式，如果没有，则返回""（意思是，返回空

leftVal = 0;
topVal = 0;
dirx = 1;
diry = 1;
speed = 10;

function anim(obj){

    //alert(obj.innerHTML)
    var ball = document.getElementById("ball");
    
    var w = ball.clientWidth; // 自身宽度
    var h = ball.clientHeight; // 自身高度

    leftVal = ball.offsetLeft + w / 2;
    topVal = ball.offsetTop + h / 2

    setInterval(function () {
           
        //console.log(w, h, top)

        ball.style.left = leftVal + "px";
        ball.style.top = topVal + "px";

        if(ball.offsetLeft + w >= 400){
            dirx = -1;
            ball.style.backgroundColor = "#ff0000";
        }

        if(ball.offsetLeft <= 0){
            dirx = 1;
            ball.style.backgroundColor = "#00ff00";
        }
        
        if(ball.offsetTop + h >= 400){
            diry = -1;
            ball.style.backgroundColor = "#ff0000";
        }
         
        if(ball.offsetTop <= 0){
            diry = 1;
            ball.style.backgroundColor = "#00ff00";
        }

        leftVal += dirx * speed;
        topVal += diry * speed;

    },500);
}