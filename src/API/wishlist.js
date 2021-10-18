const addWish = async (body) => {
  try {
    let response = await fetch(
      `http://localhost:4000/wishlist/${body.userId}`,
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

const getWish = async (body) => {
  try {
    let response = await fetch(`http://localhost:4000/wishlist/${body}`, {
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

const deleteWish = async (body) => {
  try {
    let response = await fetch(`http://localhost:4000/wishlist/${body}`, {
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

export { addWish, getWish, deleteWish };
