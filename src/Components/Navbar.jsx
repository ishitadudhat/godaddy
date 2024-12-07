import React from 'react';
import logo1 from './image/logo .png';

export default function Navbar() {
  return (
    <div>
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
        <img src={logo1} className='logo'></img>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse me-20" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="#">Contact Us</a>
        <a class="nav-link active" aria-current="page" href="#">Help</a>
        <a class="nav-link active" aria-current="page" href="#">Sign In</a>

        
      </div>
    </div>
  </div>
</nav>

    </div>

  )
}