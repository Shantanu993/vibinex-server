import Image from "next/image";
import { Principles } from "../../../utils/about";

const OurPrinciples = () => {
  return (
    <div className="flex flex-col items-center p-10 min-h-screen">
      <div>
        <h1 className="font-medium text-5xl tracking-normal font-lato">
          Our <span className="text-[#6B4CFF]">Core Principles</span>
        </h1>
      </div>
      <div className="w-5xl flex flex-wrap justify-center gap-14 items-center pt-0  md:pt-28">
        {Principles.map((item) => (
          <div
            key={item.title}
            className="flex flex-col justify-between items-center h-[500px] w-96 p-5"
          >
            <div className="glow-effect h-72 w-72 md:h-96 md:w-96">
              <Image src={item.img} alt={item.title} fill={true} />
            </div>
            <div className="flex flex-col gap-4 justify-center items-center">
              <div className="font-semibold text-3xl text-[#1EEBBA] font-lato glow">
                {item.title}
              </div>
              <div className="text-xl text-justify font-lato">{item.body}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurPrinciples;
