document.getElementById('resumeForm').addEventListener('submit', function (e) {
    e.preventDefault();
    // Get input values from the form
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var address = document.getElementById('address').value;
    var education = document.getElementById('education').value;
    var expertise = document.getElementById('expertise').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    var computerSkills = document.getElementById('computerSkills').value;
    var profilePicture = document.getElementById('profilePicture').files[0];
    // Generate resume HTML
    var resumeHTML = "\n        <div class=\"resume-header\">\n            <h2>".concat(name, "</h2>\n            <p>Email: ").concat(email, " | Phone: ").concat(phone, " | Address: ").concat(address, "</p>\n        </div>\n        <div class=\"resume-content\">\n            <h3>Profile Picture</h3>\n            ").concat(profilePicture ? "<img src=\"".concat(URL.createObjectURL(profilePicture), "\" alt=\"Profile Picture\" style=\"max-width: 150px; border-radius: 50%;\">") : "<p>No profile picture uploaded.</p>", "\n\n            <h3>Education</h3>\n            <p>").concat(education, "</p>\n\n            <h3>Expertise</h3>\n            <p>").concat(expertise, "</p>\n\n            <h3>Experience</h3>\n            <p>").concat(experience, "</p>\n\n            <h3>Skills</h3>\n            <p>").concat(skills, "</p>\n\n            <h3>Computer Skills</h3>\n            <p>").concat(computerSkills, "</p>\n        </div>\n    ");
    // Output the resume to the page
    document.getElementById('resumeOutput').innerHTML = resumeHTML;
});
