class utils {
  openUrl(url: string) {
    const w: any = window;
    w.open(url, "_blank").focus();
  }
}
export default new utils();
