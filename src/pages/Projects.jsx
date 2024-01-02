import { Link } from "react-router-dom";
import { data } from "../components/Project_data";
import { useState } from "react";
import Modal from "../components/Modal";

export default function Projects() {
  // const [view_modal, setViewmodal] = useState(false);
  const [project_to_view, setProjecttoview] = useState({});
  const [open, setOpen] = useState(false);

  const more = (e, id) => {
    e.preventDefault();
    const project_to_view = data.find((item) => item.id === id);
    setProjecttoview(project_to_view);
    setOpen(true);
  };
  return (
    <div className="bg-hero">
      <Modal project_item={project_to_view} open={open} setOpen={setOpen} />
      <main className="flex-auto">
        <div className="sm:px-8 mt-16 sm:mt-32">
          <div className="mx-auto w-full max-w-7xl lg:px-8">
            <div className="relative px-4 sm:px-8 lg:px-12">
              <div className="mx-auto max-w-2xl lg:max-w-5xl">
                <header className="max-w-2xl">
                  <h1 className="text-4xl font-bold tracking-tight text-zinc-800  sm:text-5xl">
                    Some of the many applications I have already had to work on.
                  </h1>
                  <p className="mt-6 text-base text-zinc-600 ">
                    Over the years, I`ve delved into numerous small projects,
                    each a testament to my passion for exploration and
                    innovation. These ventures, showcased here, are not just
                    personal accomplishments but endeavors I`m immensely proud
                    of.
                  </p>
                </header>
                <div className="mt-16 sm:mt-20">
                  <ul
                    role="list"
                    className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
                  >
                    {!open &&
                      data.map((item, index) => (
                        <li
                          key={index}
                          className="group p-2 rounded-lg bg-white  transition hover:bg-gray-100 relative flex flex-col items-start mb-5"
                        >
                          <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 ">
                            <img
                              alt=""
                              loading="lazy"
                              width="32"
                              height="32"
                              decoding="async"
                              data-nimg="1"
                              className="h-8 w-8"
                              style={{ color: "transparent" }}
                              src={item.img}
                            />
                          </div>
                          <h2 className="mt-6 text-base font-semibold text-zinc-800 ">
                            <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition  sm:-inset-x-6 sm:rounded-2xl"></div>
                            <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                            <span className="relative z-10">{item.title}</span>
                          </h2>
                          <p className="relative z-10 mt-2 text-sm text-zinc-600 ">
                            {item.text.slice(0, 200)}...
                          </p>
                          <span
                            onClick={(e) => more(e, item.id)}
                            className="mt-2 text-sm text-blue-400 hover:text-blue-500 rounded-lg px-1 z-40 cursor-pointer"
                          >
                            read more
                          </span>

                          <p className="relative z-40 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500  ">
                            <svg
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                              className="h-6 w-6 flex-none"
                            >
                              <path
                                d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
                                fill="currentColor"
                              ></path>
                            </svg>
                            <Link to={item.link} className="z-50">
                              <span className="ml-2"> View in github</span>{" "}
                            </Link>
                          </p>
                          <div className="stack mt-4">
                            <ul className="flex flex-wrap gap-3 ">
                              {item.stack.map((stack_item, index) => (
                                <li
                                  className=" bg-gray-200 px-2 rounded-lg text-sm text-zinc-600 "
                                  key={index}
                                >
                                  {stack_item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
