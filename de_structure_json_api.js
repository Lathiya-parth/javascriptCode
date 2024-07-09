const course = {
    name: "js in Hindi",
    price: 999,
    courseInstructor : "parth"
}

const{courseInstructor} = course
console.log(courseInstructor);

const{courseInstructor:instructor} = course
console.log(instructor);