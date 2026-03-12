import { Layout } from './components/layout/Layout';
import { Hero } from './components/sections/Hero';
import { Experience } from './components/sections/Experience';
import { DetailedViewModal } from './components/modals/DetailedViewModal';

function App() {
  return (
    <Layout>
      <Hero />
      <Experience />
      <DetailedViewModal />
    </Layout>
  );
}

export default App;
