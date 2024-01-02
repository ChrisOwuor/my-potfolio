import "../assets/main.css"

export default function Footer () {
  return (
    <div className=" footer w-full p-1 lg:px-8 mt-20  flex justify-center ">
      <div
        id="connect"
        className="w-full aos-init aos-animate "
        data-aos="fade-up"
      >
        <div className=" py-24  lg:pt-24 lg:pb-12 px-12  text-center  ">
          <h3 className="font-bold uppercase tracking-widest text-grey-600 mb-4">
            Contact Me
          </h3>
          <h2 className="title text-4xl">Got a Project? Lets Talk!</h2>
          <div className="flex w-full flex-col sm:flex-row justify-center items-center mt-12">
            <form
              className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
              action="/thank-you"
            >
              <h2 className="flex text-sm font-semibold text-black dark:text-black">
                <img
                  className="w-6  "
                  src="https://d33wubrfki0l68.cloudfront.net/08410ce2cf34f129b7fd89cada11458fb69836bb/584bd/assets/site/mail.svg"
                  alt="mail.svg"
                />
                <span className="ml-3">Stay up to date</span>
              </h2>
              <p className="mt-2 text-sm text-black dark:text-black">
                Get notified when I publish something new, and unsubscribe at
                any time.
              </p>
              <div className="mt-6 flex">
                <input
                  type="email"
                  placeholder="Email address"
                  aria-label="Email address"
                  required=""
                  className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
                />
                <button
                  className="inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-teal-400 font-semibold text-zinc-100 hover:bg-teal-200 active:bg-zinc-800 active:text-zinc-100/70 dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:active:bg-zinc-700 dark:active:text-zinc-100/70 ml-4 flex-none"
                  type="submit"
                >
                  Join
                </button>
              </div>
            </form>
          </div>

        </div>
        <div className="container py-12 text-center">
          <p className="text-base text-grey-600">
            © 2023 Chrispine Owuor. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
