import { ThemeProvider } from './context/ThemeContext';
import { ModalProvider } from './context/ModalContext';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { ProfessionalOverview } from './components/sections/ProfessionalOverview';
import { Education } from './components/sections/Education';
import { Certifications } from './components/sections/Certifications';
import { FeaturedProjects } from './components/sections/FeaturedProjects';
import { Testimonials } from './components/sections/Testimonials';
import { CareerProgression } from './components/sections/CareerProgression';
import { WorkExperience } from './components/sections/WorkExperience';
import { Languages } from './components/sections/Languages';
import { DEILeadership } from './components/sections/DEILeadership';
import { DetailedViewModal } from './components/modals/DetailedViewModal';

function App() {
  return (
    <ThemeProvider>
      <ModalProvider>
        <div className="relative min-h-screen bg-white">
          <Header />
          <main className="relative z-10">
            {/* Hero - Full width */}
            <Hero />

            {/* Content sections in max-width container */}
            <div className="max-w-7xl mx-auto px-4 py-20">
              <ProfessionalOverview />
            </div>

            <div className="max-w-7xl mx-auto px-4 py-20">
              <Education />
            </div>

            <div className="max-w-7xl mx-auto px-4 py-20">
              <Certifications />
            </div>

            <div className="max-w-7xl mx-auto px-4 py-20">
              <FeaturedProjects />
            </div>

            <div className="max-w-7xl mx-auto px-4 py-20">
              <Testimonials />
            </div>

            <div className="max-w-7xl mx-auto px-4 py-20">
              <CareerProgression />
            </div>

            <div className="max-w-7xl mx-auto px-4 py-20">
              <WorkExperience />
            </div>

            <div className="max-w-7xl mx-auto px-4 py-20">
              <Languages />
            </div>

            <div className="max-w-7xl mx-auto px-4 py-20">
              <DEILeadership />
            </div>
          </main>

          <Footer />
          <DetailedViewModal />
        </div>
      </ModalProvider>
    </ThemeProvider>
  );
}

export default App;
