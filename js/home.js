
const overlay = document.createElement('div');
function formatCurrency(number) {
  const parts = number.toString().split(".");
  const integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const decimalPart = parts[1] ? `.${parts[1]}` : "";
  return `₫ ${integerPart}${decimalPart}`;
}
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
  const productName = data.nameSheet;
  const gift = data.gift
  const price = data.price
  const img = data.img1
  const name2 = data.name
const selectedQuantity = parseInt(quantityInput.value);

selectedItems = selectedItems ? selectedItems : [];

const existingItemIndex = selectedItems.findIndex(item => item.name === productName);
console.log(existingItemIndex);
if (existingItemIndex !== -1) {
selectedItems[existingItemIndex].quantity += selectedQuantity;
selectedItems[existingItemIndex].price += price*selectedQuantity
} else {
selectedItems.push({ name: productName, quantity: selectedQuantity , gift : gift , img: img, name2  : name2 , price : price*selectedQuantity});
}
localStorage.setItem("selectedItems", JSON.stringify(selectedItems));
popupChitiet.classList.remove('open-popup');
popupCart.classList.add('open-popup-cart');
const priceTotal = price*selectedQuantity
showPopupCart(data, selectedQuantity , priceTotal); // Hiển thị popup giỏ hàng với thông tin sản phẩm đã được chọn
localStorage.setItem('selectedItems', JSON.stringify(selectedItems));

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
const popupCart = document.querySelector('.popup-themgiohang');
const showPopupCart = (data, selectedQuantity ,priceTotal ) => {

  const updateLocalStorage = () => {
    const selectedItems = JSON.parse(localStorage.getItem("selectedItems")) || [];
    const productName = data.nameSheet;
    const existingItemIndex = selectedItems.findIndex((item) => item.name === productName);
    const pricePopup = document.querySelector('.pricePopup h2')
    if (existingItemIndex !== -1) {
      selectedItems[existingItemIndex].quantity = quantity;
      selectedItems[existingItemIndex].price = data.price * quantity;
      pricePopup.textContent = formatCurrency(data.price * quantity) ;
    }

    localStorage.setItem("selectedItems", JSON.stringify(selectedItems));
  };
  popupCart.innerHTML = `
    <div class="container">
      <div class="row cart-popup">
        <div class="col-12 col-md-2">
          <img src="${data.img1}" alt="" width="100%">
        </div>
        <div class="col-12 col-md-5 add-cart gift-popup">
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
        <div class="col-6 col-md-3">
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
 

  let quantity = selectedQuantity;
  const quantityInput = document.querySelector(".quantity-input");
  const decreaseBtn = document.querySelector(".quantity-btn.decrease");
  const increaseBtn = document.querySelector(".quantity-btn.increase");

  decreaseBtn.addEventListener("click", () => {
    if (quantity > 1) {
      quantity--;
      quantityInput.value = quantity;
      updateLocalStorage(); // Update quantity and price in localStorage
    }
  });

  increaseBtn.addEventListener("click", () => {
    quantity++;
    quantityInput.value = quantity;
    updateLocalStorage(); // Update quantity and price in localStorage
  });

  const closeCart = document.querySelector('.close-popup-cart');
  closeCart.addEventListener('click', () => {
    const selectedItems = JSON.parse(localStorage.getItem('selectedItems')) || [];
    const productName = data.nameSheet;
  
    // Filter out the product that matches the name of the current popup from the localStorage
    const updatedItems = selectedItems.filter(item => item.name !== productName);
  
    // Update the localStorage with the filtered items
    localStorage.setItem('selectedItems', JSON.stringify(updatedItems));
  
    // Update the cart length indicator
    document.querySelector('.cart span').textContent = `GIỎ HÀNG (${updatedItems.length})`;
    document.querySelector('.cart-mobile span').textContent = `${updatedItems.length}`;
  
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
  const res = await fetch(
    `https://data-kieh-default-rtdb.firebaseio.com/home/0.json`
  );
  const data = await res.json();

  const wrap = document.querySelector(".wrap");

  if (data) {
    wrap.innerHTML += `
<div class="banner1 pd-2 desktop-banner">
        <img src="${data.banner1}" alt="" width="100%">
    </div>
    <div class="banner1 pd-2 mobile-banner">
        <img src="${data.mobile}" alt="" width="100%">
    </div>

    <div class="container">
        
        <div class="banner2 pd-2">
            <img src="${data.banner2}" alt="" width="100%">
        </div>
    
        <div class="banner3  pd-2">
            <img src="${data.banner3}" alt="" width="100%">
        </div>
        <div class="banner4 pd-2" >
            <img src="${data.banner4}" alt="" width="100%">
        </div>
       
        <div class="row pd-2">
                <div class="col-6">
                <img src="${data.banner5}" alt="" width="100%">
                </div>
                <div class="col-6">
                <img src="${data.banner6}" alt="" width="100%">
                </div>
        </div>
    </div>

    <div class="container">
        <div class="row main-product-home" id="productHome">
     
        </div>
    </div>

    <div class="container">
        <div class="banner-5">
            <img src="${data.banner7}" alt="" width="100%">
        </div>
     
      <div class="slider-product" id="tang1">

      </div>
    </div>


    <div class="container">
        <div class="banner-5">
        <img src="${data.banner8}" alt="" width="100%">
        </div>
        <div class="slider-product" id="combo2">

        </div>
    </div>


    <div class="container">
        <div class="banner-5">
        <img src="${data.banner9}" alt="" width="100%">
        </div>
        <div class="slider-product" id="combo3">

        </div>
    </div>

    <div class="container product-phu">
    <div class="title--v">
        <h1>KEM CHỐNG NẮNG & MẶT NẠ</h1>

    </div>
    <div class="slider-product" id="kemchongnang">

    </div>
    </div>
    <div class="container product-phu">
    <div class="title--v">
        <h1>DƯỠNG THỂ VÀ CHĂM SÓC TÓC</h1>

    </div>
    <div class="slider-product" id="duongthe">

    </div>
    </div>


    <div class="container banner-bottom">
    <img src="${data.banner10}" alt="" width="100%">
    <img src="${data.banner11}" alt="" width="100%">
    <img src="${data.banner12}" alt="" width="100%">
    </div>
`;
  }

