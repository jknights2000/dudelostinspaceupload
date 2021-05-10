gdjs.VenusCode = {};
gdjs.VenusCode.forEachIndex2 = 0;

gdjs.VenusCode.forEachIndex3 = 0;

gdjs.VenusCode.forEachObjects2 = [];

gdjs.VenusCode.forEachObjects3 = [];

gdjs.VenusCode.forEachTemporary2 = null;

gdjs.VenusCode.forEachTemporary3 = null;

gdjs.VenusCode.forEachTotalCount2 = 0;

gdjs.VenusCode.forEachTotalCount3 = 0;

gdjs.VenusCode.GDPlayerObjects1= [];
gdjs.VenusCode.GDPlayerObjects2= [];
gdjs.VenusCode.GDPlayerObjects3= [];
gdjs.VenusCode.GDalienfloorObjects1= [];
gdjs.VenusCode.GDalienfloorObjects2= [];
gdjs.VenusCode.GDalienfloorObjects3= [];
gdjs.VenusCode.GDrocketplatObjects1= [];
gdjs.VenusCode.GDrocketplatObjects2= [];
gdjs.VenusCode.GDrocketplatObjects3= [];
gdjs.VenusCode.GDcloudObjects1= [];
gdjs.VenusCode.GDcloudObjects2= [];
gdjs.VenusCode.GDcloudObjects3= [];
gdjs.VenusCode.GDboltObjects1= [];
gdjs.VenusCode.GDboltObjects2= [];
gdjs.VenusCode.GDboltObjects3= [];
gdjs.VenusCode.GDscoreObjects1= [];
gdjs.VenusCode.GDscoreObjects2= [];
gdjs.VenusCode.GDscoreObjects3= [];
gdjs.VenusCode.GDliveObjects1= [];
gdjs.VenusCode.GDliveObjects2= [];
gdjs.VenusCode.GDliveObjects3= [];
gdjs.VenusCode.GDlivesObjects1= [];
gdjs.VenusCode.GDlivesObjects2= [];
gdjs.VenusCode.GDlivesObjects3= [];
gdjs.VenusCode.GDrobottingObjects1= [];
gdjs.VenusCode.GDrobottingObjects2= [];
gdjs.VenusCode.GDrobottingObjects3= [];
gdjs.VenusCode.GDleftObjects1= [];
gdjs.VenusCode.GDleftObjects2= [];
gdjs.VenusCode.GDleftObjects3= [];
gdjs.VenusCode.GDrightObjects1= [];
gdjs.VenusCode.GDrightObjects2= [];
gdjs.VenusCode.GDrightObjects3= [];
gdjs.VenusCode.GDcrashedshipObjects1= [];
gdjs.VenusCode.GDcrashedshipObjects2= [];
gdjs.VenusCode.GDcrashedshipObjects3= [];
gdjs.VenusCode.GDnotcompleteObjects1= [];
gdjs.VenusCode.GDnotcompleteObjects2= [];
gdjs.VenusCode.GDnotcompleteObjects3= [];
gdjs.VenusCode.GDendObjects1= [];
gdjs.VenusCode.GDendObjects2= [];
gdjs.VenusCode.GDendObjects3= [];
gdjs.VenusCode.GDtimerObjects1= [];
gdjs.VenusCode.GDtimerObjects2= [];
gdjs.VenusCode.GDtimerObjects3= [];
gdjs.VenusCode.GDcheatsObjects1= [];
gdjs.VenusCode.GDcheatsObjects2= [];
gdjs.VenusCode.GDcheatsObjects3= [];
gdjs.VenusCode.GDBlueEnemy1Objects1= [];
gdjs.VenusCode.GDBlueEnemy1Objects2= [];
gdjs.VenusCode.GDBlueEnemy1Objects3= [];
gdjs.VenusCode.GDRedLaser08Objects1= [];
gdjs.VenusCode.GDRedLaser08Objects2= [];
gdjs.VenusCode.GDRedLaser08Objects3= [];
gdjs.VenusCode.GDGreenLaser09Objects1= [];
gdjs.VenusCode.GDGreenLaser09Objects2= [];
gdjs.VenusCode.GDGreenLaser09Objects3= [];
gdjs.VenusCode.GDNewObjectObjects1= [];
gdjs.VenusCode.GDNewObjectObjects2= [];
gdjs.VenusCode.GDNewObjectObjects3= [];
gdjs.VenusCode.GDgamelifeObjects1= [];
gdjs.VenusCode.GDgamelifeObjects2= [];
gdjs.VenusCode.GDgamelifeObjects3= [];
gdjs.VenusCode.GDfpsObjects1= [];
gdjs.VenusCode.GDfpsObjects2= [];
gdjs.VenusCode.GDfpsObjects3= [];
gdjs.VenusCode.GDNewObject2Objects1= [];
gdjs.VenusCode.GDNewObject2Objects2= [];
gdjs.VenusCode.GDNewObject2Objects3= [];
gdjs.VenusCode.GDNewObject3Objects1= [];
gdjs.VenusCode.GDNewObject3Objects2= [];
gdjs.VenusCode.GDNewObject3Objects3= [];

gdjs.VenusCode.conditionTrue_0 = {val:false};
gdjs.VenusCode.condition0IsTrue_0 = {val:false};
gdjs.VenusCode.condition1IsTrue_0 = {val:false};
gdjs.VenusCode.condition2IsTrue_0 = {val:false};
gdjs.VenusCode.condition3IsTrue_0 = {val:false};
gdjs.VenusCode.conditionTrue_1 = {val:false};
gdjs.VenusCode.condition0IsTrue_1 = {val:false};
gdjs.VenusCode.condition1IsTrue_1 = {val:false};
gdjs.VenusCode.condition2IsTrue_1 = {val:false};
gdjs.VenusCode.condition3IsTrue_1 = {val:false};


gdjs.VenusCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.VenusCode.GDPlayerObjects1, gdjs.VenusCode.GDPlayerObjects2);


