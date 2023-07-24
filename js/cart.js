
const overlay = document.createElement("div");
const cartJSON = localStorage.getItem("selectedItems");
const cart = JSON.parse(cartJSON);
console.log(cart);
overlay.classList.add("overlay");
document.body.appendChild(overlay);
const showPopup = async (product, key) => {
  overlay.classList.toggle("active-overlay");
  const res = await fetch(
    `https://data-kieh-default-rtdb.firebaseio.com/${product}/${key}.json`
  );
  const data = await res.json();
  const popupChitiet = document.querySelector(".popup-xemnhanh");
  popupChitiet.classList.add("open-popup");
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

  const resList = await fetch(
    `https://data-kieh-default-rtdb.firebaseio.com/${product}/${key}/list.json`
  );
  const list = await resList.json();

  const divList = document.querySelector("#item-list");
  if (list) {
    Object.entries(list).map(([key, value]) => {
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
          `;
    });
  }

  const closePopup = document.querySelector(".close-popup-xemnhanh button");
  closePopup.addEventListener("click", () => {
    popupChitiet.classList.remove("open-popup");
    overlay.classList.toggle("active-overlay");
  });

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

  const popupCart = document.querySelector(".popup-themgiohang");

  muaTronBoComboBtn.addEventListener("click", () => {
    const productName = data.name;
    const gift = data.gift;
    const price = data.price;
    const img = data.img1;
    const name2 = data.name;
    const selectedQuantity = parseInt(quantityInput.value);

    selectedItems = selectedItems ? selectedItems : [];
    const existingItemIndex = selectedItems.findIndex(
      (item) => item.name === productName
    );

    if (existingItemIndex !== -1) {
      selectedItems[existingItemIndex].quantity += selectedQuantity;
      selectedItems[existingItemIndex].price += price * selectedQuantity;
    } else {
      selectedItems.push({
        name: productName,
        quantity: selectedQuantity,
        gift: gift,
        img: img,
        name2: name2,
        price: price * selectedQuantity,
      });
    }
    localStorage.setItem("selectedItems", JSON.stringify(selectedItems));
    popupChitiet.classList.remove("open-popup");
    popupCart.classList.add("open-popup-cart");
    const priceTotal = price * selectedQuantity;
    showPopupCart(data, selectedQuantity, priceTotal); // Hiển thị popup giỏ hàng với thông tin sản phẩm đã được chọn
    localStorage.setItem("selectedItems", JSON.stringify(selectedItems));
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
};
const popupCart = document.querySelector(".popup-themgiohang");
const showPopupCart = (data, selectedQuantity, priceTotal) => {
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

  const closeCart = document.querySelector(".close-popup-cart");
  closeCart.addEventListener("click", () => {
    popupCart.classList.remove("open-popup-cart");
    overlay.classList.toggle("active-overlay");
  });
  const tieptuc = document.querySelector(".tieptuc");
  tieptuc.addEventListener("click", () => {
    popupCart.classList.remove("open-popup-cart");
    overlay.classList.remove("active-overlay");
  });

  const getCart = document.querySelector(".getCart");
  getCart.addEventListener("click", () => {
    window.location.href = "cart.html";
  });
};
function formatCurrency(number) {
  const parts = number.toString().split(".");
  const integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const decimalPart = parts[1] ? `.${parts[1]}` : "";
  return `₫ ${integerPart}${decimalPart}`;
}
const carts = document.querySelector("#cart");
const mainCart = document.querySelector(".main-cart");
let total = 0;

function increaseQuantity(key) {
  const quantityInput = document.getElementById(`quantity-input-${key}`);
  const quantity = parseInt(quantityInput.value);
  const newQuantity = quantity + 1;
  quantityInput.value = newQuantity;

  // Update the cart in localStorage with the new quantity
  const cart = JSON.parse(localStorage.getItem("selectedItems"));
  cart[key].quantity = newQuantity;
  cart[key].price = (cart[key].price/quantity * newQuantity)
  localStorage.setItem("selectedItems", JSON.stringify(cart));

  // Update the total price on the page
  updateTotalPrice();
}

function decreaseQuantity(key) {
  const quantityInput = document.getElementById(`quantity-input-${key}`);
  const quantity = parseInt(quantityInput.value);
  if (quantity > 1) {
    const newQuantity = quantity - 1;
    quantityInput.value = newQuantity;

    // Update the cart in localStorage with the new quantity
    const cart = JSON.parse(localStorage.getItem("selectedItems"));
    cart[key].quantity = newQuantity;
    cart[key].price = (cart[key].price/quantity * newQuantity)
    localStorage.setItem("selectedItems", JSON.stringify(cart));

    // Update the total price on the page
    updateTotalPrice();
  }
}

function updateTotalPrice() {
  const cart = JSON.parse(localStorage.getItem("selectedItems"));
  let totals = 0;
  let itemPrice
  let itemQuantity
  Object.values(cart).forEach(item => {
    itemPrice = parseInt(item.price);
    itemQuantity = parseInt(item.quantity);

  });
  totals += itemPrice;
  const totalItem = document.querySelector(".price h2");
  totalItem.textContent = formatCurrency(itemPrice);
  const totalCart = document.querySelector('.tamtinh1')
  const totalCart2 = document.querySelector('.tamtinh2')
  console.log(totals);
  totalCart.textContent = formatCurrency(totals)
  totalCart2.textContent = formatCurrency(totals)

 
}

if (cart) {
  Object.entries(cart).map(([key, value]) => {
    total += parseInt(value.price);
    


    carts.innerHTML += `
        <div class="item-cart">
        <div class="row cart">
            <div class="col-6 col-md-2">
                <img src="${value.img}" alt="" width="100%">
              </div>
              <div class="col-6 col-md-6 cart-mem add-cart gift-popup">
                <h5>${value.name2}</h5>
                <div class="--cart">
                    <p>Chỉnh sửa</p>
                    <p>Thêm vào danh sách</p>
                    <p class="cancle">Bỏ</p>
                </div>
              </div>
              <div class="col-6 col-md-2 add-cart">
                <div class="quantity-control">
                  <button class="quantity-btn decrease giamcart" id="decrease-${key}">-</button>
                  <input type="text" readonly class="quantity-input input-cart" id="quantity-input-${key}"  value="${
                    value.quantity
                  }">
                  <button class="quantity-btn increase tangcart"  id="increase-${key}">+</button>
                  <label class="quantity-label" for="">Số lượng</label> <br>
                </div>
              </div>
              <div class="col-6 col-md-2">
                <div class="price pricePopup">
                  <h2>${formatCurrency(parseInt(value.price))}</h2>
                </div>
              </div>
        </div>
    </div>
  
        `
      
       
        
  });
  
  document.addEventListener("click", event => {
    if (event.target.classList.contains("increase")) {
      increaseQuantity(event.target.id.substring(9)); // Adjust the index here, if needed.
    } else if (event.target.classList.contains("decrease")) {
      decreaseQuantity(event.target.id.substring(9)); // Adjust the index here, if needed.
    }
  });


  mainCart.innerHTML += `
  <div class="col-12 col-md-4">
      <div class="thanhtoan">
      <div class="tamtinh row">
      <div class="col-6 item-tam-tinh left-t">
         <h5>TẠM TÍNH</h5>
      </div>
      <div class="col-6 item-tam-tinh right-t">
         <h4 class="tamtinh1">${formatCurrency(total)}</h4>
      </div>
      <div class="col-6 item-tam-tinh left-t">
         <h5>PHÍ VẬN CHUYỂN </h5>
      </div>
      <div class="col-6 item-tam-tinh right-t">
         <h4>Free</h4>
      </div>
   </div>
   <div class="form-tt">
      
         <h5>Mã khuyến mãi</h5>
         <div class="giamgia">
            <input type="text" class="magiamgia" placeholder="Nhập mã khuyến mãi của"/>
            <button class="apdung">ÁP DỤNG</button>
         </div>
     
   </div>

     <div class="tamtinh row divtongtien">
     <div class="col-6 item-tam-tinh left-t">
     <h5>TỔNG</h5>
  </div>
  <div class="col-6 item-tam-tinh tongtien right-t">
     <h4 class="tamtinh2">${formatCurrency(total)} </h4>
  </div>
     </div>
    
      <div class="btn-thanhtoan-cart">
        <button >THANH TOÁN</button>
      </div>
 </div>
 <div class="cothebanthich">
 <h3>Có Thể Bạn Sẽ Thích</h3>
   <div class="cothethich-slider">

   </div>
</div> 
 
    `;
} else {
  mainCart.innerHTML += `
    <h1>GIỎ HÀNG CỦA BẠN TRỐNG</h1>
    `;
}




(async () => {
  const cothethich = document.querySelector(".cothethich-slider");

  const res = await fetch(
    `https://data-kieh-default-rtdb.firebaseio.com/mua1tang1.json`
  );
  const data = await res.json();
  console.log(data);
  if (data) {
    Object.entries(data).map(([key, value]) => {
      cothethich.innerHTML += `
      <div class="item-product-home">
      <div class="img-product">
         <img src="${value.img1}" alt="" width="100%">
         <div class="img-hover mini-product">
            <img src="${value.img2}" alt="" width="100%">
            <button class="btn-view-more btn-mini btn-xem-nhanh-cart" onclick="showPopup('mua1tang1' ,'${encodeURIComponent(
              key
            )}')"  >XEM NHANH</button>
         </div>
      </div>
      <a href="../chitietsp.html?catelory=mua1tang1&key=${key}">
         <div class="name-product">
            <h3>${value.name}</h3>
         </div>
      </a>
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
      <div class="btn-add btn-add-to-cart add-to-cart">
         <button data-category="combo2" data-key="${encodeURIComponent(
           key
         )}" >MUA TRỌN BỘ COMBO</button>
      </div>
   </div>
      `;
    });
  }

  $(".cothethich-slider").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  });

  const addToCartButtons = document.querySelectorAll(".btn-add-to-cart button");
  // Hàm để lưu thông tin sản phẩm vào local storage
  const addToCart = async (category, key) => {
    const res = await fetch(
      `https://data-kieh-default-rtdb.firebaseio.com/${category}/${key}.json`
    );
    const data = await res.json();

    let selectedItems = localStorage.getItem("selectedItems")
      ? JSON.parse(localStorage.getItem("selectedItems"))
      : [];
    const quantity = 1;
    const existingProduct = selectedItems.find(
      (item) => item.name === data.name
    );

    if (!existingProduct) {
      // Nếu sản phẩm chưa tồn tại trong giỏ hàng, thêm nó vào với số lượng và giá mặc định
      selectedItems.push({
        name: data.nameSheet,
        gift: data.gift,
        img: data.img1,
        name2: data.name,
        price: data.price,
        quantity: quantity,
      });
    } else {
      // Nếu sản phẩm đã tồn tại trong giỏ hàng, cập nhật số lượng và giá
      existingProduct.quantity += 1;
      existingProduct.price = data.price * existingProduct.quantity;
    }
    localStorage.setItem("selectedItems", JSON.stringify(selectedItems));
    var cartLength = selectedItems.length;

    showPopupCart(
      data,
      existingProduct ? existingProduct.quantity : quantity,
      existingProduct ? existingProduct.price : data.price
    );
    popupCart.classList.add("open-popup-cart");
    overlay.classList.add("active-overlay");
    console.log(
      (document.querySelector(".cart-mobile span").textContent = cartLength)
    );
  };
  addToCartButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const category = button.getAttribute("data-category");
      const key = decodeURIComponent(button.getAttribute("data-key"));
      addToCart(category, key);
    });
  });
})();

