function step1() { method_free.click() }

function step2() {
let P = new Array(4);
let V = new Array(4);

P[0] = Number(document.getElementsByTagName('td')[1].getElementsByTagName('div')[0].getElementsByTagName('span')[0].style["paddingLeft"].replace(/\D/g,''))

V[0] = document.getElementsByTagName('td')[1].getElementsByTagName('div')[0].getElementsByTagName('span')[0].textContent

P[1] = Number(document.getElementsByTagName('td')[1].getElementsByTagName('div')[0].getElementsByTagName('span')[1].style["paddingLeft"].replace(/\D/g,''))

V[1] = document.getElementsByTagName('td')[1].getElementsByTagName('div')[0].getElementsByTagName('span')[1].textContent

P[2] = Number(document.getElementsByTagName('td')[1].getElementsByTagName('div')[0].getElementsByTagName('span')[2].style["paddingLeft"].replace(/\D/g,''))

V[2] = document.getElementsByTagName('td')[1].getElementsByTagName('div')[0].getElementsByTagName('span')[2].textContent

P[3] = Number(document.getElementsByTagName('td')[1].getElementsByTagName('div')[0].getElementsByTagName('span')[3].style["paddingLeft"].replace(/\D/g,''))

V[3] = document.getElementsByTagName('td')[1].getElementsByTagName('div')[0].getElementsByTagName('span')[3].textContent

var T = 0

for (let r = 0; r < 5 ; r++) {
	for (let i = 3; i >= 0; i--) {
		if(P[i]<P[i-1]) {
			T = P[i]
			P[i] = P[i-1]
			P[i-1] = T
			T = V[i]
			V[i] = V[i-1]
			V[i-1] = T
		}
	}
}

Captcha = Number(V[0]+V[1]+V[2]+V[3])
document.getElementsByClassName('captcha_code')[0].value = Captcha

downloadbtn.click();
}

function step3() {
document.getElementsByClassName('btn btn-primary btn-block')[0].click()
}