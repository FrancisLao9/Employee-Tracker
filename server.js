const inquirer = require('inquirer');
const db = require('./utils/root');
const mysql = require('mysql2');
const view = require('./utils/view');

function init() {
    view.menu();
}
init();