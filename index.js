/**
 * EVENTS
 * JS is able to listen to activities on the browser such as:
 * 1. clicking on a button
 * 2. submit a form
 * 3. keypress
 * 4. touchpad/mouse
 * --> methods such as:  addEventListener()
 *
 * SYNTAX
 *
 * document.addEventListener('type', callbackFn)
 *--> DOMContentLoaded
 */

// grab our element

// document.addEventListener('DOMContentLoaded', clickButtonFn());

document.addEventListener('DOMContentLoaded', () => {
  console.log('#1');
  const btn = document.getElementById('button');
  // console.log(btn);

  // btn.addEventListener('click', () => {
  //   alert('I was clicked #1');
  // });

  const browserAlert = () => {
    alert('I was clicked');
  };

  btn.addEventListener('click', browserAlert);

  document.getElementById('button_2').addEventListener('click', () => {
    prompt('Enter your name: ');
  });
});


console.log('#2');

// clickButtonFn();
