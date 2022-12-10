export const HEADERS = {};
export const baseUrl = process.env.REACT_APP_API_URL || 'https://jsonplaceholder.typicode.com/';

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
        Endpoint: 'posts',
        Method: HttpMethod.Get
    }
  }
};

export default ApiRoutes;
