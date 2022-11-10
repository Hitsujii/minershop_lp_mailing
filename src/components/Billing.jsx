import { apple, bill,payments_crypto, google } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={payments_crypto} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        <span className="text-gradient">W Minershop</span> wierzymy, że każdy powinien być w stanie zarobić
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Co oznacza bycie opłacalnym? Dla nas oznacza to zachowanie odpowiedniej równowagi między zakupem sprzętu, comiesięcznym hostingiem i monitorowaniem, a wszystko zaczyna się, gdy tylko złożysz zamówienie!
      </p>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <Button styles={`mt-10`} />
      </div>
    </div>
  </section>
);

export default Billing;
