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
  console.log({email, password}, 'email,pass');
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
      .send({name, email, password });
  
    console.log(response.body, 'This is the signup function');
    return response.body;
  }



  export function putUserInLocalStorage(user) {
    localStorage.setItem('USER', JSON.stringify(user));
  }

  //GET FAVORITES

  export async function postFavorites(makeup_name, username) {
      console.log({ makeup_name, username }, 'POST FAVORITES FUNCTION UTILS')
    const response = await request
      .post(`${localURL}/api/favorites`)
      .withCredentials()
      //.set('Authorization', token)
      .set('Accept', 'application/json')
      .send({ makeup_name, username });
    
    return response.body;
  }



export function getUserFromLocalStorage() {
    let user = localStorage.getItem('USER');
  
    user = JSON.parse(user);

    console.log(user.id)

    return user.id
  }