gdjs.VenusCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.VenusCode.GDPlayerObjects2.length;i<l;++i) {
    if ( !(gdjs.VenusCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.VenusCode.condition0IsTrue_0.val = true;
        gdjs.VenusCode.GDPlayerObjects2[k] = gdjs.VenusCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.VenusCode.GDPlayerObjects2.length = k;}if (gdjs.VenusCode.condition0IsTrue_0.val) {
/* Reuse gdjs.VenusCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.VenusCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.VenusCode.GDPlayerObjects2[i].setAnimationName("stand");
}
}}

}


{

gdjs.copyArray(gdjs.VenusCode.GDPlayerObjects1, gdjs.VenusCode.GDPlayerObjects2);


gdjs.VenusCode.condition0IsTrue_0.val = false;
gdjs.VenusCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.VenusCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.VenusCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.VenusCode.condition0IsTrue_0.val = true;
        gdjs.VenusCode.GDPlayerObjects2[k] = gdjs.VenusCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.VenusCode.GDPlayerObjects2.length = k;}if ( gdjs.VenusCode.condition0IsTrue_0.val ) {
{
gdjs.VenusCode.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}}
if (gdjs.VenusCode.condition1IsTrue_0.val) {
/* Reuse gdjs.VenusCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.VenusCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.VenusCode.GDPlayerObjects2[i].setAnimationName("run");
}
}{for(var i = 0, len = gdjs.VenusCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.VenusCode.GDPlayerObjects2[i].playAnimation();
}
}{for(var i = 0, len = gdjs.VenusCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.VenusCode.GDPlayerObjects2[i].flipX(false);
}
}}

}


{

/* Reuse gdjs.VenusCode.GDPlayerObjects1 */

gdjs.VenusCode.condition0IsTrue_0.val = false;
gdjs.VenusCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.VenusCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.VenusCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.VenusCode.condition0IsTrue_0.val = true;
        gdjs.VenusCode.GDPlayerObjects1[k] = gdjs.VenusCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.VenusCode.GDPlayerObjects1.length = k;}if ( gdjs.VenusCode.condition0IsTrue_0.val ) {
{
gdjs.VenusCode.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}}
if (gdjs.VenusCode.condition1IsTrue_0.val) {
/* Reuse gdjs.VenusCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.VenusCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.VenusCode.GDPlayerObjects1[i].setAnimationName("run");
}
}{for(var i = 0, len = gdjs.VenusCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.VenusCode.GDPlayerObjects1[i].playAnimation();
}
}{for(var i = 0, len = gdjs.VenusCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.VenusCode.GDPlayerObjects1[i].flipX(true);
}
}}

}


};gdjs.VenusCode.mapOfGDgdjs_46VenusCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.VenusCode.GDPlayerObjects1});gdjs.VenusCode.mapOfGDgdjs_46VenusCode_46GDboltObjects1Objects = Hashtable.newFrom({"bolt": gdjs.VenusCode.GDboltObjects1});gdjs.VenusCode.eventsList1 = function(runtimeScene) {

{


gdjs.VenusCode.condition0IsTrue_0.val = false;
{
gdjs.VenusCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(17)) == 0;
}if (gdjs.VenusCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "66136__aji__ding30603-spedup.wav", false, 5, 1);
}}

}


};gdjs.VenusCode.mapOfGDgdjs_46VenusCode_46GDBlueEnemy1Objects1Objects = Hashtable.newFrom({"BlueEnemy1": gdjs.VenusCode.GDBlueEnemy1Objects1});gdjs.VenusCode.mapOfGDgdjs_46VenusCode_46GDleftObjects1Objects = Hashtable.newFrom({"left": gdjs.VenusCode.GDleftObjects1});gdjs.VenusCode.mapOfGDgdjs_46VenusCode_46GDBlueEnemy1Objects1Objects = Hashtable.newFrom({"BlueEnemy1": gdjs.VenusCode.GDBlueEnemy1Objects1});gdjs.VenusCode.mapOfGDgdjs_46VenusCode_46GDrightObjects1Objects = Hashtable.newFrom({"right": gdjs.VenusCode.GDrightObjects1});gdjs.VenusCode.mapOfGDgdjs_46VenusCode_46GDrobottingObjects1Objects = Hashtable.newFrom({"robotting": gdjs.VenusCode.GDrobottingObjects1});gdjs.VenusCode.mapOfGDgdjs_46VenusCode_46GDleftObjects1Objects = Hashtable.newFrom({"left": gdjs.VenusCode.GDleftObjects1});gdjs.VenusCode.mapOfGDgdjs_46VenusCode_46GDrobottingObjects1Objects = Hashtable.newFrom({"robotting": gdjs.VenusCode.GDrobottingObjects1});gdjs.VenusCode.mapOfGDgdjs_46VenusCode_46GDrightObjects1Objects = Hashtable.newFrom({"right": gdjs.VenusCode.GDrightObjects1});gdjs.VenusCode.eventsList2 = function(runtimeScene) {

};gdjs.VenusCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("bolt"), gdjs.VenusCode.GDboltObjects1);

for(gdjs.VenusCode.forEachIndex2 = 0;gdjs.VenusCode.forEachIndex2 < gdjs.VenusCode.GDboltObjects1.length;++gdjs.VenusCode.forEachIndex2) {
gdjs.VenusCode.GDboltObjects2.length = 0;


gdjs.VenusCode.forEachTemporary2 = gdjs.VenusCode.GDboltObjects1[gdjs.VenusCode.forEachIndex2];
gdjs.VenusCode.GDboltObjects2.push(gdjs.VenusCode.forEachTemporary2);
gdjs.VenusCode.condition0IsTrue_0.val = false;
{
gdjs.VenusCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.VenusCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(4).add(1);
}}
}

}


};gdjs.VenusCode.mapOfGDgdjs_46VenusCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.VenusCode.GDPlayerObjects1});gdjs.VenusCode.mapOfGDgdjs_46VenusCode_46GDrobottingObjects1Objects = Hashtable.newFrom({"robotting": gdjs.VenusCode.GDrobottingObjects1});gdjs.VenusCode.mapOfGDgdjs_46VenusCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.VenusCode.GDPlayerObjects1});gdjs.VenusCode.mapOfGDgdjs_46VenusCode_46GDBlueEnemy1Objects1Objects = Hashtable.newFrom({"BlueEnemy1": gdjs.VenusCode.GDBlueEnemy1Objects1});gdjs.VenusCode.mapOfGDgdjs_46VenusCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.VenusCode.GDPlayerObjects1});gdjs.VenusCode.mapOfGDgdjs_46VenusCode_46GDrobottingObjects1Objects = Hashtable.newFrom({"robotting": gdjs.VenusCode.GDrobottingObjects1});gdjs.VenusCode.mapOfGDgdjs_46VenusCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.VenusCode.GDPlayerObjects1});gdjs.VenusCode.mapOfGDgdjs_46VenusCode_46GDcrashedshipObjects1Objects = Hashtable.newFrom({"crashedship": gdjs.VenusCode.GDcrashedshipObjects1});gdjs.VenusCode.mapOfGDgdjs_46VenusCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.VenusCode.GDPlayerObjects1});gdjs.VenusCode.mapOfGDgdjs_46VenusCode_46GDcrashedshipObjects1Objects = Hashtable.newFrom({"crashedship": gdjs.VenusCode.GDcrashedshipObjects1});gdjs.VenusCode.mapOfGDgdjs_46VenusCode_46GDcrashedshipObjects1Objects = Hashtable.newFrom({"crashedship": gdjs.VenusCode.GDcrashedshipObjects1});gdjs.VenusCode.mapOfGDgdjs_46VenusCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.VenusCode.GDPlayerObjects1});gdjs.VenusCode.mapOfGDgdjs_46VenusCode_46GDcrashedshipObjects1Objects = Hashtable.newFrom({"crashedship": gdjs.VenusCode.GDcrashedshipObjects1});gdjs.VenusCode.mapOfGDgdjs_46VenusCode_46GDendObjects1Objects = Hashtable.newFrom({"end": gdjs.VenusCode.GDendObjects1});gdjs.VenusCode.mapOfGDgdjs_46VenusCode_46GDrobottingObjects1Objects = Hashtable.newFrom({"robotting": gdjs.VenusCode.GDrobottingObjects1});gdjs.VenusCode.mapOfGDgdjs_46VenusCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.VenusCode.GDPlayerObjects1});gdjs.VenusCode.mapOfGDgdjs_46VenusCode_46GDBlueEnemy1Objects1Objects = Hashtable.newFrom({"BlueEnemy1": gdjs.VenusCode.GDBlueEnemy1Objects1});gdjs.VenusCode.mapOfGDgdjs_46VenusCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.VenusCode.GDPlayerObjects1});gdjs.VenusCode.eventsList4 = function(runtimeScene) {

};gdjs.VenusCode.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("bolt"), gdjs.VenusCode.GDboltObjects1);

for(gdjs.VenusCode.forEachIndex2 = 0;gdjs.VenusCode.forEachIndex2 < gdjs.VenusCode.GDboltObjects1.length;++gdjs.VenusCode.forEachIndex2) {
gdjs.VenusCode.GDboltObjects2.length = 0;


gdjs.VenusCode.forEachTemporary2 = gdjs.VenusCode.GDboltObjects1[gdjs.VenusCode.forEachIndex2];
gdjs.VenusCode.GDboltObjects2.push(gdjs.VenusCode.forEachTemporary2);
if (true) {
{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}{for(var i = 0, len = gdjs.VenusCode.GDboltObjects2.length ;i < len;++i) {
    gdjs.VenusCode.GDboltObjects2[i].deleteFromScene(runtimeScene);
}
}}
}

}


};gdjs.VenusCode.eventsList6 = function(runtimeScene) {

};gdjs.VenusCode.eventsList7 = function(runtimeScene) {

};gdjs.VenusCode.eventsList8 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("robotting"), gdjs.VenusCode.GDrobottingObjects2);

for(gdjs.VenusCode.forEachIndex3 = 0;gdjs.VenusCode.forEachIndex3 < gdjs.VenusCode.GDrobottingObjects2.length;++gdjs.VenusCode.forEachIndex3) {
gdjs.VenusCode.GDrobottingObjects3.length = 0;


gdjs.VenusCode.forEachTemporary3 = gdjs.VenusCode.GDrobottingObjects2[gdjs.VenusCode.forEachIndex3];
gdjs.VenusCode.GDrobottingObjects3.push(gdjs.VenusCode.forEachTemporary3);
if (true) {
{for(var i = 0, len = gdjs.VenusCode.GDrobottingObjects3.length ;i < len;++i) {
    gdjs.VenusCode.GDrobottingObjects3[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(13).sub(1);
}}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlueEnemy1"), gdjs.VenusCode.GDBlueEnemy1Objects1);

for(gdjs.VenusCode.forEachIndex2 = 0;gdjs.VenusCode.forEachIndex2 < gdjs.VenusCode.GDBlueEnemy1Objects1.length;++gdjs.VenusCode.forEachIndex2) {
gdjs.VenusCode.GDBlueEnemy1Objects2.length = 0;


gdjs.VenusCode.forEachTemporary2 = gdjs.VenusCode.GDBlueEnemy1Objects1[gdjs.VenusCode.forEachIndex2];
gdjs.VenusCode.GDBlueEnemy1Objects2.push(gdjs.VenusCode.forEachTemporary2);
if (true) {
{for(var i = 0, len = gdjs.VenusCode.GDBlueEnemy1Objects2.length ;i < len;++i) {
    gdjs.VenusCode.GDBlueEnemy1Objects2[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(13).sub(1);
}}
}

}


};gdjs.VenusCode.mapOfGDgdjs_46VenusCode_46GDRedLaser08Objects1Objects = Hashtable.newFrom({"RedLaser08": gdjs.VenusCode.GDRedLaser08Objects1});gdjs.VenusCode.mapOfGDgdjs_46VenusCode_46GDGreenLaser09Objects1Objects = Hashtable.newFrom({"GreenLaser09": gdjs.VenusCode.GDGreenLaser09Objects1});gdjs.VenusCode.mapOfGDgdjs_46VenusCode_46GDGreenLaser09Objects1Objects = Hashtable.newFrom({"GreenLaser09": gdjs.VenusCode.GDGreenLaser09Objects1});gdjs.VenusCode.mapOfGDgdjs_46VenusCode_46GDRedLaser08Objects1Objects = Hashtable.newFrom({"RedLaser08": gdjs.VenusCode.GDRedLaser08Objects1});gdjs.VenusCode.mapOfGDgdjs_46VenusCode_46GDGreenLaser09Objects1Objects = Hashtable.newFrom({"GreenLaser09": gdjs.VenusCode.GDGreenLaser09Objects1});gdjs.VenusCode.mapOfGDgdjs_46VenusCode_46GDalienfloorObjects1Objects = Hashtable.newFrom({"alienfloor": gdjs.VenusCode.GDalienfloorObjects1});gdjs.VenusCode.mapOfGDgdjs_46VenusCode_46GDRedLaser08Objects1Objects = Hashtable.newFrom({"RedLaser08": gdjs.VenusCode.GDRedLaser08Objects1});gdjs.VenusCode.mapOfGDgdjs_46VenusCode_46GDalienfloorObjects1Objects = Hashtable.newFrom({"alienfloor": gdjs.VenusCode.GDalienfloorObjects1});gdjs.VenusCode.mapOfGDgdjs_46VenusCode_46GDGreenLaser09Objects1Objects = Hashtable.newFrom({"GreenLaser09": gdjs.VenusCode.GDGreenLaser09Objects1});gdjs.VenusCode.mapOfGDgdjs_46VenusCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.VenusCode.GDPlayerObjects1});gdjs.VenusCode.mapOfGDgdjs_46VenusCode_46GDRedLaser08Objects1Objects = Hashtable.newFrom({"RedLaser08": gdjs.VenusCode.GDRedLaser08Objects1});gdjs.VenusCode.mapOfGDgdjs_46VenusCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.VenusCode.GDPlayerObjects1});gdjs.VenusCode.eventsList9 = function(runtimeScene) {

};gdjs.VenusCode.eventsList10 = function(runtimeScene) {

};gdjs.VenusCode.eventsList11 = function(runtimeScene) {

};gdjs.VenusCode.eventsList12 = function(runtimeScene) {

};gdjs.VenusCode.eventsList13 = function(runtimeScene) {

};gdjs.VenusCode.eventsList14 = function(runtimeScene) {

{


gdjs.VenusCode.condition0IsTrue_0.val = false;
gdjs.VenusCode.condition1IsTrue_0.val = false;
{
gdjs.VenusCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(16)) == 0;
}if ( gdjs.VenusCode.condition0IsTrue_0.val ) {
{
gdjs.VenusCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(17)) == 0;
}}
if (gdjs.VenusCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(16).setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(17).setNumber(1);
}}

}


{


gdjs.VenusCode.condition0IsTrue_0.val = false;
gdjs.VenusCode.condition1IsTrue_0.val = false;
{
gdjs.VenusCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(16)) == 0;
}if ( gdjs.VenusCode.condition0IsTrue_0.val ) {
{
gdjs.VenusCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(17)) == 1;
}}
if (gdjs.VenusCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(16).setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(17).setNumber(0);
}}

}


};gdjs.VenusCode.eventsList15 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("fps"), gdjs.VenusCode.GDfpsObjects2);

gdjs.VenusCode.condition0IsTrue_0.val = false;
gdjs.VenusCode.condition1IsTrue_0.val = false;
{
gdjs.VenusCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(15)) == 0;
}if ( gdjs.VenusCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.VenusCode.GDfpsObjects2.length;i<l;++i) {
    if ( !(gdjs.VenusCode.GDfpsObjects2[i].isVisible()) ) {
        gdjs.VenusCode.condition1IsTrue_0.val = true;
        gdjs.VenusCode.GDfpsObjects2[k] = gdjs.VenusCode.GDfpsObjects2[i];
        ++k;
    }
}
gdjs.VenusCode.GDfpsObjects2.length = k;}}
if (gdjs.VenusCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.VenusCode.GDNewObjectObjects2);
gdjs.copyArray(runtimeScene.getObjects("cheats"), gdjs.VenusCode.GDcheatsObjects2);
/* Reuse gdjs.VenusCode.GDfpsObjects2 */
gdjs.copyArray(runtimeScene.getObjects("gamelife"), gdjs.VenusCode.GDgamelifeObjects2);
{for(var i = 0, len = gdjs.VenusCode.GDfpsObjects2.length ;i < len;++i) {
    gdjs.VenusCode.GDfpsObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.VenusCode.GDNewObjectObjects2.length ;i < len;++i) {
    gdjs.VenusCode.GDNewObjectObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.VenusCode.GDgamelifeObjects2.length ;i < len;++i) {
    gdjs.VenusCode.GDgamelifeObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.VenusCode.GDcheatsObjects2.length ;i < len;++i) {
    gdjs.VenusCode.GDcheatsObjects2[i].hide(false);
}
}{runtimeScene.getGame().getVariables().getFromIndex(15).setNumber(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("fps"), gdjs.VenusCode.GDfpsObjects1);

gdjs.VenusCode.condition0IsTrue_0.val = false;
gdjs.VenusCode.condition1IsTrue_0.val = false;
{
gdjs.VenusCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(15)) == 0;
}if ( gdjs.VenusCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.VenusCode.GDfpsObjects1.length;i<l;++i) {
    if ( gdjs.VenusCode.GDfpsObjects1[i].isVisible() ) {
        gdjs.VenusCode.condition1IsTrue_0.val = true;
        gdjs.VenusCode.GDfpsObjects1[k] = gdjs.VenusCode.GDfpsObjects1[i];
        ++k;
    }
}
gdjs.VenusCode.GDfpsObjects1.length = k;}}
if (gdjs.VenusCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.VenusCode.GDNewObjectObjects1);
/* Reuse gdjs.VenusCode.GDfpsObjects1 */
gdjs.copyArray(runtimeScene.getObjects("gamelife"), gdjs.VenusCode.GDgamelifeObjects1);
{for(var i = 0, len = gdjs.VenusCode.GDfpsObjects1.length ;i < len;++i) {
    gdjs.VenusCode.GDfpsObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.VenusCode.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.VenusCode.GDNewObjectObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.VenusCode.GDgamelifeObjects1.length ;i < len;++i) {
    gdjs.VenusCode.GDgamelifeObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.VenusCode.GDfpsObjects1.length ;i < len;++i) {
    gdjs.VenusCode.GDfpsObjects1[i].hide();
}
}{runtimeScene.getGame().getVariables().getFromIndex(15).setNumber(1);
}}

}


};gdjs.VenusCode.eventsList16 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.VenusCode.GDPlayerObjects1);

