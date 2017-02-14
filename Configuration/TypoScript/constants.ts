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
 * Fluid Styled Content
 *
 */
styles.templates.layoutRootPath = EXT:fetschersite/Resources/Extensions/fsc/Layouts
styles.templates.templateRootPath = EXT:fetschersite/Resources/Extensions/fsc/Templates
styles.templates.partialRootPath = EXT:fetschersite/Resources/Extensions/fsc/Partials

<INCLUDE_TYPOSCRIPT: source="DIR:EXT:fetschersite/Configuration/TypoScript/Constants/" extension="ts">
