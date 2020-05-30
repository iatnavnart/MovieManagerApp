import Axios from 'axios';
const rest_api_connector = Axios.create();

// class RestControllerService {
//   POST(url, data, option = {}) {
//     return rest_api_connector({
//       url,
//       method: 'POST',
//       data,
//       headers: option,
//     });
//   }

//   GET(url) {
//     return rest_api_connector({
//       url,
//       method: 'GET',
//     });
//   }

//   DELETE(url, option = {}) {
//     return rest_api_connector({
//       url,
//       method: 'DELETE',
//       headers: option,
//     });
//   }
// }

// export default RestControllerService;

export const POST = (url, data, option = {}) => {
  return rest_api_connector({
    url,
    method: 'POST',
    data,
    headers: option,
  });
};

export const GET = url => {
  return rest_api_connector({
    url,
    method: 'GET',
  });
};

export const DELETE = (url, option = {}) => {
  return rest_api_connector({
    url,
    method: 'DELETE',
    headers: option,
  });
};
