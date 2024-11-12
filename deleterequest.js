

function deleteData()
{
    let id=document.getElementById("pro1").value
    //console.log(id)

    if(window.confirm(`Are you sure to delete product with id:${id}`))
    {

    let xmlhttp=new XMLHttpRequest()
    xmlhttp.onload=function(){
        window.alert("product deleted successfully")
    }

    xmlhttp.open("DELETE",`http://localhost:8888/products/${id}`)
    xmlhttp.send()
}
}