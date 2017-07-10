let topicId = getParameterByName('topic_id');
state = {
  current_topic: null,
  responses: null
}

if(topicId){
  getJSON('topics/' + topicId, (err, json) => {
    if (err) { return console.log(err.message);}
    state.current_topic = json;
    console.log(state.current_topic);
    getJSON('topics/' + topicId + '/responses', (err, json) => {
      if (err) { return console.log(err.message);}
      state.responses = json;
      console.log(state.responses);
    });
  });
}
