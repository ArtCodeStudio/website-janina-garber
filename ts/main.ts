import "@ribajs/types";
import { ready } from "@ribajs/utils";
import { Riba, coreModule } from "@ribajs/core";
import { routerModule } from "@ribajs/router";
import { bs5Module } from "@ribajs/bs5";

const riba = new Riba();
const model = {};

riba.module.regist(coreModule.init());
riba.module.regist(routerModule.init());
riba.module.regist(bs5Module.init());

ready(() => {
  riba.bind(document.body, model);
});
