// /**
//  * @param String name
//  * @return String
//  */
// function getParameterByName(name) {
//     name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
//     var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
//     results = regex.exec(location.search);
//     return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
// }
'use strict';

const filterByContent = (topics,query) => {
  return topics.filter((topic) => {
    return topic.content.toLowerCase().indexOf(query.toLowerCase()) != -1;
  });
}
