document.getElementById('resumeForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get input values from the form
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const education = document.getElementById('education').value;
    const expertise = document.getElementById('expertise').value;
    const experience = document.getElementById('experience').value;
    const skills = document.getElementById('skills').value;
    const computerSkills = document.getElementById('computerSkills').value;
    const profilePicture = document.getElementById('profilePicture').files[0];

    // Generate resume HTML
    let resumeHTML = `
        <div class="resume-header">
            <h2>${name}</h2>
            <p>Email: ${email} | Phone: ${phone} | Address: ${address}</p>
        </div>
        <div class="resume-content">
            <h3>Profile Picture</h3>
            ${profilePicture ? `<img src="${URL.createObjectURL(profilePicture)}" alt="Profile Picture" style="max-width: 150px; border-radius: 50%;">` : `<p>No profile picture uploaded.</p>`}

            <h3>Education</h3>
            <p>${education}</p>

            <h3>Expertise</h3>
            <p>${expertise}</p>

            <h3>Experience</h3>
            <p>${experience}</p>

            <h3>Skills</h3>
            <p>${skills}</p>

            <h3>Computer Skills</h3>
            <p>${computerSkills}</p>
        </div>
    `;

    // Output the resume to the page
    document.getElementById('resumeOutput').innerHTML = resumeHTML;
});
