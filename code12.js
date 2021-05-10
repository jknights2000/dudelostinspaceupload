gdjs.JupiterCode = {};
gdjs.JupiterCode.forEachIndex2 = 0;

gdjs.JupiterCode.forEachIndex3 = 0;

gdjs.JupiterCode.forEachObjects2 = [];

gdjs.JupiterCode.forEachObjects3 = [];

gdjs.JupiterCode.forEachTemporary2 = null;

gdjs.JupiterCode.forEachTemporary3 = null;

gdjs.JupiterCode.forEachTotalCount2 = 0;

gdjs.JupiterCode.forEachTotalCount3 = 0;

gdjs.JupiterCode.GDPlayerObjects1= [];
gdjs.JupiterCode.GDPlayerObjects2= [];
gdjs.JupiterCode.GDPlayerObjects3= [];
gdjs.JupiterCode.GDalienfloorObjects1= [];
gdjs.JupiterCode.GDalienfloorObjects2= [];
gdjs.JupiterCode.GDalienfloorObjects3= [];
gdjs.JupiterCode.GDrocketplatObjects1= [];
gdjs.JupiterCode.GDrocketplatObjects2= [];
gdjs.JupiterCode.GDrocketplatObjects3= [];
gdjs.JupiterCode.GDcloudObjects1= [];
gdjs.JupiterCode.GDcloudObjects2= [];
gdjs.JupiterCode.GDcloudObjects3= [];
gdjs.JupiterCode.GDboltObjects1= [];
gdjs.JupiterCode.GDboltObjects2= [];
gdjs.JupiterCode.GDboltObjects3= [];
gdjs.JupiterCode.GDscoreObjects1= [];
gdjs.JupiterCode.GDscoreObjects2= [];
gdjs.JupiterCode.GDscoreObjects3= [];
gdjs.JupiterCode.GDliveObjects1= [];
gdjs.JupiterCode.GDliveObjects2= [];
gdjs.JupiterCode.GDliveObjects3= [];
gdjs.JupiterCode.GDlivesObjects1= [];
gdjs.JupiterCode.GDlivesObjects2= [];
gdjs.JupiterCode.GDlivesObjects3= [];
gdjs.JupiterCode.GDrobottingObjects1= [];
gdjs.JupiterCode.GDrobottingObjects2= [];
gdjs.JupiterCode.GDrobottingObjects3= [];
gdjs.JupiterCode.GDleftObjects1= [];
gdjs.JupiterCode.GDleftObjects2= [];
gdjs.JupiterCode.GDleftObjects3= [];
gdjs.JupiterCode.GDrightObjects1= [];
gdjs.JupiterCode.GDrightObjects2= [];
gdjs.JupiterCode.GDrightObjects3= [];
gdjs.JupiterCode.GDcrashedshipObjects1= [];
gdjs.JupiterCode.GDcrashedshipObjects2= [];
gdjs.JupiterCode.GDcrashedshipObjects3= [];
gdjs.JupiterCode.GDnotcompleteObjects1= [];
gdjs.JupiterCode.GDnotcompleteObjects2= [];
gdjs.JupiterCode.GDnotcompleteObjects3= [];
gdjs.JupiterCode.GDendObjects1= [];
gdjs.JupiterCode.GDendObjects2= [];
gdjs.JupiterCode.GDendObjects3= [];
gdjs.JupiterCode.GDtimerObjects1= [];
gdjs.JupiterCode.GDtimerObjects2= [];
gdjs.JupiterCode.GDtimerObjects3= [];
gdjs.JupiterCode.GDcheatsObjects1= [];
gdjs.JupiterCode.GDcheatsObjects2= [];
gdjs.JupiterCode.GDcheatsObjects3= [];
gdjs.JupiterCode.GDBlueEnemy1Objects1= [];
gdjs.JupiterCode.GDBlueEnemy1Objects2= [];
gdjs.JupiterCode.GDBlueEnemy1Objects3= [];
gdjs.JupiterCode.GDRedLaser08Objects1= [];
gdjs.JupiterCode.GDRedLaser08Objects2= [];
gdjs.JupiterCode.GDRedLaser08Objects3= [];
gdjs.JupiterCode.GDGreenLaser09Objects1= [];
gdjs.JupiterCode.GDGreenLaser09Objects2= [];
gdjs.JupiterCode.GDGreenLaser09Objects3= [];
gdjs.JupiterCode.GDNewObject3Objects1= [];
gdjs.JupiterCode.GDNewObject3Objects2= [];
gdjs.JupiterCode.GDNewObject3Objects3= [];
gdjs.JupiterCode.GDgamelifeObjects1= [];
gdjs.JupiterCode.GDgamelifeObjects2= [];
gdjs.JupiterCode.GDgamelifeObjects3= [];
gdjs.JupiterCode.GDfpsObjects1= [];
gdjs.JupiterCode.GDfpsObjects2= [];
gdjs.JupiterCode.GDfpsObjects3= [];

gdjs.JupiterCode.conditionTrue_0 = {val:false};
gdjs.JupiterCode.condition0IsTrue_0 = {val:false};
gdjs.JupiterCode.condition1IsTrue_0 = {val:false};
gdjs.JupiterCode.condition2IsTrue_0 = {val:false};
gdjs.JupiterCode.condition3IsTrue_0 = {val:false};
gdjs.JupiterCode.conditionTrue_1 = {val:false};
gdjs.JupiterCode.condition0IsTrue_1 = {val:false};
gdjs.JupiterCode.condition1IsTrue_1 = {val:false};
gdjs.JupiterCode.condition2IsTrue_1 = {val:false};
gdjs.JupiterCode.condition3IsTrue_1 = {val:false};


gdjs.JupiterCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.JupiterCode.GDPlayerObjects1, gdjs.JupiterCode.GDPlayerObjects2);


