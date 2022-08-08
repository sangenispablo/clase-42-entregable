import axios from "axios";

const getUsers = async () => {
  try {
    const response = await axios.get("http://localhost:3000/users");
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

getUsers();
