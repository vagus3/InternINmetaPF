import React from 'react';
import { socialData } from '../data/dummyData';
import './SocialPage.css';

const SocialPage = () => {
  const { summary, details } = socialData;

  return (
    <main className="document-main">
      <header className="document-header">
        <h1 className="main-title">{summary.title}</h1>
        <p className="main-description">모든 내용이 아래에 표시됩니다.</p>
      </header>

      <div className="document-content">
        {details.map(item => (
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

export default SocialPage;