function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('#nested .target');

}

function increaseRankBy(n){
var the_ranks = document.querySelectorAll('ul.ranked-list li');

for(let i = 0; i < the_ranks.length; i++){
  the_ranks[i].textContent = parseInt(the_ranks[i].textContent) + n;
}
}

function deepestChild(){
  var the_child = document.querySelectorAll('#grand-node div');
  return the_child[(the_child.length - 1)];
}
