//way 1 ECMA6
const remove1 = s => s.replace(/!$/, '');
remove1('Hi!');

//way 2
function remove2(s){
  return (s.slice(-1) == '!') ? s.slice(0, -1) : s;
}


//way 3
function remove(s){
  return s.replace( /!$/, '') 
}