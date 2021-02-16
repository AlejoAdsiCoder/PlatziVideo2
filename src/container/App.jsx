import React from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import '../assets/styles/App.scss';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';

const App = () => (
  <div className="App">
    <Header />
    <Search />

    <Categories title="Tendencias">
      <Carousel>
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
      </Carousel>
    </Categories>

    <Categories title="Originales">
      <Carousel>
        <CarouselItem />
        <CarouselItem />
      </Carousel>
    </Categories>

    <Categories title="Populares">
      <Carousel>
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
      </Carousel>
    </Categories>

    <Categories>
      <Carousel>
        <CarouselItem />
      </Carousel>
    </Categories>

    <Footer />

  </div>
);

export default App;