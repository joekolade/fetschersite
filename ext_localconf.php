<?php

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig(
    '<INCLUDE_TYPOSCRIPT: source="FILE:EXT:fetschersite/Configuration/TSconfig/page.ts">'
);
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addUserTSConfig(
    '<INCLUDE_TYPOSCRIPT: source="FILE:EXT:fetschersite/Configuration/TSconfig/user.ts">'
);

// Set presets
$GLOBALS['TYPO3_CONF_VARS']['RTE']['Presets']['fetscher_preset'] = 'EXT:fetschersite/Configuration/RTE/Fetscher.yaml';