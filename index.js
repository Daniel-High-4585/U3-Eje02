//let model =require('.student/student');

let student ={
    name = 'Daniel Enrique High Mendoza',
    controlNumber='1501006',
    email="daenhighme@ittepic.edu.mx",
    grade: 80
};

let student2 ={
    name = 'Daniel Enrique High Mendoza',
    controlNumber='1501006',
    email="daenhighme@ittepic.edu.mx",
    grade: 80
};


let student3 ={
    name = 'Daniel Enrique High Mendoza',
    controlNumber='1501006',
    email="daenhighme@ittepic.edu.mx",
    grade: 80
};

/*
function create(student){
    students.push(student);
}

function create(student){
    students.push(student2);
}

function create(student){
    students.push(student3);
}*/

model.create(student,students);
model.create(student2,students);
console.log('-------------------------------');
console.log(students);

model.read(students);
console.log('-------------------------------');
console.log(students);

model.erase(2,students);
console.log('-------------------------------');
console.log(students);

model.update(0,student3,students);
console.log('-------------------------------');
console.log(students);

//actualizar la eliminacion atravez del numero de control
//actualziar atravez del no. control Ciertos elementos, solo los elementos que yo le indico
