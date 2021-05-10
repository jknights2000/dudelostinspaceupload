gdjs.MercuryCode = {};
gdjs.MercuryCode.forEachIndex2 = 0;

gdjs.MercuryCode.forEachIndex3 = 0;

gdjs.MercuryCode.forEachObjects2 = [];

gdjs.MercuryCode.forEachObjects3 = [];

gdjs.MercuryCode.forEachTemporary2 = null;

gdjs.MercuryCode.forEachTemporary3 = null;

gdjs.MercuryCode.forEachTotalCount2 = 0;

gdjs.MercuryCode.forEachTotalCount3 = 0;

gdjs.MercuryCode.GDPlayerObjects1= [];
gdjs.MercuryCode.GDPlayerObjects2= [];
gdjs.MercuryCode.GDPlayerObjects3= [];
gdjs.MercuryCode.GDmercuryalienfloorObjects1= [];
gdjs.MercuryCode.GDmercuryalienfloorObjects2= [];
gdjs.MercuryCode.GDmercuryalienfloorObjects3= [];
gdjs.MercuryCode.GDrocketplatObjects1= [];
gdjs.MercuryCode.GDrocketplatObjects2= [];
gdjs.MercuryCode.GDrocketplatObjects3= [];
gdjs.MercuryCode.GDboltObjects1= [];
gdjs.MercuryCode.GDboltObjects2= [];
gdjs.MercuryCode.GDboltObjects3= [];
gdjs.MercuryCode.GDscoreObjects1= [];
gdjs.MercuryCode.GDscoreObjects2= [];
gdjs.MercuryCode.GDscoreObjects3= [];
gdjs.MercuryCode.GDliveObjects1= [];
gdjs.MercuryCode.GDliveObjects2= [];
gdjs.MercuryCode.GDliveObjects3= [];
gdjs.MercuryCode.GDlivesObjects1= [];
gdjs.MercuryCode.GDlivesObjects2= [];
gdjs.MercuryCode.GDlivesObjects3= [];
gdjs.MercuryCode.GDrobottingObjects1= [];
gdjs.MercuryCode.GDrobottingObjects2= [];
gdjs.MercuryCode.GDrobottingObjects3= [];
gdjs.MercuryCode.GDleftObjects1= [];
gdjs.MercuryCode.GDleftObjects2= [];
gdjs.MercuryCode.GDleftObjects3= [];
gdjs.MercuryCode.GDrightObjects1= [];
gdjs.MercuryCode.GDrightObjects2= [];
gdjs.MercuryCode.GDrightObjects3= [];
gdjs.MercuryCode.GDcrashedshipObjects1= [];
gdjs.MercuryCode.GDcrashedshipObjects2= [];
gdjs.MercuryCode.GDcrashedshipObjects3= [];
gdjs.MercuryCode.GDnotcompleteObjects1= [];
gdjs.MercuryCode.GDnotcompleteObjects2= [];
gdjs.MercuryCode.GDnotcompleteObjects3= [];
gdjs.MercuryCode.GDendObjects1= [];
gdjs.MercuryCode.GDendObjects2= [];
gdjs.MercuryCode.GDendObjects3= [];
gdjs.MercuryCode.GDtimerObjects1= [];
gdjs.MercuryCode.GDtimerObjects2= [];
gdjs.MercuryCode.GDtimerObjects3= [];
gdjs.MercuryCode.GDcheatsObjects1= [];
gdjs.MercuryCode.GDcheatsObjects2= [];
gdjs.MercuryCode.GDcheatsObjects3= [];
gdjs.MercuryCode.GDBlueEnemy1Objects1= [];
gdjs.MercuryCode.GDBlueEnemy1Objects2= [];
gdjs.MercuryCode.GDBlueEnemy1Objects3= [];
gdjs.MercuryCode.GDRedLaser08Objects1= [];
gdjs.MercuryCode.GDRedLaser08Objects2= [];
gdjs.MercuryCode.GDRedLaser08Objects3= [];
gdjs.MercuryCode.GDGreenLaser09Objects1= [];
gdjs.MercuryCode.GDGreenLaser09Objects2= [];
gdjs.MercuryCode.GDGreenLaser09Objects3= [];
gdjs.MercuryCode.GDfpsObjects1= [];
gdjs.MercuryCode.GDfpsObjects2= [];
gdjs.MercuryCode.GDfpsObjects3= [];
gdjs.MercuryCode.GDNewObjectObjects1= [];
gdjs.MercuryCode.GDNewObjectObjects2= [];
gdjs.MercuryCode.GDNewObjectObjects3= [];
gdjs.MercuryCode.GDgamelifeObjects1= [];
gdjs.MercuryCode.GDgamelifeObjects2= [];
gdjs.MercuryCode.GDgamelifeObjects3= [];
gdjs.MercuryCode.GDNewObject2Objects1= [];
gdjs.MercuryCode.GDNewObject2Objects2= [];
gdjs.MercuryCode.GDNewObject2Objects3= [];
gdjs.MercuryCode.GDNewObject3Objects1= [];
gdjs.MercuryCode.GDNewObject3Objects2= [];
gdjs.MercuryCode.GDNewObject3Objects3= [];

gdjs.MercuryCode.conditionTrue_0 = {val:false};
gdjs.MercuryCode.condition0IsTrue_0 = {val:false};
gdjs.MercuryCode.condition1IsTrue_0 = {val:false};
gdjs.MercuryCode.condition2IsTrue_0 = {val:false};
gdjs.MercuryCode.condition3IsTrue_0 = {val:false};
gdjs.MercuryCode.conditionTrue_1 = {val:false};
gdjs.MercuryCode.condition0IsTrue_1 = {val:false};
gdjs.MercuryCode.condition1IsTrue_1 = {val:false};
gdjs.MercuryCode.condition2IsTrue_1 = {val:false};
gdjs.MercuryCode.condition3IsTrue_1 = {val:false};


gdjs.MercuryCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.MercuryCode.GDPlayerObjects1, gdjs.MercuryCode.GDPlayerObjects2);


gdjs.MercuryCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MercuryCode.GDPlayerObjects2.length;i<l;++i) {
    if ( !(gdjs.MercuryCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.MercuryCode.condition0IsTrue_0.val = true;
        gdjs.MercuryCode.GDPlayerObjects2[k] = gdjs.MercuryCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.MercuryCode.GDPlayerObjects2.length = k;}if (gdjs.MercuryCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MercuryCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.MercuryCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.MercuryCode.GDPlayerObjects2[i].setAnimationName("stand");
}
}}

}


