export const toCents = (amount: number) => {
  return Math.round(amount * 100);
};

export const fromCents = (cents: number) => {
  return (cents / 100).toFixed(2);
};
