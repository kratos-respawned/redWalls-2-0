export default function handler(req, resp) {
  console.log(req.body.msg);
  resp.status(200).json("hrll");
}
