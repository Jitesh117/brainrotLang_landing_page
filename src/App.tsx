import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import EditorSection from './components/EditorSection';
import BackgroundAnimation from './components/BackgroundAnimation';

function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white relative overflow-hidden">
      <BackgroundAnimation />
      <Header />
      <Hero />
      <EditorSection />
    </div>
  );
}

export default App;