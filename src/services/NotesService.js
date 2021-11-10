import httpClient from "../http-common";

const getAll = () => {
    return httpClient.get("/notes");
}

export default { getAll };