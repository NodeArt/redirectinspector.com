export const cutString = (tag: HTMLBaseElement): void => {
  const cutLength = 70;
  tag.innerText = tag.innerText.substring(0, cutLength) + (tag.innerText.length > cutLength ? '...' : '');
};
