function myFunc(){
    let searchval= document.getElementById("inp").value.toUpperCase();
    let table= document.getElementsByTagName("table");
    let tr = document.getElementsByTagName("tr");
    for(let i =0;i<tr.length;i++){
        let td = tr[i].getElementsByTagName("td")[0]; // names ke liye hai
        if(td){
            let text=td.innerText;
            if(text.toUpperCase().indexOf(searchval) > -1){
                tr[i].style.display="";

            }else{
                tr[i].style.display="none";
            }
        } 
    }
    console.log(searchVal);
}