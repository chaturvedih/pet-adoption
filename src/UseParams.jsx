import { useEffect, useState } from "react";
import useBreedlist from "./useBreedlist";
import Results from "./Results";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const UseParams = () => {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [pets, setPets] = useState([]);
  const { breedList } = useBreedlist(animal);

  useEffect(() => {
    requestPets();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function requestPets() {
    try {
      const res = await fetch(
        `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
      );

      const json = await res.json();
      setPets(json.pets);
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestPets();
        }}
      >
        <label htmlFor="location"> Location </label>
        <input value={location} onChange={(e) => setLocation(e.target.value)} />

        <label htmlFor="animal"> Animal </label>
        <select value={animal} onChange={(e) => setAnimal(e.target.value)}>
          <option></option>
          {ANIMALS.map((item) => (
            <option key={item} value={item}>
              {" "}
              {item}{" "}
            </option>
          ))}
        </select>

        <label htmlFor="breed"> Breed </label>
        <select value={breed} onChange={(e) => setBreed(e.target.value)}>
          <option></option>
          {breedList.map((item) => (
            <option key={item} value={item}>
              {" "}
              {item}{" "}
            </option>
          ))}
        </select>

        <button> Submit </button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default UseParams;
