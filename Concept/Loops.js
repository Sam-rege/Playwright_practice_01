const testCases = ["Login Test", "Signup Test", "Logout Test"];

// for loop
for (let i = 0; i < testCases.length; i++) {
    console.log(`Running: ${testCases[i]}`);
}

// forEach (arrays ke liye zyada clean tarika)
testCases.forEach((test) => {
    console.log(`Executing: ${test}`);
});