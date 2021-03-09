// ***************************************************
// STICKY HEADER
// ***************************************************
var elHTML = document.querySelector('html');
var elNavbar = document.querySelector('.nav-wrapper');

// window.addEventListener('scroll', function() {
//   if (elHTML.scrollTop > 66) {
//     elNavbar.classList.add("sticky");
//   }
//   else
//     elNavbar.classList.remove("sticky");
// });

// ***************************************************
// CATEGORY MENU
// ***************************************************
var categoryMenu = $('.category-menu');
var btnCategoryMenu = $('.btn-category-menu a');
var btnCategoryMenuIcon = btnCategoryMenu.find('img');

btnCategoryMenu.click(function(e) {
  e.preventDefault();
  if (categoryMenu.css('display') == 'none')
    categoryMenu.not(':animated').slideDown();
  else
    categoryMenu.not(':animated').slideUp();
  btnCategoryMenuIcon.addClass('zoomOut');
  btnCategoryMenuIcon.on('animationend', function() {
    $(this).removeClass('zoomOut');
    $(this).addClass('zoomIn');
    if (categoryMenu.css('display') == 'none')
      $(this).attr('src', '../images/icons/utensils-solid.svg');
    else
      $(this).attr('src', '../images/icons/utensils-alt.svg');
  });
});

// ***************************************************
// CHANGING LOCATION SEARCH BUTTON DOM ORDER
// ***************************************************
var locationForm = $('#locationForm');
var locationSearchBar = $('.location-search-bar');
var btnLocationSearchBar = locationSearchBar.find('.btn-search');

relocateLocationSearchBarBtn();

$(window).on('resize', function() {
  relocateLocationSearchBarBtn();
});

function relocateLocationSearchBarBtn() {
  if ($(window).width() < 768 && locationSearchBar.has(btnLocationSearchBar)) {
    var btnLocationSearchBarDetach = btnLocationSearchBar.detach();
    locationForm.append(btnLocationSearchBarDetach);
  }
  else if ($(window).width() > 768 && !locationSearchBar.has(btnLocationSearchBar)){
    var btnLocationSearchBarDetach2 = locationForm.find('.btn-search').detach();
    locationSearchBar.append(btnLocationSearchBarDetach2);
  }
}

// ***************************************************
// VIEW CART BUTTON FOR SMALLER SCREENS
// ***************************************************

var btnViewCartMob = $('.btn-view-cart-mob');
var btnCloseCartMob = $('.btn-close-cart-mob');
var cart = $('.view-vendor-menu .col.two');
var viewVendorMenu = $('.view-vendor-menu');

if (btnViewCartMob) {
  btnViewCartMob.on('click', function() {
    cart.removeClass('slideOutDown');
    cart.addClass('show animated slideInUp');
    viewVendorMenu.addClass('overlay');
  });
  // viewVendorMenu.on('click', function(e) {
  //   if (e.target != cart) {
  //     alert('sdf');
  //   }
  // });
  $(window).on('resize', function() {
    if ($(window).width() > 992) {
      cart.removeClass('show animated slideInUp slideOutDown');
      viewVendorMenu.removeClass('overlay');
    }
  });
  $(document).on('click', '.btn-close-cart-mob', function() {
    cart.removeClass('slideInUp');
    cart.addClass('slideOutDown');
    cart.on('animationend', function () {
      cart.removeClass('show');
    });
    cart.off('animationend');
    viewVendorMenu.removeClass('overlay');
  });
}

// ***************************************************
// USER PROFILE ORDER LIST ITEM SHOW MORE
// ***************************************************
var orderItemsUserOrders = $('.order-items');
var btnShowMore = $('.btn-show-more');

orderItemsUserOrders.hide();

btnShowMore.on('click', function (e) {
  e.preventDefault();
  $(this).parent().find('.order-items').slideToggle();
  $(this).toggleClass('rotate');
});

// ***************************************************
// HBL BACK BUTTON
// ***************************************************

function backBtn() {
    var device = getMobileOperatingSystem();
    if (device == "ios") {
        window.location.href = "inapp://exit, \\\'Transaction completed successfully\\\', \'abc\'";
    } else {
        if (typeof MyHandler != 'undefined') {
            MyHandler.setResult("exit", "Successfully Exit.", "exit");
        } else {
            alert("Something Went Wrong. Please Tap Back Button From Mobile.");
        }
    }
}

// ***************************************************
// BOOTSTRAP MODAL PADDING GLITCH FIX
// ***************************************************

$('.modal').on('show.bs.modal', function (e) {
    $('.view-vendor-menu').addClass('bs-modal-fix');
    $('.modal').addClass('bs-modal-fix');
});