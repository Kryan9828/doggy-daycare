let dataModel = [
  {
    name: "Kalix",
    breed: "Black Lab",
    age: 10,
    likesTreats: true,
  },
  {
    name: "Jake",
    breed: "German Shepard Mix",
    age: 7,
    likesTreats: true,
  },
  {
    name: "Buddy",
    breed: "Boxer",
    age: 4,
    likesTreats: true,
  }

];

function onSubmitDog (event) {
  event.preventDefault();

  let nameInput = document.querySelector("#name_input");  // We provide a CSS selector, as a string, to identify which HTML element we want querySelector to find for us.
  let breedInput = document.querySelector("#breed_input");
  let ageInput = document.querySelector("#age_input");
  let treatsCheckbox = document.querySelector("#treats_input");

  let name = nameInput.value;
  let breed = breedInput.value;
  let age = ageInput.value;
  let likesTreats = treatsCheckbox.checked;
  
  if (name === "" || breed === "" || age === "") {  // If any of these text boxes are empty...
    alert("Please fill out all of the fields!");
    return;  // Exit the function early if the above condition is true.
  }

 
  let dog = {
    name : `${name}`,
    breed: `${breed}`,
    age: `${age}`,
    likesTreats: `${likesTreats}`,
    }
dataModel.push (dog)

  renderDogList(); 
  nameInput.value = "";
  breedInput.value = "";
  ageInput.value = "";
  treatsCheckbox.checked = false;
}

function renderDogList() {
  let list = document.querySelector("#dog_list");
  list.innerHTML = "";  
  if (dataModel < [0]){
    let listItem = document.createElement("li")
    listItem.innerHTML = "No Dogs!"
    list.append(listItem)    
  }
  for (let i  = 0; i<dataModel.length;i++){
    let doglist = dataModel[i]
    if (doglist >= [0]){
      let listItem = document.createElement("li")
      listItem.innerHTML = `We have a/an ${dataModel[i].age} ${dataModel[i].breed} named ${dataModel[i].name} who likes treats: ${dataModel[i].likesTreats}`
      list.append(listItem)
      let sendHomeButton= document.createElement("button")
      sendHomeButton.append("Send Home")
      sendHomeButton.addEventListener("click", function (){removeDog()})
      listItem.append(sendHomeButton)
    }
  }

}

function removeDog(dog) {
  let dogIndex = dataModel.indexOf(dog);
  dataModel.splice(dogIndex, 1);

  renderDogList();
}

let button = document.querySelector("#submit_button");
button.addEventListener("click", onSubmitDog);

renderDogList();
