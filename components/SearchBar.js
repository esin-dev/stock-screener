"use client";

import { useStockStore } from "../store/useStockStore";

export default function SearchBar() {
  const searchTerm = useStockStore(
    (state) => state.searchTerm
  );

  const setSearchTerm = useStockStore(
    (state) => state.setSearchTerm
  );

  return (
    <input
      type="text"
      placeholder="Search symbol..."
      value={searchTerm}
      onChange={(e) =>
        setSearchTerm(e.target.value)
      }
      className="border p-3 rounded w-full mb-4 text-white"
    />
  );
}