
site {
  domain = fetscher.local
}

[globalString = HTTP_HOST= http://www.typo3.com]
site.domain = www.typo3.com
[global]
[globalString = HTTP_HOST= http://www.typo3.org]
site.domain = www.typo3.org
[global]

/**
 * Includes
 */
<INCLUDE_TYPOSCRIPT: source="DIR:EXT:fetschersite/Resources/Private/TypoScripts/Constant/" extension="ts">
