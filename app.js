// add too card

let productsCountEl = document.getElementById("products-count");
let addToCartBtns = document.querySelectorAll(".cart");

for (let i = 0; i < addToCartBtns.length; i++) {
    addToCartBtns[i].addEventListener("click", function () {
        productsCountEl.textContent = +productsCountEl.textContent + 1;
    });
}

// like button

let likeBtns = document.querySelectorAll(".favorite-btn");

likeBtns.forEach((btn) =>
    btn.addEventListener("click", function (/* e */) {
        
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
}

function closeModal() {
    modal.classList.remove("show");
}

modal.addEventListener("click", function (e) {
    if (e.target === modal) {
        closeModal();
    }
});


document.querySelector(".submit-form").addEventListener("click", function (e) {
    e.preventDefault();
});

//__________SLIDER

$(".slider").slick({
    dots: true,
});

//__________MODAL AUTO OPEN


function showModalByScroll() {
    if (window.scrollY >= document.body.scrollHeight / 2) {
        openModal();
        window.removeEventListener("scroll", showModalByScroll); //удаление ф-ции после выполнения
    }
}
window.addEventListener("scroll", showModalByScroll);


//___________ANIMATE ON SCROLL (АНИМАЦИЯ ПРИ СКРОЛЛЕ)

AOS.init();


//______________изменение кол-ва


const incrementBtns = document.querySelectorAll(".increment-btn");
const decrementBtns = document.querySelectorAll(".decrement-btn");
const productsCount = document.querySelectorAll(".product-quantity input");

let lengthIncrementBtns = incrementBtns.length;
console.log(incrementBtns.length);

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
