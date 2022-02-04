class table{}
const table = new Table({
  columns: ['Name', 'Email', 'Phone Number'],
  data: [
    ['Rezi', 'rezi00913@gmail.com', '082273696424'],
    ['Nasya', 'Nasya15@gmail.com',   '082263519356']
  ]
});
const library = document.getElementById("library");
table.render(library);
/*.updateConfig({
  columns: ['Name', 'Email', 'Phone Number'],
});*/