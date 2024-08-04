document.getElementById("rollPhysical").addEventListener("click", function() {
    const physicalAttack = Math.floor(Math.random() * 20) + 1; // D&D style roll (1-20)
    const manaAttack = Math.floor(Math.random() * 20) + 1; // D&D style roll (1-20)

    let outcome = "";
    if (physicalAttack > manaAttack) {
        outcome = "Your physical strike lands a critical hit!";
    } else {
        outcome = "Your attack is absorbed by the enemy's magical shield!";
    }

    alert("Physical Attack Roll: " + physicalAttack + "\nMana Attack Roll: " + manaAttack + "\nBattle Outcome: " + outcome);
});

document.getElementById("rollMagic").addEventListener("click", function() {
    const magicDamage = Math.floor(Math.random() * 12) + 1; // D&D style damage roll (1-12)
    const manaAttack = Math.floor(Math.random() * 20) + 1; // D&D style roll (1-20)

    let outcome = "";
    if (magicDamage > manaAttack) {
        outcome = "Your spell pierces through the enemy's defenses, dealing powerful damage!";
    } else {
        outcome = "The enemy counters your magic with a devastating spell of their own!";
    }

    alert("Magic Damage Roll: " + magicDamage + "\nMana Attack Roll: " + manaAttack + "\nSpell Outcome: " + outcome);
});
