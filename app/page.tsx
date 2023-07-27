"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.scss";

function HeroLeft(): JSX.Element {
  const [index, setIndex] = useState(0);

  const phrases = [
    "identify plants",
    "see gestures",
    "count reps",
    "feel emotions",
    "sense colors",
    "check safety",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => clearInterval(interval);
  });

  return (
    <div className={styles.heroLeft}>
      <h1 className={styles.sectionHeading}>
        <span className={styles.heroTrainText}>Train apps to</span>
        <br />
        <span className={styles.sectionHeadingGreen}>{phrases[index]}</span>
      </h1>
      <p className={styles.sectionText}>
        <span>
          Lobe helps you train machine learning models with a free, easy to use
          tool.
        </span>
      </p>
      <div className={styles.heroButton}>
        <button className={styles.largeDownloadButton}>Download</button>
        <button
          className={`${styles.largeDownloadButton} ${styles.largeDownloadButtonOutline}`}
        >
          Watch Tour{" "}
          <svg width="39px" height="39px" viewBox="0 0 39 39" version="1.1">
            <title>Watch Tour</title>
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <g
                transform="translate(-362.000000, -12.000000)"
                fillRule="nonzero"
              >
                <g transform="translate(232.000000, 12.000000)">
                  <g transform="translate(130.000000, 0.000000)">
                    <circle
                      stroke="#00E1B1"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      cx="19.5"
                      cy="19.5"
                      r="11.5"
                    ></circle>
                    <path
                      d="M17.4902612,14.8382719 L24.2283102,18.6284245 C24.709668,18.8991883 24.8803883,19.5089034 24.6096245,19.9902612 C24.5198357,20.1498857 24.3879346,20.2817868 24.2283102,20.3715755 L17.4902612,24.1617281 C17.0089034,24.4324919 16.3991883,24.2617716 16.1284245,23.7804138 C16.0442285,23.6307321 16,23.4618894 16,23.2901525 L16,15.7098475 C16,15.1575627 16.4477153,14.7098475 17,14.7098475 C17.1717369,14.7098475 17.3405796,14.754076 17.4902612,14.8382719 Z"
                      fill="#00E1B1"
                    ></path>
                  </g>
                </g>
              </g>
            </g>
          </svg>{" "}
        </button>
      </div>
    </div>
  );
}

function HeroRight(): JSX.Element {
  return (
    <div className={styles.heroVideoContainer}>
      <video
        src="/hero-video.mp4"
        playsInline={true}
        loop={true}
        autoPlay={true}
        muted
        // preload="none"
        title="Video showing examples of ways to use Lobe to easily create machine learning models."
        className={styles.heroVideo}
        style={{ visibility: "visible" }}
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

function HeroArrow(): JSX.Element {
  return (
    <div className={styles.heroArrow} style={{ opacity: 1 }}>
      <svg width="58px" height="24px" viewBox="0 0 58 24" version="1.1">
        <title>See More</title>
        <g
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
          opacity="0.300000012"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <g
            transform="translate(-771.000000, -986.000000)"
            stroke="#000000"
            strokeWidth="3"
          >
            <g transform="translate(771.000000, 986.000000)">
              <polyline id="download-arrow" points="8 8 29 16 50 8"></polyline>
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

export default function Home() {
  return (
    <main className={styles.content}>
      <div className={styles.heroContainer}>
        <section className={styles.hero}>
          <HeroLeft />
          <HeroRight />
        </section>
        <HeroArrow />
      </div>
    </main>
  );
}
