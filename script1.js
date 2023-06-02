const content = document.getElementById('content');
const fixedDiv = document.getElementById('embeded');
const embededthing = document.getElementById('embeded');
const buttontrigger = document.getElementById('caller');


check();
window.addEventListener('scroll', function() {
  if(window.innerWidth < 500){
    const contentHeight = content.offsetHeight;
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const totalHeight = contentHeight - windowHeight;
    const scrollPercentage = Math.min(scrollPosition / totalHeight, 1) * 100; // calculate scroll percentage
      console.log(scrollPercentage);
    if (scrollPercentage >= 8 && scrollPercentage <= 31) { // show fixed div between 30% and 70% scroll position
      fixedDiv.classList.add('unvisible');
    } else {
      fixedDiv.classList.remove('unvisible');
    }
  }
  
});
function check(){
  console.log("Client width: " + window.innerWidth)
  /*if(window.innerWidth < 600){
    disableChat();
  }*/
}
