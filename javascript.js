document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#submit').addEventListener('click', function() {
        let text = document.querySelector('#exampleInputEmail1').value;
        document.querySelector('#response').innerHTML = text + " will receive an email within 1-3 business days.";
    })
});