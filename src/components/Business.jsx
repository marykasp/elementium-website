import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ index, icon, title, content }) => {
  return (
    <div
      className={`flex flex-row p-6 rounded-[20px] ${
        index !== features.length - 1 ? "mb-6" : "mb-0"
      } bg-slate-900 hover:bg-gradient-to-b hover:from-slate-800`}
    >
      <div
        className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimblue`}
      >
        <img
          src={icon}
          alt="feature icon"
          className="w-[50%] h-[50%] object-contain"
        />
      </div>
      {/* title and content */}
      <div className="flex-1 flex-col ml-3">
        <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
          {title}
        </h4>
        <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
          {content}
        </p>
      </div>
    </div>
  );
};

const Business = () => {
  return (
    <section id="features" className={`${layout.section}`}>
      <div className={`${layout.sectionInfo}`}>
        <h2 className={styles.heading2}>
          Unlock innovation with our design system's key features.
        </h2>
        <p className={`${styles.paragraph} max-w-[580px] mt-5`}>
          Our curated set of powerful features is engineered to elevate your
          design experience. From comprehensive design tokens to an extensible
          component library, accessible components, and seamless integration
          capabilities, each element is meticulously crafted to streamline your
          workflow and amplify your creative potential. Explore how our design
          system empowers innovation and transforms the way you build
        </p>
        <Button styles="mt-10">Get Started</Button>
      </div>
      {/* feature card list */}
      <div className={`flex-col ${layout.sectionImg}`}>
        {features.map((feature, idx) => (
          <FeatureCard key={feature.id} {...feature} index={idx} />
        ))}
      </div>
    </section>
  );
};

export default Business;
