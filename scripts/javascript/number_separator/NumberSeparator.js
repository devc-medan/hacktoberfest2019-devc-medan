$('input.number').keyup(function(event) {
    if(event.which >= 37 && event.which <= 40) return;
        $(this).val(function(index, value) {
        return value
        .replace(/\D/g, "")
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    });
});