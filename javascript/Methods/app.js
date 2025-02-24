const person = {
    first: 'Robert',
    last: 'Herjavec',
    fullName(){
        return `${this.first} ${this.last}`
    }
}

person.fullName();
person.last = "Plant";
person.fullName();



const cat = {
    name: 'Blue Steele',
    color: 'grey',
    breed: 'scottish fold',
    meow(){
        console.log("THIS IS : " , this);
        /*
        THIS IS : {
                   name: 'Blue Steele',
                   color: 'grey',
                   breed: 'scottish fold',
                   meow: f
                   }        
        */
        console.log(`${this.name} says MEOWWWW`);
    }
}

const meow2 = cat.meow;

