// Problem 1: Let’s play a mind game

function mindGame(num) {
  return (num * 3 + 10) / 2 - 5;
}

// Problem 2: Finding even or odd

function evenOdd(str) {
    if (str.length % 2 === 0) {
        return 'even';
    } else {
        return 'odd';
    }
}


// Problem 3: Is Less or Greater than seven

function isLGSeven(num) {
    let difference = num - 7;
    if (Math.abs(difference) < 7) {
        return difference;
    } else {
        return num * 2;
    }
}


// Problem 4: Finding Bad data

function findingBadData(array) {
    let age = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            age++;
        }
    }
    return age;
}


// Problem 5: Convert your gems into diamond

function gemsToDiamond(gem1, gem2, gem3) {
    let totalDiamond = gem1 * 21 + gem2 * 32 + gem3 * 43;
    if (totalDiamond > 1000*2 ) {
        return totalDiamond - 2000;
    }
    return totalDiamond; "total diamond is"
}
