import httpClient from "../http-common";

const getAll = () => {
    return httpClient.get("/notes");
}

const create = data => {
    return httpClient.post("/notes", data);

}
const get = id => {
    return httpClient.get(`/notes/${id}`);


}

export default { getAll, create, get };