gdjs.JupiterCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.JupiterCode.GDPlayerObjects2.length;i<l;++i) {
    if ( !(gdjs.JupiterCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.JupiterCode.condition0IsTrue_0.val = true;
        gdjs.JupiterCode.GDPlayerObjects2[k] = gdjs.JupiterCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.JupiterCode.GDPlayerObjects2.length = k;}if (gdjs.JupiterCode.condition0IsTrue_0.val) {
/* Reuse gdjs.JupiterCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.JupiterCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.JupiterCode.GDPlayerObjects2[i].setAnimationName("stand");
}
}}

}


{

gdjs.copyArray(gdjs.JupiterCode.GDPlayerObjects1, gdjs.JupiterCode.GDPlayerObjects2);


gdjs.JupiterCode.condition0IsTrue_0.val = false;
gdjs.JupiterCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.JupiterCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.JupiterCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.JupiterCode.condition0IsTrue_0.val = true;
        gdjs.JupiterCode.GDPlayerObjects2[k] = gdjs.JupiterCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.JupiterCode.GDPlayerObjects2.length = k;}if ( gdjs.JupiterCode.condition0IsTrue_0.val ) {
{
gdjs.JupiterCode.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}}
if (gdjs.JupiterCode.condition1IsTrue_0.val) {
/* Reuse gdjs.JupiterCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.JupiterCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.JupiterCode.GDPlayerObjects2[i].setAnimationName("run");
}
}{for(var i = 0, len = gdjs.JupiterCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.JupiterCode.GDPlayerObjects2[i].playAnimation();
}
}{for(var i = 0, len = gdjs.JupiterCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.JupiterCode.GDPlayerObjects2[i].flipX(false);
}
}}

}


{

/* Reuse gdjs.JupiterCode.GDPlayerObjects1 */

gdjs.JupiterCode.condition0IsTrue_0.val = false;
gdjs.JupiterCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.JupiterCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.JupiterCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.JupiterCode.condition0IsTrue_0.val = true;
        gdjs.JupiterCode.GDPlayerObjects1[k] = gdjs.JupiterCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.JupiterCode.GDPlayerObjects1.length = k;}if ( gdjs.JupiterCode.condition0IsTrue_0.val ) {
{
gdjs.JupiterCode.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}}
if (gdjs.JupiterCode.condition1IsTrue_0.val) {
/* Reuse gdjs.JupiterCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.JupiterCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.JupiterCode.GDPlayerObjects1[i].setAnimationName("run");
}
}{for(var i = 0, len = gdjs.JupiterCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.JupiterCode.GDPlayerObjects1[i].playAnimation();
}
}{for(var i = 0, len = gdjs.JupiterCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.JupiterCode.GDPlayerObjects1[i].flipX(true);
}
}}

}


};gdjs.JupiterCode.mapOfGDgdjs_46JupiterCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.JupiterCode.GDPlayerObjects1});gdjs.JupiterCode.mapOfGDgdjs_46JupiterCode_46GDboltObjects1Objects = Hashtable.newFrom({"bolt": gdjs.JupiterCode.GDboltObjects1});gdjs.JupiterCode.eventsList1 = function(runtimeScene) {

{


gdjs.JupiterCode.condition0IsTrue_0.val = false;
{
gdjs.JupiterCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(17)) == 0;
}if (gdjs.JupiterCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "66136__aji__ding30603-spedup.wav", false, 5, 1);
}}

}


};gdjs.JupiterCode.mapOfGDgdjs_46JupiterCode_46GDBlueEnemy1Objects1Objects = Hashtable.newFrom({"BlueEnemy1": gdjs.JupiterCode.GDBlueEnemy1Objects1});gdjs.JupiterCode.mapOfGDgdjs_46JupiterCode_46GDleftObjects1Objects = Hashtable.newFrom({"left": gdjs.JupiterCode.GDleftObjects1});gdjs.JupiterCode.mapOfGDgdjs_46JupiterCode_46GDBlueEnemy1Objects1Objects = Hashtable.newFrom({"BlueEnemy1": gdjs.JupiterCode.GDBlueEnemy1Objects1});gdjs.JupiterCode.mapOfGDgdjs_46JupiterCode_46GDrightObjects1Objects = Hashtable.newFrom({"right": gdjs.JupiterCode.GDrightObjects1});gdjs.JupiterCode.mapOfGDgdjs_46JupiterCode_46GDrobottingObjects1Objects = Hashtable.newFrom({"robotting": gdjs.JupiterCode.GDrobottingObjects1});gdjs.JupiterCode.mapOfGDgdjs_46JupiterCode_46GDleftObjects1Objects = Hashtable.newFrom({"left": gdjs.JupiterCode.GDleftObjects1});gdjs.JupiterCode.mapOfGDgdjs_46JupiterCode_46GDrobottingObjects1Objects = Hashtable.newFrom({"robotting": gdjs.JupiterCode.GDrobottingObjects1});gdjs.JupiterCode.mapOfGDgdjs_46JupiterCode_46GDrightObjects1Objects = Hashtable.newFrom({"right": gdjs.JupiterCode.GDrightObjects1});gdjs.JupiterCode.eventsList2 = function(runtimeScene) {

};gdjs.JupiterCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("bolt"), gdjs.JupiterCode.GDboltObjects1);

for(gdjs.JupiterCode.forEachIndex2 = 0;gdjs.JupiterCode.forEachIndex2 < gdjs.JupiterCode.GDboltObjects1.length;++gdjs.JupiterCode.forEachIndex2) {
gdjs.JupiterCode.GDboltObjects2.length = 0;


gdjs.JupiterCode.forEachTemporary2 = gdjs.JupiterCode.GDboltObjects1[gdjs.JupiterCode.forEachIndex2];
gdjs.JupiterCode.GDboltObjects2.push(gdjs.JupiterCode.forEachTemporary2);
gdjs.JupiterCode.condition0IsTrue_0.val = false;
{
gdjs.JupiterCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.JupiterCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(4).add(1);
}}
}

}


};gdjs.JupiterCode.mapOfGDgdjs_46JupiterCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.JupiterCode.GDPlayerObjects1});gdjs.JupiterCode.mapOfGDgdjs_46JupiterCode_46GDrobottingObjects1Objects = Hashtable.newFrom({"robotting": gdjs.JupiterCode.GDrobottingObjects1});gdjs.JupiterCode.mapOfGDgdjs_46JupiterCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.JupiterCode.GDPlayerObjects1});gdjs.JupiterCode.mapOfGDgdjs_46JupiterCode_46GDBlueEnemy1Objects1Objects = Hashtable.newFrom({"BlueEnemy1": gdjs.JupiterCode.GDBlueEnemy1Objects1});gdjs.JupiterCode.mapOfGDgdjs_46JupiterCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.JupiterCode.GDPlayerObjects1});gdjs.JupiterCode.mapOfGDgdjs_46JupiterCode_46GDrobottingObjects1Objects = Hashtable.newFrom({"robotting": gdjs.JupiterCode.GDrobottingObjects1});gdjs.JupiterCode.mapOfGDgdjs_46JupiterCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.JupiterCode.GDPlayerObjects1});gdjs.JupiterCode.mapOfGDgdjs_46JupiterCode_46GDcrashedshipObjects1Objects = Hashtable.newFrom({"crashedship": gdjs.JupiterCode.GDcrashedshipObjects1});gdjs.JupiterCode.mapOfGDgdjs_46JupiterCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.JupiterCode.GDPlayerObjects1});gdjs.JupiterCode.mapOfGDgdjs_46JupiterCode_46GDcrashedshipObjects1Objects = Hashtable.newFrom({"crashedship": gdjs.JupiterCode.GDcrashedshipObjects1});gdjs.JupiterCode.mapOfGDgdjs_46JupiterCode_46GDcrashedshipObjects1Objects = Hashtable.newFrom({"crashedship": gdjs.JupiterCode.GDcrashedshipObjects1});gdjs.JupiterCode.mapOfGDgdjs_46JupiterCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.JupiterCode.GDPlayerObjects1});gdjs.JupiterCode.mapOfGDgdjs_46JupiterCode_46GDcrashedshipObjects1Objects = Hashtable.newFrom({"crashedship": gdjs.JupiterCode.GDcrashedshipObjects1});gdjs.JupiterCode.mapOfGDgdjs_46JupiterCode_46GDendObjects1Objects = Hashtable.newFrom({"end": gdjs.JupiterCode.GDendObjects1});gdjs.JupiterCode.mapOfGDgdjs_46JupiterCode_46GDrobottingObjects1Objects = Hashtable.newFrom({"robotting": gdjs.JupiterCode.GDrobottingObjects1});gdjs.JupiterCode.mapOfGDgdjs_46JupiterCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.JupiterCode.GDPlayerObjects1});gdjs.JupiterCode.mapOfGDgdjs_46JupiterCode_46GDBlueEnemy1Objects1Objects = Hashtable.newFrom({"BlueEnemy1": gdjs.JupiterCode.GDBlueEnemy1Objects1});gdjs.JupiterCode.mapOfGDgdjs_46JupiterCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.JupiterCode.GDPlayerObjects1});gdjs.JupiterCode.eventsList4 = function(runtimeScene) {

};gdjs.JupiterCode.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("bolt"), gdjs.JupiterCode.GDboltObjects1);

for(gdjs.JupiterCode.forEachIndex2 = 0;gdjs.JupiterCode.forEachIndex2 < gdjs.JupiterCode.GDboltObjects1.length;++gdjs.JupiterCode.forEachIndex2) {
gdjs.JupiterCode.GDboltObjects2.length = 0;


gdjs.JupiterCode.forEachTemporary2 = gdjs.JupiterCode.GDboltObjects1[gdjs.JupiterCode.forEachIndex2];
gdjs.JupiterCode.GDboltObjects2.push(gdjs.JupiterCode.forEachTemporary2);
if (true) {
{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}{for(var i = 0, len = gdjs.JupiterCode.GDboltObjects2.length ;i < len;++i) {
    gdjs.JupiterCode.GDboltObjects2[i].deleteFromScene(runtimeScene);
}
}}
}

}


};gdjs.JupiterCode.eventsList6 = function(runtimeScene) {

};gdjs.JupiterCode.eventsList7 = function(runtimeScene) {

};gdjs.JupiterCode.eventsList8 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("robotting"), gdjs.JupiterCode.GDrobottingObjects2);

for(gdjs.JupiterCode.forEachIndex3 = 0;gdjs.JupiterCode.forEachIndex3 < gdjs.JupiterCode.GDrobottingObjects2.length;++gdjs.JupiterCode.forEachIndex3) {
gdjs.JupiterCode.GDrobottingObjects3.length = 0;


gdjs.JupiterCode.forEachTemporary3 = gdjs.JupiterCode.GDrobottingObjects2[gdjs.JupiterCode.forEachIndex3];
gdjs.JupiterCode.GDrobottingObjects3.push(gdjs.JupiterCode.forEachTemporary3);
if (true) {
{for(var i = 0, len = gdjs.JupiterCode.GDrobottingObjects3.length ;i < len;++i) {
    gdjs.JupiterCode.GDrobottingObjects3[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(13).sub(1);
}}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlueEnemy1"), gdjs.JupiterCode.GDBlueEnemy1Objects1);

for(gdjs.JupiterCode.forEachIndex2 = 0;gdjs.JupiterCode.forEachIndex2 < gdjs.JupiterCode.GDBlueEnemy1Objects1.length;++gdjs.JupiterCode.forEachIndex2) {
gdjs.JupiterCode.GDBlueEnemy1Objects2.length = 0;


gdjs.JupiterCode.forEachTemporary2 = gdjs.JupiterCode.GDBlueEnemy1Objects1[gdjs.JupiterCode.forEachIndex2];
gdjs.JupiterCode.GDBlueEnemy1Objects2.push(gdjs.JupiterCode.forEachTemporary2);
if (true) {
{for(var i = 0, len = gdjs.JupiterCode.GDBlueEnemy1Objects2.length ;i < len;++i) {
    gdjs.JupiterCode.GDBlueEnemy1Objects2[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(13).sub(1);
}}
}

}


};gdjs.JupiterCode.mapOfGDgdjs_46JupiterCode_46GDRedLaser08Objects1Objects = Hashtable.newFrom({"RedLaser08": gdjs.JupiterCode.GDRedLaser08Objects1});gdjs.JupiterCode.mapOfGDgdjs_46JupiterCode_46GDGreenLaser09Objects1Objects = Hashtable.newFrom({"GreenLaser09": gdjs.JupiterCode.GDGreenLaser09Objects1});gdjs.JupiterCode.mapOfGDgdjs_46JupiterCode_46GDGreenLaser09Objects1Objects = Hashtable.newFrom({"GreenLaser09": gdjs.JupiterCode.GDGreenLaser09Objects1});gdjs.JupiterCode.mapOfGDgdjs_46JupiterCode_46GDRedLaser08Objects1Objects = Hashtable.newFrom({"RedLaser08": gdjs.JupiterCode.GDRedLaser08Objects1});gdjs.JupiterCode.mapOfGDgdjs_46JupiterCode_46GDGreenLaser09Objects1Objects = Hashtable.newFrom({"GreenLaser09": gdjs.JupiterCode.GDGreenLaser09Objects1});gdjs.JupiterCode.mapOfGDgdjs_46JupiterCode_46GDalienfloorObjects1Objects = Hashtable.newFrom({"alienfloor": gdjs.JupiterCode.GDalienfloorObjects1});gdjs.JupiterCode.mapOfGDgdjs_46JupiterCode_46GDRedLaser08Objects1Objects = Hashtable.newFrom({"RedLaser08": gdjs.JupiterCode.GDRedLaser08Objects1});gdjs.JupiterCode.mapOfGDgdjs_46JupiterCode_46GDalienfloorObjects1Objects = Hashtable.newFrom({"alienfloor": gdjs.JupiterCode.GDalienfloorObjects1});gdjs.JupiterCode.mapOfGDgdjs_46JupiterCode_46GDGreenLaser09Objects1Objects = Hashtable.newFrom({"GreenLaser09": gdjs.JupiterCode.GDGreenLaser09Objects1});gdjs.JupiterCode.mapOfGDgdjs_46JupiterCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.JupiterCode.GDPlayerObjects1});gdjs.JupiterCode.mapOfGDgdjs_46JupiterCode_46GDRedLaser08Objects1Objects = Hashtable.newFrom({"RedLaser08": gdjs.JupiterCode.GDRedLaser08Objects1});gdjs.JupiterCode.mapOfGDgdjs_46JupiterCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.JupiterCode.GDPlayerObjects1});gdjs.JupiterCode.eventsList9 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("fps"), gdjs.JupiterCode.GDfpsObjects2);

gdjs.JupiterCode.condition0IsTrue_0.val = false;
gdjs.JupiterCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.JupiterCode.GDfpsObjects2.length;i<l;++i) {
    if ( !(gdjs.JupiterCode.GDfpsObjects2[i].isVisible()) ) {
        gdjs.JupiterCode.condition0IsTrue_0.val = true;
        gdjs.JupiterCode.GDfpsObjects2[k] = gdjs.JupiterCode.GDfpsObjects2[i];
        ++k;
    }
}
gdjs.JupiterCode.GDfpsObjects2.length = k;}if ( gdjs.JupiterCode.condition0IsTrue_0.val ) {
{
gdjs.JupiterCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(15)) == 0;
}}
if (gdjs.JupiterCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject3"), gdjs.JupiterCode.GDNewObject3Objects2);
gdjs.copyArray(runtimeScene.getObjects("cheats"), gdjs.JupiterCode.GDcheatsObjects2);
/* Reuse gdjs.JupiterCode.GDfpsObjects2 */
gdjs.copyArray(runtimeScene.getObjects("gamelife"), gdjs.JupiterCode.GDgamelifeObjects2);
{for(var i = 0, len = gdjs.JupiterCode.GDfpsObjects2.length ;i < len;++i) {
    gdjs.JupiterCode.GDfpsObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.JupiterCode.GDcheatsObjects2.length ;i < len;++i) {
    gdjs.JupiterCode.GDcheatsObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.JupiterCode.GDNewObject3Objects2.length ;i < len;++i) {
    gdjs.JupiterCode.GDNewObject3Objects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.JupiterCode.GDgamelifeObjects2.length ;i < len;++i) {
    gdjs.JupiterCode.GDgamelifeObjects2[i].hide(false);
}
}{runtimeScene.getGame().getVariables().getFromIndex(15).setNumber(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("fps"), gdjs.JupiterCode.GDfpsObjects1);

gdjs.JupiterCode.condition0IsTrue_0.val = false;
gdjs.JupiterCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.JupiterCode.GDfpsObjects1.length;i<l;++i) {
    if ( gdjs.JupiterCode.GDfpsObjects1[i].isVisible() ) {
        gdjs.JupiterCode.condition0IsTrue_0.val = true;
        gdjs.JupiterCode.GDfpsObjects1[k] = gdjs.JupiterCode.GDfpsObjects1[i];
        ++k;
    }
}
gdjs.JupiterCode.GDfpsObjects1.length = k;}if ( gdjs.JupiterCode.condition0IsTrue_0.val ) {
{
gdjs.JupiterCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(15)) == 0;
}}
if (gdjs.JupiterCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject3"), gdjs.JupiterCode.GDNewObject3Objects1);
gdjs.copyArray(runtimeScene.getObjects("cheats"), gdjs.JupiterCode.GDcheatsObjects1);
/* Reuse gdjs.JupiterCode.GDfpsObjects1 */
gdjs.copyArray(runtimeScene.getObjects("gamelife"), gdjs.JupiterCode.GDgamelifeObjects1);
{for(var i = 0, len = gdjs.JupiterCode.GDfpsObjects1.length ;i < len;++i) {
    gdjs.JupiterCode.GDfpsObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.JupiterCode.GDcheatsObjects1.length ;i < len;++i) {
    gdjs.JupiterCode.GDcheatsObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.JupiterCode.GDNewObject3Objects1.length ;i < len;++i) {
    gdjs.JupiterCode.GDNewObject3Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.JupiterCode.GDgamelifeObjects1.length ;i < len;++i) {
    gdjs.JupiterCode.GDgamelifeObjects1[i].hide();
}
}{runtimeScene.getGame().getVariables().getFromIndex(15).setNumber(1);
}}

}


};gdjs.JupiterCode.eventsList10 = function(runtimeScene) {

};gdjs.JupiterCode.eventsList11 = function(runtimeScene) {

};gdjs.JupiterCode.eventsList12 = function(runtimeScene) {

};gdjs.JupiterCode.eventsList13 = function(runtimeScene) {

};gdjs.JupiterCode.eventsList14 = function(runtimeScene) {

};gdjs.JupiterCode.eventsList15 = function(runtimeScene) {

{


gdjs.JupiterCode.condition0IsTrue_0.val = false;
gdjs.JupiterCode.condition1IsTrue_0.val = false;
{
gdjs.JupiterCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(16)) == 0;
}if ( gdjs.JupiterCode.condition0IsTrue_0.val ) {
{
gdjs.JupiterCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(17)) == 0;
}}
if (gdjs.JupiterCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(16).setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(17).setNumber(1);
}}

}


