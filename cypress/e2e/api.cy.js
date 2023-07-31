describe("Football Data API Tests", () => {
    it("should return status code 200", () => {
      cy.request({
        method: "GET",
        url: "https://api.football-data.org/v4/matches",
      }).then((response) => {
        expect(response.status).to.eq(200);
      });
    });
  
    it("should return status code 401 unauthorized", () => {
      cy.request({
        method: "GET",
        url: "https://api.football-data.org/v4/matches",
      }).then((response) => {
        expect(response.status).to.eq(401);
      });
    });
  
    it("should return status code 304 not modified", () => {
      cy.request({
        method: "GET",
        url: "https://api.football-data.org/v4/matches",
      }).then((response) => {
        expect(response.status).to.eq(304);
      });
    });
  
    it("should return valid JSON data", () => {
      cy.request({
        method: "GET",
        url: "https://api.football-data.org/v4/matches",
      }).then((response) => {
        expect(response.headers["content-type"]).to.include("application/json");
      });
    });
  });  