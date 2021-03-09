var i = 0;
var disable = 0;
var inprocess = 0;
var restaurant = '';
var promo = false;
var category = Config.category;
var cityId = Config.cityCode;
$(document).ready(function () {
    setTimeout(function () {
        $('#city-error').remove();
    }, 3000);
    if (category !== '' && category !== undefined) {
        inprocess = 1;
        setTimeout(function () {
            $('#search-rest').val(category).trigger("keyup");
        }, 10);
    } else if($('#delivery').is(':checked') && inprocess == 0){
        promo = true;
        $('.btn-close-hotdeals').css('display', 'inline-block');
        $('#delivery').attr("disabled", true);
        if(inprocess ==0) {
            getRestaurant(0, promo);
        }
    } else {
        getRestaurant(i);
    }
    $('#delivery').on('click', function(e) {
        if ($(this).is(':checked') && inprocess == 0) {
            promo = true;
            $('.btn-close-hotdeals').css('display', 'inline-block');
            $('#delivery').attr("disabled", true);
            getRestaurant(0, promo);
        }else{
            promo = false;
            if(inprocess == 0){
                getRestaurant(0);
            }
        }
    });
    $(document).on('click','.btn-close-hotdeals', function() {
        $(this).unbind("mouseenter mouseleave");
        if(inprocess == 0 ){
            setTimeout(function () {
                $('#delivery').attr("disabled", false).removeAttr('checked');
            }, 10);
            $('.btn-close-hotdeals').css('display', 'none');
            promo = false;
            getRestaurant(0);
        }
        });

    $("#searchclear").click(function () {
        $('.web-loader').show();
        $("#search-rest").val('');
        window.location.href = Config.returnTo;
    });
    var timer;
    $('#search-rest').bind('keyup', function () {

        inprocess = 1;
        $("#searchclear").hide();
        $('#search-rest').addClass('loading');
        if($('#delivery').is(':checked')){
            $('#delivery').prop('checked', false);
            promo = false;
        }
        clearTimeout(timer);
        var str = $(this).val();
        if ($.trim(str).length > 2 && restaurant !== str) {
            timer = setTimeout(function () {
                $('#search-rest').addClass('loading');
                $('.vendor-list .container .row').html('');
                $('.web-loader.abs').show();
                restaurant = str;
                $("#rest-search").submit();
                i = 0;
                getRestaurant(0,restaurant);
            }, 3000);
        } else if($.trim(str).length == 0){
            timer = setTimeout(function () {
                $('#searchclear').trigger('click');
            },1500)
        }else {
            timer = setTimeout(function () {
                $('#search-rest').removeClass('loading');
                $("#searchclear").show();
            }, 1000)
        }
    });
    $("#rest-search").submit(function (e) {
        $('#rest').addClass('reset_form');
        $('#search-rest').removeClass('loading');
        $("#searchclear").show();
        e.preventDefault();
    });
});

function getRestaurant(id,rest='') {
    inprocess = 1;
    $('#delivery').parent().hide();
    if(id > 0){
        $('.vendor-list-loader-on-scroll').show();
    }else{
        disable = 0;
        i=id;
        $('.vendor-list .container .row').html('');
        $('.web-loader.abs').show();
    }
    var url;
    if (cityId != null && rest == null) {
        url = Config.getRestaurants + id + "/?cityId=" + cityId;
    } else if ((cityId != null) && rest != null && rest !== true) {
        url = Config.getRestaurants + id + "/?cityId=" + cityId + "&restaurant=" + rest;
    } else if (rest !== '' && rest !== true) {
        url = Config.getRestaurants + id + "/?restaurant=" + rest;
    } else if(rest === true || promo === true) {
        url = Config.getRestaurants + id + "/?promo=1";
    }else{
        url = Config.getRestaurants + id;
    }
console.log(Config.getRestaurants);
    $.ajax({
        url: url,
        type: "GET",
        dataType: "JSON",
        success: function (data) {
            $('.web-loader.abs').hide();
            $('#city-error').hide();
            $('.web-loader').hide();
            if(id === 0){
                $('.vendor-list .container .row').html('');
            }
            if(data.loadmore){
                inprocess = 0;
                $('.web-loader.abs').show();
                load_more();
            }else if (data.status === '500') {
                if(promo === true){
                    inprocess = 0;
                }
                disable = 1;
                $('.vendor-list .container .row').append(data.data);
                $('#delivery').parent().show();
            }else if(data.status === '200'){
                $('.vendor-list .container .row').append(data.data);
                $('#delivery').parent().show();
                inprocess = 0;
            }
            $('.vendor-list-loader-on-scroll').hide();
        },
        error: function (jqXHR, textStatus, errorThrown) {
            inprocess = 0;
            $('.vendor-list-loader-on-scroll').hide();
            console.log(errorThrown);
        }
    });
}
function load_more() {
    if (disable === 0 && inprocess === 0) {
        i = i + 100;
        if(restaurant !== ''){
            getRestaurant(i,restaurant);
        }else{
            getRestaurant(i);
        }
    }
}
$(window).scroll(function () {
    if (document.body.scrollHeight - $(this).scrollTop() - 820 <= $(this).height() && inprocess === 0) {
        load_more();
    }
});

var interval = setInterval(function () {
    if($('footer')[0].offsetTop < window.innerHeight) {
        load_more();
    }
    else
        clearInterval(interval);
}, 1000);