{


gdjs.JupiterCode.condition0IsTrue_0.val = false;
gdjs.JupiterCode.condition1IsTrue_0.val = false;
{
gdjs.JupiterCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(16)) == 0;
}if ( gdjs.JupiterCode.condition0IsTrue_0.val ) {
{
gdjs.JupiterCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(17)) == 1;
}}
if (gdjs.JupiterCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(16).setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(17).setNumber(0);
}}

}


};gdjs.JupiterCode.eventsList16 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.JupiterCode.GDPlayerObjects1);

gdjs.JupiterCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.JupiterCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.JupiterCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.JupiterCode.condition0IsTrue_0.val = true;
        gdjs.JupiterCode.GDPlayerObjects1[k] = gdjs.JupiterCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.JupiterCode.GDPlayerObjects1.length = k;}if (gdjs.JupiterCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.JupiterCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.JupiterCode.GDPlayerObjects1);

gdjs.JupiterCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.JupiterCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.JupiterCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.JupiterCode.condition0IsTrue_0.val = true;
        gdjs.JupiterCode.GDPlayerObjects1[k] = gdjs.JupiterCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.JupiterCode.GDPlayerObjects1.length = k;}if (gdjs.JupiterCode.condition0IsTrue_0.val) {
/* Reuse gdjs.JupiterCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.JupiterCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.JupiterCode.GDPlayerObjects1[i].setAnimationName("jump");
}
}{runtimeScene.getGame().getVariables().getFromIndex(3).setString("none");
}{for(var i = 0, len = gdjs.JupiterCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.JupiterCode.GDPlayerObjects1[i].clearForces();
}
}{for(var i = 0, len = gdjs.JupiterCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.JupiterCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").setGravity(3000);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.JupiterCode.GDPlayerObjects1);

gdjs.JupiterCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.JupiterCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.JupiterCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.JupiterCode.condition0IsTrue_0.val = true;
        gdjs.JupiterCode.GDPlayerObjects1[k] = gdjs.JupiterCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.JupiterCode.GDPlayerObjects1.length = k;}if (gdjs.JupiterCode.condition0IsTrue_0.val) {
/* Reuse gdjs.JupiterCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.JupiterCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.JupiterCode.GDPlayerObjects1[i].setAnimationName("jump");
}
}}

}


{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.JupiterCode.GDPlayerObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.JupiterCode.GDPlayerObjects1.length !== 0 ? gdjs.JupiterCode.GDPlayerObjects1[0] : null), false, "", 0);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("rocketplat"), gdjs.JupiterCode.GDrocketplatObjects1);
{for(var i = 0, len = gdjs.JupiterCode.GDrocketplatObjects1.length ;i < len;++i) {
    gdjs.JupiterCode.GDrocketplatObjects1[i].setZOrder(1);
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("cloud"), gdjs.JupiterCode.GDcloudObjects1);
gdjs.copyArray(runtimeScene.getObjects("crashedship"), gdjs.JupiterCode.GDcrashedshipObjects1);
{for(var i = 0, len = gdjs.JupiterCode.GDcloudObjects1.length ;i < len;++i) {
    gdjs.JupiterCode.GDcloudObjects1[i].setZOrder(-(2));
}
}{for(var i = 0, len = gdjs.JupiterCode.GDcrashedshipObjects1.length ;i < len;++i) {
    gdjs.JupiterCode.GDcrashedshipObjects1[i].setZOrder(1);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.JupiterCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("bolt"), gdjs.JupiterCode.GDboltObjects1);

gdjs.JupiterCode.condition0IsTrue_0.val = false;
{
gdjs.JupiterCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.JupiterCode.mapOfGDgdjs_46JupiterCode_46GDPlayerObjects1Objects, gdjs.JupiterCode.mapOfGDgdjs_46JupiterCode_46GDboltObjects1Objects, false, runtimeScene, false);
}if (gdjs.JupiterCode.condition0IsTrue_0.val) {
/* Reuse gdjs.JupiterCode.GDboltObjects1 */
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.JupiterCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.JupiterCode.GDboltObjects1.length ;i < len;++i) {
    gdjs.JupiterCode.GDboltObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}{for(var i = 0, len = gdjs.JupiterCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.JupiterCode.GDscoreObjects1[i].setString("Score:" + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0))));
}
}
{ //Subevents
gdjs.JupiterCode.eventsList1(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.JupiterCode.condition0IsTrue_0.val = false;
{
gdjs.JupiterCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "f");
}if (gdjs.JupiterCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}}

}


