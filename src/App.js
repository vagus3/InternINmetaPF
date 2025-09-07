import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
// 각 페이지 컴포넌트를 직접 임포트합니다.
import DevelopmentPage from './pages/DevelopmentPage';
import SocialPage from './pages/SocialPage';
import EtcPage from './pages/EtcPage';
import './App.css';

function App() {
  return (
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* 각 경로에 맞는 전용 컴포넌트를 연결합니다. */}
          <Route path="/development" element={<DevelopmentPage />} />
          <Route path="/social" element={<SocialPage />} />
          <Route path="/etc" element={<EtcPage />} />
        </Routes>
      </div>
  );
}

export default App;