import React from 'react';
import { Link } from 'react-router-dom';
import { developmentData, socialData, etcData } from '../data/dummyData';
import './HomePage.css';

const TopicCard = ({ summary, linkTo }) => (
  <div className="topic-card">
    <h2 className="topic-title">{summary.title}</h2>
    <p className="topic-description">{summary.description}</p>
    <Link to={linkTo} className="topic-link">
      → 내용 상세보기
    </Link>
  </div>
);

const HomePage = () => {
  return (
    <main className="homepage-main">
      <TopicCard summary={developmentData.summary} linkTo="/development" />
      <TopicCard summary={socialData.summary} linkTo="/social" />
      <TopicCard summary={etcData.summary} linkTo="/etc" />
    </main>
  );
};

export default HomePage;