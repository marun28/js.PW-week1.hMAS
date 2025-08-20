//Hoisting//
students(91)
function students(studentScore){     
    let mark=studentScore;
    let grade;
    switch(true){
        case (mark>=90):
            grade = "A"
            break;
            case (mark<=80):
            grade = "B"
            break;
            default:
            grade = "NoGrade"
    }
    console.log(grade)
}
