const output = document.querySelector('.output');
const formText = document.querySelector('.input');
const alphabet = "abcdefghijklmnopqrstuvwxyz";

// Locate all missing letters in array
function findMissing(string) {
    // Validate form has any characters in it
    if (formText.value === "") {
        output.innerHTML = '<p class="failed">Please enter a word or phrase to begin test</p>';

    } else {
        // Ignore all non ASCII characters
        string = string.replace(/[^\x00-\x7F]/g, "");
        // Convert String to lowercase(self explanitory)
        string = string.toLowerCase();
        var hits = [];
        for (var i = 0; i < alphabet.length; i++) {
            if (string.indexOf(alphabet[i]) == -1) {
                hits.push(alphabet[i]);
            }
        }
        // If statement determines if there are any missing letters, if not show PANGRAM
        if (hits.length) {
            output.innerHTML = '<p class="failed">Missing Letters:<br>' + ' ' + hits + '</p>';
        } else {
            console.log('nothing to show');
            output.innerHTML = '<p class="passed">PANGRAM</br> - Congrats! Your phrase is a Pangram!</p>';
        }
        // Return Missing Letters
        return hits
    }
}