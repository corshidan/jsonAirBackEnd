const { query } = require("../index");
const { carriers } = require("../../all_data/carriers.js")


async function populateAirlinesTable(){
   let rows =0;
for (let i=0; i<carriers.length;i++){
    const { IATA_CD,CARR_NAME,CARGO_IND } = carriers[i]
    const response = await query(
        'INSERT INTO airlines (IATA_CD,CARR_NAME,CARGO_IND) VALUES ($1,$2,$3)', [IATA_CD,CARR_NAME,CARGO_IND])
    rows++
}
console.log("added "+rows+" rows")
}
populateAirlinesTable()