const boxData = [
  {
    bgColor: "bg-yellow-200",
    heading: "$1.67M",
    subheading: "This is subheading",
    content: "this is p tag",
  },
  {
    bgColor: "bg-teal-200",
    heading: "181,297",
    subheading: "This is subheading",
    content: "this is p tag",
  },
  {
    bgColor: "bg-purple-200",
    heading: "$20.09M",
    subheading: "This is subheading",
    content: "this is p tag",
  },
  {
    bgColor: "bg-orange-200",
    heading: "$27.85",
    subheading: "This is subheading",
    content: "this is p tag",
  },
];

const BoxContainer = () => {
  return (
    <div className="mx-auto max-w-5xl flex justify-evenly mb-24">
      {boxData.map((box, index) => (
        <div key={index} className={`${box.bgColor} h-40 w-52 rounded-2xl p-4`}>
          <h2 className="font-medium text-3xl mb-6">{box.heading}</h2>
          <h3 className="text-xl ">{box.subheading}</h3>
          <p className="">{box.content}</p>
        </div>
      ))}
    </div>
  );
};

export default BoxContainer;
