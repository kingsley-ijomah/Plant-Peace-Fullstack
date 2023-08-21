import React, { useState } from 'react';
import axios from 'axios';
import './Garden.scss';

import TallPlant from '../../assets/tallPlant.jpg';

export default function Garden() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:1337/api/mailinglists', {
        data: {
          email: email
        },
      });

      setEmail('');
      setError('');
    } catch (error) {
      if (error.response.data.error.message === 'This attribute must be unique') {
        setError('This email is already subscribed');
      } else {
        setError(error.response.data.error.message);
      }
    }
  };

  return (
    <main className="garden">
      <div className="garden__header">
        <h1>Summer Garden Refresh</h1>
        <h3>"Revitalize Your Garden with a Summer Refresh!"</h3>
      </div>

      <section className="garden__cardSection">
        <ul>
          <li>
            <img src={TallPlant} />
          </li>
          <li className="header">Solar Illuminated Planter Granite</li>
          <li className="price">$139.99</li>
        </ul>

        <ul>
          <li>
            <img src={TallPlant} />
          </li>
          <li className="header">Solar Illuminated Planter Granite</li>
          <li className="price">$139.99</li>
        </ul>

        <ul>
          <li>
            <img src={TallPlant} />
          </li>
          <li className="header">Solar Illuminated Planter Granite</li>
          <li className="price">$139.99</li>
        </ul>
      </section>

      <section className="garden__subscribe">
        <div className="GreenCard">
          <ul className="GreenCard__header">
            <h1>Subscribe Newsletter</h1>
            <li>
              By following these three steps - proper watering, appropriate
              sunlight, and providing essential nutrients - you'll be well on
              your way to maintaining healthy and thriving plants.
            </li>
          </ul>

          {error && <p className='garden__subscribe-error'>{error}</p>}

          <form className="GreenCard__enlist" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
            />
            <button>Subscribe</button>
          </form>
        </div>
      </section>
    </main>
  );
}
