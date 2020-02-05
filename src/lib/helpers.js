export const checkCredentials = async data => {
  const url = 'https://live-coding-ds-record-store.wasabis.now.sh/users/login';

  try {
    const res = await (
      await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      })
    ).json();

    return res;
  } catch (error) {
    return error;
  }
};
