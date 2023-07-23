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
                    <li>
                        <S.Link href="#about">{t("Sobre")}</S.Link>
                    </li>
                    <li>
                        <S.Link href="#experience">{t("Experiência")}</S.Link>
                    </li>
                    <li>
                        <S.Link href="#knowledge">{t("Conhecimento")}</S.Link>
                    </li>
                    <li>
                        <S.Link href="#projects">{t("Projetos")}</S.Link>
                    </li>
                    <li>
                        <S.Link href="#contact">{t("Contato")}</S.Link>
                    </li>
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