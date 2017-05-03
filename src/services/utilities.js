console.log('made it to utilities.js from container')

import $ from 'jquery-ajax'

export function queryOmdb(query) {
  var term = query.replace(/\s/, '+');
  var url = `http://omdbapi.com/?s=${term}`

  return $.getJSON(url).then((res) => res["Search"]);

}
