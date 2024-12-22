import banner from "../assets/team.jpg";
import MovingLogos from "../components/MovingLogos";
import collage from "../assets/collage.png";
import BoxContainer from "../components/BoxContainer";
 import GlobeComponent from "../components/GlobeComponent";
import { values } from "../assets/assets";

const Company = () => {
  return (
    <div className="relative mt-10 py-5">
      <img
        className="rounded-xl mx-auto max-w-6xl w-[80rem] h-[30rem] object-cover opacity-90 shadow-lg"
        src={banner}
        alt="Banner"
      />
      <h1 className="flex mx-auto max-w-6xl justify-start mt-10 mb-20 text-6xl font-bold ">
        Hey! We{"'"}re Cygnus. 😊
      </h1>

      <section className="flex flex-wrap justify-center my-5 px-6 py-4 gap-10">
        <div className="flex flex-wrap justify-center m-5 px-2 py-4 gap-10">
          {/* Left Card */}
          <div className="max-w-xl">
            <img src={collage} alt="" />
          </div>

          {/* Right Card */}
          <div className="max-w-xl p-2">
            <h3 className="text-4xl font-extrabold mb-8 tracking-wider">
              Our Story
            </h3>

            <p className="mb-10 tracking-wider leading-relaxed">
              Cygnus came into being in 2000 with a mission to provide
              mission-critical IT solutions. We aimed to combine advanced
              technology with practical solutions to meet market demands and
              exceed consumer expectations. Our journey began with a vision of
              innovation and reliability in the IT sector.
            </p>

            <p className="mb-10 tracking-wider leading-relaxed">
              Our extensive experience in the industry has played a key role in
              establishing Cygnus as a trusted partner. With an unwavering
              commitment to excellence, weve built a reputation for
              dependability and delivering quality. Over the years, weve
              expanded our reach, partnering with several leading Original
              Equipment Manufacturers (OEMs) to offer cutting-edge IT solutions.
            </p>

            <p className="mb-10 tracking-wider leading-relaxed">
              Cygnus prides itself on its highly efficient team, composed of
              certified professionals with expertise in various domains. From
              technology to presales and sales consulting, our team ensures that
              every solution we provide is of the highest standard. Their
              dedication to excellence and continuous learning allows us to stay
              at the forefront of the IT industry.
            </p>

            <p className="mb-4 tracking-wider leading-relaxed">
              As an IT solutions company, Cygnus is dedicated to using the power
              of technology to help build a better future. We not only focus on
              improving the business outcomes of our clients but also aim to
              make a positive impact on the environment, communities, and
              colleagues. Our commitment to sustainable technology and ethical
              practices guides every project we undertake.
            </p>
          </div>
        </div>
      </section>

      <section className="">
        <div className="mx-auto max-w-6xl">
          <h3 className=" flex justify-center text-4xl font-semibold mb-12">
            We are an Open Company
          </h3>
          <p className="flex mx-auto max-w-4xl text-center mb-24">
            Our high client retention reflects our reliability in the industry.
            With our mantra of being ‘consultant first’ , we possess a unique
            combination of business acumen and technical skills. We ensure that
            you grab new opportunities and move miles ahead of your competitors
            with our adaptive, agile, effective, and efficient solutions and
            service delivery.
          </p>

          <BoxContainer />
        </div>
      </section>

      <section className="h-[20rem]">
        <h1 className="flex justify-center text-4xl font-semibold mb-12">
          Some Memories!
        </h1>
        <MovingLogos />
      </section>

      <section>
        <h2 className="flex justify-center font-semibold text-4xl mb-6 px-6 py-4">
          Our Values
        </h2>
        <p className="flex mx-auto max-w-4xl text-center mb-8">
          Cygnus is an inclusive workplace that welcomes and nurtures talented,
          creative, and hard-working people who like to think independently and
          take ownership of projects. We ensure that our efficient team helps
          our clients exploit opportunities and gain a competitive advantage
          amidst the changing business and technology landscape.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mx-auto max-w-6xl p-4">
          {values.map((card, index) => (
            <div key={index} className="max-w-xl p-6">
              <div className="flex items-center mb-4">
                <img
                  src={card.logo}
                  alt={`${card.heading} logo`}
                  className="h-10 w-10 mr-3 rounded-sm"
                />
                <h3 className="text-lg font-semibold">{card.heading}</h3>
              </div>
              <h4 className="mb-4 text-sm">{card.subheading}</h4>
              <p className="text-gray-600">{card.content}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="p-10 mx-auto flex flex-col items-center justify-center">
        <h2 className="font-serif text-4xl mb-6 px-6 py-4 text-center">
          Get to know our team
        </h2>
        <p className="max-w-2xl text-center mb-8">
          Meet our dynamic leadership team that guides our team to work in
          synergy to deliver the best customer experiences and create a loyal
          customer base.
        </p>

        <div className="h-[40rem] w-[60rem] bg-blue-200 mb-6 mx-auto"></div>

        <h2 className="font-serif text-4xl mb-4 px-6 py-4 text-center">
          Want to join us?
        </h2>
        <p className="text-center mb-8">Want to come along for a ride?</p>
        <button className="text-white bg-gradient-to-r from-blue-500 via-blue-700 to-blue-900 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-md px-5 py-2.5 text-center">
          Contact
        </button>
      </section>


      <GlobeComponent/>
    </div>
  );
};

export default Company;
