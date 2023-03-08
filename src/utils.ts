/**
 * 防抖
 * @param func
 * @param delay
 * @param immediate
 */
export function debounce(func: Function, delay: number, immediate = false) {
  let timer: number | null = null;
  const isDone = immediate;
  return function () {
    //@ts-ignore
    const context = this;
    // eslint-disable-next-line prefer-rest-params
    const args = arguments;
    if (timer) {
      clearTimeout(timer);
    }
    // 立即触发
    if (immediate) {
      func.apply(context, args);
      immediate = false;
    }
    timer = setTimeout(() => {
      func.apply(context, args);
      if (isDone) {
        immediate = true;
      }
    }, delay);
  };
}
