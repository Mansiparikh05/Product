
let productArr=[];
function getData(){
   // window.alert("hiiiii")

   //create object of xmlhttprequest
   let xmlhttp = new XMLHttpRequest();

   //write callback function to handle response
   xmlhttp.onload=function()
   {
    console.log(this.response)
    productArr=JSON.parse(this.response)

    let parentE1=document.getElementById("d1")
    for(let product of productArr)
    {
        let newrow=document.createElement("tr")
        newrow.innerHTML=`<td>${product.id}</td><td>${product.pname}</td><td>${product.pprice}</td><td>${product.pcompany}</td> `
        parentE1.appendChild(newrow )
    }
   }
   
   //create request
   xmlhttp.open("GET","http://localhost:8888/products")

  // send request
   xmlhttp.send()

}


