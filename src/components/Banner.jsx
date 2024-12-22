import logo4 from "../assets/anim/ai2.mp4";
import logo3 from "../assets/anim/ai3.mp4";
import logo from "../assets/anim/ai1.mp4";


const Banner = () => {
  return (
    <div className="bg-[linear-gradient(to_bottom,white_65%,navy_35%)] h-[60rem] flex pt-32 justify-center">
      <div className="text-center max-w-6xl ">
        <h1 className="text-6xl font-bold mb-8">
          One Platform for Your Firm <br />
          One Login for Your Investors
        </h1>

        <p className="text-md mb-8">
          At Cygnus, our team of experts brings solutions for all your back-end
          IT requirements, while you can focus on building your business. From
          ensuring integrated data storage, to seamless connectivity to
          end-point security, our solutions ensure every aspect of your IT
          requirement is taken care of.
        </p>

        <button className="text-white bg-gradient-to-r from-blue-500 via-blue-700 to-blue-900 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
          Lets Talk {"->"}
        </button>

        <div className="mt-10 bg-gradient-to-b from-blue-900 via-blue-500 to-white mx-auto grid grid-cols-3 gap-4 rounded-xl p-10">
          {/** --------- Three Columns ----------- */}

          <div className="bg-white p-4 rounded-lg">
            <img
              src={logo3}
              alt="Logo"
              className="h-28 mx-auto mb-4"
            />
            <h1 className="text-lg mb-4 font-semibold">
              Transforming Through Technology
            </h1>
            <p>
            Unlock the potential of advanced technological solutions to transform and elevate your enterprise to new heights.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <img
              src={logo4}
              alt="Logo"
              className="h-28 mx-auto mb-4"
            />
            <h1 className="text-lg mb-4 font-semibold">
              The Complete IT Solution
            </h1>
            <p>
              Revolutionary products and services tailored to your unique needs,
              delivering unparalleled performance and innovation.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <img
             src={logo}
              alt="Logo"
              className="h-28 mx-auto mb-4"
            />
            <h1 className="text-lg mb-4 font-semibold">
              Prioritizing Performance Across Your Business
            </h1>
            <p>
              Elevate your performance with cutting-edge, reliable, and secure
              solutions that drive efficiency and innovation at every step.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
