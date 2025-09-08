export interface MovieInfo {
  id: number;
  title: string;
  release_date: string;
  vote_average: number;
  poster_path: string;
  points?: number;
  userGuess?: number;
}
