const search = document.getElementById('commonsearch');
NodeList.prototype.forEach = Array.prototype.forEach;
let menus = document.querySelectorAll('.menuselect');
let users = document.querySelectorAll('.user');
let filters = document.querySelectorAll('.filter');

let img = document.querySelectorAll('.img');
menus.forEach(menu =>{
    menu.addEventListener('click',function(){
        menus.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active'); 
    });
     
});

filters.forEach(filt =>{
    filt.addEventListener('click',function(){
        filters.forEach(btn => btn.classList.remove('activefilter'));
        this.classList.add('activefilter'); 
    });
     
});


users.forEach(user =>{
    user.addEventListener('click',function(){
        users.forEach(btn => btn.classList.remove('active-profile'));
        this.classList.add('active-profile'); 
    });
     
});

document.getElementById('mysold').addEventListener('click',function(){{
    document.querySelectorAll('.paycard').forEach(btn =>btn.classList.add('hidden'));
    document.querySelector('.paid').classList.remove('hidden');
    
}});
document.getElementById('mywait').addEventListener('click',function(){{
    document.querySelectorAll('.paycard').forEach(btn =>btn.classList.add('hidden'));
    document.querySelector('.waited').classList.remove('hidden');
    
}});
document.getElementById('mystates').addEventListener('click',function(){{
    document.querySelectorAll('.paycard').forEach(btn =>btn.classList.add('hidden'));
    document.querySelector('.statistics').classList.remove('hidden');
    
}});

document.getElementById('mymed').addEventListener('click',function(){{
   var category = document.getElementById('mymedia');
   category.click();
    
}});

document.getElementById('mypays').addEventListener('click',function(){{
   var category = document.getElementById('mypayments');
   category.click();
    
}});
document.getElementById('settings').addEventListener('click',function(){{
   var category = document.getElementById('user-info');
   category.click();
    
}});
document.getElementById('mypays').addEventListener('click',function(){{
   var category = document.getElementById('mypayments');
   category.click();
    
}});

document.getElementById('myfavs').addEventListener('click',function(){{
   var category = document.getElementById('myfav');
   category.click();
    
}});

document.getElementById('myevals').addEventListener('click',function(){{
   var category = document.getElementById('myval');
   category.click();
    
}});






document.getElementById('user-info').addEventListener('click',function(){{
    document.querySelectorAll('.info').forEach(btn =>btn.classList.add('hidden'));
    document.querySelector('.personal-data').classList.remove('hidden');
    
}});

document.getElementById('mymedia').addEventListener('click',function(){{
    document.querySelectorAll('.info').forEach(btn =>btn.classList.add('hidden'));
    document.querySelector('.personal-media').classList.remove('hidden');
    
}});

document.getElementById('mypayments').addEventListener('click',function(){{
    document.querySelectorAll('.info').forEach(btn =>btn.classList.add('hidden'));
    document.querySelector('.personal-payment').classList.remove('hidden');
    
}});

document.getElementById('myfav').addEventListener('click',function(){{
    document.querySelectorAll('.info').forEach(btn =>btn.classList.add('hidden'));
    document.querySelector('.personal-favs').classList.remove('hidden');
    
}});

document.getElementById('myval').addEventListener('click',function(){{
    document.querySelectorAll('.info').forEach(btn =>btn.classList.add('hidden'));
    document.querySelector('.personal-vals').classList.remove('hidden');
    
}});




img.forEach(image =>{
    image.addEventListener('click',function(){
        img.forEach(btn => btn.classList.remove('current-img'));
        this.classList.add('current-img');
        
        
    });
     
});
img.forEach(image =>{
    image.addEventListener('mouseover',function(){
        img.forEach(btn => btn.classList.remove('current-img'));
        this.classList.add('current-img');
        
        
    });
     
});
function imgChangSt(el){
    var x = el.parentElement.parentElement;
    x.style.backgroundImage ="url(resources/img/main-background-1.jpg)"
}
function imgChangNd(el){
    var x = el.parentElement.parentElement;
    x.style.backgroundImage ="url(resources/img/main-background.jpg)"
}
function imgChangRd(el){
    var x = el.parentElement.parentElement;
    x.style.backgroundImage ="url(resources/img/main-background-2.jpg)"
}



