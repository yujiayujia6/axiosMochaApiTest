const { expect } = require("chai");
const addContext = require("mochawesome/addContext");
const {
  postApplePayProvisioning,
  applePayProvisionQuery,
} = require("../endPoints/applePayProvisioning");
const { generateToken } = require("../utility/jwtGenerator");

describe("Apple pay provisioning tests", async () => {
  var token = "";
  before(async function () {
    token = await generateToken("324234110", "0038266063", "132");
    // console.log(token);
  });

  it("Success get response with all good parameters", async function () {
    const response = await postApplePayProvisioning(token);
    //console.log(response.data);
    expect(response.status).equal(201);
    addContext(this, {
      title: "response",
      value: response.data,
    });
  });

  it("Bad card key", async function () {
    const endPoint = "/cards/" + "BadCardKey" + "/applepay-provisioning";
    const response = await postApplePayProvisioning(token, endPoint);

    //console.log(response.data);
    expect(response.status).equal(400);
    addContext(this, {
      title: "response",
      value: response.data,
    });
  });

  it("Bad query missing nonce", async function () {
    var query = applePayProvisionQuery();
    delete query.Data.nonce;
    // console.log(query);
    const response = await postApplePayProvisioning(token, undefined, query);
    //console.log(response.data);
    expect(response.status).equal(400);
    addContext(this, {
      title: "query",
      value: query,
    });
    addContext(this, {
      title: "response",
      value: response.data,
    });
  });

  it("Bad query missing nonceSignature", async function () {
    var query = applePayProvisionQuery();
    delete query.Data.nonceSignature;
    const response = await postApplePayProvisioning(token, undefined, query);
    //console.log(response.data);
    expect(response.status).equal(400);
    addContext(this, {
      title: "query",
      value: query,
    });
    addContext(this, {
      title: "response",
      value: response.data,
    });
  });

  it("Bad query missing certificates", async function () {
    var query = applePayProvisionQuery();
    delete query.Data.certificates;
    const response = await postApplePayProvisioning(token, undefined, query);
    // console.log(response.data);
    expect(response.status).equal(400);
    addContext(this, {
      title: "query",
      value: query,
    });
    addContext(this, {
      title: "response",
      value: response.data,
    });
  });

  it("Bad query missing one certificate", async function () {
    var query = applePayProvisionQuery();
    delete query.Data.certificates[0];
    const response = await postApplePayProvisioning(token, undefined, query);
    // console.log(response.data);
    expect(response.status).equal(500);
    addContext(this, {
      title: "query",
      value: query,
    });
    addContext(this, {
      title: "response",
      value: response.data,
    });
  });

  it("Bad query empty nonce", async function () {
    var query = applePayProvisionQuery();
    query.Data.nonce = "";
    const response = await postApplePayProvisioning(token, undefined, query);
    // console.log(response.data);
    expect(response.status).equal(400);
    addContext(this, {
      title: "query",
      value: query,
    });
    addContext(this, {
      title: "response",
      value: response.data,
    });
  });

  it("Bad query empty nonceSignature", async function () {
    var query = applePayProvisionQuery();
    query.Data.nonceSignature = "";
    const response = await postApplePayProvisioning(token, undefined, query);
    // console.log(response.data);
    expect(response.status).equal(400);
    addContext(this, {
      title: "query",
      value: query,
    });
    addContext(this, {
      title: "response",
      value: response.data,
    });
  });

  it("Bad query empty certificates", async function () {
    var query = applePayProvisionQuery();
    query.Data.certificates = ["", ""];
    const response = await postApplePayProvisioning(token, undefined, query);
    // console.log(response.data);
    expect(response.status).equal(400);
    addContext(this, {
      title: "query",
      value: query,
    });
    addContext(this, {
      title: "response",
      value: response.data,
    });
  });
});
