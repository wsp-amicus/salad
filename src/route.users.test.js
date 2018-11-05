import "regenerator-runtime/runtime"
import request from 'supertest'
import server from '../server/app'

const randomString = Math.random().toString(36).substring(2, 8)

const user = {
  firstName: randomString,
  lastName: randomString,
  email: `${randomString}@email.com`,
  username: randomString,
  password: "password"
}

describe("POST /users/register", () => {
  it('should return "You are ready to login!"', async (done) => {
    const res = await request(server)
      .post("/users/register")
      .set("Content-Type", "application/json")
      .send(JSON.stringify(user))
      .expect(200)
    expect(res.text).toBe("You are ready to login!")
    done()
  })
})

describe("POST /users/login", () => {
  it('should return user', async (done) => {
    const res = await request(server)
      .post("/users/login")
      .set("Content-Type", "application/json")
      .send(JSON.stringify({ username: 'w', password: 'w' }))
      .expect(200)
      .catch(err => console.log('Err', err))
    const loginUser = { firstName: 'w', lastName: 'w', email: 'w@w.com', username: 'w' }
    const { firstName, lastName, email, username } = loginUser
    expect(firstName).toBe(res.body.firstName)
    expect(lastName).toBe(res.body.lastName)
    expect(email).toBe(res.body.email)
    expect(username).toBe(res.body.username)
    done()
  })
})

describe("DELETE /users/delete",()=>{
  it('should return "done"',async (done) => {
    const res = await request(server)
      .delete("/users/delete")
      .set("Content-Type","application/json")
      .send(JSON.stringify({username:'w'}))
      .expect(200)
      .catch(err => console.log('Err', err))
      expect(res.text).toBe("done")
      done()
  })
})