let baseUrl = "ivanna";
let url = "ivanna.kovaliv1215@gmail.com";
let result = URL.canParse(url, baseUrl);

// console.log(`URL.canParse("${url}"): ${result}`);
// console.log(protect_email("robin_singh@example.com"));
// ("robin...@example.com");

function hideEmail(string) {
  let firstPart = "";
  for (let i = 0; i < 3; i++) {
    firstPart += string[i];
  }
  let arr = string.split("@");
  arr.splice(0, 1);
  let secondPart = arr.join("");

  let hideString = firstPart + "*" + "*" + "@" + secondPart;
  console.log(hideString);
}

// hideEmail("ivanna.kovaliv1215@gmail.com");

function validMail(mail) {
  return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(mail);
}

function protectEmail(string) {
  if (validMail(string)) {
    let firstPart = "";
    let secondPart = "";
    let hidePart = "";

    for (let i = 0; i < string.length; i++) {
      if (string[i] === "@") {
        break;
      }
      firstPart += string[i];
    }
    let arr = string.split("@");
    arr.splice(0, 1);
    secondPart = arr.join("");

    const firstPartLength = firstPart.length;

    if (firstPartLength <= 3) {
      hidePart = string[0];
    }
    if (firstPartLength > 3) {
      hidePart = string[0] + string[1] + string[2];
    }

    let result = hidePart + "*" + "*" + `@${secondPart}`;

    return result;
  } else {
    return "This email is not valid";
  }
}

console.log(protectEmail("ivanna.kovaliv1215@gmail.com"));

console.log(protectEmail("iva@gmail.com"));

console.log(protectEmail("iva"));
