const request = require("supertest");
const server = require("../server/app");

const randomString =
  Math.random()
    .toString(36)
    .substring(2, 15) +
  Math.random()
    .toString(36)
    .substring(2, 15);

const user = {
  firstname: randomString,
  lastname: randomString,
  email: `${randomString}@email.com`,
  username: randomString,
  password: "password"
};

describe("POST /users/register", () => {
  it('should return "You are ready to login!"', function(done) {
    request(server)
      .post("/users/register")
      .set("Content-Type", "application/json")
      .send(JSON.stringify(user))
      .expect("Content-Type", /json/)
      .expect(200)
      .expect(function(res) {
        expect(res).toBe("You are ready to login!");
      });
    done();
  });
});