gdjs.VenusCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.VenusCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.VenusCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.VenusCode.condition0IsTrue_0.val = true;
        gdjs.VenusCode.GDPlayerObjects1[k] = gdjs.VenusCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.VenusCode.GDPlayerObjects1.length = k;}if (gdjs.VenusCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.VenusCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.VenusCode.GDPlayerObjects1);

gdjs.VenusCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.VenusCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.VenusCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.VenusCode.condition0IsTrue_0.val = true;
        gdjs.VenusCode.GDPlayerObjects1[k] = gdjs.VenusCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.VenusCode.GDPlayerObjects1.length = k;}if (gdjs.VenusCode.condition0IsTrue_0.val) {
/* Reuse gdjs.VenusCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.VenusCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.VenusCode.GDPlayerObjects1[i].setAnimationName("jump");
}
}{runtimeScene.getGame().getVariables().getFromIndex(3).setString("none");
}{for(var i = 0, len = gdjs.VenusCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.VenusCode.GDPlayerObjects1[i].clearForces();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.VenusCode.GDPlayerObjects1);

gdjs.VenusCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.VenusCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.VenusCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.VenusCode.condition0IsTrue_0.val = true;
        gdjs.VenusCode.GDPlayerObjects1[k] = gdjs.VenusCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.VenusCode.GDPlayerObjects1.length = k;}if (gdjs.VenusCode.condition0IsTrue_0.val) {
/* Reuse gdjs.VenusCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.VenusCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.VenusCode.GDPlayerObjects1[i].setAnimationName("jump");
}
}}

}


{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.VenusCode.GDPlayerObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.VenusCode.GDPlayerObjects1.length !== 0 ? gdjs.VenusCode.GDPlayerObjects1[0] : null), false, "", 0);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("rocketplat"), gdjs.VenusCode.GDrocketplatObjects1);
{for(var i = 0, len = gdjs.VenusCode.GDrocketplatObjects1.length ;i < len;++i) {
    gdjs.VenusCode.GDrocketplatObjects1[i].setZOrder(1);
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("cloud"), gdjs.VenusCode.GDcloudObjects1);
gdjs.copyArray(runtimeScene.getObjects("crashedship"), gdjs.VenusCode.GDcrashedshipObjects1);
{for(var i = 0, len = gdjs.VenusCode.GDcloudObjects1.length ;i < len;++i) {
    gdjs.VenusCode.GDcloudObjects1[i].setZOrder(-(2));
}
}{for(var i = 0, len = gdjs.VenusCode.GDcrashedshipObjects1.length ;i < len;++i) {
    gdjs.VenusCode.GDcrashedshipObjects1[i].setZOrder(1);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.VenusCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("bolt"), gdjs.VenusCode.GDboltObjects1);

gdjs.VenusCode.condition0IsTrue_0.val = false;
{
gdjs.VenusCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.VenusCode.mapOfGDgdjs_46VenusCode_46GDPlayerObjects1Objects, gdjs.VenusCode.mapOfGDgdjs_46VenusCode_46GDboltObjects1Objects, false, runtimeScene, false);
}if (gdjs.VenusCode.condition0IsTrue_0.val) {
/* Reuse gdjs.VenusCode.GDboltObjects1 */
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.VenusCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.VenusCode.GDboltObjects1.length ;i < len;++i) {
    gdjs.VenusCode.GDboltObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}{for(var i = 0, len = gdjs.VenusCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.VenusCode.GDscoreObjects1[i].setString("Score:" + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0))));
}
}
{ //Subevents
gdjs.VenusCode.eventsList1(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.VenusCode.condition0IsTrue_0.val = false;
{
gdjs.VenusCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "f");
}if (gdjs.VenusCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}}

}


