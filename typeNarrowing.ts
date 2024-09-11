interface Movie {
  name: string;
  runTime: number;
}

interface TvShow {
  name: string;
  episodes: number;
  episodeDuration: number;
}

const movie: Movie = {
  name: "BGM",
  runTime: 4,
};

const tvShow: TvShow = {
  name: "WWE",
  episodes: 1600,
  episodeDuration: 3,
};

const getRunTime = (media: Movie | TvShow) => {
  if ("episodes" in media) {
    console.log(media.episodes);
  } else {
    console.log(media.runTime);
  }
};

// Discriminated unions
interface Rooster {
  name: string;
  weight: number;
  age: number;
  kind: "rooster";
}

interface Cow {
  name: string;
  weight: number;
  age: number;
  kind: "cow";
}

interface Pig {
  name: string;
  weight: number;
  age: number;
  kind: "pig";
}

interface Sheep {
  name: string;
  weight: number;
  age: number;
  kind: "sheep";
}

type FarmAnimal = Rooster | Cow | Pig | Sheep;

function getFarmAnimalSound(animal: FarmAnimal) {
  switch (animal.kind) {
    case "pig":
      return "Oink";
      break;

    case "cow":
      return "Mooh";
      break;

    case "rooster":
      return "Roost Roost";
      break;

    case "sheep":
      return "Baaa";
      break;

    default:
      // We Should Never Make it here, if we handle al cases correctly
      const _exhaustiveCheck: never = animal;
      return _exhaustiveCheck;
  }
}

const geeta: Cow = {
  name: "Geeta",
  weight: 40,
  age: 4,
  kind: "cow",
};

getFarmAnimalSound(geeta);
