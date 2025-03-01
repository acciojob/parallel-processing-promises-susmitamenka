//your JS code here. If required.
const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];
function downloadImage(link){
	return new promise((resolve,reject)=>{
		let random = parseInt(Math.random()*10000)
		if(link.startWith("https")){
			setTimeout(()=>{
				resolve({
					image: link,
					message: "image downloaded sucessfully"
				})
			},3000)
		}
		else{
			setTimeout(()=>{
				reject(`image could not be downloaded ${link}`)
			},3000)
		}
	
		})
}
let arr = []
for(let img of images){
	arr.push(downloadImage(img.url))
}
promise.all(arr).then(
	(res)=>{
		console.log(res)
		for(let t of res){
			let img = document.createElement("img")
			img.src = t.image
			output.append(img)
		}
	}
)
.catch(
	(err)=>{
	console.log(err)
}
)
