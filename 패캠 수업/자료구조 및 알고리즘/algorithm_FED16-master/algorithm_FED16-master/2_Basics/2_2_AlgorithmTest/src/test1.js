function solution(A = [], B = []) {
  let answer = 0;
  A.sort();
  B.sort((a, b) => b - a);
  console.log(A, B);
  for (let i = 0; i < A.length; i++) {
    answer += A[i] * B[i];
  }
  console.log(answer);
  return answer;
}

solution([1, 2, 6], [3, 4, 3]);
