import request from "supertest";
import app from "../app.js";

describe("API Tests", () => {
  it("GET /api/status", async () => {
    const res = await request(app).get("/api/status");
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe("API is running");
  });

  it("GET /api/error", async () => {
    const res = await request(app).get("/api/error");
    expect(res.statusCode).toBe(500);
    expect(res.body.error).toBe("Simulated server error");
  });
});
