function fun(){
fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes')
.then(response=>response.json())
.then(response=>{
    console.log(response);
    document.getElementById("quote").innerHTML = response[0].quote;
    document.getElementById("author").innerHTML = 'Author: '+response[0].author;
})
.catch(err=>console.log('Error'))
}