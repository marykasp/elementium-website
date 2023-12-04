import FeedbackCard from "./FeedbackCard";
import styles from "../style";
import { feedback } from "../constants";

const Testimonials = () => {
  return (
    <section
      id="clients"
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
    >
      {/* title and context */}
      <div className="w-full flex justify-between items-center md:flex-row flex-col md:mb-16 mb-6 relative z-[1]">
        <h2 className={styles.heading2}>What people are saying</h2>
        <div className="w-full md:mt-0 mt-6">
          <p className={`${styles.paragraph} text-left max-w-[450px]`}>
            Discover what others are saying about Elementium's transformative
            impact
          </p>
        </div>
      </div>
      <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
        {feedback.map((feedback) => (
          <FeedbackCard key={feedback.id} {...feedback} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