{

gdjs.copyArray(gdjs.MercuryCode.GDPlayerObjects1, gdjs.MercuryCode.GDPlayerObjects2);


gdjs.MercuryCode.condition0IsTrue_0.val = false;
gdjs.MercuryCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MercuryCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.MercuryCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.MercuryCode.condition0IsTrue_0.val = true;
        gdjs.MercuryCode.GDPlayerObjects2[k] = gdjs.MercuryCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.MercuryCode.GDPlayerObjects2.length = k;}if ( gdjs.MercuryCode.condition0IsTrue_0.val ) {
{
gdjs.MercuryCode.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}}
if (gdjs.MercuryCode.condition1IsTrue_0.val) {
/* Reuse gdjs.MercuryCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.MercuryCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.MercuryCode.GDPlayerObjects2[i].setAnimationName("run");
}
}{for(var i = 0, len = gdjs.MercuryCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.MercuryCode.GDPlayerObjects2[i].playAnimation();
}
}{for(var i = 0, len = gdjs.MercuryCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.MercuryCode.GDPlayerObjects2[i].flipX(false);
}
}}

}


{

/* Reuse gdjs.MercuryCode.GDPlayerObjects1 */

gdjs.MercuryCode.condition0IsTrue_0.val = false;
gdjs.MercuryCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MercuryCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.MercuryCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.MercuryCode.condition0IsTrue_0.val = true;
        gdjs.MercuryCode.GDPlayerObjects1[k] = gdjs.MercuryCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.MercuryCode.GDPlayerObjects1.length = k;}if ( gdjs.MercuryCode.condition0IsTrue_0.val ) {
{
gdjs.MercuryCode.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}}
if (gdjs.MercuryCode.condition1IsTrue_0.val) {
/* Reuse gdjs.MercuryCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.MercuryCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.MercuryCode.GDPlayerObjects1[i].setAnimationName("run");
}
}{for(var i = 0, len = gdjs.MercuryCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.MercuryCode.GDPlayerObjects1[i].playAnimation();
}
}{for(var i = 0, len = gdjs.MercuryCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.MercuryCode.GDPlayerObjects1[i].flipX(true);
}
}}

}


};gdjs.MercuryCode.mapOfGDgdjs_46MercuryCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.MercuryCode.GDPlayerObjects1});gdjs.MercuryCode.mapOfGDgdjs_46MercuryCode_46GDboltObjects1Objects = Hashtable.newFrom({"bolt": gdjs.MercuryCode.GDboltObjects1});gdjs.MercuryCode.eventsList1 = function(runtimeScene) {

{


gdjs.MercuryCode.condition0IsTrue_0.val = false;
{
gdjs.MercuryCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(17)) == 0;
}if (gdjs.MercuryCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "66136__aji__ding30603-spedup.wav", false, 5, 1);
}}

}


};gdjs.MercuryCode.mapOfGDgdjs_46MercuryCode_46GDBlueEnemy1Objects1Objects = Hashtable.newFrom({"BlueEnemy1": gdjs.MercuryCode.GDBlueEnemy1Objects1});gdjs.MercuryCode.mapOfGDgdjs_46MercuryCode_46GDleftObjects1Objects = Hashtable.newFrom({"left": gdjs.MercuryCode.GDleftObjects1});gdjs.MercuryCode.mapOfGDgdjs_46MercuryCode_46GDBlueEnemy1Objects1Objects = Hashtable.newFrom({"BlueEnemy1": gdjs.MercuryCode.GDBlueEnemy1Objects1});gdjs.MercuryCode.mapOfGDgdjs_46MercuryCode_46GDrightObjects1Objects = Hashtable.newFrom({"right": gdjs.MercuryCode.GDrightObjects1});gdjs.MercuryCode.mapOfGDgdjs_46MercuryCode_46GDrobottingObjects1Objects = Hashtable.newFrom({"robotting": gdjs.MercuryCode.GDrobottingObjects1});gdjs.MercuryCode.mapOfGDgdjs_46MercuryCode_46GDleftObjects1Objects = Hashtable.newFrom({"left": gdjs.MercuryCode.GDleftObjects1});gdjs.MercuryCode.mapOfGDgdjs_46MercuryCode_46GDrobottingObjects1Objects = Hashtable.newFrom({"robotting": gdjs.MercuryCode.GDrobottingObjects1});gdjs.MercuryCode.mapOfGDgdjs_46MercuryCode_46GDrightObjects1Objects = Hashtable.newFrom({"right": gdjs.MercuryCode.GDrightObjects1});gdjs.MercuryCode.eventsList2 = function(runtimeScene) {

};gdjs.MercuryCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("bolt"), gdjs.MercuryCode.GDboltObjects1);

for(gdjs.MercuryCode.forEachIndex2 = 0;gdjs.MercuryCode.forEachIndex2 < gdjs.MercuryCode.GDboltObjects1.length;++gdjs.MercuryCode.forEachIndex2) {
gdjs.MercuryCode.GDboltObjects2.length = 0;


gdjs.MercuryCode.forEachTemporary2 = gdjs.MercuryCode.GDboltObjects1[gdjs.MercuryCode.forEachIndex2];
gdjs.MercuryCode.GDboltObjects2.push(gdjs.MercuryCode.forEachTemporary2);
gdjs.MercuryCode.condition0IsTrue_0.val = false;
{
gdjs.MercuryCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.MercuryCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(4).add(1);
}}
}

}


};gdjs.MercuryCode.mapOfGDgdjs_46MercuryCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.MercuryCode.GDPlayerObjects1});gdjs.MercuryCode.mapOfGDgdjs_46MercuryCode_46GDrobottingObjects1Objects = Hashtable.newFrom({"robotting": gdjs.MercuryCode.GDrobottingObjects1});gdjs.MercuryCode.mapOfGDgdjs_46MercuryCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.MercuryCode.GDPlayerObjects1});gdjs.MercuryCode.mapOfGDgdjs_46MercuryCode_46GDBlueEnemy1Objects1Objects = Hashtable.newFrom({"BlueEnemy1": gdjs.MercuryCode.GDBlueEnemy1Objects1});gdjs.MercuryCode.mapOfGDgdjs_46MercuryCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.MercuryCode.GDPlayerObjects1});gdjs.MercuryCode.mapOfGDgdjs_46MercuryCode_46GDrobottingObjects1Objects = Hashtable.newFrom({"robotting": gdjs.MercuryCode.GDrobottingObjects1});gdjs.MercuryCode.mapOfGDgdjs_46MercuryCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.MercuryCode.GDPlayerObjects1});gdjs.MercuryCode.mapOfGDgdjs_46MercuryCode_46GDcrashedshipObjects1Objects = Hashtable.newFrom({"crashedship": gdjs.MercuryCode.GDcrashedshipObjects1});gdjs.MercuryCode.mapOfGDgdjs_46MercuryCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.MercuryCode.GDPlayerObjects1});gdjs.MercuryCode.mapOfGDgdjs_46MercuryCode_46GDcrashedshipObjects1Objects = Hashtable.newFrom({"crashedship": gdjs.MercuryCode.GDcrashedshipObjects1});gdjs.MercuryCode.mapOfGDgdjs_46MercuryCode_46GDcrashedshipObjects1Objects = Hashtable.newFrom({"crashedship": gdjs.MercuryCode.GDcrashedshipObjects1});gdjs.MercuryCode.mapOfGDgdjs_46MercuryCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.MercuryCode.GDPlayerObjects1});gdjs.MercuryCode.mapOfGDgdjs_46MercuryCode_46GDcrashedshipObjects1Objects = Hashtable.newFrom({"crashedship": gdjs.MercuryCode.GDcrashedshipObjects1});gdjs.MercuryCode.mapOfGDgdjs_46MercuryCode_46GDendObjects1Objects = Hashtable.newFrom({"end": gdjs.MercuryCode.GDendObjects1});gdjs.MercuryCode.mapOfGDgdjs_46MercuryCode_46GDrobottingObjects1Objects = Hashtable.newFrom({"robotting": gdjs.MercuryCode.GDrobottingObjects1});gdjs.MercuryCode.mapOfGDgdjs_46MercuryCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.MercuryCode.GDPlayerObjects1});gdjs.MercuryCode.mapOfGDgdjs_46MercuryCode_46GDBlueEnemy1Objects1Objects = Hashtable.newFrom({"BlueEnemy1": gdjs.MercuryCode.GDBlueEnemy1Objects1});gdjs.MercuryCode.mapOfGDgdjs_46MercuryCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.MercuryCode.GDPlayerObjects1});gdjs.MercuryCode.eventsList4 = function(runtimeScene) {

};gdjs.MercuryCode.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("bolt"), gdjs.MercuryCode.GDboltObjects1);

for(gdjs.MercuryCode.forEachIndex2 = 0;gdjs.MercuryCode.forEachIndex2 < gdjs.MercuryCode.GDboltObjects1.length;++gdjs.MercuryCode.forEachIndex2) {
gdjs.MercuryCode.GDboltObjects2.length = 0;


gdjs.MercuryCode.forEachTemporary2 = gdjs.MercuryCode.GDboltObjects1[gdjs.MercuryCode.forEachIndex2];
gdjs.MercuryCode.GDboltObjects2.push(gdjs.MercuryCode.forEachTemporary2);
if (true) {
{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}{for(var i = 0, len = gdjs.MercuryCode.GDboltObjects2.length ;i < len;++i) {
    gdjs.MercuryCode.GDboltObjects2[i].deleteFromScene(runtimeScene);
}
}}
}

}


};gdjs.MercuryCode.eventsList6 = function(runtimeScene) {

};gdjs.MercuryCode.eventsList7 = function(runtimeScene) {

};gdjs.MercuryCode.eventsList8 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("robotting"), gdjs.MercuryCode.GDrobottingObjects2);

for(gdjs.MercuryCode.forEachIndex3 = 0;gdjs.MercuryCode.forEachIndex3 < gdjs.MercuryCode.GDrobottingObjects2.length;++gdjs.MercuryCode.forEachIndex3) {
gdjs.MercuryCode.GDrobottingObjects3.length = 0;


gdjs.MercuryCode.forEachTemporary3 = gdjs.MercuryCode.GDrobottingObjects2[gdjs.MercuryCode.forEachIndex3];
gdjs.MercuryCode.GDrobottingObjects3.push(gdjs.MercuryCode.forEachTemporary3);
if (true) {
{for(var i = 0, len = gdjs.MercuryCode.GDrobottingObjects3.length ;i < len;++i) {
    gdjs.MercuryCode.GDrobottingObjects3[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(13).sub(1);
}}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlueEnemy1"), gdjs.MercuryCode.GDBlueEnemy1Objects1);

for(gdjs.MercuryCode.forEachIndex2 = 0;gdjs.MercuryCode.forEachIndex2 < gdjs.MercuryCode.GDBlueEnemy1Objects1.length;++gdjs.MercuryCode.forEachIndex2) {
gdjs.MercuryCode.GDBlueEnemy1Objects2.length = 0;


gdjs.MercuryCode.forEachTemporary2 = gdjs.MercuryCode.GDBlueEnemy1Objects1[gdjs.MercuryCode.forEachIndex2];
gdjs.MercuryCode.GDBlueEnemy1Objects2.push(gdjs.MercuryCode.forEachTemporary2);
if (true) {
{for(var i = 0, len = gdjs.MercuryCode.GDBlueEnemy1Objects2.length ;i < len;++i) {
    gdjs.MercuryCode.GDBlueEnemy1Objects2[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(13).sub(1);
}}
}

}


};gdjs.MercuryCode.eventsList9 = function(runtimeScene) {

{


gdjs.MercuryCode.condition0IsTrue_0.val = false;
{
gdjs.MercuryCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(12)) != 1;
}if (gdjs.MercuryCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(9).sub(1);
}{runtimeScene.getGame().getVariables().getFromIndex(14).add(1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "leveltimer");
}}

}


{


gdjs.MercuryCode.condition0IsTrue_0.val = false;
{
gdjs.MercuryCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(12)) == 1;
}if (gdjs.MercuryCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(14).add(1);
}}

}


};gdjs.MercuryCode.mapOfGDgdjs_46MercuryCode_46GDRedLaser08Objects1Objects = Hashtable.newFrom({"RedLaser08": gdjs.MercuryCode.GDRedLaser08Objects1});gdjs.MercuryCode.mapOfGDgdjs_46MercuryCode_46GDGreenLaser09Objects1Objects = Hashtable.newFrom({"GreenLaser09": gdjs.MercuryCode.GDGreenLaser09Objects1});gdjs.MercuryCode.mapOfGDgdjs_46MercuryCode_46GDGreenLaser09Objects1Objects = Hashtable.newFrom({"GreenLaser09": gdjs.MercuryCode.GDGreenLaser09Objects1});gdjs.MercuryCode.mapOfGDgdjs_46MercuryCode_46GDRedLaser08Objects1Objects = Hashtable.newFrom({"RedLaser08": gdjs.MercuryCode.GDRedLaser08Objects1});gdjs.MercuryCode.mapOfGDgdjs_46MercuryCode_46GDGreenLaser09Objects1Objects = Hashtable.newFrom({"GreenLaser09": gdjs.MercuryCode.GDGreenLaser09Objects1});gdjs.MercuryCode.mapOfGDgdjs_46MercuryCode_46GDmercuryalienfloorObjects1Objects = Hashtable.newFrom({"mercuryalienfloor": gdjs.MercuryCode.GDmercuryalienfloorObjects1});gdjs.MercuryCode.mapOfGDgdjs_46MercuryCode_46GDRedLaser08Objects1Objects = Hashtable.newFrom({"RedLaser08": gdjs.MercuryCode.GDRedLaser08Objects1});gdjs.MercuryCode.mapOfGDgdjs_46MercuryCode_46GDmercuryalienfloorObjects1Objects = Hashtable.newFrom({"mercuryalienfloor": gdjs.MercuryCode.GDmercuryalienfloorObjects1});gdjs.MercuryCode.mapOfGDgdjs_46MercuryCode_46GDGreenLaser09Objects1Objects = Hashtable.newFrom({"GreenLaser09": gdjs.MercuryCode.GDGreenLaser09Objects1});gdjs.MercuryCode.mapOfGDgdjs_46MercuryCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.MercuryCode.GDPlayerObjects1});gdjs.MercuryCode.mapOfGDgdjs_46MercuryCode_46GDRedLaser08Objects1Objects = Hashtable.newFrom({"RedLaser08": gdjs.MercuryCode.GDRedLaser08Objects1});gdjs.MercuryCode.mapOfGDgdjs_46MercuryCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.MercuryCode.GDPlayerObjects1});gdjs.MercuryCode.eventsList10 = function(runtimeScene) {

};gdjs.MercuryCode.eventsList11 = function(runtimeScene) {

};gdjs.MercuryCode.eventsList12 = function(runtimeScene) {

};gdjs.MercuryCode.eventsList13 = function(runtimeScene) {

};gdjs.MercuryCode.eventsList14 = function(runtimeScene) {

};gdjs.MercuryCode.eventsList15 = function(runtimeScene) {

{


gdjs.MercuryCode.condition0IsTrue_0.val = false;
gdjs.MercuryCode.condition1IsTrue_0.val = false;
{
gdjs.MercuryCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(16)) == 0;
}if ( gdjs.MercuryCode.condition0IsTrue_0.val ) {
{
gdjs.MercuryCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(17)) == 0;
}}
if (gdjs.MercuryCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(16).setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(17).setNumber(1);
}}

}


{


gdjs.MercuryCode.condition0IsTrue_0.val = false;
gdjs.MercuryCode.condition1IsTrue_0.val = false;
{
gdjs.MercuryCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(16)) == 0;
}if ( gdjs.MercuryCode.condition0IsTrue_0.val ) {
{
gdjs.MercuryCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(17)) == 1;
}}
if (gdjs.MercuryCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(16).setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(17).setNumber(0);
}}

}


};gdjs.MercuryCode.eventsList16 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("fps"), gdjs.MercuryCode.GDfpsObjects2);

gdjs.MercuryCode.condition0IsTrue_0.val = false;
gdjs.MercuryCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MercuryCode.GDfpsObjects2.length;i<l;++i) {
    if ( !(gdjs.MercuryCode.GDfpsObjects2[i].isVisible()) ) {
        gdjs.MercuryCode.condition0IsTrue_0.val = true;
        gdjs.MercuryCode.GDfpsObjects2[k] = gdjs.MercuryCode.GDfpsObjects2[i];
        ++k;
    }
}
gdjs.MercuryCode.GDfpsObjects2.length = k;}if ( gdjs.MercuryCode.condition0IsTrue_0.val ) {
{
gdjs.MercuryCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(15)) == 0;
}}
if (gdjs.MercuryCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.MercuryCode.GDNewObjectObjects2);
gdjs.copyArray(runtimeScene.getObjects("cheats"), gdjs.MercuryCode.GDcheatsObjects2);
/* Reuse gdjs.MercuryCode.GDfpsObjects2 */
gdjs.copyArray(runtimeScene.getObjects("gamelife"), gdjs.MercuryCode.GDgamelifeObjects2);
{for(var i = 0, len = gdjs.MercuryCode.GDfpsObjects2.length ;i < len;++i) {
    gdjs.MercuryCode.GDfpsObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.MercuryCode.GDNewObjectObjects2.length ;i < len;++i) {
    gdjs.MercuryCode.GDNewObjectObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.MercuryCode.GDgamelifeObjects2.length ;i < len;++i) {
    gdjs.MercuryCode.GDgamelifeObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.MercuryCode.GDcheatsObjects2.length ;i < len;++i) {
    gdjs.MercuryCode.GDcheatsObjects2[i].hide(false);
}
}{runtimeScene.getGame().getVariables().getFromIndex(15).setNumber(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("fps"), gdjs.MercuryCode.GDfpsObjects1);

gdjs.MercuryCode.condition0IsTrue_0.val = false;
gdjs.MercuryCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MercuryCode.GDfpsObjects1.length;i<l;++i) {
    if ( gdjs.MercuryCode.GDfpsObjects1[i].isVisible() ) {
        gdjs.MercuryCode.condition0IsTrue_0.val = true;
        gdjs.MercuryCode.GDfpsObjects1[k] = gdjs.MercuryCode.GDfpsObjects1[i];
        ++k;
    }
}
gdjs.MercuryCode.GDfpsObjects1.length = k;}if ( gdjs.MercuryCode.condition0IsTrue_0.val ) {
{
gdjs.MercuryCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(15)) == 0;
}}
if (gdjs.MercuryCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.MercuryCode.GDNewObjectObjects1);
gdjs.copyArray(runtimeScene.getObjects("cheats"), gdjs.MercuryCode.GDcheatsObjects1);
/* Reuse gdjs.MercuryCode.GDfpsObjects1 */
gdjs.copyArray(runtimeScene.getObjects("gamelife"), gdjs.MercuryCode.GDgamelifeObjects1);
{for(var i = 0, len = gdjs.MercuryCode.GDfpsObjects1.length ;i < len;++i) {
    gdjs.MercuryCode.GDfpsObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.MercuryCode.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.MercuryCode.GDNewObjectObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.MercuryCode.GDgamelifeObjects1.length ;i < len;++i) {
    gdjs.MercuryCode.GDgamelifeObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.MercuryCode.GDcheatsObjects1.length ;i < len;++i) {
    gdjs.MercuryCode.GDcheatsObjects1[i].hide();
}
}{runtimeScene.getGame().getVariables().getFromIndex(15).setNumber(1);
}}

}


};gdjs.MercuryCode.eventsList17 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.MercuryCode.GDPlayerObjects1);

