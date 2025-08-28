let number = {
  nums: [2, 4, 5, 7, 8],
  target: 6,
};

function encontrarSuma(number) {
  for (let i = 0; i < number.nums.length - 1; i++) {
    let suma = number.nums[i] + number.nums[i + 1];
    if (suma === number.target) {
      console.log(number.nums[i], number.nums[i + 1]);
    }
  }
}

encontrarSuma(number);
