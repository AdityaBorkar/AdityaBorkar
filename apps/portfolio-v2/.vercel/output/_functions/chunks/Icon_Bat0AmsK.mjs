import { c as createComponent, r as renderTemplate, e as renderComponent, d as createAstro, u as unescapeHTML, F as Fragment } from './astro/server_BO6KBylT.mjs';
import 'kleur/colors';

const IMAGE_LIST = /* #__PURE__ */ Object.assign({"/src/assets/cursor.png": () => import('./cursor_BlrqVKI4.mjs'),"/src/assets/cursor.svg": () => import('./cursor_C1hqTfeW.mjs'),"/src/assets/emoji/in-flag.png": () => import('./in-flag_BcTtoF8x.mjs'),"/src/assets/emoji/waving-hand.png": () => import('./waving-hand_B0m60hi4.mjs'),"/src/assets/figma-cursor.svg": () => import('./figma-cursor_BZs0qwLQ.mjs'),"/src/assets/icons/ArrowUp.svg": () => import('./ArrowUp_B7LeJYn8.mjs'),"/src/assets/icons/ArrowUpRight.svg": () => import('./ArrowUpRight_DC08_PTF.mjs'),"/src/assets/icons/Atom.svg": () => import('./Atom_COBtlfl6.mjs'),"/src/assets/icons/Bot.svg": () => import('./Bot_kPJWbFx8.mjs'),"/src/assets/icons/Briefcase.svg": () => import('./Briefcase_DPkuNqhx.mjs'),"/src/assets/icons/ChevronDown.svg": () => import('./ChevronDown_DLbqK7tf.mjs'),"/src/assets/icons/ChevronUp.svg": () => import('./ChevronUp_i5FW8RdH.mjs'),"/src/assets/icons/CirclePlus.svg": () => import('./CirclePlus_DQEgDfoP.mjs'),"/src/assets/icons/Currency.svg": () => import('./Currency_CQC53hPN.mjs'),"/src/assets/icons/FileText.svg": () => import('./FileText_B0Ez2FCU.mjs'),"/src/assets/icons/Filter.svg": () => import('./Filter_CFgSZEet.mjs'),"/src/assets/icons/Flower.svg": () => import('./Flower_BTwrDEgF.mjs'),"/src/assets/icons/Gift.svg": () => import('./Gift_NeriVaPn.mjs'),"/src/assets/icons/GitHub.svg": () => import('./index_BR4l97ZW.mjs').then(n => n.G),"/src/assets/icons/HandHeart.svg": () => import('./HandHeart_CFJBmI7V.mjs'),"/src/assets/icons/HandVictory.svg": () => import('./HandVictory_46t0kKWa.mjs'),"/src/assets/icons/Instagram.svg": () => import('./Instagram_g_V7Rstw.mjs'),"/src/assets/icons/LinkedIn.svg": () => import('./index_BR4l97ZW.mjs').then(n => n.L),"/src/assets/icons/Mail.svg": () => import('./Mail_DSvT4cgi.mjs'),"/src/assets/icons/Menu.svg": () => import('./index_BR4l97ZW.mjs').then(n => n.M),"/src/assets/icons/Moon.svg": () => import('./index_BR4l97ZW.mjs').then(n => n.e),"/src/assets/icons/Package.svg": () => import('./Package_CpxPb-zX.mjs'),"/src/assets/icons/QuestionMark.svg": () => import('./QuestionMark_BtfAMnZp.mjs'),"/src/assets/icons/Refresh.svg": () => import('./index_BR4l97ZW.mjs').then(n => n.R),"/src/assets/icons/RoundMessage.svg": () => import('./index_BR4l97ZW.mjs').then(n => n.d),"/src/assets/icons/Smile.svg": () => import('./Smile_25fpT1Hn.mjs'),"/src/assets/icons/Star.svg": () => import('./Star_aT6RxOhT.mjs'),"/src/assets/icons/Sun.svg": () => import('./index_BR4l97ZW.mjs').then(n => n.f),"/src/assets/icons/Twitter.svg": () => import('./index_BR4l97ZW.mjs').then(n => n.T),"/src/assets/icons/UserCircle.svg": () => import('./UserCircle_Bp-KVDU3.mjs'),"/src/assets/icons/XClose.svg": () => import('./XClose_BU5IrI48.mjs'),"/src/assets/illustrations/analytics-on-computer.png": () => import('./analytics-on-computer_BQUHiflK.mjs'),"/src/assets/illustrations/animated.gif": () => import('./animated_D3wEDLmY.mjs'),"/src/assets/illustrations/apollo.png": () => import('./apollo_CZGEMOr4.mjs'),"/src/assets/illustrations/browser-window.png": () => import('./browser-window_BsYfHMAA.mjs'),"/src/assets/illustrations/chat-whiteboard.png": () => import('./chat-whiteboard_BNCRU4AY.mjs'),"/src/assets/illustrations/client-trophy.png": () => import('./client-trophy_D_Rh2cdg.mjs'),"/src/assets/illustrations/coffee-paper-cup-45.png": () => import('./coffee-paper-cup-45_BWAdI2eo.mjs'),"/src/assets/illustrations/contract.png": () => import('./contract_CaVDvegW.mjs'),"/src/assets/illustrations/credit-cards.png": () => import('./credit-cards_zp0E4M77.mjs'),"/src/assets/illustrations/data-security.png": () => import('./data-security_UdNjyLJm.mjs'),"/src/assets/illustrations/drone-with-package.png": () => import('./drone-with-package_Cp1nzzL1.mjs'),"/src/assets/illustrations/grey-metal-gears.png": () => import('./grey-metal-gears_cu8CmUdL.mjs'),"/src/assets/illustrations/hand-with-phone.png": () => import('./hand-with-phone_DKNMbKF9.mjs'),"/src/assets/illustrations/hands-with-phone-pinched.png": () => import('./hands-with-phone-pinched_D-FREkkc.mjs'),"/src/assets/illustrations/laptop-on-abstract.png": () => import('./laptop-on-abstract_Dk7hjyC-.mjs'),"/src/assets/illustrations/laptop-with-notes.png": () => import('./laptop-with-notes_K91_fUQ-.mjs'),"/src/assets/illustrations/notepad-and-phone.png": () => import('./notepad-and-phone_DMn0GmEJ.mjs'),"/src/assets/illustrations/page-with-pie-chart.png": () => import('./page-with-pie-chart_DNXle1T7.mjs'),"/src/assets/illustrations/paper-coffee-cup.png": () => import('./paper-coffee-cup_B3nXvp_5.mjs'),"/src/assets/illustrations/paper-with-notes.png": () => import('./paper-with-notes_ChCGvP9s.mjs'),"/src/assets/illustrations/robot-assistant.png": () => import('./robot-assistant_CBF_hBDa.mjs'),"/src/assets/illustrations/search-window.png": () => import('./search-window_MF-CxzCl.mjs'),"/src/assets/illustrations/statistics-pie-charts.png": () => import('./statistics-pie-charts_fet5_hwb.mjs'),"/src/assets/illustrations/timeline.png": () => import('./timeline_CeFpYYnB.mjs'),"/src/assets/illustrations/trophy.png": () => import('./trophy_DAVRutCb.mjs'),"/src/assets/illustrations/two-blue-lego-bricks.png": () => import('./two-blue-lego-bricks_fOGP9mzw.mjs'),"/src/assets/illustrations/vr-headset-pro.png": () => import('./vr-headset-pro_CllkGjZy.mjs'),"/src/assets/illustrations/white-headphones.png": () => import('./white-headphones_ColRaADj.mjs'),"/src/assets/illustrations/white-screen-laptop.png": () => import('./white-screen-laptop_CXrTC7-M.mjs'),"/src/assets/illustrations/winking_face.gif": () => import('./winking_face_CjNgz6zP.mjs'),"/src/assets/illustrations/yellow-pencil.png": () => import('./yellow-pencil_S45jQVDf.mjs'),"/src/assets/logo/aiesec.png": () => import('./aiesec_CXKmGDoU.mjs'),"/src/assets/logo/airtable.png": () => import('./airtable_CEeGG3Jv.mjs'),"/src/assets/logo/aws.png": () => import('./aws_CDp0j767.mjs'),"/src/assets/logo/cloudflare.png": () => import('./cloudflare_bVcugnIt.mjs'),"/src/assets/logo/coda.webp": () => import('./coda_BgpIP2MN.mjs'),"/src/assets/logo/contentful.png": () => import('./contentful_DSmepUKv.mjs'),"/src/assets/logo/framer.webp": () => import('./framer_CVwbpKY4.mjs'),"/src/assets/logo/google cloud.svg": () => import('./google cloud_D_smYdXB.mjs'),"/src/assets/logo/googlecloud.svg": () => import('./googlecloud_Cd2vHx1D.mjs'),"/src/assets/logo/javascript.png": () => import('./javascript_5mlryG2p.mjs'),"/src/assets/logo/lottiefiles_for_white.svg": () => import('./lottiefiles_for_white_BrMI3Io7.mjs'),"/src/assets/logo/million.js.jpg": () => import('./million.js_W_KYpRn-.mjs'),"/src/assets/logo/millionjs.jpg": () => import('./millionjs_BI4mp4BB.mjs'),"/src/assets/logo/platipie.svg": () => import('./platipie_-b7HqygW.mjs'),"/src/assets/logo/react.js.png": () => import('./react.js_wpziB5zW.mjs'),"/src/assets/logo/reactjs.png": () => import('./reactjs_lVvvIYL8.mjs'),"/src/assets/logo/rpf.svg": () => import('./rpf_CkoMep0t.mjs'),"/src/assets/logo/shopify.png": () => import('./shopify_DQ8KlN45.mjs'),"/src/assets/logo/solidstart.svg": () => import('./solidstart_CXDeWIB-.mjs'),"/src/assets/logo/strapi.webp": () => import('./strapi_Dr2GgSjc.mjs'),"/src/assets/logo/typescript.png": () => import('./typescript_CLqafZdc.mjs'),"/src/assets/logo/vercel.svg": () => import('./vercel_Ba0N2hTz.mjs'),"/src/assets/logo/vft.webp": () => import('./vft_D7U4Iy2Y.mjs'),"/src/assets/logo/webflow.png": () => import('./webflow_DHRBX1VK.mjs'),"/src/assets/logo/zapier.svg": () => import('./zapier_lxB4oYSD.mjs'),"/src/assets/mockups/portfolio-v2.png": () => import('./portfolio-v2_B--IrO1W.mjs'),"/src/assets/personal/badminton.jpeg": () => import('./badminton_CafMSWPP.mjs'),"/src/assets/personal/city.jpeg": () => import('./city_WSnGJ4rP.mjs'),"/src/assets/personal/coffee-1.jpeg": () => import('./coffee-1_BkdO2754.mjs'),"/src/assets/personal/coffee-2.jpeg": () => import('./coffee-2_DhZ0xkI7.mjs'),"/src/assets/personal/desk-cats-1.jpeg": () => import('./desk-cats-1_B0IaTqjj.mjs'),"/src/assets/personal/desk-cats-2.jpeg": () => import('./desk-cats-2_BAblF7jp.mjs'),"/src/assets/personal/desk-cats-3.jpeg": () => import('./desk-cats-3_K-B0Qn2k.mjs'),"/src/assets/personal/letter.jpeg": () => import('./letter_C2kBzQtV.mjs'),"/src/assets/personal/nm-marathon.jpeg": () => import('./nm-marathon_B-psku_x.mjs'),"/src/assets/personal/nmhq-cycling.jpeg": () => import('./nmhq-cycling_CLshhD_Z.mjs'),"/src/assets/personal/personal-nature.jpeg": () => import('./personal-nature_D2YBE_Cc.mjs'),"/src/assets/personal/sagar-vihar-shot.jpeg": () => import('./sagar-vihar-shot_B8BBM4lO.mjs'),"/src/assets/personal/temporary-1.jpeg": () => import('./temporary-1_Bmmab56a.mjs'),"/src/assets/personal/workspace-ikea-1.jpeg": () => import('./workspace-ikea-1_BlmBL2rJ.mjs'),"/src/assets/personal/workspace-ikea-2.jpeg": () => import('./workspace-ikea-2_QdGezsMf.mjs'),"/src/assets/personal/workspace-ikea-3.jpeg": () => import('./workspace-ikea-3_CYy5rk30.mjs'),"/src/assets/personal/workspace-macd.jpeg": () => import('./workspace-macd_BXfHJA9V.mjs'),"/src/assets/personal/workspace-starbucks.jpeg": () => import('./workspace-starbucks_CsJG9oKU.mjs'),"/src/assets/profile-bg.png": () => import('./profile-bg_D-T0vlYX.mjs'),"/src/assets/profile-ghibli.jpg": () => import('./profile-ghibli_-93ayRMo.mjs'),"/src/assets/profile-old.png": () => import('./profile-old_C6NyGRZO.mjs'),"/src/assets/profile.png": () => import('./profile_CVMxz7y6.mjs')

});
const SVG_LIST = /* #__PURE__ */ Object.assign({"/src/assets/icons/ArrowUp.svg": () => import('./ArrowUp_CgrhuRSt.mjs').then(m => m["default"]),"/src/assets/icons/ArrowUpRight.svg": () => import('./ArrowUpRight_CEJW31tU.mjs').then(m => m["default"]),"/src/assets/icons/Atom.svg": () => import('./Atom_67ZQMmX4.mjs').then(m => m["default"]),"/src/assets/icons/Bot.svg": () => import('./Bot_Dp8lDR3i.mjs').then(m => m["default"]),"/src/assets/icons/Briefcase.svg": () => import('./Briefcase_Duu-QUQY.mjs').then(m => m["default"]),"/src/assets/icons/ChevronDown.svg": () => import('./ChevronDown_mcmX5Dcc.mjs').then(m => m["default"]),"/src/assets/icons/ChevronUp.svg": () => import('./ChevronUp_CT4Zpo1j.mjs').then(m => m["default"]),"/src/assets/icons/CirclePlus.svg": () => import('./CirclePlus_CQNPQTr0.mjs').then(m => m["default"]),"/src/assets/icons/Currency.svg": () => import('./Currency_BbQ1_FWQ.mjs').then(m => m["default"]),"/src/assets/icons/FileText.svg": () => import('./FileText_DXdkFt8b.mjs').then(m => m["default"]),"/src/assets/icons/Filter.svg": () => import('./Filter_BprkDVpw.mjs').then(m => m["default"]),"/src/assets/icons/Flower.svg": () => import('./Flower_DZ8mjlBI.mjs').then(m => m["default"]),"/src/assets/icons/Gift.svg": () => import('./Gift_BIy6Cr9M.mjs').then(m => m["default"]),"/src/assets/icons/GitHub.svg": () => import('./GitHub_Bgn64vV3.mjs').then(m => m["default"]),"/src/assets/icons/HandHeart.svg": () => import('./HandHeart_UbepPTeW.mjs').then(m => m["default"]),"/src/assets/icons/HandVictory.svg": () => import('./HandVictory_Bj9gh8y-.mjs').then(m => m["default"]),"/src/assets/icons/Instagram.svg": () => import('./Instagram_Clz5OAR_.mjs').then(m => m["default"]),"/src/assets/icons/LinkedIn.svg": () => import('./LinkedIn_CMGWDwm4.mjs').then(m => m["default"]),"/src/assets/icons/Mail.svg": () => import('./Mail_CJuKXt4y.mjs').then(m => m["default"]),"/src/assets/icons/Menu.svg": () => import('./Menu_BckplLME.mjs').then(m => m["default"]),"/src/assets/icons/Moon.svg": () => import('./Moon_yRUpWHHN.mjs').then(m => m["default"]),"/src/assets/icons/Package.svg": () => import('./Package_C7RL4RZ-.mjs').then(m => m["default"]),"/src/assets/icons/QuestionMark.svg": () => import('./QuestionMark_CVLwvA_1.mjs').then(m => m["default"]),"/src/assets/icons/Refresh.svg": () => import('./Refresh_B0T5A7xJ.mjs').then(m => m["default"]),"/src/assets/icons/RoundMessage.svg": () => import('./RoundMessage_DcQUTifl.mjs').then(m => m["default"]),"/src/assets/icons/Smile.svg": () => import('./Smile_Bg8VSe4M.mjs').then(m => m["default"]),"/src/assets/icons/Star.svg": () => import('./Star_efD4anto.mjs').then(m => m["default"]),"/src/assets/icons/Sun.svg": () => import('./Sun_BesBzNVw.mjs').then(m => m["default"]),"/src/assets/icons/Twitter.svg": () => import('./Twitter_DrhHHpek.mjs').then(m => m["default"]),"/src/assets/icons/UserCircle.svg": () => import('./UserCircle_c7iajGDC.mjs').then(m => m["default"]),"/src/assets/icons/XClose.svg": () => import('./XClose_DCL_6liK.mjs').then(m => m["default"])


});
const getSvg = (path) => {
  const file = SVG_LIST[`/src/assets/${path}.svg`];
  if (!file) throw new Error(`Icon not found: ${path}`);
  return file();
};
const getImage = async (path) => {
  const file = IMAGE_LIST[`/src/assets/${path}`];
  if (!file) throw new Error(`Image not found: "/src/assets/${path}"`);
  return await file();
};

const $$Astro = createAstro();
const $$Icon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Icon;
  const { icon, ...props } = Astro2.props;
  let iconHTML = await getSvg(`icons/${icon}`);
  if (!iconHTML) throw new Error("Icon not found");
  const propsString = Object.entries(props).map(([key, value]) => `${key}="${value}"`).join(" ");
  iconHTML = iconHTML.replace("<svg ", `<svg ${propsString} `);
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(iconHTML)}` })}`;
}, "/home/aditya/projects/AdityaBorkar/apps/portfolio-v2/src/components/ui/Icon.astro", undefined);

export { $$Icon as $, getImage as g };
