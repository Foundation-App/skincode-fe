import request from 'superagent';

// const localURL = 'http://localhost:7894';
const localURL = 'https://skincode123.herokuapp.com';

export async function getTest() {
  const response = await request.get(`${localURL}/test`);
  return response.body;
}

export async function postImage(photo, token) {
  const response = await request
    .post(`${localURL}/imageurl`)
    .set('Authorization', token)
    .send([{ input: photo }]);

  return response.body;
}

export async function postAuthImage(photo) {
  const response = await request
    .post(`${localURL}/api/imageurl`)
    .withCredentials()
    .send([{ input: photo }]);

  return response.body;
}

export async function login(email, password) {
  const response = await request
    .post(`${localURL}/auth/login`)
    .withCredentials()
    .send({ email, password });

  return response.body;
}

export async function logout() {
  await request.post(`${localURL}/auth/logout`).withCredentials();
}

export async function signup(name, email, password) {
  const response = await request
    .post(`${localURL}/auth/signup`)
    .withCredentials()
    .send({ name, email, password });

  return response.body;
}

export function putUserInLocalStorage(user) {
  localStorage.setItem('USER', JSON.stringify(user));
}

export function putCloudinaryInLocalStorage(user) {
  localStorage.setItem('CLOUD', JSON.stringify(user));
}

export function putDateInLocalStorage(user) {
  localStorage.setItem('DATE', JSON.stringify(user));
}

export function getCloudFromLocalStorage() {
  let user = localStorage.getItem('CLOUD');

  user = JSON.parse(user);
  return user;
}

export function getDateFromLocalStorage() {
  let user = localStorage.getItem('DATE');

  user = JSON.parse(user);

  return user;
}

export async function postFavorites(
  username,
  makeup_name,
  image_link,
  brand,
  color,
  hex,
  product_link,
  date_added
) {
  const response = await request
    .post(`${localURL}/api/favorites`)
    .withCredentials()
    .set('Accept', 'application/json')
    .send({
      username,
      makeup_name,
      image_link,
      brand,
      color,
      hex,
      product_link,
      date_added
    });

  return response.body;
}

export async function getFavorites() {
  const response = await request
    .get(`${localURL}/api/favorites`)
    .withCredentials();

  return response.body;
}

export async function getFavoritesById(id) {
  const response = await request
    .get(`${localURL}/api/favorites/${id}`)
    .withCredentials();

  return response.body;
}

export function getUserFromLocalStorage() {
  let user = localStorage.getItem('USER');

  user = JSON.parse(user);

  return user;
}

export function verifyUser() { 
  return fetch(`${localURL}/auth/verify`, {
    credentials: 'include'
  })
  .then(res => Promise.all([res.ok, res.json()]))
          .then(([ok, json]) => {
              if (!ok) throw json;
              return json;
          })
}