{


gdjs.JupiterCode.condition0IsTrue_0.val = false;
{
gdjs.JupiterCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Escape");
}if (gdjs.JupiterCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, false, true);
}}

}


{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("NewObject3"), gdjs.JupiterCode.GDNewObject3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.JupiterCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("cheats"), gdjs.JupiterCode.GDcheatsObjects1);
gdjs.copyArray(runtimeScene.getObjects("fps"), gdjs.JupiterCode.GDfpsObjects1);
gdjs.copyArray(runtimeScene.getObjects("gamelife"), gdjs.JupiterCode.GDgamelifeObjects1);
gdjs.copyArray(runtimeScene.getObjects("live"), gdjs.JupiterCode.GDliveObjects1);
gdjs.copyArray(runtimeScene.getObjects("lives"), gdjs.JupiterCode.GDlivesObjects1);
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.JupiterCode.GDscoreObjects1);
gdjs.copyArray(runtimeScene.getObjects("timer"), gdjs.JupiterCode.GDtimerObjects1);
{for(var i = 0, len = gdjs.JupiterCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.JupiterCode.GDscoreObjects1[i].setString("Amount of bolts " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0))) + "/ " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4))));
}
}{for(var i = 0, len = gdjs.JupiterCode.GDlivesObjects1.length ;i < len;++i) {
    gdjs.JupiterCode.GDlivesObjects1[i].setString("X" + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1))));
}
}{for(var i = 0, len = gdjs.JupiterCode.GDtimerObjects1.length ;i < len;++i) {
    gdjs.JupiterCode.GDtimerObjects1[i].setString("Time: " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9))));
}
}{for(var i = 0, len = gdjs.JupiterCode.GDfpsObjects1.length ;i < len;++i) {
    gdjs.JupiterCode.GDfpsObjects1[i].setString(gdjs.evtTools.common.toString(Math.round(1 / gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene))) + "fps");
}
}{for(var i = 0, len = gdjs.JupiterCode.GDNewObject3Objects1.length ;i < len;++i) {
    gdjs.JupiterCode.GDNewObject3Objects1[i].setString("no of objects : " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(13))));
}
}{for(var i = 0, len = gdjs.JupiterCode.GDgamelifeObjects1.length ;i < len;++i) {
    gdjs.JupiterCode.GDgamelifeObjects1[i].setString("Total Game time = " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(14))));
}
}{for(var i = 0, len = gdjs.JupiterCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.JupiterCode.GDscoreObjects1[i].setX((( gdjs.JupiterCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.JupiterCode.GDPlayerObjects1[0].getPointX("")) - 200);
}
}{for(var i = 0, len = gdjs.JupiterCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.JupiterCode.GDscoreObjects1[i].setY((( gdjs.JupiterCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.JupiterCode.GDPlayerObjects1[0].getPointY("")) - 200);
}
}{for(var i = 0, len = gdjs.JupiterCode.GDlivesObjects1.length ;i < len;++i) {
    gdjs.JupiterCode.GDlivesObjects1[i].setX((( gdjs.JupiterCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.JupiterCode.GDPlayerObjects1[0].getPointX("")) - 130);
}
}{for(var i = 0, len = gdjs.JupiterCode.GDlivesObjects1.length ;i < len;++i) {
    gdjs.JupiterCode.GDlivesObjects1[i].setY((( gdjs.JupiterCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.JupiterCode.GDPlayerObjects1[0].getPointY("")) - 150);
}
}{for(var i = 0, len = gdjs.JupiterCode.GDliveObjects1.length ;i < len;++i) {
    gdjs.JupiterCode.GDliveObjects1[i].setX((( gdjs.JupiterCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.JupiterCode.GDPlayerObjects1[0].getPointX("")) - 200);
}
}{for(var i = 0, len = gdjs.JupiterCode.GDliveObjects1.length ;i < len;++i) {
    gdjs.JupiterCode.GDliveObjects1[i].setY((( gdjs.JupiterCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.JupiterCode.GDPlayerObjects1[0].getPointY("")) - 170);
}
}{for(var i = 0, len = gdjs.JupiterCode.GDtimerObjects1.length ;i < len;++i) {
    gdjs.JupiterCode.GDtimerObjects1[i].setX((( gdjs.JupiterCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.JupiterCode.GDPlayerObjects1[0].getPointX("")) + 200);
}
}{for(var i = 0, len = gdjs.JupiterCode.GDtimerObjects1.length ;i < len;++i) {
    gdjs.JupiterCode.GDtimerObjects1[i].setY((( gdjs.JupiterCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.JupiterCode.GDPlayerObjects1[0].getPointY("")) - 200);
}
}{for(var i = 0, len = gdjs.JupiterCode.GDcheatsObjects1.length ;i < len;++i) {
    gdjs.JupiterCode.GDcheatsObjects1[i].setX((( gdjs.JupiterCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.JupiterCode.GDPlayerObjects1[0].getPointX("")));
}
}{for(var i = 0, len = gdjs.JupiterCode.GDcheatsObjects1.length ;i < len;++i) {
    gdjs.JupiterCode.GDcheatsObjects1[i].setY((( gdjs.JupiterCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.JupiterCode.GDPlayerObjects1[0].getPointY("")) - 200);
}
}{for(var i = 0, len = gdjs.JupiterCode.GDfpsObjects1.length ;i < len;++i) {
    gdjs.JupiterCode.GDfpsObjects1[i].setX((( gdjs.JupiterCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.JupiterCode.GDPlayerObjects1[0].getPointX("")) + 290);
}
}{for(var i = 0, len = gdjs.JupiterCode.GDfpsObjects1.length ;i < len;++i) {
    gdjs.JupiterCode.GDfpsObjects1[i].setY((( gdjs.JupiterCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.JupiterCode.GDPlayerObjects1[0].getPointY("")) - 200);
}
}{for(var i = 0, len = gdjs.JupiterCode.GDNewObject3Objects1.length ;i < len;++i) {
    gdjs.JupiterCode.GDNewObject3Objects1[i].setX((( gdjs.JupiterCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.JupiterCode.GDPlayerObjects1[0].getPointX("")) + 220);
}
}{for(var i = 0, len = gdjs.JupiterCode.GDNewObject3Objects1.length ;i < len;++i) {
    gdjs.JupiterCode.GDNewObject3Objects1[i].setY((( gdjs.JupiterCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.JupiterCode.GDPlayerObjects1[0].getPointY("")) - 160);
}
}{for(var i = 0, len = gdjs.JupiterCode.GDgamelifeObjects1.length ;i < len;++i) {
    gdjs.JupiterCode.GDgamelifeObjects1[i].setX((( gdjs.JupiterCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.JupiterCode.GDPlayerObjects1[0].getPointX("")) + 220);
}
}{for(var i = 0, len = gdjs.JupiterCode.GDgamelifeObjects1.length ;i < len;++i) {
    gdjs.JupiterCode.GDgamelifeObjects1[i].setY((( gdjs.JupiterCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.JupiterCode.GDPlayerObjects1[0].getPointY("")) - 140);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.JupiterCode.GDPlayerObjects1);

gdjs.JupiterCode.condition0IsTrue_0.val = false;
gdjs.JupiterCode.condition1IsTrue_0.val = false;
gdjs.JupiterCode.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.JupiterCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.JupiterCode.GDPlayerObjects1[i].getY() >= 600 ) {
        gdjs.JupiterCode.condition0IsTrue_0.val = true;
        gdjs.JupiterCode.GDPlayerObjects1[k] = gdjs.JupiterCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.JupiterCode.GDPlayerObjects1.length = k;}if ( gdjs.JupiterCode.condition0IsTrue_0.val ) {
{
gdjs.JupiterCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) != 0;
}if ( gdjs.JupiterCode.condition1IsTrue_0.val ) {
{
gdjs.JupiterCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) != 1;
}}
}
if (gdjs.JupiterCode.condition2IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).sub(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}{runtimeScene.getGame().getVariables().getFromIndex(1).sub(1);
}{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Jupiter");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.JupiterCode.GDPlayerObjects1);

gdjs.JupiterCode.condition0IsTrue_0.val = false;
gdjs.JupiterCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.JupiterCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.JupiterCode.GDPlayerObjects1[i].getY() >= 600 ) {
        gdjs.JupiterCode.condition0IsTrue_0.val = true;
        gdjs.JupiterCode.GDPlayerObjects1[k] = gdjs.JupiterCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.JupiterCode.GDPlayerObjects1.length = k;}if ( gdjs.JupiterCode.condition0IsTrue_0.val ) {
{
gdjs.JupiterCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) == 1;
}}
if (gdjs.JupiterCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Jupiter");
}}

}


{


gdjs.JupiterCode.condition0IsTrue_0.val = false;
{
gdjs.JupiterCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 0;
}if (gdjs.JupiterCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Dead", true);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("BlueEnemy1"), gdjs.JupiterCode.GDBlueEnemy1Objects1);
gdjs.copyArray(runtimeScene.getObjects("left"), gdjs.JupiterCode.GDleftObjects1);

gdjs.JupiterCode.condition0IsTrue_0.val = false;
{
gdjs.JupiterCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.JupiterCode.mapOfGDgdjs_46JupiterCode_46GDBlueEnemy1Objects1Objects, gdjs.JupiterCode.mapOfGDgdjs_46JupiterCode_46GDleftObjects1Objects, false, runtimeScene, false);
}if (gdjs.JupiterCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(10).setString("Left");
}}

}


{


gdjs.JupiterCode.condition0IsTrue_0.val = false;
{
gdjs.JupiterCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(10)) == "Left";
}if (gdjs.JupiterCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BlueEnemy1"), gdjs.JupiterCode.GDBlueEnemy1Objects1);
{for(var i = 0, len = gdjs.JupiterCode.GDBlueEnemy1Objects1.length ;i < len;++i) {
    gdjs.JupiterCode.GDBlueEnemy1Objects1[i].addPolarForce(180, 100, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlueEnemy1"), gdjs.JupiterCode.GDBlueEnemy1Objects1);
gdjs.copyArray(runtimeScene.getObjects("right"), gdjs.JupiterCode.GDrightObjects1);

gdjs.JupiterCode.condition0IsTrue_0.val = false;
{
gdjs.JupiterCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.JupiterCode.mapOfGDgdjs_46JupiterCode_46GDBlueEnemy1Objects1Objects, gdjs.JupiterCode.mapOfGDgdjs_46JupiterCode_46GDrightObjects1Objects, false, runtimeScene, false);
}if (gdjs.JupiterCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(10).setString("Right");
}}

}


{


gdjs.JupiterCode.condition0IsTrue_0.val = false;
{
gdjs.JupiterCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(10)) == "Right";
}if (gdjs.JupiterCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BlueEnemy1"), gdjs.JupiterCode.GDBlueEnemy1Objects1);
{for(var i = 0, len = gdjs.JupiterCode.GDBlueEnemy1Objects1.length ;i < len;++i) {
    gdjs.JupiterCode.GDBlueEnemy1Objects1[i].addPolarForce(0, 100, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("left"), gdjs.JupiterCode.GDleftObjects1);
gdjs.copyArray(runtimeScene.getObjects("robotting"), gdjs.JupiterCode.GDrobottingObjects1);

gdjs.JupiterCode.condition0IsTrue_0.val = false;
{
gdjs.JupiterCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.JupiterCode.mapOfGDgdjs_46JupiterCode_46GDrobottingObjects1Objects, gdjs.JupiterCode.mapOfGDgdjs_46JupiterCode_46GDleftObjects1Objects, false, runtimeScene, false);
}if (gdjs.JupiterCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(2).setString("Left");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("right"), gdjs.JupiterCode.GDrightObjects1);
gdjs.copyArray(runtimeScene.getObjects("robotting"), gdjs.JupiterCode.GDrobottingObjects1);

gdjs.JupiterCode.condition0IsTrue_0.val = false;
{
gdjs.JupiterCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.JupiterCode.mapOfGDgdjs_46JupiterCode_46GDrobottingObjects1Objects, gdjs.JupiterCode.mapOfGDgdjs_46JupiterCode_46GDrightObjects1Objects, false, runtimeScene, false);
}if (gdjs.JupiterCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(2).setString("Right");
}}

}


{


gdjs.JupiterCode.condition0IsTrue_0.val = false;
{
gdjs.JupiterCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)) == "Left";
}if (gdjs.JupiterCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("robotting"), gdjs.JupiterCode.GDrobottingObjects1);
{for(var i = 0, len = gdjs.JupiterCode.GDrobottingObjects1.length ;i < len;++i) {
    gdjs.JupiterCode.GDrobottingObjects1[i].addPolarForce(180, 100, 0);
}
}{for(var i = 0, len = gdjs.JupiterCode.GDrobottingObjects1.length ;i < len;++i) {
    gdjs.JupiterCode.GDrobottingObjects1[i].flipX(false);
}
}}

}


{


gdjs.JupiterCode.condition0IsTrue_0.val = false;
{
gdjs.JupiterCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)) == "Right";
}if (gdjs.JupiterCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("robotting"), gdjs.JupiterCode.GDrobottingObjects1);
{for(var i = 0, len = gdjs.JupiterCode.GDrobottingObjects1.length ;i < len;++i) {
    gdjs.JupiterCode.GDrobottingObjects1[i].addPolarForce(0, 100, 0);
}
}{for(var i = 0, len = gdjs.JupiterCode.GDrobottingObjects1.length ;i < len;++i) {
    gdjs.JupiterCode.GDrobottingObjects1[i].flipX(true);
}
}}

}


{



}


{


gdjs.JupiterCode.condition0IsTrue_0.val = false;
{
gdjs.JupiterCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.JupiterCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject3"), gdjs.JupiterCode.GDNewObject3Objects1);
gdjs.copyArray(runtimeScene.getObjects("cheats"), gdjs.JupiterCode.GDcheatsObjects1);
gdjs.copyArray(runtimeScene.getObjects("crashedship"), gdjs.JupiterCode.GDcrashedshipObjects1);
gdjs.copyArray(runtimeScene.getObjects("fps"), gdjs.JupiterCode.GDfpsObjects1);
gdjs.copyArray(runtimeScene.getObjects("gamelife"), gdjs.JupiterCode.GDgamelifeObjects1);
gdjs.copyArray(runtimeScene.getObjects("left"), gdjs.JupiterCode.GDleftObjects1);
gdjs.copyArray(runtimeScene.getObjects("notcomplete"), gdjs.JupiterCode.GDnotcompleteObjects1);
gdjs.copyArray(runtimeScene.getObjects("right"), gdjs.JupiterCode.GDrightObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(2).setString("Left");
}{for(var i = 0, len = gdjs.JupiterCode.GDrightObjects1.length ;i < len;++i) {
    gdjs.JupiterCode.GDrightObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.JupiterCode.GDleftObjects1.length ;i < len;++i) {
    gdjs.JupiterCode.GDleftObjects1[i].hide();
}
}{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(0);
}{for(var i = 0, len = gdjs.JupiterCode.GDnotcompleteObjects1.length ;i < len;++i) {
    gdjs.JupiterCode.GDnotcompleteObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.JupiterCode.GDcrashedshipObjects1.length ;i < len;++i) {
    gdjs.JupiterCode.GDcrashedshipObjects1[i].setAnimationName("stand");
}
}{runtimeScene.getGame().getVariables().getFromIndex(5).setNumber(0);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "fire");
}{for(var i = 0, len = gdjs.JupiterCode.GDfpsObjects1.length ;i < len;++i) {
    gdjs.JupiterCode.GDfpsObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.JupiterCode.GDcheatsObjects1.length ;i < len;++i) {
    gdjs.JupiterCode.GDcheatsObjects1[i].hide();
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}{for(var i = 0, len = gdjs.JupiterCode.GDgamelifeObjects1.length ;i < len;++i) {
    gdjs.JupiterCode.GDgamelifeObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.JupiterCode.GDNewObject3Objects1.length ;i < len;++i) {
    gdjs.JupiterCode.GDNewObject3Objects1[i].hide();
}
}{runtimeScene.getGame().getVariables().getFromIndex(13).setNumber(0);
}
{ //Subevents
gdjs.JupiterCode.eventsList3(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.JupiterCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("robotting"), gdjs.JupiterCode.GDrobottingObjects1);

gdjs.JupiterCode.condition0IsTrue_0.val = false;
gdjs.JupiterCode.condition1IsTrue_0.val = false;
{
gdjs.JupiterCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.JupiterCode.mapOfGDgdjs_46JupiterCode_46GDPlayerObjects1Objects, gdjs.JupiterCode.mapOfGDgdjs_46JupiterCode_46GDrobottingObjects1Objects, false, runtimeScene, false);
}if ( gdjs.JupiterCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.JupiterCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.JupiterCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.JupiterCode.condition1IsTrue_0.val = true;
        gdjs.JupiterCode.GDPlayerObjects1[k] = gdjs.JupiterCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.JupiterCode.GDPlayerObjects1.length = k;}}
if (gdjs.JupiterCode.condition1IsTrue_0.val) {
/* Reuse gdjs.JupiterCode.GDPlayerObjects1 */
/* Reuse gdjs.JupiterCode.GDrobottingObjects1 */
{for(var i = 0, len = gdjs.JupiterCode.GDrobottingObjects1.length ;i < len;++i) {
    gdjs.JupiterCode.GDrobottingObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.JupiterCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.JupiterCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").setCanJump();
}
}{for(var i = 0, len = gdjs.JupiterCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.JupiterCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}{runtimeScene.getGame().getVariables().getFromIndex(13).sub(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlueEnemy1"), gdjs.JupiterCode.GDBlueEnemy1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.JupiterCode.GDPlayerObjects1);

gdjs.JupiterCode.condition0IsTrue_0.val = false;
gdjs.JupiterCode.condition1IsTrue_0.val = false;
{
gdjs.JupiterCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.JupiterCode.mapOfGDgdjs_46JupiterCode_46GDPlayerObjects1Objects, gdjs.JupiterCode.mapOfGDgdjs_46JupiterCode_46GDBlueEnemy1Objects1Objects, false, runtimeScene, false);
}if ( gdjs.JupiterCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.JupiterCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.JupiterCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.JupiterCode.condition1IsTrue_0.val = true;
        gdjs.JupiterCode.GDPlayerObjects1[k] = gdjs.JupiterCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.JupiterCode.GDPlayerObjects1.length = k;}}
if (gdjs.JupiterCode.condition1IsTrue_0.val) {
/* Reuse gdjs.JupiterCode.GDBlueEnemy1Objects1 */
/* Reuse gdjs.JupiterCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.JupiterCode.GDBlueEnemy1Objects1.length ;i < len;++i) {
    gdjs.JupiterCode.GDBlueEnemy1Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.JupiterCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.JupiterCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").setCanJump();
}
}{for(var i = 0, len = gdjs.JupiterCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.JupiterCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}{runtimeScene.getGame().getVariables().getFromIndex(13).sub(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.JupiterCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("robotting"), gdjs.JupiterCode.GDrobottingObjects1);

gdjs.JupiterCode.condition0IsTrue_0.val = false;
gdjs.JupiterCode.condition1IsTrue_0.val = false;
{
gdjs.JupiterCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.JupiterCode.mapOfGDgdjs_46JupiterCode_46GDPlayerObjects1Objects, gdjs.JupiterCode.mapOfGDgdjs_46JupiterCode_46GDrobottingObjects1Objects, false, runtimeScene, false);
}if ( gdjs.JupiterCode.condition0IsTrue_0.val ) {
{
gdjs.JupiterCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) != 1;
}}
if (gdjs.JupiterCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).sub(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}{runtimeScene.getGame().getVariables().getFromIndex(1).sub(1);
}{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Jupiter");
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.JupiterCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("crashedship"), gdjs.JupiterCode.GDcrashedshipObjects1);

gdjs.JupiterCode.condition0IsTrue_0.val = false;
{
gdjs.JupiterCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.JupiterCode.mapOfGDgdjs_46JupiterCode_46GDPlayerObjects1Objects, gdjs.JupiterCode.mapOfGDgdjs_46JupiterCode_46GDcrashedshipObjects1Objects, true, runtimeScene, false);
}if (gdjs.JupiterCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("notcomplete"), gdjs.JupiterCode.GDnotcompleteObjects1);
{for(var i = 0, len = gdjs.JupiterCode.GDnotcompleteObjects1.length ;i < len;++i) {
    gdjs.JupiterCode.GDnotcompleteObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.JupiterCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("crashedship"), gdjs.JupiterCode.GDcrashedshipObjects1);

gdjs.JupiterCode.condition0IsTrue_0.val = false;
gdjs.JupiterCode.condition1IsTrue_0.val = false;
{
gdjs.JupiterCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.JupiterCode.mapOfGDgdjs_46JupiterCode_46GDPlayerObjects1Objects, gdjs.JupiterCode.mapOfGDgdjs_46JupiterCode_46GDcrashedshipObjects1Objects, false, runtimeScene, false);
}if ( gdjs.JupiterCode.condition0IsTrue_0.val ) {
{
{gdjs.JupiterCode.conditionTrue_1 = gdjs.JupiterCode.condition1IsTrue_0;
gdjs.JupiterCode.conditionTrue_1.val = (gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) != gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}}
if (gdjs.JupiterCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("notcomplete"), gdjs.JupiterCode.GDnotcompleteObjects1);
{for(var i = 0, len = gdjs.JupiterCode.GDnotcompleteObjects1.length ;i < len;++i) {
    gdjs.JupiterCode.GDnotcompleteObjects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.JupiterCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("crashedship"), gdjs.JupiterCode.GDcrashedshipObjects1);

gdjs.JupiterCode.condition0IsTrue_0.val = false;
gdjs.JupiterCode.condition1IsTrue_0.val = false;
{
gdjs.JupiterCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.JupiterCode.mapOfGDgdjs_46JupiterCode_46GDcrashedshipObjects1Objects, gdjs.JupiterCode.mapOfGDgdjs_46JupiterCode_46GDPlayerObjects1Objects, false, runtimeScene, false);
}if ( gdjs.JupiterCode.condition0IsTrue_0.val ) {
{
{gdjs.JupiterCode.conditionTrue_1 = gdjs.JupiterCode.condition1IsTrue_0;
gdjs.JupiterCode.conditionTrue_1.val = (gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}}
if (gdjs.JupiterCode.condition1IsTrue_0.val) {
/* Reuse gdjs.JupiterCode.GDPlayerObjects1 */
/* Reuse gdjs.JupiterCode.GDcrashedshipObjects1 */
{for(var i = 0, len = gdjs.JupiterCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.JupiterCode.GDPlayerObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.JupiterCode.GDcrashedshipObjects1.length ;i < len;++i) {
    gdjs.JupiterCode.GDcrashedshipObjects1[i].setAnimationName("fixit");
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "fixingtime");
}{runtimeScene.getGame().getVariables().getFromIndex(5).setNumber(1);
}}

}


{


gdjs.JupiterCode.condition0IsTrue_0.val = false;
gdjs.JupiterCode.condition1IsTrue_0.val = false;
{
gdjs.JupiterCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 3, "fixingtime");
}if ( gdjs.JupiterCode.condition0IsTrue_0.val ) {
{
{gdjs.JupiterCode.conditionTrue_1 = gdjs.JupiterCode.condition1IsTrue_0;
gdjs.JupiterCode.conditionTrue_1.val = (gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5)) == 1);
}
}}
if (gdjs.JupiterCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("crashedship"), gdjs.JupiterCode.GDcrashedshipObjects1);
{for(var i = 0, len = gdjs.JupiterCode.GDcrashedshipObjects1.length ;i < len;++i) {
    gdjs.JupiterCode.GDcrashedshipObjects1[i].setAnimationName("fly");
}
}{for(var i = 0, len = gdjs.JupiterCode.GDcrashedshipObjects1.length ;i < len;++i) {
    gdjs.JupiterCode.GDcrashedshipObjects1[i].addForce(0, -(1000), 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("crashedship"), gdjs.JupiterCode.GDcrashedshipObjects1);
gdjs.copyArray(runtimeScene.getObjects("end"), gdjs.JupiterCode.GDendObjects1);

gdjs.JupiterCode.condition0IsTrue_0.val = false;
{
gdjs.JupiterCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.JupiterCode.mapOfGDgdjs_46JupiterCode_46GDcrashedshipObjects1Objects, gdjs.JupiterCode.mapOfGDgdjs_46JupiterCode_46GDendObjects1Objects, false, runtimeScene, false);
}if (gdjs.JupiterCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(3);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "intro:M1", false);
}}

}


{



}


{


gdjs.JupiterCode.condition0IsTrue_0.val = false;
{
gdjs.JupiterCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "i");
}if (gdjs.JupiterCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(6).setNumber(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.JupiterCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("robotting"), gdjs.JupiterCode.GDrobottingObjects1);

gdjs.JupiterCode.condition0IsTrue_0.val = false;
gdjs.JupiterCode.condition1IsTrue_0.val = false;
{
gdjs.JupiterCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) == 1;
}if ( gdjs.JupiterCode.condition0IsTrue_0.val ) {
{
gdjs.JupiterCode.condition1IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.JupiterCode.mapOfGDgdjs_46JupiterCode_46GDrobottingObjects1Objects, gdjs.JupiterCode.mapOfGDgdjs_46JupiterCode_46GDPlayerObjects1Objects, false, runtimeScene, false);
}}
if (gdjs.JupiterCode.condition1IsTrue_0.val) {
/* Reuse gdjs.JupiterCode.GDrobottingObjects1 */
{for(var i = 0, len = gdjs.JupiterCode.GDrobottingObjects1.length ;i < len;++i) {
    gdjs.JupiterCode.GDrobottingObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(13).sub(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlueEnemy1"), gdjs.JupiterCode.GDBlueEnemy1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.JupiterCode.GDPlayerObjects1);

gdjs.JupiterCode.condition0IsTrue_0.val = false;
gdjs.JupiterCode.condition1IsTrue_0.val = false;
{
gdjs.JupiterCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) == 1;
}if ( gdjs.JupiterCode.condition0IsTrue_0.val ) {
{
gdjs.JupiterCode.condition1IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.JupiterCode.mapOfGDgdjs_46JupiterCode_46GDBlueEnemy1Objects1Objects, gdjs.JupiterCode.mapOfGDgdjs_46JupiterCode_46GDPlayerObjects1Objects, false, runtimeScene, false);
}}
if (gdjs.JupiterCode.condition1IsTrue_0.val) {
/* Reuse gdjs.JupiterCode.GDBlueEnemy1Objects1 */
{for(var i = 0, len = gdjs.JupiterCode.GDBlueEnemy1Objects1.length ;i < len;++i) {
    gdjs.JupiterCode.GDBlueEnemy1Objects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(13).sub(1);
}}

}


{


gdjs.JupiterCode.condition0IsTrue_0.val = false;
{
gdjs.JupiterCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "c");
}if (gdjs.JupiterCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.JupiterCode.eventsList5(runtimeScene);} //End of subevents
}

}


{


gdjs.JupiterCode.condition0IsTrue_0.val = false;
{
gdjs.JupiterCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "k");
}if (gdjs.JupiterCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.JupiterCode.eventsList8(runtimeScene);} //End of subevents
}

}


