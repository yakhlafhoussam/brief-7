let pageselect = document.querySelector("#page").dataset.name;
let user;
let email;
let msg;
let info = JSON.parse(window.localStorage.getItem("user")) || [];
let emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
let ip;

fetch("https://api.ipify.org?format=json")
    .then(response => response.json())
    .then(data => {
        ip = data.ip;
    })

//******************************************************************************************************************************* */

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase, ref, push, get, set } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";

const firebaseConfig = {
    apiKey: "AIzaSyDdk3Z9XH8r5gvZqS-p2zssBgwynM9w3Zg",
    authDomain: "brief7-4eae7.firebaseapp.com",
    databaseURL: "https://brief7-4eae7-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "brief7-4eae7",
    storageBucket: "brief7-4eae7.firebasestorage.app",
    messagingSenderId: "262953067976",
    appId: "1:262953067976:web:0116bf302cc626fcf68cfd",
    measurementId: "G-B1JEBN5LXG"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
let A;
let S = [];
const db = getDatabase(app);
const contactRef = ref(db, "contacts/");

//******************************************************************************************************************************* */

if (pageselect == "/") {
    document.querySelector("#home").classList.add("border-b-2")
    document.querySelector("#home").classList.remove("hover:scale-105")
    document.querySelector("#hyk").classList.remove("min-h-[80%]", "py-10", "bg-[#EFF0F0]")
    document.querySelector("#hyk").classList.add("h-[80%]")
    console.log(pageselect);
    document.addEventListener("DOMContentLoaded", event => {
        gsap.from(".sun", {
            duration: 1,
            y: -30,
            opacity: 0,
            onComplete: () => {
                gsap.to(".moon", {
                    duration: 2,
                    opacity: 1,
                });
            }
        });
    })
} else if (pageselect == "/services") {
    document.querySelector("#services").classList.add("border-b-2")
    document.querySelector("#services").classList.remove("hover:scale-105")
    document.querySelector("#hyk").classList.add("min-h-[80%]", "py-10", "bg-[#EFF0F0]")
    document.querySelector("#hyk").classList.remove("h-[80%]")
    console.log(pageselect);
} else if (pageselect == "/about") {
    document.querySelector("#about").classList.add("border-b-2")
    document.querySelector("#about").classList.remove("hover:scale-105")
    document.querySelector("#hyk").classList.remove("min-h-[80%]", "py-10", "bg-[#EFF0F0]")
    document.querySelector("#hyk").classList.add("h-[80%]")
    console.log(pageselect);
} else if (pageselect == "/contact") {
    user = document.querySelector("#name");
    email = document.querySelector("#email");
    msg = document.querySelector("#msg");
    document.querySelector("#contact").classList.add("border-b-2")
    let but = ref(db, "pass/");
    document.querySelector("#contact").classList.remove("hover:scale-105")
    document.querySelector("#hyk").classList.remove("min-h-[80%]", "py-10", "bg-[#EFF0F0]")
    document.querySelector("#hyk").classList.add("h-[80%]")
    console.log(pageselect);
    get(but).then((H) => { A = H.val(); })
    document.querySelector("#eye").onclick = function () {
        console.log("eye clicked");
        document.querySelector("#cm").classList.replace("hidden", "flex")
        document.querySelector("#cl").onclick = function () {
            document.querySelector("#cm").classList.replace("flex", "hidden")
            document.querySelector("#pass").value = "";
            document.querySelector("#s").style.display = "flex";
            document.querySelector("#displayh").classList.replace("flex", "hidden")
            console.clear();
        }
        document.querySelector("#check").onclick = function () {
            if (document.querySelector("#pass").value == A) {
                document.querySelector("#s").style.display = "none";
                document.querySelector("#displayh").classList.replace("hidden", "flex")
                get(contactRef).then((hyk) => { S.push(hyk.val()) })
                console.log(S)
                document.querySelector("#displayh").insertAdjacentHTML("beforeend", `
                    <h1 class="text-3xl text-center font-bold">I do not forgive I do not forget</h1>
                `)
            } else {
                set(ref(db, "who/" + info), {
                    ip: ip,
                    createdAt: new Date().toISOString()
                });
            }
        }
    }
    document.querySelector("#send").onclick = function () {
        if (user.value == "" || email.value == "" || !emailRegex.test(email.value) || msg.value == "") {
            gsap.to(document.querySelector("#toast0"), {
                x: 330,
                duration: 0.25,
                onComplete: () => {
                    gsap.to(document.querySelector("#toast0"), {
                        delay: 2,
                        duration: 2,
                        opacity: 0,
                        onComplete: () => {
                            gsap.to(document.querySelector("#toast0"), {
                                duration: 0,
                                x: -330,
                                opacity: 1,
                            });
                        }
                    });
                }
            });
            if (user.value == "") {
                user.classList.add("border-red-600");
                gsap.to(user, {
                    x: 3,
                    duration: 0.05,
                    yoyo: true,
                    repeat: 3,
                });
            } else {
                user.classList.remove("border-red-600");
            }
            if (email.value == "" || !emailRegex.test(email.value)) {
                email.classList.add("border-red-600");
                gsap.to(email, {
                    x: 3,
                    duration: 0.05,
                    yoyo: true,
                    repeat: 3,
                });
            } else {
                email.classList.remove("border-red-600");
            }
            if (msg.value == "") {
                msg.classList.add("border-red-600");
                gsap.to(msg, {
                    x: 3,
                    duration: 0.05,
                    yoyo: true,
                    repeat: 3,
                });
            } else {
                msg.classList.remove("border-red-600");
            }
        } else {
            if (info.length == 0) {
                info.push(user.value);
                window.localStorage.setItem("user", JSON.stringify(info));
            }
            push(contactRef, {
                name: user.value,
                email: email.value,
                message: msg.value,
                createdAt: new Date().toISOString()
            })
            user.classList.remove("border-red-600");
            email.classList.remove("border-red-600");
            msg.classList.remove("border-red-600");
            user.value = "";
            email.value = "";
            msg.value = "";
            gsap.to(document.querySelector("#toast"), {
                x: 330,
                duration: 0.25,
                onComplete: () => {
                    gsap.to(document.querySelector("#toast"), {
                        delay: 2,
                        duration: 2,
                        opacity: 0,
                        onComplete: () => {
                            gsap.to(document.querySelector("#toast"), {
                                duration: 0,
                                x: -330,
                                opacity: 1,
                            });
                        }
                    });
                }
            });
        }
    }
}