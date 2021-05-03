import axios from "axios";
const header ={'Content-Type':'application/json'}

export const apiwp=axios.create({
    baseURL: `https://camarasogamoso.org/wp-json/wp/v2/`,
    headers:header
});

export const apicf=axios.create({
    baseURL: `https://camarasogamoso.org/wp-json/wp/v2/`,
    headers:header
});
