function removeInside(arr) {
  const rectangles = new Array(...arr);
  let result = [];

  for (let i = 0; i < rectangles.length; i++) {
    let isInside = false;

    for (let j = 0; j < rectangles.length; j++) {
      if (i !== j) {
        if (
          rectangles[i][0] >= rectangles[j][0] &&
          rectangles[i][1] >= rectangles[j][1] &&
          rectangles[i][2] <= rectangles[j][2] &&
          rectangles[i][3] <= rectangles[j][3]
        ) {
          isInside = true;
          break;
        }
      }
    }

    if (!isInside) {
      result.push(rectangles[i]);
    }
  }

  return result;
}

function uniqueArr(arr) {
  const uniqueArrays = new Set();
  const uniqueArr = arr.filter((item) => {
    const strRepresentation = JSON.stringify(item);
    if (!uniqueArrays.has(strRepresentation)) {
      uniqueArrays.add(strRepresentation);
      return true;
    }
    return false;
  });
  return uniqueArr;
}

function overlapArea(rect1, rect2) {
  const xOverlap = Math.max(
    0,
    Math.min(rect1[2], rect2[2]) - Math.max(rect1[0], rect2[0])
  );
  const yOverlap = Math.max(
    0,
    Math.min(rect1[3], rect2[3]) - Math.max(rect1[1], rect2[1])
  );
  return xOverlap * yOverlap;
}

function calculate(rectanglesList) {
  let totalArea = 0;
  const uniqueRectangles = uniqueArr(rectanglesList);
  const pureRectangles = removeInside(uniqueRectangles);

  // Sort rectangles based on their coordinates to handle different orders
  pureRectangles.sort((a, b) => {
    return a[0] - b[0] || a[1] - b[1] || a[2] - b[2] || a[3] - b[3];
  });

  for (let i = 0; i < pureRectangles.length; i++) {
    const rect = pureRectangles[i];
    totalArea += (rect[2] - rect[0]) * (rect[3] - rect[1]);

    for (let j = i + 1; j < pureRectangles.length; j++) {
      totalArea -= overlapArea(rect, pureRectangles[j]);
    }
  }

  return totalArea;
}

function test(obj) {
  const result = calculate(obj.input);
  console.log(obj.index + ": ", result === obj.output);
  console.log("🚀 ~ result:", result);
}
test({
  index: 1,
  input: [],
  output: 0,
});
test({
  index: 2,
  input: [[0, 0, 1, 1]],
  output: 1,
});
test({
  index: 3,
  input: [[0, 4, 11, 6]],
  output: 22,
});
test({
  index: 4,
  input: [
    [0, 0, 1, 1],
    [1, 1, 2, 2],
  ],
  output: 2,
});
test({
  index: 5,
  input: [
    [0, 0, 1, 1],
    [0, 0, 2, 2],
  ],
  output: 4,
});
test({
  index: 6,
  input: [
    [3, 3, 8, 5],
    [6, 3, 8, 9],
    [11, 6, 14, 12],
  ],
  output: 36,
});
test({
  index: 7,
  input: [
    [0, 0, 1, 1],
    [0, 0, 2, 2],
    [0, 0, 1, 1],
    [0, 0, 2, 2],
    [0, 0, 1, 1],
    [0, 0, 2, 2],
  ],
  output: 4,
});
test({
  index: 8,
  input: [
    [1, 1, 2, 2],
    [2, 2, 3, 3],
    [3, 3, 4, 4],
    [4, 4, 5, 5],
    [2, 1, 3, 2],
  ],
  output: 5,
});
test({
  index: 9,
  input: [
    [1, 1, 2, 2],
    [1, 4, 2, 7],
    [1, 4, 2, 6],
    [1, 4, 4, 5],
    [2, 5, 6, 7],
    [4, 3, 7, 6],
  ],
  output: 21,
});
