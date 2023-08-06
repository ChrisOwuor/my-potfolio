import  img from '../assets/pexels-helena-lopes-7932657.jpg'


const About = () => {
  return (
    <div className="journey flex justify-center w-full h-max  py-10">
      <div className="journeyCont w-4/5  flex  max-[600px]:flex-col  lg:justify-center">
        <h1 className="text-center lg:hidden">About Me</h1>
        <div className="imgs  lg:w-2/4 lg:flex lg:justify-end">
          <img src={img} alt="" className="w-96 rounded-md" />
        </div>
        <div className="text lg:w-2/4 lg:ml-2">
          <h1 className="max-[600px]:hidden">About me</h1>{" "}
          <p>
            {" "}
            I am a results-oriented computer programmer with solid communication
            skills, analytical abilities, and the ability to act independently.
            Able to think creatively and eager to learn. I am experienced in
            problem-solving and developing innovative solutions to reach
            business goals and objectives.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
