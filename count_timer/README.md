# Project: Countdown Timer

This project is a simple webbased countdown timer. The user inputs the number of seconds, and the timer starts counting down, displaying the remaining time in `hh:mm:ss` format. The user can start, stop, or reset the timer using the available buttons.
 Files in the project:
# 1. HTML File (`index.html`):
    This is the main file that structures the countdown timer application.
    It includes:
      A container to display the countdown timer (`00:00:00` format initially).
      An input field for the user to enter the number of seconds they want to count down from.
      Three buttons to start, stop, and reset the countdown timer.
    The `bootstrap` framework is linked for styling the buttons and layout.
    The `timer.js` file is linked at the end, where the core countdown logic resides.
   
   Key HTML elements:
    Input field (`<input type="number" id="inputTime">`): Where the user enters the number of seconds.
    Buttons: 
      Start: Starts the countdown.
      Stop: Pauses the countdown.
      Reset: Resets the countdown timer and input field.
# 2. CSS (Embedded or External `timer.css`):
    Styles are included for enhancing the visual appearance of the application.
    The timer uses a gradient background (`lineargradient(90deg, rgb(55, 196, 214) 0%, rgba(139,67,198,1) 35%, rgba(0,212,255,1) 100%);`) to create a vibrant and dynamic look.
    The container holding the timer display is styled to be centered, and the text is styled for better readability.
   
   Key CSS classes:
    `.container`: Styles the timer display container with rounded corners, centered alignment, and a border.
    `.col`: Adds spacing between the input field and buttons.
    `body`: Applies a background gradient and white text color for readability.

# 3. JavaScript File (`timer.js`):
    This is where the timer functionality is handled.
    The key functions include:
      `start()`: Starts the countdown if the input is valid and positive. The countdown decreases every second, updating the display.
      `stop()`: Stops (pauses) the countdown, allowing the user to resume it later.
      `reset()`: Resets the timer back to `00:00:00`, clearing the input and stopping the countdown.
      `updateTimer()`: Updates the timer's display every second as long as the countdown is running.
      `displayTime()`: Converts the seconds into hours, minutes, and seconds format and displays it in the `timer` element.
   
   Key variables:
    `seconds`: Stores the input seconds and decreases as the countdown progresses.
    `isRunning`: Keeps track of whether the countdown is currently active to prevent multiple timers from starting.
    `countdown`: Stores the interval ID used to update the timer every second.
   
   Error Handling:
    If the input is invalid (nonnumeric or empty), an alert is shown to prompt the user to enter a valid number.

 # How to Use:

1. Input the time: Enter the number of seconds in the input field.
2. Start the timer: Click on the "Start" button to begin the countdown.
3. Pause the timer: You can stop the timer at any time by clicking the "Stop" button.
4. Reset the timer: Clicking the "Reset" button will reset the timer to `00:00:00` and clear the input field.

 # Setup Instructions:
1. Clone the repository:
   ```bash
   git clone https://github.com/username/countdowntimer.git
   cd countdowntimer  ```

2. Run the project:
    Open the `index.html` file in a browser.

3. Requirements:
    A modern web browser that supports JavaScript and HTML5.
    An internet connection is required to load the Bootstrap CSS and JS libraries (alternatively, download them locally).

 # Technologies Used:
 HTML5: For structuring the web page.
 CSS3: For styling and creating a visually appealing layout.
 JavaScript (ES6): To add interactive functionality to the countdown timer.
 Bootstrap 5.3.3: For responsive and modern button styling.

This project demonstrates how to create a simple, yet functional countdown timer using basic web technologies. It can serve as a foundation for more complex timer applications.
