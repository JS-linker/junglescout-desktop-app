const { app, BrowserWindow } = require("electron");
const installer = require("electron-devtools-installer");

const createWindow = async () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
  });

  await installer
    .default({
      ...installer.REDUX_DEVTOOLS,
      id: "bckjlihkmgolmgkchbpiponapgjenaoa",
    })
    .then((name) => console.log(`Added Extension:  ${name}`))
    .catch((err) => console.log("An error occurred: ", err));

  await win.loadURL("https://members.junglescout.com");
  //   await win.loadURL("https://www.amazon.com/s?k=cup&ref=nb_sb_noss_2");
  // await win.loadURL("https://www.amazon.com");
};

app.whenReady().then(() => {
  createWindow();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
