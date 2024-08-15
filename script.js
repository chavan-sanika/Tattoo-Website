function sendToWhatsapp(){
	let number = "+919011450170";

	let name = document.getElementById('name').value;
	let email = document.getElementById('email').value;
	let message = document.getElementById('message').value;

	var url = "https://wa.me/" + number + "?text="
	+ "Hello my name is " +name+ "%0a"
	+ "This Is my mail id " +email+ "%0a"
	+ "My tattoo details are - " +message+ "%0a%0a";

	window.open(url, '_blank').focus();
}