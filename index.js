document.getElementById("jwtinput").value =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

document.getElementById("leninput").value = 10;

function parseJwt(token) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload);
}

function decode() {
    const input = document.getElementById("jwtinput").value;
    try {
        const token = parseJwt(input);
        const formattedToken = JSON.stringify(token, null, 4);
        document.getElementById("jwtoutput").innerHTML = formattedToken;
        document.getElementById("copyDecodedJwtBtn").removeAttribute("disabled");
    } catch {
        document.getElementById("jwtoutput").innerHTML = "Failed to decode JWT.";
    }
}

function copyDecodedJwt() {
    const decodedJwt = document.getElementById("jwtoutput").innerHTML;
    navigator.clipboard.writeText(decodedJwt);
}

function randomUuid() {
    const id = window.crypto.randomUUID();
    document.getElementById("uuidoutput").innerHTML = id;
    document.getElementById("copyUuidBtn").removeAttribute("disabled");
}

function copyUuid() {
    const id = document.getElementById("uuidoutput").innerHTML;
    navigator.clipboard.writeText(id);
}

function createId(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

function randomId() {
    const length = document.getElementById("leninput").value;
    const id = createId(length);
    document.getElementById("idoutput").innerHTML = id;
    document.getElementById("copyIdBtn").removeAttribute("disabled");
}

function copyId() {
    const id = document.getElementById("idoutput").innerHTML;
    navigator.clipboard.writeText(id);
}