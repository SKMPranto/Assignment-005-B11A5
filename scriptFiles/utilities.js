function jumpPage(id,page){
    document.getElementById(id).addEventListener("click", function (){
        const url = window.location.href=page;
    return url;
});
};