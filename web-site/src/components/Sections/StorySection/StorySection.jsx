import { storySectionData } from "@data/Sections/StorySectionData/StorySectionData";
import "@componentsSection/StorySection/StorySection.css";


const { sectionTitle, heading, description, cards } = storySectionData;


export default function StorySection () {
    return (
        <section className="story-section">
            <div className="story-section__container">
                <h2 className="story-section__title">{sectionTitle}</h2>
                <div className="story-section__line"></div>

                <div className="story-section__content">
                    <div className="story-section__left-part">
                        <h3 className="story-section__text">{heading}</h3>
                        {description && <p className="story-section__description">{description}</p>}
                    </div>

                    <div className="story-section__right-part">
                        {cards.map((card, idx) => (
                            <StoryCard key={idx} {...card} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}


function StoryCard({ title, image, description }) {
    return (
        <>
            <div className="storyCard">
                <div className="storyCard__img">
                    <img src={image} alt="" />
                </div>

                <div className="storyCard__content">
                    <h4 className="storyCard__title">{title}</h4>
                    {description && <p className="storyCard__description"></p>}
                </div>
            </div> 
        </>
    );
};


