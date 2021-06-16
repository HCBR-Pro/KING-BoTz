exports.wait = () => {
	return`*[WAIT] Sedang di Prosses*`
}

exports.succes = () => {
	return`*「 SUKSES 」*`
}

exports.lvlon = () => {
	return`*「 ENABLE 」 LEVELING*`
}

exports.lvloff = () => {
	return`*「 DISABLE 」 LEVELING*`
}

exports.lvlnul = () => {
	return`*LEVELMU MASIH KOSONG*`
}

exports.baned = () => {
	return`*ANDA TELAH TERBANNED DAN TIDAK BISA MEMAKAI BOT LAGI, UNTUK UNBAN SILAKAN HUBUNGI OWNER wa.me/6281252160513!*`
}

exports.lvlnoon = () => {
	return`*LEVEL DI GRUB BELUM DI AKTIFKAN*`
}

exports.noregis = () => {
	return`*「 BELUM DAFTAR 」*\n\n*daftar dulu ya caranya ketik : ${prefix}daftar nama|umur*\n*contoh = ${prefix}daftar Nama|Umur*`
}

exports.rediregis = () => {
	return`*「 SUDAH DAFTAR 」*\n\n*kamu sudah terdaftar di database bot*`
}

exports.stikga = () => {
	return`*yah gagal coba ulangi beberapa saat lagi*`
}

exports.linkga = () => {
	return`*maaf link tidak valid*`
}

exports.groupo = () => {
	return`*「 GROUP ONLY 」*`
}

exports.ownerb = () => {
	return`*「 OWNER BOT ONLY 」*`
}

exports.ownerg = () => {
	return`*「 OWNER GROUP ONLY 」*`
}

exports.admin = () => {
	return`*「 ADMIN GROUP ONLY 」*`
}

exports.badmin = () => {
	return`*「 BOT HARUS JADI ADMIN 」*`
}

exports.nsfwoff = () => {
	return`*NSFW GAK AKTIF*`
}

exports.bug = () => {
	return`*Masalah telah di laporkan ke owner BOT, laporan palsu/main2 tidak akan ditanggapi*`
}

exports.wrongf = () => {
	return`*format salah/text kosong*`
}

exports.clears = () => {
	return`*clear all Success*`
}

exports.pc = () => {
	return`*「 REGISTRASI 」*\n\nuntuk mengetahui apa kamu sudah terdaftar silahkah check message yang saya kirim \n\nNOTE:\n*jika kamu belum mendapatkan pesan. berarti kamu belum menyimpan nomer bot*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
	return`╭━━━━━━━━━━━━┈ ❋ཻུ۪۪⸙\n│ *「 PENDAFTARAN USER 」*\n│\n│ *Terima kasih Telah Mendaftarkan*\n│ *Diri Anda Ke Dalam*\n│ *Database KING-BOTZ*\n│\n│ *Nama : ${namaUser}*\n│ *APi : wa.me/${sender.split("@")[0]}*\n│ *Umur : ${umurUser}*\n│ *Waktu Registrasi : ${time}*\n│ *SN : ${serialUser}*\n│ *Status : Terverifikasi*\n│\n│\n│ *Jangan Sampai Lupa Nomer Ini*\n│ *Suatu Saat Bakalan Berguna*\n│ *Tunggu Update BOT Versi Terbaru.*\n│\n│ *☑ Silahkan Ketik ${prefix}rules*\n│ *Untuk Melanjutkan Pengguna*\n╰━━━━━━━━━━━━┈ ❋ཻུ۪۪⸙\n\n *「 KING-BOTZ 」*`
}

exports.owneresce = (pushname) => {
	return`*maaf tapi ${pushname} bukan owner script*`
}

exports.reglevelaha = (command, pushname, getLevelingLevel, sender, aha) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${aha}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahb = (command, pushname, getLevelingLevel, sender, ahb) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahb}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahc = (command, pushname, getLevelingLevel, sender, ahc) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahc}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahd = (command, pushname, getLevelingLevel, sender, ahd) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahd}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahe = (command, pushname, getLevelingLevel, sender, ahe) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahe}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahf = (command, pushname, getLevelingLevel, sender, ahf) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahf}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel) => {
	return`
*「 SELAMAT 」*
┏𖥻 *Nama* : ${pushname}
┣𖥻 *Nomer* : wa.me/${sender.split("@")[0]}
┣𖥻 *Xp* : ${getLevelingXp(sender)}
┗𖥻 *Level* : ${getLevel} ⊱ ${getLevelingLevel(sender)}
`}
 
exports.limitend = (pushname) => {
	return`*Maaf kak ${pushname} limit kamu hari ini habis*\n*limit di reset setiap jam 20:00*`
}

exports.limitcount = (limitCounts) => {
	return`
*「 LIMIT USER 」*
sisa limit anda : ${limitCounts}

NOTE : untuk mendapatkan limit. bisa lewat naik level atau buylimit`
}

exports.satukos = () => {
	return`Tambah parameter 1/enable atau 0/disable`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`*┏⊱ *「 ATM 」* ━┓\n┣𖥻 *Nama* : ${pushname}\n┣𖥻 *Nomer* : ${sender.split("@")[0]}\n┣𖥻 *Uang* : ${uangkau}\n┗━━━━━━━━━━`
}
