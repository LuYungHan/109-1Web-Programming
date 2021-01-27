// TODO: Select #createTodoForm


$("#createTodoForm").submit(function (e) {
    // TODO: Prevent page reflash action when form is submitted
    e.preventDefault();
    // TODO: Get the value of #todoTitle
    console.log("Form Submitted")
    // TODO: Get the value of #todoText
    var information = {
        Title: $("#todoTitle").val(),
        Text: $("#todoText").val(),
        // createdAt: new Date()//取得當下的時間

    }
    // console.log("[information]",information)
    var title = '<div><li class="list-group-item"><p>' + information.Title  +': '+ information.Text  + '</p></li></div>'
            $("#todoList").append(title)
});
    // TODO: Append a new todo with title and text to #todoList
    // You could use $(TARGER).append()
    // More info: https://api.jquery.com/append/

    