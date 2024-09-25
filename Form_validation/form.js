const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password"); 
const cpassword = document.getElementById("cpassword");
const course = document.getElementById("course");
const date = document.getElementById("date");
const file = document.getElementById("file");
const state = document.getElementById("state");
const district = document.getElementById("district");
const genderOptions = document.getElementsByName("gender");
const checkboxes = document.querySelectorAll('input[name="checkbox"]');
const agreeCheckbox = document.querySelector('input[name="checkbox-1"]'); 

const today = new Date().toISOString().split('T')[0];
document.getElementById('date').setAttribute('min', today);

const districts = {
    "a": ["Chennai", "Coimbatore", "Madurai", "Tirupur","Erode","karur"   ], // Tamil Nadu
    "b": ["Thiruvananthapuram", "Kochi", "Kozhikode"], // Kerala
    "c": ["Bengaluru", "Mysuru", "Mangaluru"] // Karnataka
};

form.addEventListener("submit", (e) => {
    if (!validateInputs()) {
        e.preventDefault();
    } else {
        e.preventDefault();
        alert('Form submitted successfully!');
    }
});

function populateDistricts() {
    const selectedState = state.value;
    district.innerHTML = '<option value="none">None</option>';

    if (selectedState !== "none") {
        districts[selectedState].forEach(districtName => {
            const option = document.createElement("option");
            option.value = districtName;
            option.textContent = districtName;
            district.appendChild(option);
        });
    }
}

function validateInputs() {
    let success = true;
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();
    const courseVal = course.value;
    const dateVal = date.value.trim();
    const fileVal = file.value.trim();
    const stateVal = state.value;
    const districtVal = district.value;

    let genderSelected = false;
    for (let i = 0; i < genderOptions.length; i++) {
        if (genderOptions[i].checked) {
            genderSelected = true;
            break;
        }
    }

    if (!genderSelected) {
        success = false;
        setError(genderOptions[0].parentElement, 'Gender selection is required');
    } else {
        setSuccess(genderOptions[0].parentElement);
    }

    if (usernameVal === '') {
        success = false;
        setError(username, 'Name is required');
    } else if (!validateName(usernameVal)) {
        success = false;
        setError(username, 'Please enter a valid name');
    } else {
        setSuccess(username);
    }

    if (emailVal === '') {
        success = false;
        setError(email, 'Email is required');
    } else if (!validateEmail(emailVal)) {
        success = false;
        setError(email, 'Please enter a valid email');
    } else {
        setSuccess(email);
    }

    if (passwordVal === '') {
        success = false;
        setError(password, 'Password is required');
    } else if (!validatePassword(passwordVal)) {
        success = false;
        setError(password, 'Please enter a strong password');
    } else if (passwordVal.length < 8) {
        success = false;
        setError(password, 'Password must be at least 8 characters');
    } else {
        setSuccess(password);
    }

    if (cpasswordVal === '') {
        success = false;
        setError(cpassword, 'Confirm password is required');
    } else if (cpasswordVal !== passwordVal) {
        success = false;
        setError(cpassword, 'Passwords do not match');
    } else {
        setSuccess(cpassword);
    }

    if (courseVal === 'None') {
        success = false;
        setError(course, 'Course selection is required');
    } else {
        setSuccess(course);
    }

    if (dateVal === '') {
        success = false;
        setError(date, 'Date selection is required');
    } else {
        setSuccess(date);
    }

    if (fileVal === '') {
        success = false;
        setError(file, 'Select a required file');
    } else {
        setSuccess(file);
    }

    if (stateVal === 'none') {
        success = false;
        setError(state, 'Select your state');
    } else {
        setSuccess(state);
    }

    if (districtVal === 'none') {
        success = false;
        setError(district, 'Select your district');
    } else {
        setSuccess(district);
    }

    if (!validateCheckboxes()) {
        success = false;
    }

    if (!validateAgreeCheckbox()) {
        success = false;
    }

    return success;
}

function validateCheckboxes() {
    let checkedCount = 0;
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            checkedCount++;
        }
    });

    if (checkedCount < 2 || checkedCount > 3) {
        setError(checkboxes[0].parentElement, 'Please select at least 2 and at most 3 age limits.');
        return false;
    } else {
        setSuccess(checkboxes[0].parentElement);
        return true;
    }
}

function validateAgreeCheckbox() {
    if (!agreeCheckbox.checked) {
        setError(agreeCheckbox.parentElement, 'You must agree to the terms to proceed.');
        return false;
    } else {
        setSuccess(agreeCheckbox.parentElement);
        return true;
    }
}

function setError(element, message) {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');

    errorElement.innerText = message;
    inputGroup.classList.add('error');
    inputGroup.classList.remove("success");
}

function setSuccess(element) {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');

    errorElement.innerText = '';
    inputGroup.classList.add('success');
    inputGroup.classList.remove("error");
}

const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

const validatePassword = (password) => {
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,30}$/;
    return passwordPattern.test(password);
};

const validateName = (username) => {
    const namePattern = /^[A-Za-z\s]{3,25}$/;
    return namePattern.test(username);
};
/*function downloadExcel() {
    // Collect form data
    const formData = {
        Name: document.getElementById('username').value,
        Email: document.getElementById('email').value,
        Password: document.getElementById('password').value,
        Course: document.getElementById('course').value,
        Date: document.getElementById('date').value,
        State: document.getElementById('state').value,
        District: document.getElementById('district').value,
        Gender: document.querySelector('input[name="gender"]:checked') ? document.querySelector('input[name="gender"]:checked').value : '',
        I_Agree: document.querySelector('input[name="checkbox-1"]').checked ? 'Yes' : 'No'
    };

    // Convert form data to an array of arrays (rows)
    const worksheetData = [
        ['Field', 'Value'],
        ['Name', formData.Name],
        ['Email', formData.Email],
        ['Password', formData.Password],
        ['Course', formData.Course],
        ['Date', formData.Date],
        ['State', formData.State],
        ['District', formData.District],
        ['Gender', formData.Gender],
        ['I Agree', formData.I_Agree]
    ];

    // Create a new workbook
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.aoa_to_sheet(worksheetData);
    XLSX.utils.book_append_sheet(wb, ws, "Form Data");

    // Download the Excel file
    XLSX.writeFile(wb, "FormData.xlsx");
}*/
