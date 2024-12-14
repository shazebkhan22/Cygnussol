import { useParams, Link } from "react-router-dom";
import { caseData } from "../assets/assets";

const CaseStudiesCard = () => {
  const { id } = useParams();
  const card = caseData.find((item) => item.id === parseInt(id));

  if (!card) {
    return (
      <div className="text-center p-6">
        <h1 className="text-2xl font-bold">Card not found</h1>
        <Link to="/casestudies" className="text-blue-500 underline">
          Back to Case Studies
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto bg-white my-10 rounded-lg">
      <h1 className="text-4xl text-center font-bold my-4">{card.heading}</h1>
      <img
        src={card.image}
        alt={card.heading}
        className="w-full h-[35rem] object-cover rounded-xl"
      />
      <p className="mt-4 text-2xl text-gray-800">{card.content}</p>
      <Link to="/casestudies" className="text-red-500 bg-green-300 mt-4 block">
        Back to Case Studies
      </Link>
    </div>
  );
};

export default CaseStudiesCard;
