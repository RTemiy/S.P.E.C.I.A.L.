class Char {
    constructor(a) {
        this.name = a.name;
        this.icon = a.icon;
        this.value = 1;
        this.Build();
    }
    Build() {
        this.containerEl = document.createElement('container');
        this.iconEl = document.createElement('icon');
        this.iconEl.innerText = this.icon;
        this.nameEl = document.createElement('a');
        this.nameEl.innerHTML = '⠀' + this.name;
        this.valueEl = document.createElement('av');
        this.increaseEl = document.createElement('button');
        this.increaseEl.innerHTML = '+';
        this.increaseEl.onclick = () => { this.ChangeValue(1); }
        this.decreaseEl = document.createElement('button');
        this.decreaseEl.innerHTML = '-';
        this.decreaseEl.onclick = () => { this.ChangeValue(-1); }

        this.containerEl.appendChild(this.iconEl);
        this.containerEl.appendChild(this.nameEl);
        this.containerEl.appendChild(this.decreaseEl);
        this.containerEl.appendChild(this.increaseEl);
        this.containerEl.appendChild(this.valueEl);

        document.body.appendChild(this.containerEl);
        this.valueEl.innerHTML = '['+this.value + ']⠀';
    }
    ChangeValue(b) {
        if(this.value<= 1 && b<=0){}else if (this.value>= 10 && b>=0){}
        else{
            Sound.pause();
            if(b>=1)Sound.src = 'increase.mp3';
            if(b<=0)Sound.src = 'decrease.mp3';
            Sound.play();
        this.value += b;
        this.valueEl.innerHTML = '['+this.value + ']⠀';
        PlayerLevel.ChangeLevel(b);
        }
    }

}

class Level{
    constructor(){
        this.m = document.createElement("p");
        this.value = 0;
        document.body.appendChild(this.m);
        this.ChangeLevel(0);
    }
    ChangeLevel(a){
        this.value+=a;
        this.m.innerHTML="Уровень: ["+this.value + ']';
    }
}

Sound = new Audio();

var PlayerLevel = new Level();

Characters = {};

Characters.Strength = new Char({
    name: 'Сила',
    icon: '🏋️',
});

Characters.Perception = new Char({
    name: 'Восприятие',
    icon: '👁',
});

Characters.Endurance = new Char({
    name: 'Выносливость',
    icon: '🏃',
});

Characters.Charisma = new Char({
    name: 'Харизма',
    icon: '🗣',
});

Characters.Intelligence = new Char({
    name: 'Интеллект',
    icon: '👨‍🎓',
});

Characters.Agility = new Char({
    name: 'Ловкость',
    icon: '🤸‍♂️',
});

Characters.Luck = new Char({
    name: 'Удача',
    icon: '🍀',
});