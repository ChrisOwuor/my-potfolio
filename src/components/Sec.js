
import mimg from "../assets/pexels-helena-lopes-7932657.jpg";


const Sec = () => {
    return (
      <div className="journey flex justify-center w-full  h-max p-0 mt-10 ">
        <div className="journeyCont w-4/5  lg:w-3/5 relative  mt-3">
          <div className="circle h-4 w-4 absolute rounded-lg  left-0 top-0  bg-black"></div>
          <div className="firstProject py-4 border-l border-black border-solid relative lg:flex ml-2 h-max">
            <div className="img">
              <p className="p-2"> Heading</p>

              <img src={mimg} alt="" className="w-96 ml-2 rounded " />
              <div className="det p-2 max-[600px]:block lg:hidden">
                <p>code</p>
                <p>live preview</p>
              </div>
            </div>
            <div className="text lg:w-2/4">
              <p className=" p-2">
                I am a results-oriented computer programmer with solid
                communication skills, analytical abilities, and the ability to
                act independently. Able to think creatively and eager to learn.
                I am experienced in problem-solving and developing innovative
                solutions to reach business goals and objectives.
              </p>
              <div className="det p-2 max-[600px]:hidden">
                <p>code</p>
                <p>live preview</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
 
export default Sec;