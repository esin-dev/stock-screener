"use client";

import { useStockStore }
  from "../store/useStockStore";

export default function ExportWatchlistButton() {
  const watchlist =
    useStockStore(
      (state) => state.watchlist
    );

  const exportCSV = () => {
    if (!watchlist.length) return;

    const headers = [
      "Symbol",
      "Price",
      "RSI",
      "Sector",
    ];

    const rows = watchlist.map(
      (stock) => [
        stock.symbol,
        stock.price,
        stock.rsi,
        stock.sector,
      ]
    );

    const csvContent = [
      headers,
      ...rows,
    ]
      .map((row) =>
        row.join(",")
      )
      .join("\n");

    const blob = new Blob(
      [csvContent],
      {
        type: "text/csv",
      }
    );

    const url =
      URL.createObjectURL(blob);

    const link =
      document.createElement("a");

    link.href = url;

    link.download =
      "watchlist.csv";

    link.click();

    URL.revokeObjectURL(url);
  };

  return (
    <button
      onClick={exportCSV}
      className="bg-green-600 text-white px-4 py-2 rounded cursor-pointer hover:bg-green-700 transition-colors"
    >
      Export Watchlist CSV
    </button>
  );
}