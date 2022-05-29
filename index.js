// Write your solution in this file!
const employee ={name:'John', streetAddress: 'El John St'};
function updateEmployeeWithKeyAndValue (employee, key, value){
    const newEmployee = {...employee};
    newEmployee[key]=value;
    return newEmployee;
}
function destructivelyUpdateEmployeeWithKeyAndValue (employee, key,value){
    employee[key]=value;
    return employee;
}
function deleteFromEmployeeByKey (employee,key){
    let newEmp={...employee};
    delete newEmp[key];
    return newEmp;
}
function destructivelyDeleteFromEmployeeByKey (employee,key){
    delete employee[key];
    return employee;
}
