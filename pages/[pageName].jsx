async function call() {
  const req = { msg: "hello" };
  const data = await axios.post("/api/fetch", req);
  console.log(data);
}
call();
