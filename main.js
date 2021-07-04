menu_list_array = ["Veg Margherita Pizza",
"Panner Tikka Pizza"
                    ];

function getmenu(){
var htmldata = "<ol class='menulist'>";
menu_list_array.sort();
for(i=0;i<menu_list_array.length;i++){
    htmldata = htmldata + '<li>' + menu_list_array[i] + '</li>';
}
htmldata=htmldata + '</ol>'
document.getElementById("display_menu").innerHTML = htmldata;
}

function add_item(){
var htmldata;
var item=document.getElementById("add_item").value;
menu_list_array.sort();
htmldata = "<section class='cards'>";
for(i=0;i<menu_list_array.length;i++){
    htmldata = htmldata + "<div class='card'>"
    +'<img src="images/pizzaimg.png"/>' + menu_list_array[i] + "</div>";
}
htmldata = htmldata + "</section>";
document.getElementById("display_addedmenu").innerHTML = htmldata;
}

function add_top(){
var menuitem = document.getElementById("add_item").value;
menu_list_array.push(menuitem);
add_item;
}