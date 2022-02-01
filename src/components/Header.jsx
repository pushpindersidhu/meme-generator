import React from 'react';
import trollFace from '../images/trollFace.png'


function Header() {
  return (
    <header>
      <img src={trollFace} alt="" className='header-image' />
      <h2 className='header-title'>Meme Generator</h2>
      <h4 className='sidhu'>Sidhu</h4>
    </header>
  )
}

export default Header;
