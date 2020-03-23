import "bootstrap";
import { showExplanation } from "../plugins/questions"
import { iconToggle } from "../plugins/heart-toggle"
import { formToggle } from "../plugins/comment-form-toggle"
import { cookbook_card_toggle } from "../plugins/heart-cookbook-toggle"
import { postFormToggle } from "../plugins/add-post"
import { dragg } from "../plugins/draggable-item"
import { striking } from "../plugins/striking"

showExplanation();
striking();
iconToggle();
formToggle();
cookbook_card_toggle();

if(window.location.pathname === '/posts'){
  postFormToggle();
  dragg();
};


$('#diet-carousel').carousel({
  interval: false
});

$('#recipe-carousel').carousel({
  interval: false
});


import ConfettiGenerator from "confetti-js";

if (document.querySelector("#my-canvas")) {
  var confettiSettings = { target: 'my-canvas', max: 100 };
  var confetti = new ConfettiGenerator(confettiSettings);
  confetti.render();

  setTimeout(() => {
    confetti.clear();
  }, 5000)
}

