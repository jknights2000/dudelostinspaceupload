gdjs.UranusCode = {};
gdjs.UranusCode.forEachIndex2 = 0;

gdjs.UranusCode.forEachIndex3 = 0;

gdjs.UranusCode.forEachObjects2 = [];

gdjs.UranusCode.forEachObjects3 = [];

gdjs.UranusCode.forEachTemporary2 = null;

gdjs.UranusCode.forEachTemporary3 = null;

gdjs.UranusCode.forEachTotalCount2 = 0;

gdjs.UranusCode.forEachTotalCount3 = 0;

gdjs.UranusCode.GDPlayerObjects1= [];
gdjs.UranusCode.GDPlayerObjects2= [];
gdjs.UranusCode.GDPlayerObjects3= [];
gdjs.UranusCode.GDalienfloorObjects1= [];
gdjs.UranusCode.GDalienfloorObjects2= [];
gdjs.UranusCode.GDalienfloorObjects3= [];
gdjs.UranusCode.GDrocketplatObjects1= [];
gdjs.UranusCode.GDrocketplatObjects2= [];
gdjs.UranusCode.GDrocketplatObjects3= [];
gdjs.UranusCode.GDcloudObjects1= [];
gdjs.UranusCode.GDcloudObjects2= [];
gdjs.UranusCode.GDcloudObjects3= [];
gdjs.UranusCode.GDboltObjects1= [];
gdjs.UranusCode.GDboltObjects2= [];
gdjs.UranusCode.GDboltObjects3= [];
gdjs.UranusCode.GDscoreObjects1= [];
gdjs.UranusCode.GDscoreObjects2= [];
gdjs.UranusCode.GDscoreObjects3= [];
gdjs.UranusCode.GDliveObjects1= [];
gdjs.UranusCode.GDliveObjects2= [];
gdjs.UranusCode.GDliveObjects3= [];
gdjs.UranusCode.GDlivesObjects1= [];
gdjs.UranusCode.GDlivesObjects2= [];
gdjs.UranusCode.GDlivesObjects3= [];
gdjs.UranusCode.GDrobottingObjects1= [];
gdjs.UranusCode.GDrobottingObjects2= [];
gdjs.UranusCode.GDrobottingObjects3= [];
gdjs.UranusCode.GDleftObjects1= [];
gdjs.UranusCode.GDleftObjects2= [];
gdjs.UranusCode.GDleftObjects3= [];
gdjs.UranusCode.GDrightObjects1= [];
gdjs.UranusCode.GDrightObjects2= [];
gdjs.UranusCode.GDrightObjects3= [];
gdjs.UranusCode.GDcrashedshipObjects1= [];
gdjs.UranusCode.GDcrashedshipObjects2= [];
gdjs.UranusCode.GDcrashedshipObjects3= [];
gdjs.UranusCode.GDnotcompleteObjects1= [];
gdjs.UranusCode.GDnotcompleteObjects2= [];
gdjs.UranusCode.GDnotcompleteObjects3= [];
gdjs.UranusCode.GDendObjects1= [];
gdjs.UranusCode.GDendObjects2= [];
gdjs.UranusCode.GDendObjects3= [];
gdjs.UranusCode.GDtimerObjects1= [];
gdjs.UranusCode.GDtimerObjects2= [];
gdjs.UranusCode.GDtimerObjects3= [];
gdjs.UranusCode.GDcheatsObjects1= [];
gdjs.UranusCode.GDcheatsObjects2= [];
gdjs.UranusCode.GDcheatsObjects3= [];
gdjs.UranusCode.GDBlueEnemy1Objects1= [];
gdjs.UranusCode.GDBlueEnemy1Objects2= [];
gdjs.UranusCode.GDBlueEnemy1Objects3= [];
gdjs.UranusCode.GDRedLaser08Objects1= [];
gdjs.UranusCode.GDRedLaser08Objects2= [];
gdjs.UranusCode.GDRedLaser08Objects3= [];
gdjs.UranusCode.GDGreenLaser09Objects1= [];
gdjs.UranusCode.GDGreenLaser09Objects2= [];
gdjs.UranusCode.GDGreenLaser09Objects3= [];
gdjs.UranusCode.GDNewObject3Objects1= [];
gdjs.UranusCode.GDNewObject3Objects2= [];
gdjs.UranusCode.GDNewObject3Objects3= [];
gdjs.UranusCode.GDgamelifeObjects1= [];
gdjs.UranusCode.GDgamelifeObjects2= [];
gdjs.UranusCode.GDgamelifeObjects3= [];
gdjs.UranusCode.GDfpsObjects1= [];
gdjs.UranusCode.GDfpsObjects2= [];
gdjs.UranusCode.GDfpsObjects3= [];

gdjs.UranusCode.conditionTrue_0 = {val:false};
gdjs.UranusCode.condition0IsTrue_0 = {val:false};
gdjs.UranusCode.condition1IsTrue_0 = {val:false};
gdjs.UranusCode.condition2IsTrue_0 = {val:false};
gdjs.UranusCode.condition3IsTrue_0 = {val:false};
gdjs.UranusCode.conditionTrue_1 = {val:false};
gdjs.UranusCode.condition0IsTrue_1 = {val:false};
gdjs.UranusCode.condition1IsTrue_1 = {val:false};
gdjs.UranusCode.condition2IsTrue_1 = {val:false};
gdjs.UranusCode.condition3IsTrue_1 = {val:false};


gdjs.UranusCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.UranusCode.GDPlayerObjects1, gdjs.UranusCode.GDPlayerObjects2);


