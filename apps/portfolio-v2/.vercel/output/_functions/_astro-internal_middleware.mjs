import 'es-module-lexer';
import './chunks/astro-designed-error-pages_D_kXHF0P.mjs';
import 'kleur/colors';
import './chunks/astro/server_BO6KBylT.mjs';
import 'clsx';
import 'cookie';
import { d as defineMiddleware, s as sequence } from './chunks/index_CvEo418X.mjs';
import { g as getActionContext } from './chunks/server_qdKH0EII.mjs';

const onRequest$1 = defineMiddleware(async (context, next) => {
  if (context.isPrerendered) return next();
  const { action, setActionResult, serializeActionResult } = getActionContext(context);
  if (action?.calledFrom === "form") {
    const actionResult = await action.handler();
    setActionResult(action.name, serializeActionResult(actionResult));
  }
  return next();
});

const onRequest = sequence(
	
	
	onRequest$1
);

export { onRequest };
