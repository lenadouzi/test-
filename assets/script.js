const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// ****Ecoute du click sur les flèches de directions ****

const nextArrow = document.querySelector(".arrow_right");
const prevArrow = document.querySelector(".arrow_left");
const nbrImg = slides.length;
const imgCarousel = document.querySelector(".banner-img");
const textCarousel = document.querySelector("#banner p");
var index = 0

// **** Affichage des 'bullet points' du carrousel ****

// boucle qui permet d'avoir autant de bullet que de slide
for (let i = 1; i <= nbrImg; i++) {
	//variable qui contient la div avec la class=dots
	const dotsContainer = document.querySelector(".dots");
	//variable qui contient l'element créés: span 
	const dot = document.createElement("span");
	dot.classList.add("dot");  //on lui donne la class dot
	//on inserre l'élément span dans la div 'dots'
	dotsContainer.appendChild(dot);
}
//ajoute la class 'dot_selected sur le point avec l'index
const dots = document.getElementsByClassName("dot");
dots[index].classList.add("dot_selected");
console.log(dots);

// **** fin *****

//fonctio qui permet le changement d'image et point dans le carrousel au clique sur une flèche
function Defilement(sens) {
	
	index = index + sens;
//  permet d'avoir un défilement en boucle
	if (index > nbrImg -1) 
		index = 0;
	if (index < 0)
		index = nbrImg -1;
	console.log(index);
// **** Affichage du carousel ****
	imgCarousel.src ="./assets/images/slideshow/" + slides[index].image;
	imgCarousel.classList.add("activeImg");
	console.log(imgCarousel);
	textCarousel.innerHTML = slides[index].tagLine;
// **** changement du point en fonction de l'image affiché
	const dotActive = document.querySelector(".dot_selected");
	newDotIndex = index;
	console.log(newDotIndex);	
	dots[index].classList.add("dot_selected");
	dotActive.classList.remove("dot_selected")
}
	
// *** permet le défilement automatiue
setInterval("Defilement(1)",8000);




	


	
	