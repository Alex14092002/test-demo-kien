
function formatCurrency(number) {
    const parts = number.toString().split(".");
    const integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    const decimalPart = parts[1] ? `.${parts[1]}` : "";
    return `₫ ${integerPart}${decimalPart}`;
}
function addToCart(data) {
    const productName = data.name;
    const img = data.img1;
    const price = data.price;
    const quantity = 1;
  
    let selectedItems = localStorage.getItem("selectedItems");
    selectedItems = selectedItems ? JSON.parse(selectedItems) : [];
  
    // Kiểm tra xem sản phẩm đã tồn tại trong giỏ hàng hay chưa
    const existingItemIndex = selectedItems.findIndex((item) => item.name === productName);
  
    if (existingItemIndex !== -1) {
      // Nếu sản phẩm đã tồn tại, tăng số lượng sản phẩm trong giỏ hàng lên 1
      selectedItems[existingItemIndex].quantity += 1;
    } else {
      // Nếu sản phẩm chưa tồn tại, thêm sản phẩm mới vào giỏ hàng
      selectedItems.push({
        name: productName,
        img: img,
        price: price,
        quantity: quantity,
      });
    }
  
    localStorage.setItem("selectedItems", JSON.stringify(selectedItems));
    showPopupCart(); // Hiển thị popup giỏ hàng với thông tin sản phẩm đã được thêm
  }
 
const overlay = document.createElement('div');
overlay.classList.add('overlay');
document.body.appendChild(overlay);

