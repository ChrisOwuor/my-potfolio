import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const close = (e) => {
    e.preventDefault();
      setIsOpen(!isOpen);
    console.log("nav closed");
  };
  const open = (e) => {
    e.preventDefault();
    setIsOpen(true);
  };

  return (
    <div className="cont  flex justify-between align-middle pt-1 relative bg-slate-600 ">
      <div className="logo">
        <h1 className="ml-20 max-[600px]:ml-4">Tish</h1>
      </div>
      <div className="items max-[600px]:hidden">
        <ul className="flex  mr-24">
          {" "}
          <li className="ml-12">Home</li>
          <li className="ml-12">Services</li>
          <li className="ml-12">Projects</li>
        </ul>
      </div>
      <div className={`menu-icon hidden max-[600px]:block`}>
        <button
          onClick={open}
          className="mr-4 bg-slate-500 p-0.5 px-1 rounded-md"
        >
          Menu
        </button>
      </div>
      <div
        className={`mobmenu outline absolute right-0 top-0 h-screen w-2/4 bg-white outline-1  ${
          isOpen ? "block" : "hidden"
        }    `}
      >
        <div className="actionclose bg-gray-500 mb-10 w-full relative ">
          {" "}
          <button
            onClick={close}
            className="bg-slate-500 w-max absolute right-0 mr-4 p-0.5 px-1.5 mt-1 rounded-md"
          >
            Close
          </button>
        </div>
        <ul className=" px-2 ">
          {" "}
          <li className="bg-gray-200 mb-6 w-max  rounded-md p-2">Home</li>
          <li className="bg-gray-200 mb-6 w-max  rounded-md p-2">Services</li>
          <li className="bg-gray-200 mb-6 w-max rounded-md p-2">Projects</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
