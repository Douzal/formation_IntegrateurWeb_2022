$(function () {
    'use strict';
    // console.warn('jquery ready');

    // set the good section visible

    /* FUNCTIONS */
    let init = function () {
        bindClick();
    };

    function makeVisible(id) {
        let allNames = ['Home', 'Blog', 'Add', 'About'];
        let clickedPage = allNames.indexOf(id);
        console.group();
        console.log(`clickedPage : ${clickedPage}`);

        for (let nomPage of allNames) {
            // set to hidden
            $("#" + nomPage).css("display", "none");

            // console.log(`nomPage : ${nomPage}\nallNames[clickedPage] : ${allNames[clickedPage]}`);
            // console.warn(nomPage === allNames[clickedPage]);
            if (nomPage === allNames[clickedPage]) {

                $("#" + nomPage).css("display", "block");
            }
        }
        console.groupEnd();
    }

    let bindClick = function () {
        $('#nav a').click(function (e) {
            // get the a clicked
            let id = $(this).attr("id");
            id = id.substring(1);
            // console.log(`id : ${id}`);
            makeVisible(id);

        });
    }

    init();

});