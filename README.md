# umd-generator-cli
[![npm version](https://badge.fury.io/js/umd-generator-cli.svg)](https://badge.fury.io/js/umd-generator-cli)

This is the command line interface for umd-generator, available here: https://github.com/LeeCheneler/umd-generator.

### How To
Install umd-generator-cli globally to enable it in command line:
```
npm install -g umd-generator-cli
```

Then use like so:
```
umd --directory ./newDir --name myModule
```

Or you can use it without specifying its variables in advance:
```
umd
Directory: ./newdir
./newDir
Name: myModule
myModule
```