gdjs.MercuryCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MercuryCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.MercuryCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.MercuryCode.condition0IsTrue_0.val = true;
        gdjs.MercuryCode.GDPlayerObjects1[k] = gdjs.MercuryCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.MercuryCode.GDPlayerObjects1.length = k;}if (gdjs.MercuryCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MercuryCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.MercuryCode.GDPlayerObjects1);

gdjs.MercuryCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MercuryCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.MercuryCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.MercuryCode.condition0IsTrue_0.val = true;
        gdjs.MercuryCode.GDPlayerObjects1[k] = gdjs.MercuryCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.MercuryCode.GDPlayerObjects1.length = k;}if (gdjs.MercuryCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MercuryCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.MercuryCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.MercuryCode.GDPlayerObjects1[i].setAnimationName("jump");
}
}{runtimeScene.getGame().getVariables().getFromIndex(3).setString("none");
}{for(var i = 0, len = gdjs.MercuryCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.MercuryCode.GDPlayerObjects1[i].clearForces();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.MercuryCode.GDPlayerObjects1);

gdjs.MercuryCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MercuryCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.MercuryCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.MercuryCode.condition0IsTrue_0.val = true;
        gdjs.MercuryCode.GDPlayerObjects1[k] = gdjs.MercuryCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.MercuryCode.GDPlayerObjects1.length = k;}if (gdjs.MercuryCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MercuryCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.MercuryCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.MercuryCode.GDPlayerObjects1[i].setAnimationName("jump");
}
}}

}


