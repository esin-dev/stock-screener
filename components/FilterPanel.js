"use client";

export default function FiltersPanel({
  sector,
  setSector,
  minRsi,
  setMinRsi,
}) {
  return (
    <div className="p-4 border rounded-lg bg-white mb-4">
      <h2 className="text-xl font-bold text-black mb-4">
        Filters
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        <div>
          <label className="block text-black mb-1">
            Sector
          </label>

          <select
            value={sector}
            onChange={(e) =>
              setSector(e.target.value)
            }
            className="w-full border p-2 rounded text-black"
          >
            <option value="">
              All Sectors
            </option>

            <option value="Technology">
              Technology
            </option>

            <option value="Healthcare">
              Healthcare
            </option>

            <option value="Finance">
              Finance
            </option>

            <option value="Energy">
              Energy
            </option>

            <option value="Consumer Goods">
              Consumer Goods
            </option>

            <option value="Telecommunications">
              Telecommunications
            </option>

            <option value="Industrials">
              Industrials
            </option>
            
            <option value="Utilities">
              Utilities
            </option>
          </select>
        </div>

        <div>
          <label className="block text-black mb-1">
            Minimum RSI
          </label>

          <input
            type="number"
            value={minRsi}
            onChange={(e) =>
              setMinRsi(e.target.value)
            }
            className="w-full border p-2 rounded text-black"
          />
        </div>

      </div>
    </div>
  );
}