const addOrder = async (body) => {
  try {
    let response = await fetch(`http://localhost:4000/order/${body.userId}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

const getOrder = async (body) => {
  try {
    let response = await fetch(`http://localhost:4000/order/${body}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

export { addOrder, getOrder };
