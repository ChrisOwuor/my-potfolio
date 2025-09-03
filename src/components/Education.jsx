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

  const experiences = [
    {
      year: "2023",
      title: "Emobilis Technology Institute",
      subtitle: "Fullstack Development",
      position: "right",
      points: [
        "Specialized in full-stack web development using Python as primary language",
        "Built scalable APIs using Django Rest Framework",
        "Managed data storage through MySQL database and SQLite3",
        "Crafted user-friendly interfaces with modern design principles",
        "Completed final project integrating third-party APIs including Daraja API for payment processing",
      ],
      skills: ["python", "django", "mysql", "REST APIs", "SQLite3"],
    },
    {
      year: "2023",
      title: "Freelance Developer",
      subtitle: "",
      position: "left",
      points: [
        "Delivered innovative solutions tailored to meet clients' unique requirements",
        "Demonstrated proficiency across multiple programming languages and technologies",
        "Successfully completed projects with focus on quality and efficiency",
        "Applied problem-solving skills to overcome complex development challenges",
        "Maintained high code quality standards in dynamic freelance environment",
      ],
      skills: [
        "Version control",
        "Time management",
        "Soft skills",
        "Problem solving",
      ],
    },
    {
      year: "2023",
      title: "Jamii Telecommunications Limited",
      subtitle: "Junior Network Engineer",
      position: "right",
      points: [
        "Supported and enhanced organization's network infrastructure",
        "Contributed to design, implementation, and maintenance of network solutions",
        "Gained hands-on experience in network troubleshooting and optimization",
        "Collaborated with dynamic team on network performance improvements",
        "Developed deep understanding of corporate network management",
      ],
      skills: ["Cisco", "OSPF", "CRM", "Network security", "Troubleshooting"],
    },
    {
      year: "2020 - 2024",
      title: "Egerton University",
      subtitle: "BSc Computer Science",
      position: "left",
      points: [
        "Explored low-level programming languages and system architecture",
        "Studied Operating Systems principles and implementation",
        "Gained practical networking experience using Cisco Packet Tracer",
        "Covered computer security fundamentals and best practices",
        "Learned software design life cycle methodologies and applications",
      ],
      skills: ["OOP", "Computer networks", "SDLC", "Security", "System Design"],
    },
  ];

  return (
    <div
      id="services"
      className="py-16 px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl bg-hero"
    >
      {/* Header Section */}
      <div
        className="w-full flex items-center flex-col mb-16"
        data-aos="fade-up"
      >
        <h2 className="text-[#4A6CF7] text-xl font-semibold">
          Education & Experience
        </h2>
        <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl mt-4 text-center">
          My Resume
        </h1>
      </div>

      {/* Timeline Section */}
      <div className="relative">
        {/* Timeline Line - Hidden on mobile */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#4A6CF7] to-blue-300"></div>

        {/* Timeline Items */}
        <div className="space-y-8 md:space-y-16">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative flex flex-col md:flex-row items-center ${
                exp.position === "right" ? "md:flex-row" : "md:flex-row-reverse"
              }`}
              data-aos={`fade-${exp.position === "right" ? "right" : "left"}`}
              data-aos-delay={index * 200}
            >
              {/* Timeline Dot */}
              <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#4A6CF7] rounded-full border-4 border-white shadow-lg z-10"></div>

              {/* Content Card */}
              <div
                className={`w-full md:w-5/12 ${
                  exp.position === "right" ? "md:pr-8" : "md:pl-8"
                }`}
              >
                <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border-l-4 border-[#4A6CF7]">
                  {/* Year Badge */}
                  <div className="inline-block bg-[#4A6CF7] text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
                    {exp.year}
                  </div>

                  {/* Title and Subtitle */}
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                    {exp.title}
                  </h3>
                  {exp.subtitle && (
                    <h4 className="text-lg font-semibold text-gray-700 mb-4">
                      {exp.subtitle}
                    </h4>
                  )}

                  {/* Bullet Points */}
                  <ul className="space-y-2 mb-6">
                    {exp.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-[#4A6CF7] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm sm:text-base leading-relaxed">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="bg-blue-100 hover:bg-blue-200 text-blue-800 text-xs sm:text-sm font-medium px-3 py-1 rounded-full transition-colors duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Spacer for opposite side */}
              <div className="hidden md:block w-5/12"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Timeline Indicator */}
      <div className="md:hidden mt-12 text-center">
        <div className="inline-flex items-center px-4 py-2 bg-[#4A6CF7] text-white rounded-full text-sm font-medium">
          <div className="w-3 h-3 bg-white rounded-full mr-2"></div>
          Timeline View
        </div>
      </div>
    </div>
  );
}
