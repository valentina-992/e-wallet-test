$(document).ready(function () {
  // Crear
  $("#btnAgregar").click(function () {
    const nombre = $("#nombre").val().trim();
    const edad = $("#edad").val().trim();

    // Verificamos
    if (nombre === "" || edad === "") {
      alert("Por favor completa los datos.");
      return;
    }

    // Agregamos Fila
    const nuevaFila = `
            <tr>
                <td class="col-nombre"><span>${nombre}</span></td>
                <td class="col-edad"><span>${edad}</span></td>
                <td>
                    <button type="button" class="btn-edit">Editar</button>
                    <button type="button" class="btn-save">Guardar</button>
                    <button type="button" class="btn-delete">Eliminar</button>
                </td>
            </tr>
        `;

    $("#tablaUsuarios").append($(nuevaFila).hide().fadeIn(500));

    // Limpiar
    $("#nombre").val("");
    $("#edad").val("");
  });

  // Editar
  $("#tablaUsuarios").on("click", ".btn-edit", function () {
    const fila = $(this).closest("tr");

    // Convertir texto en input
    fila.find("td:not(:last-child)").each(function () {
      const valorActual = $(this).find("span").text();
      $(this).find("span").hide();
      $(this).append(`<input class="edit-mode" value="${valorActual}">`);
    });

    fila.find(".btn-edit").hide();
    fila.find(".btn-save").show();
  });

  // Guardar
  $("#tablaUsuarios").on("click", ".btn-save", function () {
    const fila = $(this).closest("tr");

    // Procesar input
    fila.find("td:not(:last-child)").each(function () {
      const nuevoValor = $(this).find("input").val();
      $(this).find("span").text(nuevoValor).show();
      $(this).find("input").remove();
    });

    fila.find(".btn-edit").show();
    fila.find(".btn-save").hide();
  });

  // Eliminar
  $("#tablaUsuarios").on("click", ".btn-delete", function () {
    if (confirm("¿Estás seguro de eliminar este usuario?")) {
      $(this)
        .closest("tr")
        .fadeOut(500, function () {
          $(this).remove();
        });
    }
  });
});
