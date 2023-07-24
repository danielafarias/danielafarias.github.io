import { useEffect, useState } from "react";
import { PiMoonStarsBold, PiTranslateBold } from "react-icons/pi";

import { useTranslation } from "react-i18next";
import "./i18n";

import * as S from "./styles";

import brazilFlag from "../../Assets/brazil-flag.svg";
import usaFlag from "../../Assets/usa-flag.svg";

export default function Header() {
    const { t, i18n } = useTranslation();

    const [actualLanguage, setActualLanguage] = useState<"pt" | "en">("pt");
    const [hash, setHash] = useState("");

    useEffect(() => {
        const language = i18n.language;

        if (language === "pt" || language === "en") {
            setActualLanguage(language);
        };
    }, [i18n.language]);

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    return (
        <S.Header>
            <S.Link href="/">
                <S.Logo>
                    <PiMoonStarsBold />
                    danifarias.
                </S.Logo>
            </S.Link>
   
            <S.Navbar>
                <S.Menu>
                    <S.MenuOption $active={hash === "#about"}>
                        <S.Link href="#about" onClick={() => setHash("#about")}>{t("Sobre")}</S.Link>
                    </S.MenuOption>
                    <S.MenuOption $active={hash === "#experience"}>
                        <S.Link href="#experience" onClick={() => setHash("#experience")}>{t("Experiência")}</S.Link>
                    </S.MenuOption>
                    <S.MenuOption $active={hash === "#knowledge"}>
                        <S.Link href="#knowledge" onClick={() => setHash("#knowledge")}>{t("Conhecimento")}</S.Link>
                    </S.MenuOption>
                    <S.MenuOption $active={hash === "#projects"}>
                        <S.Link href="#projects" onClick={() => setHash("#projects")}>{t("Projetos")}</S.Link>
                    </S.MenuOption>
                    <S.MenuOption $active={hash === "#contact"}>
                        <S.Link href="#contact" onClick={() => setHash("#contact")}>{t("Contato")}</S.Link>
                    </S.MenuOption>
                </S.Menu>

                <S.Dropdown $actualLanguage={actualLanguage}>
                    <PiTranslateBold size={30}/>
                    <div className="dropdown-content">
                        <div className="dropdown-buttons-container">
                            <button onClick={() => changeLanguage("pt")}>
                                <img className="pt" src={brazilFlag} alt="" />
                            </button>
                            <button onClick={() => changeLanguage("en")}>
                                <img className="en" src={usaFlag} alt="" />
                            </button>
                        </div>
                    </div>
                </S.Dropdown>
            </S.Navbar>
        </S.Header>
    );
};