import banner from "../assets/2_2_2.jpg";
const Company = () => {
  return (
    <div>
      <div className="relative my-10">
        <img
          className="rounded-xl mx-auto max-w-6xl w-[80rem] h-[30rem] object-cover shadow-lg"
          src={banner}
          alt="Banner"
        />
      </div>
    </div>
  );
};

export default Company;