{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.MercuryCode.GDPlayerObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.MercuryCode.GDPlayerObjects1.length !== 0 ? gdjs.MercuryCode.GDPlayerObjects1[0] : null), false, "", 0);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("rocketplat"), gdjs.MercuryCode.GDrocketplatObjects1);
{for(var i = 0, len = gdjs.MercuryCode.GDrocketplatObjects1.length ;i < len;++i) {
    gdjs.MercuryCode.GDrocketplatObjects1[i].setZOrder(1);
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("crashedship"), gdjs.MercuryCode.GDcrashedshipObjects1);
{for(var i = 0, len = gdjs.MercuryCode.GDcrashedshipObjects1.length ;i < len;++i) {
    gdjs.MercuryCode.GDcrashedshipObjects1[i].setZOrder(1);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.MercuryCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("bolt"), gdjs.MercuryCode.GDboltObjects1);

gdjs.MercuryCode.condition0IsTrue_0.val = false;
{
gdjs.MercuryCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MercuryCode.mapOfGDgdjs_46MercuryCode_46GDPlayerObjects1Objects, gdjs.MercuryCode.mapOfGDgdjs_46MercuryCode_46GDboltObjects1Objects, false, runtimeScene, false);
}if (gdjs.MercuryCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MercuryCode.GDboltObjects1 */
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.MercuryCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.MercuryCode.GDboltObjects1.length ;i < len;++i) {
    gdjs.MercuryCode.GDboltObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}{for(var i = 0, len = gdjs.MercuryCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.MercuryCode.GDscoreObjects1[i].setString("Score:" + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0))));
}
}
{ //Subevents
gdjs.MercuryCode.eventsList1(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.MercuryCode.condition0IsTrue_0.val = false;
{
gdjs.MercuryCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "f");
}if (gdjs.MercuryCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}}

}


{


gdjs.MercuryCode.condition0IsTrue_0.val = false;
{
gdjs.MercuryCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Escape");
}if (gdjs.MercuryCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, false, true);
}}

}


