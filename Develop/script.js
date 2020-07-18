$(document).ready(function () {
  // globally call moment api and the hour to know when to change the attribute
  const currentLang = "en";
  const now = moment(); // moment api
  let hour = now.hours(); // getting the hour at the moment
  console.log(hour);

  let currentDay = $("#currentDay");
  const divContainer = $(".container");
  function updateCurrentTime() {
    currentDay.text(moment().format("llll"));
  }

  function givePastPresentFuture() {
    for (let i = 0; i < 9; i++) {
      textboxId = "#textbox-" + (i + 9);
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
    updateCurrentTime();
    givePastPresentFuture();
    setTimeout(updateClock(), 1000);
  }

  displayTimeBlock();
  updateClock();
});
