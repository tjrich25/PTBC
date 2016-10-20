// $.getJSON("https://teamtreehouse.com/travisrichardson2.json", function(data) {
//   console.log(data);
// });

$.getJSON("https://teamtreehouse.com/travisrichardson2.json", function(data) {
  console.log(data.badges[1].courses[1].title);
});
