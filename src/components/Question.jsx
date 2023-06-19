import { useState } from "react";

export const Question = ({ question }) => {
  const { title, info } = question;
  const [toggle, setToggle] = useState(false);

  const handleClick = () => setToggle(!toggle);

  return (
    <>
      <div className="flex bg-white p-4 justify-between mt-3 w-full rounded-lg flex-col">
        <div className="flex justify-between">
          <h2>{title}</h2>
          <button
            className="border font-bold text-red-400 px-2 cursor-pointer border-red-400 hover:bg-red-100 transition-colors duration-200"
            onClick={handleClick}
          >
            {toggle ? "-" : "+"}
          </button>
        </div>
        {toggle ? (
          <div className=" mt-3">
            <p className="text-justify">{info}</p>
          </div>
        ) : null}
      </div>
    </>
  );
};
