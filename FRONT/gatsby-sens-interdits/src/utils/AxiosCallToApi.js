import axios from "axios";

function AxiosCallToApi(uri, dataTreatment) {
  const path = "http://localhost:1337/";
  axios
    .get(path + uri)
    .then(response => response.data)
    .then(data => dataTreatment(data));
}

export default AxiosCallToApi;
