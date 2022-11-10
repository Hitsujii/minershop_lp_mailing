import { card,kolokacja } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Kolokacje <br className="sm:block hidden" /> <span className="text-gradient">Katowice, Pszczyna</span>
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Kolokacja idealna dla osób z całego Śląska: zapraszamy osoby z Katowic, Tychów, Sosnowca, Chorzowa, Pszczyny, Dąbrowy Górniczej i okolicznych miast!
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={kolokacja} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
