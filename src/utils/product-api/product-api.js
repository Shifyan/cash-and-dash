const fetchData = async () => {
  try {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    return data.products;
  } catch (error) {
    throw new Error(`Error fetching data: ${error}`);
  }
};

export { fetchData };