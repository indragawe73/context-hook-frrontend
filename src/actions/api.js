  let backendHost;
  const hostname = window && window.location && window.location.hostname;

  if(hostname === 'https://indragawe-df414.web.app/') {
    backendHost = 'https://swapi.dev/api/';
  } else if(hostname === 'http://localhost:3000') {
    backendHost = 'https://swapi.dev/api/';
  } else {
    backendHost = process.env.REACT_APP_BACKEND_HOST || 'https://swapi.dev/api/';
  }
  console.log('REACT_APP_API backendHost', backendHost)

  export const API_LINK = backendHost;