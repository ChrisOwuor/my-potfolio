import img from "../assets/pexels-helena-lopes-7932657.jpg";
import linked from "../assets/icons8-linkedin-48.png";
import git from "../assets/git.png";
import "../App.css"

const Introdiv = () => {
  return (
    <div className="mainIntro   flex justify-center gap-52  h-max  mt-3 max-[1300px]:justify-start ">
      <div className="text   h-96 mt-32 max-[1300px]:mt-12 max-[1300px]: pb-12 max-[1300px]:h-max  ">
        <p className=" max-[1300px]:ml-14  max-[1300px]:mt-14 max-[1300px]:mr-9    ">
          <span className="text-3xl font-bold font-mono">
            {" "}
            Hi there I am chris,
            <br />I am a software developer
          </span>
          <br /> <br />
          <span className="text-2xl font-semibold">
            {" "}
            Welcome to my portfolio website!
          </span>
          <br />
        </p>{" "}
        <br />
        <p className="font-mono font-semibold  max-[1300px]:ml-14 ">
          I'm a dedicated software developer with <br /> a keen eye for design
          and a passion for turning ideas <br /> into reality.
        </p>
        <ul className="flex gap-2 mt-4 max-[1300px]:ml-14 ">
          <li>
            <a href="/">
              {" "}
              <img className="w-14" src={linked} alt="linkedin" /> <br />
            </a>
          </li>
          <li>
            {" "}
            <a href="/">
              {" "}
              <img className="w-14" src={git} alt="github" /> <br />
            </a>
          </li>
        </ul>
        <div className="img  max-[1300px]:ml-14  lg:hidden    max-[1300px]:hidden  max-[1300px]:mt-8 max-[1300px]:mr-9">
          <img src={img} alt="" loading="lazy" className="  w-24 " />
        </div>
      </div>
      <div className="img  bg-red-200 w-[400px] h-96 mt-[50px] max-[1300px]:hidden shadow-lg pt-12"></div>
    </div>
  );
};

export default Introdiv;
