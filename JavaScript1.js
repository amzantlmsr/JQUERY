
    var n = $("#todo-list li").length
    $("p").text("There are " + n + " to do items.");

    $('#add').click(function () {
        let input = $('#element').val();

        if (input == "") {
        alert('not accepted empty action');
    return false;
}
        else {
        $('#todo-list').append($('<li class="list-item"></li>').text(input));
    var n = $("#todo-list li").length
    $("p").text("There are " + n + " to do items.");
    }
});

        $('#todo-list').delegate('li', 'click', function () {
            let selectedElement = $(this);
        selectedElement.remove();
        $('#done-list').append($('<li class="done-item"></li>').text(selectedElement.text()));
        var n = $("#todo-list li").length
        $("p").text("There are " + n + " to do items.");
    });


    $('#done-list').delegate('li', 'click', function () {
            let selectedElementa = $(this);
        selectedElementa.remove();
        $('#todo-list').append($('<li class="list-item"></li>').text(selectedElementa.text()));
        var n = $("#todo-list li").length
        $("p").text("There are " + n + " to do items.");
    });