gdjs.UranusCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.UranusCode.GDPlayerObjects2.length;i<l;++i) {
    if ( !(gdjs.UranusCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.UranusCode.condition0IsTrue_0.val = true;
        gdjs.UranusCode.GDPlayerObjects2[k] = gdjs.UranusCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.UranusCode.GDPlayerObjects2.length = k;}if (gdjs.UranusCode.condition0IsTrue_0.val) {
/* Reuse gdjs.UranusCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.UranusCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.UranusCode.GDPlayerObjects2[i].setAnimationName("stand");
}
}}

}


{

gdjs.copyArray(gdjs.UranusCode.GDPlayerObjects1, gdjs.UranusCode.GDPlayerObjects2);


gdjs.UranusCode.condition0IsTrue_0.val = false;
gdjs.UranusCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.UranusCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.UranusCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.UranusCode.condition0IsTrue_0.val = true;
        gdjs.UranusCode.GDPlayerObjects2[k] = gdjs.UranusCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.UranusCode.GDPlayerObjects2.length = k;}if ( gdjs.UranusCode.condition0IsTrue_0.val ) {
{
gdjs.UranusCode.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}}
if (gdjs.UranusCode.condition1IsTrue_0.val) {
/* Reuse gdjs.UranusCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.UranusCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.UranusCode.GDPlayerObjects2[i].setAnimationName("run");
}
}{for(var i = 0, len = gdjs.UranusCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.UranusCode.GDPlayerObjects2[i].playAnimation();
}
}{for(var i = 0, len = gdjs.UranusCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.UranusCode.GDPlayerObjects2[i].flipX(false);
}
}}

}


{

/* Reuse gdjs.UranusCode.GDPlayerObjects1 */

gdjs.UranusCode.condition0IsTrue_0.val = false;
gdjs.UranusCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.UranusCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.UranusCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.UranusCode.condition0IsTrue_0.val = true;
        gdjs.UranusCode.GDPlayerObjects1[k] = gdjs.UranusCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.UranusCode.GDPlayerObjects1.length = k;}if ( gdjs.UranusCode.condition0IsTrue_0.val ) {
{
gdjs.UranusCode.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}}
if (gdjs.UranusCode.condition1IsTrue_0.val) {
/* Reuse gdjs.UranusCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.UranusCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.UranusCode.GDPlayerObjects1[i].setAnimationName("run");
}
}{for(var i = 0, len = gdjs.UranusCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.UranusCode.GDPlayerObjects1[i].playAnimation();
}
}{for(var i = 0, len = gdjs.UranusCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.UranusCode.GDPlayerObjects1[i].flipX(true);
}
}}

}


};gdjs.UranusCode.mapOfGDgdjs_46UranusCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.UranusCode.GDPlayerObjects1});gdjs.UranusCode.mapOfGDgdjs_46UranusCode_46GDboltObjects1Objects = Hashtable.newFrom({"bolt": gdjs.UranusCode.GDboltObjects1});gdjs.UranusCode.eventsList1 = function(runtimeScene) {

{


gdjs.UranusCode.condition0IsTrue_0.val = false;
{
gdjs.UranusCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(17)) == 0;
}if (gdjs.UranusCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "66136__aji__ding30603-spedup.wav", false, 5, 1);
}}

}


};gdjs.UranusCode.mapOfGDgdjs_46UranusCode_46GDBlueEnemy1Objects1Objects = Hashtable.newFrom({"BlueEnemy1": gdjs.UranusCode.GDBlueEnemy1Objects1});gdjs.UranusCode.mapOfGDgdjs_46UranusCode_46GDleftObjects1Objects = Hashtable.newFrom({"left": gdjs.UranusCode.GDleftObjects1});gdjs.UranusCode.mapOfGDgdjs_46UranusCode_46GDBlueEnemy1Objects1Objects = Hashtable.newFrom({"BlueEnemy1": gdjs.UranusCode.GDBlueEnemy1Objects1});gdjs.UranusCode.mapOfGDgdjs_46UranusCode_46GDrightObjects1Objects = Hashtable.newFrom({"right": gdjs.UranusCode.GDrightObjects1});gdjs.UranusCode.mapOfGDgdjs_46UranusCode_46GDrobottingObjects1Objects = Hashtable.newFrom({"robotting": gdjs.UranusCode.GDrobottingObjects1});gdjs.UranusCode.mapOfGDgdjs_46UranusCode_46GDleftObjects1Objects = Hashtable.newFrom({"left": gdjs.UranusCode.GDleftObjects1});gdjs.UranusCode.mapOfGDgdjs_46UranusCode_46GDrobottingObjects1Objects = Hashtable.newFrom({"robotting": gdjs.UranusCode.GDrobottingObjects1});gdjs.UranusCode.mapOfGDgdjs_46UranusCode_46GDrightObjects1Objects = Hashtable.newFrom({"right": gdjs.UranusCode.GDrightObjects1});gdjs.UranusCode.eventsList2 = function(runtimeScene) {

};gdjs.UranusCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("bolt"), gdjs.UranusCode.GDboltObjects1);

for(gdjs.UranusCode.forEachIndex2 = 0;gdjs.UranusCode.forEachIndex2 < gdjs.UranusCode.GDboltObjects1.length;++gdjs.UranusCode.forEachIndex2) {
gdjs.UranusCode.GDboltObjects2.length = 0;


gdjs.UranusCode.forEachTemporary2 = gdjs.UranusCode.GDboltObjects1[gdjs.UranusCode.forEachIndex2];
gdjs.UranusCode.GDboltObjects2.push(gdjs.UranusCode.forEachTemporary2);
gdjs.UranusCode.condition0IsTrue_0.val = false;
{
gdjs.UranusCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.UranusCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(4).add(1);
}}
}

}


};gdjs.UranusCode.mapOfGDgdjs_46UranusCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.UranusCode.GDPlayerObjects1});gdjs.UranusCode.mapOfGDgdjs_46UranusCode_46GDrobottingObjects1Objects = Hashtable.newFrom({"robotting": gdjs.UranusCode.GDrobottingObjects1});gdjs.UranusCode.mapOfGDgdjs_46UranusCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.UranusCode.GDPlayerObjects1});gdjs.UranusCode.mapOfGDgdjs_46UranusCode_46GDBlueEnemy1Objects1Objects = Hashtable.newFrom({"BlueEnemy1": gdjs.UranusCode.GDBlueEnemy1Objects1});gdjs.UranusCode.mapOfGDgdjs_46UranusCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.UranusCode.GDPlayerObjects1});gdjs.UranusCode.mapOfGDgdjs_46UranusCode_46GDrobottingObjects1Objects = Hashtable.newFrom({"robotting": gdjs.UranusCode.GDrobottingObjects1});gdjs.UranusCode.mapOfGDgdjs_46UranusCode_46GDalienfloorObjects1Objects = Hashtable.newFrom({"alienfloor": gdjs.UranusCode.GDalienfloorObjects1});gdjs.UranusCode.mapOfGDgdjs_46UranusCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.UranusCode.GDPlayerObjects1});gdjs.UranusCode.mapOfGDgdjs_46UranusCode_46GDalienfloorObjects1Objects = Hashtable.newFrom({"alienfloor": gdjs.UranusCode.GDalienfloorObjects1});gdjs.UranusCode.mapOfGDgdjs_46UranusCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.UranusCode.GDPlayerObjects1});gdjs.UranusCode.mapOfGDgdjs_46UranusCode_46GDrocketplatObjects1Objects = Hashtable.newFrom({"rocketplat": gdjs.UranusCode.GDrocketplatObjects1});gdjs.UranusCode.mapOfGDgdjs_46UranusCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.UranusCode.GDPlayerObjects1});gdjs.UranusCode.mapOfGDgdjs_46UranusCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.UranusCode.GDPlayerObjects1});gdjs.UranusCode.mapOfGDgdjs_46UranusCode_46GDcrashedshipObjects1Objects = Hashtable.newFrom({"crashedship": gdjs.UranusCode.GDcrashedshipObjects1});gdjs.UranusCode.mapOfGDgdjs_46UranusCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.UranusCode.GDPlayerObjects1});gdjs.UranusCode.mapOfGDgdjs_46UranusCode_46GDcrashedshipObjects1Objects = Hashtable.newFrom({"crashedship": gdjs.UranusCode.GDcrashedshipObjects1});gdjs.UranusCode.mapOfGDgdjs_46UranusCode_46GDcrashedshipObjects1Objects = Hashtable.newFrom({"crashedship": gdjs.UranusCode.GDcrashedshipObjects1});gdjs.UranusCode.mapOfGDgdjs_46UranusCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.UranusCode.GDPlayerObjects1});gdjs.UranusCode.mapOfGDgdjs_46UranusCode_46GDcrashedshipObjects1Objects = Hashtable.newFrom({"crashedship": gdjs.UranusCode.GDcrashedshipObjects1});gdjs.UranusCode.mapOfGDgdjs_46UranusCode_46GDendObjects1Objects = Hashtable.newFrom({"end": gdjs.UranusCode.GDendObjects1});gdjs.UranusCode.mapOfGDgdjs_46UranusCode_46GDrobottingObjects1Objects = Hashtable.newFrom({"robotting": gdjs.UranusCode.GDrobottingObjects1});gdjs.UranusCode.mapOfGDgdjs_46UranusCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.UranusCode.GDPlayerObjects1});gdjs.UranusCode.mapOfGDgdjs_46UranusCode_46GDBlueEnemy1Objects1Objects = Hashtable.newFrom({"BlueEnemy1": gdjs.UranusCode.GDBlueEnemy1Objects1});gdjs.UranusCode.mapOfGDgdjs_46UranusCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.UranusCode.GDPlayerObjects1});gdjs.UranusCode.eventsList4 = function(runtimeScene) {

};gdjs.UranusCode.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("bolt"), gdjs.UranusCode.GDboltObjects1);

for(gdjs.UranusCode.forEachIndex2 = 0;gdjs.UranusCode.forEachIndex2 < gdjs.UranusCode.GDboltObjects1.length;++gdjs.UranusCode.forEachIndex2) {
gdjs.UranusCode.GDboltObjects2.length = 0;


gdjs.UranusCode.forEachTemporary2 = gdjs.UranusCode.GDboltObjects1[gdjs.UranusCode.forEachIndex2];
gdjs.UranusCode.GDboltObjects2.push(gdjs.UranusCode.forEachTemporary2);
if (true) {
{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}{for(var i = 0, len = gdjs.UranusCode.GDboltObjects2.length ;i < len;++i) {
    gdjs.UranusCode.GDboltObjects2[i].deleteFromScene(runtimeScene);
}
}}
}

}


};gdjs.UranusCode.eventsList6 = function(runtimeScene) {

};gdjs.UranusCode.eventsList7 = function(runtimeScene) {

};gdjs.UranusCode.eventsList8 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("robotting"), gdjs.UranusCode.GDrobottingObjects2);

for(gdjs.UranusCode.forEachIndex3 = 0;gdjs.UranusCode.forEachIndex3 < gdjs.UranusCode.GDrobottingObjects2.length;++gdjs.UranusCode.forEachIndex3) {
gdjs.UranusCode.GDrobottingObjects3.length = 0;


gdjs.UranusCode.forEachTemporary3 = gdjs.UranusCode.GDrobottingObjects2[gdjs.UranusCode.forEachIndex3];
gdjs.UranusCode.GDrobottingObjects3.push(gdjs.UranusCode.forEachTemporary3);
if (true) {
{for(var i = 0, len = gdjs.UranusCode.GDrobottingObjects3.length ;i < len;++i) {
    gdjs.UranusCode.GDrobottingObjects3[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(13).sub(1);
}}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlueEnemy1"), gdjs.UranusCode.GDBlueEnemy1Objects1);

for(gdjs.UranusCode.forEachIndex2 = 0;gdjs.UranusCode.forEachIndex2 < gdjs.UranusCode.GDBlueEnemy1Objects1.length;++gdjs.UranusCode.forEachIndex2) {
gdjs.UranusCode.GDBlueEnemy1Objects2.length = 0;


gdjs.UranusCode.forEachTemporary2 = gdjs.UranusCode.GDBlueEnemy1Objects1[gdjs.UranusCode.forEachIndex2];
gdjs.UranusCode.GDBlueEnemy1Objects2.push(gdjs.UranusCode.forEachTemporary2);
if (true) {
{for(var i = 0, len = gdjs.UranusCode.GDBlueEnemy1Objects2.length ;i < len;++i) {
    gdjs.UranusCode.GDBlueEnemy1Objects2[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(13).sub(1);
}}
}

}


};gdjs.UranusCode.mapOfGDgdjs_46UranusCode_46GDRedLaser08Objects1Objects = Hashtable.newFrom({"RedLaser08": gdjs.UranusCode.GDRedLaser08Objects1});gdjs.UranusCode.mapOfGDgdjs_46UranusCode_46GDGreenLaser09Objects1Objects = Hashtable.newFrom({"GreenLaser09": gdjs.UranusCode.GDGreenLaser09Objects1});gdjs.UranusCode.mapOfGDgdjs_46UranusCode_46GDGreenLaser09Objects1Objects = Hashtable.newFrom({"GreenLaser09": gdjs.UranusCode.GDGreenLaser09Objects1});gdjs.UranusCode.mapOfGDgdjs_46UranusCode_46GDRedLaser08Objects1Objects = Hashtable.newFrom({"RedLaser08": gdjs.UranusCode.GDRedLaser08Objects1});gdjs.UranusCode.mapOfGDgdjs_46UranusCode_46GDGreenLaser09Objects1Objects = Hashtable.newFrom({"GreenLaser09": gdjs.UranusCode.GDGreenLaser09Objects1});gdjs.UranusCode.mapOfGDgdjs_46UranusCode_46GDalienfloorObjects1Objects = Hashtable.newFrom({"alienfloor": gdjs.UranusCode.GDalienfloorObjects1});gdjs.UranusCode.mapOfGDgdjs_46UranusCode_46GDRedLaser08Objects1Objects = Hashtable.newFrom({"RedLaser08": gdjs.UranusCode.GDRedLaser08Objects1});gdjs.UranusCode.mapOfGDgdjs_46UranusCode_46GDalienfloorObjects1Objects = Hashtable.newFrom({"alienfloor": gdjs.UranusCode.GDalienfloorObjects1});gdjs.UranusCode.mapOfGDgdjs_46UranusCode_46GDGreenLaser09Objects1Objects = Hashtable.newFrom({"GreenLaser09": gdjs.UranusCode.GDGreenLaser09Objects1});gdjs.UranusCode.mapOfGDgdjs_46UranusCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.UranusCode.GDPlayerObjects1});gdjs.UranusCode.mapOfGDgdjs_46UranusCode_46GDRedLaser08Objects1Objects = Hashtable.newFrom({"RedLaser08": gdjs.UranusCode.GDRedLaser08Objects1});gdjs.UranusCode.mapOfGDgdjs_46UranusCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.UranusCode.GDPlayerObjects1});gdjs.UranusCode.eventsList9 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("fps"), gdjs.UranusCode.GDfpsObjects2);

gdjs.UranusCode.condition0IsTrue_0.val = false;
gdjs.UranusCode.condition1IsTrue_0.val = false;
{
gdjs.UranusCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(15)) == 0;
}if ( gdjs.UranusCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.UranusCode.GDfpsObjects2.length;i<l;++i) {
    if ( !(gdjs.UranusCode.GDfpsObjects2[i].isVisible()) ) {
        gdjs.UranusCode.condition1IsTrue_0.val = true;
        gdjs.UranusCode.GDfpsObjects2[k] = gdjs.UranusCode.GDfpsObjects2[i];
        ++k;
    }
}
gdjs.UranusCode.GDfpsObjects2.length = k;}}
if (gdjs.UranusCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject3"), gdjs.UranusCode.GDNewObject3Objects2);
gdjs.copyArray(runtimeScene.getObjects("cheats"), gdjs.UranusCode.GDcheatsObjects2);
/* Reuse gdjs.UranusCode.GDfpsObjects2 */
gdjs.copyArray(runtimeScene.getObjects("gamelife"), gdjs.UranusCode.GDgamelifeObjects2);
{for(var i = 0, len = gdjs.UranusCode.GDfpsObjects2.length ;i < len;++i) {
    gdjs.UranusCode.GDfpsObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.UranusCode.GDcheatsObjects2.length ;i < len;++i) {
    gdjs.UranusCode.GDcheatsObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.UranusCode.GDNewObject3Objects2.length ;i < len;++i) {
    gdjs.UranusCode.GDNewObject3Objects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.UranusCode.GDgamelifeObjects2.length ;i < len;++i) {
    gdjs.UranusCode.GDgamelifeObjects2[i].hide(false);
}
}{runtimeScene.getGame().getVariables().getFromIndex(15).setNumber(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("fps"), gdjs.UranusCode.GDfpsObjects1);

gdjs.UranusCode.condition0IsTrue_0.val = false;
gdjs.UranusCode.condition1IsTrue_0.val = false;
{
gdjs.UranusCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(15)) == 0;
}if ( gdjs.UranusCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.UranusCode.GDfpsObjects1.length;i<l;++i) {
    if ( gdjs.UranusCode.GDfpsObjects1[i].isVisible() ) {
        gdjs.UranusCode.condition1IsTrue_0.val = true;
        gdjs.UranusCode.GDfpsObjects1[k] = gdjs.UranusCode.GDfpsObjects1[i];
        ++k;
    }
}
gdjs.UranusCode.GDfpsObjects1.length = k;}}
if (gdjs.UranusCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject3"), gdjs.UranusCode.GDNewObject3Objects1);
gdjs.copyArray(runtimeScene.getObjects("cheats"), gdjs.UranusCode.GDcheatsObjects1);
/* Reuse gdjs.UranusCode.GDfpsObjects1 */
gdjs.copyArray(runtimeScene.getObjects("gamelife"), gdjs.UranusCode.GDgamelifeObjects1);
{for(var i = 0, len = gdjs.UranusCode.GDfpsObjects1.length ;i < len;++i) {
    gdjs.UranusCode.GDfpsObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.UranusCode.GDcheatsObjects1.length ;i < len;++i) {
    gdjs.UranusCode.GDcheatsObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.UranusCode.GDNewObject3Objects1.length ;i < len;++i) {
    gdjs.UranusCode.GDNewObject3Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.UranusCode.GDgamelifeObjects1.length ;i < len;++i) {
    gdjs.UranusCode.GDgamelifeObjects1[i].hide();
}
}{runtimeScene.getGame().getVariables().getFromIndex(15).setNumber(1);
}}

}


};gdjs.UranusCode.eventsList10 = function(runtimeScene) {

};gdjs.UranusCode.eventsList11 = function(runtimeScene) {

};gdjs.UranusCode.eventsList12 = function(runtimeScene) {

};gdjs.UranusCode.eventsList13 = function(runtimeScene) {

};gdjs.UranusCode.eventsList14 = function(runtimeScene) {

};gdjs.UranusCode.eventsList15 = function(runtimeScene) {

{


gdjs.UranusCode.condition0IsTrue_0.val = false;
gdjs.UranusCode.condition1IsTrue_0.val = false;
{
gdjs.UranusCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(16)) == 0;
}if ( gdjs.UranusCode.condition0IsTrue_0.val ) {
{
gdjs.UranusCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(17)) == 0;
}}
if (gdjs.UranusCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(16).setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(17).setNumber(1);
}}

}


