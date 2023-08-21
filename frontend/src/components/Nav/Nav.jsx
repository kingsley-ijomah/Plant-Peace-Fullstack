import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './Nav.scss';

import { Link } from 'react-router-dom';

export default function Nav() {
  const [logoItems, setLogoItems] = useState({});
  const [links, setLinks] = useState([]);
  const [icons, setIcons] = useState([]);

  const getNavData = async () => {
    try {
      // use axios to get data from the backend
      const response = await axios.get('http://localhost:1337/api/nav', {
        params: {
          'populate[Logo][populate][image]': true,
          'populate[Links]': true,
          'populate[Icons][populate][image]': true,
        },
      });

      // destructure the data
      const { Logo, Links, Icons } = response?.data?.data?.attributes;

      setLogoItems(Logo);
      setLinks(Links);
      setIcons(Icons);
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };

  useEffect(() => {
    getNavData(); // calling the function
  }, []); // empty array means it will only run once

  return (
    <nav className="nav">
      <div className="nav__logo">
        <img
          src={`http://localhost:1337${logoItems?.image?.data?.attributes?.url}`}
        />
        <h4>{logoItems?.title}</h4>
      </div>

      <ul className="nav__middleBlock">
        {links?.map((link) => (
          <li key={link.id}>
            <Link to={link.url}>{link.title}</Link>
          </li>
        ))}
      </ul>

      <div className="nav__lastBlock">
        {icons.map((icon) => (
          <Link key={icon.id} to={icon.url}>
            <img
              src={`http://localhost:1337${icon?.image?.data?.attributes?.url}`}
            />
          </Link>
        ))}
      </div>
    </nav>
  );
}
