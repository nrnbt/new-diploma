export const formatNum = (num: number) => {
  return new Intl.NumberFormat().format(num || 0);
};
export const dollarNum = (num: number) =>
  new Intl.NumberFormat("ja-JP", {
    currency: "USD",
    maximumFractionDigits: 2,
    minimumFractionDigits: 0
  }).format(num || 0);

export const numberWithCommas = (number: string) => {
  const parts = number.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
};

export const isNumeric = (str: string | number) => {
  if (typeof str != "string") return false;
  return !isNaN(+str) && !isNaN(parseFloat(str));
};