(async ()=>{
    const res = await fetch(`https://data-kieh-default-rtdb.firebaseio.com/homeproduct.json`)
    const data = await res.json()

    const maing = document.querySelector('#productHome')
  
    if(data){
        Object.entries(data).map(([key, value]) =>{
           
            maing.innerHTML += `
                   <div class="col-6 col-md-6 item-product-home ">
                  
                    <div class="img-product">
                    <img src="${value.img1}" alt="" width="100%">
                    <div class="img-hover mini-product">
                    <a class="link-buy-nhanh" href="../chitietsp.html?catelory=homeproduct&key=${key}">
                      <img src="${value.img2}" alt="" width="100%">
                    </a>
                    <button class="btn-view-more" onclick="showPopup('homeproduct' ,${key})">XEM NHANH</button>
                      
                    </div>
                </div>
                <a href="../chitietsp.html?catelory=homeproduct&key=${key}">
                <div class="name-product">
                <h3>${value.name}</h3>
                </div>
               
                </a>
              
                   
               
               
                <div class="subcribe ">
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
                <div class="btn-add btn-add-to-cart">
                    <button data-category="homeproduct" data-key="${encodeURIComponent(key)}" >MUA TRỌN BỘ COMBO</button>
                </div>
            </div>
            `
        })

    }

})()

overlay.classList.add('overlay');
document.body.appendChild(overlay);


