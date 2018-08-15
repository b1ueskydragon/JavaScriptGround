window.penguin = window.penguin || {};
penguin.Handler = penguin.Handler || (function() {
  function Penguin(params) {
    this.whatPenguin('my');
  }

  val self = this;
  var whatPenguin = (p) => {
    switch (p) {
      case 'big':
        return self.msgs.big;
      case 'small':
        return self.msgs.small;
      case 'my':
        return self.msgs.mine;
      case 'your':
        return self.msgs.yours;
      default:
        return p;
    }
  }

  return Penguin;
})();