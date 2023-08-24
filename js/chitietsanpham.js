const overlay = document.createElement('div');
overlay.classList.add('overlay');
document.body.appendChild(overlay);

function formatCurrency(number) {
    const parts = number.toString().split(".");
    const integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    const decimalPart = parts[1] ? `.${parts[1]}` : "";
    return `₫ ${integerPart}${decimalPart}`;
  }
  let params = new URLSearchParams(location.search);
  let catelory = params.get("catelory");
  let key = params.get("key");
(async () => {
 
  const res = await fetch(
    `https://data-kieh-default-rtdb.firebaseio.com/${catelory}/${key}.json`
  );
  const data = await res.json()
  console.log(data);
  const descriptionHeight = data.subcibe.split('\n').length;
  const main = document.querySelector(`.main-chi-tietsp`)
  if(data){
    main.innerHTML += `
    <div class="container">
    <div class="main-chitietsp row">
        <div class="col-12 col-md-6 slider-chitiet">
        <div>
        <div style="--swiper-navigation-color: #fff; --swiper-pagination-color: #fff" class="swiper mySwiper2">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="${data.img1}" />
          </div>
          <div class="swiper-slide">
            <img src="${data.img2}" />
          </div>
        
        </div>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
      </div>
      <div thumbsSlider="" class="swiper mySwiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="${data.img1}" />
          </div>
          <div class="swiper-slide">
            <img src="${data.img2}" />
          </div>
         
        </div>
      </div>
    
        </div>
         
        </div>
        <div class="col-12 col-md-6 name-chitiet">
            <div class="detail-product">
                <h1>${data.name}</h1>
                <span>Dành cho mọi loại da, kể cả da nhạy cảm</span>
                <textarea class="textArea" readonly rows="${descriptionHeight + 2}" cols="auto">${data.subcibe}</textarea>
                <h5>Quà tặng kèm sẽ hiện thị đủ trong giỏ hàng.</h5>
            </div>
            <div class="heart heart-popup">
                <i class="fa fa-heart" aria-hidden="true"></i>
                <i class="fa fa-heart" aria-hidden="true"></i>
                <i class="fa fa-heart" aria-hidden="true"></i>
                <i class="fa fa-heart" aria-hidden="true"></i>
                <i class="fa fa-heart" aria-hidden="true"></i>
              </div>
              <div class="price-chitiet">
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
                    <button>MUA NGAY</button>
                  </div>
                </div>
              </div>

              <div class="gift gift-chi-tiet">
                <span>COMBO BAO GỒM </span>
                <div class="row" id="chitiet-combo">

                   
                  
                </div>
              </div>
        </div>
    </div>
</div>

<div class="code">
    <h5>Nhập mã <strong>WELCOME10</strong>, giảm 10% (tối đa 200k) cho khách hàng mới. Miễn phí vận chuyển cho mọi đơn hàng</h5>
</div>
<br> 

<div class="code">
    <h5>Chỉ 3 phút để hiểu rõ làn da <strong>Soi Da Online Ngay</strong> </h5>
</div>

<div class="container">
    <div class="row gioithieu">
        <div class="col-12 col-md-6 item-gioithieu">
            <h1>Giới Thiệu Chung</h1>
            <p>${data.subcribeCD}</p>
        </div>
        <div class="col-12 col-md-6 item-gioithieu">
            <h1>Công Dụng Sản Phẩm</h1>
            <ul id="cd">
              
            </ul>
        </div>
    </div>
    <hr style="border: 1px solid #b1b1b1;">

    <div class="item-gioithieu thanhphan">
        <h1>Thành Phần Chính</h1>
    </div>
    <div class="slider-thanhphan">
     
     

      
    </div>

    <hr style="border: 1px solid #b1b1b1;">
    <div class="row gioithieu">
        <div class="col-12 col-md-6 item-gioithieu">
          <img src="https://www.kiehls.com.vn/dw/image/v2/BFZM_PRD/on/demandware.static/-/Sites-kiehls-vn-ng-Library/vi_VN/dw9903ee51/images/pdp/how-to-apply/how-to-apply-stills/kiehls-how-to-use.jpg?sw=570&q=70" alt="" width="100%">
        </div>
        <div class="col-12 col-md-6 item-gioithieu">
            <h1>Hướng Dẫn Sử Dụng</h1>
            <ul id="huongdan">
              
            </ul>
        </div>
    </div>

    <hr style="border: 1px solid #b1b1b1;">


    <div class="end-chitiet">
        <div class="logo-future">
            <img src="https://www.kiehls.com.vn/dw/image/v2/BFZM_PRD/on/demandware.static/-/Sites-kiehls-vn-ng-Library/default/dw016791d8/images/pdp/made-better/made-better-stamp.jpg?sw=100&sh=100&sm=cut&q=70" alt="" width="100px">
        </div>
        <div class="item-gioithieu thanhphan">
            <h1>Future Made Better</h1>
            <p>Gìn giữ trọn vẹn sứ mệnh của Kiehl's từ ngày đầu thành lập, chúng tôi luôn nỗ lực cải thiện chất lượng cộng đồng chung bằng cách giảm thiểu tối đa
                tác động đến môi trường, sản xuất có trách nhiệm, và hết mình ủng hộ các chiến dịch thiện nguyện. Sản phẩm này được chứng nhận:
                </p>
        </div>
        <div class="logo-future">
            <img src="https://www.kiehls.com.vn/dw/image/v2/BFZM_PRD/on/demandware.static/-/Sites-kiehls-vn-ng-Library/default/dw0679268a/images/pdp/made-better/responsible%20formulation.png?sw=48" alt="" width="50px">
            <p>Sản xuất có trách nhiệm</p>
        </div>
        <div class="btn-timhieu">
            <button>TÌM HIỂU THÊM</button>
        </div>

        <div class="row">
            <div class="col-12 col-md-3 danhgia">
                <h5>ĐÁNH GIÁ</h5>
                <h5>NHẬN XÉT CỦA TÔI</h5>
                <p>Hãy chia sẻ đánh giá của bạn cho những khách hàng khác</p>
                <button>VIẾT NHẬN XÉT</button>
            </div>
        </div>

    </div>
</div>
    `



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

  const res2 = await fetch(`https://data-kieh-default-rtdb.firebaseio.com/${catelory}/${key}/list.json`)
  const data2 = await res2.json()
  const divChitiet = document.querySelector('#chitiet-combo')

  if(data2){
    Object.entries(data2).map(([key , value]) =>{
        divChitiet.innerHTML += `
        <div class="col-3">
        <img src="${value.img}" alt="" width="100%">
      </div>
      <div class="col-9 gift-popup">
        <h5>${value.name}</h5>
        
        <span>${value.dungtich}</span> <br>
        <span>Số lượng: ${value.soluong}</span>
      </div>
        `
    })
  }

  const res3 = await fetch(`https://data-kieh-default-rtdb.firebaseio.com/${catelory}/${key}/cd.json`)
  const data3 = await res3.json()

  const divCongdung = document.querySelector(`#cd`)
  if(data3){
    Object.entries(data3).map(([key , value])=>{
        divCongdung.innerHTML += `
            <li>${value.content}</li>
        `
    })
  }
  
  const res4 = await fetch(`https://data-kieh-default-rtdb.firebaseio.com/${catelory}/${key}/tp.json`)
  const data4 = await res4.json()

  const divThanhphan = document.querySelector('.slider-thanhphan')
  if(data4){
    Object.entries(data4).map(([key , value]) =>{
        divThanhphan.innerHTML += `
        <div class="item-thanhphan">
        <div class="img-thanhphan">
            <img src="${value.img}" alt="" width="100%">
        </div>
        <div class="name-thanh-phan">
            <h5>${value.name}</h5>
        </div>
        <div class="mota-thanhphan">
            <p>${value.mota}</p>
        </div>
    </div>
        `
    })
  }


  const res5 = await fetch(`https://data-kieh-default-rtdb.firebaseio.com/${catelory}/${key}/hdsd.json`)
  const data5 = await res5.json()

  const divHuongdan = document.querySelector('#huongdan')
  if(data5){
    Object.entries(data5).map(([key, value])=>{
        divHuongdan.innerHTML += `
            <li>${value.content}</li>
        `
    })
  }





  $('.slider-thanhphan').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
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
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });



  const showPopupCart = (data, selectedQuantity ,priceTotal ) => {
    overlay.classList.toggle('active-overlay');
    const popupCart = document.querySelector('.popup-themgiohang');
    
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

    popupCart.classList.add('open-popup-cart');
  
    const closeCart = document.querySelector('.close-popup-cart');
    closeCart.addEventListener('click', () => {
      popupCart.classList.remove('open-popup-cart');
      overlay.classList.toggle('active-overlay');
    });
    const tieptuc = document.querySelector('.tieptuc')
    tieptuc.addEventListener('click', ()=>{
      window.location.href = "../index.html"
    })
  
    const getCart = document.querySelector('.getCart')
    getCart.addEventListener('click' , ()=>{
        window.location.href = "cart.html"
    })
  };



  let quantity = 1;
const quantityInput = document.querySelector(".quantity-input");
const decreaseBtn = document.querySelector(".quantity-btn.decrease");
const increaseBtn = document.querySelector(".quantity-btn.increase");
const muaTronBoComboBtn = document.querySelector(".btn-add button");
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

muaTronBoComboBtn.addEventListener("click", () => {
  const productName = data.nameSheet;
  const gift = data.gift
  const price = data.price
  const img = data.img1
  const name2 = data.name
const selectedQuantity = parseInt(quantityInput.value);
let selectedItems = localStorage.getItem("selectedItems");
selectedItems = selectedItems ? JSON.parse(selectedItems) : [];
const existingItemIndex = selectedItems.findIndex(item => item.name === productName);

if (existingItemIndex !== -1) {
selectedItems[existingItemIndex].quantity += selectedQuantity;
selectedItems[existingItemIndex].price += price*selectedQuantity
} else {
selectedItems.push({ name: productName, quantity: selectedQuantity , gift : gift , img: img, name2 : name2, price : price*selectedQuantity});
}
localStorage.setItem("selectedItems", JSON.stringify(selectedItems));

const priceTotal = price*selectedQuantity
showPopupCart(data, selectedQuantity , priceTotal); // Hiển thị popup giỏ hàng với thông tin sản phẩm đã được chọn
localStorage.setItem('selectedItems', JSON.stringify(selectedItems));
});
const gioithieu = document.querySelectorAll('.gioithieu')
const thanhphan = document.querySelector('.thanhphan')
const sliderTP = document.querySelector('.slider-thanhphan')
const hr = document.querySelectorAll('hr')
console.log(hr);
console.log(thanhphan);
console.log(catelory);

if(catelory == 'combo2' || catelory == 'combo3'){
  thanhphan.style.display = 'none'
  sliderTP.style.display = 'none'
  gioithieu.forEach((div)=>{
    div.style.display = 'none'
  })
  hr.forEach((item) =>{
    item.style.display = 'none'
  })
}
})();

