var scroe:number = 0;
let score2 = 200;
const defaultScore = 0;
function outer(){
    var score = 0
    function inner(){
        console.log(score)
    }
    inner();
    console.log(score)
}

outer();