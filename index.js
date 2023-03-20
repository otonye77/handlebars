function findOutLier(integers){
    let emp = [];
    for(let i = 0; i < integers.length; i++){
      emp.push(integers[i] % 2) 
    }
    let even = emp.filter((e) => e === 0).length;
    let odd = emp.filter((e) => e === 1).length;
    if(odd < even){
        let oddAns = emp.indexOf(odd);
        return integers[oddAns]
    } else {
        let evenAns = emp.indexOf(even);
        return integers[evenAns]
    }
  }

console.log(findOutLier([180,8,0,-2,11,16,12]))