// Définition de l’objet Person via un constructeur
function Person(nick, age, sex, parent, work, friends) {
    this.nick = nick;
    this.age = age;
    this.sex = sex;
    this.parent = parent; 
    this.work = work;
    this.friends = friends;

    this.addFriend = function(nick, age, sex, parent, work, friends)
    {
        this.friends.push(new Person(nick, age, sex, parent, work, friends));  
    };
};
// On crée des variables qui vont contenir une instance de l’objet Person :
let seb = new Person('Sébastien', 25,'m','aîné','développeur',[]);
let lau = new Person('Laurence', 19 ,'f','soeur','Sous-officier',[]);

alert(seb.nick + ' et ' + lau.nick); // Affiche : « Sébastien » 
alert(lau.nick); // Affiche : « Laurence »

seb.nick = 'Bastien';
alert(seb.nick);



seb.friends.push(new Person('Johnatan','19','m','aîné','Développeur',[]));
seb.friends.push(new Person('Eric','20','m','aîné','Développeur',[]));
seb.friends.push(new Person('Thomas','20','m','aîné','Développeur',[]));
alert(seb.friends[2].nick);

seb.addFriend('William','19','m','aîné','Développeur',[]);
alert(seb.friends[3].nick + ' a ' + seb.friends[3].age +' ans.');


let fruitArray = [];
fruitArray.push('Orange');
alert(fruitArray[0]);

// On définit un objet Chien
function Chien(name, color, age, size){
    this.name = name;
    this.color = color;
    this.age = age;
    this.size = size;

    // this.AddSize = function(size){
    //     this.size.push(size);
    // };
}

Chien.prototype.AddSize = function(size){
        this.size.push(size);
    };

// On crée des variables qui vont contenir une instance de l’objet Chien :

let labrador = new Chien('Wil','sable',3,[]);
let patou = new Chien('Ben','blanc',2,[]);

alert(labrador.name + ' et ' + patou.name);

labrador.AddSize('15'); //première visite
labrador.AddSize('17'); //deuxième visite
labrador.AddSize('18'); //Troisième visite

labrador.size[0] = '14';
labrador.age = '4';
alert(labrador.name + ' meure ' + labrador.size[0] + ' cm.'); // Affiche 14