{


gdjs.UranusCode.condition0IsTrue_0.val = false;
gdjs.UranusCode.condition1IsTrue_0.val = false;
{
gdjs.UranusCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(16)) == 0;
}if ( gdjs.UranusCode.condition0IsTrue_0.val ) {
{
gdjs.UranusCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(17)) == 1;
}}
if (gdjs.UranusCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(16).setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(17).setNumber(0);
}}

}


};gdjs.UranusCode.eventsList16 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.UranusCode.GDPlayerObjects1);

gdjs.UranusCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.UranusCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.UranusCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.UranusCode.condition0IsTrue_0.val = true;
        gdjs.UranusCode.GDPlayerObjects1[k] = gdjs.UranusCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.UranusCode.GDPlayerObjects1.length = k;}if (gdjs.UranusCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.UranusCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.UranusCode.GDPlayerObjects1);

gdjs.UranusCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.UranusCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.UranusCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.UranusCode.condition0IsTrue_0.val = true;
        gdjs.UranusCode.GDPlayerObjects1[k] = gdjs.UranusCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.UranusCode.GDPlayerObjects1.length = k;}if (gdjs.UranusCode.condition0IsTrue_0.val) {
/* Reuse gdjs.UranusCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.UranusCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.UranusCode.GDPlayerObjects1[i].setAnimationName("jump");
}
}{runtimeScene.getGame().getVariables().getFromIndex(3).setString("none");
}{for(var i = 0, len = gdjs.UranusCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.UranusCode.GDPlayerObjects1[i].clearForces();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.UranusCode.GDPlayerObjects1);

gdjs.UranusCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.UranusCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.UranusCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.UranusCode.condition0IsTrue_0.val = true;
        gdjs.UranusCode.GDPlayerObjects1[k] = gdjs.UranusCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.UranusCode.GDPlayerObjects1.length = k;}if (gdjs.UranusCode.condition0IsTrue_0.val) {
/* Reuse gdjs.UranusCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.UranusCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.UranusCode.GDPlayerObjects1[i].setAnimationName("jump");
}
}}

}


{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.UranusCode.GDPlayerObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.UranusCode.GDPlayerObjects1.length !== 0 ? gdjs.UranusCode.GDPlayerObjects1[0] : null), false, "", 0);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("rocketplat"), gdjs.UranusCode.GDrocketplatObjects1);
{for(var i = 0, len = gdjs.UranusCode.GDrocketplatObjects1.length ;i < len;++i) {
    gdjs.UranusCode.GDrocketplatObjects1[i].setZOrder(1);
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("cloud"), gdjs.UranusCode.GDcloudObjects1);
gdjs.copyArray(runtimeScene.getObjects("crashedship"), gdjs.UranusCode.GDcrashedshipObjects1);
{for(var i = 0, len = gdjs.UranusCode.GDcloudObjects1.length ;i < len;++i) {
    gdjs.UranusCode.GDcloudObjects1[i].setZOrder(-(2));
}
}{for(var i = 0, len = gdjs.UranusCode.GDcrashedshipObjects1.length ;i < len;++i) {
    gdjs.UranusCode.GDcrashedshipObjects1[i].setZOrder(1);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.UranusCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("bolt"), gdjs.UranusCode.GDboltObjects1);

gdjs.UranusCode.condition0IsTrue_0.val = false;
{
gdjs.UranusCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.UranusCode.mapOfGDgdjs_46UranusCode_46GDPlayerObjects1Objects, gdjs.UranusCode.mapOfGDgdjs_46UranusCode_46GDboltObjects1Objects, false, runtimeScene, false);
}if (gdjs.UranusCode.condition0IsTrue_0.val) {
/* Reuse gdjs.UranusCode.GDboltObjects1 */
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.UranusCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.UranusCode.GDboltObjects1.length ;i < len;++i) {
    gdjs.UranusCode.GDboltObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}{for(var i = 0, len = gdjs.UranusCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.UranusCode.GDscoreObjects1[i].setString("Score:" + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0))));
}
}
{ //Subevents
gdjs.UranusCode.eventsList1(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.UranusCode.condition0IsTrue_0.val = false;
{
gdjs.UranusCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "f");
}if (gdjs.UranusCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}}

}


