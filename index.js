var visP = false;  
var visD = false;

document.toggleProjects = function() {
  visP = !visP;
  document.getElementById('main').className = (visP || visD) ? 'mt-24' : 'vertical-center';
};

document.toggleDiscords = function() {
  visD = !visD; 
  document.getElementById('main').className = (visD || visP) ? 'mt-24' : 'vertical-center';
};