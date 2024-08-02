import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function twoCharactersName(name: string) {
  return name.substring(0, 2).toUpperCase();
}

export function numberWithCommas(x: number) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const toCents = (amount: number) => {
  return Math.round(amount * 100);
};

export const fromCents = (cents: number) => {
  return (cents / 100).toFixed(2);
};
