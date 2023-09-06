// import React, { useState } from "react";
import mimg from "../assets/Screenshot 2023-08-14 170355.png";
const Jouney = () => {
  // const [open, setOpen] = useState(true);

  

  return (
    <div className="journey flex justify-center w-full  h-max p-0 mt-10 ">
      <div className="journeyCont w-4/5  lg:w-3/5 relative  mt-3">
        <div className="circle h-4 w-4 absolute rounded-lg  left-0 top-0  bg-black"></div>
        <div className="firstProject py-4 border-l border-black border-solid relative lg:flex ml-2 h-max">
          <div className="text lg:w-2/4">
            <p className="p-2  text-lg font-bold">
              {" "}
              Kaybros consulting limited
            </p>

            <p className=" p-2">
              I crafted a dynamic website for Kaybros Consulting Limited,
              designed to seamlessly bridge the gap between clients and the
              firm. Leveraging the power of React.js and the flexibility of
              Tailwind CSS, I built an engaging platform that not only showcases
              the comprehensive range of services offered by the company but
              also provides a user-friendly interface for clients to connect and
              explore testimonials.
            </p>
            <div className="det p-2 max-[1300px]:hidden">
              <p className=" bg-teal-500 w-max rounded-sm p-2 mb-4">
                <a href="https://github.com/ChrisOwuor/kaybbros">Source code</a>
              </p>
              <p className=" bg-teal-500 w-max rounded-sm p-2 mb-4">
                <a href="https://kaybbros.vercel.app/">Live Preview</a>
              </p>
            </div>
          </div>
          <div className="img ">
            <a href="https://kaybbros.vercel.app/">
              {" "}
              <img
                src={mimg}
                alt=""
                loading="lazy"
                className="w-96 h-48 ml-2 rounded outline outline-1 shadow-lg "
              />
            </a>

            <div className="det p-2 max-[1300px]:block lg:hidden">
              <p className=" bg-teal-500 w-max rounded-sm p-2 mb-4  ">
                <a href="https://github.com/ChrisOwuor/kaybbros">Source code</a>
              </p>
              <p className=" bg-teal-500 w-max rounded-sm p-2 mb-4">
                {" "}
                <a href="https://kaybbros.vercel.app/">Live Preview</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jouney;
