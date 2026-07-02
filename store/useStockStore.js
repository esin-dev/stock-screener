import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useStockStore = create(
  persist(
    (set) => ({
      stocks: [],

  selectedStock: null,

  filters: {},

  searchTerm: "",

  sortField: "price",

  sortDirection: "desc",

  watchlist: [],

  setSort: (field) =>
  set((state) => ({
    sortField: field,
    sortDirection:
      state.sortDirection === "asc"
        ? "desc"
        : "asc",
  })),

  addToWatchlist: (stock) =>
  set((state) => {

    const alreadyExists =
      state.watchlist.some(
        (item) => item.id === stock.id
      );

    if (alreadyExists) {
      return state;
    }

    return {
      watchlist: [
        ...state.watchlist,
        stock,
      ],
    };
  }),

  removeFromWatchlist: (id) =>
  set((state) => ({
    watchlist:
      state.watchlist.filter(
        (stock) =>
          stock.id !== id
      ),
  })),

  setSearchTerm: (term) =>
    set({ searchTerm: term }),

  setStocks: (stocks) =>
    set({ stocks }),

  setSelectedStock: (stock) =>
    set({ selectedStock: stock }),

  setFilters: (filters) =>
    set({ filters }),
}),

  {
    name: "stock-store",

    partialize: (state) => ({
      watchlist: state.watchlist,
      filters: state.filters,
      searchTerm: state.searchTerm,
      sortField: state.sortField,
      sortDirection: state.sortDirection,
    }),
  }
    )
  );