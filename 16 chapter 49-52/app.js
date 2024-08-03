// 1. Create a signup form and display form data in your web
// page on submission.
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get the values from the form
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Display the result
    var resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <h3>Form Data:</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Password:</strong> ${password}</p>
    `;
});


// 2. Suppose in your webpage there is content area in which
// you have entered your item details, but user can only see
// some details on first look. When user clicks on “Read
// more” button, full detail of that particular item will be
// displayed.

document.getElementById('readMoreButton').addEventListener('click', function() {
    var details = document.querySelector('.item-details');
    var summary = document.querySelector('.item-summary');
    var button = document.getElementById('readMoreButton');

    if (details.style.display === 'none') {
        details.style.display = 'block';
        button.textContent = 'Read Less';
    } else {
        details.style.display = 'none';
        button.textContent = 'Read More';
    }
});

// 3. In previous assignment you have created a tabular data
// using javascript. Let’s modify that. Create a form which
// takes student’s details and show each student detail in
// table. Each row of table must contain a delete button and
// an edit button. On click on delete button entire row should
// be deleted. On click on edit button, a hidden form will
// appear with the values of that row.

var studentForm = document.getElementById('studentForm');
        var studentTable = document.getElementById('studentTable').getElementsByTagName('tbody')[0];
        var editForm = document.getElementById('editForm');
        var editStudentForm = document.getElementById('editStudentForm');
        var editRowIndex = document.getElementById('editRowIndex');
        var editName = document.getElementById('editName');
        var editAge = document.getElementById('editAge');
        var editGrade = document.getElementById('editGrade');

        studentForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            var name = document.getElementById('name').value;
            var age = document.getElementById('age').value;
            var grade = document.getElementById('grade').value;
            
            addRow(name, age, grade);
            
            studentForm.reset();
        });

        function addRow(name, age, grade) {
            var row = studentTable.insertRow();
            
            row.insertCell(0).textContent = name;
            row.insertCell(1).textContent = age;
            row.insertCell(2).textContent = grade;
            
            var actionsCell = row.insertCell(3);
            actionsCell.innerHTML = `
                <button class="edit-button">Edit</button>
                <button class="delete-button">Delete</button>
            `;
            
            row.querySelector('.delete-button').addEventListener('click', function() {
                row.remove();
            });
            
            row.querySelector('.edit-button').addEventListener('click', function() {
                editRowIndex.value = row.rowIndex - 1;
                editName.value = name;
                editAge.value = age;
                editGrade.value = grade;
                editForm.style.display = 'block';
            });
        }

        editStudentForm.addEventListener('submit', function(event) {
            event.preventDefault();

            var index = parseInt(editRowIndex.value);
            var name = editName.value;
            var age = editAge.value;
            var grade = editGrade.value;

            var row = studentTable.rows[index];
            row.cells[0].textContent = name;
            row.cells[1].textContent = age;
            row.cells[2].textContent = grade;

            editForm.style.display = 'none';
        });

