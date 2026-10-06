import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';

// Non-home routes are split into their own chunks so the first load stays small
const WebDev = lazy(() => import('./pages/WebDev'));
const DataAnalysis = lazy(() => import('./pages/DataAnalysis'));
const Featured = lazy(() => import('./pages/Featured'));
const OtherProjects = lazy(() => import('./pages/OtherProjects'));
const ProjectCaseStudy = lazy(() => import('./pages/ProjectCaseStudy'));

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navbar />
      <main className="flex-1">
        <Suspense fallback={<div className="min-h-screen" />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/web-developer" element={<WebDev />} />
            <Route path="/data-analyst" element={<DataAnalysis />} />
            <Route path="/featured" element={<Featured />} />
            <Route path="/other-projects" element={<OtherProjects />} />
            {/* Old URL, kept so existing links still work */}
            <Route path="/vibe-coding" element={<Navigate to="/other-projects" replace />} />
            <Route path="/projects/:id" element={<ProjectCaseStudy />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;
