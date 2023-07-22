import { PiMoonStarsBold, PiTranslateBold } from "react-icons/pi";
import { useTranslation } from "react-i18next";
import brazilFlag from "../../Assets/brazil-flag.svg";
import usaFlag from "../../Assets/usa-flag.svg";
import "./i18n";
import "./styles.css";

export default function Header() {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    return (
        <header>
            <h1 className="logo">
                <PiMoonStarsBold />
                danifarias.
            </h1>
   
        
            <nav>
                <ul className="menu">
                    <li>
                        <a href="#a">{t("Sobre")}</a>
                    </li>
                    <li>
                        <a href="#b">{t("Contato")}</a>
                    </li>
                </ul>


                <div className="dropdown">
                    <PiTranslateBold size={30}/>
                    <div className="dropdown-content">
                        <button onClick={() => changeLanguage("pt")}>
                            <img src={brazilFlag} alt="" />
                        </button>
                        <button onClick={() => changeLanguage("en")}>
                            <img src={usaFlag} alt="" />
                        </button>
                    </div>
                </div>
                
            </nav>
        </header>
    );
};