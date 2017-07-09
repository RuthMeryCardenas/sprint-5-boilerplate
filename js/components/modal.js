const Modal = (id) => {
  const modal = $('<div id="' + id + '" class="modal"></div>');
  const content = $('<div class="modal-content"></div>');

  content.append('<h4>Modal Header</h4>');
  content.append('<p>A bunch of text</p>');

  modal.append(content);

  modal.modal({
    dismissible: true,
    opacity: .5,
    inDuration: 300,
    outDuration: 200,
    startingTop: '4%',
    endingTop: '10%',
    ready: function(modal, trigger) {
      alert("Ready");
      console.log(modal, trigger);
    },
    complete: function() { alert('Closed'); }
  });

  return modal;
}
