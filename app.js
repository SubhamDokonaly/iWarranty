const fs = require('fs');
const xlsx = require('xlsx');
const { program } = require('commander');

const logFilePath = 'activity.log'; // Path to the log file

// Function to log activity
function logActivity(command, inputFile, searchQuery) {
  const activity = `${new Date().toISOString()} - Command: ${command}, InputFile: ${inputFile}, SearchQuery: ${searchQuery}\n`;
  fs.appendFileSync(logFilePath, activity);
}

// Define the command-line interface
program
  .arguments('<inputFile> [searchQuery]')
  .description('Convert Excel file to JSON and optionally search for specific data')
  .action((inputFile, searchQuery) => {
    // Log the activity
    logActivity('convert', inputFile, searchQuery);

    const workbook = xlsx.readFile(inputFile);
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const jsonData = xlsx.utils.sheet_to_json(worksheet);

    if (searchQuery) {
      const [key, value] = searchQuery.split('=');
      if (key && value) {
        // Key-value pair search
        const filteredData = jsonData.filter(item => {
          return item[key] && item[key].toString().toLowerCase() === value.toLowerCase();
        });
        console.log(JSON.stringify(filteredData, null, 2));
        // Log the activity
        logActivity('search (key-value)', inputFile, searchQuery);
      } else {
        // Random text search
        const filteredData = jsonData.filter(item => {
          return Object.values(item).some(val => {
            if (typeof val === 'string' && val.toLowerCase().includes(searchQuery.toLowerCase())) {
              return true;
            }
            return false;
          });
        });
        console.log(JSON.stringify(filteredData, null, 2));
        // Log the activity
        logActivity('search (text)', inputFile, searchQuery);
      }
    } else {
      console.log(JSON.stringify(jsonData, null, 2));
    }
  });

program.parse(process.argv);