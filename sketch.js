//key-value pair
// key: value.
// key2: value2,

var student = {
  name: "JAmes",
  class: 2025,
  studentID: 101041284,
  favoriteSubject: "gym",
  grades: [100,101,93,90,90,95]
};







function setup() {
  createCanvas(400, 400);

  console.log(student.name);
  console.log(student.class);

  console.log(student.favoriteSubject);
  student.favoriteSubject="lunch";
  console.log(student.favoriteSubject);

}

function draw() {
  background(220);
}