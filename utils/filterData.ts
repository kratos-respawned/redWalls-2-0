import type { CardData } from "../typings/CardData";

export const filterData = (arr: any) => {
  let data: CardData[] = [];
  arr
    .filter((item: any) => {
      return (
        typeof item.data.preview !== "undefined" &&
        item.data.is_video !== true &&
        item.data.over_18 !== true
      );
    })
    .map((item: any) => {
      if (item.data.preview.images[0].resolutions[3] === undefined) return;
      data.push({
        title: item.data.title,
        author: item.data.author,
        subreddit: item.data.subreddit,
        width: item.data.preview.images[0].resolutions[2].width,
        height: item.data.preview.images[0].resolutions[2].height,
        img:
          item.data.preview.images[0].resolutions[2].width >
          item.data.preview.images[0].resolutions[2].height
            ? item.data.preview.images[0].resolutions[3].url
            : item.data.preview.images[0].resolutions[2].url,
        url: item.data.url,
      });
    });
  if (data.length === 0) return [];
  return data;
};
