$(document).ready(function () {
    // mobile list logo
    let buttonMobile = $('#mobile_listlogo')
    let navList = $('.mobile_navlist')[0]
    let exitButton = $('#navlist_exit')
    let bglist = $('.bglist')
    buttonMobile.on("click", function () {
        navList.style.left = "0"
        bglist.toggleClass('active')
    })
    exitButton.on("click", function () {
        navList.style.left = "-100%"
        bglist.removeClass('active')
    })

    // mobile form 
    let buttonUser = $('#mobile_userlogo')
    let formList = $('.mobile_formlist')[0]
    buttonUser.on("click", function () {
        if (formList.style.top != "7%") {
            formList.style.opacity = "1"
            formList.style.visibility = "visible"
            formList.style.top = "7%"
            bglist.toggleClass('active')
        }
        else {
            formList.style.opacity = "0"
            formList.style.visibility = "hidden"
            formList.style.top = "-100%"
            bglist.toggleClass('active')
        }
    })
    bglist.on("click", romeveActive)
    function romeveActive(e) {
        if (e.target == e.currentTarget) {
            bglist.removeClass('active')
            navList.style.left = "-100%"
            formList.style.opacity = "0"
            formList.style.visibility = "hidden"
            formList.style.top = "-100%"
        }
    }
    // effect
    let titBanner = $('.banner_tit')[0]
})

