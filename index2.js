/*********************************************************SET UP JS***********************************************/

var gameName, upperCaseLetter, firstLetter, restOfName, capGameName, gameRace, gameGender, gameClass, gameNature, gen, val;

var player0 = ['x', 'x', 'x', 'x', 'x', 'x', 0, 0, 'x', 'x', 0];
var player1 = [];
let shopPurchaseTrue = 0;

var Element = {
    int: function() {
        localStorage.clear();
    },
    signUp: function() {
        location.replace('sign-up.html');
    },
    setPlayer0: function() {
        console.log(player0);
        window.localStorage.setItem('player0', JSON.stringify(player0));
    },
    retrievePlayer0: function() {
        player0 = JSON.parse(window.localStorage.getItem('player0'));
        console.log(player0);
    },
    playerInfo: function() {
        Element.setPlayer0();
        location.replace('playerinfo.html');
    },
    scene1: function() {
        location.replace('tavern1.html');
    },
    shop1: function() {
        window.localStorage.setItem('player0', JSON.stringify(player0));
        location.replace('shop1.html');
    },
    setGenderMale: function() {
        gameGender = 'Male';
        console.log(gameGender);
        player0[2] = gameGender;
    },
    setGenderFemale: function() {
        gameGender = 'Female';
        console.log(gameGender);
        player0[2] = gameGender;
    },
    capalitize: function(el, pos) {
        if (el.charCodeAt(0) >= 97 && el.charCodeAt(0) <= 122) {
            firstLetter = el.slice(0, 1);
            restOfName = el.slice(1);

            upperCaseLetter = firstLetter.charAt(0).toUpperCase();
            capGameName = upperCaseLetter.concat(restOfName);

            console.log(capGameName);
            player0[pos] = capGameName;
        } else {
            player0[pos] = el;
        }
    },
    cashAmountBox: document.getElementById('playerInfoCashAmount'),
    startNaturePts: function(el) {
        if (el === 'Good') {
            player0[10] = 100;
        } else if (el === 'Evil') {
            player0[10] = -100;
        } else if (el === 'Neutral') {
            player0[10] = 0;
        }


    },
    populateMoney1: function(el) {
        if (player0[9] === 'Good' || player0[9] === 'good') {
            if (el === 'Warrior' || el === 'warrior') {
                this.cashAmountBox.textContent = '$650';
                player0[4] = 650;
            } else if (el === 'Mage' || el === 'mage') {
                this.cashAmountBox.textContent = '$400';
                player0[4] = 400;
            } else if (el === 'Ranger' || el === 'ranger') {
                this.cashAmountBox.textContent = '$300';
                player0[4] = 300;
            } else if (el === 'Thief' || el === 'thief') {
                this.cashAmountBox.textContent = '$350';
                player0[4] = 350;
            } else {
                alert(`${el} is not a valid class. Please try again.`);
                location.replace('sign-up.html');
            }
        } else if (player0[9] === 'Evil' || player0[9] === 'evil') {
            if (el === 'Warrior' || el === 'warrior') {
                this.cashAmountBox.textContent = '$500';
                player0[4] = 500;
            } else if (el === 'Mage' || el === 'mage') {
                this.cashAmountBox.textContent = '$400';
                player0[4] = 400;
            } else if (el === 'Ranger' || el === 'ranger') {
                this.cashAmountBox.textContent = '$300';
                player0[4] = 300;
            } else if (el === 'Thief' || el === 'thief') {
                this.cashAmountBox.textContent = '$500';
                player0[4] = 500;
            } else {
                alert(`${el} is not a valid class. Please try again.`);
                location.replace('sign-up.html');
            }
        } else if (player0[9] === 'Neutral' || player0[9] === 'neutral') {
            if (el === 'Warrior' || el === 'warrior') {
                this.cashAmountBox.textContent = '$500';
                player0[4] = 500;
            } else if (el === 'Mage' || el === 'mage') {
                this.cashAmountBox.textContent = '$400';
                player0[4] = 400;
            } else if (el === 'Ranger' || el === 'ranger') {
                this.cashAmountBox.textContent = '$400';
                player0[4] = 400;
            } else if (el === 'Thief' || el === 'thief') {
                this.cashAmountBox.textContent = '$350';
                player0[4] = 350;
            } else {
                alert(`${el} is not a valid class. Please try again.`);
                location.replace('sign-up.html');
            }
        }
    },
    clearCanvas: function() {
        ctx.fillStyle = "#e8e8e8";
        ctx.fillRect(0, 0, 800, 200);
        ctx.fillStyle = "#000000";
        ctx.font = '20px Arial';
    },
    updatePurchase: function() {
        console.log(shopPurchaseTrue);
        window.localStorage.setItem('shopPurchaseTrue', JSON.stringify(shopPurchaseTrue));
    },
    getPurchaseStatus: function() {
        var shopPurchaseTrue = JSON.parse(window.localStorage.getItem('shopPurchaseTrue'));
    },
    removeChildren: function(el) {
        while (el.hasChildNodes()) {
            el.removeChild(el.firstChild);
        };
    },
    addChildren: function(el, el2) {
        document.querySelector(el).insertAdjacentHTML('afterBegin', el2);
    },
    oneSec: function(el) {
        setTimeout(function() {
            el;
        }, 1000);
    },
    twoSec: function(el) {
        setTimeout(function() {
            el;
        }, 2000);
    }

}

