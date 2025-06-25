const userInput = "console.log('danger')";
eval(userInput); // CodeQL will flag this as a security risk
