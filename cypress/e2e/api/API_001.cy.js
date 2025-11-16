it.skip("Register a new user in Elsa API", () => {
  const random_id = Math.floor(10000000000000000000 + Math.random() * 90000000000000000000);
  const email = `AutoTest${random_id}@yopmail.com`;
  const password = "Aa12345";

  cy.request({
    method: "POST",
    url: "https://pool.elsanow.io/sl-api/api/register/basic",
    headers: {
      accept: "application/json, text/plain, */*",
      "content-type": "application/json",
      "g-captcha": "YOUR_GCAPTCHA_TOKEN_HERE",
      "sl-source-app": "silent_listener_web",
      "x-auto-login": "true",
      "x-session-token": token,
    },
    body: {
      full_name: email,
      email: email,
      password: password,
    },
  }).then((response) => {
    cy.log("Response: ", response.body);
    expect(response.status).to.eq(201);
    expect(response.body).to.have.property("message");
  });
});
