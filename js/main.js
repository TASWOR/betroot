//First task

var btn = document.getElementsByClassName("product-box__btn");
var product = document.getElementsByClassName("product-box__item");
var all_price=0;
var all_count=0;
var count_cart=document.getElementsByClassName("red-info")[1];
var price_cart=document.getElementsByClassName("red-info")[0];
for(var i = 0;i<product.length;i++){
    btn[i].addEventListener("click",function () {
        var price_item=this.parentNode.querySelector("p").innerHTML.slice(0,-5);
        var count_item =this.parentNode.querySelector(".qty__item").value;
        all_price+=price_item*count_item;
        all_count+=Number(count_item);
        if(count_item<=0)
        {
            alert("Введите положительное число в количестве товаров!")
        }
        else{
            price_cart.innerHTML=all_count;
            count_cart.innerHTML=all_price;
        }
    })
}


//Third task
var order=document.querySelector(".btn-check");
var close=document.querySelector(".close");
var section_modal= document.querySelector(".section_modal");
order.addEventListener("click",function () {
    section_modal.classList.toggle("active")
});
close.addEventListener("click",function () {
    section_modal.classList.remove("active")
});
var em = /\b[A-Za-z0-9._]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
var na =/\b[A-Za-z0-9._]{1,12}\b/;
var names = document.querySelector(".name");
var mail = document.querySelector(".mail");
var send_all = document.querySelector(".send_all");
send_all.addEventListener("click",function () {
    if(!na.test(names.value)){
        alert("Не верное имя")
    }
    else if(!em.test(mail.value)){
        alert("Не верно указана почта")
    }
    else{
        alert("Спасибо за покупку!");
        names.value="";
        mail.value="";
        price_cart.innerHTML="XXX";
        count_cart.innerHTML="XXX";
        section_modal.classList.remove("active");
        all_price=0;
        all_count=0;
    }
});


//Second task
var filter_price = document.getElementById("filter_price");
var filter_category = document.getElementById("filter_category");
function allFilter() {
    for (var i = 0; i < product.length; i++) {
        if(Number(filter_price.value)>=Number(product[i].querySelector(".product-box__meta p").innerHTML.slice(0,-5))&&
            Number(filter_category.value)===0){
            product[i].style.display="flex";
        }
        else if(filter_category.value === product[i].getAttribute("food_category")&&Number(filter_price.value)===0){
            product[i].style.display="flex";
        }
        else if(Number(filter_price.value)>=Number(product[i].querySelector(".product-box__meta p").innerHTML.slice(0,-5))&&
            filter_category.value === product[i].getAttribute("food_category")){
            product[i].style.display="flex";
        }
        else if(Number(filter_price.value)===0&& Number(filter_category.value)===0){
            product[i].style.display="flex";

        }
        else{
             product[i].style.display="none";
        }
    }
}