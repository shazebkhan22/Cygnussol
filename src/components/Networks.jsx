import logo from "../assets/anim/ai4.mp4"

const Networks = () => {
  return (
    <section>
      <h1 className="text-center font-sans font-semibold text-gray-700 text-4xl pt-10">
        Networks
      </h1>
      <div className="flex justify-center">
      <div className="grid grid-rows-2 grid-flow-col gap-6 bg-gray-200 max-w-6xl rounded-xl p-6 m-5">
        <div className="row-span-3 bg-blue-200 rounded-xl p-4">
          <img src={logo} alt="Logo" className="h-24 mx-auto mb-4 rounded-lg" />
          <h1 className="text-lg mb-4 font-semibold">
            Enterprise-grade network solutions
          </h1>
          <p>
            Get our dependable and secure enterprise network solutions that
            enable end-to-end connectivity across the enterprise and fast
            internal transactions over the secure network.
          </p>
        </div>
        <div className="col-span-2 bg-blue-300 rounded-xl p-4">
          <img src={logo} alt="Logo" className="h-24 mx-auto mb-4 rounded-lg" />
          <h1 className="text-lg mb-4 font-semibold">
            Business-grade Network Solutions
          </h1>
          <p>
            Cygnus takes a structured approach to designing cost-effective and
            scalable business-grade network solutions that fulfill your unique
            requirements and adapt to your existing network architecture.
          </p>
        </div>
        <div className="row-span-2 col-span-2 bg-blue-400 rounded-xl p-4">
          <img src={logo} alt="Logo" className="h-24 mx-auto mb-4 rounded-lg" />
          <h1 className="text-lg mb-4 font-semibold">
            Business-grade Network Solutions
          </h1>
          <p>
            Get seamless communication and streamlined business management in
            your multi-site organization with our sound and scalable
            connectivity solutions.
          </p>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Networks;
