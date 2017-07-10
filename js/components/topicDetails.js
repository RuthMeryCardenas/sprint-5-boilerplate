'use strict';

const Header = () => {
  const header = $('<header></header>');

  const title = $('<h2 class="center-align">Foro cool</h2>');
  header.append(title);

  return header;
}

const NewResponse = () => {
  const container_btn = $('<div class="valign-wrapper right-align"></div>');
  const newResponse_btn = $('<a class="waves-effect waves-teal btn" href="#newResponse">crear respuesta</a>');

  container_btn.append(newResponse_btn);
  return container_btn;
}

const Topic = (data) => {
  const topic = $('<section class="topic" data-id="' + data.id +'"></section>');

  const content = $('<div>' + data.content +'</div>');

  const author = $('<div>Por: </div>');
  author.append('<span>' + data.author_name +'</span>');

  topic.append(content);
  topic.append(author);

  return topic;
}

const Response = (data) => {
  const response = $('<div class="response" data-id="' + data.id +'"></div>');

  const author = $('<p>Por: </p>');
  author.append('<span>' + data.author_name +'</span>');

  const content = $('<p>' + data.content +'</p>');

  response.append(author);
  response.append(content);

  return response;
}

const Responses = (listResponses) => {
  const responses = $('<section class="responses"></section>');

  $.each(listResponses, (index, response) => {
    responses.append(Response(response));
  });

  return responses;
}

const Modal = (id) => {
  const modal = $('<div id="' + id + '" class="modal"></div>');

  modal.modal({
    dismissible: false,
    opacity: .5,
    inDuration: 300,
    outDuration: 200,
    startingTop: '4%',
    endingTop: '10%',
    ready: function(modal, trigger) {
      modal.append(ModalContent());
      // console.log(modal, trigger);
    },
    complete: function() {
      modal.empty()
    }
  });

  return modal;
}

const ModalContent = () => {
  const content = $('<div class="modal-content"></div>');

  const header  = $('<div class="header right-align"></div>');
  const close_btn = $('<a class="waves-effect waves-teal btn-flat"><i class="material-icons">clear</i></a>');
  const title = $('<h4 class="center-align">Responder este tema</h4>');
  header.append(close_btn);
  header.append(title);

  const form = $('<div class="form"></div>');
  form.append(User());
  form.append(Message());
  const buttons = $('<div class="right-align"></div>');
  const add_btn = $('<a class="waves-effect waves-teal btn">crear</a>');
  const cancel_btn = $('<a class="waves-effect waves-teal btn">cancelar</a>');

  buttons.append(add_btn);
  buttons.append(cancel_btn);
  form.append(buttons);

  content.append(header);
  content.append(form);

  add_btn.on('click', _ => {
    let user = $('#user-name');
    let message = $('#message');

    if (user.val() == "" ||  message.val() == "") {
      console.log("No se han completado los datos");
    }else {
      let body = {
        'author_name': user.val(),
        'content': message.val()
      }
      postJSON('topics/' + state.current_topic.id +'/responses', body, _ => {
        user.val('');
        message.val('');
        getJSON('topics/' + state.current_topic.id + '/responses', (err, json) => {
          if (err) { return console.log(err.message);}
          state.responses = json;
          reRender($('.responses'), state.responses);
        });
      });
    }
  });

  cancel_btn.on('click', _ => {
    $('#user-name').val('');
    $('#message').val('');
  });

  close_btn.on('click', _ => {
    $('#newResponse').modal('close');
  });

  return content;
}

const User = () => {
  const user = $('<div class="input-field valign-wrapper">');

  user.append('<i class="material-icons prefix">account_circle</i>');
  const userName = $('<input id="user-name" type="text">');
  user.append(userName);
  user.append('<label for="user-name">Por:</label>');

  return user;
}

const Message = () => {
  const message = $('<div class="input-field valign-wrapper">');

  message.append('<i class="material-icons prefix">message</i>');
  const text = $('<textarea id="message" class="materialize-textarea"></textarea>');
  message.append(text);
  message.append('<label for="message">Mensaje:</label>');

  return message;
}

const reRender = (responses, listResponses) => {
  responses.empty();

  $.each(listResponses, (index, response) => {
    responses.append(Response(response));
  });

}
