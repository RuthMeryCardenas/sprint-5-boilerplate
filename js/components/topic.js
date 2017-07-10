'use strict';

const Topic = (data) => {
  const topic = $('<div class="topic row" data-id="' + data.id +'"></div>');

  const content = $('<div class="col s4"></div>');
  content.append('<span>' + data.content +'</span>');

  const author = $('<div class="col s5"></div>');
  author.append(' - Por: ' +'<span>' + data.author_name +'</span>');

  const responses = $('<div class="col s3"></div>');
  responses.append('Respuestas: ' + '<span>' + data.responses_count +'</span>');

  topic.append(content);
  topic.append(author);
  topic.append(responses);

  content.on('click', (e) => {
    console.log($(e.target));
    console.log(topic.data('id'));
    window.location = 'verTopic.html?topic_id=' + topic.data('id');
  });
  return topic;
}

const Topics = (listTopics) => {
  const topics = $('<section class="topics"></section>');

  $.each(listTopics, (index, topic) => {
    topics.append(Topic(topic));
  });

  return topics
}

const reRender = (topics, filter, update) => {
  topics.empty();
  const filteredTopics = filterByContent(state.topics, filter);

  if (filteredTopics.length > 0) {
    $.each(filteredTopics,(index,topic) => {
      topics.append(Topic(topic));
    });
  } else {
    topics.append($('<p>Tema no encontrado</p>'));
  }
}