{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.MercuryCode.GDNewObjectObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.MercuryCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("cheats"), gdjs.MercuryCode.GDcheatsObjects1);
gdjs.copyArray(runtimeScene.getObjects("fps"), gdjs.MercuryCode.GDfpsObjects1);
gdjs.copyArray(runtimeScene.getObjects("gamelife"), gdjs.MercuryCode.GDgamelifeObjects1);
gdjs.copyArray(runtimeScene.getObjects("live"), gdjs.MercuryCode.GDliveObjects1);
gdjs.copyArray(runtimeScene.getObjects("lives"), gdjs.MercuryCode.GDlivesObjects1);
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.MercuryCode.GDscoreObjects1);
gdjs.copyArray(runtimeScene.getObjects("timer"), gdjs.MercuryCode.GDtimerObjects1);
{for(var i = 0, len = gdjs.MercuryCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.MercuryCode.GDscoreObjects1[i].setString("Amount of bolts " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0))) + "/ " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4))));
}
}{for(var i = 0, len = gdjs.MercuryCode.GDlivesObjects1.length ;i < len;++i) {
    gdjs.MercuryCode.GDlivesObjects1[i].setString("X" + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1))));
}
}{for(var i = 0, len = gdjs.MercuryCode.GDtimerObjects1.length ;i < len;++i) {
    gdjs.MercuryCode.GDtimerObjects1[i].setString("Time: " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9))));
}
}{for(var i = 0, len = gdjs.MercuryCode.GDfpsObjects1.length ;i < len;++i) {
    gdjs.MercuryCode.GDfpsObjects1[i].setString(gdjs.evtTools.common.toString(Math.round(1 / gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene))) + "fps");
}
}{for(var i = 0, len = gdjs.MercuryCode.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.MercuryCode.GDNewObjectObjects1[i].setString("no of objects : " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(13))));
}
}{for(var i = 0, len = gdjs.MercuryCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.MercuryCode.GDscoreObjects1[i].setX((( gdjs.MercuryCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.MercuryCode.GDPlayerObjects1[0].getPointX("")) - 200);
}
}{for(var i = 0, len = gdjs.MercuryCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.MercuryCode.GDscoreObjects1[i].setY((( gdjs.MercuryCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.MercuryCode.GDPlayerObjects1[0].getPointY("")) - 200);
}
}{for(var i = 0, len = gdjs.MercuryCode.GDlivesObjects1.length ;i < len;++i) {
    gdjs.MercuryCode.GDlivesObjects1[i].setX((( gdjs.MercuryCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.MercuryCode.GDPlayerObjects1[0].getPointX("")) - 130);
}
}{for(var i = 0, len = gdjs.MercuryCode.GDlivesObjects1.length ;i < len;++i) {
    gdjs.MercuryCode.GDlivesObjects1[i].setY((( gdjs.MercuryCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.MercuryCode.GDPlayerObjects1[0].getPointY("")) - 150);
}
}{for(var i = 0, len = gdjs.MercuryCode.GDliveObjects1.length ;i < len;++i) {
    gdjs.MercuryCode.GDliveObjects1[i].setX((( gdjs.MercuryCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.MercuryCode.GDPlayerObjects1[0].getPointX("")) - 200);
}
}{for(var i = 0, len = gdjs.MercuryCode.GDliveObjects1.length ;i < len;++i) {
    gdjs.MercuryCode.GDliveObjects1[i].setY((( gdjs.MercuryCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.MercuryCode.GDPlayerObjects1[0].getPointY("")) - 170);
}
}{for(var i = 0, len = gdjs.MercuryCode.GDtimerObjects1.length ;i < len;++i) {
    gdjs.MercuryCode.GDtimerObjects1[i].setX((( gdjs.MercuryCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.MercuryCode.GDPlayerObjects1[0].getPointX("")) + 200);
}
}{for(var i = 0, len = gdjs.MercuryCode.GDtimerObjects1.length ;i < len;++i) {
    gdjs.MercuryCode.GDtimerObjects1[i].setY((( gdjs.MercuryCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.MercuryCode.GDPlayerObjects1[0].getPointY("")) - 200);
}
}{for(var i = 0, len = gdjs.MercuryCode.GDcheatsObjects1.length ;i < len;++i) {
    gdjs.MercuryCode.GDcheatsObjects1[i].setX((( gdjs.MercuryCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.MercuryCode.GDPlayerObjects1[0].getPointX("")));
}
}{for(var i = 0, len = gdjs.MercuryCode.GDcheatsObjects1.length ;i < len;++i) {
    gdjs.MercuryCode.GDcheatsObjects1[i].setY((( gdjs.MercuryCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.MercuryCode.GDPlayerObjects1[0].getPointY("")) - 200);
}
}{for(var i = 0, len = gdjs.MercuryCode.GDfpsObjects1.length ;i < len;++i) {
    gdjs.MercuryCode.GDfpsObjects1[i].setX((( gdjs.MercuryCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.MercuryCode.GDPlayerObjects1[0].getPointX("")) + 290);
}
}{for(var i = 0, len = gdjs.MercuryCode.GDfpsObjects1.length ;i < len;++i) {
    gdjs.MercuryCode.GDfpsObjects1[i].setY((( gdjs.MercuryCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.MercuryCode.GDPlayerObjects1[0].getPointY("")) - 200);
}
}{for(var i = 0, len = gdjs.MercuryCode.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.MercuryCode.GDNewObjectObjects1[i].setX((( gdjs.MercuryCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.MercuryCode.GDPlayerObjects1[0].getPointX("")) + 220);
}
}{for(var i = 0, len = gdjs.MercuryCode.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.MercuryCode.GDNewObjectObjects1[i].setY((( gdjs.MercuryCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.MercuryCode.GDPlayerObjects1[0].getPointY("")) - 160);
}
}{for(var i = 0, len = gdjs.MercuryCode.GDgamelifeObjects1.length ;i < len;++i) {
    gdjs.MercuryCode.GDgamelifeObjects1[i].setString("Total Game time = " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(14))));
}
}{for(var i = 0, len = gdjs.MercuryCode.GDgamelifeObjects1.length ;i < len;++i) {
    gdjs.MercuryCode.GDgamelifeObjects1[i].setX((( gdjs.MercuryCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.MercuryCode.GDPlayerObjects1[0].getPointX("")) + 220);
}
}{for(var i = 0, len = gdjs.MercuryCode.GDgamelifeObjects1.length ;i < len;++i) {
    gdjs.MercuryCode.GDgamelifeObjects1[i].setY((( gdjs.MercuryCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.MercuryCode.GDPlayerObjects1[0].getPointY("")) - 140);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.MercuryCode.GDPlayerObjects1);

gdjs.MercuryCode.condition0IsTrue_0.val = false;
gdjs.MercuryCode.condition1IsTrue_0.val = false;
gdjs.MercuryCode.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MercuryCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.MercuryCode.GDPlayerObjects1[i].getY() >= 600 ) {
        gdjs.MercuryCode.condition0IsTrue_0.val = true;
        gdjs.MercuryCode.GDPlayerObjects1[k] = gdjs.MercuryCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.MercuryCode.GDPlayerObjects1.length = k;}if ( gdjs.MercuryCode.condition0IsTrue_0.val ) {
{
gdjs.MercuryCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) != 0;
}if ( gdjs.MercuryCode.condition1IsTrue_0.val ) {
{
gdjs.MercuryCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) != 1;
}}
}
if (gdjs.MercuryCode.condition2IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).sub(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}{runtimeScene.getGame().getVariables().getFromIndex(1).sub(1);
}{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Mercury");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.MercuryCode.GDPlayerObjects1);

gdjs.MercuryCode.condition0IsTrue_0.val = false;
gdjs.MercuryCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MercuryCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.MercuryCode.GDPlayerObjects1[i].getY() >= 600 ) {
        gdjs.MercuryCode.condition0IsTrue_0.val = true;
        gdjs.MercuryCode.GDPlayerObjects1[k] = gdjs.MercuryCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.MercuryCode.GDPlayerObjects1.length = k;}if ( gdjs.MercuryCode.condition0IsTrue_0.val ) {
{
gdjs.MercuryCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) == 1;
}}
if (gdjs.MercuryCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Mercury");
}}

}


{


gdjs.MercuryCode.condition0IsTrue_0.val = false;
{
gdjs.MercuryCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 0;
}if (gdjs.MercuryCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Dead", true);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("BlueEnemy1"), gdjs.MercuryCode.GDBlueEnemy1Objects1);
gdjs.copyArray(runtimeScene.getObjects("left"), gdjs.MercuryCode.GDleftObjects1);

gdjs.MercuryCode.condition0IsTrue_0.val = false;
{
gdjs.MercuryCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MercuryCode.mapOfGDgdjs_46MercuryCode_46GDBlueEnemy1Objects1Objects, gdjs.MercuryCode.mapOfGDgdjs_46MercuryCode_46GDleftObjects1Objects, false, runtimeScene, false);
}if (gdjs.MercuryCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(10).setString("Left");
}}

}


{


gdjs.MercuryCode.condition0IsTrue_0.val = false;
{
gdjs.MercuryCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(10)) == "Left";
}if (gdjs.MercuryCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BlueEnemy1"), gdjs.MercuryCode.GDBlueEnemy1Objects1);
{for(var i = 0, len = gdjs.MercuryCode.GDBlueEnemy1Objects1.length ;i < len;++i) {
    gdjs.MercuryCode.GDBlueEnemy1Objects1[i].addPolarForce(180, 100, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlueEnemy1"), gdjs.MercuryCode.GDBlueEnemy1Objects1);
gdjs.copyArray(runtimeScene.getObjects("right"), gdjs.MercuryCode.GDrightObjects1);

gdjs.MercuryCode.condition0IsTrue_0.val = false;
{
gdjs.MercuryCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MercuryCode.mapOfGDgdjs_46MercuryCode_46GDBlueEnemy1Objects1Objects, gdjs.MercuryCode.mapOfGDgdjs_46MercuryCode_46GDrightObjects1Objects, false, runtimeScene, false);
}if (gdjs.MercuryCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(10).setString("Right");
}}

}


{


gdjs.MercuryCode.condition0IsTrue_0.val = false;
{
gdjs.MercuryCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(10)) == "Right";
}if (gdjs.MercuryCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BlueEnemy1"), gdjs.MercuryCode.GDBlueEnemy1Objects1);
{for(var i = 0, len = gdjs.MercuryCode.GDBlueEnemy1Objects1.length ;i < len;++i) {
    gdjs.MercuryCode.GDBlueEnemy1Objects1[i].addPolarForce(0, 100, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("left"), gdjs.MercuryCode.GDleftObjects1);
gdjs.copyArray(runtimeScene.getObjects("robotting"), gdjs.MercuryCode.GDrobottingObjects1);

gdjs.MercuryCode.condition0IsTrue_0.val = false;
{
gdjs.MercuryCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MercuryCode.mapOfGDgdjs_46MercuryCode_46GDrobottingObjects1Objects, gdjs.MercuryCode.mapOfGDgdjs_46MercuryCode_46GDleftObjects1Objects, false, runtimeScene, false);
}if (gdjs.MercuryCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(2).setString("Left");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("right"), gdjs.MercuryCode.GDrightObjects1);
gdjs.copyArray(runtimeScene.getObjects("robotting"), gdjs.MercuryCode.GDrobottingObjects1);

gdjs.MercuryCode.condition0IsTrue_0.val = false;
{
gdjs.MercuryCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MercuryCode.mapOfGDgdjs_46MercuryCode_46GDrobottingObjects1Objects, gdjs.MercuryCode.mapOfGDgdjs_46MercuryCode_46GDrightObjects1Objects, false, runtimeScene, false);
}if (gdjs.MercuryCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(2).setString("Right");
}}

}


{


gdjs.MercuryCode.condition0IsTrue_0.val = false;
{
gdjs.MercuryCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)) == "Left";
}if (gdjs.MercuryCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("robotting"), gdjs.MercuryCode.GDrobottingObjects1);
{for(var i = 0, len = gdjs.MercuryCode.GDrobottingObjects1.length ;i < len;++i) {
    gdjs.MercuryCode.GDrobottingObjects1[i].addPolarForce(180, 100, 0);
}
}{for(var i = 0, len = gdjs.MercuryCode.GDrobottingObjects1.length ;i < len;++i) {
    gdjs.MercuryCode.GDrobottingObjects1[i].flipX(false);
}
}}

}


{


gdjs.MercuryCode.condition0IsTrue_0.val = false;
{
gdjs.MercuryCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)) == "Right";
}if (gdjs.MercuryCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("robotting"), gdjs.MercuryCode.GDrobottingObjects1);
{for(var i = 0, len = gdjs.MercuryCode.GDrobottingObjects1.length ;i < len;++i) {
    gdjs.MercuryCode.GDrobottingObjects1[i].addPolarForce(0, 100, 0);
}
}{for(var i = 0, len = gdjs.MercuryCode.GDrobottingObjects1.length ;i < len;++i) {
    gdjs.MercuryCode.GDrobottingObjects1[i].flipX(true);
}
}}

}


{



}


{


gdjs.MercuryCode.condition0IsTrue_0.val = false;
{
gdjs.MercuryCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.MercuryCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.MercuryCode.GDNewObjectObjects1);
gdjs.copyArray(runtimeScene.getObjects("cheats"), gdjs.MercuryCode.GDcheatsObjects1);
gdjs.copyArray(runtimeScene.getObjects("crashedship"), gdjs.MercuryCode.GDcrashedshipObjects1);
gdjs.copyArray(runtimeScene.getObjects("fps"), gdjs.MercuryCode.GDfpsObjects1);
gdjs.copyArray(runtimeScene.getObjects("gamelife"), gdjs.MercuryCode.GDgamelifeObjects1);
gdjs.copyArray(runtimeScene.getObjects("left"), gdjs.MercuryCode.GDleftObjects1);
gdjs.copyArray(runtimeScene.getObjects("notcomplete"), gdjs.MercuryCode.GDnotcompleteObjects1);
gdjs.copyArray(runtimeScene.getObjects("right"), gdjs.MercuryCode.GDrightObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(2).setString("Left");
}{for(var i = 0, len = gdjs.MercuryCode.GDrightObjects1.length ;i < len;++i) {
    gdjs.MercuryCode.GDrightObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.MercuryCode.GDleftObjects1.length ;i < len;++i) {
    gdjs.MercuryCode.GDleftObjects1[i].hide();
}
}{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(0);
}{for(var i = 0, len = gdjs.MercuryCode.GDnotcompleteObjects1.length ;i < len;++i) {
    gdjs.MercuryCode.GDnotcompleteObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.MercuryCode.GDcrashedshipObjects1.length ;i < len;++i) {
    gdjs.MercuryCode.GDcrashedshipObjects1[i].setAnimationName("stand");
}
}{runtimeScene.getGame().getVariables().getFromIndex(5).setNumber(0);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "fire");
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(13).setNumber(0);
}{for(var i = 0, len = gdjs.MercuryCode.GDfpsObjects1.length ;i < len;++i) {
    gdjs.MercuryCode.GDfpsObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.MercuryCode.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.MercuryCode.GDNewObjectObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.MercuryCode.GDgamelifeObjects1.length ;i < len;++i) {
    gdjs.MercuryCode.GDgamelifeObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.MercuryCode.GDcheatsObjects1.length ;i < len;++i) {
    gdjs.MercuryCode.GDcheatsObjects1[i].hide();
}
}
{ //Subevents
gdjs.MercuryCode.eventsList3(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.MercuryCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("robotting"), gdjs.MercuryCode.GDrobottingObjects1);

gdjs.MercuryCode.condition0IsTrue_0.val = false;
gdjs.MercuryCode.condition1IsTrue_0.val = false;
{
gdjs.MercuryCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MercuryCode.mapOfGDgdjs_46MercuryCode_46GDPlayerObjects1Objects, gdjs.MercuryCode.mapOfGDgdjs_46MercuryCode_46GDrobottingObjects1Objects, false, runtimeScene, false);
}if ( gdjs.MercuryCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.MercuryCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.MercuryCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.MercuryCode.condition1IsTrue_0.val = true;
        gdjs.MercuryCode.GDPlayerObjects1[k] = gdjs.MercuryCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.MercuryCode.GDPlayerObjects1.length = k;}}
if (gdjs.MercuryCode.condition1IsTrue_0.val) {
/* Reuse gdjs.MercuryCode.GDPlayerObjects1 */
/* Reuse gdjs.MercuryCode.GDrobottingObjects1 */
{for(var i = 0, len = gdjs.MercuryCode.GDrobottingObjects1.length ;i < len;++i) {
    gdjs.MercuryCode.GDrobottingObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.MercuryCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.MercuryCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").setCanJump();
}
}{for(var i = 0, len = gdjs.MercuryCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.MercuryCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}{runtimeScene.getGame().getVariables().getFromIndex(13).sub(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlueEnemy1"), gdjs.MercuryCode.GDBlueEnemy1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.MercuryCode.GDPlayerObjects1);

gdjs.MercuryCode.condition0IsTrue_0.val = false;
gdjs.MercuryCode.condition1IsTrue_0.val = false;
{
gdjs.MercuryCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MercuryCode.mapOfGDgdjs_46MercuryCode_46GDPlayerObjects1Objects, gdjs.MercuryCode.mapOfGDgdjs_46MercuryCode_46GDBlueEnemy1Objects1Objects, false, runtimeScene, false);
}if ( gdjs.MercuryCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.MercuryCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.MercuryCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.MercuryCode.condition1IsTrue_0.val = true;
        gdjs.MercuryCode.GDPlayerObjects1[k] = gdjs.MercuryCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.MercuryCode.GDPlayerObjects1.length = k;}}
if (gdjs.MercuryCode.condition1IsTrue_0.val) {
/* Reuse gdjs.MercuryCode.GDBlueEnemy1Objects1 */
/* Reuse gdjs.MercuryCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.MercuryCode.GDBlueEnemy1Objects1.length ;i < len;++i) {
    gdjs.MercuryCode.GDBlueEnemy1Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.MercuryCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.MercuryCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").setCanJump();
}
}{for(var i = 0, len = gdjs.MercuryCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.MercuryCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}{runtimeScene.getGame().getVariables().getFromIndex(13).sub(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.MercuryCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("robotting"), gdjs.MercuryCode.GDrobottingObjects1);

gdjs.MercuryCode.condition0IsTrue_0.val = false;
gdjs.MercuryCode.condition1IsTrue_0.val = false;
{
gdjs.MercuryCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MercuryCode.mapOfGDgdjs_46MercuryCode_46GDPlayerObjects1Objects, gdjs.MercuryCode.mapOfGDgdjs_46MercuryCode_46GDrobottingObjects1Objects, false, runtimeScene, false);
}if ( gdjs.MercuryCode.condition0IsTrue_0.val ) {
{
gdjs.MercuryCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) != 1;
}}
if (gdjs.MercuryCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).sub(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}{runtimeScene.getGame().getVariables().getFromIndex(1).sub(1);
}{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Mercury");
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.MercuryCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("crashedship"), gdjs.MercuryCode.GDcrashedshipObjects1);

gdjs.MercuryCode.condition0IsTrue_0.val = false;
{
gdjs.MercuryCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MercuryCode.mapOfGDgdjs_46MercuryCode_46GDPlayerObjects1Objects, gdjs.MercuryCode.mapOfGDgdjs_46MercuryCode_46GDcrashedshipObjects1Objects, true, runtimeScene, false);
}if (gdjs.MercuryCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("notcomplete"), gdjs.MercuryCode.GDnotcompleteObjects1);
{for(var i = 0, len = gdjs.MercuryCode.GDnotcompleteObjects1.length ;i < len;++i) {
    gdjs.MercuryCode.GDnotcompleteObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.MercuryCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("crashedship"), gdjs.MercuryCode.GDcrashedshipObjects1);

gdjs.MercuryCode.condition0IsTrue_0.val = false;
gdjs.MercuryCode.condition1IsTrue_0.val = false;
{
gdjs.MercuryCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MercuryCode.mapOfGDgdjs_46MercuryCode_46GDPlayerObjects1Objects, gdjs.MercuryCode.mapOfGDgdjs_46MercuryCode_46GDcrashedshipObjects1Objects, false, runtimeScene, false);
}if ( gdjs.MercuryCode.condition0IsTrue_0.val ) {
{
{gdjs.MercuryCode.conditionTrue_1 = gdjs.MercuryCode.condition1IsTrue_0;
gdjs.MercuryCode.conditionTrue_1.val = (gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) != gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}}
if (gdjs.MercuryCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("notcomplete"), gdjs.MercuryCode.GDnotcompleteObjects1);
{for(var i = 0, len = gdjs.MercuryCode.GDnotcompleteObjects1.length ;i < len;++i) {
    gdjs.MercuryCode.GDnotcompleteObjects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.MercuryCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("crashedship"), gdjs.MercuryCode.GDcrashedshipObjects1);

gdjs.MercuryCode.condition0IsTrue_0.val = false;
gdjs.MercuryCode.condition1IsTrue_0.val = false;
{
gdjs.MercuryCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MercuryCode.mapOfGDgdjs_46MercuryCode_46GDcrashedshipObjects1Objects, gdjs.MercuryCode.mapOfGDgdjs_46MercuryCode_46GDPlayerObjects1Objects, false, runtimeScene, false);
}if ( gdjs.MercuryCode.condition0IsTrue_0.val ) {
{
{gdjs.MercuryCode.conditionTrue_1 = gdjs.MercuryCode.condition1IsTrue_0;
gdjs.MercuryCode.conditionTrue_1.val = (gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}}
if (gdjs.MercuryCode.condition1IsTrue_0.val) {
/* Reuse gdjs.MercuryCode.GDPlayerObjects1 */
/* Reuse gdjs.MercuryCode.GDcrashedshipObjects1 */
{for(var i = 0, len = gdjs.MercuryCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.MercuryCode.GDPlayerObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "leveltimer");
}{for(var i = 0, len = gdjs.MercuryCode.GDcrashedshipObjects1.length ;i < len;++i) {
    gdjs.MercuryCode.GDcrashedshipObjects1[i].setAnimationName("fixit");
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "fixingtime");
}{runtimeScene.getGame().getVariables().getFromIndex(5).setNumber(1);
}}

}


{


gdjs.MercuryCode.condition0IsTrue_0.val = false;
gdjs.MercuryCode.condition1IsTrue_0.val = false;
{
gdjs.MercuryCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 3, "fixingtime");
}if ( gdjs.MercuryCode.condition0IsTrue_0.val ) {
{
{gdjs.MercuryCode.conditionTrue_1 = gdjs.MercuryCode.condition1IsTrue_0;
gdjs.MercuryCode.conditionTrue_1.val = (gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5)) == 1);
}
}}
if (gdjs.MercuryCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("crashedship"), gdjs.MercuryCode.GDcrashedshipObjects1);
{for(var i = 0, len = gdjs.MercuryCode.GDcrashedshipObjects1.length ;i < len;++i) {
    gdjs.MercuryCode.GDcrashedshipObjects1[i].setAnimationName("fly");
}
}{for(var i = 0, len = gdjs.MercuryCode.GDcrashedshipObjects1.length ;i < len;++i) {
    gdjs.MercuryCode.GDcrashedshipObjects1[i].addForce(0, -(1000), 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("crashedship"), gdjs.MercuryCode.GDcrashedshipObjects1);
gdjs.copyArray(runtimeScene.getObjects("end"), gdjs.MercuryCode.GDendObjects1);

gdjs.MercuryCode.condition0IsTrue_0.val = false;
{
gdjs.MercuryCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MercuryCode.mapOfGDgdjs_46MercuryCode_46GDcrashedshipObjects1Objects, gdjs.MercuryCode.mapOfGDgdjs_46MercuryCode_46GDendObjects1Objects, false, runtimeScene, false);
}if (gdjs.MercuryCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(3);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "End", false);
}}

}


