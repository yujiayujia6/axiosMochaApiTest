const { expect } = require("chai");
const { generateToken } = require("../utility/jwtGenerator");

describe("Push notification tests", async () => {
  it.only("Success post Push notification api", async () => {
    const response = await generateToken("324234110", "0038266063", "132");
    console.log(response);
    // expect(response.status).equal(200);
  });
});
