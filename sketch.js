var bookClosed, bookClosedImage, bookOpen, bookOpenImage, book, closeButton, buttonUnpressed, buttonPressed;
var introText;
var gameState = 1;
function preload()
{
  bookClosedImage = loadImage("IntroImages/bookClosed.png");
  bookOpenImage = loadImage("IntroImages/bookOpen.png");
  buttonUnpressed = loadImage("IntroImages/buttonUnpressed.png");
  buttonPressed = loadImage("IntroImages/buttonPressed.png");
}
function setup() {
  createCanvas(1600,1600);
  book = createSprite(800, 800, 100, 100);
  book.addImage(bookClosedImage);
  book.scale = 5;
  closeButton = createSprite(1170, 1000, 200, 100);
  closeButton.addImage("Unpressed", buttonUnpressed);
  closeButton.addImage("pressed", buttonPressed);
  closeButton.scale = 2;
  closeButton.visible = false;

}

function draw() {
  background("Olive"); 
  drawSprites();

  if(mousePressedOver(book))
  {
    gameState = 2;
  } 
  if(gameState == 2)
  {
    book.addImage(bookOpenImage);
    book.scale = 2;
    textSize(20);
    textFont("timesNewRoman");
    introText = createElement("h1");
    introText.html("This game represents the<br/>"+ 
    "different ranks in scouting. You <br/>"+
    "will be given tasks that you need<br/>" +
    "to complete in order to progress<br/>"+
    "through the game. The seven<br/>"+
    "levels or ranks that you will be<br/>" + 
    "completing are Scout, Tenderfoot, <br/>"+
    "Second Class, First Class, Star,<br/>" +
    "Life and Eagle. Good luck on<br/>"+
    " your scouting journey.<br/>");
    introText.position(325, 550);
    closeButton.visible = true;
    
    if(mousePressedOver(closeButton))
    {
      closeButton.changeImage("pressed");
      gameState = 3;
    }
  }


  if(gameState === 3)
  {
    clear();
    introText.hide();
    book.remove();
    closeButton.remove();
    background("Olive");
  }

 /* if(gameState == 4)
  {
    book.delete();
    introText.delete();
    closeButton.delete();
  }*/
}