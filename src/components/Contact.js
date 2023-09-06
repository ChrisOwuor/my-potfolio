const Contact = () => {
  return (
    <div className="contact h-max flex justify-center  ">
      <div className="elem lg:w-3/5 py-12   max-[1300px]:w-4/5">
        <h1 className="text-center font-mono underline text-lg font-bold lg:text-left">
          Final Thoughts
        </h1>
        <ul className=" list-disc">
          <li>
            {" "}
            <p className="font-serif font-semibold lg:font-light lg:text-lg   ">
              {" "}
              I am continously learning and gaining in demand market skills for
              your software solutions{" "}
            </p>
          </li>
          <li>
            {" "}
            <p className="font-serif font-semibold lg:font-light lg:text-lg  ">
              Be sure to get in touch for all your web solutions
            </p>
          </li>
          <li>
            {" "}
            <p className="font-serif font-semibold lg:font-light lg:text-lg ">
              For fellow developers get in touch for collaborations
            </p>
          </li>
        </ul>
      </div>
      
    </div>
  );
};

export default Contact;
