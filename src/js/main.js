//import { sum } from './modules/module1'
//
// console.log(sum(1, 5))
//
// let a = 12
// const b = 'Test'
// document.body.addEventListener('click', ({target}) => {
//   console.log(target)
// })

$(document).ready(function(){

    $.fn.selectbox = function () {

        this.each( () => {

        const $selectBox = $(this);
        const $selectMenuBox = $selectBox.children().last();
        const $option = $selectMenuBox.children();
        const $selectBox_Value_Tag = $selectBox.children().eq(1);
        const $arrow_select = $selectBox.children().eq(0);
        const $arrow = $arrow_select.children();
        let curentHeight = $selectMenuBox.outerHeight();

        $arrow_select.on("click", (e) => {
            e.preventDefault();

            if (curentHeight === 0) {
                let height_menu = $selectMenuBox.css({"height":"auto"}).outerHeight ();
                $selectMenuBox.css ({"height":"0"});
                $selectMenuBox.animate({"height": height_menu}, 300);
                $arrow.css({transition: ".2s", transform: "rotate(180deg)"});
                curentHeight = height_menu;
                return false;
            }
            else {
                $selectMenuBox.animate ({"height": 0}, 300);
                $arrow.css({transition: ".2s", transform: "rotate(0deg)"});
                curentHeight = 0;
                return false;
            }
        });

        $option.click ((e) => {
            let textOption = e.target.innerText;

            e.preventDefault();
            $selectMenuBox.animate({"height": 0}, 300);
            $selectBox_Value_Tag.text(textOption);
            $arrow.css({transition: ".2s", transform: "rotate(0deg)"});
            curentHeight = 0;
        });
    });
    };

    $('.footer-item-title__block').on('click', function() {
        let block = $(this).next();
        let cross = $(this).find($('.cross_footer'));

        $(block).slideToggle();

        setTimeout(function () {

        if (block.css('display') === 'none') {
            cross.css('background-color', '#000000');
        }

        },500);

        if (block.css('display') === 'block') {
            cross.css('background-color', 'transparent');
        }
    });


    $('.select-box').selectbox();

    $('.js-slider').slick({
        path_bulet: "assets/libs/slick/svg/romb.svg#romb",
        viewBox_bulet: "0 0 36 36",
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        adaptiveHeight: true
    });
});

$(function () {
    const $button_hidden = $(".js-hide-menu");
    const $menu_main = $(".js-menu__main");

    $button_hidden.on("click", function () {

        if ($menu_main.height() === 0) {
            let height_menu = $menu_main.css({"height":"auto"}).outerHeight();
            $menu_main.css({"height":"0"});
            $menu_main.animate({"height": height_menu}, 500);
            return false;
        }
        else {
            $menu_main.animate({"height": 0}, 500);
            return false;
        }

    });

    $(window).on("resize", function () {
        var width_window = $(window).width();

        if (width_window > 551) {
            $menu_main.attr("style", ' ');
        }

    });
});

