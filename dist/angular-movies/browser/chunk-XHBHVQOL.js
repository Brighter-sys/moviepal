import{a as E,b as k,c as D}from"./chunk-32OLGZ4S.js";import{a as L}from"./chunk-6QMQTY7P.js";import{l as V}from"./chunk-JIF5GKR6.js";import"./chunk-CVUJIS6U.js";import"./chunk-IJ73ZC4K.js";import{Ab as b,Bb as C,Cb as w,Eb as c,L as O,Lb as _,Mb as d,Nb as f,Ob as m,Pb as a,Qb as u,Rb as x,Yb as M,Zb as p,eb as s,fb as g,ic as l,nc as S,oa as P,rc as T,uc as y,xa as h,ya as v}from"./chunk-GUVOHRZU.js";var B=()=>[import("./chunk-UPCY5X7N.js").then(e=>e.MovieCardComponent),import("./chunk-MLVZLZ4W.js").then(e=>e.SwiperDirective),import("./chunk-RECYPOBD.js").then(e=>e.SlicePipe),import("./chunk-W3NLO6LH.js").then(e=>e.MatTabGroup),import("./chunk-W3NLO6LH.js").then(e=>e.MatTab)];function I(e,i){if(e&1&&(m(0,"swiper-slide"),u(1,"app-poster-card",10),a()),e&2){let n=i.$implicit;s(),c("model",n)("isMovie",!0)}}function F(e,i){if(e&1&&(m(0,"mat-tab",8)(1,"swiper-container",9),d(2,I,2,2,"swiper-slide",null,_),T(4,"slice"),a()()),e&2){let n=i.$implicit,t=p(2);c("label",n),s(),c("config",t.config),s(),f(y(4,2,t.moviesList,0,15))}}function H(e,i){e&1&&l(0," Empty list ")}function j(e,i){if(e&1){let n=x();m(0,"mat-tab-group",7),M("selectedTabChange",function(o){h(n);let r=p();return v(r.tabMovieChange(o))}),d(1,F,5,6,"mat-tab",8,_,!1,H,1,0),a()}if(e&2){let n=p();c("selectedIndex",n.selectedMovieTab),s(),f(n.movieTabList)}}function A(e,i){if(e&1&&(m(0,"swiper-slide"),u(1,"app-poster-card",11),a()),e&2){let n=i.$implicit;s(),c("model",n)}}function z(e,i){if(e&1&&(m(0,"mat-tab",8)(1,"swiper-container",9),d(2,A,2,1,"swiper-slide",null,_),T(4,"slice"),a()()),e&2){let n=i.$implicit,t=p(2);c("label",n),s(),c("config",t.config),s(),f(y(4,2,t.tvShowsList,0,15))}}function $(e,i){e&1&&l(0," Empty list ")}function G(e,i){if(e&1){let n=x();m(0,"mat-tab-group",7),M("selectedTabChange",function(o){h(n);let r=p();return v(r.tabTVChange(o))}),d(1,z,5,6,"mat-tab",8,_,!1,$,1,0),a()}if(e&2){let n=p();c("selectedIndex",n.selectedTVTab),s(),f(n.tvShowsTabList)}}var ie=(()=>{let i=class i{constructor(t,o,r){this.moviesService=t,this.onTvService=o,this.seo=r,this.config={watchSlidesProgress:!0,breakpoints:{992:{slidesPerView:6.3,spaceBetween:20,slidesOffsetBefore:0,slidesOffsetAfter:0},768:{slidesPerView:4.3,spaceBetween:15,slidesOffsetBefore:0,slidesOffsetAfter:0},576:{slidesPerView:3.3,spaceBetween:15,slidesOffsetBefore:0,slidesOffsetAfter:0},320:{slidesPerView:2.3,spaceBetween:10,slidesOffsetBefore:10,slidesOffsetAfter:10}}},this.movieTabList=["Now playing","Upcoming","Popular"],this.moviesList=[],this.selectedMovieTab=0,this.tvShowsTabList=["Airing Today","Currently Airing","Popular"],this.tvShowsList=[],this.selectedTVTab=0}ngOnInit(){this.seo.generateTags({title:"Angular Movies and Series",description:"Movie and Series Home Page",image:"https://jancobh.github.io/Angular-Movies/background-main.webp"}),this.getMovies("now_playing",1),this.getTVShows("airing_today",1)}getMovies(t,o){this.moviesService.getMovies(t,o).pipe(O(1)).subscribe(r=>{this.moviesList=r.results})}tabMovieChange({index:t}){this.selectedMovieTab=t;let r=["now_playing","upcoming","popular"][t];r&&this.getMovies(r,1)}getTVShows(t,o){this.onTvService.getTVShows(t,o).subscribe(r=>{this.tvShowsList=r.results})}tabTVChange({index:t}){this.selectedTVTab=t;let r=["airing_today","on_the_air","popular"][t];r&&this.getTVShows(r,1)}};i.\u0275fac=function(o){return new(o||i)(g(E),g(k),g(D))},i.\u0275cmp=P({type:i,selectors:[["app-home"]],standalone:!0,features:[S],decls:21,vars:2,consts:[[1,"home-main-content"],[1,"container"],[1,"movies__container"],["title","Go to Movies",1,"movies__title"],[1,"colored-background-before",3,"routerLink"],[1,"shows__container"],["title","Go to TV Shows",1,"shows__title"],["mat-align-tabs","end",3,"selectedTabChange","selectedIndex"],[3,"label"],["appSwiper","","pagination","true","scrollbar","false",3,"config"],[3,"model","isMovie"],[3,"model"]],template:function(o,r){o&1&&(m(0,"section",0),l(1,` Welcome
`),a(),m(2,"div",1)(3,"section",2)(4,"h2",3)(5,"a",4)(6,"mat-icon"),l(7,"movie"),a(),l(8," Movies "),a()(),b(9,j,4,2),C(10,9,B),w(),a(),m(12,"section",5)(13,"h2",6)(14,"a",4)(15,"mat-icon"),l(16,"tv_gen"),a(),l(17," TV Shows "),a()(),b(18,G,4,2),C(19,18,B),w(),a()()),o&2&&(s(5),c("routerLink","/movies"),s(9),c("routerLink","/tv-shows"))},dependencies:[V,L],styles:['.home-main-content[_ngcontent-%COMP%]{color:#fff;display:flex;justify-content:center;align-items:center;height:500px;background:linear-gradient(#342931cc,#1a214acc),url("./media/background-main-FTHRUFLC.webp") no-repeat bottom;background-size:cover;font-size:4rem}.movies__container[_ngcontent-%COMP%], .shows__container[_ngcontent-%COMP%]{margin:2rem 0;min-height:465px;position:relative}.movies__title[_ngcontent-%COMP%], .shows__title[_ngcontent-%COMP%]{position:absolute;margin:12px 0}.movies__title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .shows__title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:flex;align-items:center;text-decoration:none;position:relative;z-index:10}.movies__title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:before, .shows__title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:before{content:"";position:absolute;width:100%;height:2px;border-radius:4px;bottom:-8px;left:0;transform-origin:right;transform:scaleX(0);transition:transform .3s ease-in-out}.movies__title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:before, .shows__title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:before{transform-origin:left;transform:scaleX(1)}.movies__title[_ngcontent-%COMP%]:hover, .shows__title[_ngcontent-%COMP%]:hover{background-position:0 100%}.movies__title[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%], .shows__title[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{margin-right:10px}  mat-tab-header .mat-mdc-tab:not(.mat-mdc-tab-disabled).mdc-tab--active .mdc-tab__text-label{color:#fff}  mat-tab-header .mat-mdc-tab-list{flex-grow:initial}@media (max-width: 576px){  mat-tab-header .mat-mdc-tab-list{flex-grow:1}}  mat-tab-header .mat-mdc-tab-label-container{justify-content:flex-end}@media (max-width: 576px){  mat-tab-header .mat-mdc-tab-label-container{justify-content:flex-start}}swiper-container[_ngcontent-%COMP%]{margin-top:30px}  .swiper-slide-visible:not(.swiper-slide-fully-visible){opacity:.6}  .swiper-slide-active{opacity:1!important}  .mat-mdc-tab-label-container{border-bottom-color:transparent!important}  .mat-mdc-tab-body-wrapper{min-height:415px}swiper-slide[_ngcontent-%COMP%]{padding-bottom:2rem}@media (max-width: 576px){.home-main-content[_ngcontent-%COMP%]{height:250px;font-size:2rem}.movies__title[_ngcontent-%COMP%], .shows__title[_ngcontent-%COMP%]{position:initial;padding-bottom:10px}.movies__title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .shows__title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{justify-content:center}}@media (min-width: 576px) and (max-width: 768px){.home-main-content[_ngcontent-%COMP%]{height:400px}}']});let e=i;return e})();export{ie as HomeComponent};
