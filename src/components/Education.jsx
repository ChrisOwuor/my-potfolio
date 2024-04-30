import { useEffect } from "react";
// importing aos
import AOS from "aos";
import "../assets/main.css";
import "aos/dist/aos.css";
export default function Education() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div id="services" className=" py-16 mx-auto max-w-2xl lg:max-w-5xl bg-hero  ">
      <div className="w-full  flex items-center flex-col">
        <h2 className="text-[#4A6CF7] text-xl font-semibold">
          Education & Expreience
        </h2>
        <h1 className="font-[700] text-3xl mt-4"> My Resume</h1>
        <p className="text-[#959cb1]">
          There are many variations of passages of Lorem Ipsum available but the
          majority have suffered alteration in some form.
        </p>
      </div>
      <ul className="timeline">
        <li>
          <div className="direction-r">
            <div className="flag-wrapper">
              <span className="time-wrapper">
                <span className="time">2023</span>
              </span>
            </div>
            <div className="desc">
              <h1 className="text-xl font-bold">
                Emobilis Technology Institute{" "}
              </h1>
              <h2 className="text-lg font-semibold ">Fullstack Development</h2>
              <ul className="space-y-2 text-base  font-normal mt-2 ">
                <li className="text-gray-800 ">
                  Specialized in full-stack web development, utilizing Python as
                  a primary language,leveraging the Django Rest Framework to
                  construct scalable APIs, and I efficiently manage data storage
                  through MySQL database and SQLite3. My expertise includes
                  crafting user-friendly interfaces, and I recently completed a
                  final project that involved integrating third-party APIs, such
                  as the Daraja API, for seamless payment processing.{" "}
                </li>
                <li className="flex gap-3">
                  <p className="bg-blue-200 rounded-lg px-1">python</p>
                  <p className="bg-blue-200 rounded-lg px-1">django</p>
                  <p className="bg-blue-200 rounded-lg px-1">mysql</p>
                </li>
              </ul>
            </div>
          </div>
        </li>

        <li>
          <div className="direction-l">
            <div className="flag-wrapper">
              <span className="time-wrapper">
                <span className="time">2023 </span>
              </span>
            </div>
            <div className="desc ">
              <h1 className="text-xl font-bold">Freelance Developer</h1>
              <div className="space-y-2 text-base font-normal  mt-2 flex lg:items-end items-center flex-col ">
                <div className="text-gray-800  ">
                  As a Freelance Developer, I bring a wealth of experience and
                  expertise in crafting innovative solutions tailored to meet
                  clients` unique needs. Proficient in a range of technologies
                  and programming languages, I have successfully delivered
                  projects with a keen focus on quality and efficiency. My
                  adaptability, problem-solving skills, and commitment to
                  delivering high-quality code make me a valuable asset in the
                  dynamic and evolving landscape of freelance development.
                </div>
                <div className="flex gap-3 flex-wrap justify-center ">
                  <div className="bg-blue-200 rounded-lg px-1">
                    Version control
                  </div>

                  <div className="bg-blue-200 rounded-lg px-1">
                    Time management
                  </div>
                  <div className="bg-blue-200 rounded-lg px-1">Soft skills</div>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="direction-r">
            <div className="flag-wrapper">
              <span className="time-wrapper">
                <span className="time">2023</span>
              </span>
            </div>
            <div className="desc">
              <h1 className="text-xl font-bold">
                Jamii Telecommunications Limited{" "}
              </h1>
              <h2 className="text-lg font-semibold ">
                Junior Network Engineer
              </h2>
              <ul className="space-y-2 text-base  font-normal mt-2 ">
                <li className="text-gray-800 ">
                  In my role as a Junior Network Engineer at Jamii
                  Telecommunications Limited, I played a vital role in
                  supporting and enhancing the organization`s network
                  infrastructure. Leveraging my skills and knowledge in
                  networking technologies, I actively contributed to the design,
                  implementation, and maintenance of robust network solutions.
                  Engaging with a dynamic team, I gained hands-on experience in
                  troubleshooting and optimizing network performance. This
                  position not only refined my technical abilities but also
                  cultivated a deep understanding of network management within a
                  corporate environment.
                </li>
                <li className="flex gap-3 flex-wrap justify-center">
                  <p className="bg-blue-200 rounded-lg px-1">Cisco</p>
                  <p className="bg-blue-200 rounded-lg px-1">OSPF</p>
                  <p className="bg-blue-200 rounded-lg px-1">CRM</p>

                  <p className="bg-blue-200 rounded-lg px-1">
                    Network security
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </li>

        <li>
          <div className="direction-l">
            <div className="flag-wrapper">
              <span className="time-wrapper">
                <span className="time">2020 - 2024</span>
              </span>
            </div>
            <div className="desc ">
              <h1 className="text-xl font-bold">Egerton University</h1>
              <h2 className="text-lg font-semibold ">Bsc Computer Science</h2>
              <div className="space-y-2 text-base font-normal  mt-2 flex lg:items-end items-center flex-col ">
                <div className="text-gray-800 ">
                  Continuing my BSc in Computer Science at Egerton University
                  (2020-2024), I`ve delved into low-level languages, explored
                  Operating Systems, and gained hands-on experience with
                  networking using tools like Cisco Packet Tracer. Additionally,
                  my coursework has covered essential aspects such as computer
                  security and software design life cycle, providing a
                  comprehensive foundation for practical application in the
                  field.
                </div>
                <div className="flex gap-3 flex-wrap justify-center ">
                  <div className="bg-blue-200 rounded-lg px-1">OOP</div>

                  <div className="bg-blue-200 rounded-lg px-1">
                    Computer networks
                  </div>
                  <div className="bg-blue-200 rounded-lg px-1">SDLC</div>
                  <div className="bg-blue-200 rounded-lg px-1">Security</div>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
