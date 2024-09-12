import axios from "axios";

axios
  .get("https://jsonplaceholder.typecode.com/users/1")
  .then((res) => console.log("Woooo", res.data))
  .catch((e) => console.log("Error", e));