{



}


{


gdjs.MercuryCode.condition0IsTrue_0.val = false;
{
gdjs.MercuryCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "i");
}if (gdjs.MercuryCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(6).setNumber(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.MercuryCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("robotting"), gdjs.MercuryCode.GDrobottingObjects1);

gdjs.MercuryCode.condition0IsTrue_0.val = false;
gdjs.MercuryCode.condition1IsTrue_0.val = false;
{
gdjs.MercuryCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) == 1;
}if ( gdjs.MercuryCode.condition0IsTrue_0.val ) {
{
gdjs.MercuryCode.condition1IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MercuryCode.mapOfGDgdjs_46MercuryCode_46GDrobottingObjects1Objects, gdjs.MercuryCode.mapOfGDgdjs_46MercuryCode_46GDPlayerObjects1Objects, false, runtimeScene, false);
}}
if (gdjs.MercuryCode.condition1IsTrue_0.val) {
/* Reuse gdjs.MercuryCode.GDrobottingObjects1 */
{for(var i = 0, len = gdjs.MercuryCode.GDrobottingObjects1.length ;i < len;++i) {
    gdjs.MercuryCode.GDrobottingObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(13).sub(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlueEnemy1"), gdjs.MercuryCode.GDBlueEnemy1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.MercuryCode.GDPlayerObjects1);

gdjs.MercuryCode.condition0IsTrue_0.val = false;
gdjs.MercuryCode.condition1IsTrue_0.val = false;
{
gdjs.MercuryCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) == 1;
}if ( gdjs.MercuryCode.condition0IsTrue_0.val ) {
{
gdjs.MercuryCode.condition1IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MercuryCode.mapOfGDgdjs_46MercuryCode_46GDBlueEnemy1Objects1Objects, gdjs.MercuryCode.mapOfGDgdjs_46MercuryCode_46GDPlayerObjects1Objects, false, runtimeScene, false);
}}
if (gdjs.MercuryCode.condition1IsTrue_0.val) {
/* Reuse gdjs.MercuryCode.GDBlueEnemy1Objects1 */
{for(var i = 0, len = gdjs.MercuryCode.GDBlueEnemy1Objects1.length ;i < len;++i) {
    gdjs.MercuryCode.GDBlueEnemy1Objects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(13).sub(1);
}}

}


{


gdjs.MercuryCode.condition0IsTrue_0.val = false;
{
gdjs.MercuryCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "c");
}if (gdjs.MercuryCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MercuryCode.eventsList5(runtimeScene);} //End of subevents
}

}