{


gdjs.JupiterCode.condition0IsTrue_0.val = false;
{
gdjs.JupiterCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "t");
}if (gdjs.JupiterCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(12).setNumber(1);
}}

}


{



}


{


gdjs.JupiterCode.condition0IsTrue_0.val = false;
{
gdjs.JupiterCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.JupiterCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "leveltimer");
}{runtimeScene.getGame().getVariables().getFromIndex(9).setNumber(60);
}}

}


{


gdjs.JupiterCode.condition0IsTrue_0.val = false;
gdjs.JupiterCode.condition1IsTrue_0.val = false;
{
gdjs.JupiterCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "leveltimer");
}if ( gdjs.JupiterCode.condition0IsTrue_0.val ) {
{
gdjs.JupiterCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(12)) != 1;
}}
if (gdjs.JupiterCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(9).sub(1);
}{runtimeScene.getGame().getVariables().getFromIndex(14).add(1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "leveltimer");
}}

}


{


gdjs.JupiterCode.condition0IsTrue_0.val = false;
{
gdjs.JupiterCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9)) == 0;
}if (gdjs.JupiterCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(1).sub(1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Jupiter", false);
}}

}


{



}


{


gdjs.JupiterCode.condition0IsTrue_0.val = false;
{
gdjs.JupiterCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 4, "fire");
}if (gdjs.JupiterCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(11).setNumber(gdjs.randomInRange(1, 3));
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "fire");
}}

}


