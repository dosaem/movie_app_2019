import React from "react";
import PropTypes from "prop-types";

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image: "http://1stladykimchi.co.kr/web/product/medium/15_shop1_549701.jpg",
    rating: 5
  },
  {
    id: 2,
    name: "Samgyeopsal",
    image:
      "http://image.chosun.com/sitedata/image/201902/24/2019022401106_0.jpg",
    rating: 4.5
  },
  {
    id: 3,
    name: "budae",
    image:
      "http://recipe1.ezmember.co.kr/cache/recipe/2018/03/02/67f79dfc1039415b70f9649fd4f996901.jpg",
    rating: 4.8
  }
];

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>i like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food
          key={dish.id}
          name={dish.name}
          picture={dish.image}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}

export default App;
