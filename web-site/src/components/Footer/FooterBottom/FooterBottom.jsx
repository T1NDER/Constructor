import { footerData } from "@data/FooterData/FooterData";
import "@components/Footer/FooterBottom/FooterBottom.css";


const { bottom } = footerData;


export default function FooterBottom() {
    return (
        <div className="footer__bottom">
            <div className="footer__container">
                <p className="footer__copyright">{bottom.copyright}</p>
            </div>
        </div>
    );
}