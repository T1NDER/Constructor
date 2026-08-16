import { footerData } from "@data/FooterData/FooterData";
import "@components/Footer/Footer.css";


const { subtitle, logo, description, columns, socialIcons } = footerData;


export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        
        <div className="footer__main">
          <div className="footer__brand">
            {subtitle && <span className="footer__subtitle">{subtitle}</span>}
            <a href="/" className="footer__logo">
              {logo}
            </a>
            <p className="footer__description">{description}</p>
          </div>

          {columns.map((column) => (
            <FooterColumn key={column.title} column={column} />
          ))}
        </div>
      </div>
    </footer>
  );
}


function FooterColumn({ column }) {
  return (
    <div className="footer__column">
      <h4 className="footer__column-title">{column.title}</h4>

      {column.links && (
        <ul className="footer__links">
          {column.links.map((link) => (
            <li key={link.label}>
              <a href={link.url}>{link.label}</a>
            </li>
          ))}
        </ul>
      )}

      {column.address && (
        <address className="footer__contact">
          <p footer__address>{column.address}</p>
          <p>
            <a href={`tel:${column.phone.replace(/\s/g, '')}`}>
              {column.phone}
            </a>
          </p>
          <p>
            <a href={`mailto:${column.email}`}>
              {column.email}
            </a>
          </p>

          <SocialLinks icons={socialIcons} />
        </address>
      )}
    </div>
  );
}


function SocialLinks({ icons }) {
  return (
    <div className="footer__socials">
      {icons.map((icon, index) => (
        <a 
          key={index} 
          href="#" 
          className="footer__social-link"
          aria-label="Social media link"
        >
          <img src={icon} alt="" aria-hidden="true" />
        </a>
      ))}
    </div>
  );
}