function chunkArray(arr, chunkSize) {
  const chunks = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    chunks.push(arr.slice(i, i + chunkSize));
  }
  return chunks;
}
function getChunkSize() {
  if (window.innerWidth >= 768) {
    
    return 6;
  } else {
    
    return 3;
  }
}
function getChunkSize2() {
  if (window.innerWidth >= 768) {
    
    return 4;
  } else {
    
    return 3;
  }
}
(async () => {
  const res = await fetch(`https://data-kieh-default-rtdb.firebaseio.com/mua1tang1.json`);
  const res2 = await fetch(`https://data-kieh-default-rtdb.firebaseio.com/combo2.json`);
  const res3 = await fetch(`https://data-kieh-default-rtdb.firebaseio.com/combo3.json`);
  const res4 = await fetch(`https://data-kieh-default-rtdb.firebaseio.com/kemchongnang.json`)
  const res5 = await fetch(`https://data-kieh-default-rtdb.firebaseio.com/duongthe.json`)
  const data = await res.json();
  const data2 = await res2.json();
  const data3 = await res3.json();
  const data4  = await res4.json();
  const data5 = await res5.json();

  const productsChunks = chunkArray(Object.entries(data), getChunkSize2());
  productsChunks.forEach((products, index) => {
    const sliderId = `slider-${index}`;
    const sliderContainer = document.createElement('div');
    sliderContainer.className = 'slider-product';
    sliderContainer.id = sliderId;

    
    products.forEach(([key, value]) => {
      sliderContainer.innerHTML += `
       
    <div class="item-product-home" >
      <div class="img-product">
         <img src="${value.img1}" alt="" width="100%">
         <div class="img-hover mini-product">
         <a class="link-buy-nhanh" href="../chitietsp.html?catelory=mua1tang1&key=${key}">
         <img src="${value.img2}" alt="" width="100%">
         </a>
            
            <button class="btn-view-more btn-mini" onclick="showPopup('mua1tang1' ,'${encodeURIComponent(key)}')" >XEM NHANH</button>
         </div>
      </div>
      <a href="../chitietsp.html?catelory=mua1tang1&key=${key}">
         <div class="name-product">
            <h3>${value.name}</h3>
         </div>
      </a>
      <div class="subcribe ">
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
      <div class="btn-add btn-add-to-cart add-to-cart">
         <button data-category="mua1tang1" data-key="${encodeURIComponent(key)}">MUA TRỌN BỘ COMBO</button>
      </div>
   </div>
      `;
    });
    const main = document.querySelector("#tang1");
    main.appendChild(sliderContainer);
   
 
    $(`#${sliderId}`).slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 4,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }
      ]
    });
  

  });

  const productsChunksCombo2 = chunkArray(Object.entries(data2), getChunkSize());
  productsChunksCombo2.forEach((products, index) => {
    const sliderId = `slider-combo2-${index}`;
    const sliderContainer = document.createElement('div');
    sliderContainer.className = 'slider-product';
    sliderContainer.id = sliderId;
    let maxHeight = 0;
    products.forEach(([key, value]) => {
      const descriptionHeight = value.subcibe.split('\n').length;
      if (descriptionHeight > maxHeight && descriptionHeight < 5) {
        maxHeight = descriptionHeight;
      } else {
        maxHeight = descriptionHeight + 2;
      }
    });
   
    products.forEach(([key, value]) => {
    
      sliderContainer.innerHTML += `
        <div class="item-product-home">
        <div class="item-product-home" >
        <div class="img-product">
          <img src="${value.img1}" alt="" width="100%">
          <div class="img-hover mini-product">
          <a class="link-buy-nhanh" href="../chitietsp.html?catelory=combo2&key=${key}">
          <img src="${value.img2}" alt="" width="100%">
          </a>
             
            <button class="btn-view-more btn-mini" onclick="showPopup('combo2' ,'${encodeURIComponent(key)}')" >XEM NHANH</button>
          </div>
     
        </div>
        <a href="../chitietsp.html?catelory=combo2&key=${key}">
        <div class="name-product">
        <h3>${value.name}</h3>
      </div>
        </a>
       
    
      <div class="subcribe ">
        <textarea class="myTextarea" readonly rows="${maxHeight}" cols="auto">${value.subcibe}</textarea>
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
      <div class="btn-add btn-add-to-cart add-to-cart">
      <button data-category="combo2" data-key="${encodeURIComponent(key)}">MUA TRỌN BỘ COMBO</button>
      </div>
    </div>
        </div>
      `;
    });
    const main = document.querySelector("#combo2");
   
    main.appendChild(sliderContainer);
   
 
    $(`#${sliderId}`).slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 4,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }
      ]
    });
  });



  const productsChunksCombo3 = chunkArray(Object.entries(data3), getChunkSize());
  productsChunksCombo3.forEach((products, index) => {
    const sliderId = `slider-combo3-${index}`;
    const sliderContainer = document.createElement('div');
    sliderContainer.className = 'slider-product';
    sliderContainer.id = sliderId;
    let maxHeight = 0;
    products.forEach(([key, value]) => {
      const descriptionHeight = value.subcibe.split('\n').length;
      if (descriptionHeight > maxHeight && descriptionHeight < 5) {
        maxHeight = descriptionHeight;
      } else {
        maxHeight = descriptionHeight + 4;
      }
    });
    products.forEach(([key, value]) => {
      sliderContainer.innerHTML += `
        <div class="item-product-home">
        <div class="item-product-home" >
        <div class="img-product">
          <img src="${value.img1}" alt="" width="100%">
          <div class="img-hover mini-product">
          <a class="link-buy-nhanh" href="../chitietsp.html?catelory=combo3&key=${key}">
          <img src="${value.img2}" alt="" width="100%">
          </a>
             
            <button class="btn-view-more btn-mini" onclick="showPopup('combo3' ,'${encodeURIComponent(key)}')" >XEM NHANH</button>
          </div>
     
        </div>
        <a href="../chitietsp.html?catelory=combo3&key=${key}">
        <div class="name-product">
        <h3>${value.name}</h3>
      </div>
        </a>
       
    
      <div class="subcribe ">
      <textarea class="myTextarea" readonly rows="${maxHeight}" cols="0">${value.subcibe}</textarea>
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
      <div class="btn-add btn-add-to-cart add-to-cart">
      <button data-category="combo3" data-key="${encodeURIComponent(key)}" >MUA TRỌN BỘ COMBO</button>
      </div>
    </div>
        </div>
      `;
    });
    const main = document.querySelector("#combo3");
   
    main.appendChild(sliderContainer);
   
 
    $(`#${sliderId}`).slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 4,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }
      ]
    });
  });


  const productsChunksKemchongnang = chunkArray(Object.entries(data4), getChunkSize());
  productsChunksKemchongnang.forEach((products, index) => {
    const sliderId = `slider-kemchongnang-${index}`;
    const sliderContainer = document.createElement('div');
    sliderContainer.className = 'slider-product';
    sliderContainer.id = sliderId;
    products.forEach(([key, value]) => {
      sliderContainer.innerHTML += `
        <div class="item-product-home">
        <div class="item-product-home">
        <div class="img-product">
          <img src="${value.img1}" alt="" width="100%">
          <div class="img-hover mini-product">
            <img src="${value.img2}" alt="" width="100%">
            <button class="btn-view-more btn-mini">XEM NHANH</button>
          </div>
     
        </div>
      
        <div class="name-product special-name">
        <h3>${value.name}</h3>
      </div>
       
       
    
      <div class="subcribe ">
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
      <div class=" btn-add">
      <button  >MUA TRỌN BỘ COMBO</button>
      </div>
    </div>
        </div>
      `;
    });
    const main = document.querySelector("#kemchongnang");
   
    main.appendChild(sliderContainer);
   
 
    $(`#${sliderId}`).slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 4,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }
      ]
    });
  });



  const productsChunksDuongthe = chunkArray(Object.entries(data5), getChunkSize());
  productsChunksDuongthe.forEach((products, index) => {
    const sliderId = `slider-duongthe-${index}`;
    const sliderContainer = document.createElement('div');
    sliderContainer.className = 'slider-product';
    sliderContainer.id = sliderId;
    products.forEach(([key, value]) => {
      sliderContainer.innerHTML += `
        <div class="item-product-home">
        <div class="item-product-home">
        <div class="img-product">
          <img src="${value.img1}" alt="" width="100%">
          <div class="img-hover mini-product">
            <img src="${value.img2}" alt="" width="100%">
            <button class="btn-view-more btn-mini" >XEM NHANH</button>
          </div>
     
        </div>
      
        <div class="name-product special-name">
        <h3>${value.name}</h3>
      </div>
     
       
    
      <div class="subcribe  special-sub">
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
      <div class="btn-add ">
      <button >MUA TRỌN BỘ COMBO</button>
      </div>
    </div>
        </div>
      `;
    });
    const main = document.querySelector("#duongthe");
   
    main.appendChild(sliderContainer);
   
 
    $(`#${sliderId}`).slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 4,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }
      ]
    });
  });


  const addToCartButtons = document.querySelectorAll('.btn-add-to-cart button');
   // Hàm để lưu thông tin sản phẩm vào local storage
   const addToCart = async (category, key) => {
    const res = await fetch(`https://data-kieh-default-rtdb.firebaseio.com/${category}/${key}.json`);
    const data = await res.json();
    let selectedItems = localStorage.getItem('selectedItems') ? JSON.parse(localStorage.getItem('selectedItems')) : [];
    const quantity = 1;
    const existingProduct = selectedItems.find(item => item.name === data.nameSheet);
    
    if (!existingProduct) {
      // Nếu sản phẩm chưa tồn tại trong giỏ hàng, thêm nó vào với số lượng và giá mặc định
      selectedItems.push({ name: data.nameSheet, gift: data.gift, img: data.img1, name2:data.name , price: data.price, quantity: quantity });
    } else {
      // Nếu sản phẩm đã tồn tại trong giỏ hàng, cập nhật số lượng và giá
      existingProduct.quantity += 1;
      existingProduct.price = data.price * existingProduct.quantity;
    }
    localStorage.setItem('selectedItems', JSON.stringify(selectedItems));
    var cartLength = selectedItems.length;
    showPopupCart(data, existingProduct ? existingProduct.quantity : quantity, existingProduct ? existingProduct.price : data.price);
    popupCart.classList.add('open-popup-cart');
    overlay.classList.add('active-overlay');
    document.querySelector('.cart span').textContent = `GIỎ HÀNG (${cartLength})`
    document.querySelector('.cart-mobile span').textContent = `${cartLength}`
  };
  
  addToCartButtons.forEach(button => {
      button.addEventListener('click', () => {
        const category = button.getAttribute('data-category');
        const key = decodeURIComponent(button.getAttribute('data-key'));
        addToCart(category, key)
      });
  });

  
})();


})();
