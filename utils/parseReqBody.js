const parseReqBody = (req) =>
  new Promise((resolve) => {
    let body = [];
    req
      .on("data", (chunk) => {
        body.push(chunk);
      })
      .on("end", () => {
        body = Buffer.concat(body).toString();
        resolve(body);
      });
  });

module.exports = parseReqBody;
