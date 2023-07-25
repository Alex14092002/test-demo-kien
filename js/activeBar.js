let selectedItems = JSON.parse(localStorage.getItem("selectedItems")) || []
const header = document.querySelector('.header-mobile')
const headerDesktop = document.querySelector('.header-desktop')

let param = window.location.pathname
const checkPage = () =>{
    if(param === '/vi_vn-offers-page.html'){
        return true
    }
    else {
        return false
    }
}
checkPage()
console.log(param);
headerDesktop.innerHTML += `
<div class="container">
<div class="top-header ">    
    <div class="nav-left">
        <ul>
            <li class="li-1"> ₫ - VN (VI) <i class="fa fa-chevron-down" aria-hidden="true"></i></li>
            <li class="li-1">CHĂM SÓC KHÁCH HÀNG</li>
            <li><i class="fa fa-map-marker" aria-hidden="true"></i></li>
        </ul>
    </div>
    
    <div class="nav-left nav-right">
        <div class="logo">
            <a href="./vi_vn-offers-page.html"> <img src="./img/logo.png" alt="" width="250px"></a>
           
        </div>
        <ul >
            <li class="li-1 li-2">KIEHL'S REWARDS</li>
            <li class="li-1 li-2">EMAIL ĐĂNG KÝ</li>
            <li class="li-1 li-2">TÀI KHOẢN CỦA TÔI</li>
            <li class="cart"> 
            <a href="/cart.html">
            <img src="./img/bag.svg" alt="" width="25px">
            <span>GIỎ HÀNG (${selectedItems.length})</span> </li>
           
            </a>
           
            
        </ul>
    </div>
</div>
<div class="top-search">
    <input type="text" placeholder="Tôi đang tìm kiếm">
    <i class="fa fa-search" aria-hidden="true"></i>
</div>
<div class="top-bot ">
    <ul>
        <li  > <a href="${checkPage() ? '#tang1' : '/vi_vn-offers-page.html'}"> 🎁 KHUYẾN MÃI</a></li>
        <li class="san-pham-ban-chay submenu-trigger" data-submenu="submenu-1"> <a href="${checkPage() ? '#combo2' : '/vi_vn-offers-page.html'}">❤️ MỚI & BÁN CHẠY</a> </li>
        <li class="submenu-trigger" data-submenu="submenu-2"> <a href="${checkPage() ? '#combo3' : '/vi_vn-offers-page.html'}">SET ƯU ĐÃI</a> </li>
        <li class="submenu-trigger" data-submenu="submenu-3">DƯỠNG DA</li>
        <li class="submenu-trigger" data-submenu="submenu-4">CHĂM SÓC CƠ THỂ</li>
        <li class="submenu-trigger" data-submenu="submenu-5">CHĂM SÓC TÓC</li>
        <li class="submenu-trigger" data-submenu="submenu-6">DÀNH CHO NAM</li>
        <li class="submenu-trigger" data-submenu="submenu-7">DỊCH VỤ TƯ VẤN</li>
        <li class="submenu-trigger" data-submenu="submenu-8"> <a href="/vekiel.html">VỀ KIEHL'S</a> </li>
    </ul>
    
</div>
</div>
<div class="sub-menu-container">
   <div class="sub-menu" id="submenu-1">
      <div class="container">
         <div class="row">
            <div class="col-3">
               <h5>MỚI</h5>
               <ul>
                  <li>Sản Phẩm Bán Chạy</li>
                  <li>Sản Phẩm Mới</li>
               </ul>
            </div>
            <div class="col-3">
               <img src="../img/topnav-about-us-ingredients-810x600.jpg"  width="100%" height="200px"/>
               <h4>SẢN PHẨM BÁN CHẠY</h4>
            </div>
            <div class="col-3">
               <img src="../img/TOPNAVI.jpg" width="100%" height="200px"/>
               <h4>MỚI: BỘ 3 DƯỠNG CHẤT DƯỠNG DA PURE SERUM</h4>
            </div>
         </div>
      </div>
   </div>
   <div class="sub-menu" id="submenu-2">
      <div class="container">
         <div class="row">
            <div class="col-3">
               <h5>SET ƯU ĐÃI</h5>
               <ul>
                  <li>Tất cả</li>
                  <li>Quà Cho Nàng</li>
                  <li>Quà Cho Chàng</li>
               </ul>
            </div>
            <div class="col-3">
               <h5>THEO GIÁ TRỊ</h5>
               <ul>
                  <li>Dưới 1 triệu</li>
                  <li>Trên 1 triệu</li>
                  <li>Trên 2 triệu</li>
               </ul>
            </div>
         </div>
      </div>
   </div>
   <div class="sub-menu" id="submenu-3">
      <div class="container">
         <div class="row-5">
            <div class="item-row-5">
               <h5>DANH MỤC</h5>
               <ul>
                  <li>Tất Cả</li>
                  <li>Sữa Rửa Mặt & Làm Sạch Tế Bào Da Chết</li>
                  <li>Nước Cân Bằng</li>
                  <li>Dướng Mắt</li>
                  <li>Tinh Chất</li>
                  <li>Giải Pháp Giảm Mụn</li>
                  <li>Tinh Chất Dưỡng Dạng Dầu</li>
                  <li>Dưỡng Ẩm</li>
                  <li>Mặt Nạ</li>
                  <li>Chống Nắng</li>
                  <li>Dưỡng Môi</li>
               </ul>
            </div>
            <div class="item-row-5">
               <h5>LOẠI DA</h5>
               <ul>
                  <li>Da Khô</li>
                  <li>Da Dầu</li>
                  <li>Da Thường</li>
                  <li>Da Hỗn Hợp</li>
                  <li>Da Nhạy Cảm</li>
               </ul>
            </div>
            <div class="item-row-5">
               <h5>VẤN ĐỀ VỀ DA</h5>
               <ul>
                  <li>Chăm Sóc Da Dầu Mụn</li>
                  <li>Ngăn Ngừa Lão Hóa</li>
                  <li>Nâng & Săn Chắc Da</li>
                  <li>Đốm Nâu & Thâm Nám</li>
                  <li>Lỗ Chân Lông To</li>
                  <li>Da Không Đều Màu</li>
                  <li>Nếp Nhắn & Đường Nhăn Mảnh</li>
                  <li>Da Xỉn Màu</li>
               </ul>
            </div>
            <div class="item-row-5">
               <h5>DÒNG SẢN PHẨM</h5>
               <ul>
                  <li>Calendula</li>
                  <li>Clearly Corrective Collection</li>
                  <li>Retinol</li>
                  <li>Dermatologist Solutions™</li>
                  <li>Rare Earth</li>
                  <li>Ultra Facial</li>
                  <li>Ultra Facial Oil-Free</li>
                  <li>Midnight Recovery</li>
                  <li>Powerful-Strength Line-Reducing</li>
                  <li>Powerful Wrinkle Reducing</li>
                  <li>Super Multi-Corrective</li>
                  <li>Blue Herbal</li>
               </ul>
            </div>
            <div class="item-row-5">
               <img src="../img/Topnav_retinol.jpg" width="100%" height="200px"/>
               <h4>RETINOL GIÚP TÁI TẠO DA TỐI ƯU</h4>
            </div>
         </div>
      </div>
   </div>
   <div class="sub-menu" id="submenu-4">
      <div class="container">
         <div class="row">
            <div class="col-3">
               <h5>DANH MỤC</h5>
               <ul>
                  <li>Tất cả</li>
                  <li>Sữa Tắm & Tẩy Tế Bào Chết</li>
                  <li>Dưỡng Thể</li>
                  <li>Dưỡng Da Tay</li>
                  <li>Nước Hoa</li>
                  <li>Mẹ & Bé</li>
                  <li>Vệ Sinh Và Khử Mùi</li>
               </ul>
            </div>
            <div class="col-3">
               <h5>DÒNG SẢN PHẨM</h5>
               <ul>
                  <li>Creme de Corps</li>
                  <li>Musk</li>
                  <li>Ultimate Strength Hand Salve</li>
               </ul>
            </div>
            <div class="col-3">
            <img src="../img/topnav-cdc-810x600.jpg" width="100%" height="200px"/>
            <h4>BỘ SƯU TẬP CREME DE CORPS</h4>
         </div>
         </div>
      </div>
   </div>
   <div class="sub-menu" id="submenu-5">
      <div class="container">
         <div class="row">
            <div class="col-3">
               <h5>DANH MỤC</h5>
               <ul>
                  <li>Tất cả</li>
                  <li>Dầu Gội</li>
                  <li>Dầu Xả</li>
                  <li>Tạo Kiểu Tóc</li>
                  <li>Dưỡng Tóc</li>
                  
               </ul>
            </div>
            <div class="col-3">
               <h5>VẤN ĐỀ VỀ TÓC</h5>
               <ul>
                  <li>Tóc Nhuộm</li>
                  <li>Da Đầu Khô & Gàu</li>
                  <li>Tóc Mỏng, Thưa & Hư tổn</li>
                  <li>Tóc Thường</li>
                  <li>Tóc Khô</li>
               </ul>
            </div>
            <div class="col-3">
            <h5>DÒNG SẢN PHẨM</h5>
            <ul>
               <li>Amino Acid</li>
               <li>Olive Fruit Oil</li>
               <li>Sunflower Color Preserve</li>
               <li>Rice and Wheat</li>
               <li>Stylist Series</li>
            </ul>
         </div>
            <div class="col-3">
            <img src="../img/topnav-amino-acid-810x600.jpg" width="100%" height="200px"/>
            <h4>BỘ SƯU TẬP AMINO ACID</h4>
         </div>
         </div>
      </div>
   </div>
   <div class="sub-menu" id="submenu-6">
      <div class="container">
         <div class="row">
            <div class="col-3">
               <h5>DANH MỤC</h5>
               <ul>
                  <li>Tất cả</li>
                  <li>Sản Phẩm Bán Chạy</li>
                  <li>Sữa Rửa Mặt</li>
                  <li>Cạo Râu</li>
                  <li>Dưỡng Ẩm</li>
                  <li>Dưỡng Thể & Khử Mùi</li>
                  <li>Tạo Kiểu</li>
                  <li>Dưỡng Mắt & Môi</li>
               </ul>
            </div>
            <div class="col-3">
               <h5>SẢN PHẨM CHO NAM</h5>
               <ul>
                  <li>Age Defender</li>
                  <li>Facial Fuel</li>
                  <li>Ultra Facial</li>
                  <li>Ultra Facial Oil-Free</li>
                  <li>Men’s Grooming Solution</li>
                  <li>Men's Oil Eliminator</li>
               </ul>
            </div>

            <div class="col-3">
            <img src="../img/topnav-mens-bestsellers-810x600.jpg" width="100%" height="200px"/>
            <h4>SẢN PHẨM BÁN CHẠY</h4>
         </div>
         </div>
      </div>
   </div>
   <div class="sub-menu" id="submenu-7">
   <div class="container">
      <div class="row">
         <div class="col-3">
            <h5>DỊCH VỤ</h5>
            <ul>
               <li>Kiehl's Instant Skin Reader</li>
            </ul>
         </div>
         

         <div class="col-3">
         <img src="../img/kie_skin_multi_beautyreader_launch21_KISR_TopNav_Web_810x600 (1).jpg" width="100%" height="200px"/>
         <h4>CÔNG NGHỆ SOI DA KIEHL'S INSTANT SKIN READER</h4>
      </div>
      </div>
   </div>
</div>


<div class="sub-menu" id="submenu-8">
<div class="container">
   <div class="row">
      <div class="col-3">
         <h5>VỀ KIEHL'S</h5>
         <ul>
            <li>Lịch Sử Hình Thành</li>
            <li>Phát Triển Bền Vững</li>
            <li>Thành Phần</li>
            <li>Chương Trình Thiện Nguyện</li>
            <li>Kiehl's Blogs</li>
            <li>Da khô là gì</li>
         </ul>
      </div>
      
      <div class="col-3">
      <img src="../img/topnav-about-us-ingredients-810x600.jpg" width="100%" height="200px"/>
      <h4>THÀNH PHẦN</h4>
   </div>
      <div class="col-3">
      <img src="../img//Topnav_KHL-BLOGS.jpg" width="100%" height="200px"/>
      <h4>KIEHL'S BLOGS</h4>
   </div>
   </div>
</div>
</div>
</div>

`
header.innerHTML += `
<div class="nav-mobile">
<div class="map-mobile">
    <i class="fa fa-map-marker" aria-hidden="true"></i>
</div>
<div class="logo-mobile">
    <a href="../vi_vn-offers-page.html">
    <img src="./img/logo.png" alt="" width="150px">
    </a>
    
</div>
<div class="right-mobile">
<a href="../cart.html">
<div class="cart-mobile">
        <img src="./img/bag.svg" alt="" width="25px">
        <span>${selectedItems.length}</span>
    </div>
</a>
    
    <div class="menu">
        <i class="fa fa-bars" aria-hidden="true"></i>
    </div>
</div>
</div>  

<div class="input-search-mobile">
<input type="text" name="" id="" placeholder="Tôi đang tìm kiếm...">
</div>


<div class="list-menu-mobile">
<ul>
    
<li> <a href="${checkPage() ? '#tang1' : '/vi_vn-offers-page.html'}"> 🎁 KHUYẾN MÃI</a></li>
<li> <a href="${checkPage() ? '#combo2' : '/vi_vn-offers-page.html'}">❤️ MỚI & BÁN CHẠY</a> </li>
<li> <a href="${checkPage() ? '#combo3' : '/vi_vn-offers-page.html'}">SET ƯU ĐÃI</a> </li>
    <li>DƯỠNG DA</li>
    <li>CHĂM SÓC CƠ THỂ</li>
    <li>CHĂM SÓC TÓC</li>
    <li>DÀNH CHO NAM</li>
    <li>DỊCH VỤ TƯ VẤN</li>
    <li> <a href="/vekiel.html">VỀ KIEHL'S</a> </li>
</ul>
</div>


<div class="bar-mobile">
<h5>ĐĂNG NHẬP HOẶC ĐĂNG KÝ</h5>
<ul>
 
    <li>🎁 KHUYẾN MÃI <i class="fa fa-plus" aria-hidden="true"></i> </li>
    <li>❤️ MỚI & BÁN CHẠY <i class="fa fa-plus" aria-hidden="true"></i> </li>
    <li>SET ƯU ĐÃI <i class="fa fa-plus" aria-hidden="true"></i> </li>
    <li>DƯỠNG DA <i class="fa fa-plus" aria-hidden="true"></i> </li>
    <li>CHĂM SÓC CƠ THỂ <i class="fa fa-plus" aria-hidden="true"></i> </li>
    <li>CHĂM SÓC TÓC <i class="fa fa-plus" aria-hidden="true"></i> </li>
    <li>DÀNH CHO NAM <i class="fa fa-plus" aria-hidden="true"></i> </li>
    <li>DỊCH VỤ TƯ VẤN <i class="fa fa-plus" aria-hidden="true"></i> </li>
    <li>VỀ KIEHL'S <i class="fa fa-plus" aria-hidden="true"></i> </li>
</ul>
<h5 class="đ"> ₫ - VN (VI) </h5>
<ul class="acc">
    <li><i class="fa fa-user-o" aria-hidden="true"></i> My account</li>
    <li class="td">Theo dõi đơn hàng</li>
    <li><i class="fa fa-map-marker" aria-hidden="true"></i> Vị trí cửa hàng</li>
    <li><i class="fa fa-volume-control-phone" aria-hidden="true"></i>CHĂM SÓC KHÁCH HÀNG</li>
</ul>
<div class="btn-closes">
    <button>X</button>
</div>
</div>
`



