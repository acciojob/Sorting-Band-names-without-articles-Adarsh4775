//your code here

function ArticleRemove(bandnames){
	let Modifiedbandnames = bandnames.map(name => {
		return name.replace(/^(a | an | the)/i,"").trim()
	});
	}

  Modifiedbandnames.sort();
console.log( Modifiedbandnames);
}