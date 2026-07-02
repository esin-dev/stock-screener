"use client";

import { useStockStore }
  from "../store/useStockStore";

export default function Watchlist() {
  const watchlist =
    useStockStore(
      (state) =>
        state.watchlist
    );

    const removeFromWatchlist =
  useStockStore(
    (state) =>
      state.removeFromWatchlist
  );

  return (
    <div className="p-5 bg-black rounded-xl shadow-sm border border-gray-200">
      <h2 className="text-xl font-bold text-white mb-4">
        Watchlist
      </h2>

      {watchlist.length === 0 ? (
        <p className="text-center py-6 text-gray-500">
          No stocks added to your watchlist yet.
        </p>
      ) : (
       watchlist.map((stock) => (
  <div
    key={stock.id}
    className="border-b py-2 flex justify-between"
  >
    <span>{stock.symbol}</span>

    <button
      onClick={() =>
        removeFromWatchlist(stock.id)
      }
      className="text-red-500 cursor-pointer hover:underline"
    >
      Remove
    </button>
  </div>
))
          
      )}
    </div>
  );
}