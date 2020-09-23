import axios from "axios";

export default class SwapiSerivce {
    constructor() {
        this._baseUrl = "https://swapi.dev/api";
        this._imgBaseUrl = 'https://starwars-visualguide.com/assets/img';

        this._api = axios.create({
            baseURL: this._baseUrl,
            responseType: "json",
        });
    }

    /* People */
    getAllPeople = async () => {
        const res = await this.getResource("/people/");
        return res.data.results.map(item => this._transformPerson(item));
    }

    getPerson = async (id) => {
        const res = await this.getResource(`/people/${id}/`);
        return this._transformPerson(res.data);
    }

    getPersonImgSrc = ({ id }) => {
        return `${this._imgBaseUrl}/characters/${id}.jpg`;
    }

    /* Planets */
    getAllPlanets = async () => {
        const res = await this.getResource("/planets/");
        return res.data.results.map(item => this._transformPlanet(item));
    }

    getPlanet = async (id) => {
        const res = await this.getResource(`/planets/${id}/`);
        return this._transformPlanet(res.data);
    }

    getPlanetImgSrc = ({ id }) => {
        return `${this._imgBaseUrl}/planets/${id}.jpg`;
    }

    /* Starships */
    getAllStarships = async () => {
        const res = await this.getResource("/starships/");
        return res.data.results.map(item => this._transformStarship(item));
    }

    getStarship = async (id) => {
        const res = await this.getResource(`/starships/${id}/`);
        return this._transformStarship(res.data);
    }

    getStarshipImgSrc = ({ id }) => {
        return `${this._imgBaseUrl}/starships/${id}.jpg`;
    }

    /* Help Functions */
    async getResource(uri) {
        try {
            return await this._api.get(uri);
        } catch (e) {
            console.error(`Request error from ${this._baseUrl + uri}`, e);
        }
    }
    
    _extractId(data) {
        const idRegExp = /\/([0-9]*)\/$/;
        return data.url.match(idRegExp)[1];
    }

    _transformPlanet(data) {
        return {
            id: this._extractId(data),
            name: data.name,
            population: data.population,
            rotationPeriod: data.rotation_period,
            diameter: data.diameter,
        };
    }

    _transformPerson(data) {
        return {
            id: this._extractId(data),
            name: data.name,
            gender: data.gender,
            birthYear: data.birth_year,
            eyeColor: data.eye_color
        }
    }

    _transformStarship(data) {
        return {
            id: this._extractId(data),
            name: data.name,
            model: data.model,
            manufacturer: data.manufacturer,
            costInCredits: data.cost_in_credits,
            length: data.length,
            crew: data.crew,
            passengers: data.passengers,
            cargoCapacity: data.cargo_capacity
        }
    }
}
