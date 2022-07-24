const iceCream = [{
    name: 'Cookie Dough',
    image: 'https://celebratingsweets.com/wp-content/uploads/2014/04/Cookie-Dough-Ice-Cream-1-5.jpg',
    price: 1
}, {
    name: 'Vanilla',
    image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ultimate-vanilla-ice-cream-1628511695.jpg',
    price: 1
}, {
    name: 'Strawberry',
    image: 'https://www.realfoodwithjessica.com/wp-content/uploads/2017/07/paleostrawberryicecream2.jpg',
    price: 2
}]

const vessels = [{
    name: 'Waffle Cone',
    image: 'https://m.media-amazon.com/images/I/71VNjBMakfL._SL1500_.jpg',
    price: 2
}, {
    name: 'Waffle Bowl',
    image: 'http://images.wbmason.com/350/L_JOY66050.jpg',
    price: 4
}]

const toppings = [{
    name: 'Sprinkles',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Sprinkles2.jpg',
    price: 1
}, {
    name: 'Choclate Chips',
    image: 'https://www.eatthis.com/wp-content/uploads/sites/4/2020/05/chocolate-chips.jpg?quality=82&strip=1&resize=640%2C360',
    price: 2
}]

let orders = []

function drawVessel() {
    let template = ''
    vessels.forEach(item => {
        template += `
        <div class="col-3 vessel-item" onclick="clickToOrderVessel('${item.name}')">
            <div>
                <img class="img-fluid" src="${item.image}" alt="">
                <p class="name">${item.name}</p>
                <p class="price">${item.price}</p>
            </div>
        </div>
        `
    })
    let vesselElm = document.getElementById("vessel")
    console.log(vesselElm)
    vesselElm.innerHTML = template    
}
drawVessel()

function drawIceCream() {
    let template = ''
    iceCream.forEach(item => {
        template += `
        <div class="col-3 ice-cream-item" onclick="clickToOrder('${item.name}')">
            <div>
                <img class="img-fluid" src="${item.image}" alt="">
                <p class="name">${item.name}</p>
                <p class="price">${item.price}</p>
            </div>
        </div>
        `
    })
    let iceCreamElm = document.getElementById("ice-cream")
    console.log(iceCreamElm)
    iceCreamElm.innerHTML = template    
}
drawIceCream()

function drawToppings() {
    let template = ''
    toppings.forEach(item => {
        template += `
        <div class="col-3 toppings-item" onclick="clickToOrderToppings('${item.name}')">
            <div>
                <img class="img-fluid" src="${item.image}" alt="">
                <p class="name">${item.name}</p>
                <p class="price">${item.price}</p>
            </div>
        </div>
        `
    })
    let toppingsElm = document.getElementById("toppings")
    console.log(toppingsElm)
    toppingsElm.innerHTML = template    
}
drawToppings()

function drawOrders() {
    let template = ''
    orders.forEach(item => {
        template += `
        <div class="col-4">
            <p><span>${item.name}</span> - <span class="text-end ms-auto">${item.price}</span></p>
        </div>
        `
    })
    let ordersElm = document.getElementById("cart")
    console.log(ordersElm)
    ordersElm.innerHTML = template  
    
    //console.log('template', template)
}

function drawTotal() {
    let subtotal = 0
    orders.forEach(order => subtotal += order.price)
    console.log('subtotal', subtotal)
}

function clickToOrderVessel(selectedVName) {
    
    let foundItem = vessels.find(item => item.name == selectedVName)
    console.log('found', foundItem)  
    orders.push(foundItem) 
    drawOrders()
    drawTotal()
}

function clickToOrder(selectedICName) {
    // console.log('selected Name', selectedICName);
    let foundItem = iceCream.find(item => item.name == selectedICName)
    console.log('found', foundItem)  
    orders.push(foundItem) 
    drawOrders()
    drawTotal()
}

function clickToOrderToppings(selectedToppingName) {    
    let foundItem = toppings.find(item => item.name == selectedToppingName)
    console.log('found', foundItem)  
    orders.push(foundItem) 
    drawOrders()
    drawTotal()
}
function clearOrders() {
    orders = []
    drawOrders()
}

