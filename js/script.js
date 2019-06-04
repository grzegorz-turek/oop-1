'use strict';
(function(){

    function Phone(brand, price, color, screensize, memory) {
        this.brand = brand;
        this.price = price;
        this.color = color;
        this.screensize = screensize;
        this.memory = memory;
    }

    Phone.prototype.printInfo = function() {
        console.log('The phone brand is ' + this.brand + ', its color is ' + this.color + ', its screensize is ' + this.screensize + '\', it\'s got internal RAM of ' + this.memory + 'GB and it is valued at ' + this.price + ' PLN.');
    };

    Phone.prototype.display = function() {
        document.getElementById('output').innerHTML += 'The phone brand is ' + this.brand + ', its color is ' + this.color + ', its screensize is ' + this.screensize + '\', it\'s got internal RAM of ' + this.memory + 'GB and it is valued at ' + this.price + ' PLN. <BR>';
    };

    var samsungGalaxyS6 = new Phone('Samsung Galaxy S6', 3999, 'black', '5,7', 128);
    var iPhone6s = new Phone('iPhone 6s', 5799, 'white', '6,0', 64);
    var onePlusOne = new Phone('OnePlus One', 2399, 'blue', '6,2', 256);

    samsungGalaxyS6.printInfo();
    iPhone6s.printInfo();
    onePlusOne.printInfo();

    samsungGalaxyS6.display();
    iPhone6s.display();
    onePlusOne.display();

})();