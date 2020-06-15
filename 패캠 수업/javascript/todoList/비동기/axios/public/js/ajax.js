const axios = require('axios').default;

//

async function getUser() {
  try {
    const res = await axios.get('http://localhost:9000/todos');
    console.log(res.data);
  } catch (error) {
    console.error(error);
  }
}
getUser();
