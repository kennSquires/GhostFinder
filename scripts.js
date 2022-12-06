
$(document).on("keypress", function (e) {
    console.log(e)
    if (e.key == 'g') {
        ghost1()

    }
})

function ghost1() {
    $(".ghost1 img").toggle("kepress")
}

$(document).on("keypress", function (e) {
    console.log(e)
    if (e.key == 'h') {
        ghost4()

    }
})

function ghost4() {
    $(".ghost4 img").toggle("kepress")
}


$(document).on("keypress", function (e) {
    console.log(e)
    if (e.key == 'o') {
        ghost2()

    }
})

function ghost2() {
    $(".ghost2 img").toggle("kepress")
}

$(document).on("keypress", function (e) {
    console.log(e)
    if (e.key == 's') {
        ghost3()

    }
})

function ghost3() {
    $(".ghost3 img").toggle("kepress")
}

$(document).on("keypress", function (e) {
    console.log(e)
    if (e.key == 't') {
        ghost5()

    }
})

function ghost5() {
    $(".ghost5 img").toggle("kepress")
    var audio = new Audio ('sounds/ghostsound.mp3')
    audio.play(); 
}

function gameRest() {
    location.reload();
}