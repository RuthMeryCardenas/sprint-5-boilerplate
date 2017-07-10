let topicId = getParameterByName('topic_id');

state = {
  current_topic: null,
  responses: null
}

const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper center-block"></div>');
  wrapper.append(Header());
  wrapper.append(Topic(state.current_topic));
  wrapper.append(NewResponse());
  wrapper.append(Responses(state.responses));
  wrapper.append(Modal('newResponse'));
  root.append(wrapper);
}

if(topicId){
  getJSON('topics/' + topicId, (err, json) => {
    if (err) { return console.log(err.message);}
    state.current_topic = json;
    getJSON('topics/' + topicId + '/responses', (err, json) => {
      if (err) { return console.log(err.message);}
      state.responses = json;
      const root = $('.root');
      render(root);
    });
  });
}
