import React from 'react';
import './Footer.scss';

import Logo from '../../assets/logo1.svg';

export default function Footer() {
  return (
    <main className='footer'>
      <section className='footer__blocks'>
        <div className='Lblock'>
          <h1>Stay Fresh</h1>
          <ul>
            <li>plantpure@gmail.com</li>
            <li>+977 88374637</li>
          </ul>
        </div>

        <div className='Rblock'>
          <ul>
            <h2>Links</h2>
            <li>About Us</li>
            <li>Products</li>
            <li>Blogs</li>
          </ul>

          <ul>
            <h2>Community</h2>
            <li>About Us</li>
            <li>Products</li>
            <li>Blogs</li>
          </ul>
        </div>
      </section>

      <div className='footer__bottomLine'>
        <img src={Logo} />
        <p>Copyrights. All rights reserved.</p>
      </div>
    </main>
  );
}
