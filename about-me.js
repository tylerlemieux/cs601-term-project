var unshownInterests = ['Programming', 'Board Games', 'Video Games', 'Coffee', 'Star Wars'];

function onPageLoaded() {
    var message = document.getElementById('no-more-interests');
    message.hidden = true;
    document.getElementById("show-next-interest").onclick = showNextInterest;

}

var showNextInterest = function() {
    if(unshownInterests.length > 0) {
        var interestsList = document.getElementById('interests');

        // Splice to get the next interest
        var nextInterest = unshownInterests.splice(0, 1)[0];

        interestsList.innerHTML = interestsList.innerHTML + '<li>' + nextInterest + '</li>';
    } else {
        showNoMoreInterestsMessage();
    }
}

var showNoMoreInterestsMessage = function() {
    var message = document.getElementById('no-more-interests');
    message.hidden = false;

    setTimeout((function() {
        message.hidden = true;
    }), 5000)
}

window.addEventListener('load', onPageLoaded);
