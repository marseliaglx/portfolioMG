import { Layout } from './components/layout/Layout';
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
    <Layout>
      <Hero />
      <ProfessionalOverview />
      <Education />
      <Certifications />
      <FeaturedProjects />
      <Testimonials />
      <CareerProgression />
      <WorkExperience />
      <Languages />
      <DEILeadership />
      <DetailedViewModal />
    </Layout>
  );
}

export default App;
