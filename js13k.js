function SfxrParams(){this.setSettings=function(t){for(var e=0;24>e;e++)this[String.fromCharCode(97+e)]=t[e]||0;this.c<.01&&(this.c=.01);var i=this.b+this.c+this.e;if(.18>i){var s=.18/i;this.b*=s,this.c*=s,this.e*=s}}}function SfxrSynth(){this._params=new SfxrParams;var t,e,i,s,a,r,h,n,o,l,c,p;this.reset=function(){var t=this._params;s=100/(t.f*t.f+.001),a=100/(t.g*t.g+.001),r=1-t.h*t.h*t.h*.01,h=-t.i*t.i*t.i*1e-6,t.a||(c=.5-t.n/2,p=5e-5*-t.o),n=1+t.l*t.l*(t.l>0?-.9:10),o=0,l=1==t.m?0:(1-t.m)*(1-t.m)*2e4+32},this.totalReset=function(){this.reset();var s=this._params;return t=s.b*s.b*1e5,e=s.c*s.c*1e5,i=s.e*s.e*1e5+12,3*((t+e+i)/3|0)},this.synthWave=function(d,u){var m=this._params,y=1!=m.s||m.v,f=m.v*m.v*.1,g=1+3e-4*m.w,v=m.s*m.s*m.s*.1,w=1+1e-4*m.t,x=1!=m.s,S=m.x*m.x,T=m.g,b=m.q||m.r,k=m.r*m.r*m.r*.2,I=m.q*m.q*(m.q<0?-1020:1020),M=m.p?((1-m.p)*(1-m.p)*2e4|0)+32:0,C=m.d,P=m.j/2,z=m.k*m.k*.01,A=m.a,E=t,G=1/t,W=1/e,O=1/i,R=5/(1+m.u*m.u*20)*(.01+v);R>.8&&(R=.8),R=1-R;for(var U,q,L,D,_,j,K=!1,B=0,F=0,H=0,N=0,J=0,Q=0,V=0,X=0,Y=0,Z=0,$=new Array(1024),te=new Array(32),ee=$.length;ee--;)$[ee]=0;for(var ee=te.length;ee--;)te[ee]=2*Math.random()-1;for(var ee=0;u>ee;ee++){if(K)return ee;if(M&&++Y>=M&&(Y=0,this.reset()),l&&++o>=l&&(l=0,s*=n),r+=h,s*=r,s>a&&(s=a,T>0&&(K=!0)),q=s,P>0&&(Z+=z,q*=1+Math.sin(Z)*P),q|=0,8>q&&(q=8),A||(c+=p,0>c?c=0:c>.5&&(c=.5)),++F>E)switch(F=0,++B){case 1:E=e;break;case 2:E=i}switch(B){case 0:H=F*G;break;case 1:H=1+2*(1-F*W)*C;break;case 2:H=1-F*O;break;case 3:H=0,K=!0}b&&(I+=k,L=0|I,0>L?L=-L:L>1023&&(L=1023)),y&&g&&(f*=g,1e-5>f?f=1e-5:f>.1&&(f=.1)),j=0;for(var ie=8;ie--;){if(V++,V>=q&&(V%=q,3==A))for(var se=te.length;se--;)te[se]=2*Math.random()-1;switch(A){case 0:_=c>V/q?.5:-.5;break;case 1:_=1-V/q*2;break;case 2:D=V/q,D=6.28318531*(D>.5?D-1:D),_=1.27323954*D+.405284735*D*D*(0>D?1:-1),_=.225*((0>_?-1:1)*_*_-_)+_;break;case 3:_=te[Math.abs(32*V/q|0)]}y&&(U=Q,v*=w,0>v?v=0:v>.1&&(v=.1),x?(J+=(_-Q)*v,J*=R):(Q=_,J=0),Q+=J,N+=Q-U,N*=1-f,_=N),b&&($[X%1024]=_,_+=$[(X-L+1024)%1024],X++),j+=_}j*=.125*H*S,d[ee]=j>=1?32767:-1>=j?-32768:32767*j|0}return u}}var synth=new SfxrSynth;window.jsfxr=function(t){synth._params.setSettings(t);var e=synth.totalReset(),i=new Uint8Array(4*((e+1)/2|0)+44),s=2*synth.synthWave(new Uint16Array(i.buffer,44),e),a=new Uint32Array(i.buffer,0,44);a[0]=1179011410,a[1]=s+36,a[2]=1163280727,a[3]=544501094,a[4]=16,a[5]=65537,a[6]=44100,a[7]=88200,a[8]=1048578,a[9]=1635017060,a[10]=s,s+=44;for(var r=0,h="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",n="data:audio/wav;base64,";s>r;r+=3){var o=i[r]<<16|i[r+1]<<8|i[r+2];n+=h[o>>18]+h[o>>12&63]+h[o>>6&63]+h[63&o]}return n};var ArcadeAudio=function(){this.sounds={}};ArcadeAudio.prototype.add=function(t,e,i){this.sounds[t]=[],i.forEach(function(i,s){this.sounds[t].push({tick:0,count:e,pool:[]});for(var a=0;e>a;a++){var r=new Audio;r.src=jsfxr(i),this.sounds[t][s].pool.push(r)}},this)},ArcadeAudio.prototype.play=function(t){var e=this.sounds[t],i=e.length>1?e[Math.floor(Math.random()*e.length)]:e[0];i.pool[i.tick].play(),i.tick=i.tick<i.count-1?i.tick+1:0};var Colours=function(){this.menu={main:"#b88f3d",dark:"#c3a364",light:"#e7c176"},this.earth={main:"#319331",dark:"#509c50",light:"#65c655"},this.air={main:"rgba(255, 255, 255, 0.5)",dark:"#fff",light:"rgba(255, 255, 255, 0.1)"},this.player={main:"#b88f3d",dark:"#c3a364",light:"#e7c176"},this.water={main:"#2e457b",dark:"#495b83",light:"#637ab0"},this.fire={main:"#b83d3d",dark:"#c36464",light:"#e77676"}},Emitter=function(t,e,i){this.colours=new Colours,this.gradient={water:t.createRadialGradient(-2,-2,0,0,0,6),smoke:t.createRadialGradient(2,2,0,0,0,10)},this.gradient.water.addColorStop(0,"rgba(255, 255, 255, 0.7)"),this.gradient.water.addColorStop(.381,"rgba(0, 95, 191, 0.3)"),this.gradient.water.addColorStop(.549,"rgba(0, 95, 191, 0.3)"),this.gradient.water.addColorStop(.755,"rgba(0, 127, 255, 0.3)"),this.gradient.water.addColorStop(1,"rgba(0, 63, 127, 0.3)"),this.gradient.smoke.addColorStop(0,"rgba(100, 100, 100, 0.1)"),this.gradient.smoke.addColorStop(.5,"rgba(0, 0, 0, 0)"),this.type=e||"default",this.emit=i||!0,this.PI=Math.PI,this.PI2=2*this.PI,this.particleTypes={},this.particles=new Array(300),this.addParicleType("earth",{colour:this.colours.earth.light,life:50,rotate:20}),this.addParicleType("air",{colour:this.colours.air.light,life:80}),this.addParicleType("water",{colour:this.colours.water.light,gravity:.1,maxSpeed:3,life:60}),this.addParicleType("fire",{colour:this.colours.fire.light,gravity:-.1,maxSpeed:2,life:40,rotate:10})};Emitter.prototype.update=function(t,e,i){var s,a,r,h;for(h=!1,t!==this.type&&(this.type=t),s=0,a=this.particles.length;a>s;s++)r=this.particles[s],r&&r.life>0?this.updateParticle(r):h||(h=!0,this.addParticle({x:e.x+Math.random()*i-.5*i,y:e.y+Math.random()*i-.5*i},s))},Emitter.prototype.updateParticle=function(t){t.life--,t.speed.y+=t.gravity,t.position.x+=t.speed.x,t.position.y+=t.speed.y,t.angle+=t.rotate},Emitter.prototype.render=function(t,e){var i,s,a;for(i=0,s=this.particles.length;s>i;i++)a=this.particles[i],a&&a.life>0?this.drawParticle(e,a):this.particleCount--},Emitter.prototype.drawParticle=function(t,e){switch(t.save(),t.translate(e.position.x,e.position.y),t.rotate(e.angle*this.PI/180),t.beginPath(),e.type){case"earth":t.translate(-4,-4),t.scale(e.life/20,e.life/20),t.bezierCurveTo(0,0,3,0,3,3),t.bezierCurveTo(3,3,0,3,0,0);break;case"air":t.arc(0,0,e.life/10,0,this.PI2,!1);break;case"water":t.arc(0,0,e.life/10,0,this.PI2,!1);break;case"fire":t.arc(0,0,e.life/10,0,this.PI2,!1)}t.fillStyle=e.colour,t.fill(),t.restore()},Emitter.prototype.addParicleType=function(t,e){var i={gravity:e.gravity||0,colour:e.colour||"rgba(0, 0, 0, 0.2)",maxSpeed:e.maxSpeed||.5,life:e.life||100,rotate:e.rotate||0};this.particleTypes[t]=i},Emitter.prototype.addParticle=function(t,e){if(this.type in this.particleTypes){var i,s,a,r,h,n,o,l;switch(a=this.particleTypes[this.type].life,h=this.particleTypes[this.type].gravity,n=Math.random()*this.particleTypes[this.type].maxSpeed-this.particleTypes[this.type].maxSpeed/2,o=Math.random()*this.particleTypes[this.type].maxSpeed-this.particleTypes[this.type].maxSpeed/2,l=0,this.type){case"earth":r=Math.random(),s=r>.8?"rgb(50, 150, 50)":r>.5?"rgb(50, 100, 50)":"rgb(50, 80, 50)",l=Math.floor(360*r);break;case"water":a*=.6,s=this.gradient.water;break;case"fire":r=Math.random(),r>.8?(a*=.5,s="rgba(250, 60, 50, 0.8)"):r>.6?(a*=.5,s=this.particleTypes[this.type].colour):r>.4?(a*=.6,s="rgba(200, 100, 50, 0.5)"):(a*=2,s=this.gradient.smoke,h*=.2,n*=.5,o*=.5);break;default:s=this.particleTypes[this.type].colour}i={type:this.type,position:{x:t.x,y:t.y},speed:{x:n,y:o},gravity:h,angle:l,life:a,colour:s,rotate:Math.random()*this.particleTypes[this.type].rotate-this.particleTypes[this.type].rotate/2},this.particles[e]=i}},window.raf=function(){return window.requestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}();var Game=function(t,e){var i=window.document;this.colours=new Colours,this.gravity=.2,this.canvas=i.createElement("canvas"),this.canvas.width=t,this.canvas.height=e,this.fps=1e3/60,this.ctx=this.canvas.getContext("2d"),i.getElementsByTagName("body")[0].appendChild(this.canvas),this.sounds=new ArcadeAudio,this.scene=new MainScene(this),this.render()};Game.prototype.start=function(){var t=this;this.interval=window.setInterval(function(){t.update()},this.fps),this.tick()},Game.prototype.pause=function(){window.clearInterval(this.interval),delete this.interval},Game.prototype.update=function(){this.scene.update()},Game.prototype.render=function(){this.scene.render()},Game.prototype.tick=function(){this.interval&&(this.render(),window.raf(this.tick.bind(this)))};var IO=function(t,e,i){this.el=t,this.ongoingTouches=[],this.delegate=i||this,this.game=e,this.pauseTrigger=!1,this.addEvents(),this.activeInput={earth:!1,water:!1,air:!1,fire:!1,up:!1,down:!1,left:!1,right:!1}};IO.prototype.addEvents=function(){window.addEventListener("keydown",this.delegate.handleEvent.bind(this.delegate),!0),window.addEventListener("keyup",this.delegate.handleEvent.bind(this.delegate),!0)},IO.prototype.removeEvents=function(){window.removeEventListener("keydown",this.delegate.handleEvent.bind(this.delegate),!0),window.removeEventListener("keyup",this.delegate.handleEvent.bind(this.delegate),!0)},IO.prototype.handleEvent=function(t){if("menu"===this.game.scene.state)return void("keydown"===t.type&&(this.game.scene.menuTransition.setDirection("backwards"),this.game.scene.menuTransition.start(),this.game.scene.state="transition-play"));switch(t.type){case"keydown":this.setKeyState(t.keyCode,!0);break;case"keyup":this.setKeyState(t.keyCode,!1)}},IO.prototype.pause=function(){var t=this;this.pauseTrigger||(this.game.scene.state="play"===this.game.scene.state?"pause":"play",this.pauseTrigger=!0,setTimeout(function(){t.pauseTrigger=!1},250))},IO.prototype.setKeyState=function(t,e){switch(t){case 27:this.pause();break;case 49:e?(this.activeInput.earth=!0,this.activeInput.water=!1,this.activeInput.air=!1,this.activeInput.fire=!1):this.activeInput.earth=!1;break;case 50:e?(this.activeInput.earth=!1,this.activeInput.water=!1,this.activeInput.air=!0,this.activeInput.fire=!1):this.activeInput.air=!1;break;case 51:e?(this.activeInput.earth=!1,this.activeInput.water=!0,this.activeInput.air=!1,this.activeInput.fire=!1):this.activeInput.water=!1;break;case 52:e?(this.activeInput.earth=!1,this.activeInput.water=!1,this.activeInput.air=!1,this.activeInput.fire=!0):this.activeInput.fire=!1;break;case 37:this.activeInput.left=e;break;case 39:this.activeInput.right=e;break;case 38:this.activeInput.up=e;break;case 40:this.activeInput.down=e}};var SceneController=function(){this.states={},this.currentState=null};SceneController.prototype.add=function(t,e){this.states[t]=e},SceneController.prototype.start=function(t){this.currentState=t};var Shapes=function(){};Shapes.prototype.draw=function(t,e,i){this[e](t,i)},Shapes.prototype.elements=function(t,e){var i=90*(Math.PI/180);t.save(),this.elementSegment(t,e[0]),t.rotate(i),this.elementSegment(t,e[1]),t.rotate(i),this.elementSegment(t,e[2]),t.rotate(i),this.elementSegment(t,e[3]),t.restore()},Shapes.prototype.elementSegment=function(t,e){t.save();var i=e.radius/2,s=i-10,a=i+10;t.beginPath(),t.moveTo(0,0),t.lineTo(s,0),t.lineTo(s,10),t.lineTo(s-2,20),t.lineTo(s-10,15),t.lineTo(s-1,42),t.lineTo(a+4,28),t.lineTo(a-4,26),t.lineTo(a,10),t.lineTo(a,0),t.arc(0,0,e.radius,0,.5*Math.PI,!1),t.lineTo(0,a),t.lineTo(-10,a),t.lineTo(-26,a-4),t.lineTo(-28,a+4),t.lineTo(-42,s-1),t.lineTo(-15,s-10),t.lineTo(-20,s-2),t.lineTo(-10,s),t.lineTo(0,s),t.closePath(),t.fillStyle=e.fill,t.fill(),t.restore()};var Transition=function(){this.active=!1,this.direction="forwards",this.length=500,this.startTime=null,this.percent=0};Transition.prototype.start=function(){this.active=!0,this.percent="forwards"===this.direction?0:1,this.startTime=(new Date).getTime()},Transition.prototype.end=function(){this.active=!1,this.startTime=null},Transition.prototype.update=function(){var t;this.active&&(t=(new Date).getTime(),this.percent=(t-this.startTime)/this.length,"backwards"===this.direction&&(this.percent=1-this.percent),("forwards"===this.direction&&this.percent>=1||"backwards"===this.direction&&this.percent<=0)&&this.end())},Transition.prototype.setDirection=function(t){return"forwards"!==t&&"backwards"!==t?"error":(this.direction=t,t)};var Wisp=function(t,e,i,s,a){this.game=t,this.type=s,this.life=1,this.score=0,this.position={x:e||0,y:i||0},this.speed={x:0,y:0},this.size=1,this.PI2=2*Math.PI,this.accelerate=1,this.maxSpeed=this.size>10?10-this.size:3,this.state="normal",this.emitter=new Emitter(a)};Wisp.prototype.update=function(t,e,i){var s,a,r,h,n,o,l,c,p;if(this.maxSpeed=20/this.size,"user"===this.type)t.left&&(this.speed.x-=this.accelerate),t.right&&(this.speed.x+=this.accelerate),t.up&&(this.speed.y-=this.accelerate),t.down&&(this.speed.y+=this.accelerate);else if("cpu"===this.type)if(e){for(s=0,a=e.length,h=!1,c=1,p=1;a>s;s++)r=e[s],r.position.x!==this.position.x&&r.position.y!==this.position.y&&r.size<this.size&&(n=this.position.x-r.position.x,o=this.position.y-r.position.y,0>n&&(c=-1,n=-n),0>o&&(p=-1,o=-o),l=n+o,(!h||h.distance<l)&&(h={distance:l,sprite:s}));i&&i.size<this.size&&(n=this.position.x-i.position.x,o=this.position.y-i.position.y,0>n&&(c=-1,n=-n),0>o&&(p=-1,o=-o),l=n+o,(!h||h.distance<l)&&(h={distance:l,sprite:s})),h&&Math.random()>.3?(this.speed.x-=.1*c,this.speed.y-=.1*p):(this.speed.x+=2*Math.random()-1,this.speed.y+=2*Math.random()-1)}else this.speed.x+=2*Math.random()-1,this.speed.y+=2*Math.random()-1;this.speed.x>this.maxSpeed?this.speed.x=this.maxSpeed:this.speed.x<-this.maxSpeed&&(this.speed.x=-this.maxSpeed),this.speed.y>this.maxSpeed?this.speed.y=this.maxSpeed:this.speed.y<-this.maxSpeed&&(this.speed.y=-this.maxSpeed),this.speed.x*=.9,this.speed.y*=.9,this.position.x+=this.speed.x,this.position.y+=this.speed.y,this.position.x>this.game.canvas.width-this.size?(this.position.x=this.game.canvas.width-this.size,this.speed.x=-this.speed.x):this.position.x<this.size&&(this.position.x=this.size,this.speed.x=-this.speed.x),this.position.y>this.game.canvas.height-this.size?(this.position.y=this.game.canvas.height-this.size,this.speed.y=-this.speed.y):this.position.y<this.size&&(this.position.y=this.size,this.speed.y=-this.speed.y),"user"===this.type&&(this.state=t.earth?"earth":t.water?"water":t.air?"air":t.fire?"fire":"normal"),this.emitter.update(this.state,this.position,this.size)},Wisp.prototype.render=function(t){if(this.life){switch(t.save(),t.translate(this.position.x,this.position.y),t.beginPath(),t.arc(0,0,this.size,0,this.PI2,!1),this.state){case"earth":t.fillStyle=this.game.colours.earth.main,t.strokeStyle=this.game.colours.earth.dark;break;case"water":t.fillStyle=this.game.colours.water.main,t.strokeStyle=this.game.colours.water.dark;break;case"air":t.fillStyle=this.game.colours.air.main,t.strokeStyle=this.game.colours.air.dark;break;case"fire":t.fillStyle=this.game.colours.fire.main,t.strokeStyle=this.game.colours.fire.dark;break;default:t.fillStyle=this.game.colours.player.main,t.strokeStyle=this.game.colours.player.dark,t.stroke()}t.fill(),t.stroke(),t.restore()}this.emitter.render(this.position,t)};var MainScene=function(t){this.game=t,this.state="menu",this.rules={water:"fire",fire:"earth",earth:"air",air:"water"},this.menuTransition=new Transition,this.menuTransition.start(),this.pauseTransition=new Transition,this.shapes=new Shapes,this.canvas=window.document.createElement("canvas"),this.canvas.width=this.game.canvas.width,this.canvas.height=this.game.canvas.height,this.ctx=this.canvas.getContext("2d"),this.menuCanvas=window.document.createElement("canvas"),this.menuCanvas.width=this.game.canvas.width,this.menuCanvas.height=this.game.canvas.height,this.menuCtx=this.menuCanvas.getContext("2d"),this.drawMenu(),this.pauseCanvas=window.document.createElement("canvas"),this.pauseCanvas.width=this.game.canvas.width,this.pauseCanvas.height=this.game.canvas.height,this.pauseCtx=this.pauseCanvas.getContext("2d"),this.drawPause(),this.io=new IO(this.game.canvas,this.game),this.player=new Wisp(this.game,this.game.canvas.width/2,this.game.canvas.height/2,"user",this.ctx),this.player.size=5,this.cpus=[],this.cpuTypes=["earth","air","water","fire"];for(var e=5;e;)this.addCPU(),e--;return this.draw(),this};MainScene.prototype.addCPU=function(){var t,e,i;e=Math.random()*this.game.canvas.width,i=Math.random()*this.game.canvas.height,t=new Wisp(this.game,e,i,"cpu",this.ctx),t.state=this.cpuTypes[Math.floor(Math.random()*this.cpuTypes.length)],t.size=Math.random()*(this.player.size+5),this.cpus.push(t)},MainScene.prototype.update=function(){var t,e,i;switch(this.state){case"menu":case"transition-play":for(this.menuTransition.update(),t=0,e=this.cpus.length;e>t;t++)this.cpus[t].update();break;case"play":if(i=[],this.player.size<1&&(this.player.life=0),!this.player.life)return this.state="menu",this.game.hiscore?this.player.score>this.game.hiscore&&(this.game.hiscore=this.player.score):this.game.hiscore=this.player.score,this.drawMenu(),this.player.score=0,this.player.life=1,this.player.size=5,void(this.player.position={x:this.canvas.width/2,y:this.canvas.height/2});for(this.scaleWorld(),this.player.update(this.io.activeInput),t=0,e=this.cpus.length;e>t;t++)0===this.cpus[t].life&&i.push(t),this.cpus[t].update(null,this.cpus,this.player);for(t=0,e=i.length;e>t;t++)this.cpus.splice(i[t],1),this.addCPU();this.testCollision()}},MainScene.prototype.draw=function(){var t=this.ctx.createLinearGradient(0,0,this.canvas.width,this.canvas.height);t.addColorStop(0,"#004cb3"),t.addColorStop(1,"#8ed6ff"),this.ctx.fillStyle=t,this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height)},MainScene.prototype.drawMenu=function(t){var e,i,s,a,r,h,n;e=this.menuCtx,i=this.menuCanvas.width,s=this.menuCanvas.height,a=i/2,r=s/2,h=.4*i,n=.4*s,e.clearRect(0,0,i,s),e.save(),t&&(e.globalAlpha=t),e.save(),e.translate(a,r),e.beginPath(),e.moveTo(-h-10*Math.random(),-n-10*Math.random()),e.lineTo(h+10*Math.random(),-n-10*Math.random()),e.lineTo(h+10*Math.random(),n+10*Math.random()),e.lineTo(-h-10*Math.random(),n+10*Math.random()),e.closePath(),e.fillStyle=this.game.colours.menu.main,e.strokeStyle=this.game.colours.menu.light,e.fill(),e.stroke(),e.restore(),e.save(),e.translate(this.canvas.width-60,60),e.rotate(-10*(Math.PI/180)),e.scale(.5,.5),e.transform(1,.1,0,1,0,0),this.shapes.draw(e,"elements",[{fill:this.game.colours.water.main,radius:100},{fill:this.game.colours.fire.main,radius:100},{fill:this.game.colours.earth.main,radius:100},{fill:this.game.colours.air.main,radius:100}]),e.restore(),e.fillStyle="#fff",e.font='20px/24px "Trebuchet MS", Helvetica, sans-serif',e.textAlign="center",e.save(),e.translate(a,r-90),e.rotate(-2*Math.PI/180),e.fillText("Become the biggest",0,0),e.restore(),e.save(),e.translate(a,r-30),e.rotate(1*Math.PI/180),e.fillText("use the cursor",0,0),e.restore(),e.save(),e.translate(a,r-10),e.rotate(-1*Math.PI/180),e.fillText("keys to move",0,0),e.restore(),e.save(),e.fillStyle=this.game.colours.earth.main,e.translate(a-50,r+40),e.rotate(-3*Math.PI/180),e.fillText('earth "1"',0,0),e.restore(),e.save(),e.fillStyle=this.game.colours.air.main,e.translate(a+60,r+35),e.rotate(2*Math.PI/180),e.fillText('air "2"',0,0),e.restore(),e.save(),e.fillStyle=this.game.colours.water.main,e.translate(a+50,r+85),e.rotate(-2*Math.PI/180),e.fillText('water "3"',0,0),e.restore(),e.save(),e.fillStyle=this.game.colours.fire.main,e.translate(a-60,r+90),e.rotate(2*Math.PI/180),e.fillText('fire "4"',0,0),e.restore(),e.fillStyle="#fff",e.fillText("Press any key to start",a,r+150),"number"==typeof this.game.hiscore&&(e.save(),e.translate(a-80,r-160),e.rotate(-5*Math.PI/180),e.fillText("score: "+this.game.hiscore,0,0),e.restore()),e.restore()},MainScene.prototype.drawPause=function(){var t=this.pauseCtx;t.clearRect(0,0,this.pauseCanvas.width,this.pauseCanvas.height),t.save(),t.fillStyle="#fff",t.font="20px/24px Arial",t.textAlign="center",t.fillText("Paused",this.canvas.width/2,this.canvas.height/2),t.restore()},MainScene.prototype.render=function(){this.game.ctx.drawImage(this.canvas,0,0),"play"===this.state&&this.player.render(this.game.ctx);for(var t=0,e=this.cpus.length;e>t;t++)this.cpus[t].render(this.game.ctx);switch(this.state){case"menu":this.menuTransition.active?(this.game.ctx.globalAlpha=this.menuTransition.percent,this.game.ctx.drawImage(this.menuCanvas,0,0),this.game.ctx.globalAlpha=1):this.game.ctx.drawImage(this.menuCanvas,0,0);break;case"transition-play":this.menuTransition.active?(this.game.ctx.globalAlpha=this.menuTransition.percent,this.game.ctx.drawImage(this.menuCanvas,0,0),this.game.ctx.globalAlpha=1):this.state="play";break;case"pause":this.game.ctx.drawImage(this.pauseCanvas,0,0);break;case"play":this.game.ctx.fillStyle="#fff",this.game.ctx.font="20px/24px Arial",this.game.ctx.textAlign="center",this.game.ctx.fillText(this.player.score,this.canvas.width/2,20),this.game.ctx.save(),this.game.ctx.translate(this.canvas.width-20,20),this.game.ctx.rotate(-10*(Math.PI/180)),this.game.ctx.scale(.1,.1),this.game.ctx.globalAlpha=.5,this.game.ctx.transform(1,.1,0,1,0,0),this.shapes.draw(this.game.ctx,"elements",[{fill:this.game.colours.water.main,radius:100},{fill:this.game.colours.fire.main,radius:100},{fill:this.game.colours.earth.main,radius:100},{fill:this.game.colours.air.main,radius:100}]),this.game.ctx.restore()}},MainScene.prototype.testCollision=function(){var t,e,i,s,a,r,h,n,o,l,c,p,d,u;for(s=this.player.size,a=this.player.position.x+s,r=this.player.position.x-s,h=this.player.position.y+s,n=this.player.position.y-s,t=0,e=this.cpus.length;e>t;t++)i=this.cpus[t],a>i.position.x&&r<i.position.x&&h>i.position.y&&n<i.position.y&&this.destroySmallest(this.player,i);t=0;var m;for(e=this.cpus.length;e>t;t++)for(i=this.cpus[t],o=i.size,l=i.position.x+o,c=i.position.x-o,p=i.position.y+o,d=i.position.y-o,l>this.player.position.x&&c<this.player.position.x&&p>this.player.position.y&&d<this.player.position.y&&this.destroySmallest(i,this.player),m=t;e>m;m++)u=this.cpus[m],l>u.position.x&&c<u.position.x&&p>u.position.y&&d<u.position.y&&this.destroySmallest(i,u)},MainScene.prototype.destroySmallest=function(t,e){var i,s,a,r,h;h=10,i=this.rules[t.state],s=this.rules[e.state],a=t.size+(e.state===i?h:0),r=e.size+(t.state===s?h:0),a>r?(t.size++,t.score+=2,e.size--,e.size<=0&&(e.life=0)):(e.size++,e.score+=2,t.size--,t.size<=0&&(t.life=0))},MainScene.prototype.scaleSprites=function(){var t,e,i;for(i=.99,this.player.size*=i,t=0,e=this.cpus.length;e>t;t++)this.cpus[t].size*=i},MainScene.prototype.scaleWorld=function(){var t,e;for(this.player.size>10&&this.scaleSprites(),t=0,e=this.cpus.length;e>t;t++)this.cpus[t].size>10&&this.scaleSprites()},window.onload=function(){var t=new Game(320,480);t.start()};