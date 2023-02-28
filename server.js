const inquirer = require('inquirer');
const db = require('./utils/root');
const mysql = require('mysql2');
const view = require('./utils/view');

function init() {
    view.menu();
}
init();
// const {prompt} = require("inquirer");
// prompt([{type: 'list',
// name: 'menu',
// message: 'Select:',
// choices: [
//     "All Departments",
//     "All Roles",
//     "All Employees",
//     "Add Department",
//     "Add Role",
//     "Add Employee",
//     "Update Employee Role",
//     "Update Employee Manager(s)",
//     // "View Employees by Manager",
//     // "View Employees by Department",
//     "Delete Department",
//     "Delete Role",
//     "Delete Employee",
//     "Exit"
// ]}])
