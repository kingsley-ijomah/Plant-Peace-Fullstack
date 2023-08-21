import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './Popular.scss';

import Cactus from '../../assets/cactus.jpg';

export default function Popular() {
  const [title, setTitle] = useState('');
  const [products, setProducts] = useState([]);

  const getPopularData = async () => {
    try {
      const response = await axios.get('http://localhost:1337/api/popular', {
        params: {
          'populate[products][populate][image]': true,
        },
      });
      const {title, products} = response?.data?.data?.attributes;

      setTitle(title);
      setProducts(products.data);
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };

  console.log('products: ', products);

  useEffect(() => {
    getPopularData();
  }, []);

  return (
    <main className='popular'>
      <h1>{title}</h1>

      <section className='popular__cardsSection'>
        {products.map((product) => (
          <div key={product.id} className='card'>
            <img src={`http://localhost:1337${product.attributes.image.data.attributes.url}`} alt='' />

            <div>
              <h3>{product.attributes.title}</h3>
              <ul>
                <li>${product.attributes.cost}</li>
                <li>${product.attributes.discounted}</li>
              </ul>
              <button>indoor</button>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
