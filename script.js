document.getElementById('paymentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const product = document.getElementById('product').value;
    const payment = document.getElementById('payment').value;

    alert(`Pesanan Anda berhasil!\n\nNama: ${name}\nEmail: ${email}\nAlamat: ${address}\nTas: ${product}\nPembayaran: ${payment}`);
});
