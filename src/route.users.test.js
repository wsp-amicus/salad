import "regenerator-runtime/runtime";
import request from "supertest";
import server from "../server/app";

const randomString = Math.random()
  .toString(36)
  .substring(2, 8);

const user = {
  firstName: randomString,
  lastName: randomString,
  email: `${randomString}@email.com`,
  username: randomString,
  password: "password"
};

describe("GET /test", () => {
  test("It should response You are now connected with backend !", done => {
    request(server)
      .get("/test")
      .then(response => {
        expect(response.statusCode).toBe(200);
        expect(response.text).toBe("You are now connected with backend !");
        done();
      });
  });
});

describe("POST /users/register", () => {
  it('should return "You are ready to login!"', async done => {
    const res = await request(server)
      .post("/users/register")
      .set("Content-Type", "application/json")
      .send(JSON.stringify(user))
      .expect(200);
    expect(res.text).toBe("You are ready to login!");
    done();
  });
});

describe("POST /users/login", () => {
  test("should return user", done => {
    request(server)
      .post("/users/login")
      .set("Content-Type", "application/json")
      .send({ username: "w", password: "www" })
      
      // .catch(err => console.log("Err", err));
    .then(response => {
      expect(response.statusCode).toBe(400);
      expect(response.text).toBe("Username or Password is not match");
      done();
    })
  });
});

describe("DELETE /users/delete", () => {
  it('should return "done"', async done => {
    const res = await request(server)
      .delete("/users/delete")
      .set("Content-Type", "application/json")
      .send({ username: user.username })
      .expect(200)
      .catch(err => console.log("Err", err));
    expect(res.text).toBe("done");
    done();
  });
});
