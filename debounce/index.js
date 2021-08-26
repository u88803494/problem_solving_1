const func = () => {
  // do anything
}

const debounce = (func, delay = 250) => {
  let timeoutId;
  return (...args) => {
    if (timeoutId) {
      clearTimeout(timeoutId)
    }
    timeoutId = setTimeout(() => {
      func(...args)
      timeoutId = null
    }, delay)
  }
}

const debounceFunc = debounce(func, delay);
