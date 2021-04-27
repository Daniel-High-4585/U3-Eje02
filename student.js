function create (student,students){
    tudents.push(student);
    return students;
};

function read(students){
    students.forEach(s => {
        console.log("Nombre:"+ s.name),
        console.log("Numero de Control:"+ s.controlNumber)
    });
}

function erase(pos,students){
    students.splice(pos,1)
}

function update(pos,newElement,students){
    students[pos]=newElement;
    return students;
}

module.exports.create = create;
module.exports.read = read;
module.exports.erase = erase;
module.exports.update = update;

//node index.js     pa correrlo en consola