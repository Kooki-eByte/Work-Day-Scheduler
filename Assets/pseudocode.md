# Getting started

```
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

You'll need to use the [Moment.js](https://momentjs.com/) library to work with date and time.

---

- Judging by the css we should use a label to display the time of 9-5
- textarea for the user to type onto
- a save button to save the contents of the text area into local storage
  - An array or object or object area?

## variables needed

- Grab const of currentDay
- Either create element with jQuery or just make it in the html

## functions needed

## event listeners
