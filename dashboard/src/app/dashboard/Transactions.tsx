import { ArrowUpRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { numberWithCommas } from "@/lib/utils";

interface ITransaction {
  amount: number;
  user: {
    name: string;
    email: string;
  };
}

function Transaction({ amount, user }: ITransaction) {
  return (
    <TableRow>
      <TableCell>
        <p className="font-medium">{user.name}</p>

        <p className="text-sm text-muted-foreground">{user.email}</p>
      </TableCell>

      <TableCell className="font-medium text-right">
        ${numberWithCommas(amount)}
      </TableCell>
    </TableRow>
  );
}

export default function Transactions() {
  const transactions = [
    {
      amount: 250,
      user: {
        name: "Liam Johnson",
        email: "liam@example.com",
      },
    },
    {
      amount: 100,
      user: {
        name: "Emma Williams",
        email: "emma@example.com",
      },
    },
    {
      amount: 500,
      user: {
        name: "Oliver Brown",
        email: "oliver@example.com",
      },
    },
    {
      amount: 300,
      user: {
        name: "Ava Wilson",
        email: "ava.wilson@example.com",
      },
    },
  ];

  return (
    <Card className="shadow-none">
      <CardHeader className="flex flex-row items-center">
        <div className="grid gap-2">
          <CardTitle>Transactions</CardTitle>

          <CardDescription>Recent transactions from your store</CardDescription>
        </div>

        <Button asChild size="sm" className="ml-auto gap-1">
          <Link href="/transactions">
            View all
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Button>
      </CardHeader>

      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Customer</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {transactions.map((transaction, index) => (
              <Transaction key={index} {...transaction} />
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
