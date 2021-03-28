
let optionItem1 = document.querySelector('.shoe1');
let optionItem2 = document.querySelector('.shoe2');
let optionItem3 = document.querySelector('.shoe3');
let selectionItem1 = document.querySelector('.item1');
let selectionItem2 = document.querySelector('.item2');
let selectionItem3 = document.querySelector('.item3');


selectionItem1.addEventListener('click', () => {
    const arrow = document.querySelector('.a-arrow');
    arrow.classList.toggle('arrow-horizontal');
    optionItem1.classList.toggle('options-active');
})

selectionItem2.addEventListener('click', () => {
    const arrow = document.querySelector('.b-arrow');
    arrow.classList.toggle('arrow-horizontal');
    optionItem2.classList.toggle('options-active');
})

selectionItem3.addEventListener('click', () => {
    const arrow = document.querySelector('.c-arrow');
    arrow.classList.toggle('arrow-horizontal');
    optionItem3.classList.toggle('options-active');
})

const basketBtn = document.querySelector('.basket-btn');
basketBtn.onclick = () => {
    const basketContainer = document.querySelector('.basket-container');
    basketContainer.classList.toggle('basket-container-active');
} 

(function(){
    const shoeSize = document.querySelectorAll('label');

    shoeSize.forEach((size) => {
        size.addEventListener('click', (event) => {
            let askUser = confirm('Please confirm your selection');

            if(askUser) {
                let cartItems = {};

                cartItems.image = event.target.parentElement.parentElement.parentElement.children[1].children[0].src;
                cartItems.name = size.getAttribute('data-productName');
                cartItems.size = size.getAttribute('data-productSize');
                cartItems.price = size.getAttribute('data-price');

                const createShoppingCart = document.createElement("div");
                createShoppingCart.classList.add('all-cart-items');
                
                createShoppingCart.innerHTML = `
                <div class="item-image-name">
                    <img src="${cartItems.image}" alt="shoe">
                    <p> ${cartItems.name} </p>
                </div>

                <div class="item-size-price">
                    <p>Selected size: </p>
                    <p> ${cartItems.size} </p>

                    <p>Price: </p>
                    <p class="price"> ${cartItems.price} </p>
                <div>
                `;

                const insertData = document.querySelector('.basket-container');
                insertData.appendChild(createShoppingCart);
                calculate();
            } 
            return;
        })
    }) 

    function calculate() {
        const total = [];
        const prices = document.querySelectorAll('.price');
        
        prices.forEach((price) => {
            total.push(Number(price.textContent))
        })
    
        const totalToPay = total.reduce(function(total, item) {
            total += item;
            return total;
        }, 0);

        document.querySelector('#total-to-pay').textContent = totalToPay.toFixed(2) + ' €';
        document.querySelector('#cart-sum').textContent = totalToPay.toFixed(2) + ' €';
        document.querySelector('#cart-pieces').textContent = total.length;
        console.log(totalToPay);
    }
})()


