# To Do List  
Link to general design document: https://github.com/computationalmystic/sengfs19/blob/master/assignments/4-assignment-3-support-files/4-Design-requirements.md


## Students  

### 1. Login/Logout  
  - Create database to hold user's credentials   
  - Create validation system and criteria
### 2. Student is able to read assignment instructions
  - determine permissions (ensure that student can only see proper assignment)
  - assignment instructions that are entered by instructor are easily viewable by student
### 3. Student can select assignment they want to submit
  - again, determine permissions
  - add an "open/close" attribute to assignments (determining whether you can submit something)
### 4. Student can upload files
  - specify file type needed
  - implement directories for submitted files to be stored in/accessed from
### 5. Student can provide a comment along with a file submission
  - Create interface for adding comments
  - Comments are logged and displayed to the proper audience
### 6. Student can submit/re-submit uploaded file
  - establish boolean value for if assignment is submitted/not submitted
  - establish permissions to make sure students only submit to proper assignments
  
 ## Teacher Assistants (TA)
 
 ### 1. Login/Logout
   - Create database to hold user's credentials   
   - Create validation system and criteria
 ### 2. TA can view course assignments 
   - Determine permissions
 ### 3. TA can view student submissions for an assignment
   - Determine permissions and way for TA to access submissions after authenitcation
 ### 4. TA can search students in course
   - give TA access to view students/pull info from database
   - create query interface to find students
   - populate students based on query
 ### 5. TA can collect assignments by downloading students' submission data
   - access based on permssions
   - create file dialog to download the file and save it to a desired location
 
## Instructor

### 1. Login/Logout
  - Create database to hold user's credentials
  - Create validation system and criteria
### 2. Instructors canperform all functions TAs can perform
  - Create permissions for instructors that include all the same abilities as the TAs
### 3. Instructor can create/edit/remove courses and sections
  - implement the ability to remove sections or whole courses
    - update across the DB and all users
  - Allow editting of current created courses/sections
### 4. Instructor can add/remove TAs for the course sections
  - Update the DB when a TA is added/deleted
  - give new TAs permissions and remove permissions for deleted TAs
### 5. Instructor can add/remove students in the course sections
  - Update the DB when a student is added/deleted
  - give new students permission to access course materials and remove permissions from students that are removed. 
### 6. Instructor can create/edit/remove assignments of each course
  - create interface to create a new assignment and fill in all pertinent information
  - allow this interface to be accessed when 'edit' mode is selected
  - remove all data from deleted assignments 
  
## System Administrator

### 1. Admin can add/edit/remove/disable instructors
  - Give highest level of permissions and access
  - Create interface to create and edit instructors and where they're assigned
  - Establish error checking so that an instructor with active courses doesn't get deleted
 
