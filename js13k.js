function SfxrParams(){this.setSettings=function(t){for(var e=0;24>e;e++)this[String.fromCharCode(97+e)]=t[e]||0;this.c<.01&&(this.c=.01);var i=this.b+this.c+this.e;if(.18>i){var s=.18/i;this.b*=s,this.c*=s,this.e*=s}}}function SfxrSynth(){this._params=new SfxrParams;var t,e,i,s,a,r,h,n,o,c,l,p;this.reset=function(){var t=this._params;s=100/(t.f*t.f+.001),a=100/(t.g*t.g+.001),r=1-t.h*t.h*t.h*.01,h=-t.i*t.i*t.i*1e-6,t.a||(l=.5-t.n/2,p=5e-5*-t.o),n=1+t.l*t.l*(t.l>0?-.9:10),o=0,c=1==t.m?0:(1-t.m)*(1-t.m)*2e4+32},this.totalReset=function(){this.reset();var s=this._params;return t=s.b*s.b*1e5,e=s.c*s.c*1e5,i=s.e*s.e*1e5+12,3*((t+e+i)/3|0)},this.synthWave=function(d,u){var g=this._params,f=1!=g.s||g.v,v=g.v*g.v*.1,m=1+3e-4*g.w,y=g.s*g.s*g.s*.1,w=1+1e-4*g.t,x=1!=g.s,b=g.x*g.x,S=g.g,I=g.q||g.r,T=g.r*g.r*g.r*.2,k=g.q*g.q*(g.q<0?-1020:1020),P=g.p?((1-g.p)*(1-g.p)*2e4|0)+32:0,M=g.d,C=g.j/2,z=g.k*g.k*.01,E=g.a,A=t,D=1/t,O=1/e,L=1/i,G=5/(1+g.u*g.u*20)*(.01+y);G>.8&&(G=.8),G=1-G;for(var R,W,X,Y,N,B,U=!1,q=0,_=0,j=0,K=0,J=0,F=0,H=0,Q=0,V=0,Z=0,$=new Array(1024),te=new Array(32),ee=$.length;ee--;)$[ee]=0;for(var ee=te.length;ee--;)te[ee]=2*Math.random()-1;for(var ee=0;u>ee;ee++){if(U)return ee;if(P&&++V>=P&&(V=0,this.reset()),c&&++o>=c&&(c=0,s*=n),r+=h,s*=r,s>a&&(s=a,S>0&&(U=!0)),W=s,C>0&&(Z+=z,W*=1+Math.sin(Z)*C),W|=0,8>W&&(W=8),E||(l+=p,0>l?l=0:l>.5&&(l=.5)),++_>A)switch(_=0,++q){case 1:A=e;break;case 2:A=i}switch(q){case 0:j=_*D;break;case 1:j=1+2*(1-_*O)*M;break;case 2:j=1-_*L;break;case 3:j=0,U=!0}I&&(k+=T,X=0|k,0>X?X=-X:X>1023&&(X=1023)),f&&m&&(v*=m,1e-5>v?v=1e-5:v>.1&&(v=.1)),B=0;for(var ie=8;ie--;){if(H++,H>=W&&(H%=W,3==E))for(var se=te.length;se--;)te[se]=2*Math.random()-1;switch(E){case 0:N=l>H/W?.5:-.5;break;case 1:N=1-H/W*2;break;case 2:Y=H/W,Y=6.28318531*(Y>.5?Y-1:Y),N=1.27323954*Y+.405284735*Y*Y*(0>Y?1:-1),N=.225*((0>N?-1:1)*N*N-N)+N;break;case 3:N=te[Math.abs(32*H/W|0)]}f&&(R=F,y*=w,0>y?y=0:y>.1&&(y=.1),x?(J+=(N-F)*y,J*=G):(F=N,J=0),F+=J,K+=F-R,K*=1-v,N=K),I&&($[Q%1024]=N,N+=$[(Q-X+1024)%1024],Q++),B+=N}B*=.125*j*b,d[ee]=B>=1?32767:-1>=B?-32768:32767*B|0}return u}}var synth=new SfxrSynth;window.jsfxr=function(t){synth._params.setSettings(t);var e=synth.totalReset(),i=new Uint8Array(4*((e+1)/2|0)+44),s=2*synth.synthWave(new Uint16Array(i.buffer,44),e),a=new Uint32Array(i.buffer,0,44);a[0]=1179011410,a[1]=s+36,a[2]=1163280727,a[3]=544501094,a[4]=16,a[5]=65537,a[6]=44100,a[7]=88200,a[8]=1048578,a[9]=1635017060,a[10]=s,s+=44;for(var r=0,h="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",n="data:audio/wav;base64,";s>r;r+=3){var o=i[r]<<16|i[r+1]<<8|i[r+2];n+=h[o>>18]+h[o>>12&63]+h[o>>6&63]+h[63&o]}return n};var ArcadeAudio=function(){this.sounds={}};ArcadeAudio.prototype.add=function(t,e,i){var s,a;for(this.sounds[t]={tick:0,count:e,pool:[]},s=0;e>s;s++)a=new Audio,a.src=jsfxr(i),this.sounds[t].pool.push(a)},ArcadeAudio.prototype.play=function(t){var e=this.sounds[t];e.pool[e.tick].play(),e.tick=e.tick<e.count-1?e.tick+1:0};var Colours=function(){this.menu={main:"#b88f3d",dark:"#c3a364",light:"#e7c176"},this.earth={main:"rgb(50, 150, 50)",dark:"#509c50",light:"#65c655"},this.air={main:"rgba(255, 255, 255, 0.5)",dark:"#fff",light:"rgba(255, 255, 255, 0.1)"},this.player={main:"#b88f3d",dark:"#c3a364",light:"#e7c176"},this.water={main:"rgba(0, 63, 127, 0.9)",dark:"#495b83",light:"#637ab0"},this.fire={main:"rgba(250, 60, 50, 0.8)",dark:"#c36464",light:"#e77676"}},Emitter=function(t,e,i){this.colours=new Colours,this.gradient={water:t.createRadialGradient(-2,-2,0,0,0,6),smoke:t.createRadialGradient(2,2,0,0,0,10)},this.gradient.water.addColorStop(0,"rgba(255, 255, 255, 0.7)"),this.gradient.water.addColorStop(.381,"rgba(0, 95, 191, 0.3)"),this.gradient.water.addColorStop(.549,"rgba(0, 95, 191, 0.3)"),this.gradient.water.addColorStop(.755,"rgba(0, 127, 255, 0.3)"),this.gradient.water.addColorStop(1,"rgba(0, 63, 127, 0.3)"),this.gradient.smoke.addColorStop(0,"rgba(100, 100, 100, 0.1)"),this.gradient.smoke.addColorStop(.5,"rgba(0, 0, 0, 0)"),this.type=e||"default",this.emit=i||!0,this.PI=Math.PI,this.PI2=2*this.PI,this.particleTypes={},this.particles=new Array(300),this.addParicleType("earth",{colour:this.colours.earth.light,life:50,rotate:20}),this.addParicleType("air",{colour:this.colours.air.light,life:80}),this.addParicleType("water",{colour:this.colours.water.light,gravity:.1,maxSpeed:3,life:60}),this.addParicleType("fire",{colour:this.colours.fire.light,gravity:-.1,maxSpeed:2,life:40,rotate:10})};Emitter.prototype.update=function(t,e,i){var s,a,r,h;for(h=!1,t!==this.type&&(this.type=t),s=0,a=this.particles.length;a>s;s++)r=this.particles[s],r&&r.life>0?this.updateParticle(r):h||(h=!0,this.addParticle({x:e.x+Math.random()*i-.5*i,y:e.y+Math.random()*i-.5*i},s))},Emitter.prototype.updateParticle=function(t){t.life--,t.speed.y+=t.gravity,t.position.x+=t.speed.x,t.position.y+=t.speed.y,t.angle+=t.rotate},Emitter.prototype.render=function(t,e){var i,s,a;for(i=0,s=this.particles.length;s>i;i++)a=this.particles[i],a&&a.life>0?this.drawParticle(e,a):this.particleCount--},Emitter.prototype.drawParticle=function(t,e){switch(t.save(),t.translate(e.position.x,e.position.y),t.rotate(e.angle*this.PI/180),t.beginPath(),e.type){case"earth":t.translate(-4,-4),t.scale(e.life/20,e.life/20),t.bezierCurveTo(0,0,3,0,3,3),t.bezierCurveTo(3,3,0,3,0,0);break;case"air":t.arc(0,0,e.life/10,0,this.PI2,!1);break;case"water":t.arc(0,0,e.life/10,0,this.PI2,!1);break;case"fire":t.arc(0,0,e.life/10,0,this.PI2,!1)}t.fillStyle=e.colour,t.fill(),t.restore()},Emitter.prototype.addParicleType=function(t,e){var i={gravity:e.gravity||0,colour:e.colour||"rgba(0, 0, 0, 0.2)",maxSpeed:e.maxSpeed||.5,life:e.life||100,rotate:e.rotate||0};this.particleTypes[t]=i},Emitter.prototype.addParticle=function(t,e){if(this.type in this.particleTypes){var i,s,a,r,h,n,o,c;switch(a=this.particleTypes[this.type].life,h=this.particleTypes[this.type].gravity,n=Math.random()*this.particleTypes[this.type].maxSpeed-this.particleTypes[this.type].maxSpeed/2,o=Math.random()*this.particleTypes[this.type].maxSpeed-this.particleTypes[this.type].maxSpeed/2,c=0,this.type){case"earth":r=Math.random(),s=r>.8?"rgb(50, 150, 50)":r>.5?"rgb(50, 100, 50)":"rgb(50, 80, 50)",c=Math.floor(360*r);break;case"water":a*=.6,s=this.gradient.water;break;case"fire":r=Math.random(),r>.8?(a*=.5,s="rgba(250, 60, 50, 0.8)"):r>.6?(a*=.5,s=this.particleTypes[this.type].colour):r>.4?(a*=.6,s="rgba(200, 100, 50, 0.5)"):(a*=2,s=this.gradient.smoke,h*=.2,n*=.5,o*=.5);break;default:s=this.particleTypes[this.type].colour}i={type:this.type,position:{x:t.x,y:t.y},speed:{x:n,y:o},gravity:h,angle:c,life:a,colour:s,rotate:Math.random()*this.particleTypes[this.type].rotate-this.particleTypes[this.type].rotate/2},this.particles[e]=i}},window.raf=function(){return window.requestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}();var Game=function(t,e,i){var s=window.document;this.isTouchDevice=i,this.colours=new Colours,this.gravity=.2,this.canvas=s.createElement("canvas"),this.canvas.width=t,this.canvas.height=e,this.fps=1e3/60,this.ctx=this.canvas.getContext("2d"),s.getElementsByTagName("body")[0].appendChild(this.canvas),this.sounds=new ArcadeAudio,this.sounds.add("fire",5,[3,.25,.27,.76,.54,.5571,,.1799,-.0999,.0035,.56,-.6597,.61,.0862,-.8256,,.5,.5,.71,-.0181,,.0368,.0333,.3]),this.sounds.add("air",5,[3,.33,.89,.25,.81,.4692,,-.0122,.0113,-.5995,.23,-.54,-.1575,,.2234,.84,-.4,.6599,.17,-.3399,.96,.25,.72,.7]),this.sounds.add("earth",5,[2,.0128,.0265,.0181,.6963,.8477,,,.0159,.3225,.6078,-.3337,-.6789,.8691,-.0014,.5717,-.072,.8352,.9201,-.8062,.242,.058,7e-4,.5]),this.sounds.add("water",5,[3,.1289,.0741,.1655,.2238,.7762,.1339,.8382,.4476,,.4073,.4105,.0273,.0935,-.052,.1843,.5221,-.4528,.4904,.4484,.6152,.5451,-.4585,.54]),this.sounds.add("die",5,[0,.0308,.1733,.1758,.9516,.0541,,.3565,.0169,.8242,.9043,.3467,,.0602,-.0213,-.0453,.198,.5443,.7509,-1e-4,.3062,.1318,,.5]),this.sounds.add("kill",5,[3,.0292,.33,.0865,.5498,.4768,,,.76,,.36,-.14,,,.4445,.2399,.398,.3198,.9815,-.1708,.7077,.5137,5e-4,.54]),this.sounds.add("menu",5,[2,,.1122,,.0677,.26,,-.02,,,,,,,,,,,.44,,,.11,-.02,.72]),this.scene=new MainScene(this),this.render()};Game.prototype.start=function(){var t=this;this.interval=window.setInterval(function(){t.update()},this.fps),this.tick()},Game.prototype.pause=function(){window.clearInterval(this.interval),delete this.interval},Game.prototype.update=function(){this.scene.update()},Game.prototype.render=function(){this.scene.render()},Game.prototype.tick=function(){this.interval&&(this.render(),window.raf(this.tick.bind(this)))};var IO=function(t,e,i){this.el=t,this.ongoingTouches=[],this.delegate=i||this,this.game=e,this.pauseTrigger=!1,this.addEvents(),this.activeInput={earth:!1,water:!1,air:!1,fire:!1,up:!1,down:!1,left:!1,right:!1}};IO.prototype.addEvents=function(){this.game.isTouchDevice&&(this.el.addEventListener("touchstart",this.delegate.handleEvent.bind(this.delegate),!1),this.el.addEventListener("touchmove",this.delegate.handleEvent.bind(this.delegate),!1),this.el.addEventListener("touchend",this.delegate.handleEvent.bind(this.delegate),!1),this.el.addEventListener("touchcancel",this.delegate.handleEvent.bind(this.delegate),!1)),window.addEventListener("keydown",this.delegate.handleEvent.bind(this.delegate),!0),window.addEventListener("keyup",this.delegate.handleEvent.bind(this.delegate),!0)},IO.prototype.removeEvents=function(){this.game.isTouchDevice&&(this.el.removeEventListener("touchstart",this.delegate.handleEvent.bind(this.delegate),!1),this.el.removeEventListener("touchmove",this.delegate.handleEvent.bind(this.delegate),!1),this.el.removeEventListener("touchend",this.delegate.handleEvent.bind(this.delegate),!1),this.el.removeEventListener("touchcancel",this.delegate.handleEvent.bind(this.delegate),!1)),window.removeEventListener("keydown",this.delegate.handleEvent.bind(this.delegate),!0),window.removeEventListener("keyup",this.delegate.handleEvent.bind(this.delegate),!0)},IO.prototype.handleEvent=function(t){if("menu"===this.game.scene.state)return void(("keydown"===t.type&&13===t.keyCode||"touchend"===t.type)&&(this.game.sounds.play("menu"),this.game.scene.menuTransition.setDirection("backwards"),this.game.scene.menuTransition.start(),this.game.scene.state="transition-play"));switch(t.type){case"keydown":this.setKeyState(t.keyCode,!0);break;case"keyup":this.setKeyState(t.keyCode,!1);break;case"touchstart":this.handleTouchStart(t);break;case"touchmove":this.handleTouchMove(t);break;case"touchend":case"touchcancel":this.handleTouchEnd(t)}},IO.prototype.copyTouch=function(t,e){return{identifier:t.identifier,startX:e?e.startX:t.pageX,startY:e?e.startY:t.pageY,pageX:t.pageX,pageY:t.pageY}},IO.prototype.ongoingTouchIndexById=function(t){var e,i,s;for(e=0,i=this.ongoingTouches.length;i>e;e++)if(s=this.ongoingTouches[e].identifier,s===t)return e;return-1},IO.prototype.handleTouchStart=function(t){t.preventDefault();var e,i,s;for(s=t.changedTouches,e=0,i=s.length;i>e;e++)this.ongoingTouches.push(this.copyTouch(s[e]))},IO.prototype.handleTouchMove=function(t){t.preventDefault();var e,i,s,a;for(s=t.changedTouches,e=0,i=s.length;i>e;e++)a=this.ongoingTouchIndexById(s[e].identifier),a>=0&&this.ongoingTouches.splice(a,1,this.copyTouch(s[e],this.ongoingTouches[a]));this.updateActiveInput()},IO.prototype.handleTouchEnd=function(t){t.preventDefault();var e,i,s,a;for(s=t.changedTouches,e=0,i=s.length;i>e;e++)a=this.ongoingTouchIndexById(s[e].identifier),a>=0&&this.ongoingTouches.splice(a,1);this.updateActiveInput()},IO.prototype.updateActiveInput=function(){var t,e,i,s,a;a=32,t=this.ongoingTouches[0]||!1,t&&(i=t.pageX-t.startX,s=t.pageY-t.startY,i>a?(this.activeInput.left=!1,this.activeInput.right=!0):-a>i?(this.activeInput.left=!0,this.activeInput.right=!1):this.activeInput.left=this.activeInput.right=!1,s>a?(this.activeInput.up=!1,this.activeInput.down=!0):-a>s?(this.activeInput.up=!0,this.activeInput.down=!1):this.activeInput.up=this.activeInput.down=!1),e=this.ongoingTouches[1]||!1,e&&(i=e.pageX-e.startX,s=e.pageY-e.startY,this.activeInput.earth=!1,this.activeInput.water=!1,this.activeInput.air=!1,this.activeInput.fire=!1,i>a?i>s&&i>-s&&(this.activeInput.earth=!0):-a>i?-i>s&&-i>-s&&(this.activeInput.air=!0):s>a?s>i&&s>-i&&(this.activeInput.water=!0):-a>s&&-s>i&&-s>-i&&(this.activeInput.fire=!0))},IO.prototype.pause=function(){var t=this;this.pauseTrigger||(this.game.sounds.play("menu"),this.game.scene.state="play"===this.game.scene.state?"pause":"play",this.pauseTrigger=!0,window.setTimeout(function(){t.pauseTrigger=!1},250))},IO.prototype.setKeyState=function(t,e){switch(t){case 27:this.pause();break;case 49:e?(this.activeInput.earth=!0,this.activeInput.water=!1,this.activeInput.air=!1,this.activeInput.fire=!1):this.activeInput.earth=!1;break;case 50:e?(this.activeInput.earth=!1,this.activeInput.water=!1,this.activeInput.air=!0,this.activeInput.fire=!1):this.activeInput.air=!1;break;case 51:e?(this.activeInput.earth=!1,this.activeInput.water=!0,this.activeInput.air=!1,this.activeInput.fire=!1):this.activeInput.water=!1;break;case 52:e?(this.activeInput.earth=!1,this.activeInput.water=!1,this.activeInput.air=!1,this.activeInput.fire=!0):this.activeInput.fire=!1;break;case 37:this.activeInput.left=e;break;case 39:this.activeInput.right=e;break;case 38:this.activeInput.up=e;break;case 40:this.activeInput.down=e}};var SceneController=function(){this.states={},this.currentState=null};SceneController.prototype.add=function(t,e){this.states[t]=e},SceneController.prototype.start=function(t){this.currentState=t};var Shapes=function(){};Shapes.prototype.draw=function(t,e,i){this[e](t,i)},Shapes.prototype.elements=function(t,e){var i=90*(Math.PI/180);t.save(),this.elementSegment(t,e[0]),t.rotate(i),this.elementSegment(t,e[1]),t.rotate(i),this.elementSegment(t,e[2]),t.rotate(i),this.elementSegment(t,e[3]),t.restore()},Shapes.prototype.elementSegment=function(t,e){t.save();var i=e.radius/2,s=i-10,a=i+10;t.beginPath(),t.moveTo(0,0),t.lineTo(s,0),t.lineTo(s,10),t.lineTo(s-2,20),t.lineTo(s-10,15),t.lineTo(s-1,42),t.lineTo(a+4,28),t.lineTo(a-4,26),t.lineTo(a,10),t.lineTo(a,0),t.arc(0,0,e.radius,0,.5*Math.PI,!1),t.lineTo(0,a),t.lineTo(-10,a),t.lineTo(-26,a-4),t.lineTo(-28,a+4),t.lineTo(-42,s-1),t.lineTo(-15,s-10),t.lineTo(-20,s-2),t.lineTo(-10,s),t.lineTo(0,s),t.closePath(),t.fillStyle=e.fill,t.fill(),t.restore()};var Storage=function(){return this.active=!!window.localStorage,this.active};Storage.prototype.load=function(t){var e;return this.active?(e=window.localStorage.getItem(t),e&&"undefined"!=typeof e&&"undefined"!==e?JSON.parse(e):!1):this.error()},Storage.prototype.save=function(t,e){return this.active?(window.localStorage.setItem(t,JSON.stringify(e)),e):this.error()},Storage.prototype.error=function(){return"No localStorage available"};var Transition=function(){this.active=!1,this.direction="forwards",this.length=500,this.startTime=null,this.percent=0};Transition.prototype.start=function(){this.active=!0,this.percent="forwards"===this.direction?0:1,this.startTime=(new Date).getTime()},Transition.prototype.end=function(){this.active=!1,this.startTime=null},Transition.prototype.update=function(){var t;this.active&&(t=(new Date).getTime(),this.percent=(t-this.startTime)/this.length,"backwards"===this.direction&&(this.percent=1-this.percent),("forwards"===this.direction&&this.percent>=1||"backwards"===this.direction&&this.percent<=0)&&this.end())},Transition.prototype.setDirection=function(t){return"forwards"!==t&&"backwards"!==t?"error":(this.direction=t,t)};var Wisp=function(t,e,i,s,a){this.game=t,this.type=s,this.life=1,this.score=0,this.invincible=0,this.gradient={water:a.createRadialGradient(-2,-2,0,0,0,20),air:a.createRadialGradient(0,0,0,0,0,20)},this.gradient.water.addColorStop(0,"rgba(255, 255, 255, 0.7)"),this.gradient.water.addColorStop(.381,"rgba(0, 95, 191, 0.3)"),this.gradient.water.addColorStop(.549,"rgba(0, 95, 191, 0.3)"),this.gradient.water.addColorStop(.755,"rgba(0, 127, 255, 0.3)"),this.gradient.water.addColorStop(1,"rgba(0, 63, 127, 0.3)"),this.gradient.air.addColorStop(0,"rgba(255, 255, 255, 0.3)"),this.gradient.air.addColorStop(1,"rgba(255, 255, 255, 0.0)"),this.playSound=function(t){this.game.sounds.play(t)},this.position={x:e||0,y:i||0},this.speed={x:0,y:0},this.angle=0,this.rotate=10*Math.random(),this.size=1,this.PI2=2*Math.PI,this.accelerate=1,this.maxSpeed=this.size>10?10-this.size:3,this.state="normal",this.emitter=new Emitter(a)};Wisp.prototype.update=function(t,e,i){var s,a,r,h,n,o,c,l,p;if(this.maxSpeed=20/this.size,this.angle+=this.rotate,this.angle>360&&(this.angle-=360),"user"===this.type)t.left&&(this.speed.x-=this.accelerate),t.right&&(this.speed.x+=this.accelerate),t.up&&(this.speed.y-=this.accelerate),t.down&&(this.speed.y+=this.accelerate);else if("cpu"===this.type)if(e){for(s=0,a=e.length,h=!1,l=1,p=1;a>s;s++)r=e[s],r.position.x!==this.position.x&&r.position.y!==this.position.y&&r.size<this.size&&(n=this.position.x-r.position.x,o=this.position.y-r.position.y,0>n&&(l=-1,n=-n),0>o&&(p=-1,o=-o),c=n+o,(!h||h.distance<c)&&(h={distance:c,sprite:s}));i&&i.size<this.size&&(n=this.position.x-i.position.x,o=this.position.y-i.position.y,0>n&&(l=-1,n=-n),0>o&&(p=-1,o=-o),c=n+o,(!h||h.distance<c)&&(h={distance:c,sprite:s})),h&&Math.random()>.3?(this.speed.x-=.1*l,this.speed.y-=.1*p):(this.speed.x+=2*Math.random()-1,this.speed.y+=2*Math.random()-1)}else this.speed.x+=2*Math.random()-1,this.speed.y+=2*Math.random()-1;this.speed.x>this.maxSpeed?this.speed.x=this.maxSpeed:this.speed.x<-this.maxSpeed&&(this.speed.x=-this.maxSpeed),this.speed.y>this.maxSpeed?this.speed.y=this.maxSpeed:this.speed.y<-this.maxSpeed&&(this.speed.y=-this.maxSpeed),this.speed.x*=.9,this.speed.y*=.9,this.position.x+=this.speed.x,this.position.y+=this.speed.y,this.position.x>this.game.canvas.width-this.size?(this.position.x=this.game.canvas.width-this.size,this.speed.x=-this.speed.x):this.position.x<this.size&&(this.position.x=this.size,this.speed.x=-this.speed.x),this.position.y>this.game.canvas.height-this.size?(this.position.y=this.game.canvas.height-this.size,this.speed.y=-this.speed.y):this.position.y<this.size&&(this.position.y=this.size,this.speed.y=-this.speed.y),"user"===this.type&&(t.earth?("earth"!==this.state&&this.playSound("earth"),this.state="earth"):t.water?("water"!==this.state&&this.playSound("water"),this.state="water"):t.air?("air"!==this.state&&this.playSound("air"),this.state="air"):t.fire?("fire"!==this.state&&this.playSound("fire"),this.state="fire"):this.state="normal"),this.emitter.update(this.state,this.position,this.size)},Wisp.prototype.render=function(t){var e=.5*this.size,i=.66*this.size,s=.33*this.size;if(this.life){switch(t.save(),t.translate(this.position.x,this.position.y),t.rotate(this.angle*Math.PI/180),this.state){case"earth":t.beginPath(),t.arc(0,0,this.size,0,this.PI2,!1),t.fillStyle="rgb(139, 101, 8)",t.fill(),t.fillStyle="rgba(139, 105, 20, 0.5)",t.beginPath(),t.arc(-s,s,i,0,this.PI2,!1),t.fill(),t.fillStyle="rgba(205, 186, 150, 0.5)",t.beginPath(),t.arc(s,s,i,0,this.PI2,!1),t.fill(),t.fillStyle="rgba(210, 180, 140, 0.5)",t.beginPath(),t.arc(0,-s,i,0,this.PI2,!1),t.fill();break;case"water":t.beginPath(),t.arc(0,0,this.size,0,this.PI2,!1),t.fillStyle=this.gradient.water,t.fill();break;case"air":t.fillStyle=this.gradient.air,t.beginPath(),t.arc(-e,e,e,0,this.PI2,!1),t.fill(),t.beginPath(),t.arc(e,e,e,0,this.PI2,!1),t.fill(),t.beginPath(),t.arc(0,-e,e,0,this.PI2,!1),t.fill();break;case"fire":t.fillStyle=this.game.colours.fire.main,t.beginPath(),t.arc(-s,s,i,0,this.PI2,!1),t.fill(),t.fillStyle="rgba(200, 100, 50, 0.5)",t.beginPath(),t.arc(s,s,i,0,this.PI2,!1),t.fill(),t.fillStyle="rgba(250, 60, 50, 0.8)",t.beginPath(),t.arc(0,-s,i,0,this.PI2,!1),t.fill();break;default:t.beginPath(),t.arc(0,0,this.size,0,this.PI2,!1),t.fillStyle=this.game.colours.player.main,t.fill()}t.restore()}this.emitter.render(this.position,t)};var MainScene=function(t){this.game=t,this.state="menu",this.rules={water:"fire",fire:"earth",earth:"air",air:"water"},this.storage=new Storage,this.game.hiscore=this.storage.load("hiscore"),this.menuTransition=new Transition,this.menuTransition.start(),this.pauseTransition=new Transition,this.shapes=new Shapes,this.canvas=window.document.createElement("canvas"),this.canvas.width=this.game.canvas.width,this.canvas.height=this.game.canvas.height,this.ctx=this.canvas.getContext("2d"),this.menuCanvas=window.document.createElement("canvas"),this.menuCanvas.width=this.game.canvas.width,this.menuCanvas.height=this.game.canvas.height,this.menuCtx=this.menuCanvas.getContext("2d"),this.drawMenu(),this.pauseCanvas=window.document.createElement("canvas"),this.pauseCanvas.width=this.game.canvas.width,this.pauseCanvas.height=this.game.canvas.height,this.pauseCtx=this.pauseCanvas.getContext("2d"),this.drawPause(),this.io=new IO(this.game.canvas,this.game),this.player=new Wisp(this.game,this.game.canvas.width/2,this.game.canvas.height/2,"user",this.ctx),this.player.size=5,this.player.invincible=60,this.cpus=[],this.cpuTypes=["earth","air","water","fire"];for(var e=this.game.isTouchDevice?5:1;e;)this.addCPU(),e--;return this.draw(),this};MainScene.prototype.addCPU=function(){var t,e,i;e=Math.random()*this.game.canvas.width,i=Math.random()*this.game.canvas.height,t=new Wisp(this.game,e,i,"cpu",this.ctx),t.state=this.cpuTypes[Math.floor(Math.random()*this.cpuTypes.length)],t.size=Math.random()*(this.player.size+5),this.cpus.push(t)},MainScene.prototype.update=function(){var t,e,i;switch(this.state){case"menu":case"transition-play":for(this.menuTransition.update(),t=0,e=this.cpus.length;e>t;t++)this.cpus[t].update();break;case"play":if(i=[],this.player.invincible>0&&this.player.invincible--,this.player.size<1&&(this.player.life=0),!this.player.life)return this.game.sounds.play("die"),this.player.invincible=60,this.io.activeInput.earth=!1,this.io.activeInput.water=!1,this.io.activeInput.air=!1,this.io.activeInput.fire=!1,this.io.activeInput.up=!1,this.io.activeInput.down=!1,this.io.activeInput.left=!1,this.io.activeInput.right=!1,this.state="menu",this.game.hiscore?this.player.score>this.game.hiscore&&(this.game.hiscore=this.player.score,this.storage.save("hiscore",this.game.hiscore)):(this.game.hiscore=this.player.score,this.storage.save("hiscore",this.game.hiscore)),this.drawMenu(),this.player.score=0,this.player.life=1,this.player.size=5,void(this.player.position={x:this.canvas.width/2,y:this.canvas.height/2});for(this.scaleWorld(),this.player.update(this.io.activeInput),t=0,e=this.cpus.length;e>t;t++)0===this.cpus[t].life&&i.push(t),this.cpus[t].update(null,this.cpus,this.player);for(t=0,e=i.length;e>t;t++)this.cpus.splice(i[t],1),this.addCPU();this.testCollision()}},MainScene.prototype.draw=function(){var t=this.ctx.createLinearGradient(0,0,this.canvas.width,this.canvas.height);t.addColorStop(0,"#004cb3"),t.addColorStop(1,"#8ed6ff"),this.ctx.fillStyle=t,this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height)},MainScene.prototype.drawMenu=function(t){var e,i,s,a,r,h,n,o;o=this.game.isTouchDevice,e=this.menuCtx,i=this.menuCanvas.width,s=this.menuCanvas.height,a=i/2,r=s/2,h=.4*i,n=.4*s,e.clearRect(0,0,i,s),e.save(),t&&(e.globalAlpha=t),e.save(),e.translate(a,r),e.beginPath(),e.moveTo(-h-10*Math.random(),-n-10*Math.random()),e.lineTo(h+10*Math.random(),-n-10*Math.random()),e.lineTo(h+10*Math.random(),n+10*Math.random()),e.lineTo(-h-10*Math.random(),n+10*Math.random()),e.closePath(),e.fillStyle=this.game.colours.menu.main,e.strokeStyle=this.game.colours.menu.light,e.fill(),e.stroke(),e.restore(),e.save(),e.translate(this.canvas.width-60,60),e.rotate(-10*(Math.PI/180)),e.scale(.5,.5),e.transform(1,.1,0,1,0,0),this.shapes.draw(e,"elements",[{fill:this.game.colours.water.main,radius:100},{fill:this.game.colours.fire.main,radius:100},{fill:this.game.colours.earth.main,radius:100},{fill:this.game.colours.air.main,radius:100}]),e.restore(),e.fillStyle="#fff",e.font='20px/24px "Trebuchet MS", Helvetica, sans-serif',e.textAlign="center",e.save(),e.translate(a,r-90),e.rotate(-2*Math.PI/180),e.fillText("Become the biggest",0,0),e.restore(),e.save(),e.translate(a,r-30),e.rotate(1*Math.PI/180),e.fillText(o?"touch and drag to move":"use the cursor",0,0),e.restore(),e.save(),e.translate(a,r-(o?10:0)),e.rotate(-1*Math.PI/180),e.fillText(o?"your second touch for:":"keys to move",0,0),e.restore(),e.save(),e.fillStyle=this.game.colours.earth.main,e.translate(a-50,r+40),e.rotate(-3*Math.PI/180),e.fillText("earth "+(o?'"up"':'"1"'),0,0),e.restore(),e.save(),e.fillStyle=this.game.colours.air.main,e.translate(a+60,r+35),e.rotate(2*Math.PI/180),e.fillText("air "+(o?'"right"':'"2"'),0,0),e.restore(),e.save(),e.fillStyle=this.game.colours.water.main,e.translate(a+50,r+85),e.rotate(-2*Math.PI/180),e.fillText("water "+(o?'"down"':'"3"'),0,0),e.restore(),e.save(),e.fillStyle=this.game.colours.fire.main,e.translate(a-60,r+90),e.rotate(2*Math.PI/180),e.fillText("fire "+(o?'"left"':'"4"'),0,0),e.restore(),e.fillStyle="#fff",e.fillText(o?"Touch the screen to begin":'Press any "enter" to begin',a,r+150),"number"==typeof this.game.hiscore&&(e.save(),this.game.isTouchDevice?(e.translate(a-40,r-160),e.rotate(-5*Math.PI/180)):(e.translate(a,r-160),e.rotate(-3*Math.PI/180)),e.fillText("score: "+this.game.hiscore,0,0),e.restore()),e.restore()},MainScene.prototype.drawPause=function(){var t=this.pauseCtx;t.clearRect(0,0,this.pauseCanvas.width,this.pauseCanvas.height),t.save(),t.fillStyle="#fff",t.font="20px/24px Arial",t.textAlign="center",t.fillText("Paused",this.canvas.width/2,this.canvas.height/2),t.restore()},MainScene.prototype.render=function(){this.game.ctx.drawImage(this.canvas,0,0),"play"===this.state&&this.player.render(this.game.ctx);for(var t=0,e=this.cpus.length;e>t;t++)this.cpus[t].render(this.game.ctx);switch(this.state){case"menu":this.menuTransition.active?(this.game.ctx.globalAlpha=this.menuTransition.percent,this.game.ctx.drawImage(this.menuCanvas,0,0),this.game.ctx.globalAlpha=1):this.game.ctx.drawImage(this.menuCanvas,0,0);break;case"transition-play":this.menuTransition.active?(this.game.ctx.globalAlpha=this.menuTransition.percent,this.game.ctx.drawImage(this.menuCanvas,0,0),this.game.ctx.globalAlpha=1):this.state="play";break;case"pause":this.game.ctx.drawImage(this.pauseCanvas,0,0);break;case"play":this.game.ctx.fillStyle="#fff",this.game.ctx.font="20px/24px Arial",this.game.ctx.textAlign="center",this.game.ctx.fillText(this.player.score,this.canvas.width/2,20),this.game.ctx.save(),this.game.ctx.translate(this.canvas.width-20,20),this.game.ctx.rotate(-10*(Math.PI/180)),this.game.ctx.scale(.1,.1),this.game.ctx.globalAlpha=.5,this.game.ctx.transform(1,.1,0,1,0,0),this.shapes.draw(this.game.ctx,"elements",[{fill:this.game.colours.water.main,radius:100},{fill:this.game.colours.fire.main,radius:100},{fill:this.game.colours.earth.main,radius:100},{fill:this.game.colours.air.main,radius:100}]),this.game.ctx.restore()}},MainScene.prototype.testCollision=function(){var t,e,i,s,a,r,h,n,o,c,l,p,d,u;for(s=this.player.size,a=this.player.position.x+s,r=this.player.position.x-s,h=this.player.position.y+s,n=this.player.position.y-s,t=0,e=this.cpus.length;e>t;t++)i=this.cpus[t],a>i.position.x&&r<i.position.x&&h>i.position.y&&n<i.position.y&&this.destroySmallest(this.player,i);t=0;var g;for(e=this.cpus.length;e>t;t++)for(i=this.cpus[t],o=i.size,c=i.position.x+o,l=i.position.x-o,p=i.position.y+o,d=i.position.y-o,c>this.player.position.x&&l<this.player.position.x&&p>this.player.position.y&&d<this.player.position.y&&this.destroySmallest(i,this.player),g=t;e>g;g++)u=this.cpus[g],c>u.position.x&&l<u.position.x&&p>u.position.y&&d<u.position.y&&this.destroySmallest(i,u)},MainScene.prototype.destroySmallest=function(t,e){if(!(t.invincible>0||e.invincible>0)){var i,s,a,r,h;h=10,i=this.rules[t.state],s=this.rules[e.state],a=t.size+(e.state===i?h:0),r=e.size+(t.state===s?h:0),a>r?(t.size++,t.score+=2,e.size--,e.size<=0&&(this.game.sounds.play("kill"),e.life=0)):(e.size++,e.score+=2,t.size--,t.size<=0&&(this.game.sounds.play("kill"),t.life=0))}},MainScene.prototype.scaleSprites=function(){var t,e,i;for(i=.99,this.player.size*=i,t=0,e=this.cpus.length;e>t;t++)this.cpus[t].size*=i},MainScene.prototype.scaleWorld=function(){var t,e;for(this.player.size>10&&this.scaleSprites(),t=0,e=this.cpus.length;e>t;t++)this.cpus[t].size>10&&this.scaleSprites()},window.onload=function(){var t,e,i,s,a;e=!!("ontouchstart"in window||"onmsgesturechange"in window),e&&(a=window.document.getElementsByTagName("body")[0],a.className=""===a.className?"touchDevice":a.className+" isTouchDevice"),i=e?320:640,s=e?480:480,t=new Game(i,s,e),t.start()};