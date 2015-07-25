$(function(){

  var intro    = $(".intro"),
      links    = $(".links"),
      projects = $(".projects"),
      footer   = $("footer");

  // Remove intro text
  intro.text("");

  // Hide rest of page
  links.hide();
  projects.hide();
  footer.hide();

  var showContent = function() {
    links.fadeIn(100);
    projects.fadeIn(100);
    footer.fadeIn(100);
  };

  intro.typed({
    strings: ["Hello, I’m Neil.^300<br/>I’m a front-end web developer<br/>and designer in San Francisco."],
    typeSpeed: -10,
    callback: showContent,
  });
});