{


gdjs.VenusCode.condition0IsTrue_0.val = false;
{
gdjs.VenusCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Escape");
}if (gdjs.VenusCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, false, true);
}}

}


{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.VenusCode.GDNewObjectObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.VenusCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("cheats"), gdjs.VenusCode.GDcheatsObjects1);
gdjs.copyArray(runtimeScene.getObjects("fps"), gdjs.VenusCode.GDfpsObjects1);
gdjs.copyArray(runtimeScene.getObjects("gamelife"), gdjs.VenusCode.GDgamelifeObjects1);
gdjs.copyArray(runtimeScene.getObjects("live"), gdjs.VenusCode.GDliveObjects1);
gdjs.copyArray(runtimeScene.getObjects("lives"), gdjs.VenusCode.GDlivesObjects1);
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.VenusCode.GDscoreObjects1);
gdjs.copyArray(runtimeScene.getObjects("timer"), gdjs.VenusCode.GDtimerObjects1);
{for(var i = 0, len = gdjs.VenusCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.VenusCode.GDscoreObjects1[i].setString("Amount of bolts " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0))) + "/ " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4))));
}
}{for(var i = 0, len = gdjs.VenusCode.GDlivesObjects1.length ;i < len;++i) {
    gdjs.VenusCode.GDlivesObjects1[i].setString("X" + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1))));
}
}{for(var i = 0, len = gdjs.VenusCode.GDtimerObjects1.length ;i < len;++i) {
    gdjs.VenusCode.GDtimerObjects1[i].setString("Time: " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9))));
}
}{for(var i = 0, len = gdjs.VenusCode.GDfpsObjects1.length ;i < len;++i) {
    gdjs.VenusCode.GDfpsObjects1[i].setString(gdjs.evtTools.common.toString(Math.round(1 / gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene))) + "fps");
}
}{for(var i = 0, len = gdjs.VenusCode.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.VenusCode.GDNewObjectObjects1[i].setString("no of objects : " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(13))));
}
}{for(var i = 0, len = gdjs.VenusCode.GDgamelifeObjects1.length ;i < len;++i) {
    gdjs.VenusCode.GDgamelifeObjects1[i].setString("Total Game time = " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(14))));
}
}{for(var i = 0, len = gdjs.VenusCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.VenusCode.GDscoreObjects1[i].setX((( gdjs.VenusCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.VenusCode.GDPlayerObjects1[0].getPointX("")) - 200);
}
}{for(var i = 0, len = gdjs.VenusCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.VenusCode.GDscoreObjects1[i].setY((( gdjs.VenusCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.VenusCode.GDPlayerObjects1[0].getPointY("")) - 200);
}
}{for(var i = 0, len = gdjs.VenusCode.GDlivesObjects1.length ;i < len;++i) {
    gdjs.VenusCode.GDlivesObjects1[i].setX((( gdjs.VenusCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.VenusCode.GDPlayerObjects1[0].getPointX("")) - 130);
}
}{for(var i = 0, len = gdjs.VenusCode.GDlivesObjects1.length ;i < len;++i) {
    gdjs.VenusCode.GDlivesObjects1[i].setY((( gdjs.VenusCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.VenusCode.GDPlayerObjects1[0].getPointY("")) - 150);
}
}{for(var i = 0, len = gdjs.VenusCode.GDliveObjects1.length ;i < len;++i) {
    gdjs.VenusCode.GDliveObjects1[i].setX((( gdjs.VenusCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.VenusCode.GDPlayerObjects1[0].getPointX("")) - 200);
}
}{for(var i = 0, len = gdjs.VenusCode.GDliveObjects1.length ;i < len;++i) {
    gdjs.VenusCode.GDliveObjects1[i].setY((( gdjs.VenusCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.VenusCode.GDPlayerObjects1[0].getPointY("")) - 170);
}
}{for(var i = 0, len = gdjs.VenusCode.GDtimerObjects1.length ;i < len;++i) {
    gdjs.VenusCode.GDtimerObjects1[i].setX((( gdjs.VenusCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.VenusCode.GDPlayerObjects1[0].getPointX("")) + 200);
}
}{for(var i = 0, len = gdjs.VenusCode.GDtimerObjects1.length ;i < len;++i) {
    gdjs.VenusCode.GDtimerObjects1[i].setY((( gdjs.VenusCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.VenusCode.GDPlayerObjects1[0].getPointY("")) - 200);
}
}{for(var i = 0, len = gdjs.VenusCode.GDcheatsObjects1.length ;i < len;++i) {
    gdjs.VenusCode.GDcheatsObjects1[i].setX((( gdjs.VenusCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.VenusCode.GDPlayerObjects1[0].getPointX("")));
}
}{for(var i = 0, len = gdjs.VenusCode.GDcheatsObjects1.length ;i < len;++i) {
    gdjs.VenusCode.GDcheatsObjects1[i].setY((( gdjs.VenusCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.VenusCode.GDPlayerObjects1[0].getPointY("")) - 200);
}
}{for(var i = 0, len = gdjs.VenusCode.GDfpsObjects1.length ;i < len;++i) {
    gdjs.VenusCode.GDfpsObjects1[i].setX((( gdjs.VenusCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.VenusCode.GDPlayerObjects1[0].getPointX("")) + 290);
}
}{for(var i = 0, len = gdjs.VenusCode.GDfpsObjects1.length ;i < len;++i) {
    gdjs.VenusCode.GDfpsObjects1[i].setY((( gdjs.VenusCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.VenusCode.GDPlayerObjects1[0].getPointY("")) - 200);
}
}{for(var i = 0, len = gdjs.VenusCode.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.VenusCode.GDNewObjectObjects1[i].setX((( gdjs.VenusCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.VenusCode.GDPlayerObjects1[0].getPointX("")) + 220);
}
}{for(var i = 0, len = gdjs.VenusCode.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.VenusCode.GDNewObjectObjects1[i].setY((( gdjs.VenusCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.VenusCode.GDPlayerObjects1[0].getPointY("")) - 160);
}
}{for(var i = 0, len = gdjs.VenusCode.GDgamelifeObjects1.length ;i < len;++i) {
    gdjs.VenusCode.GDgamelifeObjects1[i].setX((( gdjs.VenusCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.VenusCode.GDPlayerObjects1[0].getPointX("")) + 220);
}
}{for(var i = 0, len = gdjs.VenusCode.GDgamelifeObjects1.length ;i < len;++i) {
    gdjs.VenusCode.GDgamelifeObjects1[i].setY((( gdjs.VenusCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.VenusCode.GDPlayerObjects1[0].getPointY("")) - 140);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.VenusCode.GDPlayerObjects1);

gdjs.VenusCode.condition0IsTrue_0.val = false;
gdjs.VenusCode.condition1IsTrue_0.val = false;
gdjs.VenusCode.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.VenusCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.VenusCode.GDPlayerObjects1[i].getY() >= 600 ) {
        gdjs.VenusCode.condition0IsTrue_0.val = true;
        gdjs.VenusCode.GDPlayerObjects1[k] = gdjs.VenusCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.VenusCode.GDPlayerObjects1.length = k;}if ( gdjs.VenusCode.condition0IsTrue_0.val ) {
{
gdjs.VenusCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) != 0;
}if ( gdjs.VenusCode.condition1IsTrue_0.val ) {
{
gdjs.VenusCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) != 1;
}}
}
if (gdjs.VenusCode.condition2IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).sub(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}{runtimeScene.getGame().getVariables().getFromIndex(1).sub(1);
}{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Venus");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.VenusCode.GDPlayerObjects1);

gdjs.VenusCode.condition0IsTrue_0.val = false;
gdjs.VenusCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.VenusCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.VenusCode.GDPlayerObjects1[i].getY() >= 600 ) {
        gdjs.VenusCode.condition0IsTrue_0.val = true;
        gdjs.VenusCode.GDPlayerObjects1[k] = gdjs.VenusCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.VenusCode.GDPlayerObjects1.length = k;}if ( gdjs.VenusCode.condition0IsTrue_0.val ) {
{
gdjs.VenusCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) == 1;
}}
if (gdjs.VenusCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Venus");
}}

}


{


gdjs.VenusCode.condition0IsTrue_0.val = false;
{
gdjs.VenusCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 0;
}if (gdjs.VenusCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Dead", true);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("BlueEnemy1"), gdjs.VenusCode.GDBlueEnemy1Objects1);
gdjs.copyArray(runtimeScene.getObjects("left"), gdjs.VenusCode.GDleftObjects1);

gdjs.VenusCode.condition0IsTrue_0.val = false;
{
gdjs.VenusCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.VenusCode.mapOfGDgdjs_46VenusCode_46GDBlueEnemy1Objects1Objects, gdjs.VenusCode.mapOfGDgdjs_46VenusCode_46GDleftObjects1Objects, false, runtimeScene, false);
}if (gdjs.VenusCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(10).setString("Left");
}}

}


{


gdjs.VenusCode.condition0IsTrue_0.val = false;
{
gdjs.VenusCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(10)) == "Left";
}if (gdjs.VenusCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BlueEnemy1"), gdjs.VenusCode.GDBlueEnemy1Objects1);
{for(var i = 0, len = gdjs.VenusCode.GDBlueEnemy1Objects1.length ;i < len;++i) {
    gdjs.VenusCode.GDBlueEnemy1Objects1[i].addPolarForce(180, 100, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlueEnemy1"), gdjs.VenusCode.GDBlueEnemy1Objects1);
gdjs.copyArray(runtimeScene.getObjects("right"), gdjs.VenusCode.GDrightObjects1);

gdjs.VenusCode.condition0IsTrue_0.val = false;
{
gdjs.VenusCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.VenusCode.mapOfGDgdjs_46VenusCode_46GDBlueEnemy1Objects1Objects, gdjs.VenusCode.mapOfGDgdjs_46VenusCode_46GDrightObjects1Objects, false, runtimeScene, false);
}if (gdjs.VenusCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(10).setString("Right");
}}

}


{


gdjs.VenusCode.condition0IsTrue_0.val = false;
{
gdjs.VenusCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(10)) == "Right";
}if (gdjs.VenusCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BlueEnemy1"), gdjs.VenusCode.GDBlueEnemy1Objects1);
{for(var i = 0, len = gdjs.VenusCode.GDBlueEnemy1Objects1.length ;i < len;++i) {
    gdjs.VenusCode.GDBlueEnemy1Objects1[i].addPolarForce(0, 100, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("left"), gdjs.VenusCode.GDleftObjects1);
gdjs.copyArray(runtimeScene.getObjects("robotting"), gdjs.VenusCode.GDrobottingObjects1);

gdjs.VenusCode.condition0IsTrue_0.val = false;
{
gdjs.VenusCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.VenusCode.mapOfGDgdjs_46VenusCode_46GDrobottingObjects1Objects, gdjs.VenusCode.mapOfGDgdjs_46VenusCode_46GDleftObjects1Objects, false, runtimeScene, false);
}if (gdjs.VenusCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(2).setString("Left");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("right"), gdjs.VenusCode.GDrightObjects1);
gdjs.copyArray(runtimeScene.getObjects("robotting"), gdjs.VenusCode.GDrobottingObjects1);

gdjs.VenusCode.condition0IsTrue_0.val = false;
{
gdjs.VenusCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.VenusCode.mapOfGDgdjs_46VenusCode_46GDrobottingObjects1Objects, gdjs.VenusCode.mapOfGDgdjs_46VenusCode_46GDrightObjects1Objects, false, runtimeScene, false);
}if (gdjs.VenusCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(2).setString("Right");
}}

}


{


gdjs.VenusCode.condition0IsTrue_0.val = false;
{
gdjs.VenusCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)) == "Left";
}if (gdjs.VenusCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("robotting"), gdjs.VenusCode.GDrobottingObjects1);
{for(var i = 0, len = gdjs.VenusCode.GDrobottingObjects1.length ;i < len;++i) {
    gdjs.VenusCode.GDrobottingObjects1[i].addPolarForce(180, 100, 0);
}
}{for(var i = 0, len = gdjs.VenusCode.GDrobottingObjects1.length ;i < len;++i) {
    gdjs.VenusCode.GDrobottingObjects1[i].flipX(false);
}
}}

}


{


gdjs.VenusCode.condition0IsTrue_0.val = false;
{
gdjs.VenusCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)) == "Right";
}if (gdjs.VenusCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("robotting"), gdjs.VenusCode.GDrobottingObjects1);
{for(var i = 0, len = gdjs.VenusCode.GDrobottingObjects1.length ;i < len;++i) {
    gdjs.VenusCode.GDrobottingObjects1[i].addPolarForce(0, 100, 0);
}
}{for(var i = 0, len = gdjs.VenusCode.GDrobottingObjects1.length ;i < len;++i) {
    gdjs.VenusCode.GDrobottingObjects1[i].flipX(true);
}
}}

}


{



}


{


gdjs.VenusCode.condition0IsTrue_0.val = false;
{
gdjs.VenusCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.VenusCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.VenusCode.GDNewObjectObjects1);
gdjs.copyArray(runtimeScene.getObjects("cheats"), gdjs.VenusCode.GDcheatsObjects1);
gdjs.copyArray(runtimeScene.getObjects("crashedship"), gdjs.VenusCode.GDcrashedshipObjects1);
gdjs.copyArray(runtimeScene.getObjects("fps"), gdjs.VenusCode.GDfpsObjects1);
gdjs.copyArray(runtimeScene.getObjects("gamelife"), gdjs.VenusCode.GDgamelifeObjects1);
gdjs.copyArray(runtimeScene.getObjects("left"), gdjs.VenusCode.GDleftObjects1);
gdjs.copyArray(runtimeScene.getObjects("notcomplete"), gdjs.VenusCode.GDnotcompleteObjects1);
gdjs.copyArray(runtimeScene.getObjects("right"), gdjs.VenusCode.GDrightObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(2).setString("Left");
}{for(var i = 0, len = gdjs.VenusCode.GDrightObjects1.length ;i < len;++i) {
    gdjs.VenusCode.GDrightObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.VenusCode.GDleftObjects1.length ;i < len;++i) {
    gdjs.VenusCode.GDleftObjects1[i].hide();
}
}{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(0);
}{for(var i = 0, len = gdjs.VenusCode.GDnotcompleteObjects1.length ;i < len;++i) {
    gdjs.VenusCode.GDnotcompleteObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.VenusCode.GDcrashedshipObjects1.length ;i < len;++i) {
    gdjs.VenusCode.GDcrashedshipObjects1[i].setAnimationName("stand");
}
}{runtimeScene.getGame().getVariables().getFromIndex(5).setNumber(0);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "fire");
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(13).setNumber(0);
}{for(var i = 0, len = gdjs.VenusCode.GDfpsObjects1.length ;i < len;++i) {
    gdjs.VenusCode.GDfpsObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.VenusCode.GDcheatsObjects1.length ;i < len;++i) {
    gdjs.VenusCode.GDcheatsObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.VenusCode.GDgamelifeObjects1.length ;i < len;++i) {
    gdjs.VenusCode.GDgamelifeObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.VenusCode.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.VenusCode.GDNewObjectObjects1[i].hide();
}
}
{ //Subevents
gdjs.VenusCode.eventsList3(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.VenusCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("robotting"), gdjs.VenusCode.GDrobottingObjects1);

gdjs.VenusCode.condition0IsTrue_0.val = false;
gdjs.VenusCode.condition1IsTrue_0.val = false;
{
gdjs.VenusCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.VenusCode.mapOfGDgdjs_46VenusCode_46GDPlayerObjects1Objects, gdjs.VenusCode.mapOfGDgdjs_46VenusCode_46GDrobottingObjects1Objects, false, runtimeScene, false);
}if ( gdjs.VenusCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.VenusCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.VenusCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.VenusCode.condition1IsTrue_0.val = true;
        gdjs.VenusCode.GDPlayerObjects1[k] = gdjs.VenusCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.VenusCode.GDPlayerObjects1.length = k;}}
if (gdjs.VenusCode.condition1IsTrue_0.val) {
/* Reuse gdjs.VenusCode.GDPlayerObjects1 */
/* Reuse gdjs.VenusCode.GDrobottingObjects1 */
{for(var i = 0, len = gdjs.VenusCode.GDrobottingObjects1.length ;i < len;++i) {
    gdjs.VenusCode.GDrobottingObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.VenusCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.VenusCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").setCanJump();
}
}{for(var i = 0, len = gdjs.VenusCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.VenusCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}{runtimeScene.getGame().getVariables().getFromIndex(13).sub(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlueEnemy1"), gdjs.VenusCode.GDBlueEnemy1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.VenusCode.GDPlayerObjects1);

gdjs.VenusCode.condition0IsTrue_0.val = false;
gdjs.VenusCode.condition1IsTrue_0.val = false;
{
gdjs.VenusCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.VenusCode.mapOfGDgdjs_46VenusCode_46GDPlayerObjects1Objects, gdjs.VenusCode.mapOfGDgdjs_46VenusCode_46GDBlueEnemy1Objects1Objects, false, runtimeScene, false);
}if ( gdjs.VenusCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.VenusCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.VenusCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.VenusCode.condition1IsTrue_0.val = true;
        gdjs.VenusCode.GDPlayerObjects1[k] = gdjs.VenusCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.VenusCode.GDPlayerObjects1.length = k;}}
if (gdjs.VenusCode.condition1IsTrue_0.val) {
/* Reuse gdjs.VenusCode.GDBlueEnemy1Objects1 */
/* Reuse gdjs.VenusCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.VenusCode.GDBlueEnemy1Objects1.length ;i < len;++i) {
    gdjs.VenusCode.GDBlueEnemy1Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.VenusCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.VenusCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").setCanJump();
}
}{for(var i = 0, len = gdjs.VenusCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.VenusCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}{runtimeScene.getGame().getVariables().getFromIndex(13).sub(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.VenusCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("robotting"), gdjs.VenusCode.GDrobottingObjects1);

gdjs.VenusCode.condition0IsTrue_0.val = false;
gdjs.VenusCode.condition1IsTrue_0.val = false;
{
gdjs.VenusCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.VenusCode.mapOfGDgdjs_46VenusCode_46GDPlayerObjects1Objects, gdjs.VenusCode.mapOfGDgdjs_46VenusCode_46GDrobottingObjects1Objects, false, runtimeScene, false);
}if ( gdjs.VenusCode.condition0IsTrue_0.val ) {
{
gdjs.VenusCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) != 1;
}}
if (gdjs.VenusCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).sub(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}{runtimeScene.getGame().getVariables().getFromIndex(1).sub(1);
}{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Venus");
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.VenusCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("crashedship"), gdjs.VenusCode.GDcrashedshipObjects1);

gdjs.VenusCode.condition0IsTrue_0.val = false;
{
gdjs.VenusCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.VenusCode.mapOfGDgdjs_46VenusCode_46GDPlayerObjects1Objects, gdjs.VenusCode.mapOfGDgdjs_46VenusCode_46GDcrashedshipObjects1Objects, true, runtimeScene, false);
}if (gdjs.VenusCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("notcomplete"), gdjs.VenusCode.GDnotcompleteObjects1);
{for(var i = 0, len = gdjs.VenusCode.GDnotcompleteObjects1.length ;i < len;++i) {
    gdjs.VenusCode.GDnotcompleteObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.VenusCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("crashedship"), gdjs.VenusCode.GDcrashedshipObjects1);

gdjs.VenusCode.condition0IsTrue_0.val = false;
gdjs.VenusCode.condition1IsTrue_0.val = false;
{
gdjs.VenusCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.VenusCode.mapOfGDgdjs_46VenusCode_46GDPlayerObjects1Objects, gdjs.VenusCode.mapOfGDgdjs_46VenusCode_46GDcrashedshipObjects1Objects, false, runtimeScene, false);
}if ( gdjs.VenusCode.condition0IsTrue_0.val ) {
{
{gdjs.VenusCode.conditionTrue_1 = gdjs.VenusCode.condition1IsTrue_0;
gdjs.VenusCode.conditionTrue_1.val = (gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) != gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}}
if (gdjs.VenusCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("notcomplete"), gdjs.VenusCode.GDnotcompleteObjects1);
{for(var i = 0, len = gdjs.VenusCode.GDnotcompleteObjects1.length ;i < len;++i) {
    gdjs.VenusCode.GDnotcompleteObjects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.VenusCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("crashedship"), gdjs.VenusCode.GDcrashedshipObjects1);

gdjs.VenusCode.condition0IsTrue_0.val = false;
gdjs.VenusCode.condition1IsTrue_0.val = false;
{
gdjs.VenusCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.VenusCode.mapOfGDgdjs_46VenusCode_46GDcrashedshipObjects1Objects, gdjs.VenusCode.mapOfGDgdjs_46VenusCode_46GDPlayerObjects1Objects, false, runtimeScene, false);
}if ( gdjs.VenusCode.condition0IsTrue_0.val ) {
{
{gdjs.VenusCode.conditionTrue_1 = gdjs.VenusCode.condition1IsTrue_0;
gdjs.VenusCode.conditionTrue_1.val = (gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}}
if (gdjs.VenusCode.condition1IsTrue_0.val) {
/* Reuse gdjs.VenusCode.GDPlayerObjects1 */
/* Reuse gdjs.VenusCode.GDcrashedshipObjects1 */
{for(var i = 0, len = gdjs.VenusCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.VenusCode.GDPlayerObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.VenusCode.GDcrashedshipObjects1.length ;i < len;++i) {
    gdjs.VenusCode.GDcrashedshipObjects1[i].setAnimationName("fixit");
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "fixingtime");
}{runtimeScene.getGame().getVariables().getFromIndex(5).setNumber(1);
}}

}


{


gdjs.VenusCode.condition0IsTrue_0.val = false;
gdjs.VenusCode.condition1IsTrue_0.val = false;
{
gdjs.VenusCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 3, "fixingtime");
}if ( gdjs.VenusCode.condition0IsTrue_0.val ) {
{
{gdjs.VenusCode.conditionTrue_1 = gdjs.VenusCode.condition1IsTrue_0;
gdjs.VenusCode.conditionTrue_1.val = (gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5)) == 1);
}
}}
if (gdjs.VenusCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("crashedship"), gdjs.VenusCode.GDcrashedshipObjects1);
{for(var i = 0, len = gdjs.VenusCode.GDcrashedshipObjects1.length ;i < len;++i) {
    gdjs.VenusCode.GDcrashedshipObjects1[i].setAnimationName("fly");
}
}{for(var i = 0, len = gdjs.VenusCode.GDcrashedshipObjects1.length ;i < len;++i) {
    gdjs.VenusCode.GDcrashedshipObjects1[i].addForce(0, -(1000), 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("crashedship"), gdjs.VenusCode.GDcrashedshipObjects1);
gdjs.copyArray(runtimeScene.getObjects("end"), gdjs.VenusCode.GDendObjects1);

gdjs.VenusCode.condition0IsTrue_0.val = false;
{
gdjs.VenusCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.VenusCode.mapOfGDgdjs_46VenusCode_46GDcrashedshipObjects1Objects, gdjs.VenusCode.mapOfGDgdjs_46VenusCode_46GDendObjects1Objects, false, runtimeScene, false);
}if (gdjs.VenusCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(3);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "intro:M2", false);
}}

}


