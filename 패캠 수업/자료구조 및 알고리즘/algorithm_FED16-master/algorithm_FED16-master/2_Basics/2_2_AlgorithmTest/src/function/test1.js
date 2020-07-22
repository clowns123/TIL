function solution(s = '') {
  let answer = '';
  const count = s.length;
  const half = count / 2;
  if (count % 2 === 0) {
    answer = s.slice(half - 1, half + 1);
  } else {
    answer = s.slice(half, half + 1);
  }
  return answer;
}

console.log(solution('qwer'));
