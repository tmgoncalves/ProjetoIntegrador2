import React from 'react';
import './HeroSection.css';

// esse script é responsavel pelo video da pagina inicial
function HeroSection() {
  return (
    <>
    <div className='hero-container'>
      <video src='/videos/video-3.mp4' autoPlay loop muted />
      <h1>Recolhimento de Sucata </h1>
      <p>Para pessoas que vivem de reciclagem</p> 
      <i class="fa-solid fa-recycle"></i>
    </div>
    </>
  );
}


export default HeroSection;
