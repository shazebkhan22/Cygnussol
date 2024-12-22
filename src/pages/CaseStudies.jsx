import { Link } from "react-router-dom";
import { caseData } from "../assets/assets";

const CaseStudies = () => {
  return (
    <div className=" bg-gradient-to-b from-white from-30% to-indigo-400 p-4">
      <h1 className="text-center text-5xl font-bold mb-2">Case Studies</h1>
      <hr className="border-t-1 border-black max-w-40 mx-auto mb-8" />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto py-10 ">
        {caseData.map((card) => (
          <div key={card.id} className="rounded-lg pb-4">
            <Link to={`/casestudies/${card.id}`} className="">
              <img
                src={card.image}
                alt={card.id}
                className="w-full h-80 shadow-xl object-cover transition-transform duration-300 ease-in-out hover:scale-105 rounded-xl"
              />
              <h2 className="text-xl font-semibold mt-2 p-2">{card.heading}</h2>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseStudies;
