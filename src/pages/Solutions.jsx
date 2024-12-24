import DataManagement from "../components/DataManagement";
import car from "../assets/car.mp4";
import Enterprise from "../components/Enterprise";
import Networks from "../components/Networks";
import Lottie from "lottie-react";
import first from "../assets/json/1.json";
import second from "../assets/json/2.json";
import third from "../assets/json/3.json";
import fourth from "../assets/json/4.json";
import tick from "../assets/tick.png";

const features = [
  "Real-time threat analysis and mitigation",
  "Comprehensive firewall and endpoint protection",
  "Data encryption and secure communication channels",
  "Regular vulnerability assessments",
];

const Solutions = () => {
  return (
    <div>
      
      <img
        className="rounded-xl mx-auto  w-[80rem] h-[30rem] object-cover opacity-90 shadow-lg"
        src={car}
        alt="Banner"
      />
      <section>
        <h2 className="flex justify-center text-4xl text-gray-700 font-sans font-semibold px-6 py-4">
          Infrastructure
        </h2>
        <div className="flex flex-wrap justify-center m-5 px-6 py-4 gap-10">
          {/* Left Card */}
          <div className="bg-blue-900 max-w-xl rounded-2xl">
            <div className="m-10 p-10 bg-indigo-300 rounded-2xl">
              <Lottie
                animationData={first}
                loop={true}
                style={{ width: 270, height: 270 }}
              />
            </div>
          </div>

          {/* Right Card */}
          <div className="max-w-xl p-2">
            <h3 className="text-3xl font-extrabold text-blue-800 mb-4">
              End User Computing
            </h3>
            <hr className="border-gray-300 mb-6 w-[34rem] " />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Card 1 */}
              <div className=" ">
                <h4 className="text-xl font-semibold text-indigo-700 mb-4">
                  PCs, Laptops, and Workstations
                </h4>
                <p>
                  Leverage automation and virtualization with our high-quality,
                  customized end-user computing solutions.
                </p>
              </div>

              {/* Card 2 */}
              <div>
                <h4 className="text-xl font-semibold text-indigo-700 mb-4">
                  Enterprise and Cloud Computing Products
                </h4>
                <p>
                  Cygnus offers cutting-edge enterprise and cloud computing
                  products that ensure seamless workspace collaboration and user
                  adoption.
                </p>
              </div>

              {/* Card 3 */}
              <div className=" ">
                <h4 className="text-xl font-semibold text-indigo-700 mb-4">
                  Comprehensive Solutions
                </h4>
                <p>
                  From hardware provisioning to remote desktop management, we
                  provide scalable, secure, and cost-effective solutions
                  tailored to your organizational needs.
                </p>
              </div>

              {/* Card 4 */}
              <div className="">
                <h4 className="text-xl font-semibold text-indigo-700 mb-4">
                  Workforce Empowerment
                </h4>
                <p>
                  Empower your workforce with the latest technology while
                  optimizing operational efficiency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Enterprise />
      <DataManagement />
      <Networks />

      <section className="h-[30rem]">
        <div className="flex flex-wrap justify-center my-16 px-6 py-4 gap-10">
          {/*Right Card */}
          <div className="max-w-xl p-2">
            <h3 className="text-3xl font-extrabold text-blue-800 mb-4">
              Security
            </h3>
            <p className=" mb-4">
              Protect and defend your internet-connected devices and services
              from malicious attacks with our highly robust cybersecurity
              solutions.
            </p>
            <p className="">
              Our advanced solutions safeguard your digital infrastructure
              through real-time monitoring, threat detection, and proactive
              defense strategies. Whether youre securing sensitive data or
              protecting against evolving threats, we ensure end-to-end
              protection tailored to your organizations needs.
            </p>
            <hr className="border-gray-300 my-8 w-[34rem] " />
            <div className="grid grid-cols-2 gap-4 mt-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-2">
                  <img src={tick} className="h-8" alt="" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
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
