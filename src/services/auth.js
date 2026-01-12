// Simpan user baru
export function registerUser(user) {
  localStorage.setItem("users", JSON.stringify(user));
}

// Ambil user dari storage
export function getUser() {
  return JSON.parse(localStorage.getItem("users"));
}

// Simpan status login
export function loginUser(email, password) {
  const user = getUser();
  if (!user) return { success: false, message: "User belum terdaftar" };

  if (user.email === email && user.password === password) {
    localStorage.setItem("loggedIn", "true");
    return { success: true };
  }

  return { success: false, message: "Email atau password salah" };
}

// Cek status login
export function isLoggedIn() {
  return localStorage.getItem("loggedIn") === "true";
}

// Logout
export function logout() {
  localStorage.removeItem("loggedIn");
}
