const fs = require('fs');
const filepath = "./tasks.json";

// Load tasks
const loadTasks = () => {
    try {
        const dataBuffer = fs.readFileSync(filepath);
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (error) {
        return [];
    }
};

// Save tasks
const saveTasks = (tasks) => {
    fs.writeFileSync(filepath, JSON.stringify(tasks));
};

// Add task
const addTask = (task) => {
    const tasks = loadTasks();
    tasks.push({ task });
    saveTasks(tasks);
    console.log("Task added:", task);
};

// List tasks
const listTasks = () => {
    const tasks = loadTasks();
    tasks.forEach((t, index) =>
        console.log(`${index + 1} - ${t.task}`)
    );
};

// Remove task
const removeTask = (index) => {
    const tasks = loadTasks();
    if (index < 1 || index > tasks.length) {
        console.log("Invalid task number");
        return;
    }
    const removed = tasks.splice(index - 1, 1);
    saveTasks(tasks);
    console.log("Removed:", removed[0].task);
};

// Get command
const command = process.argv[2];
const argument = process.argv[3];

// Process commands
if (command === 'add') {
    addTask(argument);
} else if (command === 'list') {
    listTasks();     // FIXED name
} else if (command === 'remove') {
    removeTask(parseInt(argument));  // FIXED missing function
} else {
    console.log("command not found");
}
