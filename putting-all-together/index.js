/**
 * 1. form for submitting names of new students
 * --> input field
 * --> input button type
 *
 * 2. list the submitted names
 * --> add the list dynamically from JavaScript
 * --> DOM manipulation
 * --> add li element to the DOM- within the ul element
 *
 * 3. we should be able to delete a student's name from the list
 * --> button for deleting the names
 *
 * 4. Possibly style our application
 */

/**
 * HTML FORMS
 * used for collecting user inputs
 *
 */

document.addEventListener('DOMContentLoaded', () => {
  // references the input field for entering a new student's name
  const newStudentName = document.getElementById('new-student-name');

  // reference the ul where the students names will be added
  const studentList = document.getElementById('students');

  // add an event listener for when the form is submitted
  document
    .querySelector('#students-lists-form')
    .addEventListener('submit', (e) => createNewStudent(e));

  const createNewStudent = (event) => {
    // prevents the default reload behavior of our form
    event.preventDefault();
    //   console.log('My content was submitted');

    //   create a list 'li' element and assign it to a variable
    const newList = document.createElement('li');

    // checking for the value entered in the input field
    // console.log(newStudentName.value);

    //   set the text of the list item to the value entered in the input field
    newList.textContent = newStudentName.value;

    //   calls the createDeleteButton function to add a delete button to the list item
    createDeleteButton(newList);

    //   adds the new list item with the delete button to the unorder list
    studentList.appendChild(newList);

    //   ensures that we are able to reset/clear the form input field after submission
    // event.target.reset();

    newStudentName.value = '';
  };

  // creating button for deleting a student from the list
  const createDeleteButton = (task) => {
    //   creates a new button element
    const btn = document.createElement('button');
    // sets the text fot the button to "X"
    btn.innerHTML = 'X';
    //   btn.innerText = 'X' // alternative #2
    //   add the button to the list item
    task.appendChild(btn);
    btn.addEventListener('click', (e) => {
      const studentToDelete = e.target.parentElement;
      console.log(studentToDelete);
      studentToDelete.remove();
      //   studentList.removeChild(studentToDelete); // alternative #2
    });
  };
});
