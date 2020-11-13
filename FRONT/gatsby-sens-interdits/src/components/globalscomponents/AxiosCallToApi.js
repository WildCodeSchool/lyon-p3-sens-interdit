import axios from "axios";

function AxiosCallToApi(uri, dataTreatment) {
  axios
    .get("http://localhost:1337/" + uri)
    .then(response => response.data)
    .then(data => dataTreatment(data));
}

export default AxiosCallToApi;
