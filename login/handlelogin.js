import axios from "axios";

const handlelogin = async (loginInformation) => {
  return axios
    .post("http://localhost:8080/login", loginInformation)
    .then((res) => res.json());
};

export default handlelogin;
