const sectors = [
  "Technology",
  "Healthcare",
  "Finance",
  "Energy",
  "Consumer Goods",
  "Telecommunications",
  "Industrial",
  "Utilities",
];

const symbols = [
  "AAPL",
  "MSFT",
  "GOOG",
  "AMZN",
  "META",
  "TSLA",
  "NVDA",
  "JPM",
  "XOM",
  "PFE",
];

function randomBetween(min, max) {
  return Number((Math.random() * (max - min) + min).toFixed(2));
}

function createStock(id) {
  const price = randomBetween(10, 1000);

  const sector =
    sectors[
      Math.floor(
        Math.random() * sectors.length
      )
    ];

  const companySize = Math.random();

  let marketCap;
  let beta;
  let revenueGrowth;
  let dividendYield;
  let debtEquity;

  if (companySize > 0.7) {
    // Large Cap
    marketCap = randomBetween(
      50000000000,
      1000000000000
    );

    beta = randomBetween(0.7, 1.2);

    revenueGrowth = randomBetween(
      0,
      15
    );

    dividendYield = randomBetween(
      2,
      6
    );

    debtEquity = randomBetween(
      0.3,
      1.5
    );

  } else if (companySize > 0.3) {
    // Mid Cap
    marketCap = randomBetween(
      5000000000,
      50000000000
    );

    beta = randomBetween(0.8, 1.6);

    revenueGrowth = randomBetween(
      5,
      25
    );

    dividendYield = randomBetween(
      1,
      4
    );

    debtEquity = randomBetween(
      0.5,
      2
    );

  } else {
    // Small Cap
    marketCap = randomBetween(
      100000000,
      5000000000
    );

    beta = randomBetween(
      1.2,
      2.5
    );

    revenueGrowth = randomBetween(
      10,
      50
    );

    dividendYield = randomBetween(
      0,
      2
    );

    debtEquity = randomBetween(
      0.8,
      3
    );
  }

  // Sector adjustments
  if (sector === "Utilities") {
    debtEquity =
      randomBetween(1.5, 3);
  }

  if (sector === "Technology") {
    debtEquity =
      randomBetween(0.2, 1.2);
  }

  if (sector === "Finance") {
    debtEquity =
      randomBetween(1, 4);
  }

  const changePercent =
    randomBetween(-10, 10);

  const rsi =
    changePercent > 5
      ? randomBetween(60, 90)
      : changePercent < -5
      ? randomBetween(10, 40)
      : randomBetween(40, 60);

  const volume =
    Math.floor(
      marketCap / 1000000
    ) +
    Math.floor(
      Math.abs(changePercent) *
        100000
    );

  const priceHistory = [];

  let currentPrice = price;

  for (let i = 0; i < 30; i++) {
    currentPrice +=
      Math.random() * 10 - 5;

    priceHistory.push({
      time: i,
      value: Number(
        currentPrice.toFixed(2)
      ),
    });
  }

  return {
    id,

    symbol:
      symbols[
        Math.floor(
          Math.random() *
            symbols.length
        )
      ] + id,

    companyName: `Company ${id}`,

    sector,

    price,

    changePercent,

    marketCap,

    volume,

    beta,

    rsi,

    debtEquity,

    revenueGrowth,

    dividendYield,

    priceHistory,

    updatedAt: Date.now(),
  };
}

export function generateStocks(count = 10000) {
  return Array.from(
    { length: count },
    (_, index) => createStock(index + 1)
  );
}

const stocks = generateStocks(5);