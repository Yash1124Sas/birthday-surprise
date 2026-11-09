const SUPABASE_URL = "https://csenzwzzruafuuyyjzrd.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_BmCAydX5Vce1OWG_Fia8mw_3shvNmaw";

const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
);

console.log("Supabase connection initialized!");
console.log(supabaseClient);

const loginForm = document.getElementById("login-form");
const loginMessage = document.getElementById("login-message");

loginForm.addEventListener("submit", async function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    loginMessage.textContent = "Checking your details...";

    const { data, error } =
        await supabaseClient.auth.signInWithPassword({
            email: email,
            password: password
        });

    if (error) {
        loginMessage.textContent = "Login failed. Please check your details.";
        console.error(error.message);
    } else {
        document.querySelector(".login-container").style.display = "none";

    document.getElementById("welcome-screen").style.display = "block";

    console.log("User logged in successfully!");
    const music = document.getElementById("birthday-music");
const musicToggle = document.getElementById("music-toggle");

musicToggle.style.display = "block";

music.play().catch(function() {
    musicToggle.textContent = "▶️ Play Music";
});

musicToggle.addEventListener("click", function() {
    if (music.paused) {
        music.play();
        musicToggle.textContent = "🔊 Music ON";
    } else {
        music.pause();
        musicToggle.textContent = "🔇 Music OFF";
    }
});
    }
});

document.getElementById("surprise-button").addEventListener("click", function() {
    document.getElementById("welcome-screen").style.display = "none";

    document.getElementById("surprise-screen").style.display = "block";
});

document.getElementById("blow-button").addEventListener("click", function() {

    document.getElementById("candles").textContent = "✨ ✨ ✨";

    document.getElementById("blow-button").style.display = "none";

    document.getElementById("birthday-message").style.display = "block";
    document.getElementById("memories-button").style.display = "block";

});

document.getElementById("memories-button").addEventListener("click", function() {

    document.querySelector("#surprise-screen > h1").style.display = "none";

    document.querySelectorAll("#surprise-screen > p").forEach(function(item) {
        item.style.display = "none";
    });

    document.querySelector(".cake").style.display = "none";

    document.getElementById("blow-button").style.display = "none";
    document.getElementById("birthday-message").style.display = "none";
    document.getElementById("memories-button").style.display = "none";

    document.getElementById("memories-screen").style.display = "block";
    loadMemories();

});

async function loadMemories() {

    const photos = [
        {
            name: "Spic1.jpeg",
            caption: "One beautiful moment with you ❤️"
        },
        {
            name: "Spic2.jpeg",
            caption: "Another beautiful memory with you 💕"
        },
        {
            name: "Spic3.jpeg",
            caption: "A special moment with you ❤️"
        },
        {
            name: "Spic4.jpeg",
            caption: "Forever one of my favourite memories 💕"
        },
        {
            name: "Spic5.jpeg",
            caption: "Every moment with you is precious ❤️"
        }
    ];

    const gallery = document.getElementById("photo-gallery");

    gallery.innerHTML = "";

    for (const photo of photos) {

        const { data, error } = await supabaseClient
            .storage
            .from("birthday-photos")
            .createSignedUrl(photo.name, 3600);

        if (error) {
            console.error(error.message);
            continue;
        }

        gallery.innerHTML += `
            <div class="memory-card">
                <img src="${data.signedUrl}" alt="Our memory">
                <p>${photo.caption}</p>
            </div>
        `;
    }
}

function openLoveLetter() {
    document.getElementById("envelope").style.display = "none";
    document.getElementById("letter-content").style.display = "block";
}

document.getElementById("letter-button").addEventListener("click", function() {
    document.getElementById("memories-screen").style.display = "none";
    document.getElementById("love-letter-screen").style.display = "block";
});

document.getElementById("final-surprise-button").addEventListener("click", function() {
    document.getElementById("love-letter-screen").style.display = "none";
    document.getElementById("final-surprise-screen").style.display = "block";
});

function openGift() {
    document.getElementById("gift-box").style.display = "none";
    document.getElementById("gift-message").style.display = "block";
}

document.getElementById("replay-button").addEventListener("click", function() {
    location.reload();
});