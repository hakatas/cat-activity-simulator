

class Cat{
    constructor(name,age){
        this.name = name;
        this.age  = age;
        this.energy = 100;
        this.hunger = 0;
        this.mood   = "relax";
        this.state  = "sleep";
    }


    getStatus(){
        console.log(`
            名前：${this.name}
            年齢： ${this.age}
            エネルギー： ${this.energy}
            空腹度： ${this.hunger}
            感情： ${this.mood}
            状態： ${this.state}
        `);
    }



    play(){
        if(this.hunger < 80 && this.energy > 20){
            this.state = "play";
            this.mood = "joy";
            this.energy -= 20;
            this.hunger += 20;
            console.log(`${this.name}は夢中に遊んでいる`);
        }else{
            console.log(`${this.name}は疲れているかお腹を空かしている`);
        }
    }


    eat(){
        if(this.hunger > 0){
            this.state = "eating";
            this.mood  = "satisfication";
            this.hunger -= 30;
            this.energy += 10;
            if(this.hunger < 0)this.hunger = 0;
            console.log(`${this.name}は美味しそうにご飯を食べている`);
        }else{
            console.log(`${this.name}はお腹が空かしていないようだ`);
        }
    }



    goToSleep(){
        if(this.energy < 100){
            this.state = "sleep";
            this.mood  = "relax";
            console.log(`${this.name}は気持ちよさそうに寝ている`);
            setTimeout(() => {
                this.energy += 40;
                if(this.energy > 100) this.energy = 100;
                console.log(`${this.name}は十分に休みました`);
            },2000);
        }else{
            console.log(`${this.name}は元気いっぱいで眠りたくなるようです`);
        }
    }



    meow(){
        this.state = "cry";
        this.mood  = "dependsOn";
        console.log(`${this.name}はよん！と鳴く`);
    }



    updateState(){
        const moods = ["relax","irrtation","curiosity","happy"];
        this.mood = moods[Math.floor(Math.random() * moods.length)];
        this.hunger += 10;
        if(this.hunger > 100) this.hunger = 100;
        if(this.hunger < 60)  this.mood = "irritaion";
        console.log(`${this.name}の感情が変わりました：${this.mood}`);
    }
}


var myCat = new Cat("mike",30);

    myCat.getStatus();
    myCat.play();
    myCat.meow();
    myCat.getStatus();
    myCat.eat();
    myCat.getStatus();
    myCat.goToSleep();
    myCat.updateState();
    myCat.getStatus();