
import img from '../assets/pexels-helena-lopes-7932657.jpg'

const Introdiv = () => {
  return (
    <div className="mainIntro  flex justify-center gap-52  h-max  mt-3 max-[600px]:justify-start ">
      <div className="text h-max  mt-32 max-[600px]:mt-12 max-[600px]: pb-12 ">
        <p className=" max-[600px]:ml-14  max-[600px]:mt-14 max-[600px]:mr-9 ">
          <span className="text-3xl font-bold"> Hi there I am chris,</span>
          <br />
          <span className="text-2xl font-bold"> I code it all </span>
          <br />
          these bits flow in my vein
        </p>
        <div className="img  max-[600px]:ml-14  max-[600px]:mt-8 max-[600px]:mr-9">
          <img src={img} alt="" loading='lazy' className="  w-24 " />
        </div>
      </div>
      <div className="img  bg-red-200 h-2/5 mt-32 max-[600px]:hidden ">
        <p>
          Hi there I am chris,
          <br /> all i do is learn and code <br />
          these bits flow in my vein
        </p>
      </div>
    </div>
  );
};

export default Introdiv;
