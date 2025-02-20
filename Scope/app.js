/* let totalEggs = 0;
function collectEggs(){
    totalEggs = 6;
}
collectEggs();
console.log(totalEggs);
*/

function bankRobbery(){
    const heroes = ['Spiderman', 'Wolverine','Black panther', 'Batwoman']    
    function cryForHelp(){
        let color = 'purple';
        function inner(){
            for(let hero of heroes){
                console.log(`PLEASE HELP US, ${hero.toUpperCase()}`)
            }   
        }
        inner();
    }
    cryForHelp();
}










