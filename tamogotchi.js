const tamogotchi = {
    name: 'Димон',
    meal: 1,
    energy: 2,
    mood: 4,
    getStatus: function() {
      let meal = `${this.name} не голоден (${this.meal})`
      let energy = `${this.name} не хочучет спать (${this.energy})`
      let mood = `${this.name} не скучает (${this.mood})`;

      if (this.meal < 3) {
        meal = `${this.name} голоден (${this.meal})`
      }   
      if (this.energy < 3) {
        energy = `${this.name} хочет спать (${this.energy})`
      }
      if (this.mood < 3) {
        mood = `${this.name} умирает от скуки (${this.mood})`
      }
      if (this.meal < 1 || this.energy < 1 || this.mood < 1) {
        console.log(this.name + ' умер.')
        return
      }

      console.log(`Имя: ${this.name}, Еда: ${meal}, Энергия: ${energy}, Настроение: ${mood}.`)},
    
    setName: function(name) {this.name = name},
    toEat: function() {
      if (this.meal < 5) {
        this.meal++
      }this.mood--
    },
    
    toSleep: function(){
      if (this.energy < 5) {
        this.energy++; 
      }this.meal--
    },
    
    toPlay: function(){
      if (this.mood < 5) {
        this.mood++
      }this.energy--
    },
    
    hesoyam: function(){
      this.energy = 5
      this.meal = 5
      this.mood = 5
      console.log(this.name + ' познал счастье (все параметры равны 5)')
    }
  }

