const prompt = require("prompt-sync")();
let gunplaCollection = [];
let nextId = 1;
let exit = false;

const listAllKits = () => {
  console.log("Kits in Backlog");
  for (let i = 0; i < gunplaCollection.length; i++) {
    console.log(
      `ID: ${gunplaCollection[i].id} | GRADE: ${gunplaCollection[i].grade} | NAME: ${gunplaCollection[i].name} | STATUS: ${gunplaCollection[i].status}`,
    );
  }
};

const addKit = (name, grade) => {
  const gunpla = {
    id: nextId,
    grade: grade,
    name: name,
    status: "Backlog",
  };

  gunplaCollection.push(gunpla);
  nextId++;

  console.log(`Added new item ${gunpla.grade} | ${gunpla.name}`);
};

const deleteKit = (targetId) => {
  let kitToDelete = gunplaCollection.find((kit) => kit.id === targetId);
  console.log(
    `${targetId} | ${kitToDelete.name} has been removed from backlog.`,
  );
  gunplaCollection = gunplaCollection.filter((kit) => kit.id !== targetId);
};

const markBuilt = (targetId) => {
  gunplaCollection = gunplaCollection.map((kit) => {
    if (kit.id === targetId) {
      return { ...kit, status: "Built" };
    }
  });
};

console.log("--- 🤖 GUNPLA BACKLOG TRACKER ---");
do {
  let action = prompt(
    "(A)dd, (V)iew, (D)elete, (M)ark Built, (P)ick Random, or (X) Exit: ",
  ).toUpperCase();

  switch (action) {
    case "A":
      let name = prompt("Enter name: ");
      let grade = prompt("Enter grade: ");
      addKit(name, grade);
      break;

    case "V":
      listAllKits();
      break;

    case "D":
      let idToFind = prompt("Enter Kit ID to delete: ");
      let idToDelete = parseInt(idToFind);
      deleteKit(idToDelete);
      break;

    case "M":
      let idBuilt = prompt("Enter Kit ID to mark as built: ");
      let parseIdBuilt = parseInt(idBuilt);
      markBuilt(parseIdBuilt);
      break;

    case "P":
      break;

    case "X":
      exit = true;
      break;

    default:
      console.log("Please choose a valid option!");
      break;
  }
} while (!exit);
>>>>>>> 7ec2974 (added CRUD (needs refinement and validation))
