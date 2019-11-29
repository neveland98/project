import axios from "axios";



export const getItems = (userData) => dispatch => {
    console.log(userData);
    axios
      .post("/api/apps/links", userData).then(res => {
        console.log(res);
      })
}