{


gdjs.UranusCode.condition0IsTrue_0.val = false;
{
gdjs.UranusCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Escape");
}if (gdjs.UranusCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, false, true);
}}

}


{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("NewObject3"), gdjs.UranusCode.GDNewObject3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.UranusCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("cheats"), gdjs.UranusCode.GDcheatsObjects1);
gdjs.copyArray(runtimeScene.getObjects("fps"), gdjs.UranusCode.GDfpsObjects1);
gdjs.copyArray(runtimeScene.getObjects("gamelife"), gdjs.UranusCode.GDgamelifeObjects1);
gdjs.copyArray(runtimeScene.getObjects("live"), gdjs.UranusCode.GDliveObjects1);
gdjs.copyArray(runtimeScene.getObjects("lives"), gdjs.UranusCode.GDlivesObjects1);
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.UranusCode.GDscoreObjects1);
gdjs.copyArray(runtimeScene.getObjects("timer"), gdjs.UranusCode.GDtimerObjects1);
{for(var i = 0, len = gdjs.UranusCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.UranusCode.GDscoreObjects1[i].setString("Amount of bolts " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0))) + "/ " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4))));
}
}{for(var i = 0, len = gdjs.UranusCode.GDlivesObjects1.length ;i < len;++i) {
    gdjs.UranusCode.GDlivesObjects1[i].setString("X" + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1))));
}
}{for(var i = 0, len = gdjs.UranusCode.GDtimerObjects1.length ;i < len;++i) {
    gdjs.UranusCode.GDtimerObjects1[i].setString("Time: " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9))));
}
}{for(var i = 0, len = gdjs.UranusCode.GDfpsObjects1.length ;i < len;++i) {
    gdjs.UranusCode.GDfpsObjects1[i].setString(gdjs.evtTools.common.toString(Math.round(1 / gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene))) + "fps");
}
}{for(var i = 0, len = gdjs.UranusCode.GDNewObject3Objects1.length ;i < len;++i) {
    gdjs.UranusCode.GDNewObject3Objects1[i].setString("no of objects : " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(13))));
}
}{for(var i = 0, len = gdjs.UranusCode.GDgamelifeObjects1.length ;i < len;++i) {
    gdjs.UranusCode.GDgamelifeObjects1[i].setString("Total Game time = " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(14))));
}
}{for(var i = 0, len = gdjs.UranusCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.UranusCode.GDscoreObjects1[i].setX((( gdjs.UranusCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.UranusCode.GDPlayerObjects1[0].getPointX("")) - 200);
}
}{for(var i = 0, len = gdjs.UranusCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.UranusCode.GDscoreObjects1[i].setY((( gdjs.UranusCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.UranusCode.GDPlayerObjects1[0].getPointY("")) - 200);
}
}{for(var i = 0, len = gdjs.UranusCode.GDlivesObjects1.length ;i < len;++i) {
    gdjs.UranusCode.GDlivesObjects1[i].setX((( gdjs.UranusCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.UranusCode.GDPlayerObjects1[0].getPointX("")) - 130);
}
}{for(var i = 0, len = gdjs.UranusCode.GDlivesObjects1.length ;i < len;++i) {
    gdjs.UranusCode.GDlivesObjects1[i].setY((( gdjs.UranusCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.UranusCode.GDPlayerObjects1[0].getPointY("")) - 150);
}
}{for(var i = 0, len = gdjs.UranusCode.GDliveObjects1.length ;i < len;++i) {
    gdjs.UranusCode.GDliveObjects1[i].setX((( gdjs.UranusCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.UranusCode.GDPlayerObjects1[0].getPointX("")) - 200);
}
}{for(var i = 0, len = gdjs.UranusCode.GDliveObjects1.length ;i < len;++i) {
    gdjs.UranusCode.GDliveObjects1[i].setY((( gdjs.UranusCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.UranusCode.GDPlayerObjects1[0].getPointY("")) - 170);
}
}{for(var i = 0, len = gdjs.UranusCode.GDtimerObjects1.length ;i < len;++i) {
    gdjs.UranusCode.GDtimerObjects1[i].setX((( gdjs.UranusCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.UranusCode.GDPlayerObjects1[0].getPointX("")) + 200);
}
}{for(var i = 0, len = gdjs.UranusCode.GDtimerObjects1.length ;i < len;++i) {
    gdjs.UranusCode.GDtimerObjects1[i].setY((( gdjs.UranusCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.UranusCode.GDPlayerObjects1[0].getPointY("")) - 200);
}
}{for(var i = 0, len = gdjs.UranusCode.GDcheatsObjects1.length ;i < len;++i) {
    gdjs.UranusCode.GDcheatsObjects1[i].setX((( gdjs.UranusCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.UranusCode.GDPlayerObjects1[0].getPointX("")));
}
}{for(var i = 0, len = gdjs.UranusCode.GDcheatsObjects1.length ;i < len;++i) {
    gdjs.UranusCode.GDcheatsObjects1[i].setY((( gdjs.UranusCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.UranusCode.GDPlayerObjects1[0].getPointY("")) - 200);
}
}{for(var i = 0, len = gdjs.UranusCode.GDfpsObjects1.length ;i < len;++i) {
    gdjs.UranusCode.GDfpsObjects1[i].setX((( gdjs.UranusCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.UranusCode.GDPlayerObjects1[0].getPointX("")) + 290);
}
}{for(var i = 0, len = gdjs.UranusCode.GDfpsObjects1.length ;i < len;++i) {
    gdjs.UranusCode.GDfpsObjects1[i].setY((( gdjs.UranusCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.UranusCode.GDPlayerObjects1[0].getPointY("")) - 200);
}
}{for(var i = 0, len = gdjs.UranusCode.GDNewObject3Objects1.length ;i < len;++i) {
    gdjs.UranusCode.GDNewObject3Objects1[i].setX((( gdjs.UranusCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.UranusCode.GDPlayerObjects1[0].getPointX("")) + 220);
}
}{for(var i = 0, len = gdjs.UranusCode.GDNewObject3Objects1.length ;i < len;++i) {
    gdjs.UranusCode.GDNewObject3Objects1[i].setY((( gdjs.UranusCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.UranusCode.GDPlayerObjects1[0].getPointY("")) - 160);
}
}{for(var i = 0, len = gdjs.UranusCode.GDgamelifeObjects1.length ;i < len;++i) {
    gdjs.UranusCode.GDgamelifeObjects1[i].setX((( gdjs.UranusCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.UranusCode.GDPlayerObjects1[0].getPointX("")) + 220);
}
}{for(var i = 0, len = gdjs.UranusCode.GDgamelifeObjects1.length ;i < len;++i) {
    gdjs.UranusCode.GDgamelifeObjects1[i].setY((( gdjs.UranusCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.UranusCode.GDPlayerObjects1[0].getPointY("")) - 140);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.UranusCode.GDPlayerObjects1);

gdjs.UranusCode.condition0IsTrue_0.val = false;
gdjs.UranusCode.condition1IsTrue_0.val = false;
gdjs.UranusCode.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.UranusCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.UranusCode.GDPlayerObjects1[i].getY() >= 600 ) {
        gdjs.UranusCode.condition0IsTrue_0.val = true;
        gdjs.UranusCode.GDPlayerObjects1[k] = gdjs.UranusCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.UranusCode.GDPlayerObjects1.length = k;}if ( gdjs.UranusCode.condition0IsTrue_0.val ) {
{
gdjs.UranusCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) != 0;
}if ( gdjs.UranusCode.condition1IsTrue_0.val ) {
{
gdjs.UranusCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) != 1;
}}
}
if (gdjs.UranusCode.condition2IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).sub(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}{runtimeScene.getGame().getVariables().getFromIndex(1).sub(1);
}{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Uranus");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.UranusCode.GDPlayerObjects1);

gdjs.UranusCode.condition0IsTrue_0.val = false;
gdjs.UranusCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.UranusCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.UranusCode.GDPlayerObjects1[i].getY() >= 600 ) {
        gdjs.UranusCode.condition0IsTrue_0.val = true;
        gdjs.UranusCode.GDPlayerObjects1[k] = gdjs.UranusCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.UranusCode.GDPlayerObjects1.length = k;}if ( gdjs.UranusCode.condition0IsTrue_0.val ) {
{
gdjs.UranusCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) == 1;
}}
if (gdjs.UranusCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Uranus");
}}

}


{


gdjs.UranusCode.condition0IsTrue_0.val = false;
{
gdjs.UranusCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 0;
}if (gdjs.UranusCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Dead", true);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("BlueEnemy1"), gdjs.UranusCode.GDBlueEnemy1Objects1);
gdjs.copyArray(runtimeScene.getObjects("left"), gdjs.UranusCode.GDleftObjects1);

gdjs.UranusCode.condition0IsTrue_0.val = false;
{
gdjs.UranusCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.UranusCode.mapOfGDgdjs_46UranusCode_46GDBlueEnemy1Objects1Objects, gdjs.UranusCode.mapOfGDgdjs_46UranusCode_46GDleftObjects1Objects, false, runtimeScene, false);
}if (gdjs.UranusCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(10).setString("Left");
}}

}


{


gdjs.UranusCode.condition0IsTrue_0.val = false;
{
gdjs.UranusCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(10)) == "Left";
}if (gdjs.UranusCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BlueEnemy1"), gdjs.UranusCode.GDBlueEnemy1Objects1);
{for(var i = 0, len = gdjs.UranusCode.GDBlueEnemy1Objects1.length ;i < len;++i) {
    gdjs.UranusCode.GDBlueEnemy1Objects1[i].addPolarForce(180, 100, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlueEnemy1"), gdjs.UranusCode.GDBlueEnemy1Objects1);
gdjs.copyArray(runtimeScene.getObjects("right"), gdjs.UranusCode.GDrightObjects1);

gdjs.UranusCode.condition0IsTrue_0.val = false;
{
gdjs.UranusCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.UranusCode.mapOfGDgdjs_46UranusCode_46GDBlueEnemy1Objects1Objects, gdjs.UranusCode.mapOfGDgdjs_46UranusCode_46GDrightObjects1Objects, false, runtimeScene, false);
}if (gdjs.UranusCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(10).setString("Right");
}}

}


{


gdjs.UranusCode.condition0IsTrue_0.val = false;
{
gdjs.UranusCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(10)) == "Right";
}if (gdjs.UranusCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BlueEnemy1"), gdjs.UranusCode.GDBlueEnemy1Objects1);
{for(var i = 0, len = gdjs.UranusCode.GDBlueEnemy1Objects1.length ;i < len;++i) {
    gdjs.UranusCode.GDBlueEnemy1Objects1[i].addPolarForce(0, 100, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("left"), gdjs.UranusCode.GDleftObjects1);
gdjs.copyArray(runtimeScene.getObjects("robotting"), gdjs.UranusCode.GDrobottingObjects1);

gdjs.UranusCode.condition0IsTrue_0.val = false;
{
gdjs.UranusCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.UranusCode.mapOfGDgdjs_46UranusCode_46GDrobottingObjects1Objects, gdjs.UranusCode.mapOfGDgdjs_46UranusCode_46GDleftObjects1Objects, false, runtimeScene, false);
}if (gdjs.UranusCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(2).setString("Left");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("right"), gdjs.UranusCode.GDrightObjects1);
gdjs.copyArray(runtimeScene.getObjects("robotting"), gdjs.UranusCode.GDrobottingObjects1);

gdjs.UranusCode.condition0IsTrue_0.val = false;
{
gdjs.UranusCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.UranusCode.mapOfGDgdjs_46UranusCode_46GDrobottingObjects1Objects, gdjs.UranusCode.mapOfGDgdjs_46UranusCode_46GDrightObjects1Objects, false, runtimeScene, false);
}if (gdjs.UranusCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(2).setString("Right");
}}

}


{


gdjs.UranusCode.condition0IsTrue_0.val = false;
{
gdjs.UranusCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)) == "Left";
}if (gdjs.UranusCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("robotting"), gdjs.UranusCode.GDrobottingObjects1);
{for(var i = 0, len = gdjs.UranusCode.GDrobottingObjects1.length ;i < len;++i) {
    gdjs.UranusCode.GDrobottingObjects1[i].addPolarForce(180, 100, 0);
}
}{for(var i = 0, len = gdjs.UranusCode.GDrobottingObjects1.length ;i < len;++i) {
    gdjs.UranusCode.GDrobottingObjects1[i].flipX(false);
}
}}

}


{


gdjs.UranusCode.condition0IsTrue_0.val = false;
{
gdjs.UranusCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)) == "Right";
}if (gdjs.UranusCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("robotting"), gdjs.UranusCode.GDrobottingObjects1);
{for(var i = 0, len = gdjs.UranusCode.GDrobottingObjects1.length ;i < len;++i) {
    gdjs.UranusCode.GDrobottingObjects1[i].addPolarForce(0, 100, 0);
}
}{for(var i = 0, len = gdjs.UranusCode.GDrobottingObjects1.length ;i < len;++i) {
    gdjs.UranusCode.GDrobottingObjects1[i].flipX(true);
}
}}

}


{



}


{


gdjs.UranusCode.condition0IsTrue_0.val = false;
{
gdjs.UranusCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.UranusCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}}

}


{


gdjs.UranusCode.condition0IsTrue_0.val = false;
{
gdjs.UranusCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.UranusCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject3"), gdjs.UranusCode.GDNewObject3Objects1);
gdjs.copyArray(runtimeScene.getObjects("cheats"), gdjs.UranusCode.GDcheatsObjects1);
gdjs.copyArray(runtimeScene.getObjects("crashedship"), gdjs.UranusCode.GDcrashedshipObjects1);
gdjs.copyArray(runtimeScene.getObjects("fps"), gdjs.UranusCode.GDfpsObjects1);
gdjs.copyArray(runtimeScene.getObjects("gamelife"), gdjs.UranusCode.GDgamelifeObjects1);
gdjs.copyArray(runtimeScene.getObjects("left"), gdjs.UranusCode.GDleftObjects1);
gdjs.copyArray(runtimeScene.getObjects("notcomplete"), gdjs.UranusCode.GDnotcompleteObjects1);
gdjs.copyArray(runtimeScene.getObjects("right"), gdjs.UranusCode.GDrightObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(2).setString("Left");
}{for(var i = 0, len = gdjs.UranusCode.GDrightObjects1.length ;i < len;++i) {
    gdjs.UranusCode.GDrightObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.UranusCode.GDleftObjects1.length ;i < len;++i) {
    gdjs.UranusCode.GDleftObjects1[i].hide();
}
}{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(0);
}{for(var i = 0, len = gdjs.UranusCode.GDnotcompleteObjects1.length ;i < len;++i) {
    gdjs.UranusCode.GDnotcompleteObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.UranusCode.GDcrashedshipObjects1.length ;i < len;++i) {
    gdjs.UranusCode.GDcrashedshipObjects1[i].setAnimationName("stand");
}
}{runtimeScene.getGame().getVariables().getFromIndex(5).setNumber(0);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "fire");
}{for(var i = 0, len = gdjs.UranusCode.GDcheatsObjects1.length ;i < len;++i) {
    gdjs.UranusCode.GDcheatsObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.UranusCode.GDfpsObjects1.length ;i < len;++i) {
    gdjs.UranusCode.GDfpsObjects1[i].hide();
}
}{runtimeScene.getGame().getVariables().getFromIndex(15).setNumber(0);
}{for(var i = 0, len = gdjs.UranusCode.GDNewObject3Objects1.length ;i < len;++i) {
    gdjs.UranusCode.GDNewObject3Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.UranusCode.GDgamelifeObjects1.length ;i < len;++i) {
    gdjs.UranusCode.GDgamelifeObjects1[i].hide();
}
}{runtimeScene.getGame().getVariables().getFromIndex(13).setNumber(0);
}
{ //Subevents
gdjs.UranusCode.eventsList3(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.UranusCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("robotting"), gdjs.UranusCode.GDrobottingObjects1);

gdjs.UranusCode.condition0IsTrue_0.val = false;
gdjs.UranusCode.condition1IsTrue_0.val = false;
{
gdjs.UranusCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.UranusCode.mapOfGDgdjs_46UranusCode_46GDPlayerObjects1Objects, gdjs.UranusCode.mapOfGDgdjs_46UranusCode_46GDrobottingObjects1Objects, false, runtimeScene, false);
}if ( gdjs.UranusCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.UranusCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.UranusCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.UranusCode.condition1IsTrue_0.val = true;
        gdjs.UranusCode.GDPlayerObjects1[k] = gdjs.UranusCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.UranusCode.GDPlayerObjects1.length = k;}}
if (gdjs.UranusCode.condition1IsTrue_0.val) {
/* Reuse gdjs.UranusCode.GDPlayerObjects1 */
/* Reuse gdjs.UranusCode.GDrobottingObjects1 */
{for(var i = 0, len = gdjs.UranusCode.GDrobottingObjects1.length ;i < len;++i) {
    gdjs.UranusCode.GDrobottingObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.UranusCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.UranusCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").setCanJump();
}
}{for(var i = 0, len = gdjs.UranusCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.UranusCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}{runtimeScene.getGame().getVariables().getFromIndex(13).sub(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlueEnemy1"), gdjs.UranusCode.GDBlueEnemy1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.UranusCode.GDPlayerObjects1);

gdjs.UranusCode.condition0IsTrue_0.val = false;
gdjs.UranusCode.condition1IsTrue_0.val = false;
{
gdjs.UranusCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.UranusCode.mapOfGDgdjs_46UranusCode_46GDPlayerObjects1Objects, gdjs.UranusCode.mapOfGDgdjs_46UranusCode_46GDBlueEnemy1Objects1Objects, false, runtimeScene, false);
}if ( gdjs.UranusCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.UranusCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.UranusCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.UranusCode.condition1IsTrue_0.val = true;
        gdjs.UranusCode.GDPlayerObjects1[k] = gdjs.UranusCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.UranusCode.GDPlayerObjects1.length = k;}}
if (gdjs.UranusCode.condition1IsTrue_0.val) {
/* Reuse gdjs.UranusCode.GDBlueEnemy1Objects1 */
/* Reuse gdjs.UranusCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.UranusCode.GDBlueEnemy1Objects1.length ;i < len;++i) {
    gdjs.UranusCode.GDBlueEnemy1Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.UranusCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.UranusCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").setCanJump();
}
}{for(var i = 0, len = gdjs.UranusCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.UranusCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}{runtimeScene.getGame().getVariables().getFromIndex(13).sub(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.UranusCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("robotting"), gdjs.UranusCode.GDrobottingObjects1);

gdjs.UranusCode.condition0IsTrue_0.val = false;
gdjs.UranusCode.condition1IsTrue_0.val = false;
{
gdjs.UranusCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.UranusCode.mapOfGDgdjs_46UranusCode_46GDPlayerObjects1Objects, gdjs.UranusCode.mapOfGDgdjs_46UranusCode_46GDrobottingObjects1Objects, false, runtimeScene, false);
}if ( gdjs.UranusCode.condition0IsTrue_0.val ) {
{
gdjs.UranusCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) != 1;
}}
if (gdjs.UranusCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).sub(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}{runtimeScene.getGame().getVariables().getFromIndex(1).sub(1);
}{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Uranus");
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.UranusCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("alienfloor"), gdjs.UranusCode.GDalienfloorObjects1);

gdjs.UranusCode.condition0IsTrue_0.val = false;
gdjs.UranusCode.condition1IsTrue_0.val = false;
{
gdjs.UranusCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.UranusCode.mapOfGDgdjs_46UranusCode_46GDalienfloorObjects1Objects, gdjs.UranusCode.mapOfGDgdjs_46UranusCode_46GDPlayerObjects1Objects, false, runtimeScene, false);
}if ( gdjs.UranusCode.condition0IsTrue_0.val ) {
{
gdjs.UranusCode.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}}
if (gdjs.UranusCode.condition1IsTrue_0.val) {
/* Reuse gdjs.UranusCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.UranusCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.UranusCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").setAcceleration(gdjs.UranusCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").getAcceleration() * (2));
}
}{for(var i = 0, len = gdjs.UranusCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.UranusCode.GDPlayerObjects1[i].addPolarForce(180, 2, 1);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "icy");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.UranusCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("alienfloor"), gdjs.UranusCode.GDalienfloorObjects1);

gdjs.UranusCode.condition0IsTrue_0.val = false;
gdjs.UranusCode.condition1IsTrue_0.val = false;
{
gdjs.UranusCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.UranusCode.mapOfGDgdjs_46UranusCode_46GDalienfloorObjects1Objects, gdjs.UranusCode.mapOfGDgdjs_46UranusCode_46GDPlayerObjects1Objects, false, runtimeScene, false);
}if ( gdjs.UranusCode.condition0IsTrue_0.val ) {
{
gdjs.UranusCode.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}}
if (gdjs.UranusCode.condition1IsTrue_0.val) {
/* Reuse gdjs.UranusCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.UranusCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.UranusCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").setAcceleration(gdjs.UranusCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").getAcceleration() * (2));
}
}{for(var i = 0, len = gdjs.UranusCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.UranusCode.GDPlayerObjects1[i].addPolarForce(0, 2, 1);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "icy");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.UranusCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("rocketplat"), gdjs.UranusCode.GDrocketplatObjects1);

gdjs.UranusCode.condition0IsTrue_0.val = false;
gdjs.UranusCode.condition1IsTrue_0.val = false;
{
gdjs.UranusCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.UranusCode.mapOfGDgdjs_46UranusCode_46GDrocketplatObjects1Objects, gdjs.UranusCode.mapOfGDgdjs_46UranusCode_46GDPlayerObjects1Objects, false, runtimeScene, false);
}if ( gdjs.UranusCode.condition0IsTrue_0.val ) {
{
{gdjs.UranusCode.conditionTrue_1 = gdjs.UranusCode.condition1IsTrue_0;
gdjs.UranusCode.conditionTrue_1.val = ((( gdjs.UranusCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.UranusCode.GDPlayerObjects1[0].getPointY("")) > (( gdjs.UranusCode.GDrocketplatObjects1.length === 0 ) ? 0 :gdjs.UranusCode.GDrocketplatObjects1[0].getY()));
}
}}
if (gdjs.UranusCode.condition1IsTrue_0.val) {
/* Reuse gdjs.UranusCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.UranusCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.UranusCode.GDPlayerObjects1[i].clearForces();
}
}}

}


{


gdjs.UranusCode.condition0IsTrue_0.val = false;
{
gdjs.UranusCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 2, "icy");
}if (gdjs.UranusCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.UranusCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.UranusCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.UranusCode.GDPlayerObjects1[i].clearForces();
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.UranusCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("crashedship"), gdjs.UranusCode.GDcrashedshipObjects1);

gdjs.UranusCode.condition0IsTrue_0.val = false;
{
gdjs.UranusCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.UranusCode.mapOfGDgdjs_46UranusCode_46GDPlayerObjects1Objects, gdjs.UranusCode.mapOfGDgdjs_46UranusCode_46GDcrashedshipObjects1Objects, true, runtimeScene, false);
}if (gdjs.UranusCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("notcomplete"), gdjs.UranusCode.GDnotcompleteObjects1);
{for(var i = 0, len = gdjs.UranusCode.GDnotcompleteObjects1.length ;i < len;++i) {
    gdjs.UranusCode.GDnotcompleteObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.UranusCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("crashedship"), gdjs.UranusCode.GDcrashedshipObjects1);

gdjs.UranusCode.condition0IsTrue_0.val = false;
gdjs.UranusCode.condition1IsTrue_0.val = false;
{
gdjs.UranusCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.UranusCode.mapOfGDgdjs_46UranusCode_46GDPlayerObjects1Objects, gdjs.UranusCode.mapOfGDgdjs_46UranusCode_46GDcrashedshipObjects1Objects, false, runtimeScene, false);
}if ( gdjs.UranusCode.condition0IsTrue_0.val ) {
{
{gdjs.UranusCode.conditionTrue_1 = gdjs.UranusCode.condition1IsTrue_0;
gdjs.UranusCode.conditionTrue_1.val = (gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) != gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}}
if (gdjs.UranusCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("notcomplete"), gdjs.UranusCode.GDnotcompleteObjects1);
{for(var i = 0, len = gdjs.UranusCode.GDnotcompleteObjects1.length ;i < len;++i) {
    gdjs.UranusCode.GDnotcompleteObjects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.UranusCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("crashedship"), gdjs.UranusCode.GDcrashedshipObjects1);

gdjs.UranusCode.condition0IsTrue_0.val = false;
gdjs.UranusCode.condition1IsTrue_0.val = false;
{
gdjs.UranusCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.UranusCode.mapOfGDgdjs_46UranusCode_46GDcrashedshipObjects1Objects, gdjs.UranusCode.mapOfGDgdjs_46UranusCode_46GDPlayerObjects1Objects, false, runtimeScene, false);
}if ( gdjs.UranusCode.condition0IsTrue_0.val ) {
{
{gdjs.UranusCode.conditionTrue_1 = gdjs.UranusCode.condition1IsTrue_0;
gdjs.UranusCode.conditionTrue_1.val = (gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}}
if (gdjs.UranusCode.condition1IsTrue_0.val) {
/* Reuse gdjs.UranusCode.GDPlayerObjects1 */
/* Reuse gdjs.UranusCode.GDcrashedshipObjects1 */
{for(var i = 0, len = gdjs.UranusCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.UranusCode.GDPlayerObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.UranusCode.GDcrashedshipObjects1.length ;i < len;++i) {
    gdjs.UranusCode.GDcrashedshipObjects1[i].setAnimationName("fixit");
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "fixingtime");
}{runtimeScene.getGame().getVariables().getFromIndex(5).setNumber(1);
}}

}


{


gdjs.UranusCode.condition0IsTrue_0.val = false;
gdjs.UranusCode.condition1IsTrue_0.val = false;
{
gdjs.UranusCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 3, "fixingtime");
}if ( gdjs.UranusCode.condition0IsTrue_0.val ) {
{
{gdjs.UranusCode.conditionTrue_1 = gdjs.UranusCode.condition1IsTrue_0;
gdjs.UranusCode.conditionTrue_1.val = (gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5)) == 1);
}
}}
if (gdjs.UranusCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("crashedship"), gdjs.UranusCode.GDcrashedshipObjects1);
{for(var i = 0, len = gdjs.UranusCode.GDcrashedshipObjects1.length ;i < len;++i) {
    gdjs.UranusCode.GDcrashedshipObjects1[i].setAnimationName("fly");
}
}{for(var i = 0, len = gdjs.UranusCode.GDcrashedshipObjects1.length ;i < len;++i) {
    gdjs.UranusCode.GDcrashedshipObjects1[i].addForce(0, -(1000), 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("crashedship"), gdjs.UranusCode.GDcrashedshipObjects1);
gdjs.copyArray(runtimeScene.getObjects("end"), gdjs.UranusCode.GDendObjects1);

gdjs.UranusCode.condition0IsTrue_0.val = false;
{
gdjs.UranusCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.UranusCode.mapOfGDgdjs_46UranusCode_46GDcrashedshipObjects1Objects, gdjs.UranusCode.mapOfGDgdjs_46UranusCode_46GDendObjects1Objects, false, runtimeScene, false);
}if (gdjs.UranusCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(3);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "intro:S", false);
}}

}


