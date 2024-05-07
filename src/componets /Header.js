import React,  { useState, useEffect }  from "react";
import logo from "../img/zimlogo.png"; // импортируем изображение


export const Header = () => {


    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 0) {
          setIsFixed(true);
        } else {
          setIsFixed(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
 
  return (
    <div className={`flex flex-row justify-between px-48 py-4 ${isFixed ? 'fixed bg-white w-full' : ''}`}>
      <div className="flex flex-row items-center ">
        <div to="/">
          <img src={logo} alt="logo" className="" />
        </div>
        <div className="text-4xl font-bold">
        Туризм в Зимбабве
        </div>
      </div>
      <div className="flex flex-row text-2xl font-bold justify-evenly items-center ">
        <div to="/AboutUs">Главная</div>
        <div to="/News" className="mx-8">Информация</div>
        <div to="/Partners">Места</div>

      </div>
    </div>
  );
};
export default Header;
