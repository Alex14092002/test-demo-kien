function formatCurrency(number) {
    const parts = number.toString().split(".");
    const integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    const decimalPart = parts[1] ? `.${parts[1]}` : "";
    return `₫ ${integerPart}${decimalPart}`;
  }
(async () => {
  let params = new URLSearchParams(location.search);
  let catelory = params.get("catelory");
  let key = params.get("key");
  const res = await fetch(
    `https://data-kieh-default-rtdb.firebaseio.com/${catelory}/${key}.json`
  );
  const data = await res.json()
  console.log(data);

  const main = document.querySelector(`.main-chi-tietsp`)
  if(data){
    main.innerHTML += `
    <div class="container">
    <div class="main-chitietsp row">
        <div class="col-12 col-md-6 slider-chitiet">
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
        <div class="col-12 col-md-6 name-chitiet">
            <div class="detail-product">
                <h1>${data.name}</h1>
                <span>Dành cho mọi loại da, kể cả da nhạy cảm</span>
                <p>${data.subcibe}</p>
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
                    <button>MUA TRỌN BỘ COMBO</button>
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
    <h5>Mã <strong>WELCOME10</strong>  giảm 10% tối đa 200k khi là thành viên | Quà tặng trị giá 1.600k cho đơn từ 3.5 triệu <strong>Mua Deal Ngay</strong> </h5>
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
        <p>${value.mota}</p>
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
})();
