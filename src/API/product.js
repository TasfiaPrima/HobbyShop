const createProduct = async (user) => {
  try {
    let response = await fetch('http://localhost:4000/products', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      body: user,
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

const getProduct = async () => {
  try {
    let response = await fetch('http://localhost:4000/products', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

export { createProduct, getProduct };
