class Game {
    private div: HTMLElement
    
    private player:Player
    private car:Car[] = []
    
    constructor() {    
        this.div = document.createElement("level")
        document.body.appendChild(this.div)
    
        for (let i = 0; i < 7; i++) {
            this.car.push(new Car())
        }

        this.player = new Player()

        this.gameLoop()
    }

    private gameLoop(){
        this.player.update()

        for (const car of this.car){
            car.update()
            if(this.checkCollision(car.getRectangle(), this.player.getRectangle())){
                this.player.x = 400
                this.player.y = 670
            }
        }

        requestAnimationFrame(this.gameLoop.bind(this));
    }

    public update() : void {
        
    }

    private checkCollision(a: ClientRect, b: ClientRect) {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom)
        }
} 


window.addEventListener("load", ()=> new Game())