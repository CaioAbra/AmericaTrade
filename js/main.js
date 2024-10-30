$(document).ready(function () {
    $(".faq-question").on("click", function () {
        const parent = $(this).closest(".faq-item");

        // Fecha outros itens abertos
        $(".faq-item").not(parent).removeClass("active").find(".faq-answer").css("max-height", "0");

        // Abre ou fecha o item atual
        parent.toggleClass("active");

        // Ajusta a altura da resposta para expandir ou colapsar
        const answer = parent.find(".faq-answer");
        if (parent.hasClass("active")) {
            answer.css("max-height", answer.prop("scrollHeight") + "px");
        } else {
            answer.css("max-height", "0");
        }
    });
});
