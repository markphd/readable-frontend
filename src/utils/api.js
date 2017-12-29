export function fetchCategories() {
  return function (dispatch) {
    let categoryUrl = 'http://localhost:3001/categories';

    dispatch( {type: 'REQUEST_STARTED'})

    return fetch(categoryUrl, {
      headers: { 'Authorization': 'whatever-you-want' }
    })
      .then(res => dispatch({type: 'REQUEST_STARTED', payload: res}))
      .catch(error => dispatch({type: 'REQUEST_FAILED', error: error}))
  }
}

export function fetchCategoryPosts(category = 'react') {

  // let tempUrl = 'https://api.edamam.com/search?q=${food}&app_id=${API_ID}&app_key=${APP_KEY}';
  let postsPerCategoryUrl = `http://localhost:3001/${category}/posts`;

  return fetch(postsPerCategoryUrl, {
    headers: { 'Authorization': 'thisisme' }
  })
    .then((res) => res.json())
}

export function fetchData(val) {
  return function (dispatch) {
    

    return fetch('')
  }
}