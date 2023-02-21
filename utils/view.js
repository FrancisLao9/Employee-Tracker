const inquirer = require("inquirer");
const mysql = require('mysql2');
const { allowedNodeEnvironmentFlags } = require("process");
const PORT = process.env.PORT || 3001;

function viewDepartments() {
    let query = "SELECT * FROM department";
    db.query(query, function(err, res){
        if (err) throw err;
        console.table(res);
        menu();
    })
};

function viewRoles() {
    let query = "SELECT * FROM roles";
    db.query(query, function(err, res){
        if (err) throw err;
        console.table(res);
        menu();
    })
};

function viewEmployees() {
    let query = "SELECT * FROM employee";
    db.query(query, function(err, res){
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
        db.query("INSERT INTO department (name) VALUES (?)", [answer.dep_name], function(err, res){
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
            manager_id: answer.manager_id
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
        { //Update Role
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

// function viewEmployeeByManager() {
//     let query = "SELECT * FROM employee WHERE"
// };

// function viewEmployeeByDepartment() {

// };

// deleteDepartment
// deleteRole
// deleteEmployee

function menu() {
    const selection = () => {
        return inquirer
            .prompt([
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
                        // "View Employees by Manager",
                        // "View Employees by Department",
                        // "Delete Department",
                        // "Delete Role",
                        // "Delete Employee",
                        "Exit"
                    ]
                }
            ]) .then((data) => {
                console.log(data.menu);
                switch (data.menu) {
                    case "All Departments":
                        viewDepartments();
                        menu();
                        break;
                    case "All Roles":
                        viewRoles();
                        menu();
                        break;
                    case "All Employees":
                        viewEmployees();
                        menu();
                        break;
                    case "Add Department":
                        addDepartment();
                        menu();
                        break;
                    case "Add Role":
                        addRole();
                        menu();
                        break;
                    case "Add Employee":
                        addEmployee();
                        menu();
                        break;
                    case "Update Employee Role":
                        updateEmployeeRole();
                        menu();
                        break;
                    case "Update Employee Manager(s)":
                        updateEmployeeManager();
                        menu();
                        break;
                    case "View Employees by Manager":
                        viewEmployeeByManager();
                        menu();
                        break;
                    case "View Employees by Department":
                        viewEmployeeByDepartment();
                        menu();
                        break;
                    case "Delete Department":
                        deleteDepartment();
                        menu();
                        break;
                    case "Delete Role":
                        deleteRole();
                        menu();
                        break;
                    case "Delete Employee":
                        deleteEmployee();
                        menu();
                        break;
                    case "Exit":
                        db.end();
                        break;
                    default:
                        console.log("~~~~~~~~~~~~~~~");
                        break;
                }
            })
    }
}