import styles from "../style";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`md:flex-row flex-col mb-8 w-full ${styles.flexStart}`}>
        <div className="flex-1 flex flex-col justify-start mr-10">
          <h1 className="text-2xl font-poppins font-bold text-secondary">
            Element<span className="text-white">ium</span>
            <span className="text-secondary text-5xl">.</span>
          </h1>
          <p className={`mt-4 max-w-[310px] ${styles.paragraph}`}>
            A new way to design.
          </p>
        </div>
        <div className="flex-[1.5] w-full flex justify-between flex-wrap md:mt-0 mt-10">
          {footerLinks.map((footerLink, idx) => (
            <div key={idx} className="flex-col ss:my-0 my-4 min-w-[150px]">
              <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
                {footerLink.title}
              </h4>
              <ul className="list-none mt-4">
                {footerLink.links.map((link, idx) => (
                  <li
                    key={link.name}
                    className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                      idx !== footerLink.links.length - 1 ? "mb-4" : "mb-0"
                    }`}
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
