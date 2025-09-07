import React from 'react';
import Column from './components/Column';
import { developmentData, socialData, etcData } from './data/dummyData';
import './MainPage.css';

const MainPage = () => {
  return (
    <main className="main-content">
      <Column title="💻 개발" allData={developmentData} />
      <Column title="🌍 사회" allData={socialData} />
      <Column title="✨ 기타" allData={etcData} />
    </main>
  );
};

export default MainPage;