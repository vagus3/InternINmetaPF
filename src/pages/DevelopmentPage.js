import React from 'react';
import { developmentData } from '../data/dummyData'; // 데이터 import
import './DevelopmentPage.css';

const DevelopmentPage = () => {
  const { summary, details } = developmentData; // 데이터 구조 분해

  return (
    <main className="document-main">
      {/* --- 페이지 상단 헤더 --- */}
      <header className="document-header">
        <h1 className="main-title">{summary.title}</h1>
        <p className="main-description">모든 내용이 아래에 표시됩니다.</p>
      </header>

      {/* --- 전체 콘텐츠 영역 --- */}
      <div className="document-content">
        {details.map(item => (
          // 큰 주제(bigTitle) 단위로 섹션 나누기
          <section key={item.id} className="topic-section">
            <h2 className="big-title">{item.bigTitle}</h2>
            {item.sections.map((section, index) => (
              <div key={index} className="sub-section">
                <h3 className="sub-title">{section.subTitle}</h3>
                <p className="content">{section.content}</p>
              </div>
            ))}
          </section>
        ))}
      </div>
    </main>
  );
};

export default DevelopmentPage;