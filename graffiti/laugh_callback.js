function laugh_loud(laugh, callback, sw){
  if (sw === false) return callback(laugh);
  return laugh;
}
function switch_off(motion){
  motion += " する場合ではない( ´_ゝ`)";
  return motion;
}

laugh_loud("わははははは", switch_off, false);
