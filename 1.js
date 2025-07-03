let isRunning = false; // status timer
let outputTimer = null;

function start() {
  const button = document.querySelector("button[onclick='start()']");
  const target = document.getElementById("target").value.trim();

  if (!isRunning) {
if (target === "") {
  document.getElementById("errorForm").textContent = "Silakan isi nomor target terlebih dahulu!";
  return;
}
const apps = [
  "GO-JEK", "TOKO-KU", "GRAB", "SHOPEE", "LAZADA", "BUKALAPAK", "TOKOPEDIA", "OVO", "DANA", "GOPAY",
  "LINKAJA", "TRAVELOKA", "AIRBNB", "TIKET.COM", "BLIBLI", "JNE", "J&T", "SICEPAT", "KLIKINDOMARET", "ALFAMART",
  "PAYFAZZ", "FLIP", "KUDO", "QASIR", "MIDTRANS", "XENDIT", "BCA", "MANDIRI", "BRI", "BNI",
  "SEABANK", "NEOBANK", "DOKU", "PAYPAL", "LINE", "WHATSAPP", "TELEGRAM", "WECHAT", "DISCORD", "INSTAGRAM",
  "FACEBOOK", "TIKTOK", "YOUTUBE", "NETFLIX", "SPOTIFY", "VIDIO", "VIU", "MOLA", "GENFLIX", "INDIHOME",
  "MYIM3", "XL", "SMARTFREN", "AXIS", "BY.U", "HALO", "TRI", "CATCHPLAY", "GOOGLE", "APPLE",
  "UBER", "GRABFOOD", "GOFOOD", "SHOPEEFOOD", "KFC", "MCD", "PIZZA HUT", "BURGER KING", "RAJA KUPON", "SAYURBOX",
  "RUANGGURU", "ZENIUS", "BRAINLY", "QUIPPER", "CAMPUS", "SIMPATIKA", "PPOB.ID", "KUDO PAY", "MITRA BUKA", "DANA MITRA",
  "KIOSON", "REKBERKU", "NICEPAY", "PRIMA", "PULSAKU", "PASARPULSA", "JAGO", "DIGIBANK", "BTPN", "MAYBANK",
  "HSBC", "CIMB", "DBS", "OCBC", "UOB", "STANDARD CHARTERED", "MEGA", "PERMATA", "BANK JAGO", "BANK NEO"
];

const httpStatuses = [
  { code: 200, text: "OK" },
  { code: 201, text: "Created" },
  { code: 400, text: "Bad Request" },
  { code: 401, text: "Unauthorized" },
  { code: 403, text: "Forbidden" },
  { code: 404, text: "Not Found" },
  { code: 408, text: "Request Timeout" },
  { code: 429, text: "Too Many Requests" },
  { code: 500, text: "Internal Server Error" },
  { code: 502, text: "Bad Gateway" },
  { code: 503, text: "Service Unavailable" }
];

const outputTexts = apps.flatMap(app => [
  `${app} sedang mengirim OTP ke ${target}...`,
  `Kode OTP dari ${app} berhasil dikirim ke ${target}!`
]);

// shuffle apps biar acak
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const shuffledApps = shuffle([...apps]);  // clone biar apps asli ga berubah

// fungsi random ambil 1 item
function pickRandom(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// generate errorTexts random
const errorTexts = httpStatuses.map(status => {
  const randomApp = pickRandom(apps);
  return `${status.code} ${status.text}: ${randomApp} permintaan OTP ke ${target} ${status.text.toLowerCase()}`;
});

    let i = 0;
    let j = 0;

    button.textContent = "STOP";
    isRunning = true;

    outputTimer = setInterval(() => {
      document.getElementById("output").textContent = outputTexts[i];
      document.getElementById("errorForm").textContent = errorTexts[j];

      i = (i + 1) % outputTexts.length;
      j = (j + 1) % errorTexts.length;
    }, 2000);

  } else {
    // STOP
    clearInterval(outputTimer);
    isRunning = false;
    button.textContent = "START";
    document.getElementById("output").textContent = "";
    document.getElementById("errorForm").textContent = "Proses dihentikan oleh user.";
  }
}
    function login() {
  const user = document.getElementById('username').value.trim();
  const pass = document.getElementById('password').value.trim();
  const error = document.getElementById('error');

  const validUser = "123";
  const validPass = "123";

  if (user === validUser && pass === validPass) {
    document.getElementById('loginForm').style.display = "none";
    document.getElementById('container2').style.display = "block";
    
    Swal.fire({
      position: 'top-end',   // kanan atas
      icon: 'success',
      title: 'Login berhasil!',
      showConfirmButton: false,
      timer: 2000,
      toast: true
    });
  } else {
    error.textContent = "Username atau password salah!";
  }
}
