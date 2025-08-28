let exercises = {
  example1: {
    nums: [2, 7, 11, 15],
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
  for (let i = 0; i < number.nums.length - 1; i++) {
    let suma = number.nums[i] + number.nums[i + 1];
    if (suma === number.target) {
      console.log([number.nums[i], number.nums[i + 1]]);
    }
  }
}

encontrarSuma(exercises.example1);
encontrarSuma(exercises.example2);
encontrarSuma(exercises.example3);
