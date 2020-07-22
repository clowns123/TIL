function solution(land = []) {
  let answer = 0;
  let noLand = -1;
  let temp = 0;
  for (let i = 0; i < land.length; i++) {
    for (let j = 0; j < 4; j++) {
      if (noLand === j) {
        continue;
      }
      if (temp < land[i][j]) {
        temp = land[i][j];
      }
    }
    noLand = land[i].findIndex(e => temp === e);
    answer += temp;
    temp = 0;
  }
  console.log(answer);
  return answer;
}

solution([
  [1, 2, 4, 3],
  [2, 3, 3, 5],
  [1, 2, 3, 20],
]);
