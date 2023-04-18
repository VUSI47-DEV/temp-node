const { log } = require('console');
const os = require('os')
// console.log(os.arch()); 

//user information
const user = os.userInfo()

//returns the system uptime in seconds
console.log(`System Uptime is ${os.uptime()} seconds`);

//
const currentOS = {
    name:os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
    arch: os.arch(),
}
console.log(currentOS);