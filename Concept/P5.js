// Normal function
function login(username, password) {
    console.log("Logging in with " + username);
}

// Arrow function (modern QA automation me zyada use hoti hai)
const clickButton = (buttonName) => {
    console.log(`Clicking on ${buttonName}`);
};

login("admin", "1234");
clickButton("Submit");