{



}


{


gdjs.UranusCode.condition0IsTrue_0.val = false;
{
gdjs.UranusCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "i");
}if (gdjs.UranusCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(6).setNumber(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.UranusCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("robotting"), gdjs.UranusCode.GDrobottingObjects1);

gdjs.UranusCode.condition0IsTrue_0.val = false;
gdjs.UranusCode.condition1IsTrue_0.val = false;
{
gdjs.UranusCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) == 1;
}if ( gdjs.UranusCode.condition0IsTrue_0.val ) {
{
gdjs.UranusCode.condition1IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.UranusCode.mapOfGDgdjs_46UranusCode_46GDrobottingObjects1Objects, gdjs.UranusCode.mapOfGDgdjs_46UranusCode_46GDPlayerObjects1Objects, false, runtimeScene, false);
}}
if (gdjs.UranusCode.condition1IsTrue_0.val) {
/* Reuse gdjs.UranusCode.GDrobottingObjects1 */
{for(var i = 0, len = gdjs.UranusCode.GDrobottingObjects1.length ;i < len;++i) {
    gdjs.UranusCode.GDrobottingObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(13).sub(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlueEnemy1"), gdjs.UranusCode.GDBlueEnemy1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.UranusCode.GDPlayerObjects1);

gdjs.UranusCode.condition0IsTrue_0.val = false;
gdjs.UranusCode.condition1IsTrue_0.val = false;
{
gdjs.UranusCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) == 1;
}if ( gdjs.UranusCode.condition0IsTrue_0.val ) {
{
gdjs.UranusCode.condition1IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.UranusCode.mapOfGDgdjs_46UranusCode_46GDBlueEnemy1Objects1Objects, gdjs.UranusCode.mapOfGDgdjs_46UranusCode_46GDPlayerObjects1Objects, false, runtimeScene, false);
}}
if (gdjs.UranusCode.condition1IsTrue_0.val) {
/* Reuse gdjs.UranusCode.GDBlueEnemy1Objects1 */
{for(var i = 0, len = gdjs.UranusCode.GDBlueEnemy1Objects1.length ;i < len;++i) {
    gdjs.UranusCode.GDBlueEnemy1Objects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(13).sub(1);
}}

}


{


gdjs.UranusCode.condition0IsTrue_0.val = false;
{
gdjs.UranusCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "c");
}if (gdjs.UranusCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.UranusCode.eventsList5(runtimeScene);} //End of subevents
}

}


