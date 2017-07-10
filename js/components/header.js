'use strict';

const Header = () => {
  const header = $('<header></header>');

  const title = $('<h2 class="center-align">Foro cool</h2>');
  header.append(title);

  const userActions = $('<div class="row valign-wrapper"></div>');
  userActions.append(Search());
  userActions.append(NewTopic());

  header.append(title);
  header.append(userActions);

  return header;
}
const Search = () => {
  const search = $('<div class="valign-wrapper input-field col s9"></div>');
  const icon = $('<i class="material-icons prefix">search</i>');
  const input = $('<input id="icon_prefix" type="text">');
  input.on('keyup',(e) => {
    reRender($(".topics"), input.val());
  });
  const label= $('<label for="icon_prefix">Buscar...</label>');

  search.append(icon);
  search.append(input);
  search.append(label);

  return search;
}

const NewTopic = () => {
  const container_btn = $('<div class="col s3"></div>');
  const newTopic_btn = $('<a class="waves-effect waves-teal btn" href="#newTopic">crear tema</a>');

  container_btn.append(newTopic_btn);
  return container_btn;
}
