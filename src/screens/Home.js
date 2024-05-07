import React from "react";
import Header from "../componets /Header";
import ZimVicFalls from "../img/victoriafalls.png"

const Home = () => {
  return (
    <div className="">
      <Header />
      
      <div className="bg-[url('/src/img/victoriafalls.png')] w-full h-[919px] ">
      <div className="mx-48">
        <div className="w-[420px] pt-[374px] text-xl  font-semi-bold text-white">
        Туризм в Зимбабве предлагает уникальное сочетание природной красоты,
         впечатлений от дикой природы, культурного погружения и приключенческих мероприятий,
         что делает его привлекательным местом для путешественников, ищущих подлинный африканский опыт.
        </div>
        <div className="w-[200px] h-[36px] mt-6 bg-gray-900 text-white text-center justify-center items-center pt-1">
        Информация
        </div>
      </div>
     </div>
    </div>
  );
};

export default Home;
