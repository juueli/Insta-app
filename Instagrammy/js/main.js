$(document).ready(function() {


var Instagram = {};

(function(){

  function search(tag){
    console.log(tag);
  }

  Instagram.search = search;
})();

Instagram.search('cats');
});