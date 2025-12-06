document.getElementById('voteButton').addEventListener('click', function() {
    // BUG: Not checking if a fruit is selected
    var selectedFruit = document.querySelector('input[name="fruit"]:checked');
    if (selectedFruit) {
        // BUG: Incorrectly setting innerHTML which can lead to XSS
        document.getElementById('votedFruit').innerHTML = selectedFruit.value;
        document.getElementById('result').style.display = 'block';
    } else {
        alert('Please select a fruit to vote.');
    }
});
// BUG: No reset functionality to clear the selection
// TODO: Add reset button functionality.