import { useEffect } from "react";
// importing aos
import AOS from "aos";
import "aos/dist/aos.css";
import stack from "./Stack";
import "../assets/main.css";

export default function Tech() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div
      id="services"
      className="pt-4 mx-auto max-w-2xl lg:max-w-5xl bg-transparent rounded-xl mt-5  "
    >
      <h2 className="title text-center mb-12 aos-init aos-animate text-2xl font-semibold tracking-tight text-zinc-800 sm:text-3xl">
        My Tech Stack
      </h2>
      <p className=" text-gray-500 lg:w-3/5 mx-auto">
        `` I am a dedicated developer skilled in Python, Node.js, HTML/CSS, and
        more. From crafting efficient backend solutions to designing
        user-friendly interfaces, I thrive in the world of code. Explore my tech
        stack below to learn more about my expertise and projects.
      </p>
      <div className="grid lg:grid-cols-2 gap-8 grid-cols-1 ">
        <>
          {stack.map((item, index) => (
            <div
              data-aos="fade-up"
              className={`aos-init aos-animate `}
              key={index}
            >
              <div className="p-4 sm:p-6 rounded-2xl shadow shadow-gray-100 bg-white  sm:shadow-none lg:shadow-xl transition-shadow duration-500  ">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-4">
                  <div className="bg-gray-100 p-2 rounded-2xl">
                    <img
                      className="w-8 "
                      src={item.img}
                      alt="dev.svg"
                      width="48"
                      height="48"
                    />
                  </div>
                  <h3 className="text-2xl font-bold">{item.title}</h3>
                </div>
                <p>{item.content}</p>
                <ol className="frameworks list-decimal pl-3 lg:pl-6">
                  {item.frameworks.map((framework, index) => (
                    <li key={index} className="py-3">
                      <h4 className="font-semibold underline text-xl">
                        {framework.title}
                      </h4>
                      <p>{framework.content}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          ))}
        </>
      </div>
    </div>
  );
}
