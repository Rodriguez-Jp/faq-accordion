import { useState } from "react";
import { Question } from "./components/Question";

function App() {
  const generateKey = () => crypto.randomUUID();

  return (
    <>
      <main className="flex justify-center items-center w-full h-screen">
        <div className="w-2/4 text-center bg-red-400 p-5">
          <h2 className="p-2 mb-2 font-bold text-white text-2xl">
            Frequently Asked Question (FAQ)
          </h2>
          <div className="">
            {questions.map((question) => (
              <Question key={generateKey()} question={question} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

const questions = [
  {
    id: 1,
    title: "Is this a good product?",
    info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem.",
  },
  {
    id: 2,
    title: "How much does it cost?",
    info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem.",
  },
  {
    id: 3,
    title: "When can I get it?",
    info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem.",
  },
];

export default App;
