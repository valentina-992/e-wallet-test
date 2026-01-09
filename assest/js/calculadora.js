$(document).ready(function () {
  $("#btnCalcular").click(function () {
    // Obtener los valores
    let P = parseFloat($("#monto").val());
    let tasaAnual = parseFloat($("#tasa").val());
    let n = parseInt($("#plazo").val());

    // Validar
    if (Number.isNaN(P) || Number.isNaN(tasaAnual) || Number.isNaN(n)) {
      alert("Por favor, completa los campos con valores númericos");
      return;
    }

    // Lógica de negocio
    // La formula M = P * [i(1+i)^n] / [(1 + i)^n-1]
    let i = tasaAnual / 100 / 12;

    let cuota = (P * i * Math.pow(1 + i, n)) / (Math.pow(1 + i, n) - 1);
    let total = cuota * n;
    let intereses = total - P;

    // Mostrar los datos
    $("#resultado").hide();
    // Insertamos
    $("#cuotaMensual").text(
      "$" +
        cuota.toLocaleString("es-CL", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })
    );
    $("#totalPagar").text(
      "$" +
        total.toLocaleString("es-CL", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })
    );
    $("#totalInteres").text(
      "$" +
        intereses.toLocaleString("es-CL", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })
    );
    //Efecto Visual
    $("#resultado").slideDown(500);
  });
});
