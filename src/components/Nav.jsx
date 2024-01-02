import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const link_details = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },

  {
    name: "Projects",
    path: "/projects",
  },

  {
    name: "Skills",
    path: "/skills",
  },
  {
    name: "Uses",
    path: "/uses",
  },
];
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className=" inset-x-0 top-0 z-30 sticky  bg-white backdrop-opacity-10">
      <nav
        className="flex items-center justify-between lg:justify-center gap-x-20 py-1 px-6 lg:px-36"
        aria-label="Global"
      >
        <div className="flex lg:flex-grow-0 lg:hidden ">
          <Link to={"/"} className="">
            <span className="sr-only">Your Company</span>
            <img
              className="h-10 w-auto rounded-full"
              src="https://mattfarley.ca/img/mf-avatar.svg"
              alt=""
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-8  items-center justify-around gap-3 h-10 my-auto px-5 ml-0  rounded-full bg-white/90 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 ">
          {link_details.map((link, index) => (
            <NavLink
              key={index}
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? "text-[#4a6cf7]  px-3 py-2 transition hover:text-blue-400 dark:hover:text-blue-400"
                  : "  px-3 py-2 transition hover:text-blue-200 dark:hover:text-blue-200"
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-end">
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-4 py-6">
                {link_details.map((link, index) => (
                  <div
                    key={index}
                    className=" w-max bg-gray-200 rounded-lg"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {" "}
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        isActive
                          ? "text-teal-400  px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
                          : "  px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
                      }
                    >
                      {link.name}
                    </NavLink>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
