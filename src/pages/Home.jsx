import Banner from "../components/Banner";
import MovingLogos from "../components/MovingLogos";
import logo2 from "../assets/anim/ai2.mp4";
import logo3 from "../assets/anim/ai3.mp4";
import logo4 from "../assets/anim/ai4.mp4";
import Principles from "../components/Principles";

const Home = () => {
  return (
    <div>
      <Banner />

      {/*--------------Partners------------- */}
      <div className="bg-[url('/Users/shazebkhan/Desktop/cygnus/frontend/src/assets/')] bg-cover bg-cente pb-10">
        <h1 className=" text-3xl font-semibold text-center mt-20 mb-2">
          Trusted By The World{"'"}s Leading Private Capital Firms{" "}
        </h1>
        <hr className="border-t-1 border-gray-800 max-w-xl mx-auto mb-8" />
        <p className="text-center mt-5 text-lg mx-60 mb-10">
          We work with some of the leading organization to ensure we are
          providing nothing but the best when it comes to their IT requirements.
        </p>
        <MovingLogos />
      </div>

      <div className="h-[50rem]">
        <h1 className="text-center font-semibold text-3xl pt-10">IT Services</h1>
       

        <div className=" mt-10 mx-auto grid grid-cols-[40%,60%] gap-4 pt-10 px-10 rounded-t-xl max-w-6xl">
          <div className="bg-blue-500 p-4 rounded-lg text-white">
            <img
              src={logo2}
              alt="Logo"
              className="h-24 mx-auto mb-4 rounded-lg"
            />
            <h1 className="text-xl mb-4 font-semibold">Infrastructure </h1>
            <p>
              Transform your business units into high-performance ones with
              Cygnus’ reliable, efficient, optimized, and secured technology
              solutions.
            </p>
          </div>
          <div className="bg-gray-300 p-4 rounded-lg">
            <img
              src={logo2}
              alt="Logo"
              className="h-24 mx-auto mb-4  rounded-lg"
            />
            <h1 className="text-xl mb-4 font-semibold">Security </h1>
            <p>
              Protect your IT infrastructure and data from all types of cyber
              threats with the help of Cygnus’ robust cyber-security solutions.
            </p>
          </div>
        </div>
        <div className="mx-auto grid grid-cols-[55%,45%] gap-4 p-10 rounded-b-xl max-w-6xl">
          <div className="bg-gray-200 p-4 rounded-lg">
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
          <div className="bg-blue-600 p-4 rounded-lg text-white">
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
      </div>
      <Principles/>

      
      <div className="h-40">
        <h1 className="text-center pt-14 font-semibold text-5xl">
          Lets Work Together!
        </h1>
      </div>
    </div>
  );
};

export default Home;
