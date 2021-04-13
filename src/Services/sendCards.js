export const sendCards = () => {
  return fetch("http://localhost:8888/api/sendCards", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: "ROMAS",
      provider: "visa",
      numberOnfront: true,
      email: "rromikas@gmail.com",
    }),
  }).then((x) => x.json());
};
