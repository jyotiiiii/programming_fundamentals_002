const catalogueService = require("../app/catalogue_service");
describe("catalogueService", () => {
  describe("catalogueService.countBooks", () => {
    test("returns the number of books in the list", () => {
      expect(catalogueService.countBooks()).toBe(20);
    });
  });
});
describe("catalogueService", () => {
  describe("catalogueService.checkBook", () => {
    test("returns true if the book exists in the list", () => {
      expect(catalogueService.checkBook("The Blind Assassin by Margaret Atwood")).toBe(true);
    });
  });
});
describe("catalogueService", () => {
  describe("catalogueService.checkBook", () => {
    test("returns false if the book does not exist in the list", () => {
      expect(catalogueService.checkBook("50 Shades of Grey by E.L.James")).toBe(false);
    });
  });
});
describe("catalogueService", () => {
  describe("catalogueService.countBooksByFirstLetter", () => {
    test("returns the number of books beginning with the given letter", () => {
      expect(catalogueService.countBooksByFirstLetter("N")).toBe(1);
    });
  });
});
describe("catalogueService", () => {
  describe("catalogueService.countBooksByFirstLetter", () => {
    test("returns the number of books beginning with the given letter", () => {
      expect(catalogueService.countBooksByFirstLetter("t")).toBe(5);
    });
  });
});
describe("catalogueService", () => {
  describe("catalogueService.countBooksByFirstLetter", () => {
    test("returns the number of books beginning with the given letter", () => {
      expect(catalogueService.countBooksByFirstLetter("j")).toBe(0);
    });
  });
});
describe("catalogueService", () => {
  describe("catalogueService.countBooksByKeyword", () => {
    test("returns how many titles match the given keyword", () => {
      expect(catalogueService.countBooksByKeyword(true)).toBe("This is not valid");
    });
  });
});
describe("catalogueService", () => {
  describe("catalogueService.countBooksByKeyword", () => {
    test("returns how many titles match the given keyword", () => {
      expect(catalogueService.countBooksByKeyword("notAWord")).toBe(0);
    });
  });
});
describe("catalogueService", () => {
  describe("catalogueService.countBooksByKeyword", () => {
    test("returns how many titles match the given keyword", () => {
      expect(catalogueService.countBooksByKeyword("Normal")).toBe(2);
    });
  });
});
describe("catalogueService", () => {
  describe("catalogueService.getBooksByAuthor", () => {
    test("returns how many titles match the given keyword", () => {
      expect(catalogueService.getBooksByAuthor("Charles Dickens")).toEqual(["A Tale of Two Cities by Charles Dickens",
        "Oliver Twist by Charles Dickens",
        "Great Expectations by Charles Dickens"]);
    });
  });
});
describe("catalogueService", () => {
  describe("catalogueService.getBooksByAuthor", () => {
    test("returns how many titles match the given keyword", () => {
      expect(catalogueService.getBooksByAuthor("Not an Author")).toEqual([]);
    });
  });
});
describe("catalogueService", () => {
  describe("catalogueService.getBooksByAuthor", () => {
    test("returns how many titles match the given keyword", () => {
      expect(catalogueService.getBooksByAuthor("Charles")).toEqual(["A Tale of Two Cities by Charles Dickens",
        "Oliver Twist by Charles Dickens",
        "Great Expectations by Charles Dickens", "The Origin of Species by Charles Darwin"]);
    });
  });
});