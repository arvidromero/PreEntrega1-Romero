import React from "react";

function ItemListContainer({ numClics }) {
  return(
    <div className="App">
         <section class="section-name padding-y-sm">
         <div class="container">
         <header class="section-heading">
            <a href="#" class="btn btn-outline-primary float-end">Ver todos</a>
            <h3 class="section-title">Productos</h3>
         </header>
            
         <div class="row">
            <div class="col-md-3">
               <div href="#" class="card card-product-grid">
                     <a href="#" class="img-wrap"> <img src="assets/images/items/1.jpg" /> </a>
                     <figcaption class="info-wrap">
                        <a href="#" class="title">Playera</a>
                        <div class="price mt-1">$179.00</div> 
                     </figcaption>
               </div>
            </div> 
            <div class="col-md-3">
               <div href="#" class="card card-product-grid">
                     <a href="#" class="img-wrap"> <img src="assets/images/items/2.jpg" /> </a>
                     <figcaption class="info-wrap">
                        <a href="#" class="title">Chamarra</a>
                        <div class="price mt-1">$280.00</div> 
                     </figcaption>
               </div>
            </div> 
            <div class="col-md-3">
               <div href="#" class="card card-product-grid">
                     <a href="#" class="img-wrap"> <img src="assets/images/items/3.jpg" /> </a>
                     <figcaption class="info-wrap">
                        <a href="#" class="title">Short</a>
                        <div class="price mt-1">$56.00</div> 
                     </figcaption>
               </div>
            </div> 
            <div class="col-md-3">
               <div href="#" class="card card-product-grid">
                     <a href="#" class="img-wrap"> <img src="assets/images/items/4.jpg" /> </a>
                     <figcaption class="info-wrap">
                        <a href="#" class="title">Mochila</a>
                        <div class="price mt-1">$179.00</div>
                     </figcaption>
               </div>
            </div> 
            <div class="col-md-3">
               <div href="#" class="card card-product-grid">
                     <a href="#" class="img-wrap"> <img src="assets/images/items/5.jpg" /> </a>
                     <figcaption class="info-wrap">
                        <a href="#" class="title">Mac Book</a>
                        <div class="price mt-1">$179.00</div> 
                     </figcaption>
               </div>
            </div> 
            <div class="col-md-3">
               <div href="#" class="card card-product-grid">
                     <a href="#" class="img-wrap"> <img src="assets/images/items/6.jpg" /> </a>
                     <figcaption class="info-wrap">
                        <a href="#" class="title">Sofá</a>
                        <div class="price mt-1">$280.00</div>
                     </figcaption>
               </div>
            </div> 
            <div class="col-md-3">
               <div href="#" class="card card-product-grid">
                     <a href="#" class="img-wrap"> <img src="assets/images/items/7.jpg" /> </a>
                     <figcaption class="info-wrap">
                        <a href="#" class="title">Smartwatch</a>
                        <div class="price mt-1">$56.00</div> 
                     </figcaption>
               </div>
            </div> 
            <div class="col-md-3">
               <div href="#" class="card card-product-grid">
                     <a href="#" class="img-wrap"> <img src="assets/images/items/9.jpg" /> </a>
                     <figcaption class="info-wrap">
                        <a href="#" class="title">Audifonos</a>
                        <div class="price mt-1">$179.00</div> 
                     </figcaption>
               </div>
            </div>
         </div> 
         </div>
         </section>
         

         
         <footer class="section-footer border-top bg">
         <div class="container">
          
         <section class="footer-bottom row">
            <div class="col-md-2">
               <p class="text-muted">2023 Grupo Simjis</p>
            </div>
            <div class="col-md-8 text-md-center">
               <span  class="px-2">hola@simjis.com</span>
               <span  class="px-2">+52-55-5576-6061</span>
               <span  class="px-2">Calle Escape 4-C, México</span>
            </div>
         </section>
         </div>
         </footer>
      
    </div>

    
  );
}

export default ItemListContainer;