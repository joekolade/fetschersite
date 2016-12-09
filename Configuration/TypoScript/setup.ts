/**
 * Template
 *
 */
page = PAGE
page.10 = FLUIDTEMPLATE
page.10 {
  templateName = Page
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

config.baseURL = http://{$fetschersite.site.domain}/

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
 * Content Elements
 * & Variables
 * 
 */
page.10.variables {

  logoFile = TEXT
  logoFile.value = {$fetschersite.site.logoFile}
  
  sitename = TEXT
  sitename.value = {$fetschersite.site.name}
  
  claim = TEXT
  claim.value = {$fetschersite.site.claim}

  pageIds_root = TEXT
  pageIds_root.value = {$fetschersite.pageIds.root}
  
  fetscherLogoFile = TEXT
  fetscherLogoFile.value = {$fetschersite.site.fetscherLogoFile}

  mainNavi = HMENU
  mainNavi {

    1 = TMENU
    1 {
      expAll = 1

      NO = 1
      NO.wrapItemAndSub = <li>|</li>

      ACT < .NO
      ACT.wrapItemAndSub = <li class="active">|</li>

      CUR < .ACT
    }

    2 < .1
    2.wrap = <ul class="subnav">|</ul>

    3 < .2

  }

  metaNavi = COA
  metaNavi  {
    10 = TEXT
    10 {
      typolink.parameter = {$fetschersite.pageIds.root}
      typolink.ATagParams = class="btn btn-default hidden-xs"
      typolink.ATagBeforeWrap = 1
      typolink.wrap = <i class="fa fa-home"></i><span class="sr-only">|</span>
    }

    20 = HMENU
    20 {
      special = directory
      special.value = {$fetschersite.pageIds.metaNaviRoot}

      1 = TMENU
      1.NO = 1
      1.NO.ATagParams = class="btn"
    }
  }

  contentStage = < styles.content.get
  contentStage {
    select.where = colPos = 11
    select.languageField = sys_language_uid 
  }
  contentMain = < styles.content.get
  contentMain {
    select.where = colPos = 12
    select.languageField = sys_language_uid 
  }

  contentFooter = COA
  contentFooter {
    10 < styles.content.get
    10 {
      select.where = colPos = 21
      select.languageField = sys_language_uid 
      wrap = <div class="col-sm-3">|</div>
      slide = -1
    }
    
    20 < .10
    20.select.where = colPos = 22
    
    30 < .10
    30.select.where = colPos = 23
    
    40 < .10
    40.select.where = colPos = 24
  }

}


/**
 * Includes
 */
<INCLUDE_TYPOSCRIPT: source="DIR:EXT:fetschersite/Configuration/TypoScript/Setup/" extension="ts">
<INCLUDE_TYPOSCRIPT: source="DIR:EXT:fetschersite/Configuration/TypoScript/Extensions/" extension="ts">

config.tx_realurl_enable = 1
