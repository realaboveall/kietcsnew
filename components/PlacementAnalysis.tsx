"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  BarController,
  BarElement,
  CategoryScale,
  Chart,
  Legend,
  LinearScale,
  Tooltip,
  type ChartData,
  type ChartOptions,
} from "chart.js";
import RecruiterWall from "./RecruiterWall";

const EASE_STANDARD = [0.4, 0, 0.2, 1] as const;

Chart.register(
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
);

const overviewTabs = [
  "Overview",
  "Placement Trends",
  "Success Stories",
  "Partnerships",
] as const;

type PlacementTab = (typeof overviewTabs)[number];

const salaryGrowth = [
  { year: "2020", avgLpa: 7.2, highestLpa: 17.0 },
  { year: "2021", avgLpa: 8.5, highestLpa: 20.2 },
  { year: "2022", avgLpa: 12.4, highestLpa: 28.0 },
  { year: "2023", avgLpa: 14.2, highestLpa: 36.5 },
  { year: "2024", avgLpa: 18.6, highestLpa: 44.5 },
];

const stats = [
  {
    label: "Placement Percentage",
    value: "98.4%",
    note: "+2.4% from last year",
  },
  { label: "Highest CTC Offer", value: "₹44.5 LPA", note: "Amazon Europe" },
  {
    label: "Recruiting Partners",
    value: "250+",
    note: "Tier-1 & Product Companies",
  },
];

const fame = [
  { name: "Ananya Sharma", role: "Google | SDE 1" },
  { name: "Rahul Verma", role: "Microsoft | Analyst" },
  { name: "Priya Das", role: "Amazon | Cloud Support" },
  { name: "Vikram Singh", role: "Meta | Frontend Dev" },
];

const partnerships = [
  "AWS Academy",
  "Google Cloud",
  "Cisco Networking",
  "NVIDIA Labs",
];

const internships = [
  {
    title: "Summer Immersion (3rd Year)",
    note: "Mandatory 8-week corporate training with stipend.",
  },
  {
    title: "Pre-Placement Internships",
    note: "Final year internships leading to full-time roles.",
  },
];

