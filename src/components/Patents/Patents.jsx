import React from 'react';
import './Patents.css';
import { FaLightbulb } from 'react-icons/fa';

const Patents = () => {
  const patents = [
    {
      title: "An integrated cooling system with Ceiling Fan and an Air Conditioning equipment contained therein to achieve optimal cooling and Comfort factor",
      description: "A Unitary air conditioning system combining a Ceiling fan and a Variable Refrigerant Volume (VRV) for proper distribution of cool air throughout all rooms.",
      // status: "Filed",
      year: "2019"
    }
  ];

  return (
    <section className="patents" id="patents">
      <div className="patents-container">
        <h2 className="section-title">Patents</h2>
        <div className="patents-grid">
          {patents.map((patent, index) => (
            <div className="patent-card" key={index}>
              <div className="patent-icon">
                <FaLightbulb />
              </div>
              <div className="patent-content">
                <h3>{patent.title}</h3>
                <p className="patent-description">{patent.description}</p>
                <div className="patent-details">
                  {/* <span className="patent-status">Status: {patent.status}</span> */}
                  <span className="patent-year">Year: {patent.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Patents;
