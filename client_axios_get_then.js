import axios from "axios";

const getUsers = () => {
  axios
    .get("http://localhost:3000/users")
    .then((result) => {
      console.log(result.data);
    })
    .catch((err) => {
      console.error(err);
    });
};

getUsers();
