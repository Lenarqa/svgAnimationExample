var item = document.getElementById("block")
// var svgItemTitle = document.querySelectorAll('.svg-item-title');
// console.log(item)
// console.log(svgItemTitle)


svgItemTitle.onmousemove = function(e){
    console.log("hello")
    item.style.position = 'fixed';
    item.style.left = e.clientX + -item.width/2 + 'px';
    item.style.top = e.clientY + -item.height/2 + 'px';
}