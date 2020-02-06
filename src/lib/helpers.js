const url = 'http://localhost:3000';

export const checkCredentials = async data => {
  try {
    const res = await (
      await fetch(`${url}/users/login`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include'
      })
    ).json();

    return res;
  } catch (error) {
    return [];
  }
};

export const getRecords = async data => {
  try {
    const res = await (
      await fetch(`${url}/records`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include'
      })
    ).json();

    return res;
  } catch (error) {
    return [];
  }
};

export const authoriseUser = async data => {
  try {
    const res = await (
      await fetch(`${url}/users/me`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include'
      })
    ).json();

    return res;
  } catch (error) {
    return [];
  }
};
