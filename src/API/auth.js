
const register = async (body) => {
    try {
      let response = await fetch('http://localhost:4000/register', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
      return await response.json();
    } 
    catch (error) {
      console.log(error);
    }
  };
  
  const login = async (body) => {
    try {
      let response = await fetch('http://localhost:4000/login', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
      return await response.json();
    } 
    catch (error) {
      console.log(error);
    }
  };
  const update = async ( user) => {
    try {
      let response = await fetch(
        'http://localhost:4000/user/update',
        {
          method: 'PUT',
          headers: {
            Accept: 'application/json',
          
          },
          body: user,
        }
      );
      return await response.json();
    } catch (err) {
      console.log(err);
    }
  };
  export {register,login,update};