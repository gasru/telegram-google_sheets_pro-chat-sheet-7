/* exported transpose */
function transpose() {
  const data = [
    [[1], [2], [3]],
    [[4], [5], [6]],
  ];
  const values = data[0].map((_, i) => data.map((_, j) => data[j][i][0]));
  console.log(values);
}
