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

    // $.fn.selectbox = function () {
    //
    //     this.each( () => {
    //
    //     const $selectBox = $(this);
    //     const $selectMenuBox = $selectBox.children().last();
    //     const $option = $selectMenuBox.children();
    //     const $selectBox_Value_Tag = $selectBox.children().eq(1);
    //     const $arrow_select = $selectBox.children().eq(0);
    //     const $arrow = $arrow_select.children();
    //     let curentHeight = $selectMenuBox.outerHeight();
    //
    //     $arrow_select.on("click", (e) => {
    //         e.preventDefault();
    //
    //         if (curentHeight === 0) {
    //             let height_menu = $selectMenuBox.css({"height":"auto"}).outerHeight ();
    //             $selectMenuBox.css ({"height":"0"});
    //             $selectMenuBox.animate({"height": height_menu}, 300);
    //             $arrow.css({transition: ".2s", transform: "rotate(180deg)"});
    //             curentHeight = height_menu;
    //             return false;
    //         }
    //         else {
    //             $selectMenuBox.animate ({"height": 0}, 300);
    //             $arrow.css({transition: ".2s", transform: "rotate(0deg)"});
    //             curentHeight = 0;
    //             return false;
    //         }
    //     });
    //
    //     $option.click ((e) => {
    //         let textOption = e.target.innerText;
    //
    //         e.preventDefault();
    //         $selectMenuBox.animate({"height": 0}, 300);
    //         $selectBox_Value_Tag.text(textOption);
    //         $arrow.css({transition: ".2s", transform: "rotate(0deg)"});
    //         curentHeight = 0;
    //     });
    // });
    // };

    $.fn.selectbox = function () {

        this.each( () => {

            const $selectCont = $(this);
            const $select = $selectCont.children();
            const $selectOption = $select.children();
            let dataOption = [];
            let textOption = [];
            let classMainBlockSelect = $selectCont.attr("class");

            $selectOption.each(function(){
                let text_option = $(this).text();
                let data_option = $(this).val();
                textOption.push(text_option);
                dataOption.push(data_option);
            });

            $("<div/>", {
                "class": classMainBlockSelect + "_" + "selectBox" + " " + "selectBox",
                append: $("<button>",{
                    "class": classMainBlockSelect + "_" + "arrow__select-link" + " " +  "arrow__select-link form__button",
                    append: $("<span>",{
                        "class": classMainBlockSelect + "_" + "arrow__select" + " " + "arrow__select"
                    })
                }).add ($("<p>", {
                    "class": classMainBlockSelect + "_" + "selectBox__value-tag" + " " + "selectBox__value-tag",
                    "data-value": "",
                    text: textOption[0]
                })).add($("<ul>", {
                    "class": classMainBlockSelect + "_" + "select__menu-box" + " " + "select__menu-box"
                }))
            }).appendTo($selectCont);

            for (let i = 0; i < textOption.length; i++){
                $("<li>", {
                    "class": classMainBlockSelect + "_" + "option" + " " + "option",
                    append: $("<a>",{
                        "class": classMainBlockSelect + "_" + "option__link" + " " + "option__link link",
                        "href": "#",
                        "text": textOption[i],
                        "data-value": dataOption[i],
                    })
                }).appendTo($("." + classMainBlockSelect + "_" + "select__menu-box"));
            }
            $("select").css("display", "none");

            const $option = $(".option");
            const $arrow_select = $(".arrow__select-link");

            $arrow_select.on("click", (e) => {
                const parentBox = e.target.parentElement;
                const classSelectMenuBox = parentBox.childNodes[2].classList[0];
                const $MenuBox = $("." + classSelectMenuBox);
                const classArrow = e.target.children[0].classList[0];
                const $ButtonArrow = $("." + classArrow);
                let thisCurentHeight = parseInt($MenuBox.css("height"));

                if (thisCurentHeight === 0) {
                    let height_menu = $MenuBox.css({"height":"auto"}).outerHeight();
                    $MenuBox.css ({"height":"0"});
                    $MenuBox.animate({"height": height_menu}, 300);
                    $ButtonArrow.css({transition: ".2s", transform: "rotate(180deg)"});
                    return false;
                }
                else {
                    $MenuBox.animate ({"height": 0}, 300);
                    $ButtonArrow.css({transition: ".2s", transform: "rotate(0deg)"});
                    return false;
                }
            });

            $option.click ((e) => {
                const $mainBox = e.target.offsetParent.parentElement;
                const $data = e.target.dataset.value;
                const $text = e.target.text;
                const $ul = $("." + e.target.offsetParent.classList[0]);
                const $p = $("." + $mainBox.children[1].classList[0]);
                const $arrowBox = $("." + $mainBox.children[0].children[0].classList[0]);

                e.preventDefault();
                $ul.animate({"height": 0}, 300);
                $p.text($text).attr("data-value", $data);
                $arrowBox.css({transition: ".2s", transform: "rotate(0deg)"});
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


    $('.select').selectbox();

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
        let width_window = $(window).width();

        if (width_window > 551) {
            $menu_main.attr("style", ' ');
        }

    });
});

