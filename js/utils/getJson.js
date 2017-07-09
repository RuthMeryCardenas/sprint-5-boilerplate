'use strict';

const getJSON = (partial_url, cb) => {
  const url = 'http://examen-laboratoria-sprint-5.herokuapp.com/' + partial_url;
  const xhr = new XMLHttpRequest();
  xhr.addEventListener('load', () => {
    if (xhr.status !== 200) {
      return cb(new Error('Error loading JSON from ' + url + '(' + xhr.status + ')'));
    }
    cb(null, xhr.response);
  });
  xhr.open('GET', url);
  xhr.responseType = 'json';
  xhr.send();
};
