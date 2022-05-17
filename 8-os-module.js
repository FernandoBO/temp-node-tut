const os = require('os')

//info about current user
const user = os.userInfo()
// console.log(user);

//method returns system uptime in secodns
console.log(`El tiempo de actividad del usuario es: ${os.uptime()} en segundos`);

const currentOS = {
name:os.type(),
release:os.release(),
totalMem:os.totalmem(),
freeMem:os.freemem(),
}

console.log(currentOS);
