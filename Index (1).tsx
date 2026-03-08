import { Users, Eye, MousePointerClick, TrendingUp, DollarSign, BarChart3 } from "lucide-react";
import MetricCard from "@/components/MetricCard";
import TrafficChart from "@/components/TrafficChart";
import ConversionChart from "@/components/ConversionChart";
import ROICalculator from "@/components/ROICalculator";
import CampaignTable from "@/components/CampaignTable";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="border-b border-border/50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <BarChart3 className="h-6 w-6 text-primary" />
            <h1 className="text-xl font-bold tracking-tight">MarketPulse</h1>
          </div>
          <span className="text-xs text-muted-foreground font-mono">Last updated: Mar 8, 2026</span>
        </div>
      </header>

      {/* Main */}
      <main className="flex-1 px-6 py-8">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* KPI Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <MetricCard title="Total Visitors" value="84,232" change="+12.5% vs last month" changeType="positive" icon={Eye} />
            <MetricCard title="Unique Users" value="42,118" change="+8.3% vs last month" changeType="positive" icon={Users} />
            <MetricCard title="Conversion Rate" value="14.8%" change="+2.1pp vs last month" changeType="positive" icon={MousePointerClick} />
            <MetricCard title="Avg. Campaign ROI" value="242%" change="-5.2% vs last month" changeType="negative" icon={TrendingUp} />
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <TrafficChart />
            <ConversionChart />
          </div>

          {/* ROI Calculator */}
          <ROICalculator />

          {/* Campaign Table */}
          <CampaignTable />
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 px-6 py-5">
        <div className="max-w-7xl mx-auto text-center text-sm text-muted-foreground">
          Built by Avadesh Agarwal
        </div>
      </footer>
    </div>
  );
};

export default Index;
