"use client";

import { useStockStore } from "../store/useStockStore";

export default function StockTable({ stocks }) {

    const setSelectedStock =
  useStockStore(
    (state) => state.setSelectedStock
  );

  const addToWatchlist =
  useStockStore(
    (state) =>
      state.addToWatchlist
  );
  
  return (
    <div className="overflow-auto max-h-[600px] border rounded-xl">
      <table className="w-full min-w-[1400px] border-separate border-spacing-0 bg-black">
        <thead>
          <tr>
            <th className="sticky top-0 left-0 bg-gray-700 z-50 p-3 text-left text-black">Symbol</th>
            <th className="sticky top-0 z-40 bg-gray-100 p-3 text-left text-black">Price</th>
            <th className="sticky top-0 z-40 bg-gray-100 p-3 text-left text-black">RSI</th>
            <th className="sticky top-0 z-40 bg-gray-100 p-3 text-left text-black">Sector</th>
            <th className="sticky top-0 z-40 bg-gray-100 p-3 text-left text-black">Market Cap</th>
            <th className="sticky top-0 z-40 bg-gray-100 p-3 text-left text-black">Volume</th>
            <th className="sticky top-0 z-40 bg-gray-100 p-3 text-left text-black">PE Ratio</th>
            <th className="sticky top-0 z-40 bg-gray-100 p-3 text-left text-black">Beta</th>
            <th className="sticky top-0 z-40 bg-gray-100 p-3 text-left text-black">Dividend</th>
            <th className="sticky top-0 z-40 bg-gray-100 p-3 text-left text-black">Watchlist</th>
          </tr>
        </thead>

        <tbody>
          {stocks.map((stock) => (
            <tr key={stock.id}
              onClick={() => setSelectedStock(stock)}
              className="cursor-pointer hover:bg-white hover:text-black transition-colors">
              <td className="sticky left-0 z-20 bg-white text-black p-3 border-t">{stock.symbol}</td>
              <td className="p-3 border-t">{stock.price}</td>
              <td className="p-3 border-t">{stock.rsi}</td>
              <td className="p-3 border-t">{stock.sector}</td>
              <td className="p-3 border-t">{stock.marketCap}</td>
              <td className="p-3 border-t">{stock.volume}</td>
              <td className="p-3 border-t">{stock.peRatio}</td>
              <td className="p-3 border-t">{stock.beta}</td>
              <td className="p-3 border-t">{stock.dividendYield}</td>
              <td className="p-3 border-t">
  <button
    onClick={() =>
      addToWatchlist(stock)
    }
    className="px-2 py-1 bg-gray-600 text-white rounded cursor-pointer hover:bg-gray-200 transition-colors"
  >
    ⭐
  </button>
</td>
            </tr>
          ))}

        </tbody>
      </table>
    </div>
  );
}