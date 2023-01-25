import React from "react";

function Navbar({ numClics }) {
  return(
    <header class="section-header">
<section class="header-main border-bottom">
   <div class="container">
<div class="row align-items-center">
   <div class="col-lg-2 col-4">
      Grupo Simjis
   </div>

   <div class="col-lg-4 col-sm-6 col-12">
      <div class="widgets-wrap float-md-end">
            <div class="widget-header  me-3">
               <a href="#" class="icon icon-sm rounded-circle border"><i class="fa fa-shopping-cart"></i></a>
               <span class="badge badge-pill badge-danger notify">0</span>
            </div>
            <div class="widget-header icontext">
               <a href="#" class="icon icon-sm rounded-circle border"><i class="fa fa-user"></i></a>
               <div class="text">
                  <span class="text-muted">Bienvenido</span>
                  <div> 
                        <a href="#">Ingresar</a> |  
                        <a href="#"> Registrarse</a>
                  </div>
               </div>
            </div>
      </div> 
   </div> 
</div> 
   </div> 
</section> 
<nav class="navbar navbar-main navbar-expand-lg navbar-light border-bottom">
<div class="container">
   <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
   </button>
   <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
         <li class="nav-item dropdown">
         <a class="nav-link" href="#">Home</a>
      </li>
      <li class="nav-item">
         <a class="nav-link" href="#">Acerca de Nosotros</a>
      </li>
      <li class="nav-item">
         <a class="nav-link" href="#">Accesorios</a>
      </li>
      <li class="nav-item">
         <a class="nav-link" href="#">Tecnologia</a>
      </li>
      <li class="nav-item">
         <a class="nav-link" href="#">Bebés &amp; Juguetes</a>
      </li>
      <li class="nav-item">
         <a class="nav-link" href="#">Ropa Sport</a>
      </li>
      <li class="nav-item">
         <a class="nav-link" href="#">Ropa casual</a>
      </li>
      <li class="nav-item">
         <a class="nav-link" href="#">Muebles</a>
      </li>
      <li class="nav-item dropdown">
         <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Mas
         </a>
         <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Decoración</a></li>
            <li><a class="dropdown-item" href="#">Blancos</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">Ropa de cama</a></li>
         </ul>
      </li>
      </ul>
   </div> 
</div> 
</nav>
</header>
  );
}

export default Navbar;

