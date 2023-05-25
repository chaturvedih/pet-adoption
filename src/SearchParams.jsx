import { useState } from "react";
import useBreedlist from "./useBreedlist";
import Results from "./Results";
import { useParams } from "react-router";
import fetchBreedList from "./fetchBreedList";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  const [requestParams, setRequestParams] = useState({
    animal: "",
    breed: "",
    location: "",
  });

  const [animal, setAnimal] = useState("");
  const { breedList } = useBreedlist(animal);
  const result = useParams(["search", requestParams], fetchBreedList);
  const pets = result?.data?.pets ?? [];

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const form = new FormData();
          setRequestParams({
            animal: form.get("animal") ?? "",
            breed: form.get("breed") ?? "",
            location: form.get("location") ?? "",
          });
        }}
      >
        <label htmlFor="location"> Location </label>
        <input name="location" />

        <label htmlFor="animal"> Animal </label>
        <select
          onChange={(e) => setAnimal(e.target.value)}
          onBlur={(e) => setAnimal(e.target.value)}
          name="animal"
        >
          <option></option>
          {ANIMALS.map((item) => (
            <option key={item} value={item}>
              {" "}
              {item}{" "}
            </option>
          ))}
        </select>

        <label htmlFor="breed"> Breed </label>
        <select name="breed">
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

export default SearchParams;
