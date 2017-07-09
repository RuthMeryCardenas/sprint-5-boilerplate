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

  return topic;
}
const Topics = (listTopics) => {
  const topics = $('<section class="topics"></section>');
  listTopics.forEach ((topic) => {
    topics.append(Topic(topic));
    });
  return topics
}
