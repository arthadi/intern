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
        const $selectMenuBox = $selectBox.find($('.select-menu-box'));
        const $option = $selectBox.find($('.option'));
        const $selectBox_Value_Tag = $selectBox.find($('.select-box__value-tag'));
        const $arrow_select = $selectBox.find($('.arrow-select-link'));
        let curentHeight = $selectMenuBox.outerHeight();

        $arrow_select.on("click", (e) => {
            e.preventDefault();

            if (curentHeight === 0) {
                let height_menu = $selectMenuBox.css({"height":"auto"}).outerHeight ();
                $selectMenuBox.css ({"height":"0"});
                $selectMenuBox.animate({"height": height_menu}, 300);
                $arrow_select.css({transition: ".2s", transform: "rotate(180deg)"});
                curentHeight = height_menu;
                return false;
            }
            else {
                $selectMenuBox.animate ({"height": 0}, 300);
                $arrow_select.css({transition: ".2s", transform: "rotate(0deg)"});
                curentHeight = 0;
                return false;
            }
        });

        $option.click ((e) => {
            let textOption = e.target.innerText;

            e.preventDefault();
            $selectMenuBox.animate({"height": 0}, 300);
            $selectBox_Value_Tag.text(textOption);
            $arrow_select.css({transition: ".2s", transform: "rotate(0deg)"});
            curentHeight = 0;
        });
    });
    };

    $('.button-cross__footer').on('click', function() {
        let block = $(this).parent().next();
        console.log(block);
        $(block).slideToggle();
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
            var height_menu = $menu_main.css({"height":"auto"}).outerHeight();
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

