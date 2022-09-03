
export const changeSelectValue = (
  optionID: number,
  currentValue: number[],
  isMultiSelectActive: boolean
): number[] => {
  const isOptionIDInCurrentValue = currentValue.includes(optionID);

  if (isOptionIDInCurrentValue) {
    return currentValue.filter((option) => option !== optionID);
  } else {
    return isMultiSelectActive ? [optionID, ...currentValue] : [optionID];
  }
};
