function TodoList({ targetEl, initialState }) {
  this.$element = document.createElement('ul');
  targetEl.appendChild(this.$element);

  this.state = initialState;

  this.render = function() {
    this.$element.innerHTML = this.state
        .map(todo => `<li>${todo.text}</li>`)
        .join('');
  }

  this.setState = function(nextState) {
    this.state = nextState;
    this.render();
  }

  this.render();
}
