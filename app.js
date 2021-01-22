const question = document.getElementsByTagName('h3');
const ans = document.getElementsByTagName('p');
const arrow = document.getElementsByTagName('span');


for(let i=0; i<question.length; i++) {
  //click on any question
  question[i].addEventListener("click", function(e){
  if (question[i].classList.contains('normal')) {
    // h3 gets bold 
    question[i].classList.add('bold');
    question[i].classList.remove('normal');
    // arrow rotates
    arrow[i].classList.add('arrow');
    // answer shows itself with animation
    ans[i].classList.add('show');
    ans[i].classList.add('animate__animated');
    ans[i].classList.add('animate__zoomIn');
  } else {
    // h3 goes back to normal
    question[i].classList.remove('bold');
    question[i].classList.add('normal');
    // arrow rotates again
    arrow[i].classList.remove('arrow');
    // answer hides itself with animation
    ans[i].classList.remove('show');
    ans[i].classList.remove('animate__zoomIn');
  }
  })
}