{


gdjs.MercuryCode.condition0IsTrue_0.val = false;
{
gdjs.MercuryCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "k");
}if (gdjs.MercuryCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MercuryCode.eventsList8(runtimeScene);} //End of subevents
}

}


{


gdjs.MercuryCode.condition0IsTrue_0.val = false;
{
gdjs.MercuryCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "t");
}if (gdjs.MercuryCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(12).setNumber(1);
}}

}


{



}


{


gdjs.MercuryCode.condition0IsTrue_0.val = false;
{
gdjs.MercuryCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.MercuryCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "leveltimer");
}{runtimeScene.getGame().getVariables().getFromIndex(9).setNumber(30);
}}

}


{


gdjs.MercuryCode.condition0IsTrue_0.val = false;
{
gdjs.MercuryCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "leveltimer");
}if (gdjs.MercuryCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MercuryCode.eventsList9(runtimeScene);} //End of subevents
}

}


{


gdjs.MercuryCode.condition0IsTrue_0.val = false;
{
gdjs.MercuryCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9)) == 0;
}if (gdjs.MercuryCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(1).sub(1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Mercury", false);
}}

}


{



}


{


gdjs.MercuryCode.condition0IsTrue_0.val = false;
{
gdjs.MercuryCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 4, "fire");
}if (gdjs.MercuryCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(11).setNumber(gdjs.randomInRange(1, 3));
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "fire");
}}

}


{


gdjs.MercuryCode.condition0IsTrue_0.val = false;
gdjs.MercuryCode.condition1IsTrue_0.val = false;
{
gdjs.MercuryCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(11)) == 1;
}if ( gdjs.MercuryCode.condition0IsTrue_0.val ) {
{
gdjs.MercuryCode.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 3, "firerate");
}}
if (gdjs.MercuryCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BlueEnemy1"), gdjs.MercuryCode.GDBlueEnemy1Objects1);
gdjs.copyArray(runtimeScene.getObjects("RedLaser08"), gdjs.MercuryCode.GDRedLaser08Objects1);
{for(var i = 0, len = gdjs.MercuryCode.GDBlueEnemy1Objects1.length ;i < len;++i) {
    gdjs.MercuryCode.GDBlueEnemy1Objects1[i].getBehavior("FireBullet").Fire((gdjs.MercuryCode.GDBlueEnemy1Objects1[i].getPointX("")), (gdjs.MercuryCode.GDBlueEnemy1Objects1[i].getPointY("")), gdjs.MercuryCode.mapOfGDgdjs_46MercuryCode_46GDRedLaser08Objects1Objects, 90, 100, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "firerate");
}}

}


{


gdjs.MercuryCode.condition0IsTrue_0.val = false;
gdjs.MercuryCode.condition1IsTrue_0.val = false;
{
gdjs.MercuryCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(11)) == 2;
}if ( gdjs.MercuryCode.condition0IsTrue_0.val ) {
{
gdjs.MercuryCode.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 3, "firerate");
}}
if (gdjs.MercuryCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BlueEnemy1"), gdjs.MercuryCode.GDBlueEnemy1Objects1);
gdjs.copyArray(runtimeScene.getObjects("GreenLaser09"), gdjs.MercuryCode.GDGreenLaser09Objects1);
{for(var i = 0, len = gdjs.MercuryCode.GDBlueEnemy1Objects1.length ;i < len;++i) {
    gdjs.MercuryCode.GDBlueEnemy1Objects1[i].getBehavior("FireBullet").Fire((gdjs.MercuryCode.GDBlueEnemy1Objects1[i].getPointX("")), (gdjs.MercuryCode.GDBlueEnemy1Objects1[i].getPointY("")), gdjs.MercuryCode.mapOfGDgdjs_46MercuryCode_46GDGreenLaser09Objects1Objects, 90, 40, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "firerate");
}}

}


{


gdjs.MercuryCode.condition0IsTrue_0.val = false;
gdjs.MercuryCode.condition1IsTrue_0.val = false;
{
gdjs.MercuryCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(11)) == 3;
}if ( gdjs.MercuryCode.condition0IsTrue_0.val ) {
{
gdjs.MercuryCode.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 3, "firerate");
}}
if (gdjs.MercuryCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BlueEnemy1"), gdjs.MercuryCode.GDBlueEnemy1Objects1);
gdjs.copyArray(runtimeScene.getObjects("GreenLaser09"), gdjs.MercuryCode.GDGreenLaser09Objects1);
gdjs.copyArray(runtimeScene.getObjects("RedLaser08"), gdjs.MercuryCode.GDRedLaser08Objects1);
{for(var i = 0, len = gdjs.MercuryCode.GDBlueEnemy1Objects1.length ;i < len;++i) {
    gdjs.MercuryCode.GDBlueEnemy1Objects1[i].getBehavior("FireBullet").Fire((gdjs.MercuryCode.GDBlueEnemy1Objects1[i].getPointX("")), (gdjs.MercuryCode.GDBlueEnemy1Objects1[i].getPointY("")), gdjs.MercuryCode.mapOfGDgdjs_46MercuryCode_46GDGreenLaser09Objects1Objects, 90, 40, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.MercuryCode.GDBlueEnemy1Objects1.length ;i < len;++i) {
    gdjs.MercuryCode.GDBlueEnemy1Objects1[i].getBehavior("FireBullet").Fire((gdjs.MercuryCode.GDBlueEnemy1Objects1[i].getPointX("")), (gdjs.MercuryCode.GDBlueEnemy1Objects1[i].getPointY("")), gdjs.MercuryCode.mapOfGDgdjs_46MercuryCode_46GDRedLaser08Objects1Objects, 90, 100, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "firerate");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GreenLaser09"), gdjs.MercuryCode.GDGreenLaser09Objects1);
gdjs.copyArray(runtimeScene.getObjects("mercuryalienfloor"), gdjs.MercuryCode.GDmercuryalienfloorObjects1);

gdjs.MercuryCode.condition0IsTrue_0.val = false;
{
gdjs.MercuryCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MercuryCode.mapOfGDgdjs_46MercuryCode_46GDGreenLaser09Objects1Objects, gdjs.MercuryCode.mapOfGDgdjs_46MercuryCode_46GDmercuryalienfloorObjects1Objects, false, runtimeScene, false);
}if (gdjs.MercuryCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MercuryCode.GDGreenLaser09Objects1 */
{for(var i = 0, len = gdjs.MercuryCode.GDGreenLaser09Objects1.length ;i < len;++i) {
    gdjs.MercuryCode.GDGreenLaser09Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("RedLaser08"), gdjs.MercuryCode.GDRedLaser08Objects1);
gdjs.copyArray(runtimeScene.getObjects("mercuryalienfloor"), gdjs.MercuryCode.GDmercuryalienfloorObjects1);

gdjs.MercuryCode.condition0IsTrue_0.val = false;
{
gdjs.MercuryCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MercuryCode.mapOfGDgdjs_46MercuryCode_46GDRedLaser08Objects1Objects, gdjs.MercuryCode.mapOfGDgdjs_46MercuryCode_46GDmercuryalienfloorObjects1Objects, false, runtimeScene, false);
}if (gdjs.MercuryCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MercuryCode.GDRedLaser08Objects1 */
{for(var i = 0, len = gdjs.MercuryCode.GDRedLaser08Objects1.length ;i < len;++i) {
    gdjs.MercuryCode.GDRedLaser08Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GreenLaser09"), gdjs.MercuryCode.GDGreenLaser09Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.MercuryCode.GDPlayerObjects1);

gdjs.MercuryCode.condition0IsTrue_0.val = false;
gdjs.MercuryCode.condition1IsTrue_0.val = false;
{
gdjs.MercuryCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MercuryCode.mapOfGDgdjs_46MercuryCode_46GDGreenLaser09Objects1Objects, gdjs.MercuryCode.mapOfGDgdjs_46MercuryCode_46GDPlayerObjects1Objects, false, runtimeScene, false);
}if ( gdjs.MercuryCode.condition0IsTrue_0.val ) {
{
gdjs.MercuryCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) != 1;
}}
if (gdjs.MercuryCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).sub(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}{runtimeScene.getGame().getVariables().getFromIndex(1).sub(1);
}{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Mercury");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.MercuryCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("RedLaser08"), gdjs.MercuryCode.GDRedLaser08Objects1);

gdjs.MercuryCode.condition0IsTrue_0.val = false;
gdjs.MercuryCode.condition1IsTrue_0.val = false;
{
gdjs.MercuryCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MercuryCode.mapOfGDgdjs_46MercuryCode_46GDRedLaser08Objects1Objects, gdjs.MercuryCode.mapOfGDgdjs_46MercuryCode_46GDPlayerObjects1Objects, false, runtimeScene, false);
}if ( gdjs.MercuryCode.condition0IsTrue_0.val ) {
{
gdjs.MercuryCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) != 1;
}}
if (gdjs.MercuryCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).sub(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}{runtimeScene.getGame().getVariables().getFromIndex(1).sub(1);
}{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Mercury");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.MercuryCode.GDPlayerObjects1);

for(gdjs.MercuryCode.forEachIndex2 = 0;gdjs.MercuryCode.forEachIndex2 < gdjs.MercuryCode.GDPlayerObjects1.length;++gdjs.MercuryCode.forEachIndex2) {
gdjs.MercuryCode.GDPlayerObjects2.length = 0;


gdjs.MercuryCode.forEachTemporary2 = gdjs.MercuryCode.GDPlayerObjects1[gdjs.MercuryCode.forEachIndex2];
gdjs.MercuryCode.GDPlayerObjects2.push(gdjs.MercuryCode.forEachTemporary2);
gdjs.MercuryCode.condition0IsTrue_0.val = false;
{
gdjs.MercuryCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.MercuryCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(13).add(1);
}}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("mercuryalienfloor"), gdjs.MercuryCode.GDmercuryalienfloorObjects1);

for(gdjs.MercuryCode.forEachIndex2 = 0;gdjs.MercuryCode.forEachIndex2 < gdjs.MercuryCode.GDmercuryalienfloorObjects1.length;++gdjs.MercuryCode.forEachIndex2) {
gdjs.MercuryCode.GDmercuryalienfloorObjects2.length = 0;


gdjs.MercuryCode.forEachTemporary2 = gdjs.MercuryCode.GDmercuryalienfloorObjects1[gdjs.MercuryCode.forEachIndex2];
gdjs.MercuryCode.GDmercuryalienfloorObjects2.push(gdjs.MercuryCode.forEachTemporary2);
gdjs.MercuryCode.condition0IsTrue_0.val = false;
{
gdjs.MercuryCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.MercuryCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(13).add(1);
}}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("robotting"), gdjs.MercuryCode.GDrobottingObjects1);

for(gdjs.MercuryCode.forEachIndex2 = 0;gdjs.MercuryCode.forEachIndex2 < gdjs.MercuryCode.GDrobottingObjects1.length;++gdjs.MercuryCode.forEachIndex2) {
gdjs.MercuryCode.GDrobottingObjects2.length = 0;


gdjs.MercuryCode.forEachTemporary2 = gdjs.MercuryCode.GDrobottingObjects1[gdjs.MercuryCode.forEachIndex2];
gdjs.MercuryCode.GDrobottingObjects2.push(gdjs.MercuryCode.forEachTemporary2);
gdjs.MercuryCode.condition0IsTrue_0.val = false;
{
gdjs.MercuryCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.MercuryCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(13).add(1);
}}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("rocketplat"), gdjs.MercuryCode.GDrocketplatObjects1);

for(gdjs.MercuryCode.forEachIndex2 = 0;gdjs.MercuryCode.forEachIndex2 < gdjs.MercuryCode.GDrocketplatObjects1.length;++gdjs.MercuryCode.forEachIndex2) {
gdjs.MercuryCode.GDrocketplatObjects2.length = 0;


gdjs.MercuryCode.forEachTemporary2 = gdjs.MercuryCode.GDrocketplatObjects1[gdjs.MercuryCode.forEachIndex2];
gdjs.MercuryCode.GDrocketplatObjects2.push(gdjs.MercuryCode.forEachTemporary2);
gdjs.MercuryCode.condition0IsTrue_0.val = false;
{
gdjs.MercuryCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.MercuryCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(13).add(1);
}}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlueEnemy1"), gdjs.MercuryCode.GDBlueEnemy1Objects1);

for(gdjs.MercuryCode.forEachIndex2 = 0;gdjs.MercuryCode.forEachIndex2 < gdjs.MercuryCode.GDBlueEnemy1Objects1.length;++gdjs.MercuryCode.forEachIndex2) {
gdjs.MercuryCode.GDBlueEnemy1Objects2.length = 0;


gdjs.MercuryCode.forEachTemporary2 = gdjs.MercuryCode.GDBlueEnemy1Objects1[gdjs.MercuryCode.forEachIndex2];
gdjs.MercuryCode.GDBlueEnemy1Objects2.push(gdjs.MercuryCode.forEachTemporary2);
gdjs.MercuryCode.condition0IsTrue_0.val = false;
{
gdjs.MercuryCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.MercuryCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(13).add(1);
}}
}

}


