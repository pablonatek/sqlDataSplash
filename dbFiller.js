const db = require('db');

await getTable("client");

async function getTable(name, schema = null){

    try {
        const sql =`SHOW COLUMNS FROM ?`;
      
        const [result, fields] = await db.query(sql, name);
      
        console.log(result);
        console.log(fields);
      } catch (err) {
        console.log(err);
      }

}
const fish = [
    'salmon',
    'tuna',
    'cod',
    'bass',
    'trout',
    'perch',
    'catfish',
    'mackerel',
    'swordfish',
    'anchovy'
  ];
  
console.log(fish);

const colors = [
'red',
'blue',
'green',
'yellow',
'orange',
'purple',
'pink',
'black',
'white',
'brown'
];

console.log(fish);