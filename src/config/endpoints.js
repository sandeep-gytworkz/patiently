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
  Particpant: {
    CreateParticipant: {
      Endpoint: '/createParticipant',
      Method: HttpMethod.Post
    },
    ParticipantDetails: {
      Endpoint: '',
      Method: HttpMethod.Post
    },
  },
  Admin: {
    DashboardList: {
        Endpoint: 'participants.json',
        Method: HttpMethod.Get
    },
    ParticipantsList: {
        Endpoint: 'participants.json',
        Method: HttpMethod.Get
    }
  }
};

export default ApiRoutes;
