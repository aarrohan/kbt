import Overview from "./Overview";
import Transactions from "./Transactions";
import RecentSales from "./RecentSales";

export default function Home() {
  return (
    <div className="space-y-6">
      <Overview />

      <div className="grid grid-cols-[auto_500px] gap-6">
        <Transactions />

        <RecentSales />
      </div>
    </div>
  );
}
