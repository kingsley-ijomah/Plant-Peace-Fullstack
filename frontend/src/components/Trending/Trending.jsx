import React from 'react';
import './Trending.scss';

import Cactus from '../../assets/cactus.jpg';

import DarkArrow from '../../assets/arrowDark.svg';
import OliveArrow from '../../assets/arrowOlive.svg';
import { Link } from 'react-router-dom';

export default function Trending() {
  return (
    <main className='trending'>
      <h2><span>Trending</span> Categories</h2>
      <nav className='trending__selectBar'>
        <Link to='/' className='selected'>
          <span>Indoor Plants</span>
          <span><img src={DarkArrow} /></span>
        </Link>

        <Link to='/' className=''>
          <span>Outdoor plants</span>
          <span><img src={OliveArrow} /></span>
        </Link>

        <Link to='/' className=''>
          <span>Gardening Kits</span>
          <span><img src={OliveArrow} /></span>
        </Link>

        <Link to='/' className=''>
          <span>Fertilizers</span>
          <span><img src={OliveArrow} /></span>
        </Link>

        <Link to='/' className=''>
          <span>Plant care accessory</span>
          <span><img src={OliveArrow} /></span>
        </Link>

        <Link to='/' className=''>
          <span>Garden Decors</span>
          <span><img src={OliveArrow} /></span>
        </Link>
      </nav>

      <section className='trending__cardsSection'>
        <div className='card'>
          <img src={Cactus} />
          <div>
            <h3>Echinocereus Cactus</h3>
            <ul>
              <li>$15.00</li>
              <li>$35.00</li>
            </ul>
            <button>indoor</button>
          </div>
        </div>
        <div className='card'>
          <img src={Cactus} />

          <div>
            <h3>Echinocereus Cactus</h3>
            <ul>
              <li>$15.00</li>
              <li>$35.00</li>
            </ul>
            <button>indoor</button>
          </div>
        </div>
        <div className='card'>
          <img src={Cactus} />

          <div>
            <h3>Echinocereus Cactus</h3>
            <ul>
              <li>$15.00</li>
              <li>$35.00</li>
            </ul>
            <button>indoor</button>
          </div>
        </div>
        <div className='card'>
          <img src={Cactus} />

          <div>
            <h3>Echinocereus Cactus</h3>
            <ul>
              <li>$15.00</li>
              <li>$35.00</li>
            </ul>
            <button>indoor</button>
          </div>
        </div>
      </section>
    </main>
  );
}
