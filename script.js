$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2500,
        margin: 20,
        autoplayHoverPause: true,
    });
});

let buckets = document.querySelectorAll('.bucket button');
buckets.forEach(bucket => {
    bucket.addEventListener('click', () => {
        bucket.parentElement.classList.add('d-none');
        bucket.parentElement.parentElement.children[4].classList.remove('d-none');
    })
});

$('.toggle-acc').on('click', function (e) {

    var current = $(this);
    var currentParent = current.parents('li');
    var currentContent = currentParent.find('.content')
    var currentArrow = current.find('span');

    $('.content').not(currentContent).slideUp(350);
    $('.toggle-acc span').not(currentArrow).removeClass('rotate');

    currentArrow.toggleClass('rotate');
    currentContent.slideToggle(250);

});