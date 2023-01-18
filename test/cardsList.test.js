const { expect } = require("chai");
const { getCardsList } = require("../endPoints/cardsList");
const { generateToken } = require("../utility/jwtGenerator");

describe("Cards list tests", async () => {
  var token = "";
  before(async function () {
    token = await generateToken("324234110", "0038266063", "132");
    // console.log(token);
  });

  it("Success get cards list", async () => {
    const response = await getCardsList(token);
    //console.log(response.data);
    expect(response.status).equal(200);
  });
});
