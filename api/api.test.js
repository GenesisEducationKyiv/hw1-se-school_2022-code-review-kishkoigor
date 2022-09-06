jest.mock("node-fetch");
const fetch = require("node-fetch");

const { Response } = jest.requireActual("node-fetch");
const getBtcRate = require("./index");

const mockBtcRate = 100000.0;
const mockApiResponseBody = `[["",${mockBtcRate},0,0,0,0,0,0,0,0,0]]`;

describe("[unit] getBtcRate", () => {
  test("returns result typeof number if response status 200", async () => {
    fetch.mockReturnValue(
      Promise.resolve(new Response(mockApiResponseBody, { status: 200 }))
    );

    const btcRate = await getBtcRate();
    expect(btcRate).toBe(mockBtcRate);
    expect(typeof btcRate).toBe("number");
  });

  test("throws error if response status not 200", () => {
    fetch.mockReturnValue(Promise.resolve(new Response("", { status: 500 })));

    expect(getBtcRate()).rejects.toThrowError();
  });
});
