1. Selecting Elements

In this script, we select HTML elements using:

document.getElementById('id') → to grab form inputs and containers.

const container = document.getElementById('subjectsContainer');
const name = document.getElementById('fullName').value.trim();


document.querySelectorAll('selector') → to get multiple subject rows.

document.querySelectorAll('#subjectsContainer .row')

2. Creating and Updating Elements

We dynamically add rows of subjects using:

document.createElement('div') → creates a new element.

.innerHTML = ... → sets the row content.

.appendChild(row) → adds it to the container.

const row = document.createElement('div');
row.classList.add('row');
row.innerHTML = `<input type="text"> ...`;
container.appendChild(row);

3. Listening to Events

We handle user actions using event listeners:

Form submit event

document.getElementById('studentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // validation + save data
});


Prevents normal form submission and allows validation.

Remove button click (inline onclick)

<button type="button" onclick="this.parentElement.remove()">Remove</button>


Removes the subject row when clicked.

4. Updating Text, Values, and Classes

Get input values → element.value

Validation with regex → checks name and roll number

Error messages → alert() for invalid input

Styling → .classList.add('row') for new rows

if (!nameRegex.test(name)) {
    alert("Full name must contain only alphabets & spaces (3-50 chars)");
}


5. Storing Data

After successful validation, data is saved in localStorage:

localStorage.setItem('studentData', JSON.stringify({ name, roll, subjects }));


6. Page Load Actions

When the page loads, one subject row is automatically added:

window.onload = function() {
    addSubjectRow();
};

This code shows how to:

Select elements → (getElementById, querySelectorAll)

Listen to events → (form submit, button clicks)

Update text, values, and classes → (validation, dynamic rows)

Create and remove elements dynamically → (subject rows)

Store validated data → (localStorage)