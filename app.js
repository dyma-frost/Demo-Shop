// add too card

let productsCountEl = document.getElementById("products-count");
let addToCartBtns = document.querySelectorAll(".cart");
// console.log(productsCountEl);
// console.log(addToCartBtns);

for (let i = 0; i < addToCartBtns.length; i++) {
    addToCartBtns[i].addEventListener("click", function () {
        // console.log("clicked");
        // productsCountEl.innerHTML++; //мой вариант
        productsCountEl.textContent = +productsCountEl.textContent + 1;
    });
}

// like button

// _______________________правильный вариант

let likeBtns = document.querySelectorAll(".favorite-btn");
// console.log(likeBtns);

likeBtns.forEach((btn) =>
    btn.addEventListener("click", function (/* e */) {
        // // console.log("clicked")
        // if (btn.classList.contains("liked")) {
        //     btn.classList.remove("liked");
        // } else {
        //     btn.classList.add("liked");
        // }
        //еще вариант записи
        // console.log(e.target);
        // e.target.classList.toggle("liked");
        //короткий вариант записи
        btn.classList.toggle("liked");
    })
);

// more detail   open and close

let moreDetailsBtns = document.querySelectorAll(".details");
let modal = document.querySelector(".modal");
let closeBtn = document.querySelector(".btn-close");

moreDetailsBtns.forEach((item) => item.addEventListener("click", openModal));
closeBtn.addEventListener("click", closeModal);

function openModal() {
    modal.classList.add("show");
    // modal.classList.remove("hide"); //второй вариант
}

function closeModal() {
    modal.classList.remove("show");
    // modal.classList.add("hide"); //второй вариант
}

modal.addEventListener("click", function (e) {
    if (e.target === modal) {
        closeModal();
    }
});

// убирает стандартную функцию с объекта (с кнопки send)
document.querySelector(".submit-form").addEventListener("click", function (e) {
    e.preventDefault(); // убирает стандартную функцию с объекта
});

//__________SLIDER

$(".slider").slick({
    dots: true,
});

//__________MODAL AUTO OPEN

// let docHeigth = document.body.clientHeight;
// let docHalfHeight = docHeigth / 2;
// let currentValue = window.pageYOffset;
// console.log("вся высота " + docHeigth);
// console.log("половина " + docHalfHeight);
// console.log("текущий скролл " + currentValue);

//_______________МОЙ ВАРИАНТ
// document.addEventListener("scroll", function () {
//     if (window.pageYOffset > document.body.clientHeight / 2) {
//         openModal();
//     }
//     // console.log("текущий скролл " + window.pageYOffset);
// });
// ________________
function showModalByScroll() {
    if (window.scrollY >= document.body.scrollHeight / 2) {
        openModal();
        window.removeEventListener("scroll", showModalByScroll); //удаление ф-ции после выполнения
    }
}
window.addEventListener("scroll", showModalByScroll);
// _________________ ТАЙМЕРЫ

// setTimeout(openModal, 3000);  //таймер для ф-ции
// setInterval(openModal, 3000); //интервал срабатывания (каждые *** мс)

// _________________________________________________мой вариант лайков

