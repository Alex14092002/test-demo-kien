let selectedItems = JSON.parse(localStorage.getItem("selectedItems")) || []
const header = document.querySelector('.header-mobile')
const headerDesktop = document.querySelector('.header-desktop')



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
            <a href="/vi_VN/offers-page.html.html"> <img src="../img/logo.png" alt="" width="250px"></a>
           
        </div>
        <ul >
            <li class="li-1 li-2">KIEHL'S REWARDS</li>
            <li class="li-1 li-2">EMAIL ĐĂNG KÝ</li>
            <li class="li-1 li-2">TÀI KHOẢN CỦA TÔI</li>
            <li class="cart"> 
            <a href="../cart.html">
            <img src="../img/bag.svg" alt="" width="25px">
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
        <li>✨ PURE SERUM</li>
        <li>🎁 KHUYẾN MÃI</li>
        <li>❤️ MỚI & BÁN CHẠY</li>
        <li>SET ƯU ĐÃI</li>
        <li>DƯỠNG DA</li>
        <li>CHĂM SÓC CƠ THỂ</li>
        <li>CHĂM SÓC TÓC</li>
        <li>DÀNH CHO NAM</li>
        <li>DỊCH VỤ TƯ VẤN</li>
        <li> <a href="../vekiel.html">VỀ KIEHL'S</a> </li>
    </ul>
</div>
</div>
`
header.innerHTML += `
<div class="nav-mobile">
<div class="map-mobile">
    <i class="fa fa-map-marker" aria-hidden="true"></i>
</div>
<div class="logo-mobile">
    <a href="../vi_VN/offers-page.html.html">
    <img src="../img/logo.png" alt="" width="150px">
    </a>
    
</div>
<div class="right-mobile">
<a href="../cart.html">
<div class="cart-mobile">
        <img src="../img/bag.svg" alt="" width="25px">
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
    <li>✨ PURE SERUM</li>
    <li>🎁 KHUYẾN MÃI</li>
    <li>❤️ MỚI & BÁN CHẠY</li>
    <li>SET ƯU ĐÃI</li>
    <li>DƯỠNG DA</li>
    <li>CHĂM SÓC CƠ THỂ</li>
    <li>CHĂM SÓC TÓC</li>
    <li>DÀNH CHO NAM</li>
    <li>DỊCH VỤ TƯ VẤN</li>
    <li>VỀ KIEHL'S</li>
</ul>
</div>


<div class="bar-mobile">
<h5>ĐĂNG NHẬP HOẶC ĐĂNG KÝ</h5>
<ul>
    <li>✨ PURE SERUM <i class="fa fa-plus" aria-hidden="true"></i> </li>
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



const btnGiam10 = document.querySelector('.popup-giam10')
const popup = document.querySelector('.popup-main-giam10')
btnGiam10.addEventListener('click',()=>{
    popup.classList.toggle('visible')
    overlays.classList.toggle('active-overlay');
})


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
      lastScrollTop = scrollPosition;
    });
  });