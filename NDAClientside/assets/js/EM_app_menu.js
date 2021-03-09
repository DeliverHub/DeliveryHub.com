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
function addItem(id, menuId, desc, popupFlag) {
    // $('#' + id).val(parseInt($('#' + id).val()) + 1);
    openPopup(id, menuId, desc)
}
// function removeItem(id) {
//     $('#' + id).val(parseInt($('#' + id).val()) - 1);
//     if ($('#' + id).val() < 0) {
//         $('#' + id).val(0);
//     }
// }

$(document).on('click', '.item-btn-plus', function () {
    $('.web-loader').show();
    var oldVal = $(this).siblings('input').val();
    var key = $(this).parent().parent().attr("Itemkey");
    console.log($(this).attr('role'));
    var newVal = (parseInt(oldVal) + 1);
    updateQuantity(key, newVal);
    $(this).siblings('input').val(newVal);
});

$(document).on('click', '.item-btn-minus', function () {

    var oldVal = $(this).siblings('input').val();
    var key = $(this).parent().parent().attr("Itemkey");
    var newVal = (parseInt(oldVal) - 1);
    if (newVal < 1) {
        newVal = 1;
        $(this).siblings('input').val(newVal);
    } else {
        $('.web-loader').show();
        $(this).siblings('input').val(newVal);
        updateQuantity(key, newVal);
    }
});

$('.modal-main-data').on('change', '.radio-group .dish-radio-option .menu-options', function () {
    id = $('#option-data').attr('dish-id');
    var sectionid = $('#option-data').attr('section_id');
    var description = $('#option-data').attr('description');
    var selected = {};
    $(".radio-group .dish-radio-option .menu-options:checked").each(function (index, value) {
        var key = $(this).attr('name');
        try {
            if (selected[key] === undefined) {
                selected[key] = [];
                selected[key].push(value.id);
            } else {
                selected[key].push(value.id);
            }
        } catch (err) {
            console.log('Something went wrong, Try later.');
        }

    });
    modal_open(id, JSON.stringify(selected), sectionid, description);
});

$(document).on('click', '.modal-footer .add_to_basket', function (e) {
    ele = $(this);
    var Sec_id = $('#option-data').attr('section_id');
    var description = $('#option-data').attr('description');
    var id = ele.attr("dishId");
    var quantity = $('[name="qty"]').val();
    $(".detail-box").removeClass('bg');
    if ($(this).hasClass('has-option')) {
        var opt = new Array();
        success = true;
        $('.error').remove();
        var sub = new Array();
        var optionObject = {};
        var errorAnimate = '';
        $(".option_wrapper").each(function () {
            option_wrapper = $(this);
            var optionId = option_wrapper.attr("id");
            is_required = option_wrapper.attr("is_required");
            max_multi = option_wrapper.attr("max-select-count");
            optionObject[optionId] = [];
            if (is_required == 1 && $('input[name="' + optionId + '"]:checked').length < 1) {
                error = "Please select all required options";
                errorAnimate = $('#option_div_' + optionId);
                success = false;
                errorAnimate.addClass('bg-danger').addClass('text-white');
            } else if (max_multi >= 1 && $('input[name="' + optionId + '"]:checked').length > max_multi) {
                error = "Select maximum " + max_multi + " options";
                errorAnimate = $('#option_div_' + optionId);
                errorAnimate.addClass('bg-danger').addClass('text-white');
                success = false;
            }
            $('input[name="' + optionId + '"]:checked').each(function () {
                var sub_opt_element = $(this);
                if (sub_opt_element.is(":checked")) {
                    optionObject[optionId].push(sub_opt_element.attr("id"));
                }
            });
            if (success == false) {
                opt.push(0);
            } else {
                opt.push(1);
            }
        });
        if ($.inArray(0, opt) == -1) {
            add_to_cart(id, quantity, optionObject, Sec_id, description);
        } else {
            errorAnimate.scrollTop(0);
            $(ele).before("<span class='error'>" + error + "</span>");
        }

    } else {
        add_to_cart(id, quantity, '', Sec_id, description);
    }

});


function openPopup(id, sectionid, description) {
    $('.web-loader').show();
    modal_open(id, '', sectionid, description);
}

function modal_open(id, s_option = '', sectionId = '', description = '') {
    $('#option-data').attr("section_id", sectionId);
    $('#option-data').attr("description", description);
    $('#dish-desc').text(description);
    $.ajax({
        type: "POST",
        url: MenuConfig.optionsUrl + '/' + id,
        dataType: 'JSON',
        data: {'timing': MenuConfig.timing,'dishDiscription':description, 'selected': s_option, '_token': MenuConfig.token},
        success: function (data) {
            $('#dish-desc').text(description);
            update_menu(id, data);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    });
}

function update_menu(id, data) {

    $('#option-data').html('').html(data.data).attr("dish-id", id);
    $('#modal-dish').modal('show');
    $('#modal-dish').addClass('flex');
    $('.web-loader').hide();
    $('.radio-group').each(function () {
        if ($.trim($(this).html()) === '') {
            $(this).prev().remove();
        }
    });
}

function add_to_cart(id, quantity, optionObject, Sec_id, description = '') {
    $('.web-loader').show();
    $('#cartSave').text('Adding items...').attr('disabled', true);
    var special_delivery_type = $('.' + id + '_delivery_type').val();
    var restUrl = MenuConfig.restUrlKey;
    $.ajax({
        type: "POST",
        url: MenuConfig.updateCartUrl,
        dataType: 'json',
        data: {
            'id': id,
            'quantity': quantity,
            'sectionId': Sec_id,
            'description': description,
            'options': optionObject,
            'restUrl': restUrl,
            'specialDeliveryType': special_delivery_type,
            '_token': MenuConfig.token
        },
        success: function (data) {
            $('#modal-dish').modal('hide');
            if (data.status) {
                $('#sidebarInner').html(data.data);
            } else {
                alert('You cannot add take-away and delivery items together in cart.Please add either all take-away items or delivery items to proceed.');
            }
            getCartCount();
            $('.web-loader').hide();
        },
        error: function (xhr) {
            $('#cartSave').text('Add to cart').attr('disabled', true);
            console.log('request failed');
            $('.web-loader').hide();
        }
    });
}

function updateQuantity(key, newVal) {
    $.ajax({
        type: "POST",
        url: MenuConfig.updateCartQty,
        dataType: 'JSON',
        data: {'key': key, 'qty': newVal, '_token': MenuConfig.token},
        success: function (data) {
            $('#sidebarInner').html(data.data);
            $('.web-loader').hide();
        },
        error: function (xhr) {
            console.log('request failed');
        }
    });

}

function getCartCount() {
    $.ajax({
        type: "POST",
        url: MenuConfig.cartCountUrl,
        dataType: 'json',
        data: {'_token': MenuConfig.token},
        success: function (data) {
            $('#viewCart span').text(data);
        }
    });
}


function removeCartItem(cartId) {
    $('.web-loader').show();
    $.ajax({
        type: "POST",
        url: MenuConfig.removeItemUrl,
        dataType: 'JSON',
        data: {'cartId': cartId, '_token': MenuConfig.token},
        success: function (data) {
            $('#sidebarInner').html(data.data);
            getCartCount();
            $('.web-loader').hide();
        },
        error: function (xhr) {
            alert('request failed');
        }
    });
}