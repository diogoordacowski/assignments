let employees = []
let employeesTwo = []

function Employee (name, jobTitle, salary) {
    this.name = name
    this.jobTitle = jobTitle
    this.salary = salary
    this.status = "Full Time"
}

Employee.prototype.printEmployeeForm = function() {
    console.log (this.name + ", " + this.jobTitle + ", " + this.salary + ", " + this.status)
}

// Instantiate three employees
let employee1 = new Employee ("Diogo Ordacowski", "ROWPU Master", "$500,000.00")
let employee2 = new Employee ("Brian Hodges", "Slow Truck Driver", "$850,000.00")
let employee3 = new Employee ("Brandon Phillips", "Lord of Soup Sandwich", "$1,000,000.00" )

// Call the printEmployeeForm method for each employee
employee1.printEmployeeForm()
employee2.printEmployeeForm()
employee3.printEmployeeForm()

// Override the status attribute of one of them to either "Part Time" or "Contract"
employee2.status = "Contract"

employee2.printEmployeeForm()

// Put the generated employees into the employees array using whichever method you prefer.

employees[0] = employee1
employees[1] = employee2
employees[2] = employee3

console.log(employees)

employeesTwo.push(employee1)
employeesTwo.push(employee2)
employeesTwo.push(employee3)

console.log(employeesTwo)