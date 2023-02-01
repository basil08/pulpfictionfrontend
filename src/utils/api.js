const PULP_FICTION_API_URL = 'http://localhost:8080';

const JWT_KEY = 'PF_JWT_TOKEN';
const getJWT = () => localStorage.getItem(JWT_KEY);
const setJWT = (token) => localStorage.setItem(JWT_KEY, token);
const delJWT = () => localStorage.removeItem(JWT_KEY);

const headers = () => ({
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${getJWT()}`,
});

async function loginUser(username, password) {
  const res = await fetch(`${PULP_FICTION_API_URL}/auth/loginUser`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  });

  if (res.status === 201) {
    const data = await res.json();
    setJWT(data['access_token']);
    return { error: false, message: res.statusText };
  }

  if (res.status === 401) {
    return {
      error: true,
      message: res.statusText,
      response: await res.json()
    }
  }

  return { error: true, message: await res.json() };
}

async function createUser(email, username, password) {
  console.log("username", username);
  console.log("password", password);
  console.log("email", email);
  const res = await fetch(`${PULP_FICTION_API_URL}/auth/createUser`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username: username, password: password, email: email })
  });

  if (res.status === 201) {
    return { error: false, message: await res.json() };
  } else if (res.status === 400) {
    return { error: true, message: res.text() };
  }
  return { error: true, message: await res.json() };
}

async function getUserProfile() {
  const res = await fetch(`${PULP_FICTION_API_URL}/auth/getUserProfile`, {
    method: 'GET',
    headers: headers()
  });

  if (res.status === 200) {
    return { error: false, message: res.statusText, data: await res.json() };
  } else if (res.status === 401) {
    return { error: true, message: await res.json() };
  }
  return { error: true, message: await res.json() };
}

function logoutUser() {
  delJWT();
}

function checkJWT() {
  return getJWT() != null;
}

async function getMovie(id) {
  const res = await fetch(`${PULP_FICTION_API_URL}/api/getMovie?id=${id}`, {
    method: 'GET',
    headers: headers(),
  });

  if (res.status === 200) {
    const data = await res.json();
    console.log(data);
    return { error: false, message: res.statusText, data: data};
  }
  return { error: true, message: await res.json() };
}

export { loginUser, getMovie, logoutUser, checkJWT, createUser, getUserProfile };