{


gdjs.UranusCode.condition0IsTrue_0.val = false;
{
gdjs.UranusCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "k");
}if (gdjs.UranusCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.UranusCode.eventsList8(runtimeScene);} //End of subevents
}

}


{


gdjs.UranusCode.condition0IsTrue_0.val = false;
{
gdjs.UranusCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "t");
}if (gdjs.UranusCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(12).setNumber(1);
}}

}


{



}


{


gdjs.UranusCode.condition0IsTrue_0.val = false;
{
gdjs.UranusCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.UranusCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "leveltimer");
}{runtimeScene.getGame().getVariables().getFromIndex(9).setNumber(60);
}}

}


{


gdjs.UranusCode.condition0IsTrue_0.val = false;
gdjs.UranusCode.condition1IsTrue_0.val = false;
{
gdjs.UranusCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "leveltimer");
}if ( gdjs.UranusCode.condition0IsTrue_0.val ) {
{
gdjs.UranusCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(12)) != 1;
}}
if (gdjs.UranusCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(9).sub(1);
}{runtimeScene.getGame().getVariables().getFromIndex(14).add(1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "leveltimer");
}}

}


{


gdjs.UranusCode.condition0IsTrue_0.val = false;
{
gdjs.UranusCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9)) == 0;
}if (gdjs.UranusCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(1).sub(1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Uranus", false);
}}

}


