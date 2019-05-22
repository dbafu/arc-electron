/**
@license
Copyright 2018 The Advanced REST client authors <arc@mulesoft.com>
Licensed under the Apache License, Version 2.0 (the "License"); you may not
use this file except in compliance with the License. You may obtain a copy of
the License at
http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
License for the specific language governing permissions and limitations under
the License.
*/

/**
Advanced REST Client deskto app dark theme stylesheet.
It is a Polymer's custom style element. It will propagate variables and mixins
to all elements.
*/
const $documentContainer = document.createElement('template');
$documentContainer.innerHTML = `<custom-style>
  <style>
    html {
      @font-face {
        font-family: "DIN Pro";
        src: url('https://d2mrfksxwk2en8.cloudfront.net/fonts/DINPro-Light.eot');
        src: url('https://d2mrfksxwk2en8.cloudfront.net/fonts/DINPro-Light.eot?#iefix') format('embedded-opentype'),
          url('https://d2mrfksxwk2en8.cloudfront.net/fonts/DINPro-Light.woff2') format('woff2'),
          url('https://d2mrfksxwk2en8.cloudfront.net/fonts/DINPro-Light.woff') format('woff'),
          url('https://d2mrfksxwk2en8.cloudfront.net/fonts/DINPro-Light.ttf') format('truetype'),
          url('https://d2mrfksxwk2en8.cloudfront.net/fonts/DINPro-Light.svg') format('svg');
        font-weight: 300;
        font-style: normal;
      }

      @font-face {
        font-family: "Open Sans";
        src: url('https://d2mrfksxwk2en8.cloudfront.net/fonts/OpenSans-Regular.eot');
        src: url('https://d2mrfksxwk2en8.cloudfront.net/fonts/OpenSans-Regular.eot?#iefix') format('embedded-opentype'),
          url('https://d2mrfksxwk2en8.cloudfront.net/fonts/OpenSans-Regular.woff2') format('woff2'),
          url('https://d2mrfksxwk2en8.cloudfront.net/fonts/OpenSans-Regular.woff') format('woff'),
          url('https://d2mrfksxwk2en8.cloudfront.net/fonts/OpenSans-Regular.ttf') format('truetype'),
          url('https://d2mrfksxwk2en8.cloudfront.net/fonts/OpenSans-Regular.svg') format('svg');
        font-weight: 400;
        font-style: normal;
      }

      @font-face {
        font-family: "Open Sans";
        src: url('https://d2mrfksxwk2en8.cloudfront.net/fonts/OpenSans-Semibold.eot');
        src: url('https://d2mrfksxwk2en8.cloudfront.net/fonts/OpenSans-Semibold.eot?#iefix') format('embedded-opentype'),
          url('https://d2mrfksxwk2en8.cloudfront.net/fonts/OpenSans-Semibold.woff2') format('woff2'),
          url('https://d2mrfksxwk2en8.cloudfront.net/fonts/OpenSans-Semibold.woff') format('woff'),
          url('https://d2mrfksxwk2en8.cloudfront.net/fonts/OpenSans-Semibold.ttf') format('truetype'),
          url('https://d2mrfksxwk2en8.cloudfront.net/fonts/OpenSans-Semibold.svg') format('svg');
        font-weight: 600;
        font-style: normal;
      }

      @font-face {
        font-family: "Open Sans";
        src: url('https://d2mrfksxwk2en8.cloudfront.net/fonts/OpenSans-Bold.eot');
        src: url('https://d2mrfksxwk2en8.cloudfront.net/fonts/OpenSans-Bold.eot?#iefix') format('embedded-opentype'),
          url('https://d2mrfksxwk2en8.cloudfront.net/fonts/OpenSans-Bold.woff2') format('woff2'),
          url('https://d2mrfksxwk2en8.cloudfront.net/fonts/OpenSans-Bold.woff') format('woff'),
          url('https://d2mrfksxwk2en8.cloudfront.net/fonts/OpenSans-Bold.ttf') format('truetype'),
          url('https://d2mrfksxwk2en8.cloudfront.net/fonts/OpenSans-Bold.svg') format('svg');
        font-weight: 700;
        font-style: normal;
      }

      @font-face {
        font-family: "Open Sans";
        src: url('https://d2mrfksxwk2en8.cloudfront.net/fonts/OpenSans-Light.eot');
        src: url('https://d2mrfksxwk2en8.cloudfront.net/fonts/OpenSans-Light.eot?#iefix') format('embedded-opentype'),
          url('https://d2mrfksxwk2en8.cloudfront.net/fonts/OpenSans-Light.woff2') format('woff2'),
          url('https://d2mrfksxwk2en8.cloudfront.net/fonts/OpenSans-Light.woff') format('woff'),
          url('https://d2mrfksxwk2en8.cloudfront.net/fonts/OpenSans-Light.ttf') format('truetype'),
          url('https://d2mrfksxwk2en8.cloudfront.net/fonts/OpenSans-Light.svg') format('svg');
        font-weight: 200;
        font-style: normal;
      }

      @font-face {
        font-family: "Open Sans";
        src: url('https://d2mrfksxwk2en8.cloudfront.net/fonts/OpenSans-LightItalic.eot');
        src: url('https://d2mrfksxwk2en8.cloudfront.net/fonts/OpenSans-LightItalic.eot?#iefix') format('embedded-opentype'),
          url('https://d2mrfksxwk2en8.cloudfront.net/fonts/OpenSans-LightItalic.woff2') format('woff2'),
          url('https://d2mrfksxwk2en8.cloudfront.net/fonts/OpenSans-LightItalic.woff') format('woff'),
          url('https://d2mrfksxwk2en8.cloudfront.net/fonts/OpenSans-LightItalic.ttf') format('truetype'),
          url('https://d2mrfksxwk2en8.cloudfront.net/fonts/OpenSans-LightItalic.svg') format('svg');
        font-weight: 200;
        font-style: italic;
      }

      @font-face {
        font-family: "Source Code Pro";
        src: url('https://d2mrfksxwk2en8.cloudfront.net/fonts/SourceCodePro-Regular.eot');
        src: url('https://d2mrfksxwk2en8.cloudfront.net/fonts/SourceCodePro-Regular.eot?#iefix') format('embedded-opentype'),
          url('https://d2mrfksxwk2en8.cloudfront.net/fonts/SourceCodePro-Regular.woff2') format('woff2'),
          url('https://d2mrfksxwk2en8.cloudfront.net/fonts/SourceCodePro-Regular.woff') format('woff'),
          url('https://d2mrfksxwk2en8.cloudfront.net/fonts/SourceCodePro-Regular.ttf') format('truetype'),
          url('https://d2mrfksxwk2en8.cloudfront.net/fonts/SourceCodePro-Regular.svg') format('svg');
        font-weight: 400;
        font-style: normal;
      }
    }

    :root {
      --anypoint-color-primary: #00A2DF;
      --anypoint-color-secondary: #506773;
      --anypoint-color-danger: #D1344E;
      --anypoint-color-success: #17BC65;
      --anypoint-color-tertiary: #ffffff;
      --anypoint-color-coreBlue1: #ABE2F5;
      --anypoint-color-coreBlue2: #48C1ED;
      --anypoint-color-coreBlue3: #00A2DF;
      --anypoint-color-coreBlue4: #087299;
      --anypoint-color-coreBlue5: #114459;
      --anypoint-color-robustBlue1: #A1B1B8;
      --anypoint-color-robustBlue2: #6B8A99;
      --anypoint-color-robustBlue3: #506773;
      --anypoint-color-robustBlue4: #32444D;
      --anypoint-color-robustBlue5: #272F33;
      --anypoint-color-futureGreen1: #AAF2CB;
      --anypoint-color-futureGreen2: #33CC7A;
      --anypoint-color-futureGreen3: #17BC65;
      --anypoint-color-futureGreen4: #0E8C48;
      --anypoint-color-futureGreen5: #174D30;
      --anypoint-color-aluminum1: #F9FAFB;
      --anypoint-color-aluminum2: #F4F5F6;
      --anypoint-color-aluminum3: #E8E9EA;
      --anypoint-color-aluminum4: #CACBCC;
      --anypoint-color-aluminum5: #989A9B;
      --anypoint-color-steel1: #6B6C6D;
      --anypoint-color-steel2: #58595A;
      --anypoint-color-steel3: #3A3B3C;
      --anypoint-color-steel4: #262728;
      --anypoint-color-steel5: #121314;
      --anypoint-color-yellow3: #F2BE24;
      --anypoint-color-viridian3: #00B49D;
      --anypoint-color-teal3: #00B5D1;
      --anypoint-color-navy3: #178BEA;
      --anypoint-color-indigo3: #5E66F9;
      --anypoint-color-violet3: #9A63F9;
      --anypoint-color-red3: #D1344E;

      --arc-font-family: "Open Sans", "DIN Pro", sans-serif;
      --arc-font-font-smoothing: antialiased;
      --arc-font-code-family: "Source Code Pro", 'Consolas', 'Menlo', monospace;
      --arc-font-nowrap-white-space: nowrap;
      --arc-font-nowrap-overflow: hidden;
      --arc-font-nowrap-text-overflow: ellipsis;
      --arc-font-expensive-kerning: optimizeLegibility;

      --arc-font-display1-font-size: 34px;
      --arc-font-display1-line-height: 40px;

      --arc-font-title-font-size: 20px;
      --arc-font-title-font-weight: 100;
      --arc-font-title-line-height: 28px;
      --arc-font-title-letter-spacing: -.02em;

      --arc-font-headline-font-size: 24px;
      --arc-font-headline-font-weight: 100;
      --arc-font-headline-letter-spacing: -.03em;
      --arc-font-headline-line-height: 32px

      --arc-font-subhead-font-size: 16px;
      --arc-font-subhead-font-weight: 400;
      --arc-font-subhead-line-height: 24px;

      --arc-font-body2-font-size: 14px;
      --arc-font-body2-font-weight: 500;
      --arc-font-body2-letter-spacing: 0;

      --arc-font-body1-font-size: 13px;
      --arc-font-body1-font-weight: 400;
      --arc-font-body1-line-height: 20px;
      --arc-font-body1-letter-spacing: -.17px;

      --arc-font-caption-font-size: 12px;
      --arc-font-caption-font-weight: 400;
      --arc-font-caption-letter-spacing: 0.011em;
      --arc-font-caption-line-height: 20px;

      --select-text-user-select: text;
      --select-text-cursor: text;

      --anypoint-font-common-base: {
        font-family: var(--arc-font-family);
        -webkit-font-smoothing: var(--arc-font-font-smoothing);
      }

      --anypoint-title-font-common-base: {
        font-family: "DIN Pro", sans-serif;
        -webkit-font-smoothing: var(--arc-font-font-smoothing);
      }

      --anypoint-font-common-code: {
        font-family: var(--arc-font-code-family);
        -webkit-font-smoothing: var(--arc-font-font-smoothing);
      }

      --anypoint-font-common-expensive-kerning: {
        text-rendering: var(--arc-font-expensive-kerning);
      }

      --anypoint-font-common-nowrap: {
        white-space: var(--arc-font-nowrap-white-space);
        overflow: var(--arc-font-nowrap-overflow);
        text-overflow: var(--arc-font-nowrap-text-overflow);
      }

      --anypoint-font-header1: {
        font-family: var(--arc-font-family);
        -webkit-font-smoothing: var(--arc-font-font-smoothing);
        white-space: var(--arc-font-nowrap-white-space);
        overflow: var(--arc-font-nowrap-overflow);
        text-overflow: var(--arc-font-nowrap-text-overflow);
        font-size: 30px;
        font-weight: 100;
        letter-spacing: -0.5px;
        margin-bottom: 20px;
      }

      --anypoint-font-header2: {
        font-family: var(--arc-font-family);
        -webkit-font-smoothing: var(--arc-font-font-smoothing);
        white-space: var(--arc-font-nowrap-white-space);
        overflow: var(--arc-font-nowrap-overflow);
        text-overflow: var(--arc-font-nowrap-text-overflow);
        font-size: 25px;
        font-weight: 100;
        letter-spacing: -.3px;
        margin-bottom: 20px;
      }

      --anypoint-font-header3: {
        font-family: var(--arc-font-family);
        -webkit-font-smoothing: var(--arc-font-font-smoothing);
        font-size: 20px;
        font-weight: 100;
        letter-spacing: -.25px;
        margin-bottom: 20px;
      }

      --anypoint-font-header4: {
        font-family: var(--arc-font-family);
        -webkit-font-smoothing: var(--arc-font-font-smoothing);
        font-size: 18px;
        font-weight: 100;
        letter-spacing: -.2px;
        margin-bottom: 20px;
      }

      --anypoint-font-header5: {
        font-family: var(--arc-font-family);
        -webkit-font-smoothing: var(--arc-font-font-smoothing);
        font-size: 16px;
        font-weight: 100;
        letter-spacing: -.2px;
        margin-bottom: 20px;
      }

      --anypoint-font-header6: {
        font-family: var(--arc-font-family);
        -webkit-font-smoothing: var(--arc-font-font-smoothing);
        white-space: var(--arc-font-nowrap-white-space);
        overflow: var(--arc-font-nowrap-overflow);
        text-overflow: var(--arc-font-nowrap-text-overflow);
        font-size: 12px;
        font-weight: 700;
        letter-spacing: 0;
        margin-bottom: 20px;
      }

      --anypoint-font-body: {
        font-family: var(--arc-font-family);
        -webkit-font-smoothing: var(--arc-font-font-smoothing);
        font-size: 14px;
        letter-spacing: 0;
        font-weight: 400;
      }

      --anypoint-font-body-small: {
        font-family: var(--arc-font-family);
        -webkit-font-smoothing: var(--arc-font-font-smoothing);
        font-size: 14px;
        letter-spacing: 0;
        font-weight: 400;
      }

      --anypoint-font-blockquote: {
        font-family: var(--arc-font-family);
        -webkit-font-smoothing: var(--arc-font-font-smoothing);
        font-style: italic;
        font-weight: 200;
        font-size: 18px;
      }

      --anypoint-font-code: {
        font-family: var(--arc-font-code-family);
        -webkit-font-smoothing: var(--arc-font-font-smoothing);
        font-size: 14px;
        font-weight: 500;
        line-height: 20px;
      }

      --primary-color: var(--anypoint-color-primary);
      --secondary-color: var(--anypoint-color-primary);
      --secondary-text-color: var(--anypoint-color-robustBlue2);
      --paper-item-body-secondary-color: var(--anypoint-color-robustBlue2);
      --primary-background-color: var(--anypoint-color-tertiary);
      --accent-color: var(--anypoint-color-violet3);
      --hover-button-accent-color: #ffffff;
      --warning-primary-color: #FF7043;
      --warning-contrast-color: #fff;
      --pages-fixed-height: calc(100vh - 64px);
      --arc-menu-height: 100%;
      --arc-toolbar-color: #ffffff;
      --arc-toolbar-background-color: var(--anypoint-color-steel5);
      --arc-toolbar-environment-selector-input-color: var(--anypoint-color-tertiary);
      --arc-toolbar-paper-icon-button-active-color: var(--anypoint-color-tertiary);
      --arc-menu-paper-item-body-secondary-color: var(--anypoint-color-aluminum4);
      --arc-toolbar-api-version-selector-color: var(--anypoint-color-tertiary);
      --arc-toolbar-api-version-selector-label-color: var(--anypoint-color-aluminum3);
      --arc-toolbar-button-background-color: var(--anypoint-color-primary);
      --arc-toolbar-button-color: var(--anypoint-color-tertiary);
      --paper-dialog-color: #fff;
      --paper-dialog-background-color: var(--anypoint-color-robustBlue4);
      --request-list-item-history-group-header-color: #fff;

      --font-family-din-pro: {
        font-family: var(--arc-font-family);
      }

      --arc-font-common-base: {
        font-family: var(--arc-font-family);
        -webkit-font-smoothing: var(--arc-font-font-smoothing);
      }

      --arc-font-common-code: {
        -webkit-font-smoothing: var(--arc-font-font-smoothing);
        font-family: "Input Mono", "Source Code Pro", monospace;
        font-size: 13px;
        font-weight: 400;
      }

      --arc-code-styles: {
        white-space: normal;
        overflow-wrap: break-word;
        word-break: break-all;
        word-break: break-word;
      }

      --arc-font-common-nowrap: {
        white-space: var(--arc-font-nowrap-white-space);
        overflow: var(--arc-font-nowrap-overflow);
        text-overflow: var(--arc-font-nowrap-text-overflow);
      }

      /* Display1: Add variables from --arc-font-common-base */
      --arc-font-display1: {
        font-family: var(--arc-font-family);
        -webkit-font-smoothing: var(--arc-font-font-smoothing);
        font-size: var(--arc-font-display1-font-size);
        line-height: var(--arc-font-display1-line-height);
      }

      --arc-font-headline: {
        font-family: var(--arc-font-family);
        -webkit-font-smoothing: var(--arc-font-font-smoothing);
        font-size: var(--arc-font-headline-font-size);
        font-weight: var(--arc-font-headline-font-weight);
        letter-spacing: var(--arc-font-headline-letter-spacing);
        line-height: var(--arc-font-headline-line-height);
      }

      --arc-font-title: {
        font-family: var(--arc-font-family);
        -webkit-font-smoothing: var(--arc-font-font-smoothing);
        white-space: var(--arc-font-nowrap-white-space);
        overflow: var(--arc-font-nowrap-overflow);
        text-overflow: var(--arc-font-nowrap-text-overflow);
        font-weight: var(--arc-font-title-font-weight);
        letter-spacing: var(--arc-font-title-letter-spacing);
        line-height: var(--arc-font-title-line-height);
      }

      --arc-font-subhead: {
        font-family: var(--arc-font-family);
        -webkit-font-smoothing: var(--arc-font-font-smoothing);
        font-size: var(--arc-font-subhead-font-size);
        font-weight: var(--arc-font-subhead-font-weight);
        line-height: var(--arc-font-subhead-line-height);
      }

      --arc-font-body2: {
        font-family: var(--arc-font-family);
        -webkit-font-smoothing: var(--arc-font-font-smoothing);
        letter-spacing: var(--arc-font-body2-letter-spacing);
        font-size: var(--arc-font-body2-font-size);
        font-weight: var(--arc-font-body2-font-weight);
      }

      --arc-font-body1: {
        font-family: var(--arc-font-family);
        -webkit-font-smoothing: var(--arc-font-font-smoothing);
        font-weight: var(--arc-font-body1-font-weight);
        font-size: var(--arc-font-body1-font-size);
        line-height: var(--arc-font-body1-line-height);
        letter-spacing: var(--arc-font-body1-letter-spacing);
        color: var(--anypoint-color-steel3);
      }

      --arc-font-caption: {
        font-family: var(--arc-font-family);
        -webkit-font-smoothing: var(--arc-font-font-smoothing);
        white-space: var(--arc-font-nowrap-white-space);
        overflow: var(--arc-font-nowrap-overflow);
        text-overflow: var(--arc-font-nowrap-text-overflow);
        font-size: var(--arc-font-caption-font-size);
        font-weight: var(--arc-font-caption-font-weight);
        line-height: var(--arc-font-caption-line-height);
        letter-spacing: var(--arc-font-caption-letter-spacing);
      }

      --select-text: {
        font-family: var(--arc-font-family);
        -webkit-font-smoothing: var(--arc-font-font-smoothing);
        -webkit-user-select: var(--select-text-user-select);;
        user-select: var(--select-text-user-select);
        cursor: var(--select-text-cursor);
      }

      --arc-link: {
        font-family: var(--arc-font-family);
        -webkit-font-smoothing: var(--arc-font-font-smoothing);
        color: #00a1df;
      }

      --arc-font-code1: {
        @apply --anypoint-font-code;
        font-size: 14px;
      }

      --paper-font-common-base: {
        font-family: var(--arc-font-family);
        -webkit-font-smoothing: var(--arc-font-font-smoothing);
        font-size: 14px;
      }

      --no-info-message: {
        @apply --arc-font-body1;
        padding-left: 20px;
        font-style: italic;
      }

      --icon-button: {
        color: rgba(0, 0, 0, 0.54) !important;
        background-color: transparent !important;
        transition: color 0.35s linear;
      }

      --tutorial-font: {
        font-family: var(--arc-font-family);
        -webkit-font-smoothing: var(--arc-font-font-smoothing);
        color: rgba(255, 255, 255, 0.67);
        font-size: 15px;
      }
      --onboarding-page-image-color: rgba(255, 255, 255, 0.67);
      --arc-onboarding-legal-info-color: rgba(255, 255, 255, 0.57);
      --paper-radio-button-unchecked-color: rgba(255, 255, 255, 0.87);

      --arc-menu-background-color: var(--anypoint-color-robustBlue4);
      --arc-menu-item-background-color: var(--anypoint-color-robustBlue4);
      --history-menu-background-color: var(--anypoint-color-robustBlue4);
      --arc-menu-selected-color: var(--anypoint-color-steel2);

      --api-navigation-header-color: var(--anypoint-color-tertiary);
      --api-navigation-list-item-color: var(--anypoint-color-tertiary);
      --api-navigation-toggle-icon-color: var(--anypoint-color-tertiary);

      --api-navigation-list-item-selected-background-color: var(--anypoint-color-robustBlue5);
      --api-navigation-list-item-selected-color: #fff;
      --api-navigation-list-item: {
        border-left: 4px transparent solid;
      };
      --api-navigation-list-item-selected: {
        border-left: 4px var(--anypoint-color-primary) solid;
      };
      --api-navigation-list-item-hovered: {
        border-left: 4px var(--anypoint-color-coreBlue1) solid;
      };
      --api-navigation-summary-label: {
        padding: 15px;
      };
      --api-navigation-list-item-selected-weight: normal;
      --api-navigation-list-item-padding: 5px 15px;
      --api-navigation-section-title-padding: 5px 15px 5px 19px;
      --api-navigation-operation-item-padding-left: 29px;
      --api-navigation-list-section-font-size: 14px;
      --api-navigation-operation-endpoint-opened-background-color: var(--anypoint-color-robustBlue3);
      --api-navigation-endpoint-toggle-icon: {
        width: 32px;
        height: 32px;
        margin-right: 2px;
        color: #989a9b;
      };
      --api-navigation-toggle-icon: {
        width: 36px;
        height: 36px;
      };
      --api-navigation-method-label-border-radius: 1px;
      --api-navigation-endpoint-font-size: 14px;

      --arc-menu-panels-theme: {
        background-color: var(--anypoint-color-robustBlue4);
        color: var(--anypoint-color-tertiary);
      }
      --arc-env-container-color: #fff;

      --projects-menu: {
        @apply --arc-menu-panels-theme;
      }

      --rest-api-menu: {
        @apply --arc-menu-panels-theme;
      }

      --saved-menu: {
        @apply --arc-menu-panels-theme;
      }

      --history-menu: {
        @apply --arc-menu-panels-theme;
      }
      --arc-menu-tabs-color: var(--anypoint-color-tertiary);
      --arc-menu-tabs-color-unselected: var(--anypoint-color-tertiary);
      --arc-menu-color: var(--anypoint-color-tertiary);

      --app-header-shadow: {
        box-shadow: none;
      }

      --icon-button-hover: {
        color: var(--primary-color) !important;
      }

      --empty-info: {
        @apply --arc-font-body1;
        color: rgba(0, 0, 0, 0.74);
        font-size: 16px;
      }

      --form-label: {
        font-weight: 500;
      }

      --paper-item-min-height: 40px;
      --paper-item-selected-weight: 400;

      --paper-item-font-size: 0 14px;

      --paper-item: {
        font-size: var(--paper-item-font-size);
      }

      --paper-listbox: {
        padding: 0;
      }

      --paper-item-selected: {
        color: #516873;
        background: var(--anypoint-color-aluminum3);
        font-size: 14px;
        border-left: 2px solid var(--anypoint-color-steel2);
        border-right: 2px solid var(--anypoint-color-steel2);
      }

      --paper-dropdown-menu: {
        box-sizing: border-box;
      }

      --paper-dropdown-menu-input: {
        min-height: 40px;
        @apply --layout-horizontal;
        @apply --layout-center;
      }

      --paper-dropdown-menu-label: {
        font-size: 14px;
      }

      --paper-dropdown-trigger: {
        padding: 0;
      }

      --paper-dropdown-menu-icon: {
        margin-right: 10px;
        width: 20px;
        height: 20px;
        color: var(--anypoint-color-steel2);
      }

      --paper-tabs-selection-bar: {
        border-width: 3px;
        border-color: var(--primary-color);
      }

      --paper-tabs-selection-bar-color: var(--primary-color);
      --paper-tab-ink: transparent !important;

      --paper-tabs-content: {
        height: calc(100% - 3px);
        border-bottom: 3px solid rgba(39, 47, 51, .12);
        font-family: var(--arc-font-family);
        -webkit-font-smoothing: var(--arc-font-font-smoothing);
        font-style: normal;
        color: var(--anypoint-color-steel3);
        display: block;
      }

      --paper-tab-content: {
        font-weight: normal !important;
      }

      --paper-tab-content-unselected: {
        color: var(--anypoint-color-steel1);
      }

      /* Paper button mixn */
      --paper-button: {
        font-family: var(--arc-font-family);
        -webkit-font-smoothing: var(--arc-font-font-smoothing);
        letter-spacing: 0;
        font-weight: 400;
        font-size: 14px;
        border-radius: 0;
        box-shadow: none;
        padding: 10px 16px;
        box-sizing: border-box;
        text-transform: capitalize;
        box-shadow: none !important;
      };
      /* Removes ink from paper button */
      --paper-button-ink-color: transparent;
      --paper-icon-button-ink-color: transparent;

      --request-list-history-group-header-color: #fff;
      --request-list-history-group-header-font-weigth: normal;
      --projects-menu-project-icon-color: #fff;

      --code-block: {
        @apply --arc-font-common-code;
      };
      --arc-code-mirror-background-color: var(--anypoint-color-aluminum2);
      --code-mirror-editor: {
        background-color: var(--arc-code-mirror-background-color);
        z-index: 0;
        display: block;
      };
      --code-mirror-wrapper: {
        display: block;
        height: 100%;
      };
      --code-mirror-string-color: #690;
      --code-mirror-number-color: #690;
      --code-mirror-atom-color: #0288d1;
      --code-mirror-punctuation-color: #999;
      --code-type-text-value-color: var(--code-mirror-string-color);
      --code-type-number-value-color: var(--code-mirror-number-color);
      --code-type-boolean-value-color: var(--code-mirror-atom-color);
      --code-type-null-value-color: var(--code-mirror-atom-color);
      --code-punctuation-value-color: var(--code-mirror-punctuation-color);
      --code-type-link-color: #757575;
      --code-array-index-color: rgba(1, 87, 155, 0.57);
      --code-background-color: var(--anypoint-color-aluminum2);

      --dark-divider-opacity: 0;
      --main-region-panel: {
        margin-bottom: 20px;
        max-width: 900px;
        margin-left: 16px;
      }
      /* Action button is a screen or panel primary action button */
      --action-button: {
        background-color: var(--primary-color);
        color: var(--primary-action-color, #fff);
      };
      /* And when it's hovered. */
      --action-button-hover: {
        background-color: var(--anypoint-color-coreBlue2);
        color: white;
      };
      /* OAuth 1/2 get token button */
      --auth-button: {
        background-color: var(--anypoint-color-danger);
        color: #fff;
      };
      /* OAuth 1/2 get token button when hovered*/
      --auth-button-hover: {
      };
      /* Try it forms enable checkbox margin top */
      --api-url-params-form-enable-checkbox-margin-top: 15px;
      --api-url-params-form-enable-checkbox-array-margin-top: 40px;
      --api-headers-form-enable-checkbox-margin-top: 15px;
      /* Try it forms hint icon margin top */
      --api-url-params-form-hint-icon-margin-top: 3px;
      --api-url-params-form-hint-icon-array-margin-top: 35px;
      --api-headers-editore-hint-icon-margin-top: 3px;
      --api-headers-editore-hint-icon-margin-top-narrow: 3px;
      /* Try it forms delete icon margin top */
      --api-headers-form-delete-icon-margin-top: 3px;
      --api-url-params-editor-editor-subheader: {
        @apply --arc-font-subhead;
      };
      /* Auth method custom icon button margin top */
      --auth-method-custom-help-icon-margin-top: 3px;
      --api-form-action-button-color: var(--primary-color);
      --api-form-action-button-hover-color: var(--anypoint-color-coreBlue2);
      --api-form-action-icon-color: var(--primary-color);
      --api-form-action-icon-hover-color: var(--anypoint-color-coreBlue2);
      --hint-trigger-color: var(--primary-color);
      --hint-trigger-hover-color: var(--anypoint-color-coreBlue2);
      --content-action-button-color: var(--primary-color);
      --content-action-button-color-hover: var(--anypoint-color-coreBlue2);
      --from-row-action-icon-color: var(--primary-color);
      --from-row-action-icon-color-hover: var(--anypoint-color-coreBlue2);
      /* HTTP methods colors */
      --method-display-selected-color: #fff;
      --method-display-get-color: var(--anypoint-color-viridian3);
      --method-display-post-color: var(--anypoint-color-violet3);
      --method-display-put-color: var(--anypoint-color-yellow3);
      --method-display-patch-color: var(--anypoint-color-indigo3);
      --method-display-delete-color: var(--anypoint-color-red3);
      --method-display-options-color: var(--anypoint-color-teal3);
      --method-display-head-color: var(--anypoint-color-futureGreen3);
      /* HTTP methods colors in method documentation panel */
      --http-method-label-border-radius: 1px;
      --http-method-label-padding: 0;
      --http-method-label-get-background-color: var(--method-display-get-color);
      --http-method-label-get-color: #fff;
      --http-method-label-post-background-color: var(--method-display-post-color);
      --http-method-label-post-color: #fff;
      --http-method-label-put-background-color: var(--method-display-put-color);
      --http-method-label-put-color: #fff;
      --http-method-label-patch-background-color: var(--method-display-patch-color);
      --http-method-label-patch-color: #fff;
      --http-method-label-delete-background-color: var(--method-display-delete-color);
      --http-method-label-delete-color: #fff;
      --http-method-label-options-background-color: var(--method-display-options-color);
      --http-method-label-options-color: #fff;
      --http-method-label-head-background-color: var(--method-display-head-color);
      --http-method-label-head-color: #fff;
      --method-display-font-weigth: 100;
      /* Code snippets colors */
      --http-code-snippet-container-highlighted: {
        background-color: var(--anypoint-color-aluminum3);
      };
      --http-code-snippet-line: {
        word-break: break-all;
        white-space: pre-wrap;
      };
      --http-code-snippet-container: {
        background-color: var(--anypoint-color-aluminum2);
        padding: 8px;
      };
      /* Type documentation page */
      --api-type-document-type-background-color: var(--anypoint-color-steel2);
      --api-type-document-type-color: var(--anypoint-color-tertiary);
      --api-type-document-trait-color: var(--anypoint-color-steel2);
      --api-type-document-property-parent-color: #000;
      --api-type-document-property-color: #000;
      --property-shape-document-border-bottom-style: solid;
      --property-shape-document-border-bottom-color: var(--anypoint-color-aluminum3);
      --property-shape-document-union-color: transparent;
      --property-shape-document-union-color-active: transparent;
      --property-shape-document-array-color: transparent;
      --property-shape-document-array-color-active: transparent;
      --property-shape-document-object-color: transparent;
      --property-shape-document-object-color-active: transparent;
      --api-body-document-media-button-background-color: var(--anypoint-color-futureGreen1);
      --api-type-document-trait-border-radius: 0px;
      --api-body-document-media-type-label-font-weight: 400;
      --api-type-document-union-button-background-color: var(--anypoint-color-primary);
      --api-type-document-union-button-active-color: #fff;
      --api-type-document-union-button-active-background-color: var(--anypoint-color-secondary);
      --api-type-document-union-button-active-color: #fff;
      --api-type-document-union-button-color: #fff;
      --api-type-document-property-complex-wrapper: {
        padding-right: 12px;
        border: 1px var(--anypoint-color-aluminum3) solid;
      };
      /* Body documentation styles */
      --api-body-document-title-narrow: {
        font-size: 17px;
      };
      /* Query / URI parameters documentation styles */
      --api-parameters-document-title-narrow: {
        font-size: 17px;
      };
      /* Headers documentation styles */
      --api-headers-document-title-narrow: {
        font-size: 17px;
      };
      /* Method (operation) styles  */
      --api-method-documentation-title-method-font-weight: 100;
      --api-method-documentation-try-it-background-color-hover: var(--anypoint-color-coreBlue2);
      --api-method-documentation-url-background-color: var(--anypoint-color-steel2);
      --api-method-documentation-title-narrow: {
        font-size: 22px;
        font-weight: 400;
      };
      --api-method-documentation-main-section-title-narrow: {
        font-size: 20px;
      };
      --api-method-documentation-subsection-title-narrow: {
        font-size: 17px;
      };
      --api-method-documentation-method-label-border-radius: 1px;
      /* Request editor */
      --api-request-editor-send-valid-button: {
        background-color: var(--anypoint-color-primary);
      };
      --api-request-editor-send-valid-button-hover: {
        background-color: var(--anypoint-color-coreBlue2);
      };
      --api-request-editor-send-invalid-button: {
        background-color: var(--anypoint-color-danger);
      };
      --api-request-editor-send-invalid-button-hover: {
        background-color: #ef5770;
      };
      --primary-button-disabled-background-color: rgb(234, 234, 234);

      /* Mixin applied to checkbox's label */
      --paper-checkbox-label: {
        @apply --arc-font-body1;
      };
      /* A special case for paper input when it is contructed with Anypoint
        paper-input and using regular input with paper-input container */
      --paper-input-container-input-input-style: {
        padding: 0 10px;
        box-sizing: border-box;
        background-color: #fff;
      };
      /* Paper item element: this is very dirty hack to style paper-dropdown-menu.
        Part of styling is in the element and the rest is here. */
      --paper-item: {
        padding: 0px 10px;
        cursor: pointer;
        border-left: 2px var(--anypoint-color-aluminum4) solid;
        border-right: 2px var(--anypoint-color-aluminum4) solid;
      };
      /* There is no such definition in "paper-item" but API components may use it */
      --paper-item-hover-padding: 0px 10px;
      --paper-item-hover-color: var(--anypoint-color-coreBlue3);
      --paper-item-hover-border-left: 2px var(--anypoint-color-coreBlue3) solid;
      --paper-item-hover-border-right: 2px var(--anypoint-color-coreBlue3) solid;

      --paper-item-hover: {
        padding: var(--paper-item-hover-padding);
        color: var(--paper-item-hover-color);
        border-left: var(--paper-item-hover-border-left);
        border-right: var(--paper-item-hover-border-right);
      };
      /* Endpoint documentation styles */
      --api-endpoint-documentation-url-background-color: var(--anypoint-color-steel2);
      /* API summary page styles */
      --api-summary-url-background-color: var(--anypoint-color-steel2);

      /* Material's shadow definitions */
      --box-shadow-transition: box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);
      --box-shadow-2dp: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
                      0 1px 5px 0 rgba(0, 0, 0, 0.12),
                      0 3px 1px -2px rgba(0, 0, 0, 0.2);

      --box-shadow-3dp: 0 3px 4px 0 rgba(0, 0, 0, 0.14),
                    0 1px 8px 0 rgba(0, 0, 0, 0.12),
                    0 3px 3px -2px rgba(0, 0, 0, 0.4);

      --box-shadow-4dp: 0 4px 5px 0 rgba(0, 0, 0, 0.14),
                    0 1px 10px 0 rgba(0, 0, 0, 0.12),
                    0 2px 4px -1px rgba(0, 0, 0, 0.4);

      --box-shadow-6dp: 0 6px 10px 0 rgba(0, 0, 0, 0.14),
                    0 1px 18px 0 rgba(0, 0, 0, 0.12),
                    0 3px 5px -1px rgba(0, 0, 0, 0.4);

      --box-shadow-8dp: 0 8px 10px 1px rgba(0, 0, 0, 0.14),
                    0 3px 14px 2px rgba(0, 0, 0, 0.12),
                    0 5px 5px -3px rgba(0, 0, 0, 0.4);

      --box-shadow-12dp: 0 12px 16px 1px rgba(0, 0, 0, 0.14),
                    0 4px 22px 3px rgba(0, 0, 0, 0.12),
                    0 6px 7px -4px rgba(0, 0, 0, 0.4);

      --box-shadow-16dp: 0 16px 24px 2px rgba(0, 0, 0, 0.14),
                    0  6px 30px 5px rgba(0, 0, 0, 0.12),
                    0  8px 10px -5px rgba(0, 0, 0, 0.4);

      --box-shadow-24dp: 0 24px 38px 3px rgba(0, 0, 0, 0.14),
                    0 9px 46px 8px rgba(0, 0, 0, 0.12),
                    0 11px 15px -7px rgba(0, 0, 0, 0.4);
    }
  </style>
  </custom-style>`;
document.head.appendChild($documentContainer.content);
