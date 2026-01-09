$(document).ready(function () {
  // Index.html
  $("#btnLogin").click(function () {
    const correo = $("#email").val().trim();
    const clave = $("#password").val().trim();

    if (email === "" || clave === "") {
      $("#msg").text("Complete todos los campos");
      return;
    }

    localStorage.setItem("saldo", 1000000);
    localStorage.setItem("transacciones", JSON.stringify([]));
    window.location.href = "menu.html";
  });

  // Menu.html
  $("#saldo").text(localStorage.getItem("saldo"));
  $("#infoModal").modal("show");

  // Deposit.html
  $("#depositar").click(function () {
    const monto = parseInt($("#monto").val());
    let saldo = parseInt(localStorage.getItem("saldo"));

    if (monto <= 0) return;

    saldo += monto;
    localStorage.setItem("saldo", saldo);

    const trans = JSON.parse(localStorage.getItem("transacciones"));
    trans.push({ tipo: "Depósito", monto });
    localStorage.setItem("transacciones", JSON.stringify(trans));

    alert("Depósito realizado");
    window.location.href = "menu.html";
  });

  // Sendmoney.html
  $("#enviar").click(function () {
    const destino = $("#destino").val();
    const monto = parseInt($("#monto").val());
    let saldo = parseInt(localStorage.getItem("saldo"));

    if (destino === "" || monto <= 0 || monto > saldo) {
      alert("Datos inválidos");
      return;
    }

    saldo -= monto;
    localStorage.setItem("saldo", saldo);

    const trans = JSON.parse(localStorage.getItem("transacciones"));
    trans.push({ tipo: "Envío", destino, monto });
    localStorage.setItem("transacciones", JSON.stringify(trans));

    alert("Transferencia exitosa");
    window.location.href = "menu.html";
  });

  // Transactions.html
  const trans = JSON.parse(localStorage.getItem("transacciones"));

  function render(lista) {
    $("#lista").empty();
    lista.forEach((t) => {
      $("#lista").append(
        `<li class="list-group-item">${t.tipo} - $${t.monto || ""}</li>`
      );
    });
  }

  render(trans);

  $("#filtro").keyup(function () {
    const val = $(this).val().toLowerCase();
    const filtradas = trans.filter((t) => t.tipo.toLowerCase().includes(val));
    render(filtradas);
  });
});
