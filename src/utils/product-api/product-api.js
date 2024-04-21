const fetchData = async () => {
  const response = await fetch("https://dummyjson.com/products");
  if (!response.ok) {
    throw new Error("Gagal Mengambil Data");
  }
  return response.json();
};

export { fetchData };
