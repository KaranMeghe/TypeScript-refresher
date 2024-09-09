// Nested Obj
type Song = {
  title: string;
  artist: {
    name: string;
    genre: string;
  };
  album: {
    title: string;
    releaseYear: number;
    trackNumber: number;
  };
  duration: string;
  streaming: {
    spotify: string;
    youtube: string;
  };
  sponsor?: string; //optional
};

const song = {
  title: "Echoes of the Night",
  artist: {
    name: "Starlight Band",
    genre: "Pop",
  },
  album: {
    title: "Moonlight Melodies",
    releaseYear: 2024,
    trackNumber: 3,
  },
  duration: "4:20",
  streaming: {
    spotify: "https://spotify.com/echoes-of-the-night",
    youtube: "https://youtube.com/watch?v=example",
  },
  sponsor: "Airtel Wink",
};

const playSong = (song: Song): string => {
  const { title, streaming } = song;
  return `Link for ${title}: spotify - ${streaming.spotify}, youtube - ${streaming.youtube}.`;
};

const songsLink = playSong(song);
console.log(songsLink);

// Read Only

type User = {
  name: string;
  readonly id: number;
  premium: boolean;
};

const user: User = {
  name: "batdog",
  id: 3338,
  premium: true,
};

// Exersise
type Movie = {
  readonly title: string;
  orignalTtitle?: string;
  director: string;
  realeaseYear: number;
  boxOffice: {
    budget: number;
    grossUs: number;
    grossWorldWide: number;
  };
};

const dune: Movie = {
  title: "Dune",
  orignalTtitle: "Dune Part One",
  director: "Denis villenuve",
  realeaseYear: 2021,
  boxOffice: {
    budget: 165000,
    grossUs: 108274,
    grossWorldWide: 938797499,
  },
};

const cat: Movie = {
  title: "Mickey",
  director: "villenuve",
  realeaseYear: 2021,
  boxOffice: {
    budget: 165000,
    grossUs: 108274,
    grossWorldWide: 938797499,
  },
};

const getProfit = (movie: Movie): number => {
  return movie.boxOffice.budget - movie.boxOffice.grossWorldWide;
};

const profit = getProfit(dune);
console.log(profit);