{


gdjs.JupiterCode.condition0IsTrue_0.val = false;
gdjs.JupiterCode.condition1IsTrue_0.val = false;
{
gdjs.JupiterCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(11)) == 1;
}if ( gdjs.JupiterCode.condition0IsTrue_0.val ) {
{
gdjs.JupiterCode.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 3, "firerate");
}}
if (gdjs.JupiterCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BlueEnemy1"), gdjs.JupiterCode.GDBlueEnemy1Objects1);
gdjs.copyArray(runtimeScene.getObjects("RedLaser08"), gdjs.JupiterCode.GDRedLaser08Objects1);
{for(var i = 0, len = gdjs.JupiterCode.GDBlueEnemy1Objects1.length ;i < len;++i) {
    gdjs.JupiterCode.GDBlueEnemy1Objects1[i].getBehavior("FireBullet").Fire((gdjs.JupiterCode.GDBlueEnemy1Objects1[i].getPointX("")), (gdjs.JupiterCode.GDBlueEnemy1Objects1[i].getPointY("")), gdjs.JupiterCode.mapOfGDgdjs_46JupiterCode_46GDRedLaser08Objects1Objects, 90, 100, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "firerate");
}}

}


{


gdjs.JupiterCode.condition0IsTrue_0.val = false;
gdjs.JupiterCode.condition1IsTrue_0.val = false;
{
gdjs.JupiterCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(11)) == 2;
}if ( gdjs.JupiterCode.condition0IsTrue_0.val ) {
{
gdjs.JupiterCode.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 3, "firerate");
}}
if (gdjs.JupiterCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BlueEnemy1"), gdjs.JupiterCode.GDBlueEnemy1Objects1);
gdjs.copyArray(runtimeScene.getObjects("GreenLaser09"), gdjs.JupiterCode.GDGreenLaser09Objects1);
{for(var i = 0, len = gdjs.JupiterCode.GDBlueEnemy1Objects1.length ;i < len;++i) {
    gdjs.JupiterCode.GDBlueEnemy1Objects1[i].getBehavior("FireBullet").Fire((gdjs.JupiterCode.GDBlueEnemy1Objects1[i].getPointX("")), (gdjs.JupiterCode.GDBlueEnemy1Objects1[i].getPointY("")), gdjs.JupiterCode.mapOfGDgdjs_46JupiterCode_46GDGreenLaser09Objects1Objects, 90, 40, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "firerate");
}}

}


