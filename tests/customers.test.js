import app from "../src/app";
import request from "supertest";

describe("GET /customers", () => {
  test("Deberia responder con un status code 200", async () => {
    let response = await request(app).get("/customers").send();
    // console.log(response);
    expect(response.statusCode).toBe(200);
  });
});
// describe("POST /customers", () => {
//   test("Deberia responder con un objeto", async () => {
//     let response = await request(app).post("/customers").send();
//     console.log(response);
//     expect(response.body).toBeInstanceOf(Object);
//   });
// });
