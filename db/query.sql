SELECT * FROM departments;
SELECT * FROM roles;
SELECT * FROM employees;

SELECT role_id AS ID, CONCAT(employee.first_name, " ", employee.last_name) AS Employee, 
    role_id.title AS department.dep_name, roles.salary AS salary
FROM roles
JOIN department 
ON role_id.deparment_id = department.deparment_id



JOIN department
ON roles.deparment_id = department.id
LEFT JOIN employee ON employee.manager_id
