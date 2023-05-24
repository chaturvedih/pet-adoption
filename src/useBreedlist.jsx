import { useEffect, useState } from "react";

const localCache = {};

export default function useBreedlist(animal) {
  const [breedList, setBreedList] = useState([]);
  const [status, setStatus] = useState("unloaded");

  useEffect(() => {
    setBreedList([]);
    setStatus("loading");

    if (!animal) {
      setBreedList([]);
    } else if (localCache[animal]) {
      setBreedList(localCache[animal]);
    } else {
      requestBreed();
    }

    async function requestBreed() {
      const res = await fetch(
        `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
      );
      const json = await res.json();

      localCache[animal] = json.breeds || [];
      setBreedList(localCache[animal]);
      setStatus("loaded");
    }
  }, [animal]);

  return { breedList, status };
}
