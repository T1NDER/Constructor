import { descriptionData } from "@dataSection/DescriptionSectionData/DescriptionData";
import "@componentsSection/DescriptionSection/DescriptionSection.css";


export default function DescriptionSection() {
    const { sectionTitle, description, buttonText, services } = descriptionData;

    return (
        <section className="description-section">
            <div className="description-section__container">
                <div className="description-section__top-part">
                    <div className="description-section__header">
                        <h2 className="description-section__title">{sectionTitle}</h2>
                        <div className="description-section__line"></div>
                    </div>
                    
                    <div className="description-section__header-right">
                        {description && <p className="description-section__text">{description}</p>}
                        <button className="description-section__btn">{buttonText}</button>
                    </div>
                </div>

                <div className="description-section__bottom-part">
                      {services.map((card, idx) => (
                        <DescriptionCard key ={idx} {...card}/>
                    ))}
                </div>
            </div>
        </section>
    )
} 


function DescriptionCard({ icon, title, description }) {
    return (
        <>
            <div className="description-section__card">
                <img src={icon} alt="" />

                <div className="card__content">
                    <h3 className="card__title">{title}</h3>
                    {description && <p className="card__description">{description}</p>}
                </div>
            </div>
        </>
    )
};