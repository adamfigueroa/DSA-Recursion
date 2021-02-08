// Write a recursive function that counts how many sheep jump
// over the fence. Your program should take a number as input. That
// number should be the number of sheep you have. The function
// should display the number along with the message "Another
// sheep jumps over the fence" until no more sheep are left.

function sheepCounter(number) {
  if (number === 0) {
    return;
  }

  console.log(number + ': Another sheep jumps over the fence');
  sheepCounter(number - 1);
}

sheepCounter(3);