{


gdjs.MercuryCode.condition0IsTrue_0.val = false;
{
gdjs.MercuryCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "m");
}if (gdjs.MercuryCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(16).setNumber(0);
}
{ //Subevents
gdjs.MercuryCode.eventsList15(runtimeScene);} //End of subevents
}

}


{


gdjs.MercuryCode.condition0IsTrue_0.val = false;
{
gdjs.MercuryCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "F1");
}if (gdjs.MercuryCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(15).setNumber(0);
}
{ //Subevents
gdjs.MercuryCode.eventsList16(runtimeScene);} //End of subevents
}

}


};

gdjs.MercuryCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MercuryCode.GDPlayerObjects1.length = 0;
gdjs.MercuryCode.GDPlayerObjects2.length = 0;
gdjs.MercuryCode.GDPlayerObjects3.length = 0;
gdjs.MercuryCode.GDmercuryalienfloorObjects1.length = 0;
gdjs.MercuryCode.GDmercuryalienfloorObjects2.length = 0;
gdjs.MercuryCode.GDmercuryalienfloorObjects3.length = 0;
gdjs.MercuryCode.GDrocketplatObjects1.length = 0;
gdjs.MercuryCode.GDrocketplatObjects2.length = 0;
gdjs.MercuryCode.GDrocketplatObjects3.length = 0;
gdjs.MercuryCode.GDboltObjects1.length = 0;
gdjs.MercuryCode.GDboltObjects2.length = 0;
gdjs.MercuryCode.GDboltObjects3.length = 0;
gdjs.MercuryCode.GDscoreObjects1.length = 0;
gdjs.MercuryCode.GDscoreObjects2.length = 0;
gdjs.MercuryCode.GDscoreObjects3.length = 0;
gdjs.MercuryCode.GDliveObjects1.length = 0;
gdjs.MercuryCode.GDliveObjects2.length = 0;
gdjs.MercuryCode.GDliveObjects3.length = 0;
gdjs.MercuryCode.GDlivesObjects1.length = 0;
gdjs.MercuryCode.GDlivesObjects2.length = 0;
gdjs.MercuryCode.GDlivesObjects3.length = 0;
gdjs.MercuryCode.GDrobottingObjects1.length = 0;
gdjs.MercuryCode.GDrobottingObjects2.length = 0;
gdjs.MercuryCode.GDrobottingObjects3.length = 0;
gdjs.MercuryCode.GDleftObjects1.length = 0;
gdjs.MercuryCode.GDleftObjects2.length = 0;
gdjs.MercuryCode.GDleftObjects3.length = 0;
gdjs.MercuryCode.GDrightObjects1.length = 0;
gdjs.MercuryCode.GDrightObjects2.length = 0;
gdjs.MercuryCode.GDrightObjects3.length = 0;
gdjs.MercuryCode.GDcrashedshipObjects1.length = 0;
gdjs.MercuryCode.GDcrashedshipObjects2.length = 0;
gdjs.MercuryCode.GDcrashedshipObjects3.length = 0;
gdjs.MercuryCode.GDnotcompleteObjects1.length = 0;
gdjs.MercuryCode.GDnotcompleteObjects2.length = 0;
gdjs.MercuryCode.GDnotcompleteObjects3.length = 0;
gdjs.MercuryCode.GDendObjects1.length = 0;
gdjs.MercuryCode.GDendObjects2.length = 0;
gdjs.MercuryCode.GDendObjects3.length = 0;
gdjs.MercuryCode.GDtimerObjects1.length = 0;
gdjs.MercuryCode.GDtimerObjects2.length = 0;
gdjs.MercuryCode.GDtimerObjects3.length = 0;
gdjs.MercuryCode.GDcheatsObjects1.length = 0;
gdjs.MercuryCode.GDcheatsObjects2.length = 0;
gdjs.MercuryCode.GDcheatsObjects3.length = 0;
gdjs.MercuryCode.GDBlueEnemy1Objects1.length = 0;
gdjs.MercuryCode.GDBlueEnemy1Objects2.length = 0;
gdjs.MercuryCode.GDBlueEnemy1Objects3.length = 0;
gdjs.MercuryCode.GDRedLaser08Objects1.length = 0;
gdjs.MercuryCode.GDRedLaser08Objects2.length = 0;
gdjs.MercuryCode.GDRedLaser08Objects3.length = 0;
gdjs.MercuryCode.GDGreenLaser09Objects1.length = 0;
gdjs.MercuryCode.GDGreenLaser09Objects2.length = 0;
gdjs.MercuryCode.GDGreenLaser09Objects3.length = 0;
gdjs.MercuryCode.GDfpsObjects1.length = 0;
gdjs.MercuryCode.GDfpsObjects2.length = 0;
gdjs.MercuryCode.GDfpsObjects3.length = 0;
gdjs.MercuryCode.GDNewObjectObjects1.length = 0;
gdjs.MercuryCode.GDNewObjectObjects2.length = 0;
gdjs.MercuryCode.GDNewObjectObjects3.length = 0;
gdjs.MercuryCode.GDgamelifeObjects1.length = 0;
gdjs.MercuryCode.GDgamelifeObjects2.length = 0;
gdjs.MercuryCode.GDgamelifeObjects3.length = 0;
gdjs.MercuryCode.GDNewObject2Objects1.length = 0;
gdjs.MercuryCode.GDNewObject2Objects2.length = 0;
gdjs.MercuryCode.GDNewObject2Objects3.length = 0;
gdjs.MercuryCode.GDNewObject3Objects1.length = 0;
gdjs.MercuryCode.GDNewObject3Objects2.length = 0;
gdjs.MercuryCode.GDNewObject3Objects3.length = 0;

gdjs.MercuryCode.eventsList17(runtimeScene);
return;

}

gdjs['MercuryCode'] = gdjs.MercuryCode;
