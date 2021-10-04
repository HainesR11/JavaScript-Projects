var calc_results = 0

function calculations() {
    var current_temp = document.getElementById("temp_current").value;
    var results = document.getElementById("results");
    var select = document.getElementById("temp_change_cat");
    var value = select.options[select.selectedIndex].value;
    if (value === "Fahrenheit"){
        calc_results = (9/5 * current_temp) + 32;
        
        results.innerHTML = calc_results + "°F";
        console.log(calc_results);
        
        if (calc_results => 50){
            const sun_img = document.querySelector(".img_sun img")
            function start_animation(){
                console.log("hello");
                sun_img.setAttribute("animation-name", "rising_sun");
                sun_img.setAttribute("animation-duration", "5s");
            }
            const convert_Btn = document.querySelector("convert_btn");

            sun_img.classList.remove("hide");
            sun_img.classList.add("show");
            
        }
    }
    else if (value === "Celsius"){
        calc_results =  Math.round( 5/9 * (current_temp - 32));
        results.innerHTML = calc_results + "°C";
        console.log(calc_results);
    }
    
}

function check_current() {
    var temp_current_cat = document.getElementById("Temp_current_cat");
    var change_cat = temp_current_cat.options[temp_current_cat.selectedIndex].value;
    if  (change_cat === "fahrenheit"){
        document.getElementById("temp_change_cat").value = "Celsius"
    }
    else if (change_cat === "celsius") {
        document.getElementById("temp_change_cat").value = "Fahrenheit"
    }
    
}
function check_change() {
    var temp_current_cat = document.getElementById("temp_change_cat");
    var change_cat = temp_current_cat.options[temp_current_cat.selectedIndex].value;
    if  (change_cat === "Fahrenheit"){
        document.getElementById("Temp_current_cat").value = "celsius"
    }
    else if (change_cat === "Celsius") {
        document.getElementById("Temp_current_cat").value = "fahrenheit"
    }
    
}


