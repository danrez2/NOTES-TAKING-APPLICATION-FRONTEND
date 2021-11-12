import axios from "axios";

export default axios.create({
    //baseURL: "http://localhost:8080/api",
    baseURL: "https://notesbackend-app.herokuapp.com/api",
    headers: {
        "content-type": "application/json"
    }
})