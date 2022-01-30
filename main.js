let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/change.png') {
      myImage.setAttribute('src','images/image1.png');
    } else {
      myImage.setAttribute('src','images/change.png');
    }
}

function setUserName() {
    let myName = prompt('Please enter your name');
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Winter is cool, ' + myName;
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}