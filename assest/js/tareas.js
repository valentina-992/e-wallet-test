$(document).ready(function () {
  // Agregar Tarea
  $("#btnAgregar").click(function () {
    agregarTarea();
  });

  //Permitir agregar con la tecla Enter
  $("#nuevaTarea").keypress(function (e) {
    if (e.which == 13) {
      agregarTarea();
    }
  });

  function agregarTarea() {
    let texto = $("#nuevaTarea").val().trim();

    if (texto !== "") {
      // Crear elemento dinamico
      let nuevaLi = $(`
                <li>
                    <span class="tarea-texto">${texto}</span>
                    <button type="button" class="btn-eliminar">Eliminar</button>
                </li>
                `);

      // Añadir a la lista
      nuevaLi.hide();
      $("#listaTareas").append(nuevaLi);
      nuevaLi.fadeIn(300);

      //Limpiar el input
      $("#nuevaTarea").val("").focus;
    }
  }
  // Marcar como completada
  $("#listaTareas").on("click", ".tarea-texto", function () {
    $(this).parent().toggleClass("completada");
  });

  // Eliminar tarea
  $("#listaTareas").on("click", ".btn-eliminar", function () {
    let elemento = $(this).parent();

    elemento.fadeOut(300, function () {
      $(this).remove();
    });
  });
});
