import { cards } from "../assets";
import Button from "./Button";
import styles, { layout } from "../style";

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Elevate your design with versatile modularity.
        </h2>
        <p className={`${styles.paragraph} max-w-[570px] mt-5`}>
          These modular cards offer a flexible canvas to showcase content
          elegantly, whether it's presenting snippets of information, featured
          items, or interactive modules. Seamlessly adaptable and visually
          engaging, our cards empower designers to create dynamic layouts while
          maintaining consistency across various interfaces.
        </p>
        <Button styles="mt-10">View Designs</Button>
      </div>
      <div className={layout.sectionImg}>
        <img src={cards} alt="" className="w-[100%] h-[100%]" />
      </div>
    </section>
  );
};

export default CardDeal;
