function calculate(arr) {}

// =====================================
// ไฟล์ส่วนล่างนี้เป็นตัวอย่าง input output (test case)
// ห้ามแก้ไข!
// วิธีการรันคือ
//   1. เปิด terminal
//   2. cd เข้ามาที่โปรเจ็คปัจจุบัน
//   3. รัน node เว้นวรรค ตามด้วยชื่อไฟล์
//   4. หาก โปรแกรมทำงานถูกต้องจะขึ้น true ทั้งหมด
// =====================================
function test(obj) {
  console.log(
    obj.index + ": ",
    JSON.stringify(calculate(obj.input)) === JSON.stringify(obj.output)
  );
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
