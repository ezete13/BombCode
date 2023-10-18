document.addEventListener("DOMContentLoaded", function() {
    const codigoInput = document.getElementById("codigo");
    const validarBtn = document.getElementById("validarBtn");
    const changeCodeButton = document.querySelector(".change-code-button");
    const resultadoTexto = document.getElementById("resultadoTexto");

    let codigoCorrecto = "1234"; // Inicializa el código correcto

    changeCodeButton.addEventListener("click", function() {
        if (codigoInput.style.display === "none") {
            codigoInput.style.display = "block";
            const nuevoCodigo = prompt("Introduce el nuevo código:");
            if (nuevoCodigo !== null) {
                codigoCorrecto = nuevoCodigo;
                alert("Código cambiado a: " + nuevoCodigo);
            }
        } else {
            codigoInput.style.display = "none";
        }
    });

    validarBtn.addEventListener("click", function() {
        const codigo = codigoInput.value;

        // Realiza la validación
        if (codigo === codigoCorrecto) {
            mostrarResultado("PUEDES ESCAPAR!!!", "correcto");
        } else {
            mostrarResultado("TE DEBES QUEDAR!!", "incorrecto");
        }
    });

    function mostrarResultado(texto, clase) {
        resultadoTexto.textContent = texto;
        resultadoTexto.className = clase;
        resultadoTexto.style.display = "block";
    }
});
