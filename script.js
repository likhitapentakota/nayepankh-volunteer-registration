const form = document.getElementById("volunteerForm");
const volunteerList = document.getElementById("volunteerList");

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const volunteer = {

        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        skills: document.getElementById("skills").value

    };

    const response = await fetch(
        "http://localhost:3000/register",
        {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(volunteer)
        }
    );

    const data = await response.json();

    alert(data.message);

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("skills").value = "";

    loadVolunteers();
});

async function loadVolunteers() {

    const response =
        await fetch("http://localhost:3000/volunteers");

    const volunteers =
        await response.json();

    volunteerList.innerHTML = "";

    document.getElementById("count").textContent =
        `Total Volunteers: ${volunteers.length}`;

    volunteers.forEach(v => {

        const li = document.createElement("li");

        li.innerHTML = `
            <strong>${v.name}</strong><br>
            Email: ${v.email}<br>
            Phone: ${v.phone}<br>
            Skills: ${v.skills}
        `;

        volunteerList.appendChild(li);
    });
}

loadVolunteers();