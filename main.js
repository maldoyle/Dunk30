document.addEventListener("DOMContentLoaded", function () {
    const days = 30;
    const tasks = [
        "Healthy Breakfast",
        "Plan Your Day",
        "10-15 Minutes of Stretching",
        "Train",
        "Post In Hops for Hoops and Help at Least 1 Person",
        "Get at Least 8 Hours of Sleep",
        "Read ~one page"
    ];
    const container = document.querySelector(".row");
    for (let day = 0; day <= days; day++) {
        let box = document.createElement("div");
        box.className = "col-md-4 day-box";
        box.innerHTML =
            `<h5 class="day-title">Day ${day}</h5><ul class="task-list">` +
            tasks
                .map(
                    (task) => `<li><input type="checkbox" class="checkbox" id="day${day}-task${tasks.indexOf(task)}"><label for="day${day}-task${tasks.indexOf(task)}">${task}</label></li>`
                )
                .join("") +
            "</ul>";
        container.appendChild(box);
    }

    // Restore checkbox states
    $(".checkbox").each(function () {
        const isChecked = localStorage.getItem(this.id) === "true";
        $(this).prop("checked", isChecked).change();
    });
});

$(document).ready(function () {
    $(document).on("change", ".checkbox", function () {
        if (this.checked) {
            $(this).next("label").css("text-decoration", "line-through").css("color", "#7f8c8d");
        } else {
            $(this).next("label").css("text-decoration", "none").css("color", "#333");
        }
        localStorage.setItem(this.id, this.checked);
    });
});
