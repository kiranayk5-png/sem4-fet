function addSkills() {

    // WHILE LOOP
    let i = 0;
    while (i < 2) {
        let skill = prompt("Enter frontend skill:");
        
        if (skill) {
            let li = document.createElement("li");
            li.innerText = skill;
            document.getElementById("frontend").appendChild(li);
        }
        i++;
    }

    // DO-WHILE LOOP
    let again;
    do {
        let skill = prompt("Enter framework skill:");
        
        if (skill) {
            let li = document.createElement("li");
            li.innerText = skill;
            document.getElementById("framework").appendChild(li);
        }

        again = confirm("Add more framework skills?");
    } while (again);
}