{



}


{


gdjs.VenusCode.condition0IsTrue_0.val = false;
{
gdjs.VenusCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "i");
}if (gdjs.VenusCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(6).setNumber(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.VenusCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("robotting"), gdjs.VenusCode.GDrobottingObjects1);

gdjs.VenusCode.condition0IsTrue_0.val = false;
gdjs.VenusCode.condition1IsTrue_0.val = false;
{
gdjs.VenusCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) == 1;
}if ( gdjs.VenusCode.condition0IsTrue_0.val ) {
{
gdjs.VenusCode.condition1IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.VenusCode.mapOfGDgdjs_46VenusCode_46GDrobottingObjects1Objects, gdjs.VenusCode.mapOfGDgdjs_46VenusCode_46GDPlayerObjects1Objects, false, runtimeScene, false);
}}
if (gdjs.VenusCode.condition1IsTrue_0.val) {
/* Reuse gdjs.VenusCode.GDrobottingObjects1 */
{for(var i = 0, len = gdjs.VenusCode.GDrobottingObjects1.length ;i < len;++i) {
    gdjs.VenusCode.GDrobottingObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(13).sub(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlueEnemy1"), gdjs.VenusCode.GDBlueEnemy1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.VenusCode.GDPlayerObjects1);

gdjs.VenusCode.condition0IsTrue_0.val = false;
gdjs.VenusCode.condition1IsTrue_0.val = false;
{
gdjs.VenusCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) == 1;
}if ( gdjs.VenusCode.condition0IsTrue_0.val ) {
{
gdjs.VenusCode.condition1IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.VenusCode.mapOfGDgdjs_46VenusCode_46GDBlueEnemy1Objects1Objects, gdjs.VenusCode.mapOfGDgdjs_46VenusCode_46GDPlayerObjects1Objects, false, runtimeScene, false);
}}
if (gdjs.VenusCode.condition1IsTrue_0.val) {
/* Reuse gdjs.VenusCode.GDBlueEnemy1Objects1 */
{for(var i = 0, len = gdjs.VenusCode.GDBlueEnemy1Objects1.length ;i < len;++i) {
    gdjs.VenusCode.GDBlueEnemy1Objects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(13).sub(1);
}}

}


{


gdjs.VenusCode.condition0IsTrue_0.val = false;
{
gdjs.VenusCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "c");
}if (gdjs.VenusCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.VenusCode.eventsList5(runtimeScene);} //End of subevents
}

}


