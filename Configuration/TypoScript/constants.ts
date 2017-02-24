/**
 * TS Includes
 */

// FSC
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:fluid_styled_content/Configuration/TypoScript/Static/constants.txt">
// Gridelements
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:gridelements/Configuration/TypoScript/constants.ts">
// powermail
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:powermail/Configuration/TypoScript/Main/constants.txt">
// powermail bootstrap
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:powermail/Configuration/TypoScript/BootstrapClassesAndLayout/constants.txt">
// cs_seo
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:cs_seo/Configuration/TypoScript/constants.txt">
// jh_magnifiq
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:jh_magnificpopup/Configuration/TypoScript/Default/constants.txt">
// scriptmerger
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:scriptmerger/Configuration/constants.txt">
// sourceopt
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:sourceopt/Configuration/TypoScript/constants.txt">
// go_maps_ext
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:go_maps_ext/Configuration/TypoScript/constants.txt">
// frontend_editing
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:frontend_editing/Configuration/TypoScript/constants.ts">

fetschersite {

  site {
    domain = fetscher.local

    logoFile = EXT:fetschersite/Resources/Public/Images/Seybold-Burka.svg
    name = Seybold+Burka
    claim = rotating systems for your storage

  }

  pageIds {
    root = 1
    metaNaviRoot = 7

    quickform = 22
    contact = 6
  }

  quickformUid = 33

  basics {
    claimWrap = <i>|</i>
  }
}

/**
 * scriptmerger_constants.ts
 *
 */

plugin.tx_scriptmerger.css.compress.enable = 0
plugin.tx_scriptmerger.javascript.compress.enable = 0
plugin.tx_scriptmerger.css.enable = 0

/**
 * Activate lightbox
 *
 */
styles.content.textmedia.linkWrap.lightboxEnabled = 1

/**
 * Fluid Styled Content
 *
 */
styles.templates.layoutRootPath = EXT:fetschersite/Resources/Extensions/fsc/Layouts
styles.templates.templateRootPath = EXT:fetschersite/Resources/Extensions/fsc/Templates
styles.templates.partialRootPath = EXT:fetschersite/Resources/Extensions/fsc/Partials

<INCLUDE_TYPOSCRIPT: source="DIR:EXT:fetschersite/Configuration/TypoScript/Constants/" extension="ts">
