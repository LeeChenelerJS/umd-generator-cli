# umd-generator-cli
Generates boiler plate for a javascript Universal Module Definition. Defines your module in CommonJS, AMD and the browser depending on the environment it detects.

### How To
Install umd-generator-cli globally to enable it in command line:
```
npm install -g umd-generator-cli
```

Then use like so:
```
umd-generator-cli --directory ./newDir --name myModule
```

Or you can use it without specifying its variables in advance:
```
umd-generator-cli
Directory: ./newdir
./newDir
Name: myModule
myModule
```
