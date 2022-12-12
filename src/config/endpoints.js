export const HEADERS = {};
export const baseUrl = '/constants/';

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
    },
    ParticipantsList: {
        Endpoint: 'participants.json',
        Method: HttpMethod.Get
    }
  }
};

export default ApiRoutes;
