$(".section__right__answer").hide();

$('.section__right--border').each(function() {
    var $dropdown = $(this);

    $(".section__right__icon", $dropdown).click(function(e) {
        e.preventDefault();

        // xoay icon
        $(this).toggleClass('rotated');
        $(".section__right__icon").not(this).removeClass("rotated");

        // hiện answer
        $div_answer = $(".section__right__answer", $dropdown);
        $div_answer.fadeToggle(200);

        // đổi màu câu hỏi
        $div_ask = $(".section__right__ask",$dropdown);
        $div_ask.toggleClass('change-color');
        $(".section__right__ask").not($div_ask).removeClass('change-color');

        // giấu answers ko đc click
        $(".section__right__answer").not($div_answer).hide();

        return false;
    });
});


// đổi img khi resize
$(window).resize(function(e){
    if($(window).width() < 995) {
    console.log($(window).width());
     $(".section__left__img").each(function() {
       $(this).attr("src","./images/illustration-woman-online-mobile.svg");
            });
        } else if ($(window).width() >= 995) {
                 $(".section__left__img").each(function() {
                    $(this).attr("src", "./images/illustration-box-desktop.svg");
            });                        
     }         
});

 