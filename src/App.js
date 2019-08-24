import React from "react";

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image: "http://1stladykimchi.co.kr/web/product/medium/15_shop1_549701.jpg"
  },
  {
    id: 2,
    name: "Samgyeopsal",
    image:
      "http://image.chosun.com/sitedata/image/201902/24/2019022401106_0.jpg"
  }
];

function Food({ name, picture }) {
  return (
    <div>
      <h2>i like {name}</h2>
      <img src={picture} alt={name} />
    </div>
  );
}

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food key={dish.id} name={dish.name} picture={dish.image} />
      ))}
    </div>
  );
}

export default App;