var firstName =  document.getElementById('name');
var surename =  document.getElementById('surename');
var ident =  document.getElementById('ident');
var city =  document.getElementById('city');
var region =  document.getElementById('region');
var phone =  document.getElementById('phone');
var email =  document.getElementById('email');

var oldName= firstName.value;
var oldSname= surename.value;
var oldIdent= ident.value;
var oldCity= city.value;
var oldRegion= region.value;
var oldPhone= phone.value;
var oldEmail= email.value;

function editData(el){
    var Inputdata = el.parentElement.querySelector('input');    
    var cancel = el.parentElement.querySelector('.cancel');
    Inputdata.removeAttribute('disabled')
    cancel.classList.remove('hidden');
    el.style.color="red";
    Inputdata.style.color = "#3e3e3e"
    cancel.style.visibility="visible";
}
function cancelEdit(el){
     
    var Inputdata = el.parentElement.querySelector('input');
    if (el.parentElement.querySelector('input').id === "name" ){el.parentElement.querySelector('input').value =  oldName; }
    if (el.parentElement.querySelector('input').id === "surename" ){el.parentElement.querySelector('input').value =  oldSname; }
    if (el.parentElement.querySelector('input').id === "ident" ){el.parentElement.querySelector('input').value =  oldIdent; }
    if (el.parentElement.querySelector('input').id === "city" ){el.parentElement.querySelector('input').value =  oldCity; }
    if (el.parentElement.querySelector('input').id === "region" ){el.parentElement.querySelector('input').value =  oldRegion; }
    if (el.parentElement.querySelector('input').id === "phone" ){el.parentElement.querySelector('input').value =  oldPhone; }
    if (el.parentElement.querySelector('input').id === "email" ){el.parentElement.querySelector('input').value =  oldEmail; } 
    Inputdata.setAttribute('disabled', "true");
    Inputdata.style.color="#9f9f9f"
    el.style.visibility="hidden";
    var edit = el.parentElement.querySelector('.edit');
    edit.style.color="#000";
    
    
}
function loadImg(){
        var input = document.querySelector('input[type=file]');
        input.click();
        
    }
function loadImgmulti(el){
        var input = el.parentElement.querySelector('input[type=file]');
        input.click();
        
    }

function previewFile() {
        const preview = document.querySelector('#userImg');
        const file = document.querySelector('input[type=file]').files[0];
        const reader = new FileReader();

        reader.addEventListener("load", function () {
            // convert image file to base64 string
            preview.src = reader.result;            
            document.querySelector('.personal').querySelector('img').src = preview.src;           
            document.querySelector('input[type=file]').classList.add('hidden')
        }, false);

        if (file) {
            reader.readAsDataURL(file);
        }
    }

function previewFilemulti(el) {
        const preview = el.parentElement.querySelector('img');
        const file = el.parentElement.querySelector('input[type=file]').files[0];
        const reader = new FileReader();

        reader.addEventListener("load", function () {
            // convert image file to base64 string
            preview.src = reader.result;            
            el.src = preview.src;           
            document.querySelector('input[type=file]').classList.add('hidden')
        }, false);

        if (file) {
            reader.readAsDataURL(file);
        }
    }



function remDelete(el){
   var del = el.parentElement.parentElement.querySelector('.delete');
   del.style.visibility = "hidden"
}
function resDelete(el){
   var del = el.parentElement.parentElement.querySelector('.delete');
   del.style.visibility = "visible"
}

function del(el){
    el.parentElement.style.display="none";
}

function delAll(el){
   var card = el.closest('.info').querySelectorAll('.card')   
   card.forEach(btn => btn.classList.add('hidden'));
}

function eval(el){
    
}
function cont(el){
    el.parentElement.classList.add('hidden');
    el.parentElement.parentElement.querySelector('.userInfo').classList.add('hidden');
    el.parentElement.parentElement.querySelector('.add').classList.remove('hidden');
    el.parentElement.parentElement.querySelector('.puplish').classList.remove('hidden');
    $('.circ').addClass('cir-full');
    
}
//continue(this)
//puplish(this)

$(document).ready(function () {
            var options = {
                max_value: 5,
                step_size: 0.5,
                update_input_field_name: $("#input2")
            }
            $(".rate").rate(options);
        });