export default function PlacementAnalysis() {
  const [activeTab, setActiveTab] = useState<PlacementTab>("Overview");
  const [placeholderMessage, setPlaceholderMessage] = useState(
    "Showing overview metrics.",
  );
  const chartCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstanceRef = useRef<Chart<"bar"> | null>(null);

  useEffect(() => {
    if (!chartCanvasRef.current) return;

    const data: ChartData<"bar"> = {
      labels: salaryGrowth.map((row) => row.year),
      datasets: [
        {
          label: "Avg CTC (LPA)",
          data: salaryGrowth.map((row) => row.avgLpa),
          backgroundColor: "rgba(249, 115, 22, 0.85)",
          borderRadius: 8,
          maxBarThickness: 36,
        },
        {
          label: "Highest CTC (LPA)",
          data: salaryGrowth.map((row) => row.highestLpa),
          backgroundColor: "rgba(148, 163, 184, 0.55)",
          borderRadius: 8,
          maxBarThickness: 36,
        },
      ],
    };

    const options: ChartOptions<"bar"> = {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          grid: { display: false },
          ticks: { color: "#475569", font: { weight: 600 } },
        },
        y: {
          beginAtZero: true,
          grid: { color: "rgba(148,163,184,0.18)" },
          ticks: {
            color: "#64748b",
            callback: (value) => `${value}L`,
          },
        },
      },
      plugins: {
        legend: {
          position: "top",
          align: "end",
          labels: {
            boxWidth: 12,
            color: "#334155",
            usePointStyle: true,
            pointStyle: "circle",
          },
        },
        tooltip: {
          callbacks: {
            label: (ctx) => `${ctx.dataset.label}: ${ctx.raw} LPA`,
          },
        },
      },
    };

    chartInstanceRef.current?.destroy();
    chartInstanceRef.current = new Chart(chartCanvasRef.current, {
      type: "bar",
      data,
      options,
    });

    return () => chartInstanceRef.current?.destroy();
  }, []);

  const onTabClick = (tab: PlacementTab) => {
    setActiveTab(tab);
    setPlaceholderMessage(
      `Showing ${tab.toLowerCase()} content with placeholder data.`,
    );
  };

  return (
    <section className="overflow-hidden bg-[#EEEEFF] px-6 py-20 text-slate-900 md:px-12 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.32, ease: EASE_STANDARD }}
          className="mb-10">
          <p className="mb-3 inline-block rounded bg-orange-500 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
            Department of Computer Science
          </p>
          <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Placement &amp; Career{" "}
            <span className="text-orange-500">Insights</span>
          </h2>
          <p className="mt-4 max-w-3xl text-base text-slate-600 md:text-lg">
            Pioneering professional growth and high-impact career trajectories
            for our CS graduates through industry-led ecosystems.
          </p>
        </motion.div>

        <p className="mb-6 text-sm text-slate-600">{placeholderMessage}</p>

        {(activeTab === "Overview" || activeTab === "Placement Trends") && (
          <div className="mb-14 grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="rounded-2xl border border-orange-100 bg-white p-7 lg:col-span-2">
              <div className="mb-6 flex items-center justify-between">
                <h3 className="text-xl font-bold">5-Year Salary Growth</h3>
                <span className="rounded bg-orange-50 px-2 py-1 text-xs font-semibold text-orange-600">
                  Chart.js
                </span>
              </div>
              <div className="h-72">
                <canvas ref={chartCanvasRef} />
              </div>
            </div>

            <div className="flex flex-col gap-4">
              {stats.map((item, idx) => (
                <button
                  key={item.label}
                  type="button"
                  onClick={() =>
                    setPlaceholderMessage(
                      `${item.label} clicked. Placeholder drill-down coming soon.`,
                    )
                  }
                  className={
                    idx === 0
                      ? "rounded-2xl bg-orange-500 p-6 text-left text-white"
                      : "rounded-2xl border border-orange-100 bg-white p-6 text-left"
                  }>
                  <p
                    className={
                      idx === 0
                        ? "text-sm text-orange-100"
                        : "text-sm text-slate-500"
                    }>
                    {item.label}
                  </p>
                  <p className="mt-1 text-4xl font-black">{item.value}</p>
                  <p
                    className={
                      idx === 0
                        ? "mt-2 text-xs text-orange-100"
                        : "mt-2 text-xs font-semibold text-orange-600"
                    }>
                    {item.note}
                  </p>
                </button>
              ))}
            </div>
          </div>
        )}

        {(activeTab === "Overview" || activeTab === "Success Stories") && (
          <div>
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-3xl font-black">
                Wall of <span className="text-orange-500">Fame</span>
              </h3>
              <button
                type="button"
                onClick={() =>
                  setPlaceholderMessage(
                    "Success stories page will be connected with real alumni data soon.",
                  )
                }
                className="text-sm font-bold text-orange-600 hover:text-orange-700">
                View all success stories
              </button>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
              {fame.map((item) => (
                <div
                  key={item.name}
                  className="overflow-hidden rounded-2xl border border-orange-100 bg-white">
                  <div className="flex h-36 items-center justify-center bg-linear-to-br from-orange-100 to-orange-50">
                    <div className="grid h-16 w-16 place-items-center rounded-full bg-white text-xl font-bold text-orange-600">
                      {item.name
                        .split(" ")
                        .slice(0, 2)
                        .map((part) => part[0])
                        .join("")}
                    </div>
                  </div>
                  <div className="p-5">
                    <h4 className="text-lg font-bold text-slate-900">
                      {item.name}
                    </h4>
                    <p className="mt-1 text-sm font-semibold text-orange-600">
                      {item.role}
                    </p>
                    <p className="mt-3 text-xs italic leading-relaxed text-slate-600">
                      Placement-ready through projects, mentorship, and
                      internships.
                    </p>
                    <button
                      type="button"
                      onClick={() =>
                        setPlaceholderMessage(
                          `Opening profile for ${item.name} (placeholder).`,
                        )
                      }
                      className="mt-3 text-xs font-semibold text-orange-600 hover:text-orange-700">
                      Read story
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {(activeTab === "Overview" || activeTab === "Partnerships") && (
          <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-2">
            <div>
              <h3 className="mb-5 text-3xl font-black">
                Industry Partnerships
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {partnerships.map((partner) => (
                  <button
                    key={partner}
                    type="button"
                    onClick={() =>
                      setPlaceholderMessage(
                        `${partner} details are placeholder for now.`,
                      )
                    }
                    className="rounded-xl border border-orange-100 bg-white p-4 text-left text-sm font-semibold text-slate-700 hover:border-orange-300">
                    {partner}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-5 text-3xl font-black">Internship Programs</h3>
              <div className="space-y-4">
                {internships.map((item, index) => (
                  <button
                    key={item.title}
                    type="button"
                    onClick={() =>
                      setPlaceholderMessage(
                        `${item.title} clicked (placeholder flow).`,
                      )
                    }
                    className={
                      index === 0
                        ? "w-full rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-5 text-left"
                        : "w-full rounded-2xl border border-orange-100 bg-white p-5 text-left"
                    }>
                    <h4 className="font-bold text-slate-900">{item.title}</h4>
                    <p className="mt-1 text-sm italic text-slate-600">
                      {item.note}
                    </p>
                  </button>
                ))}
              </div>
            </div>
            <div className="w-full">
              <RecruiterWall />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
