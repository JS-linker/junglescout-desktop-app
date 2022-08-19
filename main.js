const { app, BrowserWindow, session } = require("electron");
const path = require("path");

const createWindow = async () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
  });

  await session.defaultSession
    .loadExtension(
      // path.join(__dirname, "../../work/extension-pro/jsp/build/chrome")
      path.join(__dirname, "extension")
    )
    .then(({ id }) => console.log(`Added Extension:  ${id}`))
    .catch((err) => console.log("An error occurred: ", err));

  await win.loadURL("https://members.junglescout.com");
  // await win.loadURL("https://login.junglescout.com/?redirectRoute=/dashboard");
  // await win.loadURL("https://www.amazon.com/s?k=cup&ref=nb_sb_noss_2");
  // await win.loadURL("https://www.amazon.com");
};

app.whenReady().then(() => {
  createWindow();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
