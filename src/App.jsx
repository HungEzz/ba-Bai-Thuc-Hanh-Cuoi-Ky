import React from 'react'
import Header from './components/Header'
import Navigation from './components/Navigation'
import Slider from './components/Slider'
import Sidebar from './components/Sidebar'
import MainContent from './components/MainContent'
import Footer from './components/Footer'

function App() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb' }}>
      <Header />
      <Navigation />
      
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '1.5rem 1rem' }}>
        <Slider />
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem', marginTop: '1.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 3fr', gap: '1.5rem' }}>
            <Sidebar />
            <MainContent />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}

export default App