{


gdjs.JupiterCode.condition0IsTrue_0.val = false;
gdjs.JupiterCode.condition1IsTrue_0.val = false;
{
gdjs.JupiterCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(11)) == 3;
}if ( gdjs.JupiterCode.condition0IsTrue_0.val ) {
{
gdjs.JupiterCode.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 3, "firerate");
}}
if (gdjs.JupiterCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BlueEnemy1"), gdjs.JupiterCode.GDBlueEnemy1Objects1);
gdjs.copyArray(runtimeScene.getObjects("GreenLaser09"), gdjs.JupiterCode.GDGreenLaser09Objects1);
gdjs.copyArray(runtimeScene.getObjects("RedLaser08"), gdjs.JupiterCode.GDRedLaser08Objects1);
{for(var i = 0, len = gdjs.JupiterCode.GDBlueEnemy1Objects1.length ;i < len;++i) {
    gdjs.JupiterCode.GDBlueEnemy1Objects1[i].getBehavior("FireBullet").Fire((gdjs.JupiterCode.GDBlueEnemy1Objects1[i].getPointX("")), (gdjs.JupiterCode.GDBlueEnemy1Objects1[i].getPointY("")), gdjs.JupiterCode.mapOfGDgdjs_46JupiterCode_46GDGreenLaser09Objects1Objects, 90, 40, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.JupiterCode.GDBlueEnemy1Objects1.length ;i < len;++i) {
    gdjs.JupiterCode.GDBlueEnemy1Objects1[i].getBehavior("FireBullet").Fire((gdjs.JupiterCode.GDBlueEnemy1Objects1[i].getPointX("")), (gdjs.JupiterCode.GDBlueEnemy1Objects1[i].getPointY("")), gdjs.JupiterCode.mapOfGDgdjs_46JupiterCode_46GDRedLaser08Objects1Objects, 90, 100, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "firerate");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GreenLaser09"), gdjs.JupiterCode.GDGreenLaser09Objects1);
gdjs.copyArray(runtimeScene.getObjects("alienfloor"), gdjs.JupiterCode.GDalienfloorObjects1);

gdjs.JupiterCode.condition0IsTrue_0.val = false;
{
gdjs.JupiterCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.JupiterCode.mapOfGDgdjs_46JupiterCode_46GDGreenLaser09Objects1Objects, gdjs.JupiterCode.mapOfGDgdjs_46JupiterCode_46GDalienfloorObjects1Objects, false, runtimeScene, false);
}if (gdjs.JupiterCode.condition0IsTrue_0.val) {
/* Reuse gdjs.JupiterCode.GDGreenLaser09Objects1 */
{for(var i = 0, len = gdjs.JupiterCode.GDGreenLaser09Objects1.length ;i < len;++i) {
    gdjs.JupiterCode.GDGreenLaser09Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("RedLaser08"), gdjs.JupiterCode.GDRedLaser08Objects1);
gdjs.copyArray(runtimeScene.getObjects("alienfloor"), gdjs.JupiterCode.GDalienfloorObjects1);

gdjs.JupiterCode.condition0IsTrue_0.val = false;
{
gdjs.JupiterCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.JupiterCode.mapOfGDgdjs_46JupiterCode_46GDRedLaser08Objects1Objects, gdjs.JupiterCode.mapOfGDgdjs_46JupiterCode_46GDalienfloorObjects1Objects, false, runtimeScene, false);
}if (gdjs.JupiterCode.condition0IsTrue_0.val) {
/* Reuse gdjs.JupiterCode.GDRedLaser08Objects1 */
{for(var i = 0, len = gdjs.JupiterCode.GDRedLaser08Objects1.length ;i < len;++i) {
    gdjs.JupiterCode.GDRedLaser08Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GreenLaser09"), gdjs.JupiterCode.GDGreenLaser09Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.JupiterCode.GDPlayerObjects1);

gdjs.JupiterCode.condition0IsTrue_0.val = false;
gdjs.JupiterCode.condition1IsTrue_0.val = false;
{
gdjs.JupiterCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.JupiterCode.mapOfGDgdjs_46JupiterCode_46GDGreenLaser09Objects1Objects, gdjs.JupiterCode.mapOfGDgdjs_46JupiterCode_46GDPlayerObjects1Objects, false, runtimeScene, false);
}if ( gdjs.JupiterCode.condition0IsTrue_0.val ) {
{
gdjs.JupiterCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) != 1;
}}
if (gdjs.JupiterCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).sub(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}{runtimeScene.getGame().getVariables().getFromIndex(1).sub(1);
}{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Jupiter");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.JupiterCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("RedLaser08"), gdjs.JupiterCode.GDRedLaser08Objects1);

gdjs.JupiterCode.condition0IsTrue_0.val = false;
gdjs.JupiterCode.condition1IsTrue_0.val = false;
{
gdjs.JupiterCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.JupiterCode.mapOfGDgdjs_46JupiterCode_46GDRedLaser08Objects1Objects, gdjs.JupiterCode.mapOfGDgdjs_46JupiterCode_46GDPlayerObjects1Objects, false, runtimeScene, false);
}if ( gdjs.JupiterCode.condition0IsTrue_0.val ) {
{
gdjs.JupiterCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) != 1;
}}
if (gdjs.JupiterCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).sub(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}{runtimeScene.getGame().getVariables().getFromIndex(1).sub(1);
}{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Jupiter");
}}

}


{


gdjs.JupiterCode.condition0IsTrue_0.val = false;
{
gdjs.JupiterCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "F1");
}if (gdjs.JupiterCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(15).setNumber(0);
}
{ //Subevents
gdjs.JupiterCode.eventsList9(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.JupiterCode.GDPlayerObjects1);

for(gdjs.JupiterCode.forEachIndex2 = 0;gdjs.JupiterCode.forEachIndex2 < gdjs.JupiterCode.GDPlayerObjects1.length;++gdjs.JupiterCode.forEachIndex2) {
gdjs.JupiterCode.GDPlayerObjects2.length = 0;


gdjs.JupiterCode.forEachTemporary2 = gdjs.JupiterCode.GDPlayerObjects1[gdjs.JupiterCode.forEachIndex2];
gdjs.JupiterCode.GDPlayerObjects2.push(gdjs.JupiterCode.forEachTemporary2);
gdjs.JupiterCode.condition0IsTrue_0.val = false;
{
gdjs.JupiterCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.JupiterCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(13).add(1);
}}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("alienfloor"), gdjs.JupiterCode.GDalienfloorObjects1);

for(gdjs.JupiterCode.forEachIndex2 = 0;gdjs.JupiterCode.forEachIndex2 < gdjs.JupiterCode.GDalienfloorObjects1.length;++gdjs.JupiterCode.forEachIndex2) {
gdjs.JupiterCode.GDalienfloorObjects2.length = 0;


gdjs.JupiterCode.forEachTemporary2 = gdjs.JupiterCode.GDalienfloorObjects1[gdjs.JupiterCode.forEachIndex2];
gdjs.JupiterCode.GDalienfloorObjects2.push(gdjs.JupiterCode.forEachTemporary2);
gdjs.JupiterCode.condition0IsTrue_0.val = false;
{
gdjs.JupiterCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.JupiterCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(13).add(1);
}}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("rocketplat"), gdjs.JupiterCode.GDrocketplatObjects1);

for(gdjs.JupiterCode.forEachIndex2 = 0;gdjs.JupiterCode.forEachIndex2 < gdjs.JupiterCode.GDrocketplatObjects1.length;++gdjs.JupiterCode.forEachIndex2) {
gdjs.JupiterCode.GDrocketplatObjects2.length = 0;


gdjs.JupiterCode.forEachTemporary2 = gdjs.JupiterCode.GDrocketplatObjects1[gdjs.JupiterCode.forEachIndex2];
gdjs.JupiterCode.GDrocketplatObjects2.push(gdjs.JupiterCode.forEachTemporary2);
gdjs.JupiterCode.condition0IsTrue_0.val = false;
{
gdjs.JupiterCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.JupiterCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(13).add(1);
}}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlueEnemy1"), gdjs.JupiterCode.GDBlueEnemy1Objects1);

for(gdjs.JupiterCode.forEachIndex2 = 0;gdjs.JupiterCode.forEachIndex2 < gdjs.JupiterCode.GDBlueEnemy1Objects1.length;++gdjs.JupiterCode.forEachIndex2) {
gdjs.JupiterCode.GDBlueEnemy1Objects2.length = 0;


gdjs.JupiterCode.forEachTemporary2 = gdjs.JupiterCode.GDBlueEnemy1Objects1[gdjs.JupiterCode.forEachIndex2];
gdjs.JupiterCode.GDBlueEnemy1Objects2.push(gdjs.JupiterCode.forEachTemporary2);
gdjs.JupiterCode.condition0IsTrue_0.val = false;
{
gdjs.JupiterCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.JupiterCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(13).add(1);
}}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("robotting"), gdjs.JupiterCode.GDrobottingObjects1);

