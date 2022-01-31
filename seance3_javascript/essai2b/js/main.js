class Person {
    constructor (nick, age, sex, parent, work, friends) {
        this.nick = nick;
        this.age = age;
        this.sex = sex;
        this.parent = parent; 
        this.work = work;
        this.friends = friends;     
    }
    
    // addFriend(nick, age, sex, parent, work, friends){
    //     this.friends.push(new Person(nick, age, sex, parent, work, friends));
    // }
};

let seb = new Person('Sébastien', 25,'m','aîné','développeur',[]);
let lau = new Person('Laurence', 21, 'f', 'soeur', 'Sous-officier', []);
alert (seb.nick);
seb.nick = 'Bastien'; // On change le prénom 
seb.age = 23;  // On change l’âge

alert(seb.nick + ' a ' + seb.age + ' ans'); // Affiche : « Bastien a 23 ans »

// seb.addFriend('William', 19, 'm', 'aîné', 'Développeur',[]);
// seb.addFriend('Johnatan', 19, 'm', 'aîné', 'Développeur',[]);
// seb.addFriend('Thomas', 19, 'm', 'aîné', 'Développeur',[]);

seb.friends.push(new Person('William', 19, 'm', 'aîné', 'Développeur',[]));
seb.friends.push(new Person('Johnatan', 19, 'm', 'aîné', 'Développeur',[]));
seb.friends.push(new Person('Thomas', 19, 'm', 'aîné', 'Développeur',[]));
alert(seb.friends[2].nick + ' a ' + seb.friends[2].age + ' ans.');