{


gdjs.VenusCode.condition0IsTrue_0.val = false;
{
gdjs.VenusCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "k");
}if (gdjs.VenusCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.VenusCode.eventsList8(runtimeScene);} //End of subevents
}

}


{


gdjs.VenusCode.condition0IsTrue_0.val = false;
{
gdjs.VenusCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "t");
}if (gdjs.VenusCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(12).setNumber(1);
}}

}


{



}


{


gdjs.VenusCode.condition0IsTrue_0.val = false;
{
gdjs.VenusCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.VenusCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "leveltimer");
}{runtimeScene.getGame().getVariables().getFromIndex(9).setNumber(60);
}}

}


{


gdjs.VenusCode.condition0IsTrue_0.val = false;
gdjs.VenusCode.condition1IsTrue_0.val = false;
{
gdjs.VenusCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "leveltimer");
}if ( gdjs.VenusCode.condition0IsTrue_0.val ) {
{
gdjs.VenusCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(12)) != 1;
}}
if (gdjs.VenusCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(9).sub(1);
}{runtimeScene.getGame().getVariables().getFromIndex(14).add(1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "leveltimer");
}}

}


{


gdjs.VenusCode.condition0IsTrue_0.val = false;
{
gdjs.VenusCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9)) == 0;
}if (gdjs.VenusCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Venus", false);
}{runtimeScene.getVariables().getFromIndex(1).sub(1);
}}

}


