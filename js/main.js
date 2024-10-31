$(document).ready(function () {
    $(".faq-question").on("click", function () {
        const parent = $(this).closest(".faq-item");
        const answer = parent.find(".faq-answer");

        // Fecha outros itens abertos
        $(".faq-item").not(parent).removeClass("active").find(".faq-answer").slideUp(300);

        // Abre ou fecha o item atual com animação suave
        if (parent.hasClass("active")) {
            parent.removeClass("active");
            answer.slideUp(300);
        } else {
            parent.addClass("active");
            answer.slideDown(300);
        }
    });
});
