var calc_results = 0
/*
function check() {
    var temperature_current_cat = document.getElementById("Temp_current_cat").value;
    var temperature_change_cat = document.getElementById("temp_change_cat").value;
    if (temperature_current_cat == "fahrenheit"){
        temperature_change_cat.value = 1;

    }
    if(temperature_current_cat == "celsius"){
        temperature_change_cat.value = 0;
    }
}
*/
/*
var lookup = {
    'celsius': ['Fahrenheit'],
    'fanhrenheit': ['Celcius'],
 };
 
 // When an option is changed, search the above for matching choices
 $('Temp_current_cat').on('change', function() {
    // Set selected option as variable
    var selectValue = $(this).val();
 
    // Empty the target field
    $('#change_cat').empty();
    
    // For each chocie in the selected option
    for (i = 0; i < lookup[selectValue].length; i++) {
       // Output choice in the target field
       ('#temp_change_cat').append("<option value='" + lookup[selectValue][i] + "'>" + lookup[selectValue][i] + "</option>");
    }
 });
*/
/*
function calculations() {
    if (change_cat == "fanrenheit" ){
        calc_results = 5/9 * (current_temp - 32);
        results.innerHTML = calc_results + "°C";
        console.log("this works")
    }
    if (change_cat == "celsius") {
        calc_results = (9/5 * current_temp) + 32;
        results.innerHTML = calc_results + "°F";
        console.log("this works 2")
        
    }
    else{
        console.log("this doesnt work")
    }
}
*/

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
/*
function calculations(){
    if (document.input_box.Temp_current_cat.value == "Fahrenheit"){
        console.log("helloo")
    }
    else{
        console.log("done over this")
    }
}
*/


