import React from 'react';
import './Publications.css';
import { FaBook, FaFilePdf, FaExternalLinkAlt } from 'react-icons/fa';

const Publications = () => {
  const publications = [
    {
      title: "Transformer-based Object Detection on Resource-limited Edge Devices via Split Computing",
      venue: "IEEE International Conference on Machine Learning and Applications (ICMLA)",
      date: "Jul 2026",
      description: "Proposed a split computing framework for deploying transformer-based object detection models (DETR) on resource-constrained edge devices. The framework partitions inference between edge and cloud, identifies optimal split points, and applies lossless compression to transmit intermediate feature tensors while preserving detection accuracy.",
      metrics: ["94% lower inference latency", "93% lower energy use", "90% lower edge memory"]
    },
    {
      title: "Split Inference for Precision Agriculture",
      venue: "IEEE International Conference on Data Mining Workshops (ICDMW 2025)",
      date: "Mar 2026",
      description: "Developed SplitTracr, a split inference framework that partitions deep neural networks between edge devices and cloud servers. It executes early layers on the edge, serializes and compresses intermediate tensors, optionally applies AES-CBC/CTR encryption for privacy-sensitive workloads, and resumes inference on the server — with per-stage latency and energy measurement across edge, network, and server.",
      paper: "https://ieeexplore.ieee.org/abstract/document/11415736",
      metrics: ["Edge/network/server profiling", "AES encryption overhead quantified"]
    },
    {
      title: "SplitTracr: A Flexible Performance Evaluation Tool for Cooperative Inference and Split Computing",
      venue: "International Conference on Electronics Packaging (ICEP)",
      date: "Mar 2025",
      description: "A performance evaluation tool that lets deep neural networks be split dynamically at any layer, handling edge device configuration, live export and injection of forward-pass tensors, dataset handling, and metrics logging throughout testing.",
      paper: "https://dl.acm.org/doi/abs/10.1145/3680256.3721971",
      poster: "./posters/poster3.pdf"
    },
    {
      title: "SplitTracer: A Cooperative Inference Evaluation Toolkit for Computation Offloading on the Edge",
      venue: "IEEE International Conference on Fog and Edge Computing (ICFEC 2024)",
      date: "May 2024",
      description: "An experimental test bed for evaluating computation offloading between edge and fog devices. Supports user-defined application scenarios without requiring architectural changes to the models under test.",
      paper: "https://ieeexplore.ieee.org/abstract/document/10707214",
      poster: "./posters/poster2.pdf"
    },
    {
      title: "Computation Offloading for Precision Agriculture using Cooperative Inference",
      venue: "IEEE International Conference on Fog and Edge Computing (ICFEC 2024)",
      date: "May 2024",
      description: "A cooperative inference framework supporting edge devices with limited power and compute in precision agriculture, offloading computation to more capable devices to reduce the cost of advanced agricultural technology for farmers.",
      paper: "https://ieeexplore.ieee.org/abstract/document/10707172",
      poster: "./posters/poster1.pdf"
    }
  ];

  return (
    <section className="publications" id="publications">
      <div className="publications-container">
        <h2 className="section-title">Publications</h2>
        <p className="publications-subtitle">
          Peer-reviewed research on split computing and edge AI, published at IEEE and ACM venues.
        </p>
        <div className="publications-grid">
          {publications.map((pub, index) => (
            <article className="publication-card" key={index}>
              <div className="publication-top">
                <div className="publication-icon">
                  <FaBook />
                </div>
                <span className="publication-date">{pub.date}</span>
              </div>
              <h3>{pub.title}</h3>
              <p className="publication-conference">{pub.venue}</p>
              <p className="publication-description">{pub.description}</p>

              {pub.metrics && (
                <div className="publication-metrics">
                  {pub.metrics.map((metric, i) => (
                    <span className="publication-metric" key={i}>{metric}</span>
                  ))}
                </div>
              )}

              <div className="publication-actions">
                {pub.paper && (
                  <a
                    className="publication-link primary"
                    href={pub.paper}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt /> Read paper
                  </a>
                )}
                {pub.poster && (
                  <a
                    className="publication-link"
                    href={pub.poster}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFilePdf /> View poster
                  </a>
                )}
                {!pub.paper && !pub.poster && (
                  <span className="publication-link disabled">Accepted — link coming soon</span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
