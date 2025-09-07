import React from 'react';

const ContentBlock = React.forwardRef(({ data }, ref) => {
  return (
    <div className="content-block" ref={ref}>
      <h3 className="big-title">{data.bigTitle}</h3>
      {data.sections.map((section, index) => (
        <div key={index} className="section">
          <h4 className="sub-title">{section.subTitle}</h4>
          <p className="content">{section.content}</p>
        </div>
      ))}
    </div>
  );
});

export default ContentBlock;