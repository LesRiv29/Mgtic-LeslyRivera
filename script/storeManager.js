function saveItems(item){
    console.log(item);//es objeto
    let val=JSON.stringify(item);//string
    console.log(val);
    localStorage.setItem("facultades", val);
}