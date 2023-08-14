import { useState } from 'react';
import  img from '../assets/programmer-working-concept-web-banner-man-work-with-code-programming-computer_9209-7397.avif'

const About = () => {
    const [open, setOpen] = useState(false);

  const show = () => [
setOpen(!open)
]




  return (
    <div className="journey flex justify-center w-full  h-max mb-4 py-10">
      <div className="journeyCont w-4/5   flex  max-[600px]:flex-col  lg:justify-center">
        <h1 className="text-center lg:hidden font-mono text-lg font-bold underline">
          About Me
        </h1>
        <div className="imgs   lg:w-2/4 lg:flex lg:justify-center  ">
          <img
            src={img}
            alt=""
            loading="lazy"
            className="w-96 rounded-md h-96  object-cover "
          />
        </div>
        <div className="text  lg:w-2/4 lg:ml-2  max-[600px]:mt-14 lg:p-8">
          <h1 className="max-[600px]:hidden font-mono text-lg font-bold text-center underline">
            About me
          </h1>{" "}
          <p>
            {" "}
            I'm a dedicated software developer passionate about technology,
            specializing in JavaScript and Python. My expertise spans Django and
            the MERN stack, alongside a solid grasp of databases such as
            PostgreSQL, MySQL, and MongoDB.
            <span onClick={show} className="text-blue-300  underline cursor-pointer">
              {!open &&  "read more"}
            </span>
          </p>
          <p className={`${open ? "block" : "hidden"}  `}>
            My journey is a blend of passion, perseverance, and a continuous
            thirst for knowledge which has led me to explore various resources,
            from in-depth documentation and Udemy courses to insightful YouTube
            tutorials and bootcamps. I recentnly dived into Android development
            using React Native, while venturing into IoT and machine learning
            projects. I approach each project as an opportunity to learn and
            deliver impactful solutions. I'm eager to contribute my skills to
            innovative endeavors and continuously push the boundaries of what's
            possible in the world of software development. <br />
            <span onClick={show} className="text-blue-300  underline cursor-pointer">
              {open && "close" }
            </span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
