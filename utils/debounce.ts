export const debounce = (callback: Function, ms: number) => {
  let timeoutID: any;

  const debouncedFn = (...args: any) => {
    console.log(timeoutID);
    if (timeoutID) {
      clearTimeout(timeoutID);
    }
    timeoutID = setTimeout(() => callback(...args), ms);
  };

  return debouncedFn;
};
