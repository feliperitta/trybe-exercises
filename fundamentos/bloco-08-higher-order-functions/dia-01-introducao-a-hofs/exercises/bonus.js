const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const random = (number) => Math.round(Math.random() * number);

const returnDragonDamage = () => dragon.strength + random(15);

const warriorDamage = () => {
  const min = warrior.strength;
  const max = warrior.strength * warrior.weaponDmg;
  return Math.round(Math.random() * (max - min) + min);
  
}

const mageDamageMana = () => {
  const min = mage.intelligence;
  const max = mage.intelligence * 2;  
  const mageDamage = Math.round(Math.random() * (max - min) + min);
  const mageMana = () => {
    mage.mana -= 15;
    return mage.mana < 15 ? 'Não possui mana suficiente.' : mage.mana;
  };
  return {
    damage: mageDamage,
    mana: mageMana(),
  };
}

const giveDragonDamage = (damage) => {
  dragon.healthPoints -= damage;
}

const gameActions = {
  gameReport: () => {
    console.clear();
    console.log('---\nWarrior Damage: ' + warrior.damage +
    '\nWarrior Life Points: ' + warrior.healthPoints + 
    '\n---\nMage Damage: ' + mage.damage +
    '\nMage Life Points: ' + mage.healthPoints + 
    '\nMage Mana: ' + mage.mana + 
    '\n---\nDragon Damage: ' + dragon.damage + 
    '\nDragon Life Points: ' + dragon.healthPoints + 
    '\n---');
  },
  warriorAttack: () => {
    const turnDamage = warriorDamage();
    giveDragonDamage(turnDamage);
    warrior.damage = turnDamage;
  },
  mageAttack: () => {
    const turnMageDamage = mageDamageMana().damage;
    const turnMageMana = mageDamageMana().mana;
    giveDragonDamage(turnMageDamage);
    mage.damage = turnMageDamage;
    mage.mana -= turnMageMana;
  },
  dragonAttack: () => {
    const dragonDamage = returnDragonDamage();
    mage.healthPoints -= dragonDamage; 
    warrior.healthPoints -= dragonDamage;
    dragon.damage = dragonDamage;
  },
};

const startGame = () => {
  const obj = {mage, warrior, dragon}
  for(let char in obj){
    obj[char].damage = 0;
  }
}

startGame();

gameActions.warriorAttack();
gameActions.mageAttack();
gameActions.dragonAttack();
gameActions.gameReport();
