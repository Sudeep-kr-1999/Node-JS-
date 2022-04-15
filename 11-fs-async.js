// for asynchronous process
// note:-- readFile and writeFile are by default is asynchronous 

const { readFile, writeFile } = require('fs');

console.log("start");

readFile('./content/first.txt', 'utf8', (error, result) => {
    if (error) {
        console.log(error);
        return;
    } else {

        // note:------- by default we get buffer as a result which contain actual information in certain format , if we donot provide encoding parameter 
        // to get useful information we should provide the encoding parameter generally 'utf-8'
        // console.log(result);

        const first = result;
        readFile('./content/second.txt', 'utf8', (error, result) => {
            if (error) {
                console.log(error);
                return;
            }

            const second = result;
            writeFile('./content/result-async.txt', `\n Here is the result of async ${first} \n ${second}`, (error, result) => {
                if (error) {
                    console.log(error);
                    return;
                }

                console.log("done with this task");

            })

        })
    }
})

console.log("starting the next task");