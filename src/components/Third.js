import mimg from "../assets/django proj.png";

const Third = () => {
  return (
    <div className="journey flex justify-center w-full   h-max mt-10 ">
      <div className="journeyCont w-4/5  lg:w-3/5 relative  mt-3">
        <div className="circle h-4 w-4 absolute rounded-lg  left-0 top-0  bg-black"></div>
        <div className="firstProject  border-l py-4 border-black border-solid relative lg:flex ml-2 h-max">
          <div className="text lg:w-2/4">
            <p className="p-2  text-lg font-bold "> Django Blog Web App</p>
            <p className=" p-2">
              I embarked on a captivating journey within the realm of Django,
              constructing a dynamic blog web application that showcases my
              proficiency in harnessing the versatile capabilities of this
              powerful Python framework. Employing Django's robust features,
              integrating Django forms for seamless data input, implimenting
              authorization and authentication and implimenting both PostgreSQL
              and SQLite databases, allowing for efficient data management and
              retrieval. Notably, the administrative aspect of the project was
              streamlined through the utilization of the Django admin site,
              empowering content management with ease.
            </p>
            <div className="det p-2 max-[600px]:hidden">
              <p className=" bg-teal-500 w-max rounded-sm p-2 mb-4">
                <a href="https://github.com/ChrisOwuor/django-blog/">
                  Source code
                </a>
              </p>
            </div>
          </div>
          <div className="img">
            <img src={mimg} alt="" className="w-96 ml-2 rounded " />
            <div className="det p-2 max-[600px]:block lg:hidden">
              <p className=" bg-teal-500 w-max rounded-sm p-2 mb-4">
                <a href="https://github.com/ChrisOwuor/django-blog">
                  Source code
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Third;
