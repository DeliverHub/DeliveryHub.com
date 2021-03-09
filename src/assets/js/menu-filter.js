$('.menu-filter .filter-bar input').on('keyup', function() {
  var val = $('.menu-filter .filter-bar input').val().toLowerCase();
  $("section.category .content .item .name").each(function() {
      $(this).parent().toggle($(this).text().toLowerCase().includes(val));
  });
  var val = [];
  $("section.category").each(function() {
      $(this).show();
      if($(this).find(".content .item").find(":visible").length == 0) {
          $(this).hide();
      }
      else
          val.push($(this).find("h2").text().toLowerCase().trim());
  });
  $(".dishes-navbar-container .dishes-navbar-content li .nav-link").each(function() {
      $(this).toggle(val.includes($(this).text().toLowerCase().trim()));
  });
});