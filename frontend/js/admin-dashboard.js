// all remove buttons
let remove__btns;

function setInactive() {
    $("#dashboard").removeClass("active");
    $("#upload-page").removeClass("active");
    $("#all").removeClass("active");
    $("#basics").removeClass("active");
    $("#graphics").removeClass("active");
    $("#florat").removeClass("active");
    $("#limited").removeClass("active");
    $("#orders").removeClass("active");
}
$(document).ready(function () {
    // load dashboard
    $("#dashboard").click(function () {
        setInactive();
        $("#dashboard").addClass("active");
    })
    // all
    $(".col-md-4.totalCards.all").click(function () {
        setInactive();
        $("#all").addClass("active");
        $("#dashWrapper").load("/all-cloth");
        setTimeout(() => {
            remove__btns = document.querySelectorAll(".remove-btn");
            console.log(remove__btns);
            addListener(remove__btns);
        }, 1000);
        
    });
    $("#all").click(function () {
        setInactive();
        $("#all").addClass("active");
        $("#dashWrapper").load("/all-cloth");
        setTimeout(() => {
            remove__btns = document.querySelectorAll(".remove-btn");
            console.log(remove__btns);
            addListener(remove__btns);
        }, 1000);
        
    });
    // basics
        $(".col-md-4.totalCards.basics").click(function () {
            setInactive();
            $("#basics").addClass("active");
            $("#dashWrapper").load("/basics-cloth");
            setTimeout(() => {
                remove__btns = document.querySelectorAll(".remove-btn");
                console.log(remove__btns);
                addListener(remove__btns);
            }, 1000);
        
        });
    $("#basics").click(function () {
        setInactive();
        $("#basics").addClass("active");
        $("#dashWrapper").load("/basics-cloth");
        setTimeout(() => {
            remove__btns = document.querySelectorAll(".remove-btn");
            console.log(remove__btns);
            addListener(remove__btns);
        }, 1000);
        
    });
    // graphics
    $(".col-md-4.totalCards.graphics").click(function () {
            setInactive();
            $("#graphics").addClass("active");
            $("#dashWrapper").load("/graphics-cloth");
            setTimeout(() => {
                remove__btns = document.querySelectorAll(".remove-btn");
                console.log(remove__btns);
                addListener(remove__btns);
            }, 1000);
        
    });
    $("#graphics").click(function () {
        setInactive();
        $("#graphics").addClass("active");
        $("#dashWrapper").load("/graphics-cloth");
        setTimeout(() => {
            remove__btns = document.querySelectorAll(".remove-btn");
            console.log(remove__btns);
            addListener(remove__btns);
        }, 1000);
        
    });
    // florat
    $(".col-md-4.totalCards.florat").click(function () {
            setInactive();
            $("#florat").addClass("active");
            $("#dashWrapper").load("/florat-cloth");
            setTimeout(() => {
                remove__btns = document.querySelectorAll(".remove-btn");
                console.log(remove__btns);
                addListener(remove__btns);
            }, 1000);
        
    });
    $("#florat").click(function () {
        setInactive();
        $("#florat").addClass("active");
        $("#dashWrapper").load("/florat-cloth");
        setTimeout(() => {
            remove__btns = document.querySelectorAll(".remove-btn");
            console.log(remove__btns);
            addListener(remove__btns);
        }, 1000);
        
    });
    // limited
    $(".col-md-4.totalCards.limited").click(function () {
            setInactive();
            $("#limited").addClass("active");
            $("#dashWrapper").load("/limited-cloth");
            setTimeout(() => {
                remove__btns = document.querySelectorAll(".remove-btn");
                console.log(remove__btns);
                addListener(remove__btns);
            }, 1000);
        
    });
    $("#limited").click(function () {
        setInactive();
        $("#limited").addClass("active");
        $("#dashWrapper").load("/limited-cloth");
        setTimeout(() => {
            remove__btns = document.querySelectorAll(".remove-btn");
            console.log(remove__btns);
            addListener(remove__btns);
        }, 1000);
        
    });
    });


    function addListener(elements) {
        elements.forEach(element => {
            element.addEventListener('click', e => {
                let isTrue = confirm("Press OK to delete");
                if (isTrue) {
                    return true;
                }
                else {
                    e.preventDefault();
                }
            })
        })
    }