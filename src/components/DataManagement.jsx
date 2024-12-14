import logo from "../assets/anim/ai3.mp4";

const DataManagement = () => {
  return (
    <section className="p-10">
      <h2 className="text-4xl font-semibold text-gray-700 text-center px-6 py-4 ">
        Integrated Data Management
      </h2>

      <div className="my-10 bg-gray-100 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 p-10 rounded-xl">
        {/* --------- Column 1 ----------- */}
        <div className="bg-blue-200 p-6 rounded-lg shadow-lg">
          <div className="flex justify-center mb-4">
            <img src={logo} alt="Data Protection" className="h-28 object-cover rounded-lg" />
          </div>
          <h1 className="text-xl font-semibold text-gray-800 mb-4">
            Data Protection & Backup Solutions
          </h1>
          <p className="text-gray-700">
            Our customized, comprehensive data protection and automated backup solutions protect your data from malicious users and prevent productivity and monetary losses.
          </p>
        </div>

        {/* --------- Column 2 ----------- */}
        <div className="bg-teal-200 p-6 rounded-lg shadow-lg">
          <div className="flex justify-center mb-4">
            <img src={logo} alt="Disaster Recovery" className="h-28 object-cover rounded-lg" />
          </div>
          <h1 className="text-xl font-semibold text-gray-800 mb-4">
            Disaster Recovery Solutions
          </h1>
          <p className="text-gray-700">
            Our customized disaster recovery solutions help you resume business faster and reduce downtime following the disaster. Enjoy uninterrupted productivity with our advanced DR solutions.
          </p>
        </div>

        {/* --------- Column 3 ----------- */}
        <div className="bg-blue-200 p-6 rounded-lg shadow-lg">
          <div className="flex justify-center mb-4">
            <img src={logo} alt="Unified Storage" className="h-28 object-cover rounded-lg" />
          </div>
          <h1 className="text-xl font-semibold text-gray-800 mb-4">
            Primary & Unified Storage
          </h1>
          <p className="text-gray-700">
            Our integrated data management services include primary and unified data storage products of prime brands, customized data protection, backup solutions, and robust disaster recovery (DR) solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DataManagement;
