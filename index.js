// Write your solution in this file!
var employee = {
    name:'joe',
    streetAddress:'1234'
}
function updateEmployeeWithKeyAndValue(employee, key, value){
    var newEmployee = Object.assign({},employee,{[key]: value});
    return newEmployee
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee
}
function deleteFromEmployeeByKey(employee, key){
    var newEmp = Object.assign({},employee);
    delete newEmp[key];
    return newEmp
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}