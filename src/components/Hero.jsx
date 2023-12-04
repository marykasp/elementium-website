import styles from "../style";
import { discount, robot, cover } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      {/* left side */}
      <div className={`${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-gradient-to-r from-slate-800 rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span> Discount For{" "}
            <span className="text-white">December</span>
          </p>
        </div>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
            Uniting Design
            <br className="sm:block hidden" />{" "}
            <span className="text-secondary">Elements</span>
          </h1>
          {/* <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div> */}
        </div>
        <h2 className="font-semibold font-poppins ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full">
          Seamlessly.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Elementium is more than just a design system – it's a gateway to
          seamless creativity. These meticulously crafted components and
          comprehensive documentation ensure consistency, efficiency, and
          unparalleled visual brilliance across every project.
        </p>
      </div>
      {/* right side with cover image */}
      <div className={`flex-1 ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img
          src={cover}
          alt="elementium cover"
          className="w-[100%] h-[100%] relative z-[5]"
        />
        {/* gradient behind image */}
        {/* <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient"></div>
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient"></div>
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient"></div> */}
      </div>
      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
