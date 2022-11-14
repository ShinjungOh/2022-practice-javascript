function TodoList({ targetEl, initialState, onDelete }) {
  this.$element = document.createElement('ul');
  targetEl.appendChild(this.$element);

  this.state = initialState;

  this.render = function() {
    this.$element.innerHTML = this.state
      .map((todo, index) => `<li>${todo.text} <button data-id="${index}">삭제</button></li>`)
      .join('');
  }

  this.setState = function(nextState) {
    this.state = nextState;
    this.render();
  }

  this.render();

  this.$element.addEventListener('click', function(e) {
    // console.log(e.target);
    // console.log(e.target.tagName);
    if (e.target.tagName === 'BUTTON') {
      // console.log('e.target.getAttribute(\'data-id\')', e.target.getAttribute('data-id'));
      const dataId = e.target.getAttribute('data-id');
      onDelete(parseInt(dataId, 10));
    }
  });
}


