let url='https://fakestoreapi.com/products'

// async function getproduct() {
//     let link= await axios.get(url);
//     console.log(link)
// }

// getproduct();
async function getproduct() {
    let res= await fetch(url);
    let product=await res.json();
    
    render(product);
 
}


let productcontanel=document.getElementById('product_container');



 function generateproduct(product)
 {
     return
` <div class="card_contiainer">
            <div class="image_container"> 
                <img "${product.image}">
            </div>
            <div class="content_container">
                <h2>"${product.title}"</h2>
                <p>" ${product.description}"</p>
                     <button class="btn">"${product.price}"</button>
            </div>
           
        </div>`
}


  async function render(product){
     for(products of product){
   productcontanel.innerHTML +=generateproduct(product);
   
    }
 }
render();
  
 