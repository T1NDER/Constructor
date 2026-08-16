import Navbar from "@componentsSection/Navbar/Navbar";
import StorySection from "@componentsSection/StorySection/StorySection";
import DescriptionSection from "@componentsSection/DescriptionSection/DescriptionSection";
import AnswerSection from "@componentsSection/AnswerSection/AnswerSection";
import Newsletter from "@componentsSection/Newsletter/Newsletter";


export default function Main() {
    return (
        <main className="main">
            <Navbar />
            <StorySection />
            <DescriptionSection />
            <AnswerSection />
            <Newsletter />
        </main>
    )
}

