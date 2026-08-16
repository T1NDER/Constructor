import { headerData } from "@data/HeaderData/HeaderData";
import "@components/Header/Header.css";


export default function Header() {
    const { logo, title, subtitle, scrollText, backgroundImage } = headerData;

    return (
        <header className="header">
            <div className="header__container">
                <div className="header__bg">
                    <img src={backgroundImage} alt="" aria-hidden="true" />
                </div>

                <div className="header__logo">
                    <a href="#">{logo}</a>
                </div>

                <div className="header__content">
                    <h1 className="header__title">{title}</h1>
                    <p className="header__subtitle">{subtitle}</p>
                </div>

                <a href="#" className="header__scroll">
                    <span>{scrollText}</span>
                </a>
            </div>
        </header>
    )
};

