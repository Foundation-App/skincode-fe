import request from 'superagent';



const localURL = 'http://localhost:7890';

export async function getTest() {
    const response = await request
    .get(`${localURL}/test`)
    return response.body
}

export async function postImage(photo) {
    const response = await request
    .post(`${localURL}/imageurl`)
    .send([{input: photo}])

    console.log(response.body, 'API')

    return response.body
}

