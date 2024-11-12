let id


function UpdateData(){

   id=document.getElementById("proid").value
   //console.log(id)

   let xmlhttp=new XMLHttpRequest()
   xmlhttp.onload=function(){
   // console.log(this.response)
    let prodObj=JSON.parse(this.response)
    document.getElementById("eproId1").value=prodObj.pname
    document.getElementById("eproId2").value=prodObj.pprice
    document.getElementById("eproId3").value=prodObj.pcompany
   }

   xmlhttp.open("GET",`http://localhost:8888/products/${ id}`)
   xmlhttp.send()

 
}

function UpdateProduct(){
    let name=document.getElementById("eproId1").value
    let price=document.getElementById("eproId2").value
    let company=document.getElementById("eproId3").value

    //console.log(name,price,company)
    let prodObj={
        pname:name,
        pprice:price,
        pcompany:company
    }
    let prodJson=JSON.stringify(prodObj)

    let xmlhttp=new XMLHttpRequest()

    xmlhttp.onload=function(){
        window.alert("product is updated")
    }

    xmlhttp.open("PUT",`http://localhost:8888/products/${id}`)
    xmlhttp.send(prodJson)

}

