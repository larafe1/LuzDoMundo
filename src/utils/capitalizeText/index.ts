export const capitalizeText = (rawTxt: string, idx = 0): string => {
  if (!rawTxt.length) return rawTxt;

  if (!isNaN(+rawTxt[idx])) return capitalizeText(rawTxt, idx + 1);

  const previousNonStringTxt = rawTxt.slice(0, idx);
  const capitalizedTxt =
    rawTxt.charAt(idx).toUpperCase() + rawTxt.slice(idx + 1);

  const parsedTxt =
    idx > 0 ? previousNonStringTxt + capitalizedTxt : capitalizedTxt;
  return parsedTxt;
};
