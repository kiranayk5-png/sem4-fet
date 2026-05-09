function addSkill() {

    let skill = prompt("Enter skill:");
    let choice = prompt("1-Frontend  2-Framework");

    let li = document.createElement("li");
    li.innerText = skill;

    if (choice == "1") {
        document.getElementById("f").appendChild(li);
    } else {
        document.getElementById("fw").appendChild(li);
    }
}
