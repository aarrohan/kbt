"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";

export default function Form() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <form className="mx-auto max-w-[350px] flex flex-col gap-3">
      <Input
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setUsername(e.target.value);
        }}
        value={username}
        type="text"
        placeholder="Username"
        required
      />

      <div className="relative">
        <Input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setPassword(e.target.value);
          }}
          value={password}
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          required
        />

        <Button
          onClick={() => {
            setShowPassword(!showPassword);
          }}
          type="button"
          variant={"ghost"}
          size={"icon"}
          className="absolute top-1/2 right-0 -translate-y-1/2"
        >
          {showPassword ? (
            <Eye className="w-4 h-4" />
          ) : (
            <EyeOff className="w-4 h-4" />
          )}
        </Button>
      </div>

      <div className="my-2 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Checkbox id="terms" />

          <label htmlFor="terms" className="text-sm">
            Remember me
          </label>
        </div>

        <Link href="/reset-password" className="text-sm hover:underline">
          Forgot password?
        </Link>
      </div>

      <Button>Sign in</Button>
    </form>
  );
}
