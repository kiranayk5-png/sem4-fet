
window.onload = function() {
    alert("Welcome to Kirana's Portfolio!");
};


document.getElementById("welcomeBtn").addEventListener("click", function() {
    alert("Thanks for visiting my portfolio!");
});

document.getElementById("k1").addEventListener("click", function() {
    this.style.color = "darkgreen";
});


function editRole() {
    let newRole = prompt("Enter your new role:");

    if (newRole && newRole.trim() !== "") {
        document.querySelector(".h").innerText = newRole;
    } else {
        alert("Please enter a valid role!");
    }
}
