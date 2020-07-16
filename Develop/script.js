$(document).ready(function () {
  // globally call moment api and the hour to know when to change the attribute
  const now = moment(); // moment api
  let hour = now.hours(); // getting the hour at the moment
  console.log(hour);
});
