document.getElementById('employeeForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const id = document.getElementById('id').value;
    const department = document.getElementById('department').value;
    const salary = document.getElementById('salary').value;

    const employee = {
        name: name,
        id: id,
        department: department,
        salary: salary
    };

    let employees = JSON.parse(localStorage.getItem('employees')) || [];
    employees.push(employee);
    localStorage.setItem('employees', JSON.stringify(employees));

    document.getElementById('employeeForm').reset();
    displayEmployees();
});

function displayEmployees() {
    const employees = JSON.parse(localStorage.getItem('employees')) || [];
    const tableBody = document.querySelector('#employeeTable tbody');
    tableBody.innerHTML = '';

    employees.forEach((employee, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${employee.name}</td>
            <td>${employee.id}</td>
            <td>${employee.department}</td>
            <td>${employee.salary}</td>
            <td><button onclick="deleteEmployee(${index})">سڕینەوە</button></td> <!-- دوگمەی سڕینەوە -->
        `;
        tableBody.appendChild(row);
    });
}

function deleteEmployee(index) {
    let employees = JSON.parse(localStorage.getItem('employees')) || [];
    employees.splice(index, 1); // کارمەندەکە بسڕەوە
    localStorage.setItem('employees', JSON.stringify(employees)); // لیستەکە نوێ بکەرەوە
    displayEmployees(); // لیستەکە پیشان بدە
}

document.addEventListener('DOMContentLoaded', displayEmployees);