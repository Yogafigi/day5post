function getContact() {
  let name = document.getElementById("input-name").value;
  let gmail = document.getElementById("input-gmail").value;
  let number = document.getElementById("input-phoneNumber").value;
  let subject = document.getElementById("input-subject").value;
  let message = document.getElementById("input-message").value;

  if (name == "") {
    return alert("nama harus di isi");
  } else if (gmail == "") {
    return alert("email harus di isi");
  } else if (number == "") {
    return alert("nomor telepon harus di isi");
  } else if (subject == "") {
    return alert("subject harus di isi");
  } else if (message == "") {
    return alert("alamat harus di isi");
  }

  const gmailTo = "putratroktok6@gmail.com";

  let a = document.createElement("a");

  a.href = `mailto:${gmailTo}?subject=${subject}&body=Halo, nama saya ${name}, ${message}, Bisakah anda menghubungi saya di ${number}`;

  a.click();

  alert("Sukses mengirim pesan");

  let data = {
    name,
    gmail,
    number,
    subject,
    message,
  };

  console.log(data);
}
