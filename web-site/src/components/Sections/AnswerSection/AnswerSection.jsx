import { answerData } from "@dataSection/AnswerSectionData/AnswerSectionData";
import "@componentsSection/AnswerSection/AnswerSection.css";


export default function AnswerSection() {
    const { title, subtitle, buttonText, backgroundImage } = answerData;

    return (
        <section className="answer-section">
            <div className="answer-section__container">
                <div className="answer-section__bg">
                    <img src={backgroundImage} alt="" aria-hidden="true" />
                </div>

                <div className="answer-section__content">
                    <h2 className="answer-section__title">{title}</h2>
                    <p className="answer-section__subtitle">{subtitle}</p>
                    <button className="answer-section__btn">{buttonText}</button>
                </div>
            </div>
        </section>
    );
}