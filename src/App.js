import React from "react";

function Food({ name, picture }) {
  return (
    <div>
      <h2>i like {name}</h2>
      <img src={picture} />
    </div>
  );
}

const foodILike = [
  {
    name: "Kimchi",
    image: "http://1stladykimchi.co.kr/web/product/medium/15_shop1_549701.jpg"
  },
  {
    name: "Samgyeopsal",
    image:
      "http://image.chosun.com/sitedata/image/201902/24/2019022401106_0.jpg"
  }
];

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food name={dish.name} picture={dish.image} />
      ))}
    </div>
  );
}

export default App;
