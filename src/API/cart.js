const addCart = async (body) => {
  try {
    let response = await fetch(
      `http://localhost:4000/cart/${body.products.userId}`,
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      }
    );
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

const getCart = async (body) => {
  try {
    let response = await fetch(`http://localhost:4000/cart/${body.userId}`, {
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

const deleteCart = async (id) => {
  try {
    let response = await fetch(`http://localhost:4000/cart/${id}`, {
      method: 'DELETE',
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

export { addCart, getCart, deleteCart };
