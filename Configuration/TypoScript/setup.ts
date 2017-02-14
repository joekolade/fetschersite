/**
 * TS Includes
 */

// FSC
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:fluid_styled_content/Configuration/TypoScript/Static/setup.txt">
// FSC LAyout wrap
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:fluid_styled_content/Configuration/TypoScript/Styling/setup.txt">
// Gridelements
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:gridelements/Configuration/TypoScript/setup.ts">
// bootstrap_grids
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:bootstrap_grids/Configuration/TypoScript/setup.txt">
// powermail
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:powermail/Configuration/TypoScript/Main/setup.txt">
// powermail bootstrap
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:powermail/Configuration/TypoScript/BootstrapClassesAndLayout/setup.txt">
// cs_seo
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:cs_seo/Configuration/TypoScript/setup.txt">
// jh_magnifiq
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:jh_magnificpopup/Configuration/TypoScript/Default/setup.txt">
// mask
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:mask/Configuration/TypoScript/setup.txt">
// scriptmerger
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:scriptmerger/Configuration/setup.txt">
// sourceopt
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:sourceopt/Configuration/TypoScript/setup.txt">
// go_maps_ext
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:go_maps_ext/Configuration/TypoScript/setup.txt">
// frontend_editing
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:frontend_editing/Configuration/TypoScript/setup.ts">

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
config.tx_realurl_enable = 1
config.tx_frontend_editing = 1


/**
 * Sytles & Scripts
 *
 */
page.includeCSS {
  main = EXT:fetschersite/Resources/Public/Css/main.css
}
page.includeJS.modernizr = EXT:fetschersite/Resources/Public/JavaScripts/vendor/modernizr.js
page.includeJS {
  vendor = EXT:fetschersite/Resources/Public/JavaScripts/vendor.js
}
page.includeJSFooter {
  plugins = EXT:fetschersite/Resources/Public/JavaScripts/plugins.js
  main = EXT:fetschersite/Resources/Public/JavaScripts/main.js
}

/**
 * Content Elements
 * & Variables
 *
 */
page.10.variables {

  layout = TEXT
  layout.data = levelfield:-2,backend_layout_next_level,slide
  layout.override.field = backend_layout

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
      special.value = 7

      1 = TMENU
      1.NO = 1
      1.NO.ATagParams = class="btn"
    }
  }

  contentStage = COA
  contentStage {
    10 < styles.content.get
    10 {
      select.where = colPos = 11
      select.languageField = sys_language_uid
    }
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

lib.superFooterText = COA
lib.superFooterText {
  10 = CONTENT
  10 {
    table = pages
    select {
      pidInList = 0
      uidInList = 1
    }

    renderObj = COA
    renderObj {
      10 = TEXT
      10 {
        field = tx_mask_agencyfootertext
        parseFunc = < lib.parseFunc_RTE
      }
    }
  }
}

lib.superFooterLogo < lib.superFooterText
lib.superFooterLogo {
  10.renderObj {

    10 >
    10 = FILES
    10 {
      references {
        table = pages
        fieldName = tx_mask_agencylogo
        uid.data = uid
      }
      renderObj = IMAGE
      renderObj {
        file.import.data = file:current:originalUid // file:current:uid
        altText.field = tx_mask_agencyname
        titleText.field = tx_mask_agencyname

        stdWrap.typolink.parameter.field = tx_mask_agencyhomepage
        stdWrap.typolink.extTarget = _blank
      }
    }
  }
}

lib.quickform = COA
lib.quickform {
  wrap = <div class="quick"><div class="quickInner">|</div></div>

  10 = TEXT
  10 {
    wrap = <a class="btn btn-primary" role="button" data-toggle="collapse" href="#quickFormCollapse" aria-expanded="true" aria-controls="collapseExample">| <i class="fa fa-chevron-down pull-right"></i></a>
    value = Schnell-Anfrage öffnen
  }

  20 = CONTENT
  20 {
    table = tt_content
    select {
      pidInList = 22
      #{$site.pageIds.quickform}
      uidInList = 33
      #.data = {$site.quickformUid}

    }
    wrap = <div class="ollapse collapse" id="quickFormCollapse" aria-expanded="true">|<div class="footer"><a href="tel:+49735194090"><i class="fa fa-phone"></i> +49 (0)7351 9409-0</a></div></div>
  }

}

/**
 * Lightbox und Title
 *
 */
lib.fluidContent.settings.media.popup.linkParams.ATagParams.dataWrap = class="{$styles.content.textmedia.linkWrap.lightboxCssClass}" rel="{$styles.content.textmedia.linkWrap.lightboxRelAttribute}" title="{file:current:title}"

/**
 * Includes
 *
 */
<INCLUDE_TYPOSCRIPT: source="DIR:EXT:fetschersite/Configuration/TypoScript/Setup/" extension="ts">
#<INCLUDE_TYPOSCRIPT: source="DIR:EXT:fetschersite/Configuration/TypoScript/Extensions/" extension="ts">
