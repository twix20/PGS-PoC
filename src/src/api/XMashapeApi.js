import axios from "axios";

//TODO: move it to config
const SkiCampsBaseUrl = "https://makevoid-skicams.p.mashape.com";
const XMashapeKey = "kxSXmUymofmshFHhhKxWOSJpqJsJp1I3zNnjsnqKwhITAiC1zw";

const instance = axios.create({
  baseURL: SkiCampsBaseUrl,
  headers: { "X-Mashape-Key": XMashapeKey }
});

export const fetchCams = (...params) =>
  instance.get(`${SkiCampsBaseUrl}/cams.json`, ...params);