{



}


{


gdjs.VenusCode.condition0IsTrue_0.val = false;
{
gdjs.VenusCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 4, "fire");
}if (gdjs.VenusCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(11).setNumber(gdjs.randomInRange(1, 3));
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "fire");
}}

}


{


gdjs.VenusCode.condition0IsTrue_0.val = false;
gdjs.VenusCode.condition1IsTrue_0.val = false;
{
gdjs.VenusCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(11)) == 1;
}if ( gdjs.VenusCode.condition0IsTrue_0.val ) {
{
gdjs.VenusCode.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 3, "firerate");
}}
if (gdjs.VenusCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BlueEnemy1"), gdjs.VenusCode.GDBlueEnemy1Objects1);
gdjs.copyArray(runtimeScene.getObjects("RedLaser08"), gdjs.VenusCode.GDRedLaser08Objects1);
{for(var i = 0, len = gdjs.VenusCode.GDBlueEnemy1Objects1.length ;i < len;++i) {
    gdjs.VenusCode.GDBlueEnemy1Objects1[i].getBehavior("FireBullet").Fire((gdjs.VenusCode.GDBlueEnemy1Objects1[i].getPointX("")), (gdjs.VenusCode.GDBlueEnemy1Objects1[i].getPointY("")), gdjs.VenusCode.mapOfGDgdjs_46VenusCode_46GDRedLaser08Objects1Objects, 90, 100, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "firerate");
}}

}


{


gdjs.VenusCode.condition0IsTrue_0.val = false;
gdjs.VenusCode.condition1IsTrue_0.val = false;
{
gdjs.VenusCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(11)) == 2;
}if ( gdjs.VenusCode.condition0IsTrue_0.val ) {
{
gdjs.VenusCode.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 3, "firerate");
}}
if (gdjs.VenusCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BlueEnemy1"), gdjs.VenusCode.GDBlueEnemy1Objects1);
gdjs.copyArray(runtimeScene.getObjects("GreenLaser09"), gdjs.VenusCode.GDGreenLaser09Objects1);
{for(var i = 0, len = gdjs.VenusCode.GDBlueEnemy1Objects1.length ;i < len;++i) {
    gdjs.VenusCode.GDBlueEnemy1Objects1[i].getBehavior("FireBullet").Fire((gdjs.VenusCode.GDBlueEnemy1Objects1[i].getPointX("")), (gdjs.VenusCode.GDBlueEnemy1Objects1[i].getPointY("")), gdjs.VenusCode.mapOfGDgdjs_46VenusCode_46GDGreenLaser09Objects1Objects, 90, 40, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "firerate");
}}

}


{


gdjs.VenusCode.condition0IsTrue_0.val = false;
gdjs.VenusCode.condition1IsTrue_0.val = false;
{
gdjs.VenusCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(11)) == 3;
}if ( gdjs.VenusCode.condition0IsTrue_0.val ) {
{
gdjs.VenusCode.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 3, "firerate");
}}
if (gdjs.VenusCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BlueEnemy1"), gdjs.VenusCode.GDBlueEnemy1Objects1);
gdjs.copyArray(runtimeScene.getObjects("GreenLaser09"), gdjs.VenusCode.GDGreenLaser09Objects1);
gdjs.copyArray(runtimeScene.getObjects("RedLaser08"), gdjs.VenusCode.GDRedLaser08Objects1);
{for(var i = 0, len = gdjs.VenusCode.GDBlueEnemy1Objects1.length ;i < len;++i) {
    gdjs.VenusCode.GDBlueEnemy1Objects1[i].getBehavior("FireBullet").Fire((gdjs.VenusCode.GDBlueEnemy1Objects1[i].getPointX("")), (gdjs.VenusCode.GDBlueEnemy1Objects1[i].getPointY("")), gdjs.VenusCode.mapOfGDgdjs_46VenusCode_46GDGreenLaser09Objects1Objects, 90, 40, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.VenusCode.GDBlueEnemy1Objects1.length ;i < len;++i) {
    gdjs.VenusCode.GDBlueEnemy1Objects1[i].getBehavior("FireBullet").Fire((gdjs.VenusCode.GDBlueEnemy1Objects1[i].getPointX("")), (gdjs.VenusCode.GDBlueEnemy1Objects1[i].getPointY("")), gdjs.VenusCode.mapOfGDgdjs_46VenusCode_46GDRedLaser08Objects1Objects, 90, 100, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "firerate");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GreenLaser09"), gdjs.VenusCode.GDGreenLaser09Objects1);
gdjs.copyArray(runtimeScene.getObjects("alienfloor"), gdjs.VenusCode.GDalienfloorObjects1);

gdjs.VenusCode.condition0IsTrue_0.val = false;
{
gdjs.VenusCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.VenusCode.mapOfGDgdjs_46VenusCode_46GDGreenLaser09Objects1Objects, gdjs.VenusCode.mapOfGDgdjs_46VenusCode_46GDalienfloorObjects1Objects, false, runtimeScene, false);
}if (gdjs.VenusCode.condition0IsTrue_0.val) {
/* Reuse gdjs.VenusCode.GDGreenLaser09Objects1 */
{for(var i = 0, len = gdjs.VenusCode.GDGreenLaser09Objects1.length ;i < len;++i) {
    gdjs.VenusCode.GDGreenLaser09Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("RedLaser08"), gdjs.VenusCode.GDRedLaser08Objects1);
gdjs.copyArray(runtimeScene.getObjects("alienfloor"), gdjs.VenusCode.GDalienfloorObjects1);

gdjs.VenusCode.condition0IsTrue_0.val = false;
{
gdjs.VenusCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.VenusCode.mapOfGDgdjs_46VenusCode_46GDRedLaser08Objects1Objects, gdjs.VenusCode.mapOfGDgdjs_46VenusCode_46GDalienfloorObjects1Objects, false, runtimeScene, false);
}if (gdjs.VenusCode.condition0IsTrue_0.val) {
/* Reuse gdjs.VenusCode.GDRedLaser08Objects1 */
{for(var i = 0, len = gdjs.VenusCode.GDRedLaser08Objects1.length ;i < len;++i) {
    gdjs.VenusCode.GDRedLaser08Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GreenLaser09"), gdjs.VenusCode.GDGreenLaser09Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.VenusCode.GDPlayerObjects1);

gdjs.VenusCode.condition0IsTrue_0.val = false;
gdjs.VenusCode.condition1IsTrue_0.val = false;
{
gdjs.VenusCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.VenusCode.mapOfGDgdjs_46VenusCode_46GDGreenLaser09Objects1Objects, gdjs.VenusCode.mapOfGDgdjs_46VenusCode_46GDPlayerObjects1Objects, false, runtimeScene, false);
}if ( gdjs.VenusCode.condition0IsTrue_0.val ) {
{
gdjs.VenusCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) != 1;
}}
if (gdjs.VenusCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).sub(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}{runtimeScene.getGame().getVariables().getFromIndex(1).sub(1);
}{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Venus");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.VenusCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("RedLaser08"), gdjs.VenusCode.GDRedLaser08Objects1);

gdjs.VenusCode.condition0IsTrue_0.val = false;
gdjs.VenusCode.condition1IsTrue_0.val = false;
{
gdjs.VenusCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.VenusCode.mapOfGDgdjs_46VenusCode_46GDRedLaser08Objects1Objects, gdjs.VenusCode.mapOfGDgdjs_46VenusCode_46GDPlayerObjects1Objects, false, runtimeScene, false);
}if ( gdjs.VenusCode.condition0IsTrue_0.val ) {
{
gdjs.VenusCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) != 1;
}}
if (gdjs.VenusCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).sub(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}{runtimeScene.getGame().getVariables().getFromIndex(1).sub(1);
}{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Venus");
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.VenusCode.GDPlayerObjects1);

for(gdjs.VenusCode.forEachIndex2 = 0;gdjs.VenusCode.forEachIndex2 < gdjs.VenusCode.GDPlayerObjects1.length;++gdjs.VenusCode.forEachIndex2) {
gdjs.VenusCode.GDPlayerObjects2.length = 0;


gdjs.VenusCode.forEachTemporary2 = gdjs.VenusCode.GDPlayerObjects1[gdjs.VenusCode.forEachIndex2];
gdjs.VenusCode.GDPlayerObjects2.push(gdjs.VenusCode.forEachTemporary2);
gdjs.VenusCode.condition0IsTrue_0.val = false;
{
gdjs.VenusCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.VenusCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(13).add(1);
}}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("alienfloor"), gdjs.VenusCode.GDalienfloorObjects1);

for(gdjs.VenusCode.forEachIndex2 = 0;gdjs.VenusCode.forEachIndex2 < gdjs.VenusCode.GDalienfloorObjects1.length;++gdjs.VenusCode.forEachIndex2) {
gdjs.VenusCode.GDalienfloorObjects2.length = 0;


gdjs.VenusCode.forEachTemporary2 = gdjs.VenusCode.GDalienfloorObjects1[gdjs.VenusCode.forEachIndex2];
gdjs.VenusCode.GDalienfloorObjects2.push(gdjs.VenusCode.forEachTemporary2);
gdjs.VenusCode.condition0IsTrue_0.val = false;
{
gdjs.VenusCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.VenusCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(13).add(1);
}}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("rocketplat"), gdjs.VenusCode.GDrocketplatObjects1);

for(gdjs.VenusCode.forEachIndex2 = 0;gdjs.VenusCode.forEachIndex2 < gdjs.VenusCode.GDrocketplatObjects1.length;++gdjs.VenusCode.forEachIndex2) {
gdjs.VenusCode.GDrocketplatObjects2.length = 0;


gdjs.VenusCode.forEachTemporary2 = gdjs.VenusCode.GDrocketplatObjects1[gdjs.VenusCode.forEachIndex2];
gdjs.VenusCode.GDrocketplatObjects2.push(gdjs.VenusCode.forEachTemporary2);
gdjs.VenusCode.condition0IsTrue_0.val = false;
{
gdjs.VenusCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.VenusCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(13).add(1);
}}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("robotting"), gdjs.VenusCode.GDrobottingObjects1);

for(gdjs.VenusCode.forEachIndex2 = 0;gdjs.VenusCode.forEachIndex2 < gdjs.VenusCode.GDrobottingObjects1.length;++gdjs.VenusCode.forEachIndex2) {
gdjs.VenusCode.GDrobottingObjects2.length = 0;


gdjs.VenusCode.forEachTemporary2 = gdjs.VenusCode.GDrobottingObjects1[gdjs.VenusCode.forEachIndex2];
gdjs.VenusCode.GDrobottingObjects2.push(gdjs.VenusCode.forEachTemporary2);
gdjs.VenusCode.condition0IsTrue_0.val = false;
{
gdjs.VenusCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.VenusCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(13).add(1);
}}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlueEnemy1"), gdjs.VenusCode.GDBlueEnemy1Objects1);

for(gdjs.VenusCode.forEachIndex2 = 0;gdjs.VenusCode.forEachIndex2 < gdjs.VenusCode.GDBlueEnemy1Objects1.length;++gdjs.VenusCode.forEachIndex2) {
gdjs.VenusCode.GDBlueEnemy1Objects2.length = 0;


gdjs.VenusCode.forEachTemporary2 = gdjs.VenusCode.GDBlueEnemy1Objects1[gdjs.VenusCode.forEachIndex2];
gdjs.VenusCode.GDBlueEnemy1Objects2.push(gdjs.VenusCode.forEachTemporary2);
gdjs.VenusCode.condition0IsTrue_0.val = false;
{
gdjs.VenusCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.VenusCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(13).add(1);
}}
}

}


