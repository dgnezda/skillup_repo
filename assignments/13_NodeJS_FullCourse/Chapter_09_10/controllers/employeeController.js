import employees from "../model/employees.json" assert { type: "json"};
const data = {
    employees: employees,
    setEmployees: function (data) { this.employees = data }
};

export const getAllEmployees = (req, res) => {
    res.json(data.employees);
};

export const createNewEmployee = (req, res) => {
    const newEmployee = {
        id: data.employees?.length ? data.employees[data.employees.length - 1].id + 1 : 1,
        name: req.body.name,
        occupation: req.body.occupation
    }

    if (!newEmployee.name || !newEmployee.occupation) {
        return res.status(400).json({ 'message': 'Name and occupation are required.'});
    }

    data.setEmployees([...data.employees, newEmployee]);
    res.status(201).json(data.employees);
};

export const updateEmployee = (req, res) => {
    const employee = data.employees.find(emp => emp.id === parseInt(req.body.id));

    if (!employee) {
        return res.status(400).json({ "message": `Employee ID ${req.body.id} not found.` });
    }
    if (req.body.name) employee.name = req.body.name;
    if (req.body.occupation) employee.occupation = req.body.occupation;

    const filteredArray = data.employees.filter(emp => emp.id !== parseInt(req.body.id));
    const unsortedArray = [...filteredArray, employee];
    data.setEmployees(unsortedArray.sort((a, b) => a.id > b.id ? 1 : a.id < b.id ? -1 : 0));
    
    res.json(data.employees);
};

export const deleteEmployee = (req, res) => {
    const employee = data.employees.find(emp => emp.id === parseInt(req.body.id));

    if (!employee) {
        return res.status(400).json({ "message": `Employee ID ${req.body.id} not found.` });
    }
    const filteredArray = data.employees.filter(emp => emp.id !== parseInt(req.body.id));
    data.setEmployees([...filteredArray]);
    res.json(data.employees);
};

export const getEmployee = (req, res) => {
    const employee = data.employees.find(emp => emp.id === parseInt(req.body.id));

    if (!employee) {
        return res.status(400).json({ "message": `Employee ID ${req.body.id} not found.` });
    }
    res.json(employee);
}