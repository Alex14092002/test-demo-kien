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
        <div class="row main-product-home" id="tang1">
     
            
            
        </div>
    </div>


    <div class="container">
        <div class="banner-5">
        <img src="${data.banner8}" alt="" width="100%">
        </div>
        <div class="row main-product-home" id="combo2">
          
            
            
        </div>
    </div>


    <div class="container">
        <div class="banner-5">
        <img src="${data.banner9}" alt="" width="100%">
        </div>
        <div class="row main-product-home" id="combo3">
         
            
            
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
                            <img src="${value.img2}" alt="" width="100%">
                            <button class="btn-view-more" onclick="showPopup('homeproduct' ,${key})">XEM NHANH</button>
                        </div>
                    </div>
                    <div class="name-product">
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
                <div class="btn-add">
                    <button>MUA TRỌN BỘ COMBO</button>
                </div>
            </div>
            `
        })

    }

})()
})();


