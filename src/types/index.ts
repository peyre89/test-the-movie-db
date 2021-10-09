export interface ApiResults {
  results: [];
}

export type Genre = {
  id: number;
  name: string;
};

export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  runtime: number;
  genres: Genre[];
  overview: string;
}
