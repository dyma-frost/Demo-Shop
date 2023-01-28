// add too card

let productsCountEl = document.getElementById("products-count");
let addToCartBtns = document.querySelectorAll(".cart");
// console.log(productsCountEl);
// console.log(addToCartBtns);

for (let i = 0; i < addToCartBtns.length; i++) {
    addToCartBtns[i].addEventListener("click", function () {
        console.log("clicked");
        productsCountEl.innerHTML++;
    });
}

// like button
// _________________________________________________

let colorBackGrImArray = [
    "url('./demoShop/icon (7).png')",
    "url('./demoShop/icon (5).png')",
];
let colorBackGrColArray = ["transparent", "#2c71b8"];
let i1 = 0;
function changeColor1() {
    document.querySelector("#likebtn-1").style.backgroundImage =
        colorBackGrImArray[i1];
    i1++;
    if (i1 >= colorBackGrImArray.length) {
        i1 = 0;
    }
    document.querySelector("#likebtn-1").style.backgroundColor =
        colorBackGrColArray[i1];
}
let i2 = 0;
function changeColor2() {
    document.querySelector("#likebtn-2").style.backgroundImage =
        colorBackGrImArray[i2];
    i2++;
    if (i2 >= colorBackGrImArray.length) {
        i2 = 0;
    }
    document.querySelector("#likebtn-2").style.backgroundColor =
        colorBackGrColArray[i2];
}
let i3 = 0;
function changeColor3() {
    document.querySelector("#likebtn-3").style.backgroundImage =
        colorBackGrImArray[i3];
    i3++;
    if (i3 >= colorBackGrImArray.length) {
        i3 = 0;
    }
    document.querySelector("#likebtn-3").style.backgroundColor =
        colorBackGrColArray[i3];
}
let i4 = 0;
function changeColor4() {
    document.querySelector("#likebtn-4").style.backgroundImage =
        colorBackGrImArray[i4];
    i4++;
    if (i4 >= colorBackGrImArray.length) {
        i4 = 0;
    }
    document.querySelector("#likebtn-4").style.backgroundColor =
        colorBackGrColArray[i4];
}
let i5 = 0;
function changeColor5() {
    document.querySelector("#likebtn-5").style.backgroundImage =
        colorBackGrImArray[i5];
    i5++;
    if (i5 >= colorBackGrImArray.length) {
        i5 = 0;
    }
    document.querySelector("#likebtn-5").style.backgroundColor =
        colorBackGrColArray[i5];
}
let i6 = 0;
function changeColor6() {
    document.querySelector("#likebtn-6").style.backgroundImage =
        colorBackGrImArray[i6];
    i6++;
    if (i6 >= colorBackGrImArray.length) {
        i6 = 0;
    }
    document.querySelector("#likebtn-6").style.backgroundColor =
        colorBackGrColArray[i6];
}
let i7 = 0;
function changeColor7() {
    document.querySelector("#likebtn-7").style.backgroundImage =
        colorBackGrImArray[i7];
    i7++;
    if (i7 >= colorBackGrImArray.length) {
        i7 = 0;
    }
    document.querySelector("#likebtn-7").style.backgroundColor =
        colorBackGrColArray[i7];
}
let i8 = 0;
function changeColor8() {
    document.querySelector("#likebtn-8").style.backgroundImage =
        colorBackGrImArray[i8];
    i8++;
    if (i8 >= colorBackGrImArray.length) {
        i8 = 0;
    }
    document.querySelector("#likebtn-8").style.backgroundColor =
        colorBackGrColArray[i8];
}
let i9 = 0;
function changeColor9() {
    document.querySelector("#likebtn-9").style.backgroundImage =
        colorBackGrImArray[i9];
    i9++;
    if (i9 >= colorBackGrImArray.length) {
        i9 = 0;
    }
    document.querySelector("#likebtn-9").style.backgroundColor =
        colorBackGrColArray[i9];
}
