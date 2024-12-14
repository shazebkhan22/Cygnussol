import logo from "../assets/anim/ai1.mp4";
import logo2 from "../assets/anim/ai2.mp4";
import logo3 from "../assets/anim/ai3.mp4";
import logo1 from "../assets/logo/ai.png";
import logo4 from "../assets/anim/ai4.mp4";
import logo5 from "../assets/anim/ai5.mp4";

const Principles = () => {
  return (
    <div className="pb-10 bg-blue-800 text-white ">
    <h1 className="text-center font-semibold text-3xl pt-20 mb-2">
      What Sets Us Apart is What we Stand For
    </h1>
    <hr className="border-t-1 border-white max-w-md mx-auto mb-8" />
    <p className="text-center mt-10 text-lg px-[24rem] mb-10">
      Drawing on our decades of IT expertise we specialize in improving
      organizational performance through proven, sustainable solutions
      customized to meet our client’s needs.
    </p>

    <div className="max-w-6xl mx-auto grid grid-cols-3 gap-4 rounded-xl p-10 ">
      <div className="bg-blue-600 rounded-md flex-col p-5 transition-transform duration-300 ease-in-out hover:scale-105">
        <img className="h-16 rounded-lg mb-2" src={logo4} alt="" />
        <h1 className="font-semibold text-xl text-gray-200 mb-2">
          Long-term relationship
        </h1>
        <p>
          We prioritize building enduring partnerships with our clients,
          fostering trust, reliability, and mutual growth over time.
        </p>
      </div>
      <div className="bg-blue-600 rounded-md flex-col p-5 ">
        <img className="h-16 rounded-lg mb-2" src={logo1} alt="" />
        <h1 className="font-semibold text-xl text-gray-200 mb-2">
          Real customer service
        </h1>
        <p>
          Delivering genuine, responsive, and empathetic support to address
          customer needs and exceed their expectations.
        </p>
      </div>
      <div className="bg-blue-600 rounded-md flex-col p-5 ">
        <img className="h-16 rounded-lg mb-2" src={logo3} alt="" />
        <h1 className="font-semibold text-xl text-gray-200 mb-2">
          Process-driven management
        </h1>
        <p>
          Our structured and systematic approach ensures efficiency,
          consistency, and quality in all operations.
        </p>
      </div>
      <div className="bg-blue-600 rounded-md flex-col p-5 ">
        <img className="h-16 rounded-lg mb-2" src={logo5} alt="" />
        <h1 className="font-semibold text-xl text-gray-200 mb-2">
          Customised Solutions
        </h1>
        <p>
          Tailored strategies and services designed to meet unique business
          requirements and objectives.
        </p>
      </div>
      <div className="bg-blue-600 rounded-md flex-col p-5 ">
        <img className="h-16 rounded-lg mb-2" src={logo} alt="" />
        <h1 className="font-semibold text-xl text-gray-200 mb-2">
          Business Philosophy
        </h1>
        <p>
          We operate with integrity, innovation, and a commitment to
          achieving impactful results for our clients.
        </p>
      </div>
      <div className="bg-blue-600 rounded-md flex-col p-5 ">
        <img className="h-16 rounded-lg mb-2" src={logo2} alt="" />
        <h1 className="font-semibold text-xl text-gray-200 mb-2">
          Measurable return on investment
        </h1>
        <p>
          Focused on delivering tangible and quantifiable outcomes that
          enhance value and profitability for our clients.
        </p>
      </div>
      <div className="grid grid-cols-subgrid gap-4 col-span-3">
        <div className="col-start-2 bg-blue-600 rounded-md flex-col p-5">
          <img className="h-16 rounded-lg mb-2" src={logo3} alt="" />
          <h1 className="font-semibold text-xl text-gray-200 mb-2">
            The things we believe give us an edge over the competition
          </h1>
          <p>
            Our unwavering focus on innovation, client-centric solutions,
            and operational excellence sets us apart in the marketplace.
          </p>
        </div>
      </div>
    </div>
  </div>

  )
}

export default Principles
