// const {app, BrowserWindow} = require('electron')
//
//
//   // Keep a global reference of the window object, if you don't, the window will
//   // be closed automatically when the JavaScript object is garbage collected.
//   let win
//
//   function createWindow () {
//     // Criar uma janela de navegação.
//     win = new BrowserWindow({width: 800, height: 600})
//
//     // e carrega index.html do app.
//     win.loadFile('index.html')
//
//     // Open the DevTools.
//     win.webContents.openDevTools()
//
//     // Emitido quando a janela é fechada.
//     win.on('closed', () => {
//       // Elimina a referência do objeto da janela, geralmente você iria armazenar as janelas
//       // em um array, se seu app suporta várias janelas, este é o momento
//       // quando você deve excluir o elemento correspondente.
//       win = null
//     })
//   }
//
//   // Este método será chamado quando o Electron tiver finalizado
//   // a inicialização e está pronto para criar a janela browser.
//   // Algumas APIs podem ser usadas somente depois que este evento ocorre.
//   app.on('ready', createWindow)
//
//   // Finaliza quando todas as janelas estiverem fechadas.
//   app.on('window-all-closed', () => {
//     // No macOS é comum para aplicativos e sua barra de menu
//     // permaneçam ativo até que o usuário explicitamente encerre com Cmd + Q
//     if (process.platform !== 'darwin') {
//       app.quit()
//     }
//   })
//
//   app.on('activate', () => {
//     // On macOS it's common to re-create a window in the app when the
//     // dock icon is clicked and there are no other windows open.
//     if (win === null) {
//       createWindow()
//     }
//   })

  // Neste arquivo, você pode incluir o resto do seu aplicativo especifico do processo
  // principal. Você também pode colocar eles em arquivos separados e requeridos-as aqui.

    // Get the modal
    var modal = document.getElementById('myModal');

    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the modal
    btn.onclick = function() {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
