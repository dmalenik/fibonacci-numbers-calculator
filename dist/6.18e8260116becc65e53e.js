"use strict";(self.webpackChunkfibonacci_numbers_generator=self.webpackChunkfibonacci_numbers_generator||[]).push([[6],{311:(n,e,a)=>{a.d(e,{Z:()=>A});var i=a(537),d=a.n(i),r=a(645),t=a.n(r)()(d());t.push([n.id,".footer{padding:1.5rem 1.5rem 0;justify-content:space-between}.footer .link{height:2rem}.footer .link img{width:auto;height:100%;object-fit:cover}.footer .copyright{font-size:16px;font-weight:700;font-style:normal;color:#545454;line-height:24px;text-align:end}@media screen and (max-width: 984px){.footer{padding:1.4rem 1.4rem 0}}@media screen and (max-width: 896px){.footer{padding:1.3rem 1.3rem 0}}@media screen and (max-width: 818px){.footer{padding:1.2rem 1.2rem 0}}@media screen and (max-width: 701px){.footer{padding:1.1rem 1.1rem 0}}@media screen and (max-width: 521px){.footer{padding:.9rem .9rem 0}}@media screen and (max-width: 475px){.footer{padding:.7rem .7rem 0}}@media screen and (max-width: 425px){.footer{padding:.6rem .6rem 0}}@media screen and (max-width: 385px){.footer{padding:.5rem .5rem 0}}@media screen and (max-width: 355px){.footer{padding:.4rem .4rem 0}}@media screen and (max-width: 327px){.footer{padding:.3rem .3rem 0}}@media screen and (max-width: 305px){.footer{padding:.2rem .2rem 0}}@media screen and (max-height: 305px){.footer{padding:2rem 1.5rem}}@media screen and (max-width: 280px){.footer{padding:.1rem .1rem 0}.footer .copyright{font-size:15px;font-weight:700;font-style:normal;color:#545454;line-height:24px}}@media screen and (max-width: 250px){.footer{padding:0}.footer .copyright{font-size:14px;font-weight:700;font-style:normal;color:#545454;line-height:24px}}@media screen and (max-width: 223px){.footer .copyright{font-size:13px;font-weight:700;font-style:normal;color:#545454;line-height:24px}}@media screen and (max-width: 199px){.footer .copyright{font-size:12px;font-weight:700;font-style:normal;color:#545454;line-height:24px}}@media screen and (max-width: 186px){.footer .copyright{font-size:11px;font-weight:700;font-style:normal;color:#545454;line-height:24px}}@media screen and (max-width: 175px){.footer .copyright{font-size:10px;font-weight:700;font-style:normal;color:#545454;line-height:24px}}@media screen and (max-width: 167px){.footer .copyright{font-size:9px;font-weight:700;font-style:normal;color:#545454;line-height:24px}}","",{version:3,sources:["webpack://./src/components/Footer/Footer.styles.scss","webpack://./src/styles/_mixins.scss","webpack://./src/styles/_vars.scss"],names:[],mappings:"AAGA,QACI,uBAAA,CACA,6BAAA,CAEA,cACI,WAAA,CAEA,kBACI,UAAA,CACA,WAAA,CACA,gBAAA,CAIR,mBCLA,cDOe,CCNf,eDOiB,CCNjB,iBANS,CAOT,aCMgB,CDLhB,gBDMmB,CAEf,cAAA,CAIR,qCACI,QACI,uBAAA,CAAA,CAIR,qCACI,QACI,uBAAA,CAAA,CAIR,qCACI,QACI,uBAAA,CAAA,CAIR,qCACI,QACI,uBAAA,CAAA,CAIR,qCACI,QACI,qBAAA,CAAA,CAIR,qCACI,QACI,qBAAA,CAAA,CAIR,qCACI,QACI,qBAAA,CAAA,CAIR,qCACI,QACI,qBAAA,CAAA,CAIR,qCACI,QACI,qBAAA,CAAA,CAIR,qCACI,QACI,qBAAA,CAAA,CAIR,qCACI,QACI,qBAAA,CAAA,CAIR,sCACI,QACI,mBAAA,CAAA,CAIR,qCACI,QACI,qBAAA,CAEA,mBC5FJ,cD8FmB,CC7FnB,eD8FqB,CC7FrB,iBANS,CAOT,aCMgB,CDLhB,gBD6FuB,CAAA,CAM3B,qCACI,QACI,SAAA,CAEA,mBC3GJ,cD6GmB,CC5GnB,eD6GqB,CC5GrB,iBANS,CAOT,aCMgB,CDLhB,gBD4GuB,CAAA,CAM3B,qCAEQ,mBCxHJ,cD0HmB,CCzHnB,eD0HqB,CCzHrB,iBANS,CAOT,aCMgB,CDLhB,gBDyHuB,CAAA,CAM3B,qCAEQ,mBCrIJ,cDuImB,CCtInB,eDuIqB,CCtIrB,iBANS,CAOT,aCMgB,CDLhB,gBDsIuB,CAAA,CAM3B,qCAEQ,mBClJJ,cDoJmB,CCnJnB,eDoJqB,CCnJrB,iBANS,CAOT,aCMgB,CDLhB,gBDmJuB,CAAA,CAM3B,qCAEQ,mBC/JJ,cDiKmB,CChKnB,eDiKqB,CChKrB,iBANS,CAOT,aCMgB,CDLhB,gBDgKuB,CAAA,CAM3B,qCAEQ,mBC5KJ,aD8KmB,CC7KnB,eD8KqB,CC7KrB,iBANS,CAOT,aCMgB,CDLhB,gBD6KuB,CAAA",sourcesContent:["@use '../../styles/vars';\n@use '../../styles/mixins';\n\n.footer {\n    padding: 1.5rem 1.5rem 0;\n    justify-content: space-between;\n\n    .link {\n        height: 2rem;\n\n        img {\n            width: auto;\n            height: 100%;\n            object-fit: cover;\n        }\n    }\n\n    .copyright {\n        @include mixins.font-settings(\n            $size: 16px,\n            $weight: 700,\n            $f-color: vars.$footer-text-color,\n            $l-height: 24px\n        );\n        text-align: end;\n    }\n}\n\n@media screen and (max-width: 984px) {\n    .footer {\n        padding: 1.4rem 1.4rem 0;\n    }\n}\n\n@media screen and (max-width: 896px) {\n    .footer {\n        padding: 1.3rem 1.3rem 0;\n    }\n}\n\n@media screen and (max-width: 818px) {\n    .footer {\n        padding: 1.2rem 1.2rem 0;\n    }\n}\n\n@media screen and (max-width: 701px) {\n    .footer {\n        padding: 1.1rem 1.1rem 0;\n    }\n}\n\n@media screen and (max-width: 521px) {\n    .footer {\n        padding: 0.9rem 0.9rem 0;\n    }\n}\n\n@media screen and (max-width: 475px) {\n    .footer {\n        padding: 0.7rem 0.7rem 0;\n    }\n}\n\n@media screen and (max-width: 425px) {\n    .footer {\n        padding: 0.6rem 0.6rem 0;\n    }\n}\n\n@media screen and (max-width: 385px) {\n    .footer {\n        padding: 0.5rem 0.5rem 0;\n    }\n}\n\n@media screen and (max-width: 355px) {\n    .footer {\n        padding: 0.4rem 0.4rem 0;\n    }\n}\n\n@media screen and (max-width: 327px) {\n    .footer {\n        padding: 0.3rem 0.3rem 0;\n    }\n}\n\n@media screen and (max-width: 305px) {\n    .footer {\n        padding: 0.2rem 0.2rem 0;\n    }\n}\n\n@media screen and (max-height: 305px) {\n    .footer {\n        padding: 2rem 1.5rem;\n    }\n}\n\n@media screen and (max-width: 280px) {\n    .footer {\n        padding: 0.1rem 0.1rem 0;\n\n        .copyright {\n            @include mixins.font-settings(\n                $size: 15px,\n                $weight: 700,\n                $f-color: vars.$footer-text-color,\n                $l-height: 24px\n            );\n        }\n    }\n}\n\n@media screen and (max-width: 250px) {\n    .footer {\n        padding: 0;\n\n        .copyright {\n            @include mixins.font-settings(\n                $size: 14px,\n                $weight: 700,\n                $f-color: vars.$footer-text-color,\n                $l-height: 24px\n            );\n        }\n    }\n}\n\n@media screen and (max-width: 223px) {\n    .footer {\n        .copyright {\n            @include mixins.font-settings(\n                $size: 13px,\n                $weight: 700,\n                $f-color: vars.$footer-text-color,\n                $l-height: 24px\n            );\n        }\n    }\n}\n\n@media screen and (max-width: 199px) {\n    .footer {\n        .copyright {\n            @include mixins.font-settings(\n                $size: 12px,\n                $weight: 700,\n                $f-color: vars.$footer-text-color,\n                $l-height: 24px\n            );\n        }\n    }\n}\n\n@media screen and (max-width: 186px) {\n    .footer {\n        .copyright {\n            @include mixins.font-settings(\n                $size: 11px,\n                $weight: 700,\n                $f-color: vars.$footer-text-color,\n                $l-height: 24px\n            );\n        }\n    }\n}\n\n@media screen and (max-width: 175px) {\n    .footer {\n        .copyright {\n            @include mixins.font-settings(\n                $size: 10px,\n                $weight: 700,\n                $f-color: vars.$footer-text-color,\n                $l-height: 24px\n            );\n        }\n    }\n}\n\n@media screen and (max-width: 167px) {\n    .footer {\n        .copyright {\n            @include mixins.font-settings(\n                $size: 9px,\n                $weight: 700,\n                $f-color: vars.$footer-text-color,\n                $l-height: 24px\n            );\n        }\n    }\n}\n","@mixin d-flex() {\n    display: flex;\n    align-items: center;\n}\n\n@mixin font-settings(\n    $size: medium,\n    $weight: normal,\n    $styles: normal,\n    $f-color: #000,\n    $l-height: normal\n) {\n    font-size: $size;\n    font-weight: $weight;\n    font-style: $styles;\n    color: $f-color;\n    line-height: $l-height;\n}\n","/* app variables */\n$app-background: linear-gradient(120.21deg, #3e708e 11.18%, #649698 74.17%);\n$app-color: #fff;\n\n/* features variables */\n/* provider */\n$provider-input-border-color: #ccc;\n$heading-background: linear-gradient(\n    93.38deg,\n    #496f74 -3.47%,\n    #6e9195 35.61%,\n    #2d4f61 84.29%\n);\n$field-shadow: 0px 2px 2px 2px rgba(204, 204, 204, 0.1);\n$provider-btn-border-color: #284a5e;\n$btn-background: #27485d;\n/* output */\n$output-background: linear-gradient(162.21deg, #517879 4.83%, #1e3e57 103.44%);\n\n/* fonts */\n$app-fonts: 'Space Grotesk';\n$footer-text-color: #545454;\n$text-color: #000;\n$output-text-color: #e4e4e4;\n"],sourceRoot:""}]);const A=t},900:(n,e,a)=>{a.d(e,{Z:()=>A});var i=a(537),d=a.n(i),r=a(645),t=a.n(r)()(d());t.push([n.id,".header{padding:0 1.5rem 1.5rem;justify-content:center}.header h1{font-size:24px;font-weight:700;font-style:normal;color:rgba(0,0,0,0);line-height:normal;text-align:center;background:linear-gradient(93.38deg, #496f74 -3.47%, #6e9195 35.61%, #2d4f61 84.29%);-webkit-background-clip:text;background-clip:text;--webkit-background-clip: text}@media screen and (max-width: 984px){.header{padding:0 1.4rem 1.4rem}}@media screen and (max-width: 896px){.header{padding:0 1.3rem 1.3rem}}@media screen and (max-width: 818px){.header{padding:0 1.2rem 1.2rem}}@media screen and (max-width: 701px){.header{padding:0 1.1rem 1.1rem}}@media screen and (max-width: 600px){.header{padding:0 1rem 1rem}}@media screen and (max-width: 521px){.header{padding:0 .9rem .9rem}}@media screen and (max-width: 475px){.header{padding:0 .7rem .7rem}}@media screen and (max-width: 425px){.header{padding:0 .6rem .6rem}}@media screen and (max-width: 385px){.header{padding:0 .5rem .5rem}}@media screen and (max-width: 355px){.header{padding:0 .4rem .4rem}}@media screen and (max-width: 327px){.header{padding:0 .3rem .3rem}}@media screen and (max-width: 305px){.header{padding:0 .2rem .2rem}}@media screen and (max-width: 280px){.header{padding:0 .1rem .1rem}.header h1{font-size:23px;font-weight:700;font-style:normal;color:rgba(0,0,0,0);line-height:normal}}@media screen and (max-width: 250px){.header{padding:0}.header h1{font-size:22px;font-weight:700;font-style:normal;color:rgba(0,0,0,0);line-height:normal}}@media screen and (max-width: 223px){.header h1{font-size:21px;font-weight:700;font-style:normal;color:rgba(0,0,0,0);line-height:normal}}@media screen and (max-width: 199px){.header h1{font-size:20px;font-weight:700;font-style:normal;color:rgba(0,0,0,0);line-height:normal}}@media screen and (max-width: 186px){.header h1{font-size:19px;font-weight:700;font-style:normal;color:rgba(0,0,0,0);line-height:normal}}@media screen and (max-width: 175px){.header h1{font-size:18px;font-weight:700;font-style:normal;color:rgba(0,0,0,0);line-height:normal}}@media screen and (max-width: 167px){.header h1{font-size:16px;font-weight:700;font-style:normal;color:rgba(0,0,0,0);line-height:normal}}","",{version:3,sources:["webpack://./src/components/Header/Header.styles.scss","webpack://./src/styles/_mixins.scss","webpack://./src/styles/_vars.scss"],names:[],mappings:"AAGA,QACI,uBAAA,CACA,sBAAA,CAEA,WCKA,cDHe,CCIf,eDHiB,CCIjB,iBANS,CAOT,mBDJkB,CCKlB,kBANW,CDGP,iBAAA,CACA,oFEPa,CFQb,4BAAA,CAAA,oBAAA,CACA,8BAAA,CAIR,qCACI,QACI,uBAAA,CAAA,CAIR,qCACI,QACI,uBAAA,CAAA,CAIR,qCACI,QACI,uBAAA,CAAA,CAIR,qCACI,QACI,uBAAA,CAAA,CAIR,qCACI,QACI,mBAAA,CAAA,CAIR,qCACI,QACI,qBAAA,CAAA,CAIR,qCACI,QACI,qBAAA,CAAA,CAIR,qCACI,QACI,qBAAA,CAAA,CAIR,qCACI,QACI,qBAAA,CAAA,CAIR,qCACI,QACI,qBAAA,CAAA,CAIR,qCACI,QACI,qBAAA,CAAA,CAIR,qCACI,QACI,qBAAA,CAAA,CAIR,qCACI,QACI,qBAAA,CAEA,WCpFJ,cDsFmB,CCrFnB,eDsFqB,CCrFrB,iBANS,CAOT,mBDqFsB,CCpFtB,kBANW,CAAA,CDgGf,qCACI,QACI,SAAA,CAEA,WClGJ,cDoGmB,CCnGnB,eDoGqB,CCnGrB,iBANS,CAOT,mBDmGsB,CClGtB,kBANW,CAAA,CD8Gf,qCAEQ,WC9GJ,cDgHmB,CC/GnB,eDgHqB,CC/GrB,iBANS,CAOT,mBD+GsB,CC9GtB,kBANW,CAAA,CD0Hf,qCAEQ,WC1HJ,cD4HmB,CC3HnB,eD4HqB,CC3HrB,iBANS,CAOT,mBD2HsB,CC1HtB,kBANW,CAAA,CDsIf,qCAEQ,WCtIJ,cDwImB,CCvInB,eDwIqB,CCvIrB,iBANS,CAOT,mBDuIsB,CCtItB,kBANW,CAAA,CDkJf,qCAEQ,WClJJ,cDoJmB,CCnJnB,eDoJqB,CCnJrB,iBANS,CAOT,mBDmJsB,CClJtB,kBANW,CAAA,CD8Jf,qCAEQ,WC9JJ,cDgKmB,CC/JnB,eDgKqB,CC/JrB,iBANS,CAOT,mBD+JsB,CC9JtB,kBANW,CAAA",sourcesContent:["@use '../../styles/vars';\n@use '../../styles/mixins';\n\n.header {\n    padding: 0 1.5rem 1.5rem;\n    justify-content: center;\n\n    h1 {\n        @include mixins.font-settings(\n            $size: 24px,\n            $weight: 700,\n            $f-color: transparent\n        );\n        text-align: center;\n        background: vars.$heading-background;\n        background-clip: text;\n        --webkit-background-clip: text;\n    }\n}\n\n@media screen and (max-width: 984px) {\n    .header {\n        padding: 0 1.4rem 1.4rem;\n    }\n}\n\n@media screen and (max-width: 896px) {\n    .header {\n        padding: 0 1.3rem 1.3rem;\n    }\n}\n\n@media screen and (max-width: 818px) {\n    .header {\n        padding: 0 1.2rem 1.2rem;\n    }\n}\n\n@media screen and (max-width: 701px) {\n    .header {\n        padding: 0 1.1rem 1.1rem;\n    }\n}\n\n@media screen and (max-width: 600px) {\n    .header {\n        padding: 0 1rem 1rem;\n    }\n}\n\n@media screen and (max-width: 521px) {\n    .header {\n        padding: 0 0.9rem 0.9rem;\n    }\n}\n\n@media screen and (max-width: 475px) {\n    .header {\n        padding: 0 0.7rem 0.7rem;\n    }\n}\n\n@media screen and (max-width: 425px) {\n    .header {\n        padding: 0 0.6rem 0.6rem;\n    }\n}\n\n@media screen and (max-width: 385px) {\n    .header {\n        padding: 0 0.5rem 0.5rem;\n    }\n}\n\n@media screen and (max-width: 355px) {\n    .header {\n        padding: 0 0.4rem 0.4rem;\n    }\n}\n\n@media screen and (max-width: 327px) {\n    .header {\n        padding: 0 0.3rem 0.3rem;\n    }\n}\n\n@media screen and (max-width: 305px) {\n    .header {\n        padding: 0 0.2rem 0.2rem;\n    }\n}\n\n@media screen and (max-width: 280px) {\n    .header {\n        padding: 0 0.1rem 0.1rem;\n\n        h1 {\n            @include mixins.font-settings(\n                $size: 23px,\n                $weight: 700,\n                $f-color: transparent\n            );\n        }\n    }\n}\n\n@media screen and (max-width: 250px) {\n    .header {\n        padding: 0;\n\n        h1 {\n            @include mixins.font-settings(\n                $size: 22px,\n                $weight: 700,\n                $f-color: transparent\n            );\n        }\n    }\n}\n\n@media screen and (max-width: 223px) {\n    .header {\n        h1 {\n            @include mixins.font-settings(\n                $size: 21px,\n                $weight: 700,\n                $f-color: transparent\n            );\n        }\n    }\n}\n\n@media screen and (max-width: 199px) {\n    .header {\n        h1 {\n            @include mixins.font-settings(\n                $size: 20px,\n                $weight: 700,\n                $f-color: transparent\n            );\n        }\n    }\n}\n\n@media screen and (max-width: 186px) {\n    .header {\n        h1 {\n            @include mixins.font-settings(\n                $size: 19px,\n                $weight: 700,\n                $f-color: transparent\n            );\n        }\n    }\n}\n\n@media screen and (max-width: 175px) {\n    .header {\n        h1 {\n            @include mixins.font-settings(\n                $size: 18px,\n                $weight: 700,\n                $f-color: transparent\n            );\n        }\n    }\n}\n\n@media screen and (max-width: 167px) {\n    .header {\n        h1 {\n            @include mixins.font-settings(\n                $size: 16px,\n                $weight: 700,\n                $f-color: transparent\n            );\n        }\n    }\n}\n","@mixin d-flex() {\n    display: flex;\n    align-items: center;\n}\n\n@mixin font-settings(\n    $size: medium,\n    $weight: normal,\n    $styles: normal,\n    $f-color: #000,\n    $l-height: normal\n) {\n    font-size: $size;\n    font-weight: $weight;\n    font-style: $styles;\n    color: $f-color;\n    line-height: $l-height;\n}\n","/* app variables */\n$app-background: linear-gradient(120.21deg, #3e708e 11.18%, #649698 74.17%);\n$app-color: #fff;\n\n/* features variables */\n/* provider */\n$provider-input-border-color: #ccc;\n$heading-background: linear-gradient(\n    93.38deg,\n    #496f74 -3.47%,\n    #6e9195 35.61%,\n    #2d4f61 84.29%\n);\n$field-shadow: 0px 2px 2px 2px rgba(204, 204, 204, 0.1);\n$provider-btn-border-color: #284a5e;\n$btn-background: #27485d;\n/* output */\n$output-background: linear-gradient(162.21deg, #517879 4.83%, #1e3e57 103.44%);\n\n/* fonts */\n$app-fonts: 'Space Grotesk';\n$footer-text-color: #545454;\n$text-color: #000;\n$output-text-color: #e4e4e4;\n"],sourceRoot:""}]);const A=t},976:(n,e,a)=>{a.d(e,{Z:()=>A});var i=a(537),d=a.n(i),r=a(645),t=a.n(r)()(d());t.push([n.id,".main{padding:1rem;justify-content:center}@media screen and (max-width: 984px){.main{padding:1.4rem}}@media screen and (max-width: 896px){.main{padding:1.3rem}}@media screen and (max-width: 818px){.main{padding:1.2rem}}@media screen and (max-width: 701px){.main{padding:1.1rem}}@media screen and (max-width: 600px){.main{padding:1rem}}@media screen and (max-height: 600px){.main{padding:0}}@media screen and (max-width: 521px){.main{padding:.9rem}}@media screen and (max-width: 475px){.main{padding:.7rem}}@media screen and (max-width: 425px){.main{padding:.6rem}}@media screen and (max-width: 385px){.main{padding:.5rem}}@media screen and (max-width: 355px){.main{padding:.4rem}}@media screen and (max-width: 327px){.main{padding:.3rem}}@media screen and (max-width: 305px){.main{padding:.2rem}}@media screen and (max-width: 280px){.main{padding:.1rem}}@media screen and (max-width: 250px){.main{padding:0}}","",{version:3,sources:["webpack://./src/components/Main/Main.styles.scss"],names:[],mappings:"AAAA,MACI,YAAA,CACA,sBAAA,CAGJ,qCACI,MACI,cAAA,CAAA,CAIR,qCACI,MACI,cAAA,CAAA,CAIR,qCACI,MACI,cAAA,CAAA,CAIR,qCACI,MACI,cAAA,CAAA,CAIR,qCACI,MACI,YAAA,CAAA,CAIR,sCACI,MACI,SAAA,CAAA,CAIR,qCACI,MACI,aAAA,CAAA,CAIR,qCACI,MACI,aAAA,CAAA,CAIR,qCACI,MACI,aAAA,CAAA,CAIR,qCACI,MACI,aAAA,CAAA,CAIR,qCACI,MACI,aAAA,CAAA,CAIR,qCACI,MACI,aAAA,CAAA,CAIR,qCACI,MACI,aAAA,CAAA,CAIR,qCACI,MACI,aAAA,CAAA,CAIR,qCACI,MACI,SAAA,CAAA",sourcesContent:[".main {\n    padding: 1rem;\n    justify-content: center;\n}\n\n@media screen and (max-width: 984px) {\n    .main {\n        padding: 1.4rem;\n    }\n}\n\n@media screen and (max-width: 896px) {\n    .main {\n        padding: 1.3rem;\n    }\n}\n\n@media screen and (max-width: 818px) {\n    .main {\n        padding: 1.2rem;\n    }\n}\n\n@media screen and (max-width: 701px) {\n    .main {\n        padding: 1.1rem;\n    }\n}\n\n@media screen and (max-width: 600px) {\n    .main {\n        padding: 1rem;\n    }\n}\n\n@media screen and (max-height: 600px) {\n    .main {\n        padding: 0;\n    }\n}\n\n@media screen and (max-width: 521px) {\n    .main {\n        padding: 0.9rem;\n    }\n}\n\n@media screen and (max-width: 475px) {\n    .main {\n        padding: 0.7rem;\n    }\n}\n\n@media screen and (max-width: 425px) {\n    .main {\n        padding: 0.6rem;\n    }\n}\n\n@media screen and (max-width: 385px) {\n    .main {\n        padding: 0.5rem;\n    }\n}\n\n@media screen and (max-width: 355px) {\n    .main {\n        padding: 0.4rem;\n    }\n}\n\n@media screen and (max-width: 327px) {\n    .main {\n        padding: 0.3rem;\n    }\n}\n\n@media screen and (max-width: 305px) {\n    .main {\n        padding: 0.2rem;\n    }\n}\n\n@media screen and (max-width: 280px) {\n    .main {\n        padding: 0.1rem;\n    }\n}\n\n@media screen and (max-width: 250px) {\n    .main {\n        padding: 0;\n    }\n}\n"],sourceRoot:""}]);const A=t},6:(n,e,a)=>{a.r(e),a.d(e,{Footer:()=>D,Header:()=>B,Main:()=>$});var i=a(427);const d=JSON.parse('{"name":"header","attrs":[{"key":"class","value":"component header"}]}');var r=a(379),t=a.n(r),A=a(795),m=a.n(A),o=a(569),s=a.n(o),C=a(565),p=a.n(C),h=a(216),c=a.n(h),x=a(589),g=a.n(x),l=a(900),f={};f.styleTagTransform=g(),f.setAttributes=p(),f.insert=s().bind(null,"head"),f.domAPI=m(),f.insertStyleElement=c(),t()(l.Z,f),l.Z&&l.Z.locals&&l.Z.locals;const B=()=>{const n=(0,i.K)(d);return a.e(573).then(a.bind(a,573)).then((({h1:e})=>{n.appendChild(e)})),n},w=JSON.parse('{"name":"main","attrs":[{"key":"class","value":"component main"}]}');var I=a(976),u={};u.styleTagTransform=g(),u.setAttributes=p(),u.insert=s().bind(null,"head"),u.domAPI=m(),u.insertStyleElement=c(),t()(I.Z,u),I.Z&&I.Z.locals&&I.Z.locals;const $=()=>{const n=(0,i.K)(w);return a.e(617).then(a.bind(a,617)).then((({Provider:e})=>{n.appendChild(e())})),n},q=JSON.parse('{"name":"footer","attrs":[{"key":"class","value":"component footer"}]}');var b=a(311),y={};y.styleTagTransform=g(),y.setAttributes=p(),y.insert=s().bind(null,"head"),y.domAPI=m(),y.insertStyleElement=c(),t()(b.Z,y),b.Z&&b.Z.locals&&b.Z.locals;const D=()=>{const n=(0,i.K)(q);return a.e(420).then(a.bind(a,915)).then((({link:e,copyright:a})=>{n.appendChild(e),n.appendChild(a)})),n}}}]);
//# sourceMappingURL=6.18e8260116becc65e53e.js.map