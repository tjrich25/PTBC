$.getJSON("https://www.reddit.com/r/aww.json", function(data){
  var redditPosts = data.data.children;
  redditPosts.forEach(function(post) {
    console.log(post.data.author);
  });
});
