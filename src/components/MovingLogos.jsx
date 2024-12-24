import img2 from "../assets/logo/aws.png";
import img3 from "../assets/logo/hp.png";
import img4 from "../assets/logo/nvidia.png";
import img5 from "../assets/logo/cisco.png";
import img6 from "../assets/logo/hewlett.png";
import img7 from "../assets/logo/ibm.png";
import img8 from "../assets/logo/microsoft.png";
import img9 from "../assets/logo/netapp.png";
import img10 from "../assets/logo/xerox.png";
import img11 from "../assets/logo/redhat.png";

const logos = [
  { src: img2, alt: "AWS" },
  { src: img3, alt: "Hp" },
  { src: img4, alt: "Nvidia" },
  { src: img5, alt: "Cisco" },
  { src: img6, alt: "Hewlett" },
  { src: img7, alt: "Ibm" },
  { src: img8, alt: "Microsoft" },
  { src: img9, alt: "NetApp" },
  { src: img10, alt: "Xerox" },
  { src: img11, alt: "Redhat" },
];

const MovingLogos = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="flex animate-marquee">
        <div className="flex space-x-28 px-4 py-8">
          {logos.concat(logos).map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={logo.alt}
              className="h-16 object-contain"
            />
          ))}
        </div>
      </div>
    </div>
  );
};



export default MovingLogos;
