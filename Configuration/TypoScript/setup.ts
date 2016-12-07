/**
 * Template
 *
 */
page = PAGE
page.10 = FLUIDTEMPLATE
page.10 {
  templateName = Seybold+Burka
  layoutRootPaths {
    10 = EXT:fetschersite/Resources/Private/Layouts
  }
  templateRootPaths {
    10 = EXT:fetschersite/Resources/Private/Templates
  }
  partialRootPaths {
    10 = EXT:fetschersite/Resources/Private/Partials
  }
}

/**
 * Sytles & Scripts
 * 
 */
page.includeCSS {
  main = EXT:fetschersite/Resources/Public/Css/main.css
}
page.includeJS.modernizr = EXT:fetschersite/Resources/Public/JavaScripts/vendor/modernizr.js
page.includeJSFooterlibs {
  vendor = EXT:fetschersite/Resources/Public/JavaScripts/vendor.js
  plugins = EXT:fetschersite/Resources/Public/JavaScripts/plugins.js
  main = EXT:fetschersite/Resources/Public/JavaScripts/main.js
}


/**
 * Includes
 */
<INCLUDE_TYPOSCRIPT: source="DIR:EXT:fetschersite/Resources/Private/TypoScripts/Setup/" extension="ts">