{



}


{


gdjs.UranusCode.condition0IsTrue_0.val = false;
{
gdjs.UranusCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 4, "fire");
}if (gdjs.UranusCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(11).setNumber(gdjs.randomInRange(1, 3));
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "fire");
}}

}


{


gdjs.UranusCode.condition0IsTrue_0.val = false;
gdjs.UranusCode.condition1IsTrue_0.val = false;
{
gdjs.UranusCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(11)) == 1;
}if ( gdjs.UranusCode.condition0IsTrue_0.val ) {
{
gdjs.UranusCode.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 3, "firerate");
}}
if (gdjs.UranusCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BlueEnemy1"), gdjs.UranusCode.GDBlueEnemy1Objects1);
gdjs.copyArray(runtimeScene.getObjects("RedLaser08"), gdjs.UranusCode.GDRedLaser08Objects1);
{for(var i = 0, len = gdjs.UranusCode.GDBlueEnemy1Objects1.length ;i < len;++i) {
    gdjs.UranusCode.GDBlueEnemy1Objects1[i].getBehavior("FireBullet").Fire((gdjs.UranusCode.GDBlueEnemy1Objects1[i].getPointX("")), (gdjs.UranusCode.GDBlueEnemy1Objects1[i].getPointY("")), gdjs.UranusCode.mapOfGDgdjs_46UranusCode_46GDRedLaser08Objects1Objects, 90, 100, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "firerate");
}}

}


{


gdjs.UranusCode.condition0IsTrue_0.val = false;
gdjs.UranusCode.condition1IsTrue_0.val = false;
{
gdjs.UranusCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(11)) == 2;
}if ( gdjs.UranusCode.condition0IsTrue_0.val ) {
{
gdjs.UranusCode.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 3, "firerate");
}}
if (gdjs.UranusCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BlueEnemy1"), gdjs.UranusCode.GDBlueEnemy1Objects1);
gdjs.copyArray(runtimeScene.getObjects("GreenLaser09"), gdjs.UranusCode.GDGreenLaser09Objects1);
{for(var i = 0, len = gdjs.UranusCode.GDBlueEnemy1Objects1.length ;i < len;++i) {
    gdjs.UranusCode.GDBlueEnemy1Objects1[i].getBehavior("FireBullet").Fire((gdjs.UranusCode.GDBlueEnemy1Objects1[i].getPointX("")), (gdjs.UranusCode.GDBlueEnemy1Objects1[i].getPointY("")), gdjs.UranusCode.mapOfGDgdjs_46UranusCode_46GDGreenLaser09Objects1Objects, 90, 40, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "firerate");
}}

}


{


gdjs.UranusCode.condition0IsTrue_0.val = false;
gdjs.UranusCode.condition1IsTrue_0.val = false;
{
gdjs.UranusCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(11)) == 3;
}if ( gdjs.UranusCode.condition0IsTrue_0.val ) {
{
gdjs.UranusCode.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 3, "firerate");
}}
if (gdjs.UranusCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BlueEnemy1"), gdjs.UranusCode.GDBlueEnemy1Objects1);
gdjs.copyArray(runtimeScene.getObjects("GreenLaser09"), gdjs.UranusCode.GDGreenLaser09Objects1);
gdjs.copyArray(runtimeScene.getObjects("RedLaser08"), gdjs.UranusCode.GDRedLaser08Objects1);
{for(var i = 0, len = gdjs.UranusCode.GDBlueEnemy1Objects1.length ;i < len;++i) {
    gdjs.UranusCode.GDBlueEnemy1Objects1[i].getBehavior("FireBullet").Fire((gdjs.UranusCode.GDBlueEnemy1Objects1[i].getPointX("")), (gdjs.UranusCode.GDBlueEnemy1Objects1[i].getPointY("")), gdjs.UranusCode.mapOfGDgdjs_46UranusCode_46GDGreenLaser09Objects1Objects, 90, 40, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.UranusCode.GDBlueEnemy1Objects1.length ;i < len;++i) {
    gdjs.UranusCode.GDBlueEnemy1Objects1[i].getBehavior("FireBullet").Fire((gdjs.UranusCode.GDBlueEnemy1Objects1[i].getPointX("")), (gdjs.UranusCode.GDBlueEnemy1Objects1[i].getPointY("")), gdjs.UranusCode.mapOfGDgdjs_46UranusCode_46GDRedLaser08Objects1Objects, 90, 100, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "firerate");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GreenLaser09"), gdjs.UranusCode.GDGreenLaser09Objects1);
gdjs.copyArray(runtimeScene.getObjects("alienfloor"), gdjs.UranusCode.GDalienfloorObjects1);

gdjs.UranusCode.condition0IsTrue_0.val = false;
{
gdjs.UranusCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.UranusCode.mapOfGDgdjs_46UranusCode_46GDGreenLaser09Objects1Objects, gdjs.UranusCode.mapOfGDgdjs_46UranusCode_46GDalienfloorObjects1Objects, false, runtimeScene, false);
}if (gdjs.UranusCode.condition0IsTrue_0.val) {
/* Reuse gdjs.UranusCode.GDGreenLaser09Objects1 */
{for(var i = 0, len = gdjs.UranusCode.GDGreenLaser09Objects1.length ;i < len;++i) {
    gdjs.UranusCode.GDGreenLaser09Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("RedLaser08"), gdjs.UranusCode.GDRedLaser08Objects1);
gdjs.copyArray(runtimeScene.getObjects("alienfloor"), gdjs.UranusCode.GDalienfloorObjects1);

gdjs.UranusCode.condition0IsTrue_0.val = false;
{
gdjs.UranusCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.UranusCode.mapOfGDgdjs_46UranusCode_46GDRedLaser08Objects1Objects, gdjs.UranusCode.mapOfGDgdjs_46UranusCode_46GDalienfloorObjects1Objects, false, runtimeScene, false);
}if (gdjs.UranusCode.condition0IsTrue_0.val) {
/* Reuse gdjs.UranusCode.GDRedLaser08Objects1 */
{for(var i = 0, len = gdjs.UranusCode.GDRedLaser08Objects1.length ;i < len;++i) {
    gdjs.UranusCode.GDRedLaser08Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GreenLaser09"), gdjs.UranusCode.GDGreenLaser09Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.UranusCode.GDPlayerObjects1);

gdjs.UranusCode.condition0IsTrue_0.val = false;
gdjs.UranusCode.condition1IsTrue_0.val = false;
{
gdjs.UranusCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.UranusCode.mapOfGDgdjs_46UranusCode_46GDGreenLaser09Objects1Objects, gdjs.UranusCode.mapOfGDgdjs_46UranusCode_46GDPlayerObjects1Objects, false, runtimeScene, false);
}if ( gdjs.UranusCode.condition0IsTrue_0.val ) {
{
gdjs.UranusCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) != 1;
}}
if (gdjs.UranusCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).sub(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}{runtimeScene.getGame().getVariables().getFromIndex(1).sub(1);
}{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Uranus");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.UranusCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("RedLaser08"), gdjs.UranusCode.GDRedLaser08Objects1);

gdjs.UranusCode.condition0IsTrue_0.val = false;
gdjs.UranusCode.condition1IsTrue_0.val = false;
{
gdjs.UranusCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.UranusCode.mapOfGDgdjs_46UranusCode_46GDRedLaser08Objects1Objects, gdjs.UranusCode.mapOfGDgdjs_46UranusCode_46GDPlayerObjects1Objects, false, runtimeScene, false);
}if ( gdjs.UranusCode.condition0IsTrue_0.val ) {
{
gdjs.UranusCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) != 1;
}}
if (gdjs.UranusCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).sub(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}{runtimeScene.getGame().getVariables().getFromIndex(1).sub(1);
}{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Uranus");
}}

}


{


gdjs.UranusCode.condition0IsTrue_0.val = false;
{
gdjs.UranusCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "F1");
}if (gdjs.UranusCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(15).setNumber(0);
}
{ //Subevents
gdjs.UranusCode.eventsList9(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.UranusCode.GDPlayerObjects1);

for(gdjs.UranusCode.forEachIndex2 = 0;gdjs.UranusCode.forEachIndex2 < gdjs.UranusCode.GDPlayerObjects1.length;++gdjs.UranusCode.forEachIndex2) {
gdjs.UranusCode.GDPlayerObjects2.length = 0;


gdjs.UranusCode.forEachTemporary2 = gdjs.UranusCode.GDPlayerObjects1[gdjs.UranusCode.forEachIndex2];
gdjs.UranusCode.GDPlayerObjects2.push(gdjs.UranusCode.forEachTemporary2);
gdjs.UranusCode.condition0IsTrue_0.val = false;
{
gdjs.UranusCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.UranusCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(13).add(1);
}}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("alienfloor"), gdjs.UranusCode.GDalienfloorObjects1);

for(gdjs.UranusCode.forEachIndex2 = 0;gdjs.UranusCode.forEachIndex2 < gdjs.UranusCode.GDalienfloorObjects1.length;++gdjs.UranusCode.forEachIndex2) {
gdjs.UranusCode.GDalienfloorObjects2.length = 0;


gdjs.UranusCode.forEachTemporary2 = gdjs.UranusCode.GDalienfloorObjects1[gdjs.UranusCode.forEachIndex2];
gdjs.UranusCode.GDalienfloorObjects2.push(gdjs.UranusCode.forEachTemporary2);
gdjs.UranusCode.condition0IsTrue_0.val = false;
{
gdjs.UranusCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.UranusCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(13).add(1);
}}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("rocketplat"), gdjs.UranusCode.GDrocketplatObjects1);

for(gdjs.UranusCode.forEachIndex2 = 0;gdjs.UranusCode.forEachIndex2 < gdjs.UranusCode.GDrocketplatObjects1.length;++gdjs.UranusCode.forEachIndex2) {
gdjs.UranusCode.GDrocketplatObjects2.length = 0;


gdjs.UranusCode.forEachTemporary2 = gdjs.UranusCode.GDrocketplatObjects1[gdjs.UranusCode.forEachIndex2];
gdjs.UranusCode.GDrocketplatObjects2.push(gdjs.UranusCode.forEachTemporary2);
gdjs.UranusCode.condition0IsTrue_0.val = false;
{
gdjs.UranusCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.UranusCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(13).add(1);
}}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("robotting"), gdjs.UranusCode.GDrobottingObjects1);

