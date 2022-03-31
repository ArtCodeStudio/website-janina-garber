import "@ribajs/types";
import { Riba, coreModule } from "@ribajs/core";
import { ready } from "@ribajs/utils";
import { bs5Module } from "@ribajs/bs5";

const riba = new Riba();
const model = {};

riba.module.regist(coreModule.init());
riba.module.regist(bs5Module.init());

ready(() => {
  riba.bind(document.body, model);
});
