import logo from "../assets/anim/ai1.mp4";
import logo2 from "../assets/anim/ai2.mp4";
import logo3 from "../assets/anim/ai3.mp4";
import logo1 from "../assets/logo/ai.png";
import logo4 from "../assets/anim/ai4.mp4";
import logo5 from "../assets/anim/ai5.mp4";
import PropTypes from "prop-types";

const PrincipleCard = ({ image, title, description }) => (
  <div className="bg-gradient-to-b from-blue-500 to-indigo-600 rounded-md flex-col p-5 transition-transform duration-300 ease-in-out hover:scale-105">
    <img className="h-16 rounded-lg mb-2" src={image} alt={title} />
    <h1 className="font-semibold text-xl text-gray-200 mb-2">{title}</h1>
    <p>{description}</p>
  </div>
);

const Principles = () => {
  return (
    <div className="pb-10 bg-blue-800 text-white">
      <h1 className="text-center font-semibold text-3xl pt-20 mb-2">
        What Sets Us Apart is What we Stand For
      </h1>
      <hr className="border-t-1 border-white max-w-md mx-auto mb-8" />
      <p className="max-w-5xl mx-auto text-center mt-10 text-lg px-8 md:px-32 mb-10">
        Drawing on our decades of IT expertise, we specialize in improving
        organizational performance through proven, sustainable solutions
        customized to meet our client’s needs.
      </p>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 rounded-xl p-10">
        <PrincipleCard
          image={logo4}
          title="Long-term relationship"
          description="We prioritize building enduring partnerships with our clients, fostering trust, reliability, and mutual growth over time."
        />
        <PrincipleCard
          image={logo1}
          title="Real customer service"
          description="Delivering genuine, responsive, and empathetic support to address customer needs and exceed their expectations."
        />
        <PrincipleCard
          image={logo3}
          title="Process-driven management"
          description="Our structured and systematic approach ensures efficiency, consistency, and quality in all operations."
        />
        <PrincipleCard
          image={logo5}
          title="Customised Solutions"
          description="Tailored strategies and services designed to meet unique business requirements and objectives."
        />
        <PrincipleCard
          image={logo}
          title="Business Philosophy"
          description="We operate with integrity, innovation, and a commitment to achieving impactful results for our clients."
        />
        <PrincipleCard
          image={logo2}
          title="Measurable return on investment"
          description="Focused on delivering tangible and quantifiable outcomes that enhance value and profitability for our clients."
        />
      </div>
    </div>
  );
};

PrincipleCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Principles;
