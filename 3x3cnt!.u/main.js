let clicks = 1
function one() {clicks = '1'; return clicks;}
function two() {if (clicks === 2 || clicks === 11 || clicks === 12 || clicks === 13) {clicks = ++clicks}else{clicks = 1}; return clicks;}
function three() {if (clicks === 17 || clicks === 18 || clicks === 19) {if (clicks === 20) {console.log('passcode accepted')}else{++clicks}}else{clicks = 1}; return clicks;}
function four() {clicks = '1'; return clicks;}
function five() {clicks = '1'; return clicks;}
function six() {if (clicks === 14|| clicks === 15 || clicks === 16) {clicks = ++clicks}else{clicks=1}; return clicks;}
function seven() {if (clicks === 1|| clicks === 3|| clicks === 4|| clicks === 5|| clicks === 6|| clicks === 7|| clicks === 8|| clicks === 9|| clicks === 10) {clicks = ++clicks}else{clicks = 1}; return clicks;}
function eight() {clicks = '1'; return clicks;}
function nine() {clicks = '1'; return clicks;}
function zero() {clicks = '1'; return clicks}
