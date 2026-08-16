import { newsletterData } from "@dataSection/NewsletterData/NewsletterData";
import "@componentsSection/Newsletter/Newsletter.css";


export default function Newsletter() {
  const { title, placeholder, buttonText } = newsletterData;

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Newsletter signup");
    e.target.reset(); 
  };

  return (
    <section className="newsletter">
      <div className="newsletter__container">
        <h2 className="newsletter__title">{title}</h2>

        
        <form className="newsletter__form" onSubmit={handleSubmit}>
          <label htmlFor="newsletter-email" className="newsletter-only">
          </label>
          <input
            id="newsletter-email"
            type="email"
            placeholder={placeholder}
            className="newsletter__input"
            required
          />
          <button type="submit" className="newsletter__btn">
            {buttonText}
          </button>
        </form>
      </div>
    </section>
  );
}