export const noop = () => {};

const removeNgTag = (nativeElement: HTMLElement): void => {
  const parentElement = nativeElement.parentElement;
  if (!parentElement || !parentElement.insertBefore) return;
  while (nativeElement.firstChild) {
    parentElement.insertBefore(nativeElement.firstChild, nativeElement);
  }
  parentElement.removeChild(nativeElement);
};

export const getPathFromUrl = (url: string): string => {
  const idx = url.indexOf("?");
  if (idx === -1) {
    return url;
  }
  return url.substring(0, idx);
};