for(gdjs.JupiterCode.forEachIndex2 = 0;gdjs.JupiterCode.forEachIndex2 < gdjs.JupiterCode.GDrobottingObjects1.length;++gdjs.JupiterCode.forEachIndex2) {
gdjs.JupiterCode.GDrobottingObjects2.length = 0;


gdjs.JupiterCode.forEachTemporary2 = gdjs.JupiterCode.GDrobottingObjects1[gdjs.JupiterCode.forEachIndex2];
gdjs.JupiterCode.GDrobottingObjects2.push(gdjs.JupiterCode.forEachTemporary2);
gdjs.JupiterCode.condition0IsTrue_0.val = false;
{
gdjs.JupiterCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.JupiterCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(13).add(1);
}}
}

}


{


gdjs.JupiterCode.condition0IsTrue_0.val = false;
{
gdjs.JupiterCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "m");
}if (gdjs.JupiterCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(16).setNumber(0);
}
{ //Subevents
gdjs.JupiterCode.eventsList15(runtimeScene);} //End of subevents
}

}


};

gdjs.JupiterCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.JupiterCode.GDPlayerObjects1.length = 0;
gdjs.JupiterCode.GDPlayerObjects2.length = 0;
gdjs.JupiterCode.GDPlayerObjects3.length = 0;
gdjs.JupiterCode.GDalienfloorObjects1.length = 0;
gdjs.JupiterCode.GDalienfloorObjects2.length = 0;
gdjs.JupiterCode.GDalienfloorObjects3.length = 0;
gdjs.JupiterCode.GDrocketplatObjects1.length = 0;
gdjs.JupiterCode.GDrocketplatObjects2.length = 0;
gdjs.JupiterCode.GDrocketplatObjects3.length = 0;
gdjs.JupiterCode.GDcloudObjects1.length = 0;
gdjs.JupiterCode.GDcloudObjects2.length = 0;
gdjs.JupiterCode.GDcloudObjects3.length = 0;
gdjs.JupiterCode.GDboltObjects1.length = 0;
gdjs.JupiterCode.GDboltObjects2.length = 0;
gdjs.JupiterCode.GDboltObjects3.length = 0;
gdjs.JupiterCode.GDscoreObjects1.length = 0;
gdjs.JupiterCode.GDscoreObjects2.length = 0;
gdjs.JupiterCode.GDscoreObjects3.length = 0;
gdjs.JupiterCode.GDliveObjects1.length = 0;
gdjs.JupiterCode.GDliveObjects2.length = 0;
gdjs.JupiterCode.GDliveObjects3.length = 0;
gdjs.JupiterCode.GDlivesObjects1.length = 0;
gdjs.JupiterCode.GDlivesObjects2.length = 0;
gdjs.JupiterCode.GDlivesObjects3.length = 0;
gdjs.JupiterCode.GDrobottingObjects1.length = 0;
gdjs.JupiterCode.GDrobottingObjects2.length = 0;
gdjs.JupiterCode.GDrobottingObjects3.length = 0;
gdjs.JupiterCode.GDleftObjects1.length = 0;
gdjs.JupiterCode.GDleftObjects2.length = 0;
gdjs.JupiterCode.GDleftObjects3.length = 0;
gdjs.JupiterCode.GDrightObjects1.length = 0;
gdjs.JupiterCode.GDrightObjects2.length = 0;
gdjs.JupiterCode.GDrightObjects3.length = 0;
gdjs.JupiterCode.GDcrashedshipObjects1.length = 0;
gdjs.JupiterCode.GDcrashedshipObjects2.length = 0;
gdjs.JupiterCode.GDcrashedshipObjects3.length = 0;
gdjs.JupiterCode.GDnotcompleteObjects1.length = 0;
gdjs.JupiterCode.GDnotcompleteObjects2.length = 0;
gdjs.JupiterCode.GDnotcompleteObjects3.length = 0;
gdjs.JupiterCode.GDendObjects1.length = 0;
gdjs.JupiterCode.GDendObjects2.length = 0;
gdjs.JupiterCode.GDendObjects3.length = 0;
gdjs.JupiterCode.GDtimerObjects1.length = 0;
gdjs.JupiterCode.GDtimerObjects2.length = 0;
gdjs.JupiterCode.GDtimerObjects3.length = 0;
gdjs.JupiterCode.GDcheatsObjects1.length = 0;
gdjs.JupiterCode.GDcheatsObjects2.length = 0;
gdjs.JupiterCode.GDcheatsObjects3.length = 0;
gdjs.JupiterCode.GDBlueEnemy1Objects1.length = 0;
gdjs.JupiterCode.GDBlueEnemy1Objects2.length = 0;
gdjs.JupiterCode.GDBlueEnemy1Objects3.length = 0;
gdjs.JupiterCode.GDRedLaser08Objects1.length = 0;
gdjs.JupiterCode.GDRedLaser08Objects2.length = 0;
gdjs.JupiterCode.GDRedLaser08Objects3.length = 0;
gdjs.JupiterCode.GDGreenLaser09Objects1.length = 0;
gdjs.JupiterCode.GDGreenLaser09Objects2.length = 0;
gdjs.JupiterCode.GDGreenLaser09Objects3.length = 0;
gdjs.JupiterCode.GDNewObject3Objects1.length = 0;
gdjs.JupiterCode.GDNewObject3Objects2.length = 0;
gdjs.JupiterCode.GDNewObject3Objects3.length = 0;
gdjs.JupiterCode.GDgamelifeObjects1.length = 0;
gdjs.JupiterCode.GDgamelifeObjects2.length = 0;
gdjs.JupiterCode.GDgamelifeObjects3.length = 0;
gdjs.JupiterCode.GDfpsObjects1.length = 0;
gdjs.JupiterCode.GDfpsObjects2.length = 0;
gdjs.JupiterCode.GDfpsObjects3.length = 0;

gdjs.JupiterCode.eventsList16(runtimeScene);
return;

}

gdjs['JupiterCode'] = gdjs.JupiterCode;
