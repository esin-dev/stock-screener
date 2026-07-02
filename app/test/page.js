import { generateStocks } from "../../data/generateStocks";

export default function TestPage() {
  const stocks = generateStocks(10);

  return (
    <div className="p-10">
      <pre>
        {JSON.stringify(stocks, null, 2)}
      </pre>
    </div>
  );
}