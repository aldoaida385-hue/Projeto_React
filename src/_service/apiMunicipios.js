import axios from "axios";

const apiMunicipios = axios.create({
    baseURL:"https://servicodados.ibge.gov.br/api/v1/localidades"
})

export default apiMunicipios;