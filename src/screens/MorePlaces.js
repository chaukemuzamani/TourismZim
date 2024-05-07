import React from "react";
import Kariba_dam from '../img/Kariba dam wall.png'
import Chinhoyi_png from '../img/Chinhoyi Caves, Zimbabwe.png'
import Nyanga_park from '../img/Nyanga.png'
import Chimani_mani from '../img/chimani_mani2.jpg'


const VictoriaFalls = () => {
  return (
    <div className="mx-48">
      <div className="text-3xl font-bold">Еще больше интересных мест</div>
      <div className="flex flex-row justify-between mt-8 ">
        <img
          src={Kariba_dam}
          alt="photo_news"
          className="w-[500px] h-[393px]"
        />
        <img
          src={Chinhoyi_png}
          alt="photo_news"
          className="w-[500px] h-[393px]"
        />
      </div>
      <div className="flex flex-row justify-between mt-12 ">
        <img
          src={Nyanga_park}
          alt="photo_news"
          className="w-[500px] h-[393px]"
        />
        <img
          src={Chimani_mani}
          alt="photo_news"
          className="w-[500px] h-[393px]"
        />
      </div>
    </div>
  );
};

export default VictoriaFalls;
