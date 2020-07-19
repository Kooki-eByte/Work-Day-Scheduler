$(document).ready(function () {
  // globally call moment api and the hour to know when to change the attribute
  const now = moment(); // moment api
  let hour = now.hours(); // getting the hour at the moment

  let currentDay = $("#currentDay");

  const divContainer = $(".container");

  let agenda = JSON.parse(localStorage.getItem("agenda"));
  //   let agendaTime = JSON.parse(localStorage.getItem("agendaTime"));
  let agendaArray = [];

  function storeAgenda() {
    // Push text content value as well as time in a object and into the array
    // let userAgenda = $();
    console.log("I am pressed");
  }

  function updateCurrentTime() {
    currentDay.text(moment().format("llll"));
  }

  // Gives the time-blocks the class attribute for each textarea
  function givePastPresentFuture() {
    for (let i = 0; i < 9; i++) {
      const now = moment(); // moment api
      let hour = now.hours();

      let textboxId = "#textbox-" + (i + 9);

      let textBox = $(textboxId);

      let textBoxHour = textBox.attr("data-hour");

      if (hour > textBoxHour) {
        textBox.attr("class", "past description");
      } else if (hour == textBoxHour) {
        textBox.attr("class", "present description");
      } else {
        textBox.attr("class", "future description");
      }
    }
  }

  // Creates and displays the time-blocks onto the html
  function displayTimeBlock() {
    for (let i = 0; i < 9; i++) {
      // Create elements
      let createTimeBlockDiv = $("<div>");
      let createForm = $("<form>");
      let createLabel = $("<label>");
      let createTextArea = $("<textarea>");
      let createSaveBtn = $("<button>");

      // Add attributes to all the elements
      // <div class="time-block">
      createTimeBlockDiv.attr("class", "time-block");

      // <form action="#" class="row">
      createForm.attr("class", "row");

      // <label for="time-of-day" class="hour">11:00</label>
      createLabel.attr("for", "time-of-day");
      createLabel.attr("class", "hour");

      // <textarea name="text" id="" class="description future" cols="90" rows="4"
      createTextArea.attr("name", "text");
      createTextArea.attr("id", "textbox-" + (i + 9));
      createTextArea.attr("data-hour", i + 9);
      createTextArea.attr("cols", "90");
      createTextArea.attr("rows", "4");

      // <button type="submit" class="fa fa-lock saveBtn">
      createSaveBtn.attr("type", "submit");
      createSaveBtn.attr("class", "fa fa-lock saveBtn");

      // adding text to the label for the time
      createLabel.text(i + 9 + ":00");

      // appending everything together
      createForm.append(createLabel);
      createForm.append(createTextArea);
      createForm.append(createSaveBtn);
      createTimeBlockDiv.append(createForm);
      divContainer.append(createTimeBlockDiv);
    }
  }

  function updateClock() {
    givePastPresentFuture();
    updateCurrentTime();
    setInterval(updateClock, 2000);
  }

  // calling the initial functions to start Work Day Scheduler
  displayTimeBlock();
  updateClock();

  // get local storage vars
  // agenda , agendaTime , agendaArray

  // saveBtn on click function add prevent default so that pressing enter isnt allowed
  $(document).on("submit", (event) => {
    event.preventDefault();
  });

  $(".saveBtn").on("click", (event) => {
    event.preventDefault();
    storeAgenda();
  });
});
