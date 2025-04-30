const accountId = 3456;
let accountEmail = "aryaman@googgle.com";
var accountPassword = "1234h"
accountCity = "delhi";
let accountState;





//! const value cannot be updated once initialsed 
// accountId = 3;

// console.log(accountId);


console.table([accountId,accountEmail,accountPassword,accountCity,accountState])







let a = {aryaman:"aryaman",aryamanq:"aryamanaryaman",aryamanq:{aryamanaryaman:"sagdsagd"}}
let b = {...a}

b.aryaman = "aparna";
b.aryamanq.aryamanaryaman = "abc";


let c = 5;
let d = c;
 d = 2;



console.table([a,b,d,c]);

