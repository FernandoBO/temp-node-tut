const { readFile, writeFile } = require('fs')

readFile ('./content/first.txt', 'utf8', (err,result) => {
    if(err){
        console.log(result)
        return
    }
    const first = result;
    readFile ('./content/second.txt', 'utf8', (err,result) => {
        if(err)
        {
            console.log(err)
            return
        }
    })
    const second = result
    writeFile(
        './content/result-async.txt',
        `aquí está el resultado: ${first}, ${second}`,
        (err,result => {
            if(err){
                console.log(err)
                return
            }
            // console.log(result)
            console.log('done with this task')
        })
    )  
})
console.log('starting next task')