import axios from "axios";
import { getMovies } from "../movieServices"
import { moviesMock } from "../ts/services/__mocks__/movieService";

describe("Move service", async () => {
    
    test(" it should return title", async () =>{
        const mockedAxios = jest.spyOn(axios, "get");
        mockedAxios.mockResolvedValue({
            data: moviesMock,
        });
      const movies = await getMovies();
      expect(mockedAxios).toHaveBeenCalled();
      expect(mockedAxios).toHaveBeenCalledWith("...");
      expect (movies).toHaveLength(2);
      expect(movies[0].Title).toBe("spiderman");
    });

    test("it should return handel reject", async () =>{
        const mockedAxios = jest.spyOn(axios,"get");
        mockedAxios.mockRejectedValue({message:"My error"})

        const movies = await getMovies();
        expect (movies).toHaveLength(0);
    });
});