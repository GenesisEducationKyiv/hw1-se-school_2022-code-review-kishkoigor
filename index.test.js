const fetch = require("node-fetch");
const routes = require("./routes");

const baseUrl = `http://localhost:${process.env.PORT}`;
const validEmail = "test@gmail.com";

require("./index");

jest.setTimeout(15 * 1000);

describe(routes.getRate, () => {
  const endpointUrl = baseUrl + routes.getRate;

  test("responding 200 on GET request", async () => {
    const response = await fetch(endpointUrl);

    expect(response.status).toBe(200);
  });

  test("responding rate typeof number on GET request", async () => {
    const response = await fetch(endpointUrl);
    const rate = await response.json();

    expect(typeof rate).toBe("number");
  });

  test("responding 404 on non-GET request", async () => {
    const response = await fetch(endpointUrl, {
      method: "POST",
    });

    expect(response.status).toBe(404);
  });
});

describe(routes.subscribe, () => {
  const endpointUrl = baseUrl + routes.subscribe;

  test("responding 200 on POST request with valid, unsaved before, email", async () => {
    const response = await fetch(endpointUrl, {
      method: "POST",
      body: validEmail,
    });

    expect(response.status).toBe(200);
  });

  test("responding 409 on POST request with valid, saved before email", async () => {
    const response = await fetch(endpointUrl, {
      method: "POST",
      body: validEmail,
    });

    expect(response.status).toBe(409);
  });

  test("responding 400 on POST request with invalid email", async () => {
    const response = await fetch(endpointUrl, {
      method: "POST",
      body: "2354n2",
    });

    expect(response.status).toBe(400);
  });

  test("responding 404 on not-POST request with valid email", async () => {
    const response = await fetch(endpointUrl, {
      method: "PUT",
      body: validEmail,
    });

    expect(response.status).toBe(404);
  });
});

describe(routes.sendEmails, () => {
  const endpointUrl = baseUrl + routes.sendEmails;

  test("responding 200 on POST request", async () => {
    const response = await fetch(endpointUrl, {
      method: "POST",
    });

    expect(response.status).toBe(200);
  });

  test("responding 404 on not-POST request", async () => {
    const response = await fetch(endpointUrl, {
      method: "PUT",
    });

    expect(response.status).toBe(404);
  });
});
