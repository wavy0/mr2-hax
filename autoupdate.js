// ==UserScript==
// @name         MiniRoyale 2 Mod
// @version      1.8
// @description  An overpowered mini royale mod made by ɹaɹoldxa ʇauɹaʇu!#2036 & Blockman_#0431!
// @author       ɹaɹoldxa ʇauɹaʇu!#2036 & Blockman_#0431
// @match        *://miniroyale2.io/*
// @iconURL      https://miniroyale2.io/favicon.ico
// ==/UserScript==

/*
...< Features >...

- Aimbot
- All Skins Unlocke
- Fly
- ESP
- Tracers
- Auto CTF
- No Zone Damages
- Infinite Ammo
- No Recoil
- No Spread
- Automatic Weapons
- 0 Fire rate
- Advanced Teleport
- Nuke
- Infinite Needles in BR

...< Chat Commands >...

/map = Check in which map you are currently on
/tp [x] [y] [z] = Teleport your body to X Y Z coordinates
/tp [username] = Teleport your body to an enemy with his username
/tp [@p] = Teleport your body to the closest enemy
/tp [@r] = Teleport your body to a random enemy
/tp [~x] [~y] [~z] = Translate your body (relative to your actual position)
/nuke = BOOM (Kill everyone)

...< Made by ɹaɹoldxa ʇauɹaʇu!#2036 & Blockman_#0431 >...
*/

