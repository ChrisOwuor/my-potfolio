import { useEffect } from "react";
// importing aos
import AOS from "aos";
import "aos/dist/aos.css";

export default function Services() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div id="services" className=" py-16 mx-auto max-w-2xl lg:max-w-5xl  ">
      <h2
        className="title text-left mb-12 aos-init aos-animate text-4xl font-bold tracking-tight text-zinc-800  sm:text-5xl"
        // data-aos="fade-up"
      >
        My Services
      </h2>

      <div className="grid sm:grid-cols-2 gap-8">
        <div className="aos-init aos-animate">
          <div className="p-8 sm:p-12 rounded-2xl shadow shadow-gray-100 sm:shadow-none lg:shadow-xl bg-white  transition-shadow duration-500">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-4">
              <div className="bg-blue-500 opacity-70 p-4 rounded-2xl">
                <picture>
                  <img
                    className="w-8"
                    src="https://d33wubrfki0l68.cloudfront.net/5cb8d43b8b1aa9f101e03eb8ee60256b5b692011/77ecf/assets/site/dev.svg"
                    alt="dev.svg"
                    width="48"
                    height="48"
                  />
                </picture>
              </div>
              <h3 className="text-2xl font-bold">Full Stack Development</h3>
            </div>
            <p>
              End-to-end development of web applications, utilizing both
              frontend (HTML, CSS, React.js) and backend (Node.js, Django)
              technologies.
            </p>
          </div>
        </div>

        <div className="aos-init aos-animate">
          <div className="p-8 sm:p-12 rounded-2xl shadow-xl shadow-grey-200 sm:shadow-none lg:shadow-xl bg-white transition-shadow duration-500">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-4">
              <div className="bg-yellow-100 p-4 rounded-2xl">
                <picture>
                  <img
                    className="w-8"
                    src="https://d33wubrfki0l68.cloudfront.net/0de1524cc6e6e00d74033964afe06f6abbf535b9/8eebf/assets/site/seo.svg"
                    alt="seo.svg"
                    width="59.5"
                    height="59.5"
                  />
                </picture>
              </div>
              <h3 className="text-2xl font-bold">Api Development</h3>
            </div>
            <p>
              Design and development of robust and scalable APIs for seamless
              communication between different components of a system.
            </p>
          </div>
        </div>

        <div data-aos="fade-up" className="aos-init">
          <div className="p-8 sm:p-12 rounded-2xl shadow-xl shadow-grey-200 sm:shadow-none  lg:shadow-xl bg-white  transition-shadow duration-500">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-4">
              <div className="bg-red-300 p-4 rounded-2xl">
                <picture>
                  <img
                    className="w-8"
                    src="https://d33wubrfki0l68.cloudfront.net/7d53e157b675f7fa9bc5b7ba168893353dbcf633/03f20/assets/site/branding.svg"
                    alt="branding.svg"
                    width="50"
                    height="48"
                  />
                </picture>
              </div>
              <h3 className="text-2xl font-bold">
                Version Control and Collaboration
              </h3>
            </div>
            <p>
              Implementation of effective version control strategies for
              collaborative projects, ensuring smooth development workflows.
            </p>
          </div>
        </div>

        <div data-aos="fade-up" className="aos-init">
          <div className="p-8 sm:p-12 rounded-2xl shadow-xl shadow-grey-200 sm:shadow-none lg:shadow-xl  bg-white  transition-shadow duration-500">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-4">
              <div className="bg-purple-300 p-4 rounded-2xl">
                <picture>
                  <img
                    className="w-8"
                    src="https://d33wubrfki0l68.cloudfront.net/fc1f13a6bd0db94af77699d93cf6c1a2e6b42a69/00a1e/assets/site/photo.svg"
                    alt="photo.svg"
                    width="48"
                    height="48"
                  />
                </picture>
              </div>
              <h3 className="text-2xl font-bold">
                Database design and Management{" "}
              </h3>
            </div>
            <p>
              Design and implementation of structured databases using MySQL and
              PostgreSQL.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
