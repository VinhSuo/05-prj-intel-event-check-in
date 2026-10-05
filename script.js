// Needed AOM elements
const form =  document.getElementById("checkInForm");
const name = document.getElementById("attendeeName");
const teamSelect = document.getElementById("teamSelect");



//Track attendee
let count = 0;
const maxCount = 50;  

// Handle form submission
form.addEventListener("submit", function(event) {
  event.preventDefault();

  // Get form values
  const name = nameInput.value;
  const team = teamSelect.value;
  const teamName = teamSelect.selectedOptions[0].text;


  console.log(name, team, teamName);

  //Increment count

  count++;
  console.log("Total check-ins: ", count);

  //Upgrade progree bar
  const percentage = Math.round((count / maxCount) * 100) + "%";
  console.log('Progress: ${percentage} ');

  //Update team counter
  const teamCounter = document.getElementById(team + "Count");
  teamCounter.textContent = parseInt(teamCounter.textContent) + 1;

  //Show message 
  const message = 'Welcome: ${name} from ${teamName}!';
  console.log(message);

  form.reset();

})
    