export const checkIfDisabled = (
  currentValue: string | number,
  targetValue: typeof currentValue
) => targetValue === currentValue && !!targetValue;
