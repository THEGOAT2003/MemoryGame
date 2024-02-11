import "./images.css";
import { useState } from "react";

export default function Images() {
  const imgs = [
    {
      id: 1,
      img: "https://m.media-amazon.com/images/I/71LDr01MyvL._AC_SX679_.jpg",
      arriba: false
    },
    {
      id: 2,
      img: "https://cdn.pixabay.com/photo/2019/04/26/23/07/duisburg-4158910_1280.jpg",
      arriba: true
    },
    {
      id: 3,
      img: "https://m.media-amazon.com/images/I/71LDr01MyvL._AC_SX679_.jpg",
      arriba: false
    },
    {
      id: 4,
      img: "https://cdn.pixabay.com/photo/2019/04/26/23/07/duisburg-4158910_1280.jpg",
      arriba: true
    },
    {
      id: 5,
      img: "https://m.media-amazon.com/images/I/71LDr01MyvL._AC_SX679_.jpg",
      arriba: false
    },
    {
      id: 6,
      img: "https://cdn.pixabay.com/photo/2021/10/12/17/41/abstract-6704211_1280.jpg",
      arriba: true
    },
    {
      id: 7,
      img: "https://m.media-amazon.com/images/I/71LDr01MyvL._AC_SX679_.jpg",
      arriba: false
    },
    {
      id: 8,
      img: "https://cdn.pixabay.com/photo/2021/10/12/17/41/abstract-6704211_1280.jpg",
      arriba: true
    },
  ];

   

  const [imageCount, setImageCount] = useState(imgs[0].img);

  const sum = () => {
    setImageCount(imgs[1].img);
  };

  const [imageCount2, setImageCount2] = useState(imgs[2].img);

  const sum2 = () => {
    setImageCount2(imgs[3].img);
  };

  const [imageCount3, setImageCount3] = useState(imgs[4].img);

  const sum3 = () => {
    setImageCount3(imgs[5].img);
  };

  const [imageCount4, setImageCount4] = useState(imgs[6].img);

  const sum4 = () => {
    setImageCount4(imgs[7].img);
  };

  return (
    <div>
      <img src={imageCount} alt="imagen" onClick={sum} className="imagen1"></img>
      <img src={imageCount2} alt="imagen" onClick={sum2} className="imagen1"></img>
      <img src={imageCount3} alt="imagen" onClick={sum3} className="imagen1"></img>
      <img src={imageCount4} alt="imagen" onClick={sum4} className="imagen1"></img>
    </div>
  );
}