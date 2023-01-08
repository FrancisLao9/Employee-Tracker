INSERT INTO department (id, dep_name)
VALUES (1, "Sales"),
       (2, "Engineering"),
       (3, "Finance"),
       (4, "Legal");

INSERT INTO roles (id, title, salary, department_id)
VALUES (1, "Sales Lead", "Sales", 100000),
       (2, "Salesperson", "Sales", 8000),
       (3, "Lead Engineer", "Engineering", 150000),
       (4, "Software Engineer", "Engineering", 120000),
       (5, "Account Manager", "Finance", 160000),
       (6, "Accountant", "Finance", 125000),
       (7, "Legal Team Lead", "Legal", 250000),
       (8, "Lawyer", "Legal", 19000);
       
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (1, "John", "Doe", 1, NULL),
       (2, "Mike", "Chan", 1, 1),
       (3, "Ashley", "Rodriguez", 2, NULL),
       (4, "Kevin", "Tupik", 2, 3),
       (5, "Kunal", "Singh", 3, NULL),
       (6, "Malia", "Brown", 3, 5),
       (7, "Sarah", "Lourd", 4, NULL),
       (8, "Tom", "Allen", 4, 7);