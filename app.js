
//Ger "section" och "span" funktioner
const section = document.querySelector("section");
const playerLivesCount = document.querySelector("span");
let playerLives = 6;

//Texten som visar hur många liv man har kvar
playerLivesCount.textContent = playerLives;


  //Detta är våra obijekt, alltså våra pjäser/boxar 🧑🏻‍💻
  const getData = () => [
    { imgSrc: "bilder/f1ferrari.jpg", id: 1, name: "ferrari" },
    { imgSrc: "bilder/f1tarckstar.jpg", id: 2, name: "trackstar" },
    { imgSrc: 'bilder/f1track.jpg', id: 3, name: "track" },
    { imgSrc: "bilder/pitstop.jpg", id: 4, name: "pitstop" },
    { imgSrc: "bilder/felix-berger-C_J29bp8-4Y-unsplash.jpg", id: 5, name: "motorsport" },
    { imgSrc: "bilder/motogp.jpg", id: 6, name: "motogp" },
    { imgSrc: "bilder/nascarpit.jpg", id: 7, name: "nascarpit" },
    { imgSrc: "bilder/nascarrace.jpg", id: 8, name: "nascar" },
    { imgSrc: "bilder/f1ferrari.jpg", id: 9, name: "ferrari" },
    { imgSrc: "bilder/f1tarckstar.jpg", id: 10, name: "trackstar" },
    { imgSrc: "bilder/f1track.jpg", id: 11, name: "track" },
    { imgSrc: "bilder/pitstop.jpg", id: 12, name: "pitstop" },
    { imgSrc: "bilder/felix-berger-C_J29bp8-4Y-unsplash.jpg", id: 13, name: "motorsport" },
    { imgSrc: "bilder/motogp.jpg", id: 14, name: "motogp" },
    { imgSrc: "bilder/nascarpit.jpg", id: 15, name: "nascarpit" },
    { imgSrc: "bilder/nascarrace.jpg", id: 16, name: "nascar"},
  ];

 //Här sker randomiseringen
 const randomize = () => {
   const cardData = getData();
   cardData.sort(() => Math.random() - 0.5);
   return cardData;
 };

  //Funktionen för att generera korten
  const cardGenerator = () => {
    const cardData = randomize();
    //Här genererar vi korten genom html, dessa divs kommer vara i sectionen som jag beskrev i html sidan
    cardData.forEach((item) => {
      const card = document.createElement("div");
      const face = document.createElement("img");
      const back = document.createElement("div"); 
      card.classList = "card";
      face.classList = "face";
      back.classList = "back";
      //Här ger vi korten den informationen så vi kan para ihop dem
      face.src = item.imgSrc;
      card.setAttribute("name", item.name);
      //Här bifogar vi korten i section
      section.appendChild(card);
      card.appendChild(face);
      card.appendChild(back);

      card.addEventListener("click", (e) => {
        card.classList.toggle("toggleCard");
        checkCards(e);
      });
    });
  };
  //Kollar korten så den stämmer
  const checkCards = (e) => {
    console.log (e);
    const clickedCard = e.target;
    clickedCard.classList.add("flipped");
    const flippedCards = document.querySelectorAll(".flipped");
    const toggleCard = document.querySelectorAll("toggleCard");
    console.log(flippedCards);
    //Här är logiken för korten
    if (flippedCards.length === 2) {
      if (
        flippedCards[0].getAttribute("name") ===
        flippedCards[1].getAttribute("name")
      ) {
        console.log("match");
        flippedCards.forEach((card) => {
          card.classList.remove("flipped");
          card.style.pointerEvents = "none";
        });
      } else {
        console.log("worng");
        flippedCards.forEach((card) => {
          card.classList.remove("flipped");
          setTimeout(() => card.classList.remove("toggleCard"), 1000);
        });
        playerLives--;
        playerLivesCount.textContent = playerLives;
        if (playerLives === 0) {
          restart("you lost");
        }
      }
    } 
    if (toggleCard.length === 16 ) {
      restart("you won");
    }
  };
      //Omstart
      const restart = (text) => {
        let cardData = randomize();
        let faces = document.querySelectorAll(".face");
        let cards = document.querySelectorAll(".card");
        section.style.pointerEvents = "none";
        cardData.forEach((item, index) => {
          cards[index].classList.remove(".toggleCard");
          //Randomisering
          setTimeout (() => {
            cards[index].style.pointerEvents = "all";
            faces[index].src = item.imgSrc;
            cards[index].setAttribute("name", item.name);
            section.style.pointerEvents = "all";
          }, 1000);
        });
        playerLives = 6;
        playerLivesCount.textContent = playerLives;
        setTimeout(() => window.alert(text), 1000);
      };
    
      cardGenerator();