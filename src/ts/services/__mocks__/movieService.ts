import { IMovie } from "../../models/Movie";

export const moviesMock: IMovie[] = [
    {
        Title: 'The Shawshank Redemption', Poster: 'N/A',
        imdbID: '',
        Type: '',
        Year: ''
    },
    {
        Title: 'The Godfather', Poster: 'N/A',
        imdbID: '',
        Type: '',
        Year: ''
    }
  ];
export const getMovies = async (): Promise<IMovie[]> => {
    return new Promise ((resolve) => {
        resolve (moviesMock);
    })
};