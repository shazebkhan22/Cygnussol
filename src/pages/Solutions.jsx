import DataManagement from "../components/DataManagement";
import Enterprise from "../components/Enterprise";
import Networks from "../components/Networks";
import Lottie from "lottie-react";
import first from "../assets/json/1.json";
import second from "../assets/json/2.json";
import third from "../assets/json/3.json";
import fourth from "../assets/json/4.json";
const Solutions = () => {
  return (
    <div>
      <h1 className="flex justify-center text-5xl font-bold px-6 py-4">
        Four-wheel IT Solutions to Streamline Your Operations
      </h1>
      <hr className="border-t-1 border-black max-w-4xl mx-auto mb-8" />
      <section>
        <h2 className="flex justify-center text-4xl text-gray-700 font-sans font-semibold px-6 py-4">
          Infrastructure
        </h2>
        <div className="flex flex-wrap justify-center m-5 px-6 py-4 gap-10">
          {/* Left Card */}
          <div className="bg-teal-200 max-w-xl rounded-2xl">
            <div className="m-10 p-10 bg-sky-300 rounded-2xl">
              <Lottie
                animationData={first}
                loop={true}
                style={{ width: 270, height: 270 }}
              />
            </div>
          </div>

          {/* Right Card */}
          <div className="max-w-xl bg-blue-50 shadow-lg rounded-r-2xl p-6 border-l-4 border-blue-500">
            <h3 className="text-3xl font-extrabold text-blue-800 mb-4">
              End User Computing
            </h3>
            <h4 className="text-xl font-semibold text-blue-600 mb-4">
              PCs, Laptops, and Workstations
            </h4>
            <p className="text-gray-700 mb-4">
              Leverage automation and virtualization with our high-quality,
              customized end-user computing solutions. Cygnus offers
              cutting-edge enterprise and cloud computing products that ensure
              seamless workspace collaboration and user adoption.
            </p>
            <p className="text-gray-600">
              From hardware provisioning to remote desktop management, we
              provide scalable, secure, and cost-effective solutions tailored to
              your organizational needs. Empower your workforce with the latest
              technology while optimizing operational efficiency.
            </p>
          </div>
        </div>
      </section>

      <Enterprise />
      <DataManagement />
      <Networks />

      <section>
        <div className="flex flex-wrap justify-center my-10 px-6 py-4 gap-10">
          {/*Right Card */}
          <div className="max-w-xl bg-blue-50 shadow-lg rounded-l-2xl p-6 border-r-4 border-blue-500">
            <h3 className="text-3xl font-extrabold text-blue-800 mb-4">
              Security
            </h3>
            <p className="text-gray-700 mb-4">
              Protect and defend your internet-connected devices and services
              from malicious attacks with our highly robust cybersecurity
              solutions.
            </p>
            <p className="text-gray-600">
              Our advanced solutions safeguard your digital infrastructure
              through real-time monitoring, threat detection, and proactive
              defense strategies. Whether youre securing sensitive data or
              protecting against evolving threats, we ensure end-to-end
              protection tailored to your organizations needs.
            </p>
            <ul className="list-disc list-inside text-gray-700 mt-4">
              <li>Real-time threat analysis and mitigation</li>
              <li>Comprehensive firewall and endpoint protection</li>
              <li>Data encryption and secure communication channels</li>
              <li>Regular vulnerability assessments</li>
            </ul>
          </div>

          {/* Left Card */}
          <div className="bg-sky-100 max-w-xl rounded-2xl ">
            <div className="m-10 p-10 bg-blue-200 rounded-2xl">
              <Lottie
                animationData={second}
                loop={true}
                style={{ width: 370, height: 170 }}
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="flex flex-wrap justify-center m-10 px-6 py-4 gap-10">
          {/* Left Card */}
          <div className="bg-sky-200 max-w-xl rounded-2xl ">
            <div className="m-10 p-10 bg-sky-400 rounded-2xl">
              <Lottie
                animationData={third}
                loop={true}
                style={{ width: 270, height: 270 }}
              />
            </div>
          </div>

          {/* Right Card */}
          <div className="max-w-xl bg-gray-50 shadow-lg rounded-r-2xl p-6 border-l-4 border-blue-600">
            <h3 className="text-3xl font-extrabold text-blue-800 mb-4">
              High-Performance Computing (HPC)
            </h3>
            <p className="text-gray-700 mb-4">
              High-performance computing (HPC) harnesses parallel data
              processing to deliver unparalleled computing power for advanced
              calculations and applications. By aggregating computing resources,
              HPC ensures seamless execution of complex workloads with
              exceptional efficiency, speed, and reliability.
            </p>
            <p className="text-gray-600">
              Ideal for industries like scientific research, financial modeling,
              and engineering simulations, HPC surpasses the limitations of
              traditional computing systems. It offers unmatched performance to
              meet the most demanding computational needs.
            </p>
            <ul className="list-disc list-inside text-gray-700 mt-4">
              <li>Accelerated data processing and analysis</li>
              <li>Enhanced performance for resource-intensive applications</li>
              <li>Scalable solutions for growing computational demands</li>
              <li>Optimized efficiency with parallel computing</li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <div className="flex flex-wrap justify-center m-10 px-6 py-4 gap-10">
          {/* Right Card */}
          <div className="max-w-xl bg-gray-50 shadow-lg rounded-r-2xl p-6 border-l-4 border-blue-600">
            <h3 className="text-3xl font-extrabold text-blue-800 mb-4">
              Cloud Solutions
            </h3>
            <p className="text-gray-700 mb-4">
              Unlock the full potential of your business with our cloud
              computing solutions. Set up a virtual office that ensures you stay
              connected to your business anytime, anywhere. Experience a
              seamless transition to the cloud with unmatched benefits that
              empower your operations.
            </p>
            <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
              <li>Reduced IT costs with minimized infrastructure expenses</li>
              <li>Scalability to adapt to business growth effortlessly</li>
              <li>
                Business continuity with reliable data backup and recovery
              </li>
              <li>Enhanced collaboration for teams across the globe</li>
              <li>Flexible work practices with remote access capabilities</li>
              <li>
                Automatic updates to keep your tools and systems up to date
              </li>
            </ul>
          </div>

          {/* Left Card */}
          <div className="bg-sky-200 max-w-xl rounded-2xl">
            <div className="m-10 p-10 bg-sky-400 rounded-2xl">
              <Lottie
                animationData={fourth}
                loop={true}
                style={{ width: 270, height: 270 }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;
