fetschersite {

  site {
    domain = fetscher.local

    logoFile = EXT:fetschersite/Resources/Public/Images/logo2.gif
    name = Seybold+Burka
    claim = rotating systems for your storage

    fetscherLogoFile = EXT:fetschersite/Resources/Public/Images/logo_fetscher.png
  }

  pageIds {
    root = 1
    metaNaviRoot = 7
  }


  basics {
    claimWrap = <i>|</i>
  }
}

[globalString = HTTP_HOST= http://www.typo3.com]
fetschersite.site.domain = www.typo3.com
[global]
[globalString = HTTP_HOST= http://www.typo3.org]
fetschersite.site.domain = www.typo3.org
[global]

/**
 * scriptmerger_constants.ts
 * 
 */
plugin.tx_scriptmerger.css.compress.enable = 0
plugin.tx_scriptmerger.javascript.compress.enable = 0
plugin.tx_scriptmerger.css.enable = 0

