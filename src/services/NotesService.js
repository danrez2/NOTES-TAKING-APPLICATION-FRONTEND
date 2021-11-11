import httpClient from "../http-common";

const getAll = () => {
    return httpClient.get("/notes");
}

const create = data => {
    return httpClient.post("/notes", data);

}

export default { getAll, create };