import "../assets/main.css";

export default function Footer() {
  const socialLinks = [
    
    {
      name: "Instagram",
      href: "https://www.instagram.com/lafammo/",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.348-1.051-2.348-2.348s1.051-2.348 2.348-2.348 2.348 1.051 2.348 2.348-1.051 2.348-2.348 2.348zm7.718 0c-1.297 0-2.348-1.051-2.348-2.348s1.051-2.348 2.348-2.348 2.348 1.051 2.348 2.348-1.051 2.348-2.348 2.348z" />
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
      color: "hover:text-pink-500",
    },
    {
      name: "Email",
      href: "mailto:owuorchrispine77@gmail.com", 
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
      ),
      color: "hover:text-blue-500",
    },
  ];

  return (
    <div className="footer w-full p-1 lg:px-8 mt-20 flex justify-center">
      <div
        id="connect"
        className="w-full aos-init aos-animate"
        data-aos="fade-up"
      >
        {/* Main Content Section */}
        <div className="py-16 lg:py-24 px-4 sm:px-6 lg:px-12 text-center">
          <h3 className="font-bold uppercase tracking-widest text-grey-600 mb-4 text-sm sm:text-base">
            Connect With Me
          </h3>
          <h2 className="title text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Let's Build Something Amazing!
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto mb-12">
            Ready to bring your ideas to life? I'm just a message away. Let's
            discuss your next project and create something extraordinary
            together.
          </p>

          {/* Social Links Section */}
          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-2xl border border-zinc-100 p-6 sm:p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Get In Touch
              </h3>

              {/* Social Icons Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex flex-col items-center justify-center p-4 rounded-xl border border-gray-200 transition-all duration-300 hover:border-transparent hover:shadow-lg ${link.color} hover:scale-105`}
                  >
                    <div className="mb-2 text-gray-600 group-hover:text-current transition-colors duration-300">
                      {link.icon}
                    </div>
                    <span className="text-sm font-medium text-gray-700 group-hover:text-current">
                      {link.name}
                    </span>
                  </a>
                ))}
              </div>

              {/* Contact Info */}
              <div className="space-y-3 text-sm text-gray-600">
                <p className="flex items-center justify-center">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  Available for freelance work
                </p>
                <p className="flex items-center justify-center">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Based in Kenya
                </p>
                <p className="flex items-center justify-center">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Quick response time
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-12">
            <a
              href={socialLinks[0].href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-[#4A6CF7] text-white font-semibold rounded-lg hover:bg-[#3c5ce6] transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              
              Start a Conversation
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-200 py-8 px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} Chrispine Owuor. All rights reserved.
            </p>
            <div className="flex space-x-6">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 ${link.color} transition-colors duration-300`}
                  aria-label={link.name}
                >
                  <div className="w-5 h-5">{link.icon}</div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
