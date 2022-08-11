function addingList(){
    var inputValue = $("#listInput").val();
    var li = $('<li>')
    li.append(inputValue)
    if (inputValue === '') {
        alert("You must write something!");
      } else {
        $("#addList").append(li);
      }
    $("#listInput").val("");
}

$('input').bind('keydown', (e) => {
if(e.keyCode===13){
    addingList();
}
})

$('ul').bind('click', (e)=>{
if(e.target.tagName==='LI'){
    e.target.classList.toggle('checked');
}
})