/*********************************************************INDEX JS***********************************************/


if (location.href.includes('index')) {
    Element.int();
}

/*********************************************************SIGN-UP JS***********************************************/
if (location.href.includes('sign-up')) {

    //Inspired by Dr. Bryan Reagan's "Calculon" Lab from COM 340 - Saint Leo University
    gen = document.getElementsByClassName('genderBtn');
    for (let i = 0; i < gen.length; i++) {
        gen[i].addEventListener('click', function() {
            val = this.value;
            genderChoice(val);
        });
    }

    setUserName = function() {
        gameName = document.getElementById('userName').value;
        console.log(gameName);

        Element.capalitize(gameName, 0);
    };

    raceChoice = function() {
        gameRace = document.getElementById('raceChoice').value;
        console.log(gameRace);

        Element.capalitize(gameRace, 1);
    };

    genderChoice = function(val) {
        /*document.getElementById('male').addEventListener('click', Element.setGenderMale);
        document.getElementById('female').addEventListener('click', Element.setGenderFemale);*/
        console.log(val);
        player0[2] = val;
    };

    classChoice = function() {
        gameClass = document.getElementById('classChoice').value;
        console.log(gameClass);

        Element.capalitize(gameClass, 3);
    };

    naturePage = function() {
        Element.setPlayer0();
        location.replace('naturechoice.html');
    }

    playerInfoPage = function() {
        Element.setPlayer0();
        location.replace('playerinfo1.html');
    };
};

/*********************************************************NATURE PAGE JS***********************************************/
if (location.href.includes('naturechoice')) {

    Element.retrievePlayer0()
    console.log(player0);

    natureChoice = function() {
        gameNature = document.getElementById('natureChoice').value;
        console.log(gameNature);

        Element.capalitize(gameNature, 9);
        Element.setPlayer0();
        location.replace('playerinfo1.html');
    }



}

/*********************************************************PLAYER INFO JS***********************************************/

if (location.href.includes('playerinfo1')) {
    Element.retrievePlayer0();
    //var player0 = JSON.parse(window.localStorage.getItem('player0'));
    console.log(player0);

    Element.getPurchaseStatus();

    document.getElementById('playerInfoUserName').textContent = player0[0];
    document.getElementById('playerInfoRaceSelection').textContent = player0[1];
    document.getElementById('playerInfoGenderSelection').textContent = player0[2];
    document.getElementById('playerInfoClassSelection').textContent = player0[3];
    document.getElementById('playerInfoNature').textContent = player0[9];

    Element.populateMoney1(player0[3]);
    Element.startNaturePts(player0[9]);
};

/*********************************************************SHOP JS***********************************************/

