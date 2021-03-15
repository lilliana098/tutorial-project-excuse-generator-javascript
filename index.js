window.onload = function (){

  let who = ['My father','My mother','Your boyfriend','My neighbor'];
  let action = ['wolked','destroyed','forgot', 'bought'];
  let what = ['my book', 'my food', 'my car', 'my heart'];
  let when = ['while I was eating','in the afternoon','while I was studying','in the morning','before I go to work'];

  let excuse = document.querySelector("#excuse");

  let randomWho = Math.floor(Math.random() * 4);
  let randomAction = Math.floor(Math.random() * 4);
  let randomWhat = Math.floor(Math.random() * 4);
  let randomWhen = Math.floor(Math.random() * 5);

  excuse.innerHTML = who[randomWho] + " " + action[randomAction] + " " + what[randomWhat] + " " + when[randomWhen]; 
};