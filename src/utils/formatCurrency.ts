export const formatCurrency = (value: number, style: string, currency: string): string => {
  return value.toLocaleString("it-IT", { style: style, currency: currency });
};
