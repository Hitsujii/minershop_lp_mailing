import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => (
  <section id="kolokacja" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className={styles.heading2}>
        Katowice <br className="sm:block hidden" />
      </h2>
    </div>
    <div className=" w-full sm:flex hidden">
      <div className={`${styles.heading2}w-full sm:block hidden justify-center text-left p-6 border border_font rounded m-10`}>
        Kolokacja <span className="text-gradient"> nr.1</span>
        <ul className="list-none sm:block hidden justify-end items-center flex-1">
            <li className="font-poppins font-normal cursor-pointer text-[14px] leading-10 text-left">
              <p><span className="text-gradient font-black text-base">1.</span> Minimum <span className="text-gradient">5 koparek kryptowalut GPU</span> lub 10 koparek ASIC</p>
              <p><span className="text-gradient font-black text-base">2.</span> Serwerownia klimatyzowana,<span className="text-gradient"> filtr antypyłowy </span></p>
              <p><span className="text-gradient font-black text-base">3.</span> Monitoring, zdalny dostęp do zarządzania gniazdem</p>
              <p><span className="text-gradient font-black text-base">4.</span> Instalacja <span className="text-gradient">przeciwpożarowa</span></p>
              <p><span className="text-gradient font-black text-base">5.</span> Własny <span className="text-gradient">transformator</span></p>
              <p><span className="text-gradient font-black text-base">6.</span> Bezpieczne <span className="text-gradient">środowisko sieciowe</span></p>
              <p><span className="text-gradient font-black text-base">7.</span> Koszt opłaty instalacyjnej za urządzenie tylko <span className="text-gradient">300zł</span></p>
              <p><span className="text-gradient font-black text-base">8.</span> <span className="text-gradient">Autorski system monitorujący:</span> uptime, wydajność pracy, aktualny hashrate urządzeń, temperatura</p>
              <span className="text-slate-500" >Lokalizacja:</span><span className="text-gradient"> Śląsk</span><br></br>
              <span className="text-slate-500">Szczegóły:</span><span className="text-gradient"> Piętro hali produkcyjnej</span><br></br>
              <span className="text-slate-500">Dodatkowo:</span><span className="text-gradient"> Ochrona budynku, budynek ubezpieczony</span>
            </li>
        </ul>
      </div>
      <div className={`${styles.heading2}w-full sm:block hidden justify-center text-left p-6 border border_font rounded m-10`}>
        Kolokacja <span className="text-gradient"> nr.2</span>
        <ul className="list-none sm:flex hidden justify-end items-center flex-1">
            <li className="font-poppins font-normal cursor-pointer text-[14px] leading-10 text-left">
              <p><span className="text-gradient font-black text-base">1.</span> Minimum <span className="text-gradient">5 koparek kryptowalut GPU</span> lub 10 koparek ASIC</p>
              <p><span className="text-gradient font-black text-base">2.</span> Serwerownia klimatyzowana,<span className="text-gradient"> filtr antypyłowy </span></p>
              <p><span className="text-gradient font-black text-base">3.</span> Monitoring, zdalny dostęp do zarządzania gniazdem</p>
              <p><span className="text-gradient font-black text-base">4.</span> Instalacja <span className="text-gradient">przeciwpożarowa</span></p>
              <p><span className="text-gradient font-black text-base">5.</span> Własny <span className="text-gradient">transformator</span></p>
              <p><span className="text-gradient font-black text-base">6.</span> Bezpieczne <span className="text-gradient">środowisko sieciowe</span></p>
              <p><span className="text-gradient font-black text-base">7.</span> Koszt opłaty instalacyjnej za urządzenie tylko <span className="text-gradient">300zł</span></p>
              <p><span className="text-gradient font-black text-base">8.</span> <span className="text-gradient">Autorski system monitorujący:</span> uptime, wydajność pracy, aktualny hashrate urządzeń, temperatura</p>
              <span className="text-slate-500" >Lokalizacja:</span><span className="text-gradient"> Śląsk</span><br></br>
              <span className="text-slate-500">Szczegóły:</span><span className="text-gradient"> Piętro hali produkcyjnej</span><br></br>
              <span className="text-slate-500">Dodatkowo:</span><span className="text-gradient"> Ochrona budynku, budynek ubezpieczony</span>
            </li>
        </ul>
      </div>
    </div>
    <div className=" w-full sm:hidden block">
      <div className={`${styles.heading2}w-full sm:hidden block justify-center text-left p-6 border border_font rounded mb-10`}>
        Kolokacja <span className="text-gradient"> nr.1</span>
        <ul className="list-none sm:hidden flex justify-end items-center flex-1">
            <li className="font-poppins font-normal cursor-pointer text-[14px] leading-10 text-left">
              <p><span className="text-gradient font-black text-base">1.</span> Minimum <span className="text-gradient">5 koparek kryptowalut GPU</span> lub 10 koparek ASIC</p>
              <p><span className="text-gradient font-black text-base">2.</span> Serwerownia klimatyzowana,<span className="text-gradient"> filtr antypyłowy </span></p>
              <p><span className="text-gradient font-black text-base">3.</span> Monitoring, zdalny dostęp do zarządzania gniazdem</p>
              <p><span className="text-gradient font-black text-base">4.</span> Instalacja <span className="text-gradient">przeciwpożarowa</span></p>
              <p><span className="text-gradient font-black text-base">5.</span> Własny <span className="text-gradient">transformator</span></p>
              <p><span className="text-gradient font-black text-base">6.</span> Bezpieczne <span className="text-gradient">środowisko sieciowe</span></p>
              <p><span className="text-gradient font-black text-base">7.</span> Koszt opłaty instalacyjnej za urządzenie tylko <span className="text-gradient">300zł</span></p>
              <p><span className="text-gradient font-black text-base">8.</span> <span className="text-gradient">Autorski system monitorujący:</span> uptime, wydajność pracy, aktualny hashrate urządzeń, temperatura</p>
              <span className="text-slate-500" >Lokalizacja:</span><span className="text-gradient"> Śląsk</span><br></br>
              <span className="text-slate-500">Szczegóły:</span><span className="text-gradient"> Piętro hali produkcyjnej</span><br></br>
              <span className="text-slate-500">Dodatkowo:</span><span className="text-gradient"> Ochrona budynku, budynek ubezpieczony</span>
            </li>
        </ul>
      </div>
      <div className={`${styles.heading2}w-full sm:hidden block justify-center text-left p-6 border border_font rounded m-0`}>
        Kolokacja <span className="text-gradient"> nr.2</span>
        <ul className="list-none sm:hidden flex justify-end items-center flex-1">
            <li className="font-poppins font-normal cursor-pointer text-[14px] leading-10 text-left">
              <p><span className="text-gradient font-black text-base">1.</span> Minimum <span className="text-gradient">5 koparek kryptowalut GPU</span> lub 10 koparek ASIC</p>
              <p><span className="text-gradient font-black text-base">2.</span> Serwerownia klimatyzowana,<span className="text-gradient"> filtr antypyłowy </span></p>
              <p><span className="text-gradient font-black text-base">3.</span> Monitoring, zdalny dostęp do zarządzania gniazdem</p>
              <p><span className="text-gradient font-black text-base">4.</span> Instalacja <span className="text-gradient">przeciwpożarowa</span></p>
              <p><span className="text-gradient font-black text-base">5.</span> Własny <span className="text-gradient">transformator</span></p>
              <p><span className="text-gradient font-black text-base">6.</span> Bezpieczne <span className="text-gradient">środowisko sieciowe</span></p>
              <p><span className="text-gradient font-black text-base">7.</span> Koszt opłaty instalacyjnej za urządzenie tylko <span className="text-gradient">300zł</span></p>
              <p><span className="text-gradient font-black text-base">8.</span> <span className="text-gradient">Autorski system monitorujący:</span> uptime, wydajność pracy, aktualny hashrate urządzeń, temperatura</p>
              <span className="text-slate-500" >Lokalizacja:</span><span className="text-gradient"> Śląsk</span><br></br>
              <span className="text-slate-500">Szczegóły:</span><span className="text-gradient"> Piętro hali produkcyjnej</span><br></br>
              <span className="text-slate-500">Dodatkowo:</span><span className="text-gradient"> Ochrona budynku, budynek ubezpieczony</span>
            </li>
        </ul>
      </div>
    </div>
    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className={styles.heading2}>
        Pszczyna <br className="sm:block hidden" />
      </h2>
    </div>
    <div className=" w-full sm:flex hidden">
      <div className={`${styles.heading2}w-full sm:block hidden justify-center text-left p-6 border border_font rounded m-10`}>
        Kolokacja <span className="text-gradient"> nr.1</span>
        <ul className="list-none sm:block hidden justify-end items-center">
            <li className="font-poppins font-normal cursor-pointer text-[14px] leading-10 text-left">
              <p><span className="text-gradient font-black text-base">1.</span> Minimum <span className="text-gradient">5 koparek kryptowalut GPU</span> lub 10 koparek ASIC</p>
              <p><span className="text-gradient font-black text-base">2.</span> Serwerownia klimatyzowana,<span className="text-gradient"> filtr antypyłowy </span></p>
              <p><span className="text-gradient font-black text-base">3.</span> Monitoring, zdalny dostęp do zarządzania gniazdem</p>
              <p><span className="text-gradient font-black text-base">4.</span> Instalacja <span className="text-gradient">przeciwpożarowa</span></p>
              <p><span className="text-gradient font-black text-base">5.</span> Własny <span className="text-gradient">transformator</span></p>
              <p><span className="text-gradient font-black text-base">6.</span> Bezpieczne <span className="text-gradient">środowisko sieciowe</span></p>
              <p><span className="text-gradient font-black text-base">7.</span> Koszt opłaty instalacyjnej za urządzenie tylko <span className="text-gradient">300zł</span></p>
              <p><span className="text-gradient font-black text-base">8.</span> <span className="text-gradient">Autorski system monitorujący:</span> uptime, wydajność pracy, aktualny hashrate urządzeń, temperatura</p>
              <span className="text-slate-500" >Lokalizacja:</span><span className="text-gradient"> Śląsk</span><br></br>
              <span className="text-slate-500">Szczegóły:</span><span className="text-gradient"> Piętro hali produkcyjnej</span><br></br>
              <span className="text-slate-500">Dodatkowo:</span><span className="text-gradient"> Ochrona budynku, budynek ubezpieczony</span>
            </li>
        </ul>
      </div>
      <div className={`${styles.heading2}w-full sm:invisible sm:block hidden justify-center text-left p-6 border border_font rounded m-10`}>
        Kolokacja <span className="text-gradient"> nr.2</span>
        <ul className="list-none sm:flex hidden justify-end items-center">
        <li className="font-poppins font-normal cursor-pointer text-[14px] leading-10 text-left">
              <p><span className="text-gradient font-black text-base">1.</span> Minimum <span className="text-gradient">5 koparek kryptowalut GPU</span> lub 10 koparek ASIC</p>
              <p><span className="text-gradient font-black text-base">2.</span> Serwerownia klimatyzowana,<span className="text-gradient"> filtr antypyłowy </span></p>
              <p><span className="text-gradient font-black text-base">3.</span> Monitoring, zdalny dostęp do zarządzania gniazdem</p>
              <p><span className="text-gradient font-black text-base">4.</span> Instalacja <span className="text-gradient">przeciwpożarowa</span></p>
              <p><span className="text-gradient font-black text-base">5.</span> Własny <span className="text-gradient">transformator</span></p>
              <p><span className="text-gradient font-black text-base">6.</span> Bezpieczne <span className="text-gradient">środowisko sieciowe</span></p>
              <p><span className="text-gradient font-black text-base">7.</span> Koszt opłaty instalacyjnej za urządzenie tylko <span className="text-gradient">300zł</span></p>
              <p><span className="text-gradient font-black text-base">8.</span> <span className="text-gradient">Autorski system monitorujący:</span> uptime, wydajność pracy, aktualny hashrate urządzeń, temperatura</p>
              <span className="text-slate-500" >Lokalizacja:</span><span className="text-gradient"> Śląsk</span><br></br>
              <span className="text-slate-500">Szczegóły:</span><span className="text-gradient"> Piętro hali produkcyjnej</span><br></br>
              <span className="text-slate-500">Dodatkowo:</span><span className="text-gradient"> Ochrona budynku, budynek ubezpieczony</span>
            </li>
        </ul>
      </div>
    </div>
    <div className=" w-full sm:hidden block">
      <div className={`${styles.heading2}w-full sm:hidden hidden justify-center text-left p-6 border border_font rounded mb-10`}>
        Kolokacja <span className="text-gradient"> nr.1</span>
        <ul className="list-none sm:hidden flex justify-end items-center flex-1">
            <li className="font-poppins font-normal cursor-pointer text-[14px] leading-10 text-left">
              <p><span className="text-gradient font-black text-base">1.</span> Minimum <span className="text-gradient">5 koparek kryptowalut GPU</span> lub 10 koparek ASIC</p>
              <p><span className="text-gradient font-black text-base">2.</span> Serwerownia klimatyzowana,<span className="text-gradient"> filtr antypyłowy </span></p>
              <p><span className="text-gradient font-black text-base">3.</span> Monitoring, zdalny dostęp do zarządzania gniazdem</p>
              <p><span className="text-gradient font-black text-base">4.</span> Instalacja <span className="text-gradient">przeciwpożarowa</span></p>
              <p><span className="text-gradient font-black text-base">5.</span> Własny <span className="text-gradient">transformator</span></p>
              <p><span className="text-gradient font-black text-base">6.</span> Bezpieczne <span className="text-gradient">środowisko sieciowe</span></p>
              <p><span className="text-gradient font-black text-base">7.</span> Koszt opłaty instalacyjnej za urządzenie tylko <span className="text-gradient">300zł</span></p>
              <p><span className="text-gradient font-black text-base">8.</span> <span className="text-gradient">Autorski system monitorujący:</span> uptime, wydajność pracy, aktualny hashrate urządzeń, temperatura</p>
              <span className="text-slate-500" >Lokalizacja:</span><span className="text-gradient"> Śląsk</span><br></br>
              <span className="text-slate-500">Szczegóły:</span><span className="text-gradient"> Piętro hali produkcyjnej</span><br></br>
              <span className="text-slate-500">Dodatkowo:</span><span className="text-gradient"> Ochrona budynku, budynek ubezpieczony</span>
            </li>
        </ul>
      </div>
      <div className={`${styles.heading2}w-full sm:hidden block justify-center text-left p-6 border border_font rounded m-0`}>
        Kolokacja <span className="text-gradient"> nr.1</span>
        <ul className="list-none sm:hidden flex justify-end items-center flex-1">
            <li className="font-poppins font-normal cursor-pointer text-[14px] leading-10 text-left">
              <p><span className="text-gradient font-black text-base">1.</span> Minimum <span className="text-gradient">5 koparek kryptowalut GPU</span> lub 10 koparek ASIC</p>
              <p><span className="text-gradient font-black text-base">2.</span> Serwerownia klimatyzowana,<span className="text-gradient"> filtr antypyłowy </span></p>
              <p><span className="text-gradient font-black text-base">3.</span> Monitoring, zdalny dostęp do zarządzania gniazdem</p>
              <p><span className="text-gradient font-black text-base">4.</span> Instalacja <span className="text-gradient">przeciwpożarowa</span></p>
              <p><span className="text-gradient font-black text-base">5.</span> Własny <span className="text-gradient">transformator</span></p>
              <p><span className="text-gradient font-black text-base">6.</span> Bezpieczne <span className="text-gradient">środowisko sieciowe</span></p>
              <p><span className="text-gradient font-black text-base">7.</span> Koszt opłaty instalacyjnej za urządzenie tylko <span className="text-gradient">300zł</span></p>
              <p><span className="text-gradient font-black text-base">8.</span> <span className="text-gradient">Autorski system monitorujący:</span> uptime, wydajność pracy, aktualny hashrate urządzeń, temperatura</p>
              <span className="text-slate-500" >Lokalizacja:</span><span className="text-gradient"> Śląsk</span><br></br>
              <span className="text-slate-500">Szczegóły:</span><span className="text-gradient"> Piętro hali produkcyjnej</span><br></br>
              <span className="text-slate-500">Dodatkowo:</span><span className="text-gradient"> Ochrona budynku, budynek ubezpieczony</span>
            </li>
        </ul>
      </div>
    </div>
    
  </section>
);

export default Testimonials;
