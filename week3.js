var request = require('superagent')

var students = ["Jane", "Tom", "Susan"]
var sortedStudents = sortAlphabetically(students)

function sortAlphabetically (arr) {
  return arr.sort()
}
// console.log(sortedStudents)

function lineByLine (arr){
  for (i=0; i < arr.length; i++){
    console.log(i, arr[i])
  }
}

// lineByLine(students)

function withA (arr) {
  var studentsA = []
  for (i=0; i < arr.length; i++){
    var currentStudent = arr[i]
    console.log(currentStudent)
    if (currentStudent.indexOf("a") >-1) {
      studentsA.push(currentStudent)
    }

  }
      console.log(studentsA)
}

// withA(students)

//TEST

expectedAlphabeticalStudent = ["Jane", "Susan", "Tom"]

function testAlpha (arr, expectedArr) {

  if (sortAlphabetically(arr) === expectedArr){
    console.log("test passed")
  }
  else {
    console.log(sortAlphabetically(arr), expectedArr)
    console.log("test not passed")
  }
}

testAlpha(students, expectedAlphabeticalStudent)

// callbacks

function fetch(url, callback){
  request
  .get(url)
  .end(callback)
}

function logHtml(err, data){
  console.log(data)
}

fetch('http://google.com', logHtml)

