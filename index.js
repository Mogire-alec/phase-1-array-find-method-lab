// code your solution here
function superbowlWin(record) {
    const win = record.find(game => game.result === "W");
    return win ? win.year : undefined;
}

// Example usage:
console.log(superbowlWin(2015)); // Outputs: 2015
console.log(superbowlWin(2000)); // Outputs: undefined