(function(){'use strict';confirm(`Mod by ɹaɹoldxa ʇauɹaʇu!#2036 & Blockman_#0431\nJoin Gaming Gurus on Discord for more mods !`)&&window.open("https://discord.gg/wGuxrmt");var a={};a.display=!0,a.tracers=!0,a.aimbot=!0,a.esp=!0,a.names=!0,a.cf=!1,a.fly=!0,document.addEventListener("keypress",b=>{var c;switch(b.key){case"`":a.display=!a.display;break;case"3":a.aimbot=!a.aimbot,c=document.getElementsByClassName("settings")[0],a.aimbot?(c.innerHTML="ON",c.style.color="#0F0"):(c.innerHTML="OFF",c.style.color="#F00"),this.addMessage("Aimbot",a.aimbot);break;case"4":a.esp=!a.esp,c=document.getElementsByClassName("settings")[1],a.esp?(c.innerHTML="ON",c.style.color="#0F0"):(c.innerHTML="OFF",c.style.color="#F00");break;case"5":a.tracers=!a.tracers,c=document.getElementsByClassName("settings")[2],a.tracers?(c.innerHTML="ON",c.style.color="#0F0"):(c.innerHTML="OFF",c.style.color="#F00");break;case"6":a.names=!a.names,c=document.getElementsByClassName("settings")[3],a.names?(c.innerHTML="ON",c.style.color="#0F0"):(c.innerHTML="OFF",c.style.color="#F00");break;case"7":a.cf=!a.cf,c=document.getElementsByClassName("settings")[4],a.cf?(c.innerHTML="ON",c.style.color="#0F0"):(c.innerHTML="OFF",c.style.color="#F00");break;case"8":a.fly=!a.fly,c=document.getElementsByClassName("settings")[5],a.fly?(c.innerHTML="ON",c.style.color="#0F0"):(c.innerHTML="OFF",c.style.color="#F00");}});var b={};b.getEntityByName=function(a){return Object.values(pc.app._entityIndex).find(b=>b.name==a)},b.getEntitiesByName=function(a){return Object.values(pc.app._entityIndex).filter(b=>b.name==a)},b.getEntityByProperty=function(a,b){return Object.values(pc.app._entityIndex).find(c=>c[a]==b)},b.getEntitiesByProperty=function(a,b){return Object.values(pc.app._entityIndex).filter(c=>c[a]==b)},b.dist3d=function(a,b){var c=a.x-b.x,d=a.y-b.y,e=a.z-b.z;return Math.sqrt(c*c+d*d+e*e)},document.body.insertAdjacentHTML("beforeend",`<style>#gui{-webkit-touch-callout: none; /* iOS Safari */ -webkit-user-select: none; /* Safari */ -khtml-user-select: none; /* Konqueror HTML */ -moz-user-select: none; /* Old versions of Firefox */ -ms-user-select: none; /* Internet Explorer/Edge */ user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */ position: absolute; left:20vw; z-index: 999999; display: inline-block; font-size: 18px; color: #fff; background: #000a; border-radius: 5px; padding: 2.5px; border-bottom: 1px solid #000}.b{color: #fff}.r{color: fff}.g{color: fff}.gr{color: #aaa}</style><div id="gui" style="display: none;"> <code> <span class="gr">[3]</span> Aimbot : <span class="settings" style="color:#0F0;">ON</span><br><span class="gr">[4]</span> ESP : <span class="settings" style="color:#0F0;">ON</span><br><span class="gr">[5]</span> TRACERS : <span class="settings" style="color:#0F0;">ON</span><br><span class="gr">[6]</span> NAMES : <span class="settings" style="color:#0F0;">ON</span><br><span class="gr">[7]</span> Auto CTF : <span class="settings" style="color:#F00;">OFF</span><br><span class="gr">[8]</span> FLY : <span class="settings" style="color:#0F0;">ON</span><br><span class="gr">Position :</span> <span class="b">x</span> <span class="r">y</span> <span class="g">z</span></code></div>`);const c=function(){try{"function"==typeof Environment&&(Environment.prototype.update=function(){var b=this.playerCamera.getPosition().clone();this.parachutePlayerEntity.enabled&&(b=this.parachutePlayerEntity.getPosition().clone());var c=new pc.Vec3(b.x,0,b.z),d=b.sub(Utils.zeroVector.clone()).length();if(this.domeEntity.setPosition(c),this.cloudsEntity.rotateLocal(0,.005,0),42e3<Date.now()-this.lastBirdSound&&!this.bombFelt&&(this.entity.sound.play("Seagull"),this.lastBirdSound=Date.now()),2500<Date.now()-this.lastShadowUpdate&&this.sunLight&&this.sunLight&&(this.sunLight.light.shadowUpdateMode=pc.SHADOWUPDATE_NONE,this.lastShadowUpdate=Date.now(),this.nextFrameAffect=!0),this.nextFrameAffect&&this.sunLight&&(this.sunLight.light.shadowUpdateMode=pc.SHADOWUPDATE_THISFRAME,this.sunLight.light.updateShadow(),this.nextFrameAffect=!1),d>this.mapLimit-30){var e=Math.max((d-this.mapLimit)/30,.1);this.limitEntity.enabled=!0,this.entity.sound.slots.Buzz.isPlaying||(this.entity.sound.slots.Buzz.volume=e,this.entity.sound.play("Buzz")),this.limitMaterial.resource.opacity=e,this.limitMaterial.resource.update(),.5<(d-this.mapLimit)/30&&this.playerEntity.enabled&&this.playerEntity.script&&!this.playerEntity.script.movement.onParachute&&1e3<Date.now()-this.lastHurtTime&&(console.log("lel"),this.lastHurtTime=Date.now())}else this.limitEntity.enabled&&(this.limitEntity.enabled=!1,this.entity.sound.stop("Buzz"));if(this.selectedRadiusEntity&&"battle-royale"==pc.currentMode){var f=this.currentCircleScale,a=b.sub(this.selectedRadiusEntity.getPosition().clone()).length();if(this.bombFelt){var g=this.smokeCircle.getLocalPosition().clone(),j=this.selectedRadiusEntity.getPosition().clone();this.currentCirclePosition=this.currentCirclePosition.lerp(g,j,.01),this.smokeCircle.setLocalPosition(this.currentCirclePosition),this.smokeCircle.setLocalScale(this.currentCircleScale,1,this.currentCircleScale),this.sunLight.light.intensity=pc.math.lerp(this.sunLight.light.intensity,this.lightIntensity,.1),a>f*this.limitFactor&&500<Date.now()-this.lastHurtTime&&(this.app.fire("Player:Cough",!0),console.log("lel"),this.lastHurtTime=Date.now())}this.bombFelt||this.app.fire("Player:Warn","evacuate",a>f-25)}}),"function"==typeof Profile&&(Profile.prototype.getSkins=function(){this.setSkins({success:!0,skins:[{name:"Biker",quantity:9999},{name:"BusinessMan",quantity:9999},{name:"Criminal",quantity:9999},{name:"Hazmat",quantity:9999},{name:"Homeless",quantity:9999},{name:"Hunter",quantity:9999},{name:"Islander",quantity:9999},{name:"RiotCop",quantity:9999},{name:"Sheriff",quantity:9999},{name:"Soldier",quantity:9999}]})});var d=b.getEntityByName("NetworkManager"),e=b.getEntityByName("Player"),f=e.script.movement,g=f.currentWeaponDetails,h=Object.values(pc.app._entityIndex).filter(a=>"Enemy"==a.name&&a.script.enemy.username&&a.team!==e.script.movement.team);if(e){function b(a,b,c){e.rigidbody.teleport(a,b,c)}document.getElementById("gui").style.display=a.display?"inline-block":"none",document.querySelector(".b").innerHTML=Math.round(e.position.x),document.querySelector(".r").innerHTML=Math.round(e.position.y),document.querySelector(".g").innerHTML=Math.round(e.position.z),a.cf&&d&&"capture-the-flag"==pc.currentMode&&(d.script.network.setFlagBack(),d.script.network.setSavedFlag(),d.script.network.setCaptureFlag()),"function"==typeof Chat&&(Chat.prototype.sendMessage=function(){try{if(!this.entity.enabled)return!1;var a=this.chatInput.script.input.getValue(),c=a.split(" ");if("/map"==c[0])return this.addMessage("Map",pc.selectedMap),this.chatInput.script.input.setValue(""),!1;if("/tp"==c[0]){if(j.includes(c[1].toLowerCase())&&!c[2])return e.rigidbody.teleport(h.find(a=>a.script.enemy.username.toLowerCase()==c[1].toLowerCase()).position),this.addMessage("Teleport",c[1]),this.chatInput.script.input.setValue(""),!1;if("@p"==c[1]&&!c[2]){let a=h[0].position;return b(a.x,a.y,a.z),this.addMessage("Teleport","Closest Player"),this.chatInput.script.input.setValue(""),!1}if("@r"==c[1]&&!c[2]){let a=h[Math.floor(Math.random()*Math.floor(h.length-1))].position;return b(a.x,a.y,a.z),this.addMessage("Teleport","Random Player"),this.chatInput.script.input.setValue(""),!1}if(c[1]&&c[2]&&c[3])return"~"==c[1].substr(0,1)&&(c[1]=e.position.x+ +c[1].slice(1)),"~"==c[2].substr(0,1)&&(c[2]=e.position.y+ +c[2].slice(1)),"~"==c[3].substr(0,1)&&(c[3]=e.position.z+ +c[3].slice(1)),b(c[1],c[2],c[3]),this.addMessage("Teleport",`${c[1]}, ${c[2]}, ${c[3]}`),this.chatInput.script.input.setValue(""),!1}if("/nuke"==c[0]&&h)return h.forEach(a=>{let b=a.position;pc.controls.network.setExplosion(b.x,b.y,b.z)}),this.addMessage("Nuke","Boom !"),this.chatInput.script.input.setValue(""),!1;a&&(this.app.fire("Event:SendChat",a),this.chatInput.script.input.setValue(""))}catch(a){}}),"function"==typeof PlayerNames&&(a.names?PlayerNames.prototype.isVisible=function(){return!1}:PlayerNames.prototype.isVisible=function(a){var b=this.app.systems.rigidbody.raycastFirst(this.lookPoint.getPosition(),a.clone());return!b||!b.entity||"Enemy"!=b.entity.name})}if(f&&(f.jump=a.fly?function(){this.disablePeek(),this.isCrouching=!1,this.isJumping=2,this.app.tween(this.animation).to({jumpAngle:-11},.15,pc.BackOut).start(),this.isLanded=!1,this.airTime=Date.now(),this.jumpingTime=this.fullTimestamp+this.jumpDuration,this.dynamicGravity=0;var a=Math.floor(this.timestamp%2)+1;this.entity.sound.play("Jump-"+a),f.setMovement=function(){if(!this.isMovementAllowed())return!1;var b=this.cameraEntity.forward,c=this.cameraEntity.right;this.allForce.x=0;var d,f,g,i=this.allForce.z=0,j=0,k=!1,l=!1;this.wasReleased("W")&&(this.forwardCount=0,this.leftCount=0,this.entity.sound.stop("HeavyBreath")),(this.wasReleased("A")||this.wasReleased("D"))&&(this.leftCount=0),this.isPressed("Z")&&(this.isFocusing=!0,this.shootingTime=-1),this.wasReleased("Z")&&(this.isFocusing=!1),this.jumpingTime+this.jumpLandTime<this.fullTimestamp&&(this.isForward=!1,this.isBackward=!1,this.isLeft=!1,this.isRight=!1),(this.isPressed("W")&&!this.inControl||this.keyboard.up)&&(this.isForward=!0),(this.isPressed("A")&&!this.inControl||this.keyboard.left)&&(this.isLeft=!0),(this.isPressed("D")&&!this.inControl||this.keyboard.right)&&(this.isRight=!0),(this.isPressed("S")&&!this.inControl||this.keyboard.down)&&(this.isBackward=!0),this.isForward&&(i+=b.x,j+=b.z,l=k=!0,this.isCrouching?this.forwardCount+=.5:this.forwardCount++),this.isLeft&&(i-=c.x,j-=c.z,k=!0,this.leftCount++),this.isRight&&(i+=c.x,j+=c.z,k=!0,this.leftCount--),this.isBackward&&(i-=b.x,j-=b.z,k=!0,this.isCrouching?this.forwardCount-=.5:this.forwardCount--),this.inControl?(this.keyboard.shift&&(this.isShifting=!0,this.isCrouching=!1,this.isFocusing=!1,this.disablePeek()),this.keyboard.jump&&this.jump(),this.keyboard.reload&&this.reload(),this.isPeekingLeft=!!this.keyboard.peek_left,this.isPeekingRight=!!this.keyboard.peek_right,this.isCrouching=!!this.keyboard.crouch):(this.wasPressed("SHIFT")&&(this.isShifting=!0,this.isCrouching=!1,this.isFocusing=!1,this.disablePeek()),this.wasReleased("SHIFT")&&(this.isShifting=!1),this.wasPressed("R")&&this.reload(),this.isPressed("SPACE")&&this.jump(),this.wasPressed("C")&&this.crouch(),this.wasPressed("X")&&"battle-royale"==pc.currentMode&&this.useNeedle(),this.wasPressed("Q")&&(this.isPeekingLeft=!0,this.peekLeft()),this.wasReleased("Q")&&(this.isPeekingLeft=!1),this.wasPressed("E")&&(this.isPeekingRight=!0,this.peekRight()),this.wasReleased("E")&&(this.isPeekingRight=!1),this.wasReleased("F")&&(this.doRaycast(!0),this.doAction()),this.wasReleased("V"),!this.isThrowingStarted&&this.isShooting&&"Grenade"==this.currentWeaponDetails.type&&this.startThrowing(),this.isThrowingStarted&&!this.isShooting&&"Grenade"==this.currentWeaponDetails.type&&this.throwGrenade(),this.wasPressed("1")&&this.setWeapon(this.inventory.getItemByIndex(1)),this.wasPressed("2")&&this.setWeapon(this.inventory.getItemByIndex(2)),this.wasPressed("3")&&this.setWeapon(this.inventory.getItemByIndex(3)),this.wasPressed("4")&&this.setWeapon(this.inventory.getItemByIndex(4)),this.wasPressed("5")&&this.setWeapon(this.inventory.getItemByIndex(5)),this.wasPressed("TAB")&&"capture-the-flag"==pc.currentMode&&(this.isInBase?this.interface.toggleBuyMenu():this.interface.showAlert("You can only select weapons in-base.","error","flag"))),0!==i&&0!==j?(d=this.power,this.isCrouching&&(d*=.4),this.isFocusing&&(d*=.8),"Handgun"==this.attachment.type&&(d*=1.2),this.isShifting||(d*=1.35),0<this.isJumping&&(d*=1.05),this.currentSpeed=d/this.animationSpeed,f=this.lastCurrentPower,k&&1.5>this.height&&(this.forceX=i,this.forceZ=j,this.lastCurrentPower=d),l||(f*=.7,this.currentSpeed=.7*this.currentSpeed),0<this.isVaccinate&&(f*=.6),60>this.currentHealth&&(f*=.95),1e3>this.currentDate-this.lastDamageTime&&(f*=.85),300>this.currentDate-this.lastShootTime&&(f*=.5),g=this.currentSpeed*this.vibrationFactor,this.runVibration=this.isFocusing||this.isCrouching?0:.2*Math.cos(this.timestamp/g),this.runVibration=pc.math.lerp(this.runVibration,0,.05),this.force.set(this.forceX,0,this.forceZ).normalize().scale(f),this.allForce.x=this.force.x,this.allForce.z=this.force.z,this.currentVibration++):this.currentSpeed=0,k||(this.currentSpeed=0),300<this.forwardCount&&.5<=this.currentSpeed&&(this.entity.sound.slot("HeavyBreath").isPlaying||this.entity.sound.play("HeavyBreath")),this.currentVelocity=this.entity.rigidbody.linearVelocity.length(),this.checkRescueMode(),this.setCrosshair(this.currentSpeed)}}:function(){var a;1.5>=this.height&&(this.disablePeek(),this.isCrouching=!1,this.isJumping=2,this.app.tween(this.animation).to({jumpAngle:-11},.15,pc.BackOut).start(),this.isLanded=!1,this.airTime=Date.now(),this.jumpingTime=this.fullTimestamp+this.jumpDuration,this.dynamicGravity=0,a=Math.floor(this.timestamp%2)+1,this.entity.sound.play("Jump-"+a),f.setMovement=function(){if(!this.isMovementAllowed())return!1;var b=this.cameraEntity.forward,c=this.cameraEntity.right;this.allForce.x=0;var d,f,g,i=this.allForce.z=0,j=0,k=!1,l=!1;this.wasReleased("W")&&(this.forwardCount=0,this.leftCount=0,this.entity.sound.stop("HeavyBreath")),(this.wasReleased("A")||this.wasReleased("D"))&&(this.leftCount=0),this.isPressed("Z")&&(this.isFocusing=!0,this.shootingTime=-1),this.wasReleased("Z")&&(this.isFocusing=!1),this.jumpingTime+this.jumpLandTime<this.fullTimestamp&&(this.isForward=!1,this.isBackward=!1,this.isLeft=!1,this.isRight=!1),(this.isPressed("W")&&!this.inControl||this.keyboard.up)&&(this.isForward=!0),(this.isPressed("A")&&!this.inControl||this.keyboard.left)&&(this.isLeft=!0),(this.isPressed("D")&&!this.inControl||this.keyboard.right)&&(this.isRight=!0),(this.isPressed("S")&&!this.inControl||this.keyboard.down)&&(this.isBackward=!0),this.isForward&&(i+=b.x,j+=b.z,l=k=!0,this.isCrouching?this.forwardCount+=.5:this.forwardCount++),this.isLeft&&(i-=c.x,j-=c.z,k=!0,this.leftCount++),this.isRight&&(i+=c.x,j+=c.z,k=!0,this.leftCount--),this.isBackward&&(i-=b.x,j-=b.z,k=!0,this.isCrouching?this.forwardCount-=.5:this.forwardCount--),this.inControl?(this.keyboard.shift&&(this.isShifting=!0,this.isCrouching=!1,this.isFocusing=!1,this.disablePeek()),this.keyboard.jump&&this.jump(),this.keyboard.reload&&this.reload(),this.isPeekingLeft=!!this.keyboard.peek_left,this.isPeekingRight=!!this.keyboard.peek_right,this.isCrouching=!!this.keyboard.crouch):(this.wasPressed("SHIFT")&&(this.isShifting=!0,this.isCrouching=!1,this.isFocusing=!1,this.disablePeek()),this.wasReleased("SHIFT")&&(this.isShifting=!1),this.wasPressed("R")&&this.reload(),this.wasPressed("SPACE")&&this.jump(),this.wasPressed("C")&&this.crouch(),this.wasPressed("X")&&this.useNeedle(),this.wasPressed("Q")&&(this.isPeekingLeft=!0,this.peekLeft()),this.wasReleased("Q")&&(this.isPeekingLeft=!1),this.wasPressed("E")&&(this.isPeekingRight=!0,this.peekRight()),this.wasReleased("E")&&(this.isPeekingRight=!1),this.wasReleased("F")&&(this.doRaycast(!0),this.doAction()),this.wasReleased("V"),!this.isThrowingStarted&&this.isShooting&&"Grenade"==this.currentWeaponDetails.type&&this.startThrowing(),this.isThrowingStarted&&!this.isShooting&&"Grenade"==this.currentWeaponDetails.type&&this.throwGrenade(),this.wasPressed("1")&&this.setWeapon(this.inventory.getItemByIndex(1)),this.wasPressed("2")&&this.setWeapon(this.inventory.getItemByIndex(2)),this.wasPressed("3")&&this.setWeapon(this.inventory.getItemByIndex(3)),this.wasPressed("4")&&this.setWeapon(this.inventory.getItemByIndex(4)),this.wasPressed("5")&&this.setWeapon(this.inventory.getItemByIndex(5)),this.wasPressed("TAB")&&"capture-the-flag"==pc.currentMode&&(this.isInBase?this.interface.toggleBuyMenu():this.interface.showAlert("You can only select weapons in-base.","error","flag"))),0!==i&&0!==j?(d=this.power,this.isCrouching&&(d*=.4),this.isFocusing&&(d*=.8),"Handgun"==this.attachment.type&&(d*=1.2),this.isShifting||(d*=1.35),0<this.isJumping&&(d*=1.05),this.currentSpeed=d/this.animationSpeed,f=this.lastCurrentPower,k&&1.5>this.height&&(this.forceX=i,this.forceZ=j,this.lastCurrentPower=d),l||(f*=.7,this.currentSpeed=.7*this.currentSpeed),0<this.isVaccinate&&(f*=.6),60>this.currentHealth&&(f*=.95),1e3>this.currentDate-this.lastDamageTime&&(f*=.85),300>this.currentDate-this.lastShootTime&&(f*=.5),g=this.currentSpeed*this.vibrationFactor,this.runVibration=this.isFocusing||this.isCrouching?0:.2*Math.cos(this.timestamp/g),this.runVibration=pc.math.lerp(this.runVibration,0,.05),this.force.set(this.forceX,0,this.forceZ).normalize().scale(f),this.allForce.x=this.force.x,this.allForce.z=this.force.z,this.currentVibration++):this.currentSpeed=0,k||(this.currentSpeed=0),300<this.forwardCount&&.5<=this.currentSpeed&&(this.entity.sound.slot("HeavyBreath").isPlaying||this.entity.sound.play("HeavyBreath")),this.currentVelocity=this.entity.rigidbody.linearVelocity.length(),this.checkRescueMode(),this.setCrosshair(this.currentSpeed)})},Movement.prototype.useNeedle=function(){this.onLeftHand=!0,this.attachmentsEntity.enabled=!1,this.leftHandWeapons.enabled=!1,this.needleEntity.enabled=!0,this.isVaccinate=200,this.inventory.useStack("Needle",1),setTimeout(function(a){a.entity.sound.play("Stab-Needle")},1e3,this),setTimeout(function(a){a.entity.sound.play("Breath-out"),a.needleEntity.enabled=!1,a.onLeftHand=!1,a.isVaccinate=0;var b=100-a.currentHealth;0<b&&100>b&&a.app.fire("Player:Heal",b),a.interface.showFeeling("healing",3,1),a.leftHandWeapons.enabled=!0,a.attachmentsEntity.enabled=!0,a.setAnimation("Takeout",1,.2,!1,function(){})},2200,this),this.setAnimation("Left-Needle",1,.2,!1,function(){})}),g&&(g.currentAmmo=1/0,g.spread=0,g.automatic=!0,g.shootRate=0,g.recoil=0),h){var j=[];let c=0;h.forEach(d=>{if(j.push(d.script.enemy.username.toLowerCase()),d.script.enemy.isDeath&&h.splice(c,1),a.esp&&!d.script.enemy.isDeath?(d.children[2].enabled=!0,d.children[2].model.material.depthTest=!1,d.children[2].model.material._opacity=.5):d.children[2].enabled=!1,a.tracers&&!d.script.enemy.isDeath){let a=new pc.Vec3(d.position.x,d.position.y,d.position.z),b=new pc.Vec3(e.position.x,e.position.y,e.position.z),c=new pc.Color(1,0,0);pc.app.renderLine(a,b,c)}d.children[2].model.material.update(),d.distance=b.dist3d(e.position,d.position),c++}),h.sort((c,a)=>c.distance>a.distance?1:-1),f.fireBullet=function(){var b,c;h[0]&&a.aimbot?(c=h[0].position,c.y+=.6,b=c):b=this.raycast.to;var d=this.currentWeaponDetails.spread,e=.8*this.currentWeaponDetails.damage+Math.random()*this.currentWeaponDetails.damage;e=Math.min(e,this.currentWeaponDetails.damage),e=Math.floor(e),this.currentWeaponDetails.bigScope&&!this.isFocusing?(b.x+=60*Math.random()-60*Math.random(),b.y+=60*Math.random()-60*Math.random(),b.z+=60*Math.random()-60*Math.random()):this.currentWeaponDetails.isShotgun?(b.x+=(40*Math.random()-40*Math.random())*d,b.y+=(40*Math.random()-40*Math.random())*d,b.z+=(40*Math.random()-40*Math.random())*d):this.isFocusing?(b.x+=(1*this.currentRecoilForce*Math.random()-1*this.currentRecoilForce*Math.random())*d,b.y+=(1*this.currentRecoilForce*Math.random()-1*this.currentRecoilForce*Math.random())*d,b.z+=(1*this.currentRecoilForce*Math.random()-1*this.currentRecoilForce*Math.random())*d):(b.x+=(10*this.currentRecoilForce*Math.random()-10*this.currentRecoilForce*Math.random())*d,b.y+=(10*this.currentRecoilForce*Math.random()-10*this.currentRecoilForce*Math.random())*d,b.z+=(10*this.currentRecoilForce*Math.random()-10*this.currentRecoilForce*Math.random())*d),this.app.fire("Bullet:Fire",this.hash,this.raycast.muzzle,b,this.raycast.muzzle,e),this.shotgunBullets--}}}catch(a){}window.requestAnimationFrame(c)};window.requestAnimationFrame(c)})();
