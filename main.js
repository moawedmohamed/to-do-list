let input = document.querySelector(".input");
let submit = document.querySelector(".Add");
let tasks = document.querySelector(".tasks");
let clear = document.querySelector(".clear");

console.log("JavaScript is running!");

// إضافة مهمة جديدة
submit.addEventListener("click", function () {
    console.log("Add button clicked");
    if (input.value != '') {
        let li = document.createElement("li");
        li.innerHTML = input.value;
        tasks.appendChild(li);
        input.value = "";

        // إضافة الأحداث للمهمة الجديدة
        li.addEventListener("click", toggleTaskCompletion);
        li.addEventListener("dblclick", deleteTask);
    }
});

// مسح آخر مهمة
clear.addEventListener("click", function () {
    console.log("Clear button clicked");
    if (tasks.lastElementChild) {
        tasks.removeChild(tasks.lastElementChild);
    }
});

// وضع خط على المهمة عند النقر
function toggleTaskCompletion(e) {
    console.log("Task clicked:", e.target);
    e.target.classList.toggle('completed');
}

// حذف المهمة عند النقر المزدوج
function deleteTask(e) {
    console.log("Task double-clicked and removed:", e.target);
    tasks.removeChild(e.target);
}
