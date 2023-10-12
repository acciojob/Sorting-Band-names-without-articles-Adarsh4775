//your code here

function ArticleRemove(str){
	str=str.replace(/^(a | an | the)/i,"");


	touristSpots.sort((a,b)=>
		stripArticle(a).localeCompare(stripArticle(b)));

	let ul = document.getElementById("band");
	touristSpots.forEach(spot =>{
	let li = document.createElement("li");
	li.textContent=spot;
	ul.appendChild(li);
});
}
	