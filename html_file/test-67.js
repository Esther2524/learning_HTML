window.onload = function(){
    // 传入parent = "container";content="box"
    func1("container","box");
}


// 获得屏幕有多少图片
//container就是父集parent，将parent下的内容全部取出，也就是所有的box
function func1(parent,content){
    // 实际上是通过id"container"获得x
    //注意这里的x不是数值，也不是数组，而是对象object
    //object没有不是具体的值，它有value和length，只有在它后面.value才能得到具体的值
    var x = document.getElementById(parent);
    var z = func2(x,content);
    // 打印内容
    console.log(z);
}


//通过父集，得到子集空间所有的元素
function func2(parent,content){
    //储存在一个数组中
    var y = [];
    var allContent = parent.getElementsByTagName("*");

    //通过for循环将子集空间内的元素全部放入数组y中
    for(var i = 0;i<allContent.length;i++){
        if(allContent[i].className == content){
            y.push(allContent[i]);
        }
    }
    return y;
}

