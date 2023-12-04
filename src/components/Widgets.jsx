import { apple, widgets, google } from "../assets";
import styles, { layout } from "../style";

const Widgets = () => {
  return (
    <section id="product" className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img
          src={widgets}
          alt=""
          className="w-[100%] h-[100%] relative z-[5]"
        />
        <div className="absolute z-[3] top-0 w-[50%] h-[50%] white__gradient rounded-full -left-1/2" />
        <div className="absolute z-[0] bottom-0 w-[50%] h-[50%] pink__gradient rounded-full -left-1/2" />
      </div>
      {/* text */}
      <div className={`${layout.sectionInfo}`}>
        <h2 className={styles.heading2}>
          Easily transform your data into visual stories.
        </h2>
        <p className={`${styles.paragraph} max-w-[570px] mt-5`}>
          These widgets offer more than visual appeal; they provide a canvas for
          data storytelling. Dive into a world where charts convey intricate
          data trends with clarity, graphs translate complexities into
          digestible insights, and statistical displays present information in
          an engaging and informative manner.
        </p>
        <div className="flex flex-wrap sm:mt-10 mt-6">
          <img
            src={apple}
            alt=""
            className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer "
          />
          <img
            src={google}
            alt=""
            className="w-[128px] h-[42px] object-contain cursor-pointer "
          />
        </div>
      </div>
    </section>
  );
};

export default Widgets;
