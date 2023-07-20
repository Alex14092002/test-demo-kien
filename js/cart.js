const cartJSON = localStorage.getItem('selectedItems')
const cart = JSON.parse(cartJSON);
console.log(cart);
function formatCurrency(number) {
    const parts = number.toString().split(".");
    const integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    const decimalPart = parts[1] ? `.${parts[1]}` : "";
    return `₫ ${integerPart}${decimalPart}`;
}
const carts = document.querySelector('#cart')
const mainCart = document.querySelector('.main-cart')
let names =[]

if(cart){
    Object.entries(cart).map(([key, value])=>{
        const productInfo = `${value.name} - ${value.quantity}`;
        names.push(productInfo);
        carts.innerHTML += `
        <div class="item-cart">
        <div class="row cart">
            <div class="col-6 col-md-2">
                <img src="${value.img}" alt="" width="100%">
              </div>
              <div class="col-6 col-md-6 cart-mem add-cart gift-popup">
                <h5>${value.name}</h5>
                <div class="--cart">
                    <p>Chỉnh sửa</p>
                    <p>Thêm vào danh sách</p>
                    <p class="cancle">Bỏ</p>
                </div>
              </div>
              <div class="col-6 col-md-2 add-cart">
                <div class="quantity-control">
                  <button class="quantity-btn decrease">-</button>
                  <input type="text" readonly class="quantity-input" value="${value.quantity}">
                  <button class="quantity-btn increase">+</button>
                  <label class="quantity-label" for="">Số lượng</label> <br>
                </div>
              </div>
              <div class="col-6 col-md-2">
                <div class="price pricePopup">
                  <h2>${formatCurrency(value.price)}</h2>
                </div>
              </div>
        </div>
    </div>
  
        `
      
    
    })
    const namesString = names.join(", ");
    function showLoading() {
        localStorage.removeItem('selectedItems');
        const loadingText = document.createElement("span");
        loadingText.id = "loadingSpinner";
        loadingText.innerHTML = "&#9679;";
        const loadingMessage = document.createElement("span");
        loadingMessage.textContent = "Đang đặt hàng...";
        const loadingDiv = document.createElement("div");
        loadingDiv.appendChild(loadingText);
        loadingDiv.appendChild(loadingMessage);
        document.getElementById("sss").innerHTML = "";
        document.getElementById("sss").appendChild(loadingDiv);
      }
    mainCart.innerHTML += `
    <script type="text/javascript">
    var submitted = false;
  
   
  </script>
  
  <iframe
    id="hidden_iframe"
    name="hidden_iframe"
    onload="if (submitted) {
      var str = '✔ Bạn đã đặt hàng thành công!';
      document.getElementById('sss').innerHTML = str;
    }"
   
    style="display: none"


  ></iframe>
    <div class="col-12 col-md-4 thanhtoan">
    <div class="--cart-title"> 
        <h5>THANH TOÁN</h5>
    </div>
    <div class="form-tt">
        <div class="container">
            <form
            target="hidden_iframe"
          onsubmit="submitted=true;"
             action="https://script.google.com/macros/s/AKfycbx5HQo1Ipdvdu9mVPFcW6NFtLhSijnocOBPz5dSq0LzBEgTR31ebxeEOZJJKK8IBNqm/exec" method="GET">
                <div class="row form-detail">
                    <div class="col-4">
                        <label for="">Tên Khách Hàng</label>
                    </div>
                    <div class="col-8">
                        <input type="text" name="tenkh" placeholder="Nhập tên của bạn"> <br>
                    </div>
                    <div class="col-4">
                        <label for="">Địa chỉ</label>
                    </div>
                    <div class="col-8">
                        <input type="text" name="diachi" placeholder="Nhập địa chỉ"> <br>
                    </div>
                    <div class="col-4">
                        <label for="">Số điện thoại</label>
                    </div>
                    <div class="col-8">
                        <input type="text" name="sđt" placeholder="Nhập số điện thoại"> <br>
                        <input hidden type="text" name="sanpham_sl"   class="sp" value="${namesString}" > <br>
                    </div>
                  
                </div>
                <div class="btn-thanhtoan">
                    <button type="submit"  onclick="showLoading()">THANH TOÁN</button>
                </div>
                <h5 id="sss"></h5>
              

            </form>
        </div>
        
    </div>
</div>
    `
    console.log(document.querySelector('.sp').value);
    
} else{
    mainCart.innerHTML += `
    <h1>GIỎ HÀNG CỦA BẠN TRỐNG</h1>
    `
}
