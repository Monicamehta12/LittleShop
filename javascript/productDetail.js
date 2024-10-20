//product-detail js
var productImg = document.getElementById("product-img");
var smallImg = document.getElementsByClassName("small-img");

smallImg[0].onclick = () => {
    productImg.src = smallImg[0].src;
}

smallImg[1].onclick = () => {
    productImg.src = smallImg[1].src;
}

smallImg[2].onclick = () => {
    productImg.src = smallImg[2].src;
}

smallImg[3].onclick = () => {
    productImg.src = smallImg[3].src;
}