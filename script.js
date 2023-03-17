fetch("https://dummyjson.com/products").then((data)=> {
    //console.log(data);
    return data.json();
}).then((objectData)=>{
   // console.log(objectData)
   console.log(objectData.products[0].title);
   let tableData="";
   objectData.products.map((values) => {
        tableData+=` <tr>
        <td>${values.id}</td>
        <td>${values.title}</td>
        <td>${values.description}</td>
        <td>${values.price}</td>
        <td>${values.discountPercentage}</td>
        <td>${values.rating}</td>
        <td>${values.stock}</td>
        <td>${values.brand}</td>
        <td>${values.category}</td>
        <td><img src= "${values.thumbnail}"/></td>
        <td><img src= "${values.images[0]}"/></td>
        </tr>`;
    });
    document.getElementById("table_body").
    innerHTML=tableData;
}).catch((err)=>{
    console.log(err);
})