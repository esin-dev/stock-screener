"use client";

import PriceChart from "./PriceChart";

export default function ChartPanel({
  stock,
}) {
  if (!stock) return null;

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">

  <div className="p-3 rounded bg-gray-900">
    <p className="text-gray-400">Price</p>
    <p className="text-white font-bold">
      ${stock.price}
    </p>
  </div>

  <div className="p-3 rounded bg-gray-900">
    <p className="text-gray-400">RSI</p>
    <p className="text-white font-bold">
      {stock.rsi}
    </p>
  </div>

  <div className="p-3 rounded bg-gray-900">
    <p className="text-gray-400">Volume</p>
    <p className="text-white font-bold">
      {stock.volume.toLocaleString()}
    </p>
  </div>

  <div className="p-3 rounded bg-gray-900">
    <p className="text-gray-400">Market Cap</p>
    <p className="text-white font-bold">
      ${stock.marketCap.toLocaleString()}
    </p>
  </div>

  <div className="p-3 rounded bg-gray-900">
    <p className="text-gray-400">Sector</p>
    <p className="text-white font-bold">
      {stock.sector}
    </p>
  </div>

  <div className="p-3 rounded bg-gray-900">
    <p className="text-gray-400">Beta</p>
    <p className="text-white font-bold">
      {stock.beta}
    </p>
  </div>

  <div className="p-3 rounded bg-gray-900">
    <p className="text-gray-400">
      Debt / Equity
    </p>
    <p className="text-white font-bold">
      {stock.debtEquity}
    </p>
  </div>

  <div className="p-3 rounded bg-gray-900">
    <p className="text-gray-400">
      Revenue Growth
    </p>
    <p className="text-white font-bold">
      {stock.revenueGrowth}%
    </p>
  </div>

  <div className="p-3 rounded bg-gray-900">
    <p className="text-gray-400">
      Dividend Yield
    </p>
    <p className="text-white font-bold">
      {stock.dividendYield}%
    </p>
  </div>

</div>
  );
}