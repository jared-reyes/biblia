async function buscarVersiculo() {
    const cita = document.getElementById("cita").value.trim();
    const versiculo = document.getElementById("versiculo");
    const citaActual = document.getElementById("citaActual");

    if (cita === "") {
        versiculo.innerText = "Por favor, introduce una cita válida.";
        citaActual.innerText = "";
        return;
    }

    try {
        const response = await fetch(`https://bible-api.com/${encodeURIComponent(cita)}?translation=rvr60`);
        const data = await response.json();

        if (data.error) {
            versiculo.innerText = "❌ No se encontró la cita. Verifica el formato (Ej: Juan 3:16)";
            citaActual.innerText = "";
        } else {
            versiculo.innerText = data.text.trim();
            citaActual.innerText = data.reference;
        }
    } catch (error) {
        versiculo.innerText = "⚠️ Error al conectar con la API. Verifica tu conexión a internet.";
        citaActual.innerText = "";
    }
}
