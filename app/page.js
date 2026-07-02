"use client";

import { useEffect } from "react";
import StockTable from "../components/StockTable";
import { generateStocks } from "../data/generateStocks";
import { useStockStore } from "../store/useStockStore";
import FilterPanel from "../components/FilterPanel";
import SearchBar from "../components/SearchBar";
import ChartPanel from "../components/ChartPanel";
import { useState } from "react";
import Watchlist from "../components/Watchlist";
import MarketStats from "../components/MarketStats";
import MarketMovers from "../components/MarketMovers";
import ExportWatchlistButton from "../components/ExportWatchlistButton";

export default function Home() {
  const stocks = useStockStore(
    (state) => state.stocks
  );

  const setStocks = useStockStore(
    (state) => state.setStocks
  );

  const selectedStock =
  useStockStore(
    (state) => state.selectedStock
  );

  const filters = useStockStore(
    (state) => state.filters
  );

  const searchTerm = useStockStore(
    (state) => state.searchTerm
  );

  const sortField = useStockStore(
  (state) => state.sortField
);

const [sector, setSector] =
  useState("");

const [minRsi, setMinRsi] =
  useState("");

const sortDirection =
  useStockStore(
    (state) => state.sortDirection
  );

  useEffect(() => {
    setStocks(generateStocks(5000));
  }, [setStocks]);

  const filteredStocks = stocks.filter(
  (stock) => {
    const matchesSector =
      !sector ||
      stock.sector === sector;

    const matchesRsi =
      !minRsi ||
      stock.rsi >= Number(minRsi);

    const matchesSearch =
      !searchTerm ||
      stock.symbol
        .toLowerCase()
        .includes(
          searchTerm.toLowerCase()
        );

    return (
      matchesSector &&
      matchesRsi &&
      matchesSearch
    );
  }
);

const sortedStocks = [
  ...filteredStocks,
].sort((a, b) => {

  const valueA = a[sortField];
  const valueB = b[sortField];

  if (sortDirection === "asc") {
    return valueA - valueB;
  }

  return valueB - valueA;
});

  return (
    <main className="min-h-screen bg-black p-8 space-y-6">
      <div className="mb-6">
  <h1 className="text-4xl font-bold text-gray-150">
    Real-Time Stock Screener
  </h1>

  <p className="text-gray-600 mt-2">
    Analyze, filter, and track stocks in real time.
  </p>
</div>

        <SearchBar />

        <MarketStats
  stocks={filteredStocks} />

  <MarketMovers
  stocks={filteredStocks} />

      <FilterPanel
      sector={sector}
  setSector={setSector}
  minRsi={minRsi}
  setMinRsi={setMinRsi} />

      <p className="mb-4 text-gray-600">
          Showing {filteredStocks.length} stocks
      </p>

      <div className="flex gap-2 mb-4">

  <button
    className="border px-4 py-2 bg-white text-black hover:bg-black hover:text-white cursor-pointer"
    onClick={() =>
      useStockStore
        .getState()
        .setSort("price")
    }
  >
    Sort Price
  </button>

  <button
    className="border px-4 py-2 bg-white text-black hover:bg-black hover:text-white cursor-pointer"
    onClick={() =>
      useStockStore
        .getState()
        .setSort("rsi")
    }
  >
    Sort RSI
  </button>

</div>

<ExportWatchlistButton />

<Watchlist />

      <StockTable stocks={sortedStocks.slice(0, 200)} />

  <ChartPanel stock={selectedStock} />
    </main>
  );
}