  document.getElementById("download-button").addEventListener("click", function() {
    // Obtener el enlace de descarga del archivo APK
const downloadLink = 'https://github.com/Nichokas/NichoStore/releases/download/V1.2/NichoStore.apk';

// Función para descargar el archivo APK
function descargarAPK() {
  // Realizar una solicitud HTTP GET para obtener el archivo APK
  fetch(downloadLink)
    .then(response => {
      // Obtener los datos de la respuesta como un objeto Blob
      return response.blob();
    })
    .then(blob => {
      // Crear un elemento de enlace de descarga y configurarlo para descargar el archivo
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'NichoStore.apk';

      // Agregar el enlace de descarga al documento y hacer clic en él para iniciar la descarga
      document.body.appendChild(a);
      a.click();

      // Liberar el objeto URL para ahorrar memoria
      window.URL.revokeObjectURL(url);
    })
    .catch(error => {
      console.error('Error al descargar el archivo:', error);
    });
}

// Ejecutar la función descargarAPK al hacer clic en un botón de descarga
const button = document.getElementById('descargar-button');
button.addEventListener('click', descargarAPK);

    alert("¡Gracias por descargar nuestra aplicación!");
  });
  
