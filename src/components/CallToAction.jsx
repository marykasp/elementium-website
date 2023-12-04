import styles from "../style";
import Button from "./Button";

const CallToAction = () => {
  return (
    <section
      className={`${styles.marginY} ${styles.padding} ${styles.flexCenter} sm:flex-row flex-col bg-slate-900/80 rounded-sm box-shadow`}
    >
      <div className="flex-1 flex-col">
        <h2 className={styles.heading3}>
          Ready to Elevate Your Design Experience?
        </h2>
        <p className={`max-w-[570px] mt-2 ${styles.paragraph}`}>
          Elevate your projects, streamline your process, and unleash your
          creative potential. Get started today!
        </p>
      </div>
      <div className={`${styles.flexCenter} sm:ml-10 ml-0`}>
        <Button>Try Now!</Button>
      </div>
    </section>
  );
};

export default CallToAction;
