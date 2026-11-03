$(document).ready(function() {

    // 1. Study Time Calculator
    $("#calculateStudy").click(function() {

        let total = Number($("#totalTime").val());

        let reading = Number($("#reading").val());
        let maths = Number($("#maths").val());
        let science = Number($("#science").val());
        let breakTime = Number($("#breakTime").val());

        let sum = reading + maths + science + breakTime;

        if (
            total <= 0 ||
            reading < 0 || maths < 0 ||
            science < 0 || breakTime < 0 ||
            sum != 100
        ) {
            alert("Enter valid values. Percentages must total 100%.");
            return;
        }

        let r = total * reading / 100;
        let m = total * maths / 100;
        let s = total * science / 100;
        let b = total * breakTime / 100;

        $("#studyResult").html(
            "Reading: " + r + " minutes<br>" +
            "Maths: " + m + " minutes<br>" +
            "Science: " + s + " minutes<br>" +
            "Break: " + b + " minutes"
        );
    });


    // 2. Learning Kit Order Calculator
    $("#calculateOrder").click(function() {

        let price = Number($("#kitType").val());
        let quantity = Number($("#quantity").val());

        if (quantity <= 0 || !Number.isInteger(quantity)) {
            alert("Enter a valid quantity.");
            return;
        }

        let total = price * quantity;

        $("#orderResult").html(
            "Price per Kit: ₹" + price + "<br>" +
            "Quantity: " + quantity + "<br>" +
            "Total Amount: ₹" + total
        );

        $("#orderResult").fadeIn();
    });


    // 3. Customize Learning Buddy
    $("#applyBuddy").click(function() {

        let color = $("#buddyColor").val();
        let tint = $("#glassTint").val();
        let size = Number($("#buddySize").val());

        $("#buddyPreview").css({
            "background-color": color,
            "width": size + "px",
            "height": size + "px"
        });

        $("#glasses").css("background-color", tint);
    });


    // 4. Animate Learning Buddy
    $("#moveBuddy").click(function() {

        $("#buddyPreview")
            .stop(true)
            .animate({ top: "-15px" }, 200)
            .animate({ top: "0px" }, 200);
    });


    // 5. Show and Hide Learning Tip
    $("#tipButton").click(function() {

        $("#tipContent").slideToggle();
    });

});