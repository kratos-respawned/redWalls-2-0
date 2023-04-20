export const fetcher = (url: string) =>
  fetch(`https://www.reddit.com/r${url}`).then((res) => res.json());
