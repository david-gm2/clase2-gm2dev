let exercises = {
  example1: {
    nums: [2, 15, 11, 7],
    target: 9,
  },
  example2: {
    nums: [3, 2, 4],
    target: 6,
  },
  example3: {
    nums: [3, 3],
    target: 6,
  },
};

function encontrarSuma(number) {
  for (let i = 0; i < number.nums.length; i++) {
    for (let j = i + 1; j < number.nums.length; j++) {
      if (number.nums[i] + number.nums[j] === number.target) {
        console.log([i, j]);
        return;
      }
    }
  }
}

encontrarSuma(exercises.example1);
// encontrarSuma(exercises.example2);
// encontrarSuma(exercises.example3);