const btnOpen = document.querySelector('.menu i')
const bar = document.querySelector('.bar-mobile')
const btnClose = document.querySelector('.btn-closes button')
const overlays = document.createElement('div');
overlays.classList.add('overlay');
document.body.appendChild(overlays);
console.log(btnOpen , bar);
btnOpen.addEventListener('click', ()=>{
    bar.classList.toggle('active-mobile-bar')
    overlays.classList.toggle('active-overlay');
})
btnClose.addEventListener('click' , ()=>{
    bar.classList.remove('active-mobile-bar')
    overlays.classList.toggle('active-overlay');
})



// const btnGiam10 = document.querySelector('.popup-giam10')
// const popup = document.querySelector('.popup-main-giam10')
// btnGiam10.addEventListener('click',()=>{
//     popup.classList.toggle('visible')
//     overlays.classList.toggle('active-overlay');
// })


$(document).ready(function() {
    var lastScrollTop = 0;
  
    $(window).on('scroll', function() {
      var scrollPosition = $(this).scrollTop();
      if (scrollPosition < lastScrollTop) {
        $('.header-desktop').addClass('ghim');
      } else {
        $('.header-desktop').removeClass('ghim');
      }
  
      // Kiểm tra khi cuộn lên đầu trang (0), sẽ bỏ ghim
      if (scrollPosition === 0) {
        $('.header-desktop').removeClass('ghim');
      }
  
      lastScrollTop = scrollPosition;
    });
  });
  

  $(document).ready(function() {
    var lastScrollTop = 0;
  
    $(window).on('scroll', function() {
      var scrollPosition = $(this).scrollTop();
      if (scrollPosition < lastScrollTop) {
        $('.header-mobile').addClass('ghim');
      } else {
        $('.header-mobile').removeClass('ghim');
      }
  
      // Kiểm tra khi cuộn lên đầu trang (0), sẽ bỏ ghim
      if (scrollPosition === 0) {
        $('.header-mobile').removeClass('ghim');
      }
  
      lastScrollTop = scrollPosition;
    });
  });
  





// Lấy tất cả các submenu-trigger li
const submenuTriggers = document.querySelectorAll('.submenu-trigger');

// Lấy tất cả các submenu
const submenus = document.querySelectorAll('.submenu');

// Lưu submenu hiện tại đang hoạt động
let activeSubmenu = null;

// Thêm event listener cho từng submenu-trigger li
submenuTriggers.forEach((trigger) => {
  trigger.addEventListener('mouseenter', () => {
    // Ẩn submenu hiện tại đang hoạt động (nếu có)
    if (activeSubmenu) {
      activeSubmenu.style.display = 'none';
      
    }

    // Lấy data-submenu của li đang hover
    const submenuId = trigger.getAttribute('data-submenu');

    // Hiển thị submenu tương ứng
    activeSubmenu = document.getElementById(submenuId);
    if (activeSubmenu) {
      activeSubmenu.style.display = 'block';
      headerDesktop.style.paddingBottom = '0px'
      
    }
  });

  // Thêm event listener để ẩn submenu khi rời chuột khỏi li
  trigger.addEventListener('mouseleave', () => {
    if (activeSubmenu) {
      activeSubmenu.style.display = 'none';
      headerDesktop.style.paddingBottom = '5px'
      activeSubmenu = null;
    }
  });
});