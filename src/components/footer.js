import linked from "../assets/linkedin.png";
import whatsapp from "../assets/icons8-whatsapp-48.png";

const Footer = () => {
  const link = "https://wa.me/+254713347175";
  return (
    <div className="flex justify-center  w-full h-max lg:p-11 ">
      <div className="centereddiv flex justify-center gap-4 lg:w-3/5 max-[600px]:flex-col ">
        <div className="socials w-full md:w-auto py-5  px-7">
          <h1 className=" text-lg font-bold underline">Get In touch </h1>
          <div className="cont flex align-middle gap-5 py-2.5 ">
            <div className=" w-10 mt-1 img1">
              <a href="https://www.linkedin.com/in/chrispine-owuor-23363525b">
                {" "}
                <img src={linked} alt="" />
              </a>
            </div>
            <div className=" w-14  img1">
              <a href={link}>
                <img src={whatsapp} alt="" />
              </a>{" "}
            </div>
          </div>
        </div>
        <div className="form">
          <div className="w-full md:w-auto  py-5 px-7">
            {" "}
            <p className="text-lg "> Subscribe to my newsletter</p>
            <br></br>{" "}
            <input
              id="s-input"
              type="text"
              placeholder="Your Email"
              className="text-gray-800  border border-gray-300 
           sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none shadow-md shadow-white "
            />
            <button
              className="bg-teal-400 hover:bg-teal-500 duration-300 px-5 py-2.5 
           rounded-md text-white md:w-auto w-full"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
