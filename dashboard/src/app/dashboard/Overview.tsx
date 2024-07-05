import { DollarSign, UsersRound, CreditCard, ShoppingCart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Overview() {
  return (
    <div className="grid grid-cols-4 gap-6">
      <Card className="shadow-none">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>

          <DollarSign className="h-4 w-4 text-muted-foreground" />
        </CardHeader>

        <CardContent>
          <div className="mb-1 text-2xl font-bold">$0</div>

          <p className="text-xs text-muted-foreground">+0% from last month</p>
        </CardContent>
      </Card>

      <Card className="shadow-none">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Active orders</CardTitle>

          <ShoppingCart className="h-4 w-4 text-muted-foreground" />
        </CardHeader>

        <CardContent>
          <div className="mb-1 text-2xl font-bold">0</div>

          <p className="text-xs text-muted-foreground">+0 from last month</p>
        </CardContent>
      </Card>

      <Card className="shadow-none">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Sales</CardTitle>

          <CreditCard className="h-4 w-4 text-muted-foreground" />
        </CardHeader>

        <CardContent>
          <div className="mb-1 text-2xl font-bold">0</div>

          <p className="text-xs text-muted-foreground">+0% from last month</p>
        </CardContent>
      </Card>

      <Card className="shadow-none">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Customers</CardTitle>

          <UsersRound className="h-4 w-4 text-muted-foreground" />
        </CardHeader>

        <CardContent>
          <div className="mb-1 text-2xl font-bold">0</div>

          <p className="text-xs text-muted-foreground">+0% from last month</p>
        </CardContent>
      </Card>
    </div>
  );
}
