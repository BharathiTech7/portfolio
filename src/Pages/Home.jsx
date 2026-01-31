import { Navbar } from "../components/Navbar";
import { ThemeToggle } from "../components/ThemeToggle";
import {StarBackground} from '@/components/StarBackground';
import { HeroSection } from "../components/HeroSection";
import {  AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { ExperienceSection } from "../components/ExperienceSection";
import { AchievementsSection } from "../components/AchievementsSection";

export const Home=()=>{
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/*Theme toggle*/}
        <ThemeToggle/>
        {/* Background effect*/}
        <StarBackground/>
        {/* Navbar*/}
        <Navbar/>
        {/* Main contenet*/}
         <main>
            <HeroSection />
            <AboutSection/>
             <ExperienceSection />
            <SkillsSection/>
            <ProjectsSection/>
             <AchievementsSection />

            <ContactSection/>
         </main>
        {/* Footer*/ }
        <Footer/>

    </div>;
}