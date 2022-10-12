/* eslint-disable unicorn/prefer-module */
// eslint-disable-next-line unicorn/prefer-node-protocol
import { Buffer } from "buffer";

window.global = window;
global.Buffer = Buffer;
global.process = {
  env: { DEBUG: undefined },
  version: "",
  nextTick: require("next-tick"),
};
