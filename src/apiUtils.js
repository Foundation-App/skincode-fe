import request from 'superagent';

const localURL = 'http://localhost:7890';

export async function getTest() {
  const response = await request.get(`${localURL}/test`);
  return response.body;
}

export async function postImage(photo) {
  const response = await request
    .post(`${localURL}/imageurl`)
    .send([{ input: photo }]);

  console.log(response.body, 'API');

  return response.body;
}

export async function postAuthImage(photo) {
  const response = await request
    .post(`${localURL}/api/v1/auth/imageurl`)
    .send([{ input: photo }]);

  console.log(response.body, 'API');

  return response.body;
}

export async function login(email, password) {
  console.log(email, password, 'email,pass');
  const response = await request
    .post(`${localURL}/api/v1/auth/login`)
    .send({ email, password });

  console.log(response.body, 'This is the login function');

  return response.body;
}
