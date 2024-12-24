import Banner from "../components/Banner";
import MovingLogos from "../components/MovingLogos";
import logo2 from "../assets/anim/ai2.mp4";
import logo3 from "../assets/anim/ai3.mp4";
import logo4 from "../assets/anim/ai4.mp4";
import Principles from "../components/Principles";
import { bgimages } from "../assets/assets";

const Home = () => {
  return (
    <div>
      <Banner />
      {/*--------------Partners------------- */}
      <section className="bg-[url('/Users/shazebkhan/Desktop/cygnus/frontend/src/assets/')] bg-cover bg-cente pb-10">
        <h1 className=" text-3xl font-semibold text-center mt-20 mb-2">
          In Partnership With Leading Pioneers
        </h1>
        <hr className="border-t-1 border-gray-800 max-w-lg mx-auto mb-8" />
        <p className="text-center mt-5 text-lg mx-60 mb-10">
          Collaborating with industry leaders, we guarantee top-tier IT solutions to meet your business requirements.
        </p>
        <MovingLogos />
      </section>

      <section className="py-5">
        <h1 className="text-center mb-2 font-semibold text-3xl pt-5"> What Sets Us Apart is What we Stand For</h1>
        <hr className="border-t-1 border-black max-w-md mx-auto mb-8" />

       

        <div className=" mt-5 mx-auto grid grid-cols-[40%,60%] gap-4 pt-5 px-10 rounded-t-xl max-w-6xl">
          <div className="bg-gradient-to-l border-l-[1rem] border-t-[1rem] border-b-[1rem] border-blue-900 p-4 rounded-lg ">
           
          </div>
          <div className="bg-gradient-to-r from-gray-300 via-gray-200 to-gray-100 p-4 rounded-lg" 
          style={{ backgroundImage: `url(${bgimages[4].image})` }}>
            <img
              src={logo2}
              alt="Logo"
              className="h-24 mx-auto mb-4  rounded-lg"
            />
            <h1 className="text-xl mb-4 font-semibold">Cyber Security </h1>
            <p>
              Protect your IT infrastructure and data from all types of cyber
              threats with the help of Cygnus’ robust cyber-security solutions.
            </p>
          </div>
        </div>
        <div className="mx-auto grid grid-cols-[55%,45%] gap-4 p-10 rounded-b-xl max-w-6xl">
          <div className="bg-gradient-to-l from-gray-300 via-gray-200 to-gray-100 p-4 rounded-lg"
          style={{ backgroundImage: `url(${bgimages[3].image})` }}>
            <img
              src={logo3}
              alt="Logo"
              className="h-24 mx-auto mb-4 rounded-lg"
            />
            <h1 className="text-xl mb-4 font-semibold">Cloud</h1>
            <p>
              Set up your virtual office and access your data anywhere, anytime
              with the help of our cloud computing solutions. Our scalable cloud
              computing solutions increase your business flexibility and
              decrease your IT costs.
            </p>
          </div>
          <div className=" bg-red-100 border-blue-900 p-4 rounded-lg"
          style={{ backgroundImage: `url(${bgimages[3].image})` }}>
            <img
              src={logo4}
              alt="Logo"
              className="h-24 mx-auto mb-4 rounded-lg"
            />
            <h1 className="text-xl mb-4 font-semibold">AI/ML</h1>
            <p>
              Increase productivity and operational efficiency with Cygnus’ AI
              and ML solutions that help companies automate and optimize routine
              processes and tasks.
            </p>
          </div>
        </div>
      </section>
      <Principles/>

      
      <section className="h-40">
        <h1 className="text-center pt-14 font-semibold text-5xl">
          Lets Work Together!
        </h1>
      </section>
    </div>
  );
};

export default Home;
