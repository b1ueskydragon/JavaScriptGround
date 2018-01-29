var PongPyong = PongPyong || (function () {
  'use strict';
  
  /** @constructs*/
  function PongPyong(params) {
    this.params = params || {};
  }
  /** 初期化(何かあれば)*/
  PongPyong.prototype.initialize = function () {};

  PongPyong.prototype._add = function() {
    var myinput = document.createElement('input');
    myinput.setAttribute('type', 'button');
    myinput.setAttribute('value', 'ぴょん');

    var myobj = document.getElementById('myobj');
    myobj.appendChild(document.createElement('br'));
    myobj.appendChild(myinput);
  };

  return PongPyong;
})();
