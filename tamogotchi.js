const tamogotchi = {
    name: 'egg',
    meal: 1,
    energy: 2,
    mood: 4,
    getStatus: function() {
      let meal = `Я не голоден (${this.meal})`
      let energy = `Я не хочу спать (${this.energy})`
      let mood = `Мне не скучно (${this.mood})`;

      if (this.meal < 3) {
        meal = `Я голоден (${this.meal})`
      }   
      if (this.energy < 3) {
        energy = `Я хочу спать (${this.energy})`
      }
      if (this.mood < 3) {
        mood = `Мне скучно (${this.mood})`
      }
      if (this.meal < 1 || this.energy < 1 || this.mood < 1) {
        console.log(this.name + ' умер.')
        return
      }

      console.log(`Имя: ${this.name}, Еда: ${meal}, Энергия: ${energy}, Настроение: ${mood}.`)},
    
    setName: function(name) {this.name = name},
    toEat: function(){if (this.meal < 5) {this.meal++; this.mood--}},
    toSleep: function(){if (this.energy < 5) {this.energy++; this.meal--}},
    toPlay: function(){if (this.mood < 5) {this.mood++; this.energy--}},
    
    hesoyam: function(){
      this.energy = 4
      this.meal = 4
      this.mood = 4
    }
  }
