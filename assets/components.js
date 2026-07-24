// Navbar, footer y bottom navigation bar únicos para todo el sitio Fetchy.
// Se inyectan con document.write durante el parseo inicial de la página
// (patrón de "include" estático, sin necesidad de servidor ni build step).

window._uiToast = function (msg) {
  var t = document.getElementById("_ui-toast");
  if (!t) {
    t = document.createElement("div");
    t.id = "_ui-toast";
    t.style.cssText = "position:fixed;bottom:88px;left:50%;transform:translateX(-50%);background:#1c1b1f;color:#fff;padding:8px 20px;border-radius:99px;font-size:13px;font-weight:500;z-index:9999;opacity:0;pointer-events:none;transition:opacity .25s;white-space:nowrap";
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.style.opacity = "1";
  clearTimeout(t._t);
  t._t = setTimeout(function () { t.style.opacity = "0"; }, 2600);
};

(function () {
  var NAV_ITEMS = [
    { key: "inicio", label: "Inicio", href: "index.html" },
    { key: "ia", label: "Asistente de IA", href: "IA.html" },
    { key: "proveedores", label: "Directorio de Proveedores", href: "MenuProveedores.html" },
  ];

  var BOTTOM_NAV_ITEMS = [
    { key: "inicio", label: "Inicio", href: "index.html", icon: "dashboard" },
    { key: "proveedores", label: "Proveedores", href: "MenuProveedores.html", icon: "storefront" },
    { key: "ia", label: "Asistente IA", href: "IA.html", icon: "smart_toy" },
    { key: "perfil", label: "Perfil", href: "#", icon: "person" },
  ];

  function desktopLinkClasses(isActive) {
    return isActive
      ? "text-primary dark:text-primary-fixed font-bold border-b-2 border-primary dark:border-primary-fixed pb-1"
      : "text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors";
  }

  window.renderHeader = function (active) {
    var links = NAV_ITEMS.map(function (item) {
      return (
        '<a class="' + desktopLinkClasses(item.key === active) + '" href="' + item.href + '">' +
        item.label +
        "</a>"
      );
    }).join("");

    var html =
      '<header class="bg-surface dark:bg-surface-dim border-b border-outline-variant dark:border-outline shadow-sm fixed top-0 left-0 w-full z-50 h-20">' +
      '  <div class="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto h-full">' +
      '    <div class="flex items-center gap-lg">' +
      '      <a class="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed" href="index.html">Fetchy</a>' +
      '      <nav class="hidden md:flex gap-md font-body-md text-body-md items-center h-full">' + links + "</nav>" +
      "    </div>" +
      '    <div class="flex items-center gap-md">' +
      '      <div class="hidden lg:flex items-center bg-surface-container-low border border-outline-variant rounded-lg px-base py-xs w-64">' +
      '        <span class="material-symbols-outlined text-outline">search</span>' +
      '        <input class="bg-transparent border-none focus:ring-0 text-body-sm w-full" placeholder="Buscar pedido o proveedor..." type="text" />' +
      "      </div>" +
      '      <div class="hidden sm:flex gap-sm">' +
      '        <button class="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors scale-95 active:opacity-80" type="button" aria-label="Notificaciones">notifications</button>' +
      '        <button class="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors scale-95 active:opacity-80" type="button" aria-label="Configuración">settings</button>' +
      "      </div>" +
      '      <button onclick="if(typeof openOrderModal===\'function\')openOrderModal()" class="hidden sm:inline-flex bg-tertiary text-on-tertiary px-md py-xs rounded-lg font-label-md hover:opacity-90 transition-all scale-95 active:opacity-80" type="button">Nuevo Pedido</button>' +
      '      <img onclick="_uiToast(\'Perfil de usuario — en construcción\')" class="w-10 h-10 rounded-full border border-outline-variant object-cover cursor-pointer hover:opacity-80 transition-opacity" alt="Foto de perfil del usuario" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_zUh4ULTQgtJWqSQlqn2xKBDtF86YkilrU62au7Ox2Lv6bIJeG-SxcjxNpAG5D9eE4dkzBC9iTpULd1_8jf4MJlmSmR42qdtedskEf56C1jK2s4q0ST4ESWuFwWn4Im4zwrOTHpUvUZHhc3bWZWNWc8CT9mMfYzu9DQasKVjmFktDeKFblVPMJI6edPqHdghpCi4ep02WVOFp787iJXkh2IkenSO_Q4_mKwPYkMoRnDDQJw1nJMzpmliKwX1KqTddq37OxptAbO4" />' +
      "    </div>" +
      "  </div>" +
      "</header>";
    document.write(html);
  };

  window.renderFooter = function () {
    var html =
      '<footer class="bg-surface-container-highest dark:bg-surface-container w-full py-xl mt-auto px-margin-mobile md:px-margin-desktop border-t border-outline-variant">' +
      '  <div class="max-w-7xl w-full mx-auto flex flex-col gap-lg">' +
      '    <div class="grid grid-cols-1 md:grid-cols-4 gap-lg">' +
      '      <div class="col-span-1 md:col-span-2 space-y-md">' +
      '        <span class="font-headline-md text-headline-md text-primary">Fetchy</span>' +
      '        <p class="text-body-sm text-on-surface-variant max-w-xs">Simplificando la cadena de suministro global con tecnología de vanguardia y análisis de datos en tiempo real.</p>' +
      "      </div>" +
      '      <div class="space-y-sm">' +
      '        <h5 class="font-bold text-primary">Plataforma</h5>' +
      '        <ul class="space-y-xs text-body-sm text-on-surface-variant/80">' +
      '          <li><a class="hover:text-primary underline transition-all" href="index.html">Inicio</a></li>' +
      '          <li><a class="hover:text-primary underline transition-all" href="IA.html">Asistente de IA</a></li>' +
      '          <li><a class="hover:text-primary underline transition-all" href="MenuProveedores.html">Directorio de Proveedores</a></li>' +
      "        </ul>" +
      "      </div>" +
      '      <div class="space-y-sm">' +
      '        <h5 class="font-bold text-primary">Soporte</h5>' +
      '        <ul class="space-y-xs text-body-sm text-on-surface-variant/80">' +
      '          <li><a class="hover:text-primary underline transition-all" href="#">Centro de Ayuda</a></li>' +
      '          <li><a class="hover:text-primary underline transition-all" href="#">Términos</a></li>' +
      '          <li><a class="hover:text-primary underline transition-all" href="#">Privacidad</a></li>' +
      "        </ul>" +
      "      </div>" +
      "    </div>" +
      '    <div class="w-full border-t border-outline-variant/30 pt-md text-center">' +
      '      <p class="text-body-sm text-on-surface-variant/80">© 2026 Fetchy. Soluciones de Suministro Global.</p>' +
      "    </div>" +
      "  </div>" +
      "</footer>";
    document.write(html);
  };

  window.renderBottomNav = function (active) {
    var links = BOTTOM_NAV_ITEMS.map(function (item) {
      var isActive = item.key === active;
      var linkClass = isActive
        ? "flex flex-col items-center gap-xs text-primary font-bold"
        : "flex flex-col items-center gap-xs text-on-surface-variant";
      var iconClass = isActive
        ? "material-symbols-outlined fill-icon"
        : "material-symbols-outlined";
      return (
        '<a class="' + linkClass + '" href="' + item.href + '">' +
        '<span class="' + iconClass + '">' + item.icon + "</span>" +
        '<span class="text-label-md">' + item.label + "</span>" +
        "</a>"
      );
    }).join("");

    var html =
      '<nav class="md:hidden fixed bottom-0 left-0 w-full bg-surface-container-low border-t border-outline-variant flex justify-around items-center py-sm z-50" style="padding-bottom: env(safe-area-inset-bottom)">' +
      links +
      "</nav>";
    document.write(html);
  };
})();
