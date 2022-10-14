const isValidPasword = (str) => {
  const findNumsReg = /[\d|,|.|e|E|\+]+/g;
  const arrFromStr = str.split(" ");
  const symbol = arrFromStr[0];
  const numOfCharacters = str.match(findNumsReg);
  const password = arrFromStr[2].split("").filter((i) => i.toLowerCase() === symbol);
  if (
    password.length >= numOfCharacters[0] &&
    numOfCharacters[1] >= password.length
  ) {
    console.log("password is valid");
  } else console.log("password is NOT valid!!!");
};

isValidPasword("a 1-6: AAAAAabcdj");
isValidPasword("z 2-4: asfalseiruqwo");
isValidPasword("b 3-6: bhhkkbbjjjb");
