// Capture the form inputs 

var userData = "";
$("#submit").on("click", function () {

    userData = {
        name: $("#name").val(),
        photo: $("#image").val(),
        scores: [$("input[name=q1]:checked").val(),
            $("input[name=q2]:checked").val(),
            $("input[name=q3]:checked").val(),
            $("input[name=q4]:checked").val(),
            $("input[name=q5]:checked").val(),
            $("input[name=q6]:checked").val(),
            $("input[name=q7]:checked").val(),
            $("input[name=q8]:checked").val(),
            $("input[name=q9]:checked").val(),
            $("input[name=q10]:checked").val()
        ]
    }


    // Grab the URL of the website
    var currentURL = window.location.origin;

    // AJAX post the data to the friends API. 
    $.post(currentURL + "/api/friends", userData, function (data) {

        // Grab the result from the AJAX post so that the best match's name and photo are displayed.
        $("#yourName").text($("#name").val());
        // $('#yourImg').attr("src", $("#image").val());
        $("#matchName").text(data.name);
        $('#matchImg').attr("src", data.photo);

        // Show the modal with the best match 
        $("#resultsModal").modal('toggle');

    });

    return false;

    // var userData = {
    //     name: $("#name").val(''),
    //     photo: $("#image").val(''),
    //     scores: [$("input[name=q1]:checked").val(''),
    //         $("input[name=q2]:checked").val()=false,
    //         $("input[name=q3]:checked").val()=false,
    //         $("input[name=q4]:checked").val()=false,
    //         $("input[name=q5]:checked").val()=false,
    //         $("input[name=q6]:checked").val()=false,
    //         $("input[name=q7]:checked").val()=false,
    //         $("input[name=q8]:checked").val()=false,
    //         $("input[name=q9]:checked").val()=false,
    //         $("input[name=q10]:checked").val()=false
    //     ]
    // }
});

$("#close").on("click", function () {
    scores: [$("input[name=q1]:checked").prop("checked", false),
        $("input[name=q2]:checked").prop("checked", false),
        $("input[name=q3]:checked").prop("checked", false),
        $("input[name=q4]:checked").prop("checked", false),
        $("input[name=q5]:checked").prop("checked", false),
        $("input[name=q6]:checked").prop("checked", false),
        $("input[name=q7]:checked").prop("checked", false),
        $("input[name=q8]:checked").prop("checked", false),
        $("input[name=q9]:checked").prop("checked", false),
        $("input[name=q10]:checked").prop("checked", false)
    ]
});