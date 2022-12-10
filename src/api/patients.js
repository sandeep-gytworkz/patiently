import HttpClient from './index';
import ApiRoutes, { baseUrl } from '../config/endpoints';

export default class AdminAPI extends HttpClient {
    constructor() {
        super(baseUrl);
        this._initializeRequestInterceptor();
    }

    patients = ApiRoutes.Admin.PatientsList;

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
}
