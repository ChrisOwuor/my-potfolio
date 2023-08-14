
import mimg from "../assets/nodejs auth.jpg";


const Sec = () => {
    return (
      <div className="journey flex justify-center w-full  h-max p-0 mt-10 ">
        <div className="journeyCont w-4/5  lg:w-3/5 relative  mt-3">
          <div className="circle h-4 w-4 absolute rounded-lg  left-0 top-0  bg-black"></div>
          <div className="firstProject py-4 border-l border-black border-solid relative lg:flex ml-2 h-max">
            <div className="text lg:w-2/4">
              <p className="p-2  text-lg font-bold ">Node Js Authentication</p>

              <p className=" p-2">
                I also developed a robust authentication system using Node.js,
                fortified by JSON Web Tokens (JWT) for secure user
                authentication, and seamlessly integrated it with a MongoDB
                database. To ensure the highest level of data security, I
                implemented the bcrypt package to encrypt user passwords before
                storing them. This comprehensive authentication solution not
                only guarantees the confidentiality of user information but also
                provides a smooth and efficient experience, allowing users to
                access the platform's features with confidence while maintaining
                the utmost privacy of their credentials.
              </p>
              <div className="det p-2 max-[600px]:hidden">
                <p className=" bg-teal-500 w-max rounded-sm p-2 mb-4  ">
                  <a href="https://github.com/ChrisOwuor/authentication/tree/main">
                    Source code
                  </a>
                </p>
              </div>
            </div>
            <div className="img">
              <img src={mimg} alt="" className="w-96 ml-2 rounded " />
              <div className="det p-2 max-[600px]:block lg:hidden">
                <p className=" bg-teal-500 w-max rounded-sm p-2 mb-4">
                  <a href="https://github.com/ChrisOwuor/authentication/tree/main">
                    Source code
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
 
export default Sec;