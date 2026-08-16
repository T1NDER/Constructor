import { navbarData } from "@data/Sections/NavbarData/NavbarData";
import "@componentsSection/Navbar/Navbar.css";


export default function Navbar() {
    const { logo, logoLink, links } = navbarData;

    return (
        <nav className="navbar">
            <div className="navbar__container">
                <a href={logoLink} className="navbar__logo">{logo}</a>

                <ul className="navbar__list">
                    {links.map((link, idx) => (
                        <li key={idx} className="navbar__item">
                            <a href={link.href} className="navbar__link">
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}