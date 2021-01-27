// Start you JavaScript code here.

// TODO: Use data from DataBase(db) to Render Product List
//Get the data from DataBase(db) to Render Product List
db
    .collection("productList")
    .get()
    // success
    .then( function(collection){
        console.log("Get data!",collection)
        // Loop the docs
        collection.forEach( function(doc){
            // console.log('[doc]',doc)
            // console.log('[product]',doc.data())
            var product = doc.data();
            console.log('[product]',product);
            var title = '<div><h1>' + product.name + '</h1><h2>' + product.price  + '</h2></div>'
            $("#productRow").append(title)
        } )
    } )
    // failed
    .catch( function(err){
        console.log("error",error)
    } )

// TODO: id="createProductForm" submit event
$("#createProductForm").submit( function(event){
    //Prevent browser to refresh the page
    event.preventDefault();
    //when user submit this form...
    console.log("Form Submitted")
    //Create a data structure for a product
    var product = {
        name: $("#createProductName").val(),
        price: $("#createProductPrice").val(),
        category: $("#createProductCategory").val(),
        Image: $("#createProductImage").val(),
        createdAt: new Date()//取得當下的時間

    }
    console.log("[product]",product)
    //Save product to our database(cloud Firestore)
    //Save product to "productList" collection of db
    db
        .collection("productList")
        .add(product)
        //success
        .then( function(){
            alert("Product created!")
        } )
        //failed
        .catch( function(err){
            console.log("[error:]",err)
            alert("Something wrong!")
        } )

} ) 
// TODO: id="loginForm" submit event


// TODO: id="signUpForm" submit event
