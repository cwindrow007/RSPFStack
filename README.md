# RSPFStack
the RSPF stack (React, Spring boot, Python/PostgreSql, Firebase) is a full-stack development project aimed to be a 
robust inventory system with an authentication system. It is local and will be able to be run on a raspberry Pi.

# Front-End/User Capabilities
The Front-End is where the user can do 99% of their work in managing inventory. It is written in React/TypeScript. 
The user has the following pages:
### Main
The Main page is what is viewed after a valid user has logged in. 
Starting with the top bar we have a launchpad to the top left. This is main menu which allows access to the: 
Main, Products, Orders, Inventory Counts, Invoices, Data, and User-Preferences. The user in which is logged in is located to the 
top right with another drop-down menu. This drop down is settings which allows the user to customize layout, log out,
specify a theme, and reset password. The main menu also will access quick grabs to these identifiers. If a user wants
to use their main menu to display current inventory counts they can do so by customizing this in the custom-layout options.

### Products
The products page allows for **ONLY creating new entries, tables, and accessing a list of all products in system**.  
To add a new entry of a product the client needs to first
create a table in which is where the item will be stored. Creating a new table is as easy as hitting the create Table option.
A user specifies simply table name and if a user and/or 
admin can add new entries to the table or view the table.
To Create an entry you hit the New Entry option.
Items are stored first in the backend before being pushed into the SQL database (A admin must verify the entries first,
specified in the backend section).
The products page for new entries is a form which entitles the following. 
- Table in which it will be stored(Type of product/Department)
- Product name
- Product size
- Manufacturer
- Size
- Price
- UPC code (Optional)
- Number in case (Optional)  

### Orders
A user does not have to access the products page to create new entries and/or create a new table. This can also be 
done under the orders page.
It is strongly advised to create a table first under the products page to make things quicker. If a user is adding 
new product under the orders page they need to fill out all the previous information as before but the user has more responsibilities.
The orders page will not go into the database until confirmed by an admin. The user must specify the following when entering products.
* For Items added in database (Products will autofill if already in except number received).
  - Invoice  #
  - Vendor
   - Product name  
   - Product size  
   - Manufacturer
   - Size  
   - Purchase Price  
   - Sell Price
   - UPC code (Optional)  
   - Number received / is Case? (Optional)  
   - Table in which it will be stored(Type of product/Department) 
   - (If an item is already in database the system will store the order under Invoices.)  
NOTE: 
If a user specifies is case, the system will only ask for number of cases, else individual items if case is not 
  specified under the entry
### Inventory Counts
Inventory counts is a page in which the user can access total value of products on hand (top right), 
Total number of products under specific table (in middle), and adjust inventory counts manually (top right). To adjust a count of 
a product the user must first query the database to find the product location. One the product is found the user can 
specify whether they want to add, remove, or move a product to a separate table. 
### Invoices 
This displays a list of invoices stored both in the database and the program. Has the invoice number, date added, and vendor.
User can sort by invoice number, date, or specific vendor. 
### Data 
Allows a user to see rate in which products sold per month, per year, quantity of products ordered per month, 
monthly spend, profit, products with low inventory count, total value of products, and etc

### User-Preferences.
Allows a user to adjust layout, install themes, make custom themes via CSS. 

# Back-End
The backend is written in Java but the backend also incorporates additional services such as python and SQL. 
Java handles both CRUD and stores items before being sent to database. All items are stored both in the SQL and Java.
Java allows the user to create, read, update, and delete(CRUD) but if a user wants to not submit an order to the database
they can put these items in the backend which are stored within a Queue before being approved by an end-user to the database.
The java within the program also generates distinct hashes for specific entries when added to the database with their count.
When a user wants to accesse all items in the datebase without querying the database java will access the items in which are stored in the hash
decrypt the has to user-readable. For the sake of sorting these items are loaded into an array list before returning to the user.
The user can sort by name, counts, vendor, and so forth depending on their specification.
Python is used to generate user related data to produce graphs of products sold per month, per year, rate in which they sell, etc.
Python is mainly used for data processing.

# User Auth.
User authentication is handled with firebase. A user is timed out after 30 minutes of inactivity and any unsaved work is unloaded.
Depending on a users status or preferences these are saved and loaded everytime. For now user authentication is user and pass.
Further implementations will be added such as 2fa and further tech down the road.






