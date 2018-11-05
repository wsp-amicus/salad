import "regenerator-runtime/runtime"
import request from 'supertest'
import server from '../server/app'

const randomString =
  Math.random()
    .toString(36)
    .substring(2, 15) +
  Math.random()
    .toString(36)
    .substring(2, 15);

const user = {
  firstName: randomString,
  lastName: randomString,
  email: `${randomString}@email.com`,
  username: randomString,
  password: "password"
};

describe("POST /users/register", () => {
  it('should return "You are ready to login!"', async (done) => {
    const res = await request(server)
      .post("/users/register")
      .set("Content-Type", "application/json")
      .send(JSON.stringify(user))
      .expect(200)
    expect(res.text).toBe("You are ready to login!");
    done();
  });
});

describe("POST /users/login",()=>{
  it('should return "You are loged in!"',function(done){
    request(server)
      .post("/users/login")
      .set("Content-Type","application/json")
      .send(JSON.stringify({username:user.username,password:user.password}))
      .expect("Content-Type",/json/)
      .expect(200)
      .expect(function(res) {
        expect(res).toBe("You are loged in");
      });
    done();
  })
})
