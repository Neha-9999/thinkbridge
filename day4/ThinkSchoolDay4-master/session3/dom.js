
let subjectCount = 0;

function addSubjectRow(subject = '', outOf = 50, obtained = '') {
    subjectCount++;
    const container = document.getElementById('subjectsContainer');

    const row = document.createElement('div');
    row.classList.add('row');
    row.innerHTML = `
        <input type="text" name="subject" placeholder="Subject" value="${subject}" required>
        <select name="outOf">
            <option value="50" ${outOf==50?'selected':''}>50</option>
            <option value="100" ${outOf==100?'selected':''}>100</option>
        </select>
        <input type="number" name="obtained" placeholder="Marks" value="${obtained}" required>
        <button type="button" class="remove-btn" onclick="this.parentElement.remove()">Remove</button>
    `;
    container.appendChild(row);
}

document.getElementById('studentForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('fullName').value.trim();
    const roll = document.getElementById('rollNumber').value.trim();
    const nameRegex = /^[A-Za-z ]{3,50}$/;
    const rollRegex = /^[A-Z]{4}[0-9]{4}[A-Z]{1}$/;

    if (!nameRegex.test(name)) {
        alert("Full name must contain only alphabets & spaces (3-50 chars)");
        return;
    }
    if (!rollRegex.test(roll)) {
        alert("Roll number format: ABCD1234E");
        return;
    }

    const subjects = [];
    let valid = true;
    document.querySelectorAll('#subjectsContainer .row').forEach(row => {
        const subject = row.querySelector('input[name="subject"]').value.trim();
        const outOf = parseInt(row.querySelector('select[name="outOf"]').value);
        const obtained = parseInt(row.querySelector('input[name="obtained"]').value);

        if (!/^[A-Za-z]+$/.test(subject)) {
            alert("Subject name must contain only alphabets");
            valid = false;
            return;
        }
        if (isNaN(obtained) || obtained < 0 || obtained > outOf) {
            alert(`Obtained marks for ${subject} must be between 0 and ${outOf}`);
            valid = false;
            return;
        }
        subjects.push({ subject, outOf, obtained });
    });

    if (!valid) return;

    localStorage.setItem('studentData', JSON.stringify({ name, roll, subjects }));
    window.location.href = 'score.html';
});

window.onload = function() {
    addSubjectRow();
};