if (location.href.includes('shop1')) {
    Element.retrievePlayer0();
    console.log(player0);

    var c = document.querySelector('.canvas');
    var ctx = c.getContext("2d");

    x = 5;
    y = 25;
    z = 200;

    shopKeeper1 = function() {
        Element.clearCanvas();
        ctx.fillText(`Shop Keeper: Well hello there! Welcome to my shop!`, x, y, z);
        ctx.fillText(`Shop Keeper: Take a look around and see if there's anything you're interested in!`, x, y + 30, z + 70);
    };

    shopKeeperSword1 = function() {
        Element.clearCanvas();
        ctx.fillText(`${player0[0]}: I'd like the bronze sword.`, x, y, z - 30);
        ctx.fillText(`Shop Keeper: You know that's only userful for warriors, right?`, x, y + 30, z + 40);

        shopKeeperSword1 = 1;
    };

    shopKeeperWand1 = function() {
        Element.clearCanvas();
        ctx.fillText(player0[0] + ': I\'d like the twig wand.', x, y, z - 30);
        ctx.fillText('Shop Keeper: You know that\'s only useful for mages, right?', x, y + 30, z + 40)

        shopKeeperWand1 = 1;
    };

    shopKeeperBow1 = function() {
        Element.clearCanvas();
        ctx.fillText(player0[0] + ': I\'d like the wooden short bow.', x, y, z - 30);
        ctx.fillText('Shop Keeper: You know that\'s only useful for rangers, right?', x, y + 30, z + 40);

        shopKeeperBow1 = 1;
    };


    shopKeeperKnife1 = function() {
        Element.clearCanvas();
        ctx.fillText(player0[0] + ': I\'d like the bronze pig poker.', x, y, z - 30);
        ctx.fillText('Shop Keeper: You know that\'s not particularily useful for anyone, right?', x, y + 30, z + 40)

        shopKeeperKnife1 = 1;
    };

    shopKeeperHealth = function() {
        Element.clearCanvas();
        ctx.fillText(`${player0[0]}: I'll take a health potion.`, x, y, z - 30);
        ctx.fillText(`Shop Keeper: Good choice. That'll be $20`, x, y + 30, z + 40);

        shopKeeperHealth = 1;
    };

    shopKeeperMana = function() {
        Element.clearCanvas();
        ctx.fillText(`${player0[0]}: I'll take a mana potion.`, x, y, z - 30);
        ctx.fillText(`Shop Keeper: Good choice. That'll be $20`, x, y + 30, z + 40);

        shopKeeperMana = 1;
    };

    shopPurchase = function() {
        Element.clearCanvas();
        if (player0[4] > 0) {
            if (shopKeeperHealth === 1) {
                ctx.fillText(`Shop Keeper: Thank you for your business!`, x, y, z - 50);

                newTotal = player0[4] -= 20;
                player0[6] = player0[6] + 1;
            } else if (shopKeeperMana === 1) {
                ctx.fillText(`Shop Keeper: Thank you for your business!`, x, y, z - 50);

                newTotal = player0[4] -= 20;
                player0[7] = player0[7] + 1;
            } else {
                ctx.fillText(`${player0[0]}: Thanks for the head's up, but I'd like to purchase it anyways`, x, y, z + 80);
                ctx.fillText('Shop Keeper: As you wish', x, y + 30, z - 80);
            }

            if (player0[5] === 'x') {
                if (shopKeeperSword1 === 1 && player0[4] >= 200) {
                    ctx.fillText('Shop Keeper: That\'ll be $200.', x, y + 60, z - 80);
                    newTotal = player0[4] -= 200;
                    player0[5] = 'Bronze Sword';
                    ctx.fillText('Shop Keeper: Thank you for your business!', x, y + 90, z - 40);
                } else if (shopKeeperWand1 === 1 && player0[4] >= 250) {
                    ctx.fillText('Shop Keeper: That\'ll be $250.', x, y + 60, z - 80);
                    newTotal = player0[4] -= 250;
                    player0[5] = 'Twig Wand';
                    ctx.fillText('Shop Keeper: Thank you for your business!', x, y + 90, z - 40);
                } else if (shopKeeperBow1 === 1 && player0[4] >= 100) {
                    ctx.fillText('Shop Keeper: That\'ll be $100.', x, y + 60, z - 80);
                    newTotal = player0[4] -= 100;
                    player0[5] = 'Wooden Short Bow';
                    ctx.fillText('Shop Keeper: Thank you for your business!', x, y + 90, z - 40);
                } else if (shopKeeperKnife1 === 1 && player0[4] >= 50) {
                    ctx.fillText('Shop Keeper: I\'ll give you a discount on that one, it\'ll be $50.', x, y + 60, z);
                    newTotal = player0[4] -= 50;
                    player0[5] = 'Bronze Pig Poker';
                    ctx.fillText('Shop Keeper: Thank you for your business!', x, y + 90, z - 40);
                }
            } else if (player0[5] !== 'x') {
                if (shopKeeperSword1 === 1 && player0[4] >= 200) {
                    ctx.fillText('Shop Keeper: That\'ll be $200.', x, y + 60, z - 80);
                    newTotal = player0[4] -= 200;
                    player0[8] = 'Bronze Sword';
                    ctx.fillText('Shop Keeper: Thank you for your business!', x, y + 90, z - 40);
                } else if (shopKeeperWand1 === 1 && player0[4] >= 250) {
                    ctx.fillText('Shop Keeper: That\'ll be $250.', x, y + 60, z - 80);
                    newTotal = player0[4] -= 250;
                    player0[8] = 'Twig Wand';
                    ctx.fillText('Shop Keeper: Thank you for your business!', x, y + 90, z - 40);
                } else if (shopKeeperBow1 === 1 && player0[4] >= 100) {
                    ctx.fillText('Shop Keeper: That\'ll be $100.', x, y + 60, z - 80);
                    newTotal = player0[4] -= 100;
                    player0[8] = 'Wooden Short Bow';
                    ctx.fillText('Shop Keeper: Thank you for your business!', x, y + 90, z - 40);
                } else if (shopKeeperKnife1 === 1 && player0[4] >= 50) {
                    ctx.fillText('Shop Keeper: I\'ll give you a discount on that one, it\'ll be $50.', x, y + 60, z);
                    newTotal = player0[4] -= 50;
                    player0[8] = 'Bronze Pig Poker';
                    ctx.fillText('Shop Keeper: Thank you for your business!', x, y + 90, z - 40);
                };
            };

            //Maybe add the value as part of the player0 array...
            shopPurchaseTrue = 1;
            Element.updatePurchase();

            console.log(player0);
            Element.setPlayer0();
        } else if (player0[4] <= 0) {
            Element.clearCanvas();

            ctx.fillText(`Shop Keeper: Sorry mate, your coin purse is looking a little light...`, x, y, z + 80);

            if (player0[9] === 'Evil') {
                Element.oneSec(ctx.fillText(`${player0[0]}: What about it? I'm thinking you should give it to me anyways.`, x, y + 30, z + 80));
                Element.twoSec(ctx.fillText(`Shop Keeper: Excuse me? I think not!`, x, y + 60, z + 20));
                Element.twoSec(ctx.fillText(`I want you to get out of my store and never come back!`, x, y + 90, z + 80));
            } else if (player0[9] === 'Good') {
                Element.oneSec(ctx.fillText(`${player0[0]}: Oh crap! You're spot on, I've only got ` + '$' + `${player0[4]}. Sorry about that!`, x, y + 30, z + 80));
                Element.twoSec(ctx.fillText(`Shop Keeper: No worries mate. Come back later when you have a little more jingle.`, x, y + 60, z + 80));
            } else if (player0[9] === 'Neutral') {
                var nChoice1 = prompt("Would you like to be Good or Evil here?");
                switch (nChoice1) {
                    case 'Evil' || 'evil':
                        Element.oneSec(ctx.fillText(`${player0[0]}: What about it? I'm thinking you should give it to me anyways.`, x, y + 30, z + 80));
                        Element.twoSec(ctx.fillText(`Shop Keeper: Excuse me? I think not!`, x, y + 60, z + 20));
                        Element.twoSec(ctx.fillText(`I want you to get out of my store and never come back!`, x, y + 90, z + 80));
                        player0[10] += 5;
                        break;
                    case 'Good' || 'good':
                        Element.oneSec(ctx.fillText(`${player0[0]}: Oh crap! You're spot on, I've only got ` + '$' + `${player0[4]}. Sorry about that!`, x, y + 30, z + 80));
                        Element.twoSec(ctx.fillText(`Shop Keeper: No worries mate. Come back later when you have a little more jingle.`, x, y + 60, z + 80));
                        break;
                }

            }
        };
    };

    shopCancel = function() {
        Element.clearCanvas();
        ctx.fillText(player0[0] + ': Thanks for the info. I think I\'ll keep browsing.', x, y, z + 40);
        ctx.fillText('Shop Keeper: No problem. If you change your mind just say so.', x, y + 30, z);

        shopPurchaseTrue = 0;
        Element.updatePurchase();
    }

    shopRefresh = function() {
        location.reload();
    }

    backPlayerInfo = function() {
        Element.setPlayer0();
        Element.updatePurchase();
        location.replace('playerinfo2.html');
    }
};

