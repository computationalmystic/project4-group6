
To do list

# to do list
https://github.com/njewwc/sengfs19/blob/master/assignments/4-assignment-3-support-files/4-Design-requirements.md

### STUDENTS- 
1. Login/Logout

  
   
  - Create database to hold user's credentials
  -  a ui with user and password fields
   - methods and classes to check against a server of users to validate a password and user

   - Define logic/permissions for different types of users (Students, TA's, Instructors)
 
		    
2. Student is able to read assignment instructions
	
	
	

- Error check to ensure student is logged in to view
- Create course repository (important)
- creation of assignment database
- method to allow students to view files
- Logic to ensure student is a part of course repository review
- assignment instructions that are entered by instructor are easily viewable by student

  
3. Student can select assignment they want to submit
  
- needs a way to check file type 
- error messages for file type errors
- Similar criteria and logic for viewing an assignment 
- Specific UI page to display assignments provided
- Query database/repository for class assignments and populate UI
- Transition to upload page
- add an "open/close" attribute to assignments (determining whether you can submit something)


4. Student can upload files 

  	
	
- Method to choose files
- Access course repository/database
- Ability to transfer submitted files to said database
- Define which file types are supported
- Define logic and error checks for submitted fi
- specify file type needed
- implement directories for submitted files to be stored in/accessed from


5. Student can provide a comment along with a file submission
  
  	


- Element on UI that allows for text input
- Methods that attach message to submission
- Insert message into database in an optional field of the submission data
- Comments are only displayed to the teachers and ta’s



  
6. Student can submit/re-submit uploaded file 

	

- establish boolean value for if assignment is submitted/not submitted
- establish permissions to make sure students only submit to proper assignments
- Methods for resubmission/updating the database with new submission(Same logic and criteria as first file submission)

- UI elements that display resubmission as an option


 
### TEACHER ASSISTANTS (TA)
1. Login/Logout

	

- Create database to hold user's credentials
- Create validation system and criteria
- Logic will match that of students login
- Logic defined for this specific user will lead to UI elements/methods specifically available to this user
- Grading
- Viewing course wide submissions


2. TA can view course assignments.
 
 
	

- Make sure ta is allowed to see what instructor can see
- Populate UI from database with course assignment data
- Ability to specify if TA's have read/write permissions
 
 
3. TA can view student submissions for an assignment.
	
	

- Determine permissions and way for TA to access submissions after authentication
- Populate UI with course submissions from database
- UI to click on and view this data
- methods that connect this functionality to grading functionality

4. TA can search students in a course

- method to search tables for specific student users 

- give TA access to view students/pull info from database
- populate students based on query
- Populate search results on UI

- methods for actions that can be taken with queried students

	
 
5. TA can collect assignments by downloading students' submission files

- methods to download tables from database
 
- Methods for querying database

- create file dialog to download the file and save it to a desired location

- Accessing selected submission files from database



	
  

### INSTRUCTOR
1. Login/Logout



 
- Same logic as for students and TAs, with certain permissions granted to Instructor


2. Instructors can perform all functions TAs can perform.

- create user permissions to see who(TA’s gets access to what tables and access to creation

- Define logic for granting access to this functionality 

- Create permissions for instructors that include all the same abilities as the TAs

- TA user has access to specified methods
	
	 
3. Instructor can create/edit/remove courses and sections
	 
 
- Methods for creating/editing/removing courses/sections from course database/repository
- UI for initializing/removing courses
- Ability to manage database/repository containing courses
	 
4. Instructor can add /remove TAs for the course sections
	  

- Define logic and methods to grant TA permission
- Access user database to add said permissions to specified user
- remove permissions for deleted TA’s
- update database

	  
5. Instructor can add/remove students in the course sections
	  
- Update the DB when a student is added/deleted
- give new students permission to access course materials and remove permissions from students that are removed.
- Access which students are in course and display that data
- Methods and logic for adding/removing students manually in the database
6. Instructor can create/edit/remove assignments of each course
	 
	
- create user interface to create a new assignment and fill in all pertinent information
- remove all data from deleted assignments
- Methods for removing assignments from course database/repository
- Ability to manage database/repository containing assignments

### SYSTEM ADMINISTRATOR
1. Admin can add/edit/remove/disable instructors

	
- Give highest level of permissions and access
- Create interface to create and edit instructors and where they're assigned
- Establish error checking so that an instructor with active courses doesn't get deleted
- Logic to varify that user is a system administrator 
 
 
