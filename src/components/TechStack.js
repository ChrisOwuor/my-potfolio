import css from "../assets/css.png";
import native from "../assets/native.png";
import node from "../assets/node.png";
import express from "../assets/express.png";
import iot from "../assets/iot.png";
import js from "../assets/js.png";
import reactlogo from "../assets/react.png";
import html from "../assets/html.png";
import tailwind from "../assets/tailwind.png";

const TechStack = () => {
  const img = [tailwind, reactlogo, css, html, js, native, express, iot, node];
  return (
    <div className="techstsck  flex justify-center mt-10 ">
      <div className="techElem">
        <h1 className="text-center">What i do best</h1>
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
