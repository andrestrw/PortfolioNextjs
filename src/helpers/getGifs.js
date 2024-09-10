export const GetGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=liutH7GoK7RKtdYkipkC7zrgYAdkzoH5&q=${category}&limit=10`;
  const response = await fetch(url);
  const { data } = await response.json();

  return data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));
};
