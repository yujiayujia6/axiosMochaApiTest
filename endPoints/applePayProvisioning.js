const { newAxiosInstance, newAxiosInstance1 } = require("../utility/common");
const { getCardKey } = require("./cardsList");

const certificates0 =
  "MIID\\/jCCA6OgAwIBAgIINITLaqFSgg4wCgYIKoZIzj0EAwIwgYAxNDAyBgNVBAMMK" +
  "0FwcGxlIFdvcmxkd2lkZSBEZXZlbG9wZXIgUmVsYXRpb25zIENBIC0gRzIxJjAkBgNV" +
  "BAsMHUFwcGxlIENlcnRpZmljYXRpb24gQXV0aG9yaXR5MRMwEQYDVQQKDApBcHBsZSB" +
  "JbmMuMQswCQYDVQQGEwJVUzAeFw0yMjA2MDYxNzUyNDNaFw0yNDA3MDUxNzUyNDJaMG" +
  "wxMjAwBgNVBAMMKWVjYy1jcnlwdG8tc2VydmljZXMtZW5jaXBoZXJtZW50X1VDNi1QU" +
  "k9EMRQwEgYDVQQLDAtpT1MgU3lzdGVtczETMBEGA1UECgwKQXBwbGUgSW5jLjELMAkG" +
  "A1UEBhMCVVMwWTATBgcqhkjOPQIBBggqhkjOPQMBBwNCAASzCVyQGX3syyW2aI6nyfN" +
  "Qe+vjjzjU4rLO0ZiWiVZZSmEzYfACFI8tuDFiDLv9XWrHEeX0\\/yNtGVjwAzpanWb" +
  "\\/o4ICGDCCAhQwDAYDVR0TAQH\\/BAIwADAfBgNVHSMEGDAWgBSEtoTMOoZichZZlO" +
  "gao71I3zrfCzBHBggrBgEFBQcBAQQ7MDkwNwYIKwYBBQUHMAGGK2h0dHA6Ly9vY3NwL" +
  "mFwcGxlLmNvbS9vY3NwMDMtYXBwbGV3d2RyY2EyMDUwggEdBgNVHSAEggEUMIIBEDCC" +
  "AQwGCSqGSIb3Y2QFATCB\\/jCBwwYIKwYBBQUHAgIwgbYMgbNSZWxpYW5jZSBvbiB0a" +
  "GlzIGNlcnRpZmljYXRlIGJ5IGFueSBwYXJ0eSBhc3N1bWVzIGFjY2VwdGFuY2Ugb2Yg" +
  "dGhlIHRoZW4gYXBwbGljYWJsZSBzdGFuZGFyZCB0ZXJtcyBhbmQgY29uZGl0aW9ucyB" +
  "vZiB1c2UsIGNlcnRpZmljYXRlIHBvbGljeSBhbmQgY2VydGlmaWNhdGlvbiBwcmFjdG" +
  "ljZSBzdGF0ZW1lbnRzLjA2BggrBgEFBQcCARYqaHR0cDovL3d3dy5hcHBsZS5jb20vY" +
  "2VydGlmaWNhdGVhdXRob3JpdHkvMDYGA1UdHwQvMC0wK6ApoCeGJWh0dHA6Ly9jcmwu" +
  "YXBwbGUuY29tL2FwcGxld3dkcmNhMi5jcmwwHQYDVR0OBBYEFI5aYtQKaJCRpvI1Dg" +
  "h+Ra4x2iCrMA4GA1UdDwEB\\/wQEAwIDKDASBgkqhkiG92NkBicBAf8EAgUAMAoGCCqG" +
  "SM49BAMCA0kAMEYCIQCuAvrEngGgPMtYGvTRXMtYRWlJpkx+u7fpGmEErdkvjwIhANHu" +
  "ZWywt8EtH2jA9csXpMDj8rh0tmOpT5hcL2D14Wh\\/";
