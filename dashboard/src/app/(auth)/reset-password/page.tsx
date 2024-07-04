import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function ResetPassword() {
  return (
    <main className="min-h-screen flex items-center">
      <section className="w-full py-24">
        <div className="mx-auto container px-8 flex flex-col items-center">
          <h1 className="mb-6 text-3xl font-extrabold text-center">
            Forgot password?
          </h1>

          <p className="mb-8 text-center text-muted-foreground">
            Please contact admin to reset your password
          </p>

          <Button asChild>
            <Link href={"/"}>Go back</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
