import styles from "./style";
import {
  Navbar,
  Hero,
  Stats,
  Testimonials,
  Clients,
  Billing,
  Business,
  CallToAction,
  CardDeal,
} from "./components";

function App() {
  return (
    <div className="bg-primary w-full overflow-hidden">
      {/* wrapper for navbar */}
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          {/* navbar */}
          <Navbar />
        </div>
      </div>

      {/* hero section */}
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      {/* main section */}
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Billing />
          <Business />
          <Testimonials />
          <Clients />
          <CallToAction />
          <CardDeal />
        </div>
      </div>
    </div>
  );
}

export default App;
