"use client";

import { useEffect, useMemo, useRef } from "react";
import Chart from "chart.js/auto";
import styles from "./ResearchData.module.css";

type ResearchOutputRow = {
  session: string;
  journals: number;
  conferences: number;
  patents: number;
};

type IndexingRow = {
  session: string;
  journals: number;
  sci: number;
  scopus: number;
};

type ResearchDataProps = {
  title?: string;
  outputData?: ResearchOutputRow[];
  indexingData?: IndexingRow[];
};

const defaultOutputData: ResearchOutputRow[] = [
  { session: "2025-26", journals: 13, conferences: 25, patents: 30 },
  { session: "2024-25", journals: 13, conferences: 10, patents: 67 },
  { session: "2023-24", journals: 14, conferences: 26, patents: 95 },
];

const defaultIndexingData: IndexingRow[] = [
  { session: "2025-26", journals: 13, sci: 10, scopus: 3 },
  { session: "2024-25", journals: 13, sci: 9, scopus: 4 },
  { session: "2023-24", journals: 14, sci: 6, scopus: 8 },
];

export default function ResearchData({
  title = "Research Data (Computer Science Department)",
  outputData = defaultOutputData,
  indexingData = defaultIndexingData,
}: ResearchDataProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const sessions = useMemo(
    () => outputData.map((row) => row.session),
    [outputData],
  );
  const journalData = useMemo(
    () => outputData.map((row) => row.journals),
    [outputData],
  );
  const conferenceData = useMemo(
    () => outputData.map((row) => row.conferences),
    [outputData],
  );
  const patentData = useMemo(
    () => outputData.map((row) => row.patents),
    [outputData],
  );

  useEffect(() => {
    if (!canvasRef.current) return;

    const chart = new Chart(canvasRef.current, {
      type: "bar",
      data: {
        labels: ["Journals", "Conferences", "Patents"],
        datasets: [
          {
            label: sessions[0] ?? "2025-26",
            data: [
              journalData[0] ?? 0,
              conferenceData[0] ?? 0,
              patentData[0] ?? 0,
            ],
            backgroundColor: "#f97316",
            borderRadius: 8,
            borderSkipped: false,
            maxBarThickness: 34,
          },
          {
            label: sessions[1] ?? "2024-25",
            data: [
              journalData[1] ?? 0,
              conferenceData[1] ?? 0,
              patentData[1] ?? 0,
            ],
            backgroundColor: "#9ca3af",
            borderRadius: 8,
            borderSkipped: false,
            maxBarThickness: 34,
          },
          {
            label: sessions[2] ?? "2023-24",
            data: [
              journalData[2] ?? 0,
              conferenceData[2] ?? 0,
              patentData[2] ?? 0,
            ],
            backgroundColor: "#d1d5db",
            borderRadius: 8,
            borderSkipped: false,
            maxBarThickness: 34,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: false,
        plugins: {
          legend: {
            position: "top",
            labels: {
              color: "#4b5563",
              boxWidth: 12,
              boxHeight: 12,
              usePointStyle: true,
              pointStyle: "rectRounded",
              font: { size: 12 },
            },
          },
          tooltip: {
            backgroundColor: "#1f2933",
            titleColor: "#ffffff",
            bodyColor: "#ffffff",
            padding: 10,
          },
        },
        scales: {
          x: {
            grid: {
              display: false,
            },
            ticks: {
              color: "#4b5563",
              font: { size: 12 },
            },
          },
          y: {
            beginAtZero: true,
            ticks: {
              color: "#4b5563",
              font: { size: 12 },
              precision: 0,
            },
            grid: {
              color: "rgba(148, 163, 184, 0.18)",
            },
          },
        },
      },
    });

    return () => chart.destroy();
  }, [sessions, journalData, conferenceData, patentData]);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
          <div className={styles.divider} aria-hidden="true" />
        </header>

        <div className={styles.layout}>
          <div className={styles.leftCol}>
            <article className={styles.card}>
              <h3 className={styles.cardTitle}>Research Output</h3>
              <div className={styles.tableWrap}>
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th>Session</th>
                      <th>Journals</th>
                      <th>Conferences</th>
                      <th>Patents</th>
                    </tr>
                  </thead>
                  <tbody>
                    {outputData.map((row) => (
                      <tr key={row.session}>
                        <td>{row.session}</td>
                        <td>{row.journals}</td>
                        <td>{row.conferences}</td>
                        <td>{row.patents}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </article>

            <article className={styles.card}>
              <h3 className={styles.cardTitle}>Journal Indexing</h3>
              <div className={styles.tableWrap}>
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th>Session</th>
                      <th>Journals</th>
                      <th>SCI</th>
                      <th>Scopus</th>
                    </tr>
                  </thead>
                  <tbody>
                    {indexingData.map((row) => (
                      <tr key={row.session}>
                        <td>{row.session}</td>
                        <td>{row.journals}</td>
                        <td>{row.sci}</td>
                        <td>{row.scopus}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </article>
          </div>

          <article className={`${styles.card} ${styles.chartCard}`}>
            <h3 className={styles.cardTitle}>Research Trends by Session</h3>
            <div className={styles.chartWrap}>
              <canvas
                ref={canvasRef}
                aria-label="Grouped bar chart for research data"
              />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
