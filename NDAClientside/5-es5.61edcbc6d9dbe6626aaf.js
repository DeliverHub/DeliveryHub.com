(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"NP+k":function(n,l,e){"use strict";e.r(l);var t,i=e("CcnG"),o=function(){return function(){}}(),u=e("pMnS"),a=e("gIcY"),r=e("jvCn"),s=e("miAi"),c=function(){return function(){}}(),d=e("J9Y1"),p=function(){function n(n,l,e,t,i,o){this.snackbar=n,this.spinner=l,this.router=e,this.fb=t,this.registermodel=i,this.authservice=o,this.Registrationform=new a.g({Consumer_Name:new a.e(""),Email:new a.e(""),Mobile_Number:new a.e(""),Password:new a.e("")}),this.LoginForm=new a.g({Email:new a.e(""),Password:new a.e("")})}return n.prototype.ngOnInit=function(){null!=localStorage.getItem("token")&&this.router.navigate(["/home"]),this.form=this.fb.group({avatar:[null]})},n.prototype.login=function(){var n=this;this.spinner.show(),this.authservice.login(this.LoginForm.value).subscribe(function(l){n.spinner.hide(),n.snackbar.open("Logged in Successfully","x",{duration:2e3,verticalPosition:"bottom",horizontalPosition:"end",panelClass:["mat-toolbar","mat-primary"]}),console.log(""),window.location.reload()},function(l){n.spinner.hide(),console.log(l),n.snackbar.open("Email or Password is incorrect","x",{duration:2e3,verticalPosition:"bottom",horizontalPosition:"end",panelClass:["mat-toolbar","mat-warn"]})})},n.prototype.Register=function(){var n=this;this.Registrationform.invalid||(this.Registrationform.get("Mobile_Number").patchValue("+44"+this.Registrationform.get("Mobile_Number").value),console.log(this.Registrationform.value),this.spinner.show(),this.authservice.Register(this.Registrationform.value).subscribe(function(l){n.Registrationform.reset(),n.spinner.hide(),n.snackbar.open("Logged in Successfully","x",{duration:2e3,verticalPosition:"bottom",horizontalPosition:"end",panelClass:["mat-toolbar","mat-primary"]}),window.location.reload()},function(l){n.spinner.hide(),console.log(l),n.snackbar.open(l.error,"x",{duration:2e3,verticalPosition:"bottom",horizontalPosition:"end",panelClass:["mat-toolbar","mat-warn"]}),console.log(l)}))},n}(),m=e("K9Ia"),f=(e("ihYY"),e("mrSG")),h=e("4c35"),g=e("t9fZ"),v=e("ny24"),b=e("eDkP"),y=e("lLAP"),_=e("dWZg"),k=e("dzgT"),C=e("dEwP"),w=e("6blF"),j=e("0mNj"),R=e("Gi3i"),x=e("67Y/"),S=e("p0Sj"),O=e("n6gG"),P=new Set,E=function(){function n(n){this._platform=n,this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):I}return n.prototype.matchMedia=function(n){return this._platform.WEBKIT&&function(n){if(!P.has(n))try{t||((t=document.createElement("style")).setAttribute("type","text/css"),document.head.appendChild(t)),t.sheet&&(t.sheet.insertRule("@media "+n+" {.fx-query-test{ }}",0),P.add(n))}catch(l){console.error(l)}}(n),this._matchMedia(n)},n.ngInjectableDef=Object(i["\u0275\u0275defineInjectable"])({factory:function(){return new n(Object(i["\u0275\u0275inject"])(_.a))},token:n,providedIn:"root"}),n}();function I(n){return{matches:"all"===n||""===n,media:n,addListener:function(){},removeListener:function(){}}}var q=function(){function n(n,l){this._mediaMatcher=n,this._zone=l,this._queries=new Map,this._destroySubject=new m.a}return n.prototype.ngOnDestroy=function(){this._destroySubject.next(),this._destroySubject.complete()},n.prototype.isMatched=function(n){var l=this;return A(Object(O.a)(n)).some(function(n){return l._registerQuery(n).mql.matches})},n.prototype.observe=function(n){var l=this,e=A(Object(O.a)(n)).map(function(n){return l._registerQuery(n).observable}),t=Object(k.a)(e);return(t=Object(C.a)(t.pipe(Object(g.a)(1)),t.pipe(Object(j.a)(1),Object(R.a)(0)))).pipe(Object(x.a)(function(n){var l={matches:!1,breakpoints:{}};return n.forEach(function(n){l.matches=l.matches||n.matches,l.breakpoints[n.query]=n.matches}),l}))},n.prototype._registerQuery=function(n){var l=this;if(this._queries.has(n))return this._queries.get(n);var e=this._mediaMatcher.matchMedia(n),t={observable:new w.a(function(n){var t=function(e){return l._zone.run(function(){return n.next(e)})};return e.addListener(t),function(){e.removeListener(t)}}).pipe(Object(S.a)(e),Object(x.a)(function(l){return{query:n,matches:l.matches}}),Object(v.a)(this._destroySubject)),mql:e};return this._queries.set(n,t),t},n.ngInjectableDef=Object(i["\u0275\u0275defineInjectable"])({factory:function(){return new n(Object(i["\u0275\u0275inject"])(E),Object(i["\u0275\u0275inject"])(i.NgZone))},token:n,providedIn:"root"}),n}();function A(n){return n.map(function(n){return n.split(",")}).reduce(function(n,l){return n.concat(l)}).map(function(n){return n.trim()})}var B=function(){function n(n,l){var e=this;this._overlayRef=l,this._afterDismissed=new m.a,this._afterOpened=new m.a,this._onAction=new m.a,this._dismissedByAction=!1,this.containerInstance=n,this.onAction().subscribe(function(){return e.dismiss()}),n._onExit.subscribe(function(){return e._finishDismiss()})}return n.prototype.dismiss=function(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)},n.prototype.dismissWithAction=function(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete())},n.prototype.closeWithAction=function(){this.dismissWithAction()},n.prototype._dismissAfter=function(n){var l=this;this._durationTimeoutId=setTimeout(function(){return l.dismiss()},n)},n.prototype._open=function(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())},n.prototype._finishDismiss=function(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1},n.prototype.afterDismissed=function(){return this._afterDismissed.asObservable()},n.prototype.afterOpened=function(){return this.containerInstance._onEnter},n.prototype.onAction=function(){return this._onAction.asObservable()},n}(),T=new i.InjectionToken("MatSnackBarData"),D=function(){return function(){this.politeness="assertive",this.announcementMessage="",this.duration=0,this.data=null,this.horizontalPosition="center",this.verticalPosition="bottom"}}(),M=function(){function n(n,l){this.snackBarRef=n,this.data=l}return n.prototype.action=function(){this.snackBarRef.dismissWithAction()},Object.defineProperty(n.prototype,"hasAction",{get:function(){return!!this.data.action},enumerable:!0,configurable:!0}),n}(),N=function(n){function l(l,e,t,i){var o=n.call(this)||this;return o._ngZone=l,o._elementRef=e,o._changeDetectorRef=t,o.snackBarConfig=i,o._destroyed=!1,o._onExit=new m.a,o._onEnter=new m.a,o._animationState="void",o._role="assertive"!==i.politeness||i.announcementMessage?"off"===i.politeness?null:"status":"alert",o}return Object(f.d)(l,n),l.prototype.attachComponentPortal=function(n){return this._assertNotAttached(),this._applySnackBarClasses(),this._portalOutlet.attachComponentPortal(n)},l.prototype.attachTemplatePortal=function(n){return this._assertNotAttached(),this._applySnackBarClasses(),this._portalOutlet.attachTemplatePortal(n)},l.prototype.onAnimationEnd=function(n){var l=n.toState;if(("void"===l&&"void"!==n.fromState||"hidden"===l)&&this._completeExit(),"visible"===l){var e=this._onEnter;this._ngZone.run(function(){e.next(),e.complete()})}},l.prototype.enter=function(){this._destroyed||(this._animationState="visible",this._changeDetectorRef.detectChanges())},l.prototype.exit=function(){return this._animationState="hidden",this._onExit},l.prototype.ngOnDestroy=function(){this._destroyed=!0,this._completeExit()},l.prototype._completeExit=function(){var n=this;this._ngZone.onMicrotaskEmpty.asObservable().pipe(Object(g.a)(1)).subscribe(function(){n._onExit.next(),n._onExit.complete()})},l.prototype._applySnackBarClasses=function(){var n=this._elementRef.nativeElement,l=this.snackBarConfig.panelClass;l&&(Array.isArray(l)?l.forEach(function(l){return n.classList.add(l)}):n.classList.add(l)),"center"===this.snackBarConfig.horizontalPosition&&n.classList.add("mat-snack-bar-center"),"top"===this.snackBarConfig.verticalPosition&&n.classList.add("mat-snack-bar-top")},l.prototype._assertNotAttached=function(){if(this._portalOutlet.hasAttached())throw Error("Attempting to attach snack bar content after content is already attached")},l}(h.a),L=function(){return function(){}}(),z=new i.InjectionToken("mat-snack-bar-default-options",{providedIn:"root",factory:function(){return new D}}),F=function(){function n(n,l,e,t,i,o){this._overlay=n,this._live=l,this._injector=e,this._breakpointObserver=t,this._parentSnackBar=i,this._defaultConfig=o,this._snackBarRefAtThisLevel=null}return Object.defineProperty(n.prototype,"_openedSnackBarRef",{get:function(){var n=this._parentSnackBar;return n?n._openedSnackBarRef:this._snackBarRefAtThisLevel},set:function(n){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=n:this._snackBarRefAtThisLevel=n},enumerable:!0,configurable:!0}),n.prototype.openFromComponent=function(n,l){return this._attach(n,l)},n.prototype.openFromTemplate=function(n,l){return this._attach(n,l)},n.prototype.open=function(n,l,e){void 0===l&&(l="");var t=Object(f.a)({},this._defaultConfig,e);return t.data={message:n,action:l},t.announcementMessage||(t.announcementMessage=n),this.openFromComponent(M,t)},n.prototype.dismiss=function(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()},n.prototype.ngOnDestroy=function(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()},n.prototype._attachSnackBarContainer=function(n,l){var e=new h.e(l&&l.viewContainerRef&&l.viewContainerRef.injector||this._injector,new WeakMap([[D,l]])),t=new h.c(N,l.viewContainerRef,e),i=n.attach(t);return i.instance.snackBarConfig=l,i.instance},n.prototype._attach=function(n,l){var e=Object(f.a)({},new D,this._defaultConfig,l),t=this._createOverlay(e),o=this._attachSnackBarContainer(t,e),u=new B(o,t);if(n instanceof i.TemplateRef){var a=new h.g(n,null,{$implicit:e.data,snackBarRef:u});u.instance=o.attachTemplatePortal(a)}else{var r=this._createInjector(e,u),s=(a=new h.c(n,void 0,r),o.attachComponentPortal(a));u.instance=s.instance}return this._breakpointObserver.observe("(max-width: 599.99px) and (orientation: portrait)").pipe(Object(v.a)(t.detachments())).subscribe(function(n){var l=t.overlayElement.classList;n.matches?l.add("mat-snack-bar-handset"):l.remove("mat-snack-bar-handset")}),this._animateSnackBar(u,e),this._openedSnackBarRef=u,this._openedSnackBarRef},n.prototype._animateSnackBar=function(n,l){var e=this;n.afterDismissed().subscribe(function(){e._openedSnackBarRef==n&&(e._openedSnackBarRef=null),l.announcementMessage&&e._live.clear()}),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(function(){n.containerInstance.enter()}),this._openedSnackBarRef.dismiss()):n.containerInstance.enter(),l.duration&&l.duration>0&&n.afterOpened().subscribe(function(){return n._dismissAfter(l.duration)}),l.announcementMessage&&this._live.announce(l.announcementMessage,l.politeness)},n.prototype._createOverlay=function(n){var l=new b.b;l.direction=n.direction;var e=this._overlay.position().global(),t="rtl"===n.direction,i="left"===n.horizontalPosition||"start"===n.horizontalPosition&&!t||"end"===n.horizontalPosition&&t,o=!i&&"center"!==n.horizontalPosition;return i?e.left("0"):o?e.right("0"):e.centerHorizontally(),"top"===n.verticalPosition?e.top("0"):e.bottom("0"),l.positionStrategy=e,this._overlay.create(l)},n.prototype._createInjector=function(n,l){return new h.e(n&&n.viewContainerRef&&n.viewContainerRef.injector||this._injector,new WeakMap([[B,l],[T,n.data]]))},n.ngInjectableDef=Object(i["\u0275\u0275defineInjectable"])({factory:function(){return new n(Object(i["\u0275\u0275inject"])(b.a),Object(i["\u0275\u0275inject"])(y.c),Object(i["\u0275\u0275inject"])(i.INJECTOR),Object(i["\u0275\u0275inject"])(q),Object(i["\u0275\u0275inject"])(n,12),Object(i["\u0275\u0275inject"])(z))},token:n,providedIn:L}),n}(),V=e("ZYCi"),Z=i["\u0275crt"]({encapsulation:0,styles:[[".background[_ngcontent-%COMP%]{background-image:url(background.3cc32dd94a4e6d8e1faa.jpg);background-repeat:no-repeat;background-size:cover;background-position:center;background-attachment:fixed}"]],data:{}});function U(n){return i["\u0275vid"](0,[(n()(),i["\u0275eld"](0,0,null,null,100,"main",[["class","background"],["role","main"]],null,null,null,null,null)),(n()(),i["\u0275eld"](1,0,null,null,99,"div",[["class","container-fluid"]],null,null,null,null,null)),(n()(),i["\u0275eld"](2,0,null,null,98,"div",[["class","row register-login align-items-center"]],null,null,null,null,null)),(n()(),i["\u0275eld"](3,0,null,null,97,"div",[["class","col d-flex justify-content-center"]],null,null,null,null,null)),(n()(),i["\u0275eld"](4,0,null,null,96,"div",[["class","wrapper d-flex flex-column justify-content-center align-items-center"]],null,null,null,null,null)),(n()(),i["\u0275eld"](5,0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),i["\u0275ted"](-1,null,["Login or Register to continue with Checkout"])),(n()(),i["\u0275eld"](7,0,null,null,6,"ul",[["class","nav nav-tabs d-flex mt-4"],["id","myTab"],["role","tablist"]],null,null,null,null,null)),(n()(),i["\u0275eld"](8,0,null,null,2,"li",[["class","nav-item flex-grow-1"]],null,null,null,null,null)),(n()(),i["\u0275eld"](9,0,null,null,1,"a",[["aria-controls","signin"],["aria-selected","true"],["class","nav-link d-block active btn tab-signin"],["data-toggle","tab"],["href","#signin"],["id","tab-signin"],["role","tab"]],null,null,null,null,null)),(n()(),i["\u0275ted"](-1,null,["Sign In"])),(n()(),i["\u0275eld"](11,0,null,null,2,"li",[["class","nav-item flex-grow-1"]],null,null,null,null,null)),(n()(),i["\u0275eld"](12,0,null,null,1,"a",[["aria-controls","register"],["aria-selected","false"],["class","nav-link d-block btn tab-register"],["data-toggle","tab"],["href","#register"],["id","tab-register"],["role","tab"]],null,null,null,null,null)),(n()(),i["\u0275ted"](-1,null,["Register"])),(n()(),i["\u0275eld"](14,0,null,null,86,"div",[["class","tab-content w-100"],["id","myTabContent"]],null,null,null,null,null)),(n()(),i["\u0275eld"](15,0,null,null,29,"div",[["aria-labelledby","tab-sigin"],["class","tab-pane fade show active"],["id","signin"],["role","tabpanel"]],null,null,null,null,null)),(n()(),i["\u0275eld"](16,0,null,null,28,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(n,l,e){var t=!0;return"submit"===l&&(t=!1!==i["\u0275nov"](n,18).onSubmit(e)&&t),"reset"===l&&(t=!1!==i["\u0275nov"](n,18).onReset()&&t),t},null,null)),i["\u0275did"](17,16384,null,0,a.w,[],null,null),i["\u0275did"](18,540672,null,0,a.h,[[8,null],[8,null]],{form:[0,"form"]},null),i["\u0275prd"](2048,null,a.b,null,[a.h]),i["\u0275did"](20,16384,null,0,a.n,[[4,a.b]],null,null),(n()(),i["\u0275eld"](21,0,null,null,10,"div",[["class","form-group mt-4"]],null,null,null,null,null)),(n()(),i["\u0275eld"](22,0,null,null,1,"label",[["for","email"]],null,null,null,null,null)),(n()(),i["\u0275ted"](-1,null,["Email address"])),(n()(),i["\u0275eld"](24,0,null,null,7,"input",[["class","form-control"],["formControlName","Email"],["id","username"],["name","username"],["placeholder","Enter your email address"],["required","true"],["type","email"],["value",""]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,e){var t=!0;return"input"===l&&(t=!1!==i["\u0275nov"](n,25)._handleInput(e.target.value)&&t),"blur"===l&&(t=!1!==i["\u0275nov"](n,25).onTouched()&&t),"compositionstart"===l&&(t=!1!==i["\u0275nov"](n,25)._compositionStart()&&t),"compositionend"===l&&(t=!1!==i["\u0275nov"](n,25)._compositionEnd(e.target.value)&&t),t},null,null)),i["\u0275did"](25,16384,null,0,a.c,[i.Renderer2,i.ElementRef,[2,a.a]],null,null),i["\u0275did"](26,16384,null,0,a.s,[],{required:[0,"required"]},null),i["\u0275prd"](1024,null,a.j,function(n){return[n]},[a.s]),i["\u0275prd"](1024,null,a.k,function(n){return[n]},[a.c]),i["\u0275did"](29,671744,null,0,a.f,[[3,a.b],[6,a.j],[8,null],[6,a.k],[2,a.v]],{name:[0,"name"]},null),i["\u0275prd"](2048,null,a.l,null,[a.f]),i["\u0275did"](31,16384,null,0,a.m,[[4,a.l]],null,null),(n()(),i["\u0275eld"](32,0,null,null,10,"div",[["class","form-group mt-4"]],null,null,null,null,null)),(n()(),i["\u0275eld"](33,0,null,null,1,"label",[["for","password"]],null,null,null,null,null)),(n()(),i["\u0275ted"](-1,null,["Password"])),(n()(),i["\u0275eld"](35,0,null,null,7,"input",[["class","form-control"],["formControlName","Password"],["name","password"],["placeholder","Enter your password"],["required","true"],["type","password"],["value",""]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,e){var t=!0;return"input"===l&&(t=!1!==i["\u0275nov"](n,36)._handleInput(e.target.value)&&t),"blur"===l&&(t=!1!==i["\u0275nov"](n,36).onTouched()&&t),"compositionstart"===l&&(t=!1!==i["\u0275nov"](n,36)._compositionStart()&&t),"compositionend"===l&&(t=!1!==i["\u0275nov"](n,36)._compositionEnd(e.target.value)&&t),t},null,null)),i["\u0275did"](36,16384,null,0,a.c,[i.Renderer2,i.ElementRef,[2,a.a]],null,null),i["\u0275did"](37,16384,null,0,a.s,[],{required:[0,"required"]},null),i["\u0275prd"](1024,null,a.j,function(n){return[n]},[a.s]),i["\u0275prd"](1024,null,a.k,function(n){return[n]},[a.c]),i["\u0275did"](40,671744,null,0,a.f,[[3,a.b],[6,a.j],[8,null],[6,a.k],[2,a.v]],{name:[0,"name"]},null),i["\u0275prd"](2048,null,a.l,null,[a.f]),i["\u0275did"](42,16384,null,0,a.m,[[4,a.l]],null,null),(n()(),i["\u0275eld"](43,0,null,null,1,"button",[["class","btn btn-primary btn-signin"],["type","submit"]],null,[[null,"click"]],function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.login()&&t),t},null,null)),(n()(),i["\u0275ted"](-1,null,["Sign In"])),(n()(),i["\u0275eld"](45,0,null,null,55,"div",[["aria-labelledby","tab-register"],["class","tab-pane fade"],["id","register"],["role","tabpanel"]],null,null,null,null,null)),(n()(),i["\u0275eld"](46,0,null,null,54,"form",[["action","https://www.eatmubarak.pk/signup"],["method","post"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(n,l,e){var t=!0;return"submit"===l&&(t=!1!==i["\u0275nov"](n,48).onSubmit(e)&&t),"reset"===l&&(t=!1!==i["\u0275nov"](n,48).onReset()&&t),t},null,null)),i["\u0275did"](47,16384,null,0,a.w,[],null,null),i["\u0275did"](48,540672,null,0,a.h,[[8,null],[8,null]],{form:[0,"form"]},null),i["\u0275prd"](2048,null,a.b,null,[a.h]),i["\u0275did"](50,16384,null,0,a.n,[[4,a.b]],null,null),(n()(),i["\u0275eld"](51,0,null,null,0,"input",[["name","_token"],["type","hidden"],["value","U2V7E9bLAlQ00yr630cZFwqf7OfdmeCsphKgSpg2"]],null,null,null,null,null)),(n()(),i["\u0275eld"](52,0,null,null,10,"div",[["class","form-group mt-4 mb-1"]],null,null,null,null,null)),(n()(),i["\u0275eld"](53,0,null,null,1,"label",[["for","fullname"]],null,null,null,null,null)),(n()(),i["\u0275ted"](-1,null,[" Name"])),(n()(),i["\u0275eld"](55,0,null,null,7,"input",[["class","form-control"],["formControlName","Consumer_Name"],["id","fullname"],["placeholder","Enter your full name"],["required",""],["type","text"],["value",""]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,e){var t=!0;return"input"===l&&(t=!1!==i["\u0275nov"](n,56)._handleInput(e.target.value)&&t),"blur"===l&&(t=!1!==i["\u0275nov"](n,56).onTouched()&&t),"compositionstart"===l&&(t=!1!==i["\u0275nov"](n,56)._compositionStart()&&t),"compositionend"===l&&(t=!1!==i["\u0275nov"](n,56)._compositionEnd(e.target.value)&&t),t},null,null)),i["\u0275did"](56,16384,null,0,a.c,[i.Renderer2,i.ElementRef,[2,a.a]],null,null),i["\u0275did"](57,16384,null,0,a.s,[],{required:[0,"required"]},null),i["\u0275prd"](1024,null,a.j,function(n){return[n]},[a.s]),i["\u0275prd"](1024,null,a.k,function(n){return[n]},[a.c]),i["\u0275did"](60,671744,null,0,a.f,[[3,a.b],[6,a.j],[8,null],[6,a.k],[2,a.v]],{name:[0,"name"]},null),i["\u0275prd"](2048,null,a.l,null,[a.f]),i["\u0275did"](62,16384,null,0,a.m,[[4,a.l]],null,null),(n()(),i["\u0275eld"](63,0,null,null,10,"div",[["class","form-group mt-4"]],null,null,null,null,null)),(n()(),i["\u0275eld"](64,0,null,null,1,"label",[["for","email"]],null,null,null,null,null)),(n()(),i["\u0275ted"](-1,null,["Email"])),(n()(),i["\u0275eld"](66,0,null,null,7,"input",[["class","form-control"],["formControlName","Email"],["id","email"],["placeholder","Enter your email address"],["required",""],["type","email"],["value",""]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,e){var t=!0;return"input"===l&&(t=!1!==i["\u0275nov"](n,67)._handleInput(e.target.value)&&t),"blur"===l&&(t=!1!==i["\u0275nov"](n,67).onTouched()&&t),"compositionstart"===l&&(t=!1!==i["\u0275nov"](n,67)._compositionStart()&&t),"compositionend"===l&&(t=!1!==i["\u0275nov"](n,67)._compositionEnd(e.target.value)&&t),t},null,null)),i["\u0275did"](67,16384,null,0,a.c,[i.Renderer2,i.ElementRef,[2,a.a]],null,null),i["\u0275did"](68,16384,null,0,a.s,[],{required:[0,"required"]},null),i["\u0275prd"](1024,null,a.j,function(n){return[n]},[a.s]),i["\u0275prd"](1024,null,a.k,function(n){return[n]},[a.c]),i["\u0275did"](71,671744,null,0,a.f,[[3,a.b],[6,a.j],[8,null],[6,a.k],[2,a.v]],{name:[0,"name"]},null),i["\u0275prd"](2048,null,a.l,null,[a.f]),i["\u0275did"](73,16384,null,0,a.m,[[4,a.l]],null,null),(n()(),i["\u0275eld"](74,0,null,null,1,"label",[["class","mt-2"],["for","mobile-number"]],null,null,null,null,null)),(n()(),i["\u0275ted"](-1,null,["Mobile Number"])),(n()(),i["\u0275eld"](76,0,null,null,11,"div",[["class","input-group"]],null,null,null,null,null)),(n()(),i["\u0275eld"](77,0,null,null,2,"div",[["class","input-group-prepend"]],null,null,null,null,null)),(n()(),i["\u0275eld"](78,0,null,null,1,"span",[["class","input-group-text"]],null,null,null,null,null)),(n()(),i["\u0275ted"](-1,null,["+44"])),(n()(),i["\u0275eld"](80,0,null,null,7,"input",[["class","form-control"],["formControlName","Mobile_Number"],["id","mobile-number"],["placeholder","Enter your mobile number"],["required",""],["type","text"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,e){var t=!0;return"input"===l&&(t=!1!==i["\u0275nov"](n,81)._handleInput(e.target.value)&&t),"blur"===l&&(t=!1!==i["\u0275nov"](n,81).onTouched()&&t),"compositionstart"===l&&(t=!1!==i["\u0275nov"](n,81)._compositionStart()&&t),"compositionend"===l&&(t=!1!==i["\u0275nov"](n,81)._compositionEnd(e.target.value)&&t),t},null,null)),i["\u0275did"](81,16384,null,0,a.c,[i.Renderer2,i.ElementRef,[2,a.a]],null,null),i["\u0275did"](82,16384,null,0,a.s,[],{required:[0,"required"]},null),i["\u0275prd"](1024,null,a.j,function(n){return[n]},[a.s]),i["\u0275prd"](1024,null,a.k,function(n){return[n]},[a.c]),i["\u0275did"](85,671744,null,0,a.f,[[3,a.b],[6,a.j],[8,null],[6,a.k],[2,a.v]],{name:[0,"name"]},null),i["\u0275prd"](2048,null,a.l,null,[a.f]),i["\u0275did"](87,16384,null,0,a.m,[[4,a.l]],null,null),(n()(),i["\u0275eld"](88,0,null,null,10,"div",[["class","form-group mt-4 mb-4"]],null,null,null,null,null)),(n()(),i["\u0275eld"](89,0,null,null,1,"label",[["for","password"]],null,null,null,null,null)),(n()(),i["\u0275ted"](-1,null,["Password"])),(n()(),i["\u0275eld"](91,0,null,null,7,"input",[["class","form-control"],["formControlName","Password"],["placeholder","Enter your password"],["required",""],["type","password"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,e){var t=!0;return"input"===l&&(t=!1!==i["\u0275nov"](n,92)._handleInput(e.target.value)&&t),"blur"===l&&(t=!1!==i["\u0275nov"](n,92).onTouched()&&t),"compositionstart"===l&&(t=!1!==i["\u0275nov"](n,92)._compositionStart()&&t),"compositionend"===l&&(t=!1!==i["\u0275nov"](n,92)._compositionEnd(e.target.value)&&t),t},null,null)),i["\u0275did"](92,16384,null,0,a.c,[i.Renderer2,i.ElementRef,[2,a.a]],null,null),i["\u0275did"](93,16384,null,0,a.s,[],{required:[0,"required"]},null),i["\u0275prd"](1024,null,a.j,function(n){return[n]},[a.s]),i["\u0275prd"](1024,null,a.k,function(n){return[n]},[a.c]),i["\u0275did"](96,671744,null,0,a.f,[[3,a.b],[6,a.j],[8,null],[6,a.k],[2,a.v]],{name:[0,"name"]},null),i["\u0275prd"](2048,null,a.l,null,[a.f]),i["\u0275did"](98,16384,null,0,a.m,[[4,a.l]],null,null),(n()(),i["\u0275eld"](99,0,null,null,1,"button",[["class","btn btn-primary btn-register"],["type","submit"]],[[8,"disabled",0]],[[null,"click"]],function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.Register()&&t),t},null,null)),(n()(),i["\u0275ted"](-1,null,["Register"])),(n()(),i["\u0275eld"](101,0,null,null,3,"ngx-spinner",[["bdColor","rgba(0, 0, 0, 0.8)"],["color","#f40a0a"],["size","large"],["type","square-jelly-box"]],null,null,null,r.b,r.a)),i["\u0275did"](102,770048,null,0,s.a,[s.c,i.ChangeDetectorRef],{bdColor:[0,"bdColor"],size:[1,"size"],color:[2,"color"],type:[3,"type"],fullScreen:[4,"fullScreen"]},null),(n()(),i["\u0275eld"](103,0,null,0,1,"p",[["style","color: white"]],null,null,null,null,null)),(n()(),i["\u0275ted"](-1,null,[" Deliver Hub "]))],function(n,l){var e=l.component;n(l,18,0,e.LoginForm),n(l,26,0,"true"),n(l,29,0,"Email"),n(l,37,0,"true"),n(l,40,0,"Password"),n(l,48,0,e.Registrationform),n(l,57,0,""),n(l,60,0,"Consumer_Name"),n(l,68,0,""),n(l,71,0,"Email"),n(l,82,0,""),n(l,85,0,"Mobile_Number"),n(l,93,0,""),n(l,96,0,"Password"),n(l,102,0,"rgba(0, 0, 0, 0.8)","large","#f40a0a","square-jelly-box",!0)},function(n,l){var e=l.component;n(l,16,0,i["\u0275nov"](l,20).ngClassUntouched,i["\u0275nov"](l,20).ngClassTouched,i["\u0275nov"](l,20).ngClassPristine,i["\u0275nov"](l,20).ngClassDirty,i["\u0275nov"](l,20).ngClassValid,i["\u0275nov"](l,20).ngClassInvalid,i["\u0275nov"](l,20).ngClassPending),n(l,24,0,i["\u0275nov"](l,26).required?"":null,i["\u0275nov"](l,31).ngClassUntouched,i["\u0275nov"](l,31).ngClassTouched,i["\u0275nov"](l,31).ngClassPristine,i["\u0275nov"](l,31).ngClassDirty,i["\u0275nov"](l,31).ngClassValid,i["\u0275nov"](l,31).ngClassInvalid,i["\u0275nov"](l,31).ngClassPending),n(l,35,0,i["\u0275nov"](l,37).required?"":null,i["\u0275nov"](l,42).ngClassUntouched,i["\u0275nov"](l,42).ngClassTouched,i["\u0275nov"](l,42).ngClassPristine,i["\u0275nov"](l,42).ngClassDirty,i["\u0275nov"](l,42).ngClassValid,i["\u0275nov"](l,42).ngClassInvalid,i["\u0275nov"](l,42).ngClassPending),n(l,46,0,i["\u0275nov"](l,50).ngClassUntouched,i["\u0275nov"](l,50).ngClassTouched,i["\u0275nov"](l,50).ngClassPristine,i["\u0275nov"](l,50).ngClassDirty,i["\u0275nov"](l,50).ngClassValid,i["\u0275nov"](l,50).ngClassInvalid,i["\u0275nov"](l,50).ngClassPending),n(l,55,0,i["\u0275nov"](l,57).required?"":null,i["\u0275nov"](l,62).ngClassUntouched,i["\u0275nov"](l,62).ngClassTouched,i["\u0275nov"](l,62).ngClassPristine,i["\u0275nov"](l,62).ngClassDirty,i["\u0275nov"](l,62).ngClassValid,i["\u0275nov"](l,62).ngClassInvalid,i["\u0275nov"](l,62).ngClassPending),n(l,66,0,i["\u0275nov"](l,68).required?"":null,i["\u0275nov"](l,73).ngClassUntouched,i["\u0275nov"](l,73).ngClassTouched,i["\u0275nov"](l,73).ngClassPristine,i["\u0275nov"](l,73).ngClassDirty,i["\u0275nov"](l,73).ngClassValid,i["\u0275nov"](l,73).ngClassInvalid,i["\u0275nov"](l,73).ngClassPending),n(l,80,0,i["\u0275nov"](l,82).required?"":null,i["\u0275nov"](l,87).ngClassUntouched,i["\u0275nov"](l,87).ngClassTouched,i["\u0275nov"](l,87).ngClassPristine,i["\u0275nov"](l,87).ngClassDirty,i["\u0275nov"](l,87).ngClassValid,i["\u0275nov"](l,87).ngClassInvalid,i["\u0275nov"](l,87).ngClassPending),n(l,91,0,i["\u0275nov"](l,93).required?"":null,i["\u0275nov"](l,98).ngClassUntouched,i["\u0275nov"](l,98).ngClassTouched,i["\u0275nov"](l,98).ngClassPristine,i["\u0275nov"](l,98).ngClassDirty,i["\u0275nov"](l,98).ngClassValid,i["\u0275nov"](l,98).ngClassInvalid,i["\u0275nov"](l,98).ngClassPending),n(l,99,0,!e.Registrationform.valid)})}function W(n){return i["\u0275vid"](0,[(n()(),i["\u0275eld"](0,0,null,null,1,"app-Login",[],null,null,null,U,Z)),i["\u0275did"](1,114688,null,0,p,[F,s.c,V.k,a.d,c,d.a],null,null)],function(n,l){n(l,1,0)},null)}var Y=i["\u0275ccf"]("app-Login",p,W,{},{},[]),G=e("Ip0R"),J=e("Fzqc"),Q=e("qAlS"),H=e("Wf4p"),K=e("ZYjt"),$=e("UodH"),X=e("bujt"),nn=e("wFw1"),ln=i["\u0275crt"]({encapsulation:2,styles:[".mat-snack-bar-container{border-radius:4px;box-sizing:border-box;display:block;margin:24px;max-width:33vw;min-width:344px;padding:14px 16px;min-height:48px;transform-origin:center}@media (-ms-high-contrast:active){.mat-snack-bar-container{border:solid 1px}}.mat-snack-bar-handset{width:100%}.mat-snack-bar-handset .mat-snack-bar-container{margin:8px;max-width:100%;min-width:0;width:100%}"],data:{animation:[{type:7,name:"state",definitions:[{type:0,name:"void, hidden",styles:{type:6,styles:{transform:"scale(0.8)",opacity:0},offset:null},options:void 0},{type:0,name:"visible",styles:{type:6,styles:{transform:"scale(1)",opacity:1},offset:null},options:void 0},{type:1,expr:"* => visible",animation:{type:4,styles:null,timings:"150ms cubic-bezier(0, 0, 0.2, 1)"},options:null},{type:1,expr:"* => void, * => hidden",animation:{type:4,styles:{type:6,styles:{opacity:0},offset:null},timings:"75ms cubic-bezier(0.4, 0.0, 1, 1)"},options:null}],options:{}}]}});function en(n){return i["\u0275vid"](0,[(n()(),i["\u0275and"](0,null,null,0))],null,null)}function tn(n){return i["\u0275vid"](0,[i["\u0275qud"](402653184,1,{_portalOutlet:0}),(n()(),i["\u0275and"](16777216,null,null,1,null,en)),i["\u0275did"](2,212992,[[1,4]],0,h.b,[i.ComponentFactoryResolver,i.ViewContainerRef],{portal:[0,"portal"]},null)],function(n,l){n(l,2,0,"")},null)}function on(n){return i["\u0275vid"](0,[(n()(),i["\u0275eld"](0,0,null,null,1,"snack-bar-container",[["class","mat-snack-bar-container"]],[[1,"role",0],[40,"@state",0]],[["component","@state.done"]],function(n,l,e){var t=!0;return"component:@state.done"===l&&(t=!1!==i["\u0275nov"](n,1).onAnimationEnd(e)&&t),t},tn,ln)),i["\u0275did"](1,180224,null,0,N,[i.NgZone,i.ElementRef,i.ChangeDetectorRef,D],null,null)],null,function(n,l){n(l,0,0,i["\u0275nov"](l,1)._role,i["\u0275nov"](l,1)._animationState)})}var un=i["\u0275ccf"]("snack-bar-container",N,on,{},{},[]),an=i["\u0275crt"]({encapsulation:2,styles:[".mat-simple-snackbar{display:flex;justify-content:space-between;align-items:center;line-height:20px;opacity:1}.mat-simple-snackbar-action{flex-shrink:0;margin:-8px -8px -8px 8px}.mat-simple-snackbar-action button{max-height:36px;min-width:0}[dir=rtl] .mat-simple-snackbar-action{margin-left:-8px;margin-right:8px}"],data:{}});function rn(n){return i["\u0275vid"](0,[(n()(),i["\u0275eld"](0,0,null,null,3,"div",[["class","mat-simple-snackbar-action"]],null,null,null,null,null)),(n()(),i["\u0275eld"](1,0,null,null,2,"button",[["mat-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.action()&&t),t},X.b,X.a)),i["\u0275did"](2,180224,null,0,$.b,[i.ElementRef,y.a,[2,nn.a]],null,null),(n()(),i["\u0275ted"](3,0,["",""]))],null,function(n,l){var e=l.component;n(l,1,0,i["\u0275nov"](l,2).disabled||null,"NoopAnimations"===i["\u0275nov"](l,2)._animationMode),n(l,3,0,e.data.action)})}function sn(n){return i["\u0275vid"](2,[(n()(),i["\u0275eld"](0,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),i["\u0275ted"](1,null,["",""])),(n()(),i["\u0275and"](16777216,null,null,1,null,rn)),i["\u0275did"](3,16384,null,0,G.l,[i.ViewContainerRef,i.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(n,l){n(l,3,0,l.component.hasAction)},function(n,l){n(l,1,0,l.component.data.message)})}function cn(n){return i["\u0275vid"](0,[(n()(),i["\u0275eld"](0,0,null,null,1,"simple-snack-bar",[["class","mat-simple-snackbar"]],null,null,null,sn,an)),i["\u0275did"](1,49152,null,0,M,[B,T],null,null)],null,null)}var dn=i["\u0275ccf"]("simple-snack-bar",M,cn,{},{},[]),pn=function(){return function(){}}();e.d(l,"AuthModuleNgFactory",function(){return mn});var mn=i["\u0275cmf"](o,[],function(n){return i["\u0275mod"]([i["\u0275mpd"](512,i.ComponentFactoryResolver,i["\u0275CodegenComponentFactoryResolver"],[[8,[u.a,Y,un,dn]],[3,i.ComponentFactoryResolver],i.NgModuleRef]),i["\u0275mpd"](4608,G.n,G.m,[i.LOCALE_ID,[2,G.z]]),i["\u0275mpd"](4608,a.u,a.u,[]),i["\u0275mpd"](4608,a.d,a.d,[]),i["\u0275mpd"](4608,b.a,b.a,[b.g,b.c,i.ComponentFactoryResolver,b.f,b.d,i.Injector,i.NgZone,G.c,J.b,[2,G.i]]),i["\u0275mpd"](5120,b.h,b.i,[b.a]),i["\u0275mpd"](4608,c,c,[]),i["\u0275mpd"](1073742336,G.b,G.b,[]),i["\u0275mpd"](1073742336,V.n,V.n,[[2,V.s],[2,V.k]]),i["\u0275mpd"](1073742336,pn,pn,[]),i["\u0275mpd"](1073742336,a.t,a.t,[]),i["\u0275mpd"](1073742336,a.i,a.i,[]),i["\u0275mpd"](1073742336,a.r,a.r,[]),i["\u0275mpd"](1073742336,s.b,s.b,[]),i["\u0275mpd"](1073742336,J.a,J.a,[]),i["\u0275mpd"](1073742336,h.f,h.f,[]),i["\u0275mpd"](1073742336,_.b,_.b,[]),i["\u0275mpd"](1073742336,Q.b,Q.b,[]),i["\u0275mpd"](1073742336,b.e,b.e,[]),i["\u0275mpd"](1073742336,H.c,H.c,[[2,H.a],[2,K.f]]),i["\u0275mpd"](1073742336,H.e,H.e,[]),i["\u0275mpd"](1073742336,$.c,$.c,[]),i["\u0275mpd"](1073742336,L,L,[]),i["\u0275mpd"](1073742336,o,o,[]),i["\u0275mpd"](1024,V.i,function(){return[[{path:"",component:p}]]},[])])})}}]);