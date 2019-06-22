// Button 'clicked' functions
// =============================================================

$(() => {
    // add-btn: clicked, verify that its not empty, then add to db and refresh page.
    $("#add-btn").on("click", function (event) {

        let newBurger = {
            name: $('#burger-name').val().trim(),
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            () => {
                console.log("New burger added!");

                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    // eat-btn: clicked, updates the burgers to eaten property, refreshes page.
    $("#eat-btn").on("click", function (event) {

        // query db for all burgers not eaten
        $.ajax("/api/burgers/noteaten", {
            type: "GET",
        }).then((data) => {
            for (let i = 0; i < data.data.length; i++) {
                // grab the id of each burger
                let id = data.data[i].id;

                // make a PUT request for each
                $.ajax("api/burgers", {
                    type: "PUT",
                    data: { id: id, eaten: true }
                }).then(() => {
                    console.log(data.data.length);
                    if (i === data.data.length -1) {
                        // Refresh Page
                        window.location.reload();
                    }
                });
            }
        });

    });

    // clear-btn: clicked, removes burgers from db that are eaten, refreshes page.
    $("#clear-btn").on("click", function (event) {
        $.ajax("/api/burgers/eaten", {
            type: "DELETE",
        }).then(
            () => {
                console.log('burgers cleared!');

                // Refresh Page
                location.reload();
            }
        );
    })
});
