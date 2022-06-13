window.onload = function(){
    // 传入parent = "container";content="box"
    func1("container","box");
}


// 获得屏幕有多少图片
//container就是父集parent，将parent下的内容全部取出，也就是需要取出所有的box
function func1(parent,content){

    //实际上是通过id"container"获得x
    //注意这里的x不是数值，也不是数组，而是得到a element object（元素对象），这个对象是id为container的div标签里面的所有元素
    //注:元素是内容，标签是<div>
    var x = document.getElementById(parent);

    //将通过id为container获得的element object，代入func2()中，作为parent参数
    var z = func2(x,content);

    //最后几步，打印内容
    //因为在func2()中最后return y，所以z就是返回的y值,也就是循环
    console.log(z);

    //得到图片的宽度,因为每张图片的宽度是一样的，所以随便选一张图片都可以，这里选第一张图片
    //offsetWidth 可见宽度
    var imgWidth = content[0].offsetWidth;
    //屏幕每行承载的图片的具体个数 document.documentElement 得到屏幕的宽度
    //Math.floor()是为了取整数
    var a = Math.floor(document.documentElement.clientWidth / imgWidth);
    //更改父集div的样式,宽度变为每个图片✖️可承载的数量，居中（这个没有实现
    x.style.cssText = "width:" + imgWidth*a + "px;margin:0 auto";
} 


//通过父集，得到子集空间所有的元素
//func2()中的parent就是x,也就是id为container的div标签里面包括的所有内容，也就是全部的子集的内容
function func2(parent,content){
    //定义一个数组,用来储存数据
    var y = [];

    //*表示所有的元素element
    //parent是x，也就是一个element object,
    //getElementsByTagName:获得x里面的所有元素，也就是获得「包裹在container这个div标签」中的所有元素
    //allContent是一个html collection (array-like)，所以可以说allContent是一个数组
    var allContent = parent.getElementsByTagName("*");

    //通过for循环将子集空间内的元素全部放入数组y中
    //length和className都是常见属性(property),它们都是关键词(keyword)
    for(var i = 0;i<allContent.length;i++){
        if(allContent[i].className == content){
            //通过push()对数组进行追加
            y.push(allContent[i]);
        }
    }
    return y;
}

