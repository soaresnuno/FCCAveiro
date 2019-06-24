const API_URL = 'http://admin.freecodecampaveiro.org/wp-json/acf/v3/pages?fbclid=IwAR2JdgLOwODKli3NiuF845YviziRf_BuuEPdDbLydI-5QXyuyMZz8t4--J0';
// const API_KEY = '';

export const GET_DATA = 'GET_DATA';

export function getData() {
  return async function (dispatch) {
    const res = await fetch(
      `${API_URL}`,
    );
    const data = await res.json();
    return dispatch({
      type: 'GET_DATA',
      data,
    });
  };
}
