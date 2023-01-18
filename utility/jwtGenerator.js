const jwt = require("jsonwebtoken");
const fs = require("fs");

const generateToken = async (teleId, crsNo, cartSessionId) => {
  const privateKey = fs.readFileSync("keys/private.key", "utf8");
  const d = new Date();
  let time = d.getTime();
  const iat = time / 1000;
  const exp = iat + 12 * 60 * 60;
  let payload = {
    sub: teleId,
    exp: exp,
    tokenType: "JWTToken",
    iat: iat,
    crsNo: crsNo,
    encryptionKey: "jajJhQCtp2PY6Qr3WvJHWg0qEzMZLSRuOzuiKAkVh6g=",
    cartSessionId: cartSessionId,
  };
  const token = jwt.sign(payload, privateKey, { algorithm: "RS256" });
  return token;
};

module.exports = {
  generateToken,
};
