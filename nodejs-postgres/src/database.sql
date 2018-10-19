CREATE TABLE karyawan (
  id SERIAL PRIMARY KEY,
  nomor_induk VARCHAR (7),
  nama VARCHAR (50),
  alamat VARCHAR(255),
  tanggal_lahir DATE,
  tanggal_masuk DATE
);

INSERT INTO karyawan(nomor_induk,nama,alamat,tanggal_lahir,tanggal_masuk)
VALUES
('IP06001','Agus','Jln. Gajah Mada 115A, Jakarta Pusat','1970-08-01','2006-07-07'),
('IP06002','Amin','Jln. Bungur sari v No, 178, bandung','1977-05-03','2006-07-06'),
('IP06003','Yusuf','Jln. Yosodpuro 15, surabaya','1973-08-09','2006-07-08'),
('IP07004','Alyssa','Jln. Cendana No. 6 Bandung','1983-02-14','2007-01-05'),
('IP07005','Maulana','Jln. Ampera Raya No 1','1985-10-10','2007-02-05');

CREATE TABLE cuti_karyawan (
  id SERIAL PRIMARY KEY,
  nomor_induk VARCHAR (7),
  tanggal_mulai DATE,
  lama_cuti INT,
	keterangan VARCHAR(255)
);

INSERT INTO cuti_karyawan (nomor_induk,tanggal_mulai,lama_cuti,keterangan)
VALUES
('IP06001','2012-02-01',3,'Acara keluar'),
('IP06001','2012-02-13',4,'Anak sakit'),
('IP07007','2012-02-15',2,'Nenek sakit'),
('IP06003','2012-02-17',1,'Mendaftar sekolah anak');

/* challenge:
{
 'nomor_induk' : 'IP06001',
 'nama' : 'Agus',
 'alamat' : 'Jln. Gajah Mada 115A, Jakarta Pusat',
 'tanggal_lahir' : '1970-08-01',
 'tanggal_masuk' : '2006-07-07'
} */


