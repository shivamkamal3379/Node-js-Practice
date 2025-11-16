const fs = require('fs');
const filepath = "./tasks.json";

 const loadTasks = () => {
    try{
        const dataBuffer = fs.readFileSync(filepath);
         const dataJSON = dataBuffer.toString() ; 
          return JSON.parse(dataJSON)

    } catch(error){
        return []
    } 
 }


const saveTasks = (tasks)=> {
  const dataJSON =  JSON.stringify(tasks)
  fs.writeFileSync(filepath , dataJSON)
}






const addTask= (task)=>{
    const tasks = loadTasks()
    tasks.push({task})
    saveTasks(tasks)
    console.log("Tasks added" , task )

}

const command = process.argv[2]
const argument = process.argv[3]



  if(command ==='add'){
    addTask(argument)
  }else if(command === 'list'){
    listTask()
  }else if(command === 'remove'){
    removeTask(parseInt(argument))
  }
  else{
    console.log("command not found ");
    
  }
  