/*********************************************************PLAYER INFO 2 JS***********************************************/

if (location.href.includes('playerinfo2')) {
    Element.retrievePlayer0();

    document.getElementById('playerInfoUserName').textContent = player0[0];
    document.getElementById('playerInfoRaceSelection').textContent = player0[1];
    document.getElementById('playerInfoGenderSelection').textContent = player0[2];
    document.getElementById('playerInfoClassSelection').textContent = player0[3];
    document.getElementById('playerInfoNature').textContent = player0[9];
    document.getElementById('playerInfoCashAmount').textContent = "$" + player0[4];

    Element.setPlayer0();

};

/*********************************************************TAVERN JS***********************************************/

if (location.href.includes('tavern1')) {
    Element.retrievePlayer0();
    console.log(player0);

    var c = document.querySelector('.tavernCanvas');
    var ctx = c.getContext("2d");

    x = 5;
    y = 25;
    z = 200;

    ctx.fillText(`Bar Keep: Hey there friend. How can I help you today?`, x, y - 10, z + 15);

    var html, html2, docSelector, classSelector, oak, elm, spruce;

    docSelector = document.querySelector(".tavernButtons");
    classSelector = '.tavernButtons';

    oak = `<div class="tavernButtons">
            <button onclick="Tavern.tavern1Btn4()" id="tavern1Btn1"> X </button>
            <button onclick="Tavern.tavern1Btn5()" id="tavern1Btn2"> X </button>
            <button onclick="Tavern.tavern1Btn6()" id="tavern1Btn3"> X </button>
            </div>`;

    elm = `<div class="tavernButtons">
            <button onclick="Tavern.tavern1Btn7()" id="tavern1Btn1"> X </button>
            <button onclick="Tavern.tavern1Btn8()" id="tavern1Btn2"> X </button>
            <button onclick="Tavern.tavern1Btn9()" id="tavern1Btn3"> X </button>
            </div>`;

    spruce = `<div class="tavernButtons">
            <button onclick="Tavern.tavern1Btn10()" id="tavern1Btn1"> X </button>
            <button onclick="Tavern.tavern1Btn11()" id="tavern1Btn2"> X </button>
            <button onclick="Tavern.tavern1Btn12()" id="tavern1Btn3"> X </button>
            </div>`;

    var Tavern = {
        tavern1Btn1: function() {
            ctx.fillText(`${player0[0]}: I'm looking for work - know anyone who's hiring?`, x, y + 10, z + 15);
            //Bar Keep Line
            setTimeout(function() {
                ctx.fillText('Bar Keep: ', x, y + 30, z + 60);
            }, 1000);
            //CHANGE BUTTON TEXT AND FUNCTION
            Element.removeChildren(docSelector);
            setTimeout(function() {
                Element.addChildren(classSelector, oak);
            }, 1500);
            //New Options - Player Line

            //Bar Keep Line
        },
        tavern1Btn2: function() {
            ctx.fillText(`${player0[0]}: I'm looking for a good drink - can you tell me where to find one?`, x, y + 10, z + 40);
            //Bar Keep Line
            setTimeout(function() {
                ctx.fillText('Bar Keep: A comedian! That\'s just great. Take a seat, I\'ll be right with you.', x, y + 30, z + 60);
            }, 1000);
            //CHANGE BUTTON TEXT AND FUNCTION
            Element.removeChildren(docSelector);
            setTimeout(function() {
                Element.addChildren(classSelector, oak);
            }, 1500);
            //New Options - Player Line

            //Bar Keep Line
        },
        tavern1Btn3: function() {
            //Player Line
            ctx.fillText(`${player0[0]}: `, x, y + 10, z + 40);
            //Bar Keep Line
            setTimeout(function() {
                ctx.fillText('Bar Keep: ', x, y + 30, z + 60);
            }, 1000);
            //CHANGE BUTTON TEXT AND FUNCTION
            Element.removeChildren(docSelector);
            setTimeout(function() {
                Element.addChildren(classSelector, oak);
            }, 1500);
            //New Options - Player Line

            //Bar Keep Line
        },
        tavern1Btn4: function() {
            Element.clearCanvas();
            ctx.fillText(`${player0[0]}: `, x, y + 10, z + 15);
            //Bar Keep Line
            setTimeout(function() {
                ctx.fillText('Bar Keep: ', x, y + 30, z + 60);
            }, 1000);
            //Player Line

            //Bar Keep Line
        },
        tavern1Btn5: function() {
            Element.clearCanvas();
            ctx.fillText(`${player0[0]}: `, x, y + 10, z + 15);
            //Bar Keep Line
            setTimeout(function() {
                ctx.fillText('Bar Keep: ', x, y + 30, z + 60);
            }, 1000);
            //CHANGE BUTTON TEXT AND FUNCTION
            Element.removeChildren(docSelector);
            setTimeout(function() {
                Element.addChildren(classSelector, elm);
            }, 1500);
            //Player Line

            //Bar Keep Line
        },
        tavern1Btn6: function() {
            Element.clearCanvas();
            ctx.fillText(`${player0[0]}: `, x, y + 10, z + 15);
            //Bar Keep Line
            setTimeout(function() {
                ctx.fillText('Bar Keep: ', x, y + 30, z + 60);
            }, 1000);
            //CHANGE BUTTON TEXT AND FUNCTION
            Element.removeChildren(docSelector);
            setTimeout(function() {
                Element.addChildren(classSelector, elm);
            }, 1500);
            //Player Line

            //Bar Keep Line
        },
        tavern1Btn7: function() {
            Element.clearCanvas();
            ctx.fillText(`${player0[0]}: `, x, y + 10, z + 15);
            //Bar Keep Line
            setTimeout(function() {
                ctx.fillText('Bar Keep: ', x, y + 30, z + 60);
            }, 1000);
            //CHANGE BUTTON TEXT AND FUNCTION
            Element.removeChildren(docSelector);
            setTimeout(function() {
                Element.addChildren(classSelector, elm);
            }, 1500);
            //Player Line

            //Bar Keep Line
        },
        tavern1Btn8: function() {
            Element.clearCanvas();
            ctx.fillText(`${player0[0]}: `, x, y + 10, z + 15);
            //Bar Keep Line
            setTimeout(function() {
                ctx.fillText('Bar Keep: ', x, y + 30, z + 60);
            }, 1000);
            //Player Line

            //Bar Keep Line
        },
        tavern1Btn9: function() {
            Element.clearCanvas();
            ctx.fillText(`${player0[0]}: `, x, y + 10, z + 15);
            //Bar Keep Line
            setTimeout(function() {
                ctx.fillText('Bar Keep: ', x, y + 30, z + 60);
            }, 1000);
            //Player Line

            //Bar Keep Line
        }
    };
};