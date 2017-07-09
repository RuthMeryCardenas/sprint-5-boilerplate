'use strict';
const state = {
  topics: null
}

const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper center-block"></div>');
  wrapper.append(Header());
  wrapper.append(Topics(state.topics));
  wrapper.append(Modal('newTopic'));
  root.append(wrapper);
}

$( _ => {
  getJSON('topics', (err, json) => {
    if (err) { return console.log(err.message);}
    state.topics = json;
    const root = $('.root');
    render(root);
  });
});