const magiamgiaInput = document.querySelector(".magiamgia");
const btnAddmagiamgia = document.querySelector(".apdung");
const thanhtoanBtn = document.querySelector('.btn-thanhtoan-cart')
btnAddmagiamgia.addEventListener("click", () => {
  // Lấy giá trị từ input
  const magiamgia = magiamgiaInput.value;

  // Kiểm tra nếu giá trị không rỗng thì lưu vào Local Storage
  if (magiamgia.trim() !== "" && magiamgia !== "") {
    // Sử dụng localStorage.setItem() để lưu giá trị vào Local Storage
    localStorage.setItem("magiamgia", magiamgia);
    console.log("Giá trị đã được lưu vào Local Storage.");
    window.location.href = "../thanhtoan.html";
  } else {
    console.log("Vui lòng nhập mã giảm giá trước khi lưu vào Local Storage.");
    window.location.href = "../thanhtoan.html";
  }
});
thanhtoanBtn.addEventListener("click", () => {
  // Lấy giá trị từ input
  const magiamgia = magiamgiaInput.value;

  // Kiểm tra nếu giá trị không rỗng thì lưu vào Local Storage
  if (magiamgia.trim() !== "" && magiamgia !== "") {
    // Sử dụng localStorage.setItem() để lưu giá trị vào Local Storage
    localStorage.setItem("magiamgia", magiamgia);
    console.log("Giá trị đã được lưu vào Local Storage.");
    window.location.href = "../thanhtoan.html";
  } else {
    console.log("Vui lòng nhập mã giảm giá trước khi lưu vào Local Storage.");
    window.location.href = "../thanhtoan.html";
  }
});