"use client";

import { useGSAP } from "@gsap/react";
import React, { CSSProperties, useRef } from "react";

import { runPreloaderAnimation } from "./runPreloaderAnimation";
import styles from "./Preloader.module.css";

type PreloaderProps = {
  backgroundColor?: string;
  textColor?: string;
  fontFamily?: string;
  firstLine?: string;
  secondLine?: string;
};

const panels = ["1", "2", "3", "4", "5", "6", "7", "8"] as const;

const panelClassNames: Record<(typeof panels)[number], string> = {
  "1": styles.slide1,
  "2": styles.slide2,
  "3": styles.slide3,
  "4": styles.slide4,
  "5": styles.slide5,
  "6": styles.slide6,
  "7": styles.slide7,
  "8": styles.slide8,
};

const Preloader = ({
  backgroundColor = "#3D065E",
  textColor = "#FFFFFF",
  fontFamily,
  firstLine = "META",
  secondLine = "MASK",
}: PreloaderProps) => {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      if (!rootRef.current) {
        return;
      }

      const timeline = runPreloaderAnimation(rootRef.current);

      return () => {
        timeline.kill();
      };
    },
    { scope: rootRef }
  );

  const cssVariables = {
    "--preloader-bg": backgroundColor,
    "--preloader-text": textColor,
    "--preloader-font": fontFamily,
  } as CSSProperties;

  return (
    <div ref={rootRef} className={styles.root} style={cssVariables}>
      {panels.map((panel) => (
        <div
          key={panel}
          data-preloader-slide={panel}
          className={`${styles.panel} ${panelClassNames[panel]}`}
        />
      ))}

      <div data-preloader-title className={styles.title}>
        {firstLine}
        <br />
        {secondLine}
      </div>
    </div>
  );
};

export default Preloader;
