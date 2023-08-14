import css from "../assets/icons8-css-100.png";
import native from "../assets/icons8-react-native-48.png";
import node from "../assets/icons8-nodejs-48.png";
import express from "../assets/expressjs_logo_icon_169185.png";
import iot from "../assets/iot.png";
import js from "../assets/icons8-javascript-48.png";
// import reactlogo from "../assets/react.png";
import html from "../assets/icons8-html-48.png";
import python from "../assets/icons8-python-48.png"
import tailwind from "../assets/tailwind.png";
import django from "../assets/icons8-django-48.png"

const TechStack = () => {
  const img = [tailwind, css, html, js,python, django,native, express, iot, node];
  return (
    <div className="techstsck  flex justify-center mt-10 ">
      <div className="techElem">
        <h1 className="text-center font-mono text-lg font-bold underline">
Inside my tech stack         </h1>
        <ul className="flex flex-wrap  ">
          {" "}
          {img.map((logo, index) => (
            <li
              key={index}
              className="   flex justify-center max-[600px]:h-14 align-middle p-3"
            >
              <img src={logo} alt="" className=" h-10 w-10 object-contain " />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TechStack;
