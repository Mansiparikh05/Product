function addData(){

        
    let name=document.getElementById("proId1").value
   // console.log(name)

    let price=document.getElementById("proId2").value
    //console.log(price)

    let company=document.getElementById("proId3").value
    //.log(company)

    let prodObj={
        pname:name,
        pprice:price,
        pcompany:company
    }

    let prodJson=JSON.stringify(prodObj)


    let xmlhttp= new XMLHttpRequest()
    xmlhttp.onload=function(){
        window.alert("product added successfully")
    }

    xmlhttp.open("POST","http://localhost:8888/products")
    xmlhttp.send(prodJson)
   


    }