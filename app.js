const fs = require('fs');

const generatePage = require('./src/page-template');

const profileDataArgs = process.argv.slice(2);

const [name, github] = profileDataArgs;


fs.writeFile('index.html', generatePage(name, github), err => {
    if (err) throw new Error(err); //creates an exceptiona and stops the execution of the code

    console.log('Portfolio complete! Check out index.html to see the output!');
});


