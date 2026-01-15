import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MinimalistPortfolio from './pages/MinimalistPortfolio';
import ProjectCaseStudy from './components/ProjectCaseStudy';
import { Toaster } from './components/ui/sonner';
import { AccessibilityProvider } from './contexts/AccessibilityContext';
import AccessibilityMenu from './components/AccessibilityMenu';

function App() {
  return (
    <AccessibilityProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MinimalistPortfolio />} />
            <Route path="/project/:projectId" element={<ProjectCaseStudy />} />
          </Routes>
          <AccessibilityMenu />
        </BrowserRouter>
        <Toaster position="top-center" richColors />
      </div>
    </AccessibilityProvider>
  );
}

export default App;
