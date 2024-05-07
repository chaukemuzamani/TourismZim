import React,  { useState, useEffect }  from "react";
import logo from "../img/zimlogo.png"; // импортируем изображение


export const Footer = () => {
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
    <div className={`flex flex-row  justify-center items-center mt-8 border-t-[1px] h-[101px] border-black`}>
      <div className="flex flex-row items-center ">
        <div to="/">
          <img src={logo} alt="logo" className="" />
        </div>
        <div className="text-4xl font-bold">
        Туризм в Зимбабве
        </div>
      </div>
     
    </div>
  );
};
export default Footer;
