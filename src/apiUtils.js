import request from 'superagent';

const localURL = 'http://localhost:7893';

export async function getTest() {
  const response = await request.get(`${localURL}/test`);
  return response.body;
}

export async function postImage(photo, token) {
  const response = await request
    .post(`${localURL}/imageurl`)
    .set('Authorization', token)
    .send([{ input: photo }]);

  console.log(response.body, 'API');

  return response.body;
}

export async function postAuthImage(photo, token) {
  const response = await request
    .post(`${localURL}/api/imageurl`)
    .withCredentials()
    .set('Authorization', token)
    .send([{ input: photo }]);

  console.log(response.body, 'API LOOOK');

  return response.body;
}

export async function login(email, password) {
  console.log({ email, password }, 'email,pass');
  const response = await request
    .post(`${localURL}/auth/login`)
    .withCredentials()
    .send({ email, password });

  console.log(response.body, 'POOP');
  return response.body;
}

export async function signup(name, email, password) {
  console.log(name, email, password, 'name, email, pass');
  const response = await request
    .post(`${localURL}/auth/signup`)
    .withCredentials()
    .send({ name, email, password });

  console.log(response.body, 'This is the signup function');
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

  console.log(user, 'WHERE ARE YOU');

  return user;
}

export function getDateFromLocalStorage() {
  let user = localStorage.getItem('DATE');

  user = JSON.parse(user);

  console.log(typeof user, 'WHERE ARE YOU');

  return user;
}



//GET FAVORITES

export async function postFavorites(username, makeup_name,  image_link, brand, color, hex, product_link, date_added) {
  console.log({ username, makeup_name,  image_link, brand, color, hex, product_link, date_added }, 'POST FAVORITES FUNCTION UTILS');
  const response = await request
    .post(`${localURL}/api/favorites`)
    .withCredentials()
    //.set('Authorization', token)
    .set('Accept', 'application/json')
    .send({ username, makeup_name,  image_link, brand, color, hex, product_link, date_added});

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

  console.log(typeof user.id, 'WHERE ARE YOU');

  return user.id;
}
