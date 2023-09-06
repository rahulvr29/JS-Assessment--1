"use strict";
/* 1. Write a program that implements an animated loading spinner using setInterval.

Sample Output:
Display an animated loading spinner that changes appearance every 300ms
Output: Spinner frame 1, pause 300ms, Spinner frame 2, pause 300ms,*/

const frames = ["|", "/", "-", "\\"];
let frameIndex = 0;

function animateSpinner() {
  console.log(`Spinner frame ${frames[frameIndex]}`);
  frameIndex = (frameIndex + 1) % frames.length;
}

const spinnerInterval = setInterval(animateSpinner, 300);
setTimeout(() => {
  clearInterval(spinnerInterval);
  console.log("\nSpinner animation completed!");
}, 3000);

/* 2. Write a program that displays a real-time clock that updates every second using
setInterval.
Sample Output:
  Display a real-time clock that updates every second
  Output: 12:00:00, pause 1 second, 12:00:01, pause 1 second, ... */

  function displayClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    

    // if you want un command the console log to  see the result . below line
    // console.log(`${hours}:${minutes}:${seconds}`);
  }
  
  setInterval(displayClock, 1000);


/* 3. Write a program that displays a session timeout reminder every 15 minutes using
setInterval..
Sample Output:
// Display a session timeout reminder every 15 minutes
// Output: Session will expire in 15 minutes (repeats every 15 minutes) */

function displayTimeoutReminder() {
  console.log("Session will expire in 15 minutes");
}

displayTimeoutReminder();

const reminderInterval = setInterval(displayTimeoutReminder, 15 * 60 * 1000);
setTimeout(() => {
    clearInterval(reminderInterval);
    console.log("Session timeout reminders stopped.");
  }, 60 * 60 * 1000);


  /* 4. Write a program that simulates a traffic signal&#39;s changing colors using setTimeout.
Sample Output:
  Simulate a traffic signal with changing colors: Green, pause 30 seconds, Yellow, pause 5
seconds, Red, pause 20 seconds
  Output: Green, pause 30 seconds, Yellow, pause 5 seconds, Red, pause 20 seconds,*/

  function changeColor(color, duration) {
    console.log(color);
    setTimeout(() => {
      if (color === "Green") {
        changeColor("Yellow", 5000); // Switch to Yellow after 5 seconds
      } else if (color === "Yellow") {
        changeColor("Red", 20000); // Switch to Red after 20 seconds
      } else if (color === "Red") {
        changeColor("Green", 30000); // Switch to Green after 30 seconds
      }
    }, duration);
  }
  
  console.log("Simulate a traffic signal with changing colors:");
  changeColor("Green", 0);

  /* 5. Write a program that updates an audio playback progress bar using setInterval.

Sample Output:
  Update the audio playback progress bar every 1 second
  Output: 10%, pause 1 second, 20%, pause 1 second, */

  let progress = 0;

function updateProgressBar() {
  if (progress <= 100) {
    console.log(`${progress}%`);
    progress += 10;
  } else {
    clearInterval(progressInterval);
    console.log("Playback complete.");
  }
}

console.log("Update the audio playback progress bar every 1 second");

const progressInterval = setInterval(updateProgressBar, 1000);

/* 6.  Write a program that uses an object method to sort an array of objects..

Sample Output:
Sorted by Age:
[ { name: &#39;Alice&#39;, age: 25 },
{ name: &#39;Bob&#39;, age: 30 },
{ name: &#39;Charlie&#39;, age: 35 } ] */


const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 }
];

function sortByAge(a, b) {
  return a.age - b.age;
}

console.log("Sorted by Age:");
console.log(people.sort(sortByAge));


/* 7. Write a program that demonstrates the usage of &quot;this&quot; in nested objects.

Sample Output:
Full Name: John Doe */

const person = {
  firstName: 'John',
  lastName: 'Doe',
  getFullName: function () {
    return this.firstName + ' ' + this.lastName;
  },
  address: {
    street: '123 Main St',
    city: 'Coimbatore',
    getFullAddress: function () {
      return this.street + ', ' + this.city;
    }
  }
};

console.log('Full Name:', person.getFullName()); // Full Name: John Doe
console.log('Full Address:', person.address.getFullAddress()); // Full Address: 123 Main St, Coimbatore


/* 8. Write a program that calculates the number of days remaining until a specific date.

Sample Input:
const targetDate = 2023-12-31;
const today = 16-08-2023
Sample Output:
Days Remaining: 159 */

const targetDate = new Date('2023-12-31');
const today = new Date('2023-08-16'); // Make sure to use 'yyyy-mm-dd' format


const timeDifference = targetDate - today;


const daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

console.log('Days Remaining:', daysRemaining);

/* 9. Write a program that demonstrates nested JSON serialization using the toJSON method.

Sample Output:
Custom JSON:
{
&quot;name&quot;: &quot;John&quot;,
&quot;address&quot;: {
&quot;city&quot;: &quot;New York&quot;,
&quot;zip&quot;: &quot;10001&quot;
}
} */

const personA = {
  name: 'John',
  address: {
    city: 'New York',
    zip: '10001'
  },
  toJSON: function () {
    return {
      name: this.name,
      address: this.address
    };
  }
};

const customJSON = JSON.stringify(personA, null, 2);

console.log(`Custom JSON: ${customJSON}`);


/* 10. Write a program that uses the JSON.parse method to create objects from JSON strings.

Sample Output:
Parsed Object: { name: &#39;John&#39;, age: 30 } */


const jsonString = '{"name": "John", "age": 30}';

const parsedObject = JSON.parse(jsonString);

console.log('Parsed Object:', parsedObject);
