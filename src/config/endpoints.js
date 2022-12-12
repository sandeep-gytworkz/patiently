export const HEADERS = {};
export const baseUrl = process.env.REACT_APP_API_URL || 'http://localhost:3000/public/constants/';

export const HttpMethod = {
  Get: 'GET',
  Post: 'POST',
  Put: 'PUT',
  Patch: 'PATCH',
  Delete: 'DELETE',
};

const ApiRoutes = {
  Patient: {
    PatientDetails: {
      Endpoint: '',
      Method: HttpMethod.Post
    }
  },
  Admin: {
    PatientsList: {
        Endpoint: 'patients.json',
        Method: HttpMethod.Get
    }
  }
};

export default ApiRoutes;
