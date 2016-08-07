var umd = require("umd-generator"),
    yargs = require("yargs"),
    readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

if (yargs.argv.directory && yargs.argv.name) {
    umd(yargs.argv.directory, yargs.argv.name);
    process.exit(0);
}
else {
    rl.question('Directory: ', (dir) => {
        rl.question('Name: ', (name) => {
            rl.close();            
            umd(dir, name);
            process.exit(0);
        });
    });
}
