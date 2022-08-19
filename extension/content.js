window.onload = () => {
  setTimeout(() => {
    const img = document.createElement("img");
    img.src = `https://static-mkt.junglescout.cn/wp-content/themes/sage/dist/images/js-footer-logo.png`;
    img.style = "position: fixed; top: 36px; z-index: 9999; right: 36px;"
    console.log('hello world!')
    document.body.appendChild(img);
  }, 1000 * 10);
};