{



}


{


gdjs.VenusCode.condition0IsTrue_0.val = false;
{
gdjs.VenusCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "m");
}if (gdjs.VenusCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(16).setNumber(0);
}
{ //Subevents
gdjs.VenusCode.eventsList14(runtimeScene);} //End of subevents
}

}


{


gdjs.VenusCode.condition0IsTrue_0.val = false;
{
gdjs.VenusCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "F1");
}if (gdjs.VenusCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(15).setNumber(0);
}
{ //Subevents
gdjs.VenusCode.eventsList15(runtimeScene);} //End of subevents
}

}


};

gdjs.VenusCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.VenusCode.GDPlayerObjects1.length = 0;
gdjs.VenusCode.GDPlayerObjects2.length = 0;
gdjs.VenusCode.GDPlayerObjects3.length = 0;
gdjs.VenusCode.GDalienfloorObjects1.length = 0;
gdjs.VenusCode.GDalienfloorObjects2.length = 0;
gdjs.VenusCode.GDalienfloorObjects3.length = 0;
gdjs.VenusCode.GDrocketplatObjects1.length = 0;
gdjs.VenusCode.GDrocketplatObjects2.length = 0;
gdjs.VenusCode.GDrocketplatObjects3.length = 0;
gdjs.VenusCode.GDcloudObjects1.length = 0;
gdjs.VenusCode.GDcloudObjects2.length = 0;
gdjs.VenusCode.GDcloudObjects3.length = 0;
gdjs.VenusCode.GDboltObjects1.length = 0;
gdjs.VenusCode.GDboltObjects2.length = 0;
gdjs.VenusCode.GDboltObjects3.length = 0;
gdjs.VenusCode.GDscoreObjects1.length = 0;
gdjs.VenusCode.GDscoreObjects2.length = 0;
gdjs.VenusCode.GDscoreObjects3.length = 0;
gdjs.VenusCode.GDliveObjects1.length = 0;
gdjs.VenusCode.GDliveObjects2.length = 0;
gdjs.VenusCode.GDliveObjects3.length = 0;
gdjs.VenusCode.GDlivesObjects1.length = 0;
gdjs.VenusCode.GDlivesObjects2.length = 0;
gdjs.VenusCode.GDlivesObjects3.length = 0;
gdjs.VenusCode.GDrobottingObjects1.length = 0;
gdjs.VenusCode.GDrobottingObjects2.length = 0;
gdjs.VenusCode.GDrobottingObjects3.length = 0;
gdjs.VenusCode.GDleftObjects1.length = 0;
gdjs.VenusCode.GDleftObjects2.length = 0;
gdjs.VenusCode.GDleftObjects3.length = 0;
gdjs.VenusCode.GDrightObjects1.length = 0;
gdjs.VenusCode.GDrightObjects2.length = 0;
gdjs.VenusCode.GDrightObjects3.length = 0;
gdjs.VenusCode.GDcrashedshipObjects1.length = 0;
gdjs.VenusCode.GDcrashedshipObjects2.length = 0;
gdjs.VenusCode.GDcrashedshipObjects3.length = 0;
gdjs.VenusCode.GDnotcompleteObjects1.length = 0;
gdjs.VenusCode.GDnotcompleteObjects2.length = 0;
gdjs.VenusCode.GDnotcompleteObjects3.length = 0;
gdjs.VenusCode.GDendObjects1.length = 0;
gdjs.VenusCode.GDendObjects2.length = 0;
gdjs.VenusCode.GDendObjects3.length = 0;
gdjs.VenusCode.GDtimerObjects1.length = 0;
gdjs.VenusCode.GDtimerObjects2.length = 0;
gdjs.VenusCode.GDtimerObjects3.length = 0;
gdjs.VenusCode.GDcheatsObjects1.length = 0;
gdjs.VenusCode.GDcheatsObjects2.length = 0;
gdjs.VenusCode.GDcheatsObjects3.length = 0;
gdjs.VenusCode.GDBlueEnemy1Objects1.length = 0;
gdjs.VenusCode.GDBlueEnemy1Objects2.length = 0;
gdjs.VenusCode.GDBlueEnemy1Objects3.length = 0;
gdjs.VenusCode.GDRedLaser08Objects1.length = 0;
gdjs.VenusCode.GDRedLaser08Objects2.length = 0;
gdjs.VenusCode.GDRedLaser08Objects3.length = 0;
gdjs.VenusCode.GDGreenLaser09Objects1.length = 0;
gdjs.VenusCode.GDGreenLaser09Objects2.length = 0;
gdjs.VenusCode.GDGreenLaser09Objects3.length = 0;
gdjs.VenusCode.GDNewObjectObjects1.length = 0;
gdjs.VenusCode.GDNewObjectObjects2.length = 0;
gdjs.VenusCode.GDNewObjectObjects3.length = 0;
gdjs.VenusCode.GDgamelifeObjects1.length = 0;
gdjs.VenusCode.GDgamelifeObjects2.length = 0;
gdjs.VenusCode.GDgamelifeObjects3.length = 0;
gdjs.VenusCode.GDfpsObjects1.length = 0;
gdjs.VenusCode.GDfpsObjects2.length = 0;
gdjs.VenusCode.GDfpsObjects3.length = 0;
gdjs.VenusCode.GDNewObject2Objects1.length = 0;
gdjs.VenusCode.GDNewObject2Objects2.length = 0;
gdjs.VenusCode.GDNewObject2Objects3.length = 0;
gdjs.VenusCode.GDNewObject3Objects1.length = 0;
gdjs.VenusCode.GDNewObject3Objects2.length = 0;
gdjs.VenusCode.GDNewObject3Objects3.length = 0;

gdjs.VenusCode.eventsList16(runtimeScene);
return;

}

gdjs['VenusCode'] = gdjs.VenusCode;
