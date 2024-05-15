// All Data available In The url
// https://sudhanshu1919.github.io/Dummy_Data/Data.json

fetch("https://sudhanshu1919.github.io/Dummy_Data/Data.json")
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((error) => console.log("Error Fetching Data >> ", error));
