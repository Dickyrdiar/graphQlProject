export const getBase64StringFromDataURL = (dataURL) =>
  dataURL.replaceAll("data:", "").replaceAll(/^.+,/, "");
