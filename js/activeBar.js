
const cartI = localStorage.getItem('selectedItems') 
const cartDb = JSON.parse(cartI)
let numberCart
if(cartDb){
    numberCart = cartDb.length
} else{
    numberCart = 0
}

console.log(numberCart);
const header = document.querySelector('.header-mobile')
header.innerHTML += `
<div class="nav-mobile">
<div class="map-mobile">
    <i class="fa fa-map-marker" aria-hidden="true"></i>
</div>
<div class="logo-mobile">
    <img src="./img/logo.png" alt="" width="150px">
</div>
<div class="right-mobile">
<a href="../cart.html">
<div class="cart-mobile">
        <img src="./img/bag.svg" alt="" width="25px">
        <span>${numberCart}</span>
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
