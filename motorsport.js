// Jag använder variabeln 'active' för att meddela oss när vi använder den
let active = false;

// Först måste vi ställa in våra event listeners
document.querySelector('.scroller').addEventListener('mousedown',function(){
  active = true;
  
  // Lägger till en "scrolling" klass så att "scroller" har full opacity medan den är aktiv
  document.querySelector('.scroller').classList.add('scrolling');
});

// ställer in så det bara fungerar när man klickar
document.body.addEventListener('mouseup',function(){
  active = false;
  document.querySelector('.scroller').classList.remove('scrolling');
});
document.body.addEventListener('mouseleave',function(){
  active = false;
  document.querySelector('.scroller').classList.remove('scrolling');
});

// Vart man är med sin mus
document.body.addEventListener('mousemove',function(e){
  if (!active) return;
  // musen
  let x = e.pageX;
  // relaterar till klassen ".wrapper"
  x -= document.querySelector('.wrapper').getBoundingClientRect().left;
  // Ändrar tillstånd
  scrollIt(x);
});

// Funktionen
function scrollIt(x){
    let transform = Math.max(0,(Math.min(x,document.querySelector('.wrapper').offsetWidth)));
    document.querySelector('.after').style.width = transform+"px";
    document.querySelector('.scroller').style.left = transform-25+"px";
}

// bestämmer var man börjar så användaren kan se lite av båda bilderna
scrollIt(150);
