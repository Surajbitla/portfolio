import React from 'react';
import './Publications.css';
import { FaBook } from 'react-icons/fa';

const Publications = () => {
  const publications = [
    {
      title: "Computation Offloading for Precision Agriculture using Cooperative Inference",
      conference: "IEEE International Conference on Fog and Edge Computing (ICFEC 2024)",
      description: "Presented a poster on leveraging cooperative inference frameworks to support edge devices with limited power and computational resources in precision agriculture."
    },
    {
      title: "SplitTracer: A Cooperative Inference Evaluation Toolkit for Computation Offloading on the Edge",
      conference: "IEEE International Conference on Fog and Edge Computing (ICFEC 2024)",
      description: "Developed and presented an experimental test bed for evaluating the efficacy of computation offloading for cooperative inference between edge and fog devices."
    }
  ];

  return (
    <section className="publications" id="publications">
      <div className="publications-container">
        <h2 className="section-title">Publications</h2>
        <div className="publications-grid">
          {publications.map((pub, index) => (
            <div className="publication-card" key={index}>
              <div className="publication-icon">
                <FaBook />
              </div>
              <h3>{pub.title}</h3>
              <p className="publication-conference">{pub.conference}</p>
              <p className="publication-description">{pub.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