const showPopup = async ( product , key) =>{
   
    overlay.classList.toggle('active-overlay');

    const res = await fetch(`https://data-kieh-default-rtdb.firebaseio.com/${product}/${key}.json`)
    const data = await res.json()
    const popupChitiet = document.querySelector(".popup-xemnhanh");
    popupChitiet.classList.add('open-popup');
    popupChitiet.innerHTML = `
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-6 slider-detail">
            <div style="--swiper-navigation-color: #fff; --swiper-pagination-color: #fff" class="swiper mySwiper2">
              <div class="swiper-wrapper">
                <div class="swiper-slide ">
                  <img src="${data.img1}"  />
                </div>
                <div class="swiper-slide ">
                  <img src="${data.img2}" />
                </div>
              </div>
             
            </div>
            <div thumbsSlider="" class="swiper mySwiper thum">
              <div class="swiper-wrapper">
                <div class="swiper-slide mini-img">
                  <img src="${data.img1}" />
                </div>
                <div class="swiper-slide mini-img">
                  <img src="${data.img2}" />
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 detail-product">
            <h1>${data.name}</h1>
            <span>Mọi loại da</span>
            <p>${data.subcibe}</p>
            <h2>Quà tặng kèm sẽ hiện thị đủ trong giỏ hàng.</h2>
            <div class="heart heart-popup">
              <i class="fa fa-heart" aria-hidden="true"></i>
              <i class="fa fa-heart" aria-hidden="true"></i>
              <i class="fa fa-heart" aria-hidden="true"></i>
              <i class="fa fa-heart" aria-hidden="true"></i>
              <i class="fa fa-heart" aria-hidden="true"></i>
            </div>
            <div class="price pricePopup">
              <h2>${formatCurrency(data.price)}</h2>
            </div>
            <div class="add-to-cart">
              <div class="soluong">
                <div class="quantity-control">
                  <button class="quantity-btn decrease">-</button>
                  <input type="text" readonly class="quantity-input" value="1">
                  <button class="quantity-btn increase">+</button>
                  <label class="quantity-label" for="">Số lượng</label> <br>
                </div>
                <div class="btn-add btn-add-popup">
                  <button>MUA TRỌN BỘ COMBO</button>
                </div>
              </div>
            </div>
           
            <div class="gift">
              <span>COMBO BAO GỒM </span>
              <div class="row" id="item-list">
             
              
                
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="close-popup-xemnhanh">
        <button>✖</button>
      </div>
    `;

    const resList = await fetch(`https://data-kieh-default-rtdb.firebaseio.com/${product}/${key}/list.json`)
    const list = await resList.json()
    
    const divList  = document.querySelector('#item-list')
    if(list){
        Object.entries(list).map(([key , value]) =>{
            divList.innerHTML += `
            <div class="col-3">
            <img src="${value.img}" alt="" width="100%">
          </div>
          <div class="col-9 gift-popup">
            <h5>${value.name}</h5>
            <p>${value.mota}</p>
            <span>${value.dungtich}</span> <br>
            <span>Số lượng: ${value.soluong}</span>
          </div>
            `
        })
      
    }



    const closePopup = document.querySelector('.close-popup-xemnhanh button')
    closePopup.addEventListener('click' ,()=>{
        popupChitiet.classList.remove('open-popup')
        overlay.classList.toggle('active-overlay');
    })

    // Trích xuất phần hiển thị số lượng và nút "MUA TRỌN BỘ COMBO"
    // Số lượng mặc định là 1
let quantity = 1;
const quantityInput = document.querySelector(".quantity-input");
const decreaseBtn = document.querySelector(".quantity-btn.decrease");
const increaseBtn = document.querySelector(".quantity-btn.increase");
const muaTronBoComboBtn = document.querySelector(".btn-add-popup button");
decreaseBtn.addEventListener("click", () => {
  if (quantity > 1) {
    quantity--;
    quantityInput.value = quantity;
  }
});

increaseBtn.addEventListener("click", () => {
  quantity++;
  quantityInput.value = quantity;
});



const popupCart = document.querySelector('.popup-themgiohang')

muaTronBoComboBtn.addEventListener("click", () => {
    const productName = data.name;
    const gift = data.gift
    const price = data.price
    const img = data.img1
    console.log(img);
    
const selectedQuantity = parseInt(quantityInput.value);
let selectedItems = localStorage.getItem("selectedItems");
selectedItems = selectedItems ? JSON.parse(selectedItems) : [];
const existingItemIndex = selectedItems.findIndex(item => item.name === productName);

if (existingItemIndex !== -1) {
  selectedItems[existingItemIndex].quantity += selectedQuantity;
  selectedItems[existingItemIndex].price += price*selectedQuantity
} else {
  selectedItems.push({ name: productName, quantity: selectedQuantity , gift : gift , img: img, price : price*selectedQuantity});
}
localStorage.setItem("selectedItems", JSON.stringify(selectedItems));
popupChitiet.classList.remove('open-popup');
popupCart.classList.add('open-popup-cart');
const priceTotal = price*selectedQuantity
showPopupCart(data, selectedQuantity , priceTotal); // Hiển thị popup giỏ hàng với thông tin sản phẩm đã được chọn
  });
  
 
  
  

    var swiper = new Swiper(".mySwiper", {
        loop: true,
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
      });
      var swiper2 = new Swiper(".mySwiper2", {
        loop: true,
        spaceBetween: 10,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        thumbs: {
          swiper: swiper,
        },
      });

   
    
      
    
   
}
const showPopupCart = (data, selectedQuantity ,priceTotal ) => {
  
    const popupCart = document.querySelector('.popup-themgiohang');
    popupCart.innerHTML = `
      <div class="container">
        <div class="row cart-popup">
          <div class="col-12 col-md-2">
            <img src="${data.img1}" alt="" width="100%">
          </div>
          <div class="col-12 col-md-6 add-cart gift-popup">
            <h5>${data.name}</h5>
            <p>${data.subcibe}</p>
          </div>
          <div class="col-6 col-md-2 add-cart">
            <div class="quantity-control">
              <button class="quantity-btn decrease">-</button>
              <input type="text" readonly class="quantity-input" value="${selectedQuantity}">
              <button class="quantity-btn increase">+</button>
              <label class="quantity-label" for="">Số lượng</label> <br>
            </div>
          </div>
          <div class="col-6 col-md-2">
            <div class="price pricePopup">
              <h2>${formatCurrency(priceTotal)}</h2>
            </div>
          </div>
        </div>
        <div class="row btn-cart">
          <div class="col-12 col-md-6">
            <div class="btn-add-cart no-active">
              <button class="tieptuc">TIẾP TỤC MUA SẮM</button>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="btn-add-cart">
              <button class="getCart">ĐI ĐẾN GIỎ HÀNG CỦA TÔI</button>
            </div>
          </div>
        </div>
      </div>
      <div class="close-popup-cart">
        <button>✖</button>
      </div>
    `;
  
    const closeCart = document.querySelector('.close-popup-cart');
    closeCart.addEventListener('click', () => {
      popupCart.classList.remove('open-popup-cart');
      overlay.classList.toggle('active-overlay');
    });
    const tieptuc = document.querySelector('.tieptuc')
    tieptuc.addEventListener('click', ()=>{
      popupCart.classList.remove('open-popup-cart');
      overlay.classList.remove('active-overlay');
    })

    const getCart = document.querySelector('.getCart')
    getCart.addEventListener('click' , ()=>{
        window.location.href = "cart.html"
    })
  };

  

  
  (async () => {
    const res = await fetch(`https://data-kieh-default-rtdb.firebaseio.com/mua1tang1.json`);
    const res2 = await fetch(`https://data-kieh-default-rtdb.firebaseio.com/combo2.json`);
    const res3 = await fetch(`https://data-kieh-default-rtdb.firebaseio.com/combo3.json`);
 
    const data = await res.json();
    const data2 = await res2.json();
    const data3 = await res3.json();
  
    const main = document.querySelector("#tang1");
    const main2 = document.querySelector("#combo2");
    const main3 = document.querySelector("#combo3");
  
    if (data && data2 && data3) {
      Object.entries(data).map(([key, value]) => {
      
      
        main.innerHTML += `
          <div class="col-6 col-md-3 item-product-home ">
        
              <div class="img-product">
                <img src="${value.img1}" alt="" width="100%">
                <div class="img-hover mini-product">
                  <img src="${value.img2}" alt="" width="100%">
                  <button class="btn-view-more btn-mini" onclick="showPopup('mua1tang1' ,${key})" >XEM NHANH</button>
                </div>
           
              </div>
              <div class="name-product">
                <h3>${value.name}</h3>
              </div>
          
            <div class="subcribe subcribe-mini">
              <p>${value.subcibe}</p>
            </div>
            <div class="heart">
              <i class="fa fa-heart" aria-hidden="true"></i>
              <i class="fa fa-heart" aria-hidden="true"></i>
              <i class="fa fa-heart" aria-hidden="true"></i>
              <i class="fa fa-heart" aria-hidden="true"></i>
              <i class="fa fa-heart" aria-hidden="true"></i>
            </div>
            <div class="price">
              <h2>${formatCurrency(value.price)}</h2>
            </div>
            <div class="btn-add add-to-cart">
              <button  >MUA TRỌN BỘ COMBO</button>
            </div>
          </div>
        `;
        
        
       
      });
  
      Object.entries(data2).map(([key, value]) => {
        main2.innerHTML += `
          <div class="col-6 col-md-3 item-product-home ">
           
              <div class="img-product">
                <img src="${value.img1}" alt="" width="100%">
                <div class="img-hover mini-product">
                  <img src="${value.img2}" alt="" width="100%">
                  <button class="btn-view-more btn-mini" onclick="showPopup('combo2', ${key})" >XEM NHANH</button>
                </div>
              </div>
              <div class="name-product">
                <h3>${value.name}</h3>
              </div>
           
            <div class="subcribe subcribe-mini">
              <p>${value.subcibe}</p>
            </div>
            <div class="heart">
              <i class="fa fa-heart" aria-hidden="true"></i>
              <i class="fa fa-heart" aria-hidden="true"></i>
              <i class="fa fa-heart" aria-hidden="true"></i>
              <i class="fa fa-heart" aria-hidden="true"></i>
              <i class="fa fa-heart" aria-hidden="true"></i>
            </div>
            <div class="price">
              <h2>${formatCurrency(value.price)}</h2>
            </div>
            <div class="btn-add add-to-cart">
              <button >MUA TRỌN BỘ COMBO</button>
            </div>
          </div>
        `;
      });
  
      Object.entries(data3).map(([key, value]) => {
        main3.innerHTML += `
          <div class="col-6 col-md-3 item-product-home ">
          
              <div class="img-product">
                <img src="${value.img1}" alt="" width="100%">
                <div class="img-hover mini-product">
                  <img src="${value.img2}" alt="" width="100%">
                  <button class="btn-view-more btn-mini" onclick="showPopup('combo3', ${key})"" >XEM NHANH</button>
                </div>
              </div>
              <div class="name-product">
                <h3>${value.name}</h3>
              </div>
            
            <div class="subcribe subcribe-mini">
              <p>${value.subcibe}</p>
            </div>
            <div class="heart">
              <i class="fa fa-heart" aria-hidden="true"></i>
              <i class="fa fa-heart" aria-hidden="true"></i>
              <i class="fa fa-heart" aria-hidden="true"></i>
              <i class="fa fa-heart" aria-hidden="true"></i>
              <i class="fa fa-heart" aria-hidden="true"></i>
            </div>
            <div class="price">
              <h2>${formatCurrency(value.price)}</h2>
            </div>
            <div class="btn-add add-to-cart">
              <button>MUA TRỌN BỘ COMBO</button>
            </div>
          </div>
        `;
        
      });
    }
  // Hàm thêm sản phẩm vào giỏ hàng và hiển thị popup giỏ hàng
  })();
  

