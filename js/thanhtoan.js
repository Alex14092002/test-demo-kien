    let form2 = document.querySelector('.thong-tin-phu');
    let form = document.querySelector('.thong-tin');
    (async () => {
        const res = await fetch(`https://data-kieh-default-rtdb.firebaseio.com/sheet/0.json`);
        const res2 = await fetch(`https://data-kieh-default-rtdb.firebaseio.com/sheet/1.json`);
        const data = await res.json();
        const data2 = await res2.json();
     
       
        form2.action = data2.content;
        form.action = data.content;
        console.log(form2);
        console.log(form);
    })();

    function formatCurrency(number) {
        const parts = number.toString().split(".");
        const integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        const decimalPart = parts[1] ? `.${parts[1]}` : "";
        return `₫ ${integerPart}${decimalPart}`;
    }

    const product = localStorage.getItem('selectedItems');
    const data = JSON.parse(product);
    const ma = localStorage.getItem('magiamgia');
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    document.body.appendChild(overlay);
    let nameString = '';

    data.forEach((item, index) => {
        const productName = item.name;
        const productQuantity = item.quantity;
        const productInfo = `Sản phẩm ${productName} - ${productQuantity}`;
        if (index === data.length - 1) {
            nameString += productInfo;
        } else {
            nameString += productInfo + ', ';
        }
    });

    const popupCamon = document.querySelector('.popup-camon');
    const btnS = document.querySelector('.btn-send-data-dat-hang button');
    const btnXN = document.querySelector('.btn-ok button');

    btnXN.addEventListener('click', () => {
        localStorage.removeItem('selectedItems');
        localStorage.removeItem('magiamgia');
        window.location.href = "../index.html";
    });
    function isValidStringLength(str) {
        // Sử dụng biểu thức chính quy để kiểm tra độ dài chuỗi
        // Quy tắc: chuỗi có độ dài chính xác 10 ký tự.
        const stringLengthRegex = /^.{10}$/;
      
        // Kiểm tra xem chuỗi có khớp với biểu thức chính quy hay không
        return stringLengthRegex.test(str);
      }
    let checkData = document.querySelectorAll('.check-data')

    function removeOpenDataClass() {
        checkData.forEach((element) => {
          element.classList.remove('open-data');
        });
      }
    console.log(checkData); 
    const ho = document.querySelector('#ho');
    const diachi = document.querySelector('#diachi');
    const tinh = document.querySelector('#province');
    const quan = document.querySelector('#district');
    const phuong = document.querySelector('#ward');
    const sdt = document.querySelector('#sdt');
    const phoneCheck = document.querySelector('.phone-check')
    btnS.addEventListener('click', (event) => {
            event.preventDefault(); // Ngăn chặn sự kiện submit mặc định
            const inputProduct = document.querySelector('#product');
            const magiamgia = document.querySelector('#magiamgia');
            magiamgia.value = ma;
            inputProduct.value = nameString;
           
            
        
            if(ho.value.trim() === '' || diachi.value.trim() === '' || tinh.value.trim() === '' || quan.value.trim() === '' || phuong.value.trim() === '' || sdt.value.value === ''){
                console.log('Chưa nhập đủ thông tin');
                checkData.forEach((element) => {
                    element.classList.add('open-data');
                });
                
            } else if (!isValidStringLength(sdt.value)) {
                phoneCheck.classList.add('open-data')
                console.log('thất bại');
            } 
            else {
                form.submit()
                popupCamon.classList.toggle('open-camon');
                overlay.classList.toggle('active-overlay');
                setTimeout(() => {
                    ho.value = "";
                    
                    diachi.value = "";
                    tinh.value = "";
                    quan.value = "";
                    phuong.value = "";
                    sdt.value = "";
                    inputProduct.value = "";
                    magiamgia.value = "";
                }, 2000);
        
                const hoPhu = document.querySelector('#hophu');
                
                const diachiPhu = document.querySelector('#diachiphu');
                const tinhPhu = document.querySelector('#provincephu');
                const quanPhu = document.querySelector('#districtphu');
                const phuongPhu = document.querySelector('#wardphu');
                const sdtPhu = document.querySelector('#sdtphu');
                const inputProductPhu = document.querySelector('#productphu');
                const magiamgiaPhu = document.querySelector('#magiamgiaphu');
                
                hoPhu.value = ho.value;
                diachiPhu.value = diachi.value;
                tinhPhu.value = tinh.value;
                quanPhu.value = quan.value;
                phuongPhu.value = phuong.value;
                sdtPhu.value = sdt.value;
                inputProductPhu.value = inputProduct.value;
                magiamgiaPhu.value = magiamgia.value;
        
                
                form2.submit();
            }


        
    });
    
      
      // Xử lý sự kiện focus trên các ô input
      ho.addEventListener('focus', removeOpenDataClass);
     
      diachi.addEventListener('focus', removeOpenDataClass);
      tinh.addEventListener('focus', removeOpenDataClass);
      quan.addEventListener('focus', removeOpenDataClass);
      phuong.addEventListener('focus', removeOpenDataClass);
      sdt.addEventListener('focus', removeOpenDataClass);    

    const tomtat = document.querySelector('.sp-tom-tat');
    const totalTomtat = document.querySelector('.tom-tat-don-hang');
    let sum = 0;

    data.map((value) => {
        sum += parseInt(value.price);
        tomtat.innerHTML += `
        <div class="container">
            <div class="row item-sp-tomtat">
                <div class="col-3">
                    <img src="${value.img}" alt="" width="100%">
                </div>
                <div class="col-9 item-tomtat">
                    <h5>${value.name2}</h5>
                    <p>Số Lượng: ${value.quantity}</p>
                </div>
            </div>
        </div>`;
    });

    totalTomtat.innerHTML += `
        <div class="container">
            <div class="row total-tomtat">
                <p class="col-6">Tổng phụ</p>
                <p class="col-6 --sp-tomtat">${formatCurrency(sum)}</p>
            </div>
            <div class="row total-tomtat">
                <p class="col-6">Phí vận chuyển</p>
                <p class="col-6 --sp-tomtat end-tomtat">0đ</p>
            </div>
            <div class="row total-tomtat">
                <p class="col-6 end-tomtat">Tổng tạm tính</p>
                <p class="col-6 --sp-tomtat end-tomtat">${formatCurrency(sum)}</p>
            </div>
        </div>`;