const certificates1 =
  "MIIC9zCCAnygAwIBAgIIb+\\/Y9emjp+4wCgYIKoZIzj0EAwIwZzEbMBkGA1UEAwwSQX" +
  "BwbGUgUm9vdCBDQSAtIEczMSYwJAYDVQQLDB1BcHBsZSBDZXJ0aWZpY2F0aW9uIEF1dG" +
  "hvcml0eTETMBEGA1UECgwKQXBwbGUgSW5jLjELMAkGA1UEBhMCVVMwHhcNMTQwNTA2Mj" +
  "M0MzI0WhcNMjkwNTA2MjM0MzI0WjCBgDE0MDIGA1UEAwwrQXBwbGUgV29ybGR3aWRlIER" +
  "ldmVsb3BlciBSZWxhdGlvbnMgQ0EgLSBHMjEmMCQGA1UECwwdQXBwbGUgQ2VydGlmaWNh" +
  "dGlvbiBBdXRob3JpdHkxEzARBgNVBAoMCkFwcGxlIEluYy4xCzAJBgNVBAYTAlVTMFkwE" +
  "wYHKoZIzj0CAQYIKoZIzj0DAQcDQgAE3fC3BkvP3XMEE8RDiQOTgPte9nStQmFSWAImUx" +
  "nIYyIHCVJhysTZV+9tJmiLdJGMxPmAaCj8CWjwENrp0C7JGqOB9zCB9DBGBggrBgEFBQc" +
  "BAQQ6MDgwNgYIKwYBBQUHMAGGKmh0dHA6Ly9vY3NwLmFwcGxlLmNvbS9vY3NwMDQtYXBw" +
  "bGVyb290Y2FnMzAdBgNVHQ4EFgQUhLaEzDqGYnIWWZToGqO9SN863wswDwYDVR0TAQH\\/" +
  "BAUwAwEB\\/zAfBgNVHSMEGDAWgBS7sN6hWDOImqSKmd6+veuv2sskqzA3BgNVHR8EMDA" +
  "uMCygKqAohiZodHRwOi8vY3JsLmFwcGxlLmNvbS9hcHBsZXJvb3RjYWczLmNybDAOBgNV" +
  "HQ8BAf8EBAMCAQYwEAYKKoZIhvdjZAYCDwQCBQAwCgYIKoZIzj0EAwIDaQAwZgIxANmxx" +
  "zHGI\\/ZPTdDZR8V9GGkRh3En02it4Jtlmr5s3z9GppAJvm6hOyywUYlBPIfSvwIxAPxk" +
  "UolLPF2\\/axzCiZgvcq61m6oaCyNUd1ToFUOixRLal1BzfF7QbrJcYlDXUfE6Wg==";

const applePayProvisionQuery = () => {
  return {
    Data: {
      certificates: [certificates0, certificates1],
      nonce: "4dc2d7ad",
      nonceSignature:
        "40bfbbf7d32857ff7938757e7bfb5050cdab751eff8cb5eff2c0d" +
        "2c1551a62e32061cd6584f1059930f525861c2d359d26dd800755b6907238a803" +
        "64e2942a7570fccd96b55fccefb520734b30d920b80b",
    },
  };
};

const applePayProvisionEndPoint = async (token, cardKey) => {
  if (cardKey === undefined) {
    cardKey = await getCardKey(token);
  }
  return "/cards/" + cardKey + "/applepay-provisioning";
};

const postApplePayProvisioning = async (token, endPoint, query) => {
  if (endPoint === undefined) {
    endPoint = await applePayProvisionEndPoint(token);
  }
  if (query === undefined) {
    query = applePayProvisionQuery();
  }
  // console.log(endPoint);
  // console.log(query);
  const axiosInstance = await newAxiosInstance(token);
  try {
    const response = await axiosInstance.post(endPoint, query);
    return response;
  } catch (error) {
    return error.response;
  }
};

module.exports = {
  applePayProvisionEndPoint,
  applePayProvisionQuery,
  postApplePayProvisioning,
};
