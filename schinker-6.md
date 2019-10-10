## To-do layout for Class Submission Application 

### General Requirements 
- General UI to access all features provided by system
	- UI must be intuitive and easy to access
- create databases for holding user information
- determine system to hold courses and course work 

### STUDENTS
1. Login/Logout

 - Configure user login database
 - Create login and logout methods
 - Define logic/permissions for different types of users (Students, TA's, Instructors)
 
2. Student is able to read assignment instructions

- Error check to ensure student is logged in to view
- Create course repository (important)
- Add methods to create new courses/course repositories
- Logic to ensure student is a part of course repository review 
 
3. Student can select assignment they want to submit

- Similar criteria and logic for viewing an assignment 
- Specific UI page to display assignments provided
- Query database/repository for class assignments and populate UI
- Transition to upload page
  
4. Student can upload files 

- Access course repository/database
- Ability to transfer submitted files to said database
- Define which file types are supported
- Define logic and error checks for submitted files
- Display that submission was successful or not
 
5. Student can provide a comment along with a file submission

- Element on UI that allows for text input
- Methods that attach message to submission
- Insert message into database in an optional field of the submission data
  
6. Student can submit/re-submit uploaded file 

- Methods for resubmission/updating the database with new submission
- UI elements that display resubmission as an option
- Same logic and criteria as first file submission 
  
### TEACHER ASSISTANTS (TA)
1. Login/Logout

- Logic will match that of students login
- Logic defined for this specific user will lead to UI elements/methods specifically available to this user
	- Grading
	- Viewing course wide submissions
 
2. TA can view course assignments.

- Populate UI from database with course assignment data
- Ability to specify if TA's have read/write permissions 

3. TA can view student submissions for an assignment.

- Access to this function granted by TA credential upon login
- Populate UI with course submissions from database
- UI to click on and view this data
- methods that connect this functionality to grading functionality 
 
4. TA can search students in a course

- Methods to search database for specific students
- Populate search results on UI
- methods for actions that can be taken with queried students 
  
5. TA can collect assignments by downloading students' submission files

- Prompt for selecting where the file shall go on TA local machine
- Accessing selected submission files from database
- Methods for querying database

### INSTRUCTOR
 1. Login/Logout
 
 - Same logic as for students and TAs, with certain permissions granted to Instructor 

2. Instructors can perform all functions TAs can perform.

- Define logic for granting access to this functionality 
- TA user has access to specified methods

3. Instructor can create/edit/remove courses and sections

- Methods for creating/editing/removing courses from course database/repository
- UI for initializing/removing courses
- Ability to manage databse/repository containing courses 
	 
4. Instructor can add /remove TAs for the course sections

- Define logic and methods to grant TA permission
- Access user database to add said permissions to specified user

5. Instructor can add/remove students in the course sections

- Access which students are in course and display that data
- Methods and logic for adding/removing students manually in the database

6. Instructor can create/edit/remove assignments of each course

- Methods for creating/editing/removing assignments from course database/repository
- UI for initializing/removing assignments
- Ability to manage databse/repository containing assignments

### SYSTEM ADMINISTRATOR
1. Admin can add/edit/remove/disable instructors
- Logic to varify that user is a system administrator 
- Access data from user databse that show's who is an instructor and display that data
- Methods and logic for overseeing instructors 
- Add field in databse to state if instructor is disabled?
	  
