"use client";

import { useEffect, useRef } from "react";
import {
  createChart,
  LineSeries,
} from "lightweight-charts";

export default function PriceChart({ data }) {
  const chartContainerRef = useRef(null);

  useEffect(() => {
    if (!data?.length) return;

    const chart = createChart(
      chartContainerRef.current,
      {
        width: chartContainerRef.current.clientWidth,
        height: 300,
      }
    );

    const lineSeries = chart.addSeries(LineSeries);

    lineSeries.setData(data);

    const handleResize = () => {
      chart.applyOptions({
        width: chartContainerRef.current.clientWidth,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      chart.remove();
    };
  }, [data]);

  return (
    <div
      ref={chartContainerRef}
      className="w-full"
    />
  );
}