
// 1. Show an alert box on click on a link.

    var link = document.getElementById('click Me');
     alert('click Me');

// 2. Display some Mobile images in browser. On click on an
// image Show the message in alert to user.
document.addEventListener('DOMContentLoaded', function() {
    var images = document.querySelectorAll('.mobile-image');

    images.forEach(function(image) {
        image.addEventListener('click', function() {
            alert('Image clicked: ' + image.alt);
        });
    });
});


// 3. Display 10 student records in table and each row should contain a delete
// button. If you click on a button to delete a record, entire row should be
// deleted.

// 4. Display an image in browser. Change the picture on mouseover and set the
// first picture on mouseout.

// 5. Show a counter in browser. Counter should increase on click on increase
// button and decrease on click on decrease button. And show updated counter
// value in browser.