for(gdjs.UranusCode.forEachIndex2 = 0;gdjs.UranusCode.forEachIndex2 < gdjs.UranusCode.GDrobottingObjects1.length;++gdjs.UranusCode.forEachIndex2) {
gdjs.UranusCode.GDrobottingObjects2.length = 0;


gdjs.UranusCode.forEachTemporary2 = gdjs.UranusCode.GDrobottingObjects1[gdjs.UranusCode.forEachIndex2];
gdjs.UranusCode.GDrobottingObjects2.push(gdjs.UranusCode.forEachTemporary2);
gdjs.UranusCode.condition0IsTrue_0.val = false;
{
gdjs.UranusCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.UranusCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(13).add(1);
}}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlueEnemy1"), gdjs.UranusCode.GDBlueEnemy1Objects1);

for(gdjs.UranusCode.forEachIndex2 = 0;gdjs.UranusCode.forEachIndex2 < gdjs.UranusCode.GDBlueEnemy1Objects1.length;++gdjs.UranusCode.forEachIndex2) {
gdjs.UranusCode.GDBlueEnemy1Objects2.length = 0;


gdjs.UranusCode.forEachTemporary2 = gdjs.UranusCode.GDBlueEnemy1Objects1[gdjs.UranusCode.forEachIndex2];
gdjs.UranusCode.GDBlueEnemy1Objects2.push(gdjs.UranusCode.forEachTemporary2);
gdjs.UranusCode.condition0IsTrue_0.val = false;
{
gdjs.UranusCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.UranusCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(13).add(1);
}}
}

}


{


gdjs.UranusCode.condition0IsTrue_0.val = false;
{
gdjs.UranusCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "m");
}if (gdjs.UranusCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(16).setNumber(0);
}
{ //Subevents
gdjs.UranusCode.eventsList15(runtimeScene);} //End of subevents
}

}


};

gdjs.UranusCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.UranusCode.GDPlayerObjects1.length = 0;
gdjs.UranusCode.GDPlayerObjects2.length = 0;
gdjs.UranusCode.GDPlayerObjects3.length = 0;
gdjs.UranusCode.GDalienfloorObjects1.length = 0;
gdjs.UranusCode.GDalienfloorObjects2.length = 0;
gdjs.UranusCode.GDalienfloorObjects3.length = 0;
gdjs.UranusCode.GDrocketplatObjects1.length = 0;
gdjs.UranusCode.GDrocketplatObjects2.length = 0;
gdjs.UranusCode.GDrocketplatObjects3.length = 0;
gdjs.UranusCode.GDcloudObjects1.length = 0;
gdjs.UranusCode.GDcloudObjects2.length = 0;
gdjs.UranusCode.GDcloudObjects3.length = 0;
gdjs.UranusCode.GDboltObjects1.length = 0;
gdjs.UranusCode.GDboltObjects2.length = 0;
gdjs.UranusCode.GDboltObjects3.length = 0;
gdjs.UranusCode.GDscoreObjects1.length = 0;
gdjs.UranusCode.GDscoreObjects2.length = 0;
gdjs.UranusCode.GDscoreObjects3.length = 0;
gdjs.UranusCode.GDliveObjects1.length = 0;
gdjs.UranusCode.GDliveObjects2.length = 0;
gdjs.UranusCode.GDliveObjects3.length = 0;
gdjs.UranusCode.GDlivesObjects1.length = 0;
gdjs.UranusCode.GDlivesObjects2.length = 0;
gdjs.UranusCode.GDlivesObjects3.length = 0;
gdjs.UranusCode.GDrobottingObjects1.length = 0;
gdjs.UranusCode.GDrobottingObjects2.length = 0;
gdjs.UranusCode.GDrobottingObjects3.length = 0;
gdjs.UranusCode.GDleftObjects1.length = 0;
gdjs.UranusCode.GDleftObjects2.length = 0;
gdjs.UranusCode.GDleftObjects3.length = 0;
gdjs.UranusCode.GDrightObjects1.length = 0;
gdjs.UranusCode.GDrightObjects2.length = 0;
gdjs.UranusCode.GDrightObjects3.length = 0;
gdjs.UranusCode.GDcrashedshipObjects1.length = 0;
gdjs.UranusCode.GDcrashedshipObjects2.length = 0;
gdjs.UranusCode.GDcrashedshipObjects3.length = 0;
gdjs.UranusCode.GDnotcompleteObjects1.length = 0;
gdjs.UranusCode.GDnotcompleteObjects2.length = 0;
gdjs.UranusCode.GDnotcompleteObjects3.length = 0;
gdjs.UranusCode.GDendObjects1.length = 0;
gdjs.UranusCode.GDendObjects2.length = 0;
gdjs.UranusCode.GDendObjects3.length = 0;
gdjs.UranusCode.GDtimerObjects1.length = 0;
gdjs.UranusCode.GDtimerObjects2.length = 0;
gdjs.UranusCode.GDtimerObjects3.length = 0;
gdjs.UranusCode.GDcheatsObjects1.length = 0;
gdjs.UranusCode.GDcheatsObjects2.length = 0;
gdjs.UranusCode.GDcheatsObjects3.length = 0;
gdjs.UranusCode.GDBlueEnemy1Objects1.length = 0;
gdjs.UranusCode.GDBlueEnemy1Objects2.length = 0;
gdjs.UranusCode.GDBlueEnemy1Objects3.length = 0;
gdjs.UranusCode.GDRedLaser08Objects1.length = 0;
gdjs.UranusCode.GDRedLaser08Objects2.length = 0;
gdjs.UranusCode.GDRedLaser08Objects3.length = 0;
gdjs.UranusCode.GDGreenLaser09Objects1.length = 0;
gdjs.UranusCode.GDGreenLaser09Objects2.length = 0;
gdjs.UranusCode.GDGreenLaser09Objects3.length = 0;
gdjs.UranusCode.GDNewObject3Objects1.length = 0;
gdjs.UranusCode.GDNewObject3Objects2.length = 0;
gdjs.UranusCode.GDNewObject3Objects3.length = 0;
gdjs.UranusCode.GDgamelifeObjects1.length = 0;
gdjs.UranusCode.GDgamelifeObjects2.length = 0;
gdjs.UranusCode.GDgamelifeObjects3.length = 0;
gdjs.UranusCode.GDfpsObjects1.length = 0;
gdjs.UranusCode.GDfpsObjects2.length = 0;
gdjs.UranusCode.GDfpsObjects3.length = 0;

gdjs.UranusCode.eventsList16(runtimeScene);
return;

}

gdjs['UranusCode'] = gdjs.UranusCode;
