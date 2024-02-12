# iWarranty

# Initialization Steps
1. Ensure that you have performed "npm install" or "npm i".
2. Make sure you are in the correct folder path when using CMD.
3. Open your command prompt. After that, follow the steps below for the desired result.

# To Convert Excel to JSON in CMD
Command: node app.js "Path To the Excel"
Example: node app.js "C:\Users\subham.sidhartha\Downloads\iw-tech-test-retailer-data.xlsx"

# To Store the Excel Data in JSON Format
Command: node app.js "Path To the Excel" > "Output file name.json"
Example: node app.js "C:\Users\subham.sidhartha\Downloads\iw-tech-test-retailer-data.xlsx" > output.json

# To Search for a Specific Term
Command: node app.js "Path To the Excel" "searchTerm"
Example: node app.js "C:\Users\subham.sidhartha\Downloads\iw-tech-test-retailer-data.xlsx" New South

# To Search for a Key-Value Pair
Command: node app.js "Path To the Excel" "key"="value"
Example: node app.js "C:\Users\subham.sidhartha\Downloads\iw-tech-test-retailer-data.xlsx" "content_post_title"="TUCKER BARBECUES TAREN POINT"

# Note: Every search activity is logged in activity.log.