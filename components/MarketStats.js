"use client";

export default function MarketStats({
  stocks,
}) {
  const totalStocks =
    stocks.length;

  const avgPrice =
    stocks.length
      ? (
          stocks.reduce(
            (sum, stock) =>
              sum + stock.price,
            0
          ) / stocks.length
        ).toFixed(2)
      : 0;

  const avgRsi =
    stocks.length
      ? (
          stocks.reduce(
            (sum, stock) =>
              sum + stock.rsi,
            0
          ) / stocks.length
        ).toFixed(2)
      : 0;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">

      <div className="p-5 bg-white rounded-xl shadow-sm border border-gray-200">
        <h3 className="text-gray-500">
          Total Stocks
        </h3>

        <p className="text-2xl font-bold text-black">
          {totalStocks}
        </p>
      </div>

      <div className="p-5 bg-white rounded-xl shadow-sm border border-gray-200">
        <h3 className="text-gray-500">
          Average Price
        </h3>

        <p className="text-2xl font-bold text-black">
          ${avgPrice}
        </p>
      </div>

      <div className="p-5 bg-white rounded-xl shadow-sm border border-gray-200">
        <h3 className="text-gray-500">
          Average RSI
        </h3>

        <p className="text-2xl font-bold text-black">
          {avgRsi}
        </p>
      </div>

    </div>
  );
}