import { useQuery } from "@tanstack/react-query";
import fetchPet from "./fetchPet";
import { useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const result = useQuery(["details", id], fetchPet);

  if (result.isError) {
    return <h1> Oh No! Pet not found </h1>;
  }

  if (result.isLoading) {
    <div className="loading-pane">
      <h2 className="loader"> 🌀 </h2>
    </div>;
  }

  // const pet = result?.data.pets[0];
  console.log("pet data ==>", result.isLoading);
  return (
    <div className="details">
      {/* <div>
        <h1> {pet.name} </h1>
        <h2>
          {pet.animal} - {pet.breed} - {pet.city} - {pet.state}
          <button> Adopt {pet.name} </button>
          <p> {pet.description} </p>
        </h2>
      </div> */}
    </div>
  );
};

export default Details;
