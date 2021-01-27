// main.js
// 在這裡寫入你的JS邏輯
//Comment on JavaScript
//alert("Hello")
//jQuery => $
//jQuery("h1").text("New title")
//<h1></h1>

// Select class="navbar-toggler"
// function () {}
$(".navbar-toggler").click( function(){
    //change the class of navbar-list
    $(".navbar-list").toggleClass("active")
    //toggleClass是顯示和隱藏//addClass只有顯示
})