import HttpClient from './index';
import ApiRoutes, { baseUrl } from '../config/endpoints';

export default class AdminAPI extends HttpClient {
    constructor() {
        super(baseUrl);
        this._initializeRequestInterceptor();
    }

    patients = ApiRoutes.Admin.PatientsList;
    participants = ApiRoutes.Admin.ParticipantsList;

    _initializeRequestInterceptor = () => {
        this.instance.interceptors.request.use(this._handleRequest);
    };

    _handleRequest = async axiosConfig => {
        return axiosConfig;
    };

    getPosts = () => {
        return this.instance({
            method: this.patients.Method,
            url: this.patients.Endpoint,
            headers: {},
            data: undefined
        })
    }

    getParticipants = () => {
        return this.instance({
            method: this.participants.Method,
            url: this.participants.Endpoint,
            headers: {},
            data: undefined
        })
    }
}
