$(document).ready(function(){
    var id = 'product_btn';
    $('.nav_btn').on('click', function(){
        $(this).addClass('current');
        $(this).siblings().removeClass('current');
        id = $(this).attr('id');
        if(id == 'product_btn'){
            showProduct();
        } else if(id == 'about_btn'){
            showAbout();
        } else if(id == 'contact_btn'){
            showContact();
        }
        $('html, body').animate({
            scrollTop:$('#sub_page').offset().top,
            behavior: 'smooth',
        }, 50);
    });
    if(id == 'product_btn'){
        showProduct();
    } else if(id == 'about_btn'){
        showAbout();
    } else if(id == 'contact_btn'){
        showContact();
    }

    $('.button_body').on('click', function(){
        showProduct();
        $('html, body').animate({
            scrollTop:$('#sub_page').offset().top,
            behavior: 'smooth',
        }, 50);
    });
});

function showProduct(){
    $('#sub_page').html('');
    $('#sub_page').load('../pages/products.html');

}
function showAbout(){
    $('#sub_page').html('');
    $('#sub_page').load('../pages/about.html'); 
}
function showContact(){
    $('#sub_page').html('');
    $('#sub_page').load('../pages/contact.html');
}

