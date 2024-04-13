const prductApiLogin = fetch("https://dummyjson.com/auth/login", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    username: "atuny0",
    password: "9uQFF1Lh",
    expiresInMins: 60, // optional, defaults to 60
  }),
}).then((res) => {
  const loginRes = res.json();
  return loginRes;
});

const getToken = await prductApiLogin;
const myApiToken = getToken.token;
export default myApiToken;
