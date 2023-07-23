import { PiMoonStarsBold, PiTranslateBold } from "react-icons/pi";
import { useTranslation } from "react-i18next";
import brazilFlag from "../../Assets/brazil-flag.svg";
import usaFlag from "../../Assets/usa-flag.svg";
import "./i18n";
import * as S from "./styles";

export default function Header() {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    return (
        <S.Header>
            <S.Logo>
                <PiMoonStarsBold />
                danifarias.
            </S.Logo>
   
            <S.Navbar>
                <S.Menu>
                    <li>
                        <a href="#a">{t("Sobre")}</a>
                    </li>
                    <li>
                        <a href="#b">{t("Contato")}</a>
                    </li>
                </S.Menu>


                <S.Dropdown>
                    <PiTranslateBold size={30}/>
                    <div className="dropdown-content">
                        <div className="dropdown-buttons-container">
                            <button onClick={() => changeLanguage("pt")}>
                                <img src={brazilFlag} alt="" />
                            </button>
                            <button onClick={() => changeLanguage("en")}>
                                <img src={usaFlag} alt="" />
                            </button>
                        </div>
                    </div>
                </S.Dropdown>
                
            </S.Navbar>
        </S.Header>
    );
};