import { init } from "./ts/movieApp";

jest.mock("./../sevices.movieService.ts")
describe("Movie App", () => {
    test("it should get movies name and present it", async() => {
        await init();

        const movieDivs = document.querySelectorAll(".movie");
        expect(movieDivs).toHaveLength(2)
    });
});