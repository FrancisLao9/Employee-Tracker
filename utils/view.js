const inquirer = require("inquirer");
const db = require('./root');


async function viewDepartments() {
    let query = "SELECT * FROM department";
    db.query(query, function(err, res) {
        if (err) throw err;
        console.table(res);
        menu();
    })
};

async function viewRoles() {
    let query = "SELECT * FROM roles";
    db.query(query, function(err, res) {
        if (err) throw err;
        console.table(res);
        menu();
    })
};

async function viewEmployees() {
    let query = "SELECT * FROM employee";
    db.query(query, function(err, res) {
        if (err) throw err;
        console.table(res);
        menu();
    })
};

function addDepartment() {
    inquirer.prompt([
        {
            type: "input",
            message: "Enter Department Name:",
            name: "dep_name"
        },
    ]).then(function(answer){
        db.query("INSERT INTO department (dep_name) VALUES (?)", [answer.dep_name], function(err, res){
            if (err) throw err;
            console.table(res);
            menu();
        })
    })
};

function addRole() {
    inquirer.prompt([
        {
            type: "input",
            message: "Enter Role Name:",
            name: "role_name"
        },
        {
            type: "input",
            message: "Enter Salary:",
            name: "salary"
        },
        {
            type: "input",
            message: "Enter Department ID:",
            name: "dep_id"
        }
    ]).then(function(answer){
        db.query("INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)", [answer.role_name, answer.salary, answer.dep_id], function(err, res){
            if (err) throw err;
            console.table(res);
            menu();
        })
    })
};

function addEmployee() {
    inquirer.prompt([
        {
            type: "input",
            message: "Enter First Name:",
            name: "first_name"
        },
        {
            type: "input",
            message: "Enter Last Name:",
            name: "last_name"
        },
        {
            type: "input",
            message: "Enter Role ID Number:",
            name: "role_id"
        },
        {
            type: "input",
            message: "Enter Manager ID Number:",
            name: "manager_id"
        }
    ])
    .then(function(answer) {
        db.query("INSERT INTO employee SET ?",
        {
            first_name: answer.first_name,
            last_name: answer.last_name,
            role_id: answer.role_id,
            manager_id: answer.manager_id,
        }, function(err, res){
            if (err) throw err;
            console.table(res);
            menu();
        })
    })
};

function updateEmployeeRole(){ 
    inquirer.prompt([
        {
            type: "input",
            message: "Enter employee to update:",
            name: "empUpdate"
        },
        { //Role
            type: "input",
            message: "Update To:",
            name: "updateRole"
        }
    ]).then(function(answer) {
        db.query('UPDATE employee SET role_id=? WHERE first_name=?',[answer.updateRole, answer.empUpdate],function(err, res){
            if (err) throw err;
            console.table(res);
            menu();
        })
    })
};

function updateEmployeeManager() {
    inquirer.prompt([
        {
            type: "input",
            message: "Enter manager to update:",
            name: "empUpdate"
        },
        {
            type: "input",
            message: "Update To:",
            name: "updateRole"
        }
    ]).then(function(answer) {
        db.query
        ('UPDATE employee SET role_id=? WHERE first_name=?',[answer.updateRole, answer.empUpdate],function(err, res){
            if (err) throw err;
            console.table(res);
            menu();
        })
    })
};

function deleteDepartment() {
    inquirer.prompt([
        {
            type: "input",
            message: "Enter Department to Delete:",
            name: "depDel"
        }
    ]).then(function(answer) {
        db.query
        ('DELETE FROM department WHERE dep_name=?',[answer.depDel],function(err, res){
            if (err) throw err;
            console.table(res);
            menu();
        })
    })
};

function deleteRole() {
    inquirer.prompt([
        {
            type: "input",
            message: "Enter Role to Delete:",
            name: "depRole"
        }
    ]).then(function(answer) {
        db.query
        ('DELETE FROM roles WHERE title=?',[answer.depRole],function(err, res){
            if (err) throw err;
            console.table(res);
            menu();
        })
    })
}
function deleteEmployee() {
    inquirer.prompt([
        {
            type: "input",
            message: "Enter Employee ID to Delete:",
            name: "empID"
        }
    ]).then(function(answer) {
        db.query
        ('DELETE FROM employee WHERE id=?',[answer.empID],function(err, res){
            if (err) throw err;
            console.table(res);
            menu();
        })
    })
}

function menu() {
        return inquirer.prompt([
                {
                    type: 'list',
                    name: 'menu',
                    message: 'Select:',
                    choices: [
                        "All Departments",
                        "All Roles",
                        "All Employees",
                        "Add Department",
                        "Add Role",
                        "Add Employee",
                        "Update Employee Role",
                        "Update Employee Manager(s)",
                        "Delete Department",
                        "Delete Role",
                        "Delete Employee",
                        "Exit"
                    ]
                }
            ]).then((data) => {
                switch (data.menu) {
                    case "All Departments":
                        viewDepartments();
                        break;
                    case "All Roles":
                        viewRoles();
                        break;
                    case "All Employees":
                        viewEmployees();
                        break;
                    case "Add Department":
                        addDepartment();
                        break;
                    case "Add Role":
                        addRole();
                        break;
                    case "Add Employee":
                        addEmployee();
                        break;
                    case "Update Employee Role":
                        updateEmployeeRole();
                        break;
                    case "Update Employee Manager(s)":
                        updateEmployeeManager();
                        break;
                    case "View Employees by Manager":
                        viewEmployeeByManager();
                        break;
                    case "View Employees by Department":
                        viewEmployeeByDepartment();
                        break;
                    case "Delete Department":
                        deleteDepartment();
                        break;
                    case "Delete Role":
                        deleteRole();
                        break;
                    case "Delete Employee":
                        deleteEmployee();
                        break;
                    case "Exit":
                        db.end();
                        break;
                }
            });
    };

module.exports = {
    viewDepartments,
    viewRoles,
    viewEmployees,
    addDepartment,
    addRole,
    addEmployee,
    updateEmployeeRole,
    updateEmployeeManager,
    deleteDepartment,
    deleteRole,
    deleteEmployee,
    menu
};