import { useEffect, useState } from 'react';
import './App.css';
import Dish from './components/Dish';

function App() {
  const [dishs, setDishs] = useState([])
  useEffect(() => {
    fetch('https://pizza-restaurant-django-react.herokuapp.com/api/dishs/')
      .then(response => response.json())
      .then(data => {
        setDishs(data);
      })
  }, [])
  return (
    <div className="App">
      <div className='banner-container'>
        <img src="/images/banner.png" alt="Banner Pizza Restaurant" />
      </div>
      <div className='logo-container'>
        <img src="/images/logo.png" alt="Logo Pizza Restaurant" />
      </div>
      <section className='menu'>
        {dishs.map(
          dish => (<Dish
            key={dish.id}
            name={dish.name}
            desc={dish.desc}
            img={dish.image}
            price={dish.price}
          />))}
      </section>
    </div>
  );
}

export default App;
