"use client";

export default function MarketMovers({
  stocks,
}) {
  const topGainers = [...stocks]
    .sort(
      (a, b) =>
        b.changePercent -
        a.changePercent
    )
    .slice(0, 5);

  const topLosers = [...stocks]
    .sort(
      (a, b) =>
        a.changePercent -
        b.changePercent
    )
    .slice(0, 5);

  return (
    <div className="grid md:grid-cols-2 gap-4 mb-6">

      <div className="p-5 bg-white rounded-xl shadow-sm border border-gray-200">
        <h2 className="font-bold text-green-600 mb-2">
          Top Gainers
        </h2>

        {topGainers.map((stock) => (
          <div
            key={stock.id}
            className="flex justify-between py-1 text-black"
          >
            <span>{stock.symbol}</span>

            <span>
              {stock.changePercent.toFixed(2)}%
            </span>
          </div>
        ))}
      </div>

      <div className=" p-5 bg-white rounded-xl shadow-sm border border-gray-200">
        <h2 className="font-bold text-red-600 mb-2">
          Top Losers
        </h2>

        {topLosers.map((stock) => (
          <div
            key={stock.id}
            className="flex justify-between py-1 text-black"
          >
            <span>{stock.symbol}</span>

            <span>
              {stock.changePercent.toFixed(2)}%
            </span>
          </div>
        ))}
      </div>

    </div>
  );
}