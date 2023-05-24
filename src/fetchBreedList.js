async function fetchBreedList({ queryKey }) {
  const { animal, location, breed } = queryKey;
  const apiRes = await fetch(
    `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
  );

  if (!apiRes.ok) {
    throw new Error("Animal details not found");
  }

  return apiRes.json();
}

export default fetchBreedList;
