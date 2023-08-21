import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Hero.scss';

import LeftGarden from '../../assets/plantLeft.svg';
import RightArrow from '../../assets/arrowDark.svg';
import HeroImg from '../../assets/Hero.png';
import { Link } from 'react-router-dom';

export default function Hero() {
  const [subTitle, setSubTitle] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [footer, setFooter] = useState('');
  const [ShopNowButton, setShopNowButton] = useState('');
  const [error, setError] = useState([]);

  const getHeroData = async () => {
    try {
      const response = await axios.get('http://localhost:1337/api/hero', {
        params: {
          'populate[ShopNowButton]': true,
        },
      });
      const { subTitle, title, description, footer, ShopNowButton } =
        response?.data?.data?.attributes; // destructuring

      setSubTitle(subTitle);
      setTitle(title);
      setDescription(description);
      setFooter(footer);
      setShopNowButton(ShopNowButton);
      } catch (error) {
        if (error.response) {
          console.error('Server responded with status code', error.response.status);
          setError('An error occurred while fetching data. Please try again later.');
        } else {
          console.error('Error', error.message);
          setError('An unexpected error occurred. Please check your connection and try again.');
        }
      }
      
  };

  useEffect(() => {
    getHeroData();
  }, []); // empty array means it will only run once


  return (
    <section className="hero">
      <main className="hero__main">
        <h3>------ {subTitle}</h3>

        <div className="hero__main--leftInfo">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>

        <Link to={ShopNowButton.btnUrl}>
          <button>{ShopNowButton.btnLabel}</button>
        </Link>

        <div className="hero__main--gardening">
          <img src={LeftGarden} className="mainImage" />
          <ul>
            <li>{footer}</li>
            <li>
              <img src={RightArrow} />
            </li>
          </ul>
        </div>
      </main>

      <img src={HeroImg} className="hero__image" />
    </section>
  );
}