// let colorBackGrImArray = [
//     "url('./demoShop/icon (7).png')",
//     "url('./demoShop/icon (5).png')",
// ];
// let colorBackGrColArray = ["transparent", "#2c71b8"];
// let i1 = 0;
// function changeColor1() {
//     document.querySelector("#likebtn-1").style.backgroundImage =
//         colorBackGrImArray[i1];
//     i1++;
//     if (i1 >= colorBackGrImArray.length) {
//         i1 = 0;
//     }
//     document.querySelector("#likebtn-1").style.backgroundColor =
//         colorBackGrColArray[i1];
// }
// let i2 = 0;
// function changeColor2() {
//     document.querySelector("#likebtn-2").style.backgroundImage =
//         colorBackGrImArray[i2];
//     i2++;
//     if (i2 >= colorBackGrImArray.length) {
//         i2 = 0;
//     }
//     document.querySelector("#likebtn-2").style.backgroundColor =
//         colorBackGrColArray[i2];
// }
// let i3 = 0;
// function changeColor3() {
//     document.querySelector("#likebtn-3").style.backgroundImage =
//         colorBackGrImArray[i3];
//     i3++;
//     if (i3 >= colorBackGrImArray.length) {
//         i3 = 0;
//     }
//     document.querySelector("#likebtn-3").style.backgroundColor =
//         colorBackGrColArray[i3];
// }
// let i4 = 0;
// function changeColor4() {
//     document.querySelector("#likebtn-4").style.backgroundImage =
//         colorBackGrImArray[i4];
//     i4++;
//     if (i4 >= colorBackGrImArray.length) {
//         i4 = 0;
//     }
//     document.querySelector("#likebtn-4").style.backgroundColor =
//         colorBackGrColArray[i4];
// }
// let i5 = 0;
// function changeColor5() {
//     document.querySelector("#likebtn-5").style.backgroundImage =
//         colorBackGrImArray[i5];
//     i5++;
//     if (i5 >= colorBackGrImArray.length) {
//         i5 = 0;
//     }
//     document.querySelector("#likebtn-5").style.backgroundColor =
//         colorBackGrColArray[i5];
// }
// let i6 = 0;
// function changeColor6() {
//     document.querySelector("#likebtn-6").style.backgroundImage =
//         colorBackGrImArray[i6];
//     i6++;
//     if (i6 >= colorBackGrImArray.length) {
//         i6 = 0;
//     }
//     document.querySelector("#likebtn-6").style.backgroundColor =
//         colorBackGrColArray[i6];
// }
// let i7 = 0;
// function changeColor7() {
//     document.querySelector("#likebtn-7").style.backgroundImage =
//         colorBackGrImArray[i7];
//     i7++;
//     if (i7 >= colorBackGrImArray.length) {
//         i7 = 0;
//     }
//     document.querySelector("#likebtn-7").style.backgroundColor =
//         colorBackGrColArray[i7];
// }
// let i8 = 0;
// function changeColor8() {
//     document.querySelector("#likebtn-8").style.backgroundImage =
//         colorBackGrImArray[i8];
//     i8++;
//     if (i8 >= colorBackGrImArray.length) {
//         i8 = 0;
//     }
//     document.querySelector("#likebtn-8").style.backgroundColor =
//         colorBackGrColArray[i8];
// }
// let i9 = 0;
// function changeColor9() {
//     document.querySelector("#likebtn-9").style.backgroundImage =
//         colorBackGrImArray[i9];
//     i9++;
//     if (i9 >= colorBackGrImArray.length) {
//         i9 = 0;
//     }
//     document.querySelector("#likebtn-9").style.backgroundColor =
//         colorBackGrColArray[i9];
// }

//___________________________________________

//___________ANIMATE ON SCROLL (АНИМАЦИЯ ПРИ СКРОЛЛЕ)

/* AOS.init(); */

// ____________ ф-ции конструкторы

// function Car(model, color, year) {
//     this.model = model;
//     this.color = color;
//     this.year = year;
// }

// class Car {     //новый вид ф-ции
//     constructor(model, color, year) {
//         this.model = model;
//         this.color = color;
//         this.year = year;
//         // this.hi = function () {
//         //     console.log("Hi " + this.model);
//         // };
//     }
//     hi = function () {
//             console.log("Hi " + this.model);
//         };
//     hello = function () {
//             console.log("Hello " + this.model + " " + this.color);
//         };
// };

// let audi = new Car("A4", "black", 2008);
// let lexus = new Car("ES250", "white", 2008);
// let bmw = new Car("328", "grey", 2020);

// console.log(audi);
// console.log(lexus);
// console.log(bmw);

// audi.hi();
// lexus.hi();
// bmw.hi();

// audi.hello();
// lexus.hello();
// bmw.hello();

//______________изменение кол-ва






const incrementBtns = document.querySelectorAll(".increment-btn");
const decrementBtns = document.querySelectorAll(".decrement-btn");
const productsCount = document.querySelectorAll(".product-quantity input");

let lengthIncrementBtns = incrementBtns.length;
console.log(incrementBtns.length);



// console.log(incrementBtns);
// console.log(decrementBtns);
// console.log(productsCount);

function Counter(incrementBtn, decrementBtn, inputField) {
    this.domRefs = {
        incrementBtn,
        decrementBtn,
        inputField,
    };
    
    this.toggleButtonState = function () {
        const count = +this.domRefs.inputField.value;
        this.domRefs.decrementBtn.disabled = count <= 1;
        this.domRefs.incrementBtn.disabled = count >= 10;
    };
    this.toggleButtonState();
    
    this.increment = function () {
        let count = +this.domRefs.inputField.value;
        this.domRefs.inputField.value = count + 1;
        this.toggleButtonState();
    };
    
    this.decrement = function () {
        let count = +this.domRefs.inputField.value;
        this.domRefs.inputField.value = count - 1;
        this.toggleButtonState();
    };
    
    this.domRefs.incrementBtn.addEventListener(
        "click",
        this.increment.bind(this)
        );
        this.domRefs.decrementBtn.addEventListener(
            "click",
            this.decrement.bind(this)
            );
        }
        
        // const counter1 = new Counter(incrementBtns, decrementBtns, productsCount);
        // console.log(counter1);
        
        
        let counters = [];
        productsCount.forEach(
            (item, i) => (counters[i] = new Counter(incrementBtns[i], decrementBtns[i], item)));
            
        console.log(counters)