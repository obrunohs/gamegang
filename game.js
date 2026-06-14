const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const player = {
    x: 500,
    y: 300,
    size: 20,
    speed: 4
};

const keys = {};

const territories = [
    {x:0,y:0,w:500,h:300,owner:"Vermelhos"},
    {x:500,y:0,w:500,h:300,owner:"Azuis"},
    {x:0,y:300,w:500,h:300,owner:"Neutro"},
    {x:500,y:300,w:500,h:300,owner:"Neutro"}
];

document.addEventListener("keydown",(e)=>{
    keys[e.key]=true;
});

document.addEventListener("keyup",(e)=>{
    keys[e.key]=false;
});

function update(){

    if(keys["w"]) player.y -= player.speed;
    if(keys["s"]) player.y += player.speed;
    if(keys["a"]) player.x -= player.speed;
    if(keys["d"]) player.x += player.speed;

    territories.forEach(t=>{

        if(
            player.x > t.x &&
            player.x < t.x+t.w &&
            player.y > t.y &&
            player.y < t.y+t.h
        ){
            t.owner = "Jogador";
        }

    });

}

function draw(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    territories.forEach(t=>{

        ctx.fillStyle =
        t.owner==="Vermelhos" ? "red" :
        t.owner==="Azuis" ? "blue" :
        t.owner==="Jogador" ? "green" :
        "gray";

        ctx.fillRect(t.x,t.y,t.w,t.h);

        ctx.fillStyle="white";
        ctx.font="20px Arial";
        ctx.fillText(t.owner,t.x+20,t.y+30);

    });

    ctx.fillStyle="black";
    ctx.fillRect(
        player.x,
        player.y,
        player.size,
        player.size
    );

}

function gameLoop(){
    update();
    draw();
    requestAnimationFrame(gameLoop);
}

gameLoop();