const generateTeamInfo = (team) => {
    console.log(team);

    //Create an empty array to add html elements
    const teamArray = [];

    const createManager = manager => {

        let managerArray = `
        <div class="card" style="width: 18rem;">
            <div class="card-header">
           ${manager.name} <br/>
           <i class="fas fa-mug-hot"></i>Manager</div>
           <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${manager.id}</li>
            <li class="list-group-item">Email: <span id="email"><a href="mailto:${manager.email}">${manager.email}</a></span></li>
            <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
            </ul>
        </div>
        `;
        
        teamArray.push(managerArray)
    };
    const createEngeneer = engeneer => {

        let engineerArray = `
        <div class="card" style="width: 18rem;">
            <div class="card-header">
           ${engeneer.name} <br/>
           <i class="fas fa-mug-hot"></i>Manager</div>
           <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${engeneer.id}</li>
            <li class="list-group-item">Email: <span id="email"><a href="mailto:${engeneer.email}">${engeneer.email}</a></span></li>
            <li class="list-group-item">Office Number: ${engeneer.gitUsername}</li>
            </ul>
        </div>
        `;
        
        teamArray.push(engineerArray)
    };

    const createInter = intern => {

        let internArray = `
        <div class="card" style="width: 18rem;">
            <div class="card-header">
           ${intern.name} <br/>
           <i class="fas fa-mug-hot"></i>Manager</div>
           <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${intern.id}</li>
            <li class="list-group-item">Email: <span id="email"><a href="mailto:${intern.email}">${intern.email}</a></span></li>
            <li class="list-group-item">Office Number: ${intern.school}</li>
            </ul>
        </div>
        `;
        
        teamArray.push(internArray)
    };
}