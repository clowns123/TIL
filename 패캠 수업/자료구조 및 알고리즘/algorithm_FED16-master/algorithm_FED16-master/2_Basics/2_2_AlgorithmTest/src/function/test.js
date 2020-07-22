function solution(n = 0) {
  let answer = '';
  const a = parseInt(n / 2);
  for (let i = 0; i < a; i++) {
    answer += '수박';
  }
  if (n % 2 === 1) {
    answer += '수';
  }
  return answer;
}

console.log(solution(5));
