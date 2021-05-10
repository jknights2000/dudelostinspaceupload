gdjs.MarzCode = {};
gdjs.MarzCode.forEachIndex2 = 0;

gdjs.MarzCode.forEachIndex3 = 0;

gdjs.MarzCode.forEachObjects2 = [];

gdjs.MarzCode.forEachObjects3 = [];

gdjs.MarzCode.forEachTemporary2 = null;

gdjs.MarzCode.forEachTemporary3 = null;

gdjs.MarzCode.forEachTotalCount2 = 0;

gdjs.MarzCode.forEachTotalCount3 = 0;

gdjs.MarzCode.GDPlayerObjects1= [];
gdjs.MarzCode.GDPlayerObjects2= [];
gdjs.MarzCode.GDPlayerObjects3= [];
gdjs.MarzCode.GDalienfloorObjects1= [];
gdjs.MarzCode.GDalienfloorObjects2= [];
gdjs.MarzCode.GDalienfloorObjects3= [];
gdjs.MarzCode.GDrocketplatObjects1= [];
gdjs.MarzCode.GDrocketplatObjects2= [];
gdjs.MarzCode.GDrocketplatObjects3= [];
gdjs.MarzCode.GDcloudObjects1= [];
gdjs.MarzCode.GDcloudObjects2= [];
gdjs.MarzCode.GDcloudObjects3= [];
gdjs.MarzCode.GDboltObjects1= [];
gdjs.MarzCode.GDboltObjects2= [];
gdjs.MarzCode.GDboltObjects3= [];
gdjs.MarzCode.GDscoreObjects1= [];
gdjs.MarzCode.GDscoreObjects2= [];
gdjs.MarzCode.GDscoreObjects3= [];
gdjs.MarzCode.GDliveObjects1= [];
gdjs.MarzCode.GDliveObjects2= [];
gdjs.MarzCode.GDliveObjects3= [];
gdjs.MarzCode.GDlivesObjects1= [];
gdjs.MarzCode.GDlivesObjects2= [];
gdjs.MarzCode.GDlivesObjects3= [];
gdjs.MarzCode.GDrobottingObjects1= [];
gdjs.MarzCode.GDrobottingObjects2= [];
gdjs.MarzCode.GDrobottingObjects3= [];
gdjs.MarzCode.GDleftObjects1= [];
gdjs.MarzCode.GDleftObjects2= [];
gdjs.MarzCode.GDleftObjects3= [];
gdjs.MarzCode.GDrightObjects1= [];
gdjs.MarzCode.GDrightObjects2= [];
gdjs.MarzCode.GDrightObjects3= [];
gdjs.MarzCode.GDcrashedshipObjects1= [];
gdjs.MarzCode.GDcrashedshipObjects2= [];
gdjs.MarzCode.GDcrashedshipObjects3= [];
gdjs.MarzCode.GDnotcompleteObjects1= [];
gdjs.MarzCode.GDnotcompleteObjects2= [];
gdjs.MarzCode.GDnotcompleteObjects3= [];
gdjs.MarzCode.GDendObjects1= [];
gdjs.MarzCode.GDendObjects2= [];
gdjs.MarzCode.GDendObjects3= [];
gdjs.MarzCode.GDtimerObjects1= [];
gdjs.MarzCode.GDtimerObjects2= [];
gdjs.MarzCode.GDtimerObjects3= [];
gdjs.MarzCode.GDcheatsObjects1= [];
gdjs.MarzCode.GDcheatsObjects2= [];
gdjs.MarzCode.GDcheatsObjects3= [];
gdjs.MarzCode.GDBlueEnemy1Objects1= [];
gdjs.MarzCode.GDBlueEnemy1Objects2= [];
gdjs.MarzCode.GDBlueEnemy1Objects3= [];
gdjs.MarzCode.GDRedLaser08Objects1= [];
gdjs.MarzCode.GDRedLaser08Objects2= [];
gdjs.MarzCode.GDRedLaser08Objects3= [];
gdjs.MarzCode.GDGreenLaser09Objects1= [];
gdjs.MarzCode.GDGreenLaser09Objects2= [];
gdjs.MarzCode.GDGreenLaser09Objects3= [];
gdjs.MarzCode.GDNewObject22Objects1= [];
gdjs.MarzCode.GDNewObject22Objects2= [];
gdjs.MarzCode.GDNewObject22Objects3= [];
gdjs.MarzCode.GDNewObject2Objects1= [];
gdjs.MarzCode.GDNewObject2Objects2= [];
gdjs.MarzCode.GDNewObject2Objects3= [];
gdjs.MarzCode.GDNewObjectObjects1= [];
gdjs.MarzCode.GDNewObjectObjects2= [];
gdjs.MarzCode.GDNewObjectObjects3= [];
gdjs.MarzCode.GDbackground1Objects1= [];
gdjs.MarzCode.GDbackground1Objects2= [];
gdjs.MarzCode.GDbackground1Objects3= [];
gdjs.MarzCode.GDbackground2Objects1= [];
gdjs.MarzCode.GDbackground2Objects2= [];
gdjs.MarzCode.GDbackground2Objects3= [];
gdjs.MarzCode.GDmartianObjects1= [];
gdjs.MarzCode.GDmartianObjects2= [];
gdjs.MarzCode.GDmartianObjects3= [];
gdjs.MarzCode.GDNewObject3Objects1= [];
gdjs.MarzCode.GDNewObject3Objects2= [];
gdjs.MarzCode.GDNewObject3Objects3= [];
gdjs.MarzCode.GDgamelifeObjects1= [];
gdjs.MarzCode.GDgamelifeObjects2= [];
gdjs.MarzCode.GDgamelifeObjects3= [];
gdjs.MarzCode.GDfpsObjects1= [];
gdjs.MarzCode.GDfpsObjects2= [];
gdjs.MarzCode.GDfpsObjects3= [];

gdjs.MarzCode.conditionTrue_0 = {val:false};
gdjs.MarzCode.condition0IsTrue_0 = {val:false};
gdjs.MarzCode.condition1IsTrue_0 = {val:false};
gdjs.MarzCode.condition2IsTrue_0 = {val:false};
gdjs.MarzCode.condition3IsTrue_0 = {val:false};
gdjs.MarzCode.conditionTrue_1 = {val:false};
gdjs.MarzCode.condition0IsTrue_1 = {val:false};
gdjs.MarzCode.condition1IsTrue_1 = {val:false};
gdjs.MarzCode.condition2IsTrue_1 = {val:false};
gdjs.MarzCode.condition3IsTrue_1 = {val:false};


gdjs.MarzCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.MarzCode.GDPlayerObjects1, gdjs.MarzCode.GDPlayerObjects2);


gdjs.MarzCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MarzCode.GDPlayerObjects2.length;i<l;++i) {
    if ( !(gdjs.MarzCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.MarzCode.condition0IsTrue_0.val = true;
        gdjs.MarzCode.GDPlayerObjects2[k] = gdjs.MarzCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.MarzCode.GDPlayerObjects2.length = k;}if (gdjs.MarzCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MarzCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.MarzCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.MarzCode.GDPlayerObjects2[i].setAnimationName("stand");
}
}}

}


{

gdjs.copyArray(gdjs.MarzCode.GDPlayerObjects1, gdjs.MarzCode.GDPlayerObjects2);


gdjs.MarzCode.condition0IsTrue_0.val = false;
gdjs.MarzCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MarzCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.MarzCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.MarzCode.condition0IsTrue_0.val = true;
        gdjs.MarzCode.GDPlayerObjects2[k] = gdjs.MarzCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.MarzCode.GDPlayerObjects2.length = k;}if ( gdjs.MarzCode.condition0IsTrue_0.val ) {
{
gdjs.MarzCode.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}}
if (gdjs.MarzCode.condition1IsTrue_0.val) {
/* Reuse gdjs.MarzCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.MarzCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.MarzCode.GDPlayerObjects2[i].setAnimationName("run");
}
}{for(var i = 0, len = gdjs.MarzCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.MarzCode.GDPlayerObjects2[i].playAnimation();
}
}{for(var i = 0, len = gdjs.MarzCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.MarzCode.GDPlayerObjects2[i].flipX(false);
}
}}

}


{

/* Reuse gdjs.MarzCode.GDPlayerObjects1 */

gdjs.MarzCode.condition0IsTrue_0.val = false;
gdjs.MarzCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MarzCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.MarzCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.MarzCode.condition0IsTrue_0.val = true;
        gdjs.MarzCode.GDPlayerObjects1[k] = gdjs.MarzCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.MarzCode.GDPlayerObjects1.length = k;}if ( gdjs.MarzCode.condition0IsTrue_0.val ) {
{
gdjs.MarzCode.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}}
if (gdjs.MarzCode.condition1IsTrue_0.val) {
/* Reuse gdjs.MarzCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.MarzCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.MarzCode.GDPlayerObjects1[i].setAnimationName("run");
}
}{for(var i = 0, len = gdjs.MarzCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.MarzCode.GDPlayerObjects1[i].playAnimation();
}
}{for(var i = 0, len = gdjs.MarzCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.MarzCode.GDPlayerObjects1[i].flipX(true);
}
}}

}


};gdjs.MarzCode.mapOfGDgdjs_46MarzCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.MarzCode.GDPlayerObjects1});gdjs.MarzCode.mapOfGDgdjs_46MarzCode_46GDboltObjects1Objects = Hashtable.newFrom({"bolt": gdjs.MarzCode.GDboltObjects1});gdjs.MarzCode.eventsList1 = function(runtimeScene) {

{


gdjs.MarzCode.condition0IsTrue_0.val = false;
{
gdjs.MarzCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(17)) == 0;
}if (gdjs.MarzCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "66136__aji__ding30603-spedup.wav", false, 5, 1);
}}

}


};gdjs.MarzCode.mapOfGDgdjs_46MarzCode_46GDBlueEnemy1Objects1Objects = Hashtable.newFrom({"BlueEnemy1": gdjs.MarzCode.GDBlueEnemy1Objects1});gdjs.MarzCode.mapOfGDgdjs_46MarzCode_46GDleftObjects1Objects = Hashtable.newFrom({"left": gdjs.MarzCode.GDleftObjects1});gdjs.MarzCode.mapOfGDgdjs_46MarzCode_46GDBlueEnemy1Objects1Objects = Hashtable.newFrom({"BlueEnemy1": gdjs.MarzCode.GDBlueEnemy1Objects1});gdjs.MarzCode.mapOfGDgdjs_46MarzCode_46GDrightObjects1Objects = Hashtable.newFrom({"right": gdjs.MarzCode.GDrightObjects1});gdjs.MarzCode.mapOfGDgdjs_46MarzCode_46GDmartianObjects1Objects = Hashtable.newFrom({"martian": gdjs.MarzCode.GDmartianObjects1});gdjs.MarzCode.mapOfGDgdjs_46MarzCode_46GDleftObjects1Objects = Hashtable.newFrom({"left": gdjs.MarzCode.GDleftObjects1});gdjs.MarzCode.mapOfGDgdjs_46MarzCode_46GDmartianObjects1Objects = Hashtable.newFrom({"martian": gdjs.MarzCode.GDmartianObjects1});gdjs.MarzCode.mapOfGDgdjs_46MarzCode_46GDrightObjects1Objects = Hashtable.newFrom({"right": gdjs.MarzCode.GDrightObjects1});gdjs.MarzCode.eventsList2 = function(runtimeScene) {

};gdjs.MarzCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("bolt"), gdjs.MarzCode.GDboltObjects1);

for(gdjs.MarzCode.forEachIndex2 = 0;gdjs.MarzCode.forEachIndex2 < gdjs.MarzCode.GDboltObjects1.length;++gdjs.MarzCode.forEachIndex2) {
gdjs.MarzCode.GDboltObjects2.length = 0;


gdjs.MarzCode.forEachTemporary2 = gdjs.MarzCode.GDboltObjects1[gdjs.MarzCode.forEachIndex2];
gdjs.MarzCode.GDboltObjects2.push(gdjs.MarzCode.forEachTemporary2);
gdjs.MarzCode.condition0IsTrue_0.val = false;
{
gdjs.MarzCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.MarzCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(4).add(1);
}}
}

}


};gdjs.MarzCode.mapOfGDgdjs_46MarzCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.MarzCode.GDPlayerObjects1});gdjs.MarzCode.mapOfGDgdjs_46MarzCode_46GDmartianObjects1Objects = Hashtable.newFrom({"martian": gdjs.MarzCode.GDmartianObjects1});gdjs.MarzCode.mapOfGDgdjs_46MarzCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.MarzCode.GDPlayerObjects1});gdjs.MarzCode.mapOfGDgdjs_46MarzCode_46GDBlueEnemy1Objects1Objects = Hashtable.newFrom({"BlueEnemy1": gdjs.MarzCode.GDBlueEnemy1Objects1});gdjs.MarzCode.mapOfGDgdjs_46MarzCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.MarzCode.GDPlayerObjects1});gdjs.MarzCode.mapOfGDgdjs_46MarzCode_46GDmartianObjects1Objects = Hashtable.newFrom({"martian": gdjs.MarzCode.GDmartianObjects1});gdjs.MarzCode.mapOfGDgdjs_46MarzCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.MarzCode.GDPlayerObjects1});gdjs.MarzCode.mapOfGDgdjs_46MarzCode_46GDcrashedshipObjects1Objects = Hashtable.newFrom({"crashedship": gdjs.MarzCode.GDcrashedshipObjects1});gdjs.MarzCode.mapOfGDgdjs_46MarzCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.MarzCode.GDPlayerObjects1});gdjs.MarzCode.mapOfGDgdjs_46MarzCode_46GDcrashedshipObjects1Objects = Hashtable.newFrom({"crashedship": gdjs.MarzCode.GDcrashedshipObjects1});gdjs.MarzCode.mapOfGDgdjs_46MarzCode_46GDcrashedshipObjects1Objects = Hashtable.newFrom({"crashedship": gdjs.MarzCode.GDcrashedshipObjects1});gdjs.MarzCode.mapOfGDgdjs_46MarzCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.MarzCode.GDPlayerObjects1});gdjs.MarzCode.mapOfGDgdjs_46MarzCode_46GDcrashedshipObjects1Objects = Hashtable.newFrom({"crashedship": gdjs.MarzCode.GDcrashedshipObjects1});gdjs.MarzCode.mapOfGDgdjs_46MarzCode_46GDendObjects1Objects = Hashtable.newFrom({"end": gdjs.MarzCode.GDendObjects1});gdjs.MarzCode.mapOfGDgdjs_46MarzCode_46GDrobottingObjects1Objects = Hashtable.newFrom({"robotting": gdjs.MarzCode.GDrobottingObjects1});gdjs.MarzCode.mapOfGDgdjs_46MarzCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.MarzCode.GDPlayerObjects1});gdjs.MarzCode.mapOfGDgdjs_46MarzCode_46GDBlueEnemy1Objects1Objects = Hashtable.newFrom({"BlueEnemy1": gdjs.MarzCode.GDBlueEnemy1Objects1});gdjs.MarzCode.mapOfGDgdjs_46MarzCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.MarzCode.GDPlayerObjects1});gdjs.MarzCode.eventsList4 = function(runtimeScene) {

};gdjs.MarzCode.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("bolt"), gdjs.MarzCode.GDboltObjects1);

for(gdjs.MarzCode.forEachIndex2 = 0;gdjs.MarzCode.forEachIndex2 < gdjs.MarzCode.GDboltObjects1.length;++gdjs.MarzCode.forEachIndex2) {
gdjs.MarzCode.GDboltObjects2.length = 0;


gdjs.MarzCode.forEachTemporary2 = gdjs.MarzCode.GDboltObjects1[gdjs.MarzCode.forEachIndex2];
gdjs.MarzCode.GDboltObjects2.push(gdjs.MarzCode.forEachTemporary2);
if (true) {
{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}{for(var i = 0, len = gdjs.MarzCode.GDboltObjects2.length ;i < len;++i) {
    gdjs.MarzCode.GDboltObjects2[i].deleteFromScene(runtimeScene);
}
}}
}

}


};gdjs.MarzCode.eventsList6 = function(runtimeScene) {

};gdjs.MarzCode.eventsList7 = function(runtimeScene) {

};gdjs.MarzCode.eventsList8 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("martian"), gdjs.MarzCode.GDmartianObjects2);

for(gdjs.MarzCode.forEachIndex3 = 0;gdjs.MarzCode.forEachIndex3 < gdjs.MarzCode.GDmartianObjects2.length;++gdjs.MarzCode.forEachIndex3) {
gdjs.MarzCode.GDmartianObjects3.length = 0;


gdjs.MarzCode.forEachTemporary3 = gdjs.MarzCode.GDmartianObjects2[gdjs.MarzCode.forEachIndex3];
gdjs.MarzCode.GDmartianObjects3.push(gdjs.MarzCode.forEachTemporary3);
if (true) {
{for(var i = 0, len = gdjs.MarzCode.GDmartianObjects3.length ;i < len;++i) {
    gdjs.MarzCode.GDmartianObjects3[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(13).sub(1);
}}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlueEnemy1"), gdjs.MarzCode.GDBlueEnemy1Objects1);

for(gdjs.MarzCode.forEachIndex2 = 0;gdjs.MarzCode.forEachIndex2 < gdjs.MarzCode.GDBlueEnemy1Objects1.length;++gdjs.MarzCode.forEachIndex2) {
gdjs.MarzCode.GDBlueEnemy1Objects2.length = 0;


gdjs.MarzCode.forEachTemporary2 = gdjs.MarzCode.GDBlueEnemy1Objects1[gdjs.MarzCode.forEachIndex2];
gdjs.MarzCode.GDBlueEnemy1Objects2.push(gdjs.MarzCode.forEachTemporary2);
if (true) {
{for(var i = 0, len = gdjs.MarzCode.GDBlueEnemy1Objects2.length ;i < len;++i) {
    gdjs.MarzCode.GDBlueEnemy1Objects2[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(13).sub(1);
}}
}

}


};gdjs.MarzCode.mapOfGDgdjs_46MarzCode_46GDRedLaser08Objects1Objects = Hashtable.newFrom({"RedLaser08": gdjs.MarzCode.GDRedLaser08Objects1});gdjs.MarzCode.mapOfGDgdjs_46MarzCode_46GDGreenLaser09Objects1Objects = Hashtable.newFrom({"GreenLaser09": gdjs.MarzCode.GDGreenLaser09Objects1});gdjs.MarzCode.mapOfGDgdjs_46MarzCode_46GDGreenLaser09Objects1Objects = Hashtable.newFrom({"GreenLaser09": gdjs.MarzCode.GDGreenLaser09Objects1});gdjs.MarzCode.mapOfGDgdjs_46MarzCode_46GDRedLaser08Objects1Objects = Hashtable.newFrom({"RedLaser08": gdjs.MarzCode.GDRedLaser08Objects1});gdjs.MarzCode.mapOfGDgdjs_46MarzCode_46GDGreenLaser09Objects1Objects = Hashtable.newFrom({"GreenLaser09": gdjs.MarzCode.GDGreenLaser09Objects1});gdjs.MarzCode.mapOfGDgdjs_46MarzCode_46GDalienfloorObjects1Objects = Hashtable.newFrom({"alienfloor": gdjs.MarzCode.GDalienfloorObjects1});gdjs.MarzCode.mapOfGDgdjs_46MarzCode_46GDRedLaser08Objects1Objects = Hashtable.newFrom({"RedLaser08": gdjs.MarzCode.GDRedLaser08Objects1});gdjs.MarzCode.mapOfGDgdjs_46MarzCode_46GDalienfloorObjects1Objects = Hashtable.newFrom({"alienfloor": gdjs.MarzCode.GDalienfloorObjects1});gdjs.MarzCode.mapOfGDgdjs_46MarzCode_46GDGreenLaser09Objects1Objects = Hashtable.newFrom({"GreenLaser09": gdjs.MarzCode.GDGreenLaser09Objects1});gdjs.MarzCode.mapOfGDgdjs_46MarzCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.MarzCode.GDPlayerObjects1});gdjs.MarzCode.mapOfGDgdjs_46MarzCode_46GDRedLaser08Objects1Objects = Hashtable.newFrom({"RedLaser08": gdjs.MarzCode.GDRedLaser08Objects1});gdjs.MarzCode.mapOfGDgdjs_46MarzCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.MarzCode.GDPlayerObjects1});gdjs.MarzCode.eventsList9 = function(runtimeScene) {

};gdjs.MarzCode.eventsList10 = function(runtimeScene) {

};gdjs.MarzCode.eventsList11 = function(runtimeScene) {

};gdjs.MarzCode.eventsList12 = function(runtimeScene) {

};gdjs.MarzCode.eventsList13 = function(runtimeScene) {

};gdjs.MarzCode.eventsList14 = function(runtimeScene) {

{


gdjs.MarzCode.condition0IsTrue_0.val = false;
gdjs.MarzCode.condition1IsTrue_0.val = false;
{
gdjs.MarzCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(16)) == 0;
}if ( gdjs.MarzCode.condition0IsTrue_0.val ) {
{
gdjs.MarzCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(17)) == 0;
}}
if (gdjs.MarzCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(16).setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(17).setNumber(1);
}}

}


{


gdjs.MarzCode.condition0IsTrue_0.val = false;
gdjs.MarzCode.condition1IsTrue_0.val = false;
{
gdjs.MarzCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(16)) == 0;
}if ( gdjs.MarzCode.condition0IsTrue_0.val ) {
{
gdjs.MarzCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(17)) == 1;
}}
if (gdjs.MarzCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(16).setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(17).setNumber(0);
}}

}


};gdjs.MarzCode.eventsList15 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("fps"), gdjs.MarzCode.GDfpsObjects2);

gdjs.MarzCode.condition0IsTrue_0.val = false;
gdjs.MarzCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MarzCode.GDfpsObjects2.length;i<l;++i) {
    if ( !(gdjs.MarzCode.GDfpsObjects2[i].isVisible()) ) {
        gdjs.MarzCode.condition0IsTrue_0.val = true;
        gdjs.MarzCode.GDfpsObjects2[k] = gdjs.MarzCode.GDfpsObjects2[i];
        ++k;
    }
}
gdjs.MarzCode.GDfpsObjects2.length = k;}if ( gdjs.MarzCode.condition0IsTrue_0.val ) {
{
gdjs.MarzCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(15)) == 0;
}}
if (gdjs.MarzCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject3"), gdjs.MarzCode.GDNewObject3Objects2);
gdjs.copyArray(runtimeScene.getObjects("cheats"), gdjs.MarzCode.GDcheatsObjects2);
/* Reuse gdjs.MarzCode.GDfpsObjects2 */
gdjs.copyArray(runtimeScene.getObjects("gamelife"), gdjs.MarzCode.GDgamelifeObjects2);
{runtimeScene.getGame().getVariables().getFromIndex(15).setNumber(1);
}{for(var i = 0, len = gdjs.MarzCode.GDfpsObjects2.length ;i < len;++i) {
    gdjs.MarzCode.GDfpsObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.MarzCode.GDcheatsObjects2.length ;i < len;++i) {
    gdjs.MarzCode.GDcheatsObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.MarzCode.GDNewObject3Objects2.length ;i < len;++i) {
    gdjs.MarzCode.GDNewObject3Objects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.MarzCode.GDgamelifeObjects2.length ;i < len;++i) {
    gdjs.MarzCode.GDgamelifeObjects2[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("fps"), gdjs.MarzCode.GDfpsObjects1);

gdjs.MarzCode.condition0IsTrue_0.val = false;
gdjs.MarzCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MarzCode.GDfpsObjects1.length;i<l;++i) {
    if ( gdjs.MarzCode.GDfpsObjects1[i].isVisible() ) {
        gdjs.MarzCode.condition0IsTrue_0.val = true;
        gdjs.MarzCode.GDfpsObjects1[k] = gdjs.MarzCode.GDfpsObjects1[i];
        ++k;
    }
}
gdjs.MarzCode.GDfpsObjects1.length = k;}if ( gdjs.MarzCode.condition0IsTrue_0.val ) {
{
gdjs.MarzCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(15)) == 0;
}}
if (gdjs.MarzCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject3"), gdjs.MarzCode.GDNewObject3Objects1);
gdjs.copyArray(runtimeScene.getObjects("cheats"), gdjs.MarzCode.GDcheatsObjects1);
/* Reuse gdjs.MarzCode.GDfpsObjects1 */
gdjs.copyArray(runtimeScene.getObjects("gamelife"), gdjs.MarzCode.GDgamelifeObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(15).setNumber(1);
}{for(var i = 0, len = gdjs.MarzCode.GDfpsObjects1.length ;i < len;++i) {
    gdjs.MarzCode.GDfpsObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.MarzCode.GDcheatsObjects1.length ;i < len;++i) {
    gdjs.MarzCode.GDcheatsObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.MarzCode.GDNewObject3Objects1.length ;i < len;++i) {
    gdjs.MarzCode.GDNewObject3Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.MarzCode.GDgamelifeObjects1.length ;i < len;++i) {
    gdjs.MarzCode.GDgamelifeObjects1[i].hide();
}
}}

}


};gdjs.MarzCode.eventsList16 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.MarzCode.GDPlayerObjects1);

gdjs.MarzCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MarzCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.MarzCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.MarzCode.condition0IsTrue_0.val = true;
        gdjs.MarzCode.GDPlayerObjects1[k] = gdjs.MarzCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.MarzCode.GDPlayerObjects1.length = k;}if (gdjs.MarzCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MarzCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.MarzCode.GDPlayerObjects1);

gdjs.MarzCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MarzCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.MarzCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.MarzCode.condition0IsTrue_0.val = true;
        gdjs.MarzCode.GDPlayerObjects1[k] = gdjs.MarzCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.MarzCode.GDPlayerObjects1.length = k;}if (gdjs.MarzCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MarzCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.MarzCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.MarzCode.GDPlayerObjects1[i].setAnimationName("jump");
}
}{runtimeScene.getGame().getVariables().getFromIndex(3).setString("none");
}{for(var i = 0, len = gdjs.MarzCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.MarzCode.GDPlayerObjects1[i].clearForces();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.MarzCode.GDPlayerObjects1);

gdjs.MarzCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MarzCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.MarzCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.MarzCode.condition0IsTrue_0.val = true;
        gdjs.MarzCode.GDPlayerObjects1[k] = gdjs.MarzCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.MarzCode.GDPlayerObjects1.length = k;}if (gdjs.MarzCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MarzCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.MarzCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.MarzCode.GDPlayerObjects1[i].setAnimationName("jump");
}
}}

}


{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.MarzCode.GDPlayerObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.MarzCode.GDPlayerObjects1.length !== 0 ? gdjs.MarzCode.GDPlayerObjects1[0] : null), false, "", 0);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("rocketplat"), gdjs.MarzCode.GDrocketplatObjects1);
{for(var i = 0, len = gdjs.MarzCode.GDrocketplatObjects1.length ;i < len;++i) {
    gdjs.MarzCode.GDrocketplatObjects1[i].setZOrder(1);
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("background1"), gdjs.MarzCode.GDbackground1Objects1);
gdjs.copyArray(runtimeScene.getObjects("background2"), gdjs.MarzCode.GDbackground2Objects1);
gdjs.copyArray(runtimeScene.getObjects("cloud"), gdjs.MarzCode.GDcloudObjects1);
gdjs.copyArray(runtimeScene.getObjects("crashedship"), gdjs.MarzCode.GDcrashedshipObjects1);
gdjs.copyArray(runtimeScene.getObjects("martian"), gdjs.MarzCode.GDmartianObjects1);
{for(var i = 0, len = gdjs.MarzCode.GDcloudObjects1.length ;i < len;++i) {
    gdjs.MarzCode.GDcloudObjects1[i].setZOrder(-(2));
}
}{for(var i = 0, len = gdjs.MarzCode.GDcrashedshipObjects1.length ;i < len;++i) {
    gdjs.MarzCode.GDcrashedshipObjects1[i].setZOrder(1);
}
}{for(var i = 0, len = gdjs.MarzCode.GDbackground1Objects1.length ;i < len;++i) {
    gdjs.MarzCode.GDbackground1Objects1[i].setZOrder(-(3));
}
}{for(var i = 0, len = gdjs.MarzCode.GDbackground2Objects1.length ;i < len;++i) {
    gdjs.MarzCode.GDbackground2Objects1[i].setZOrder(-(3));
}
}{for(var i = 0, len = gdjs.MarzCode.GDmartianObjects1.length ;i < len;++i) {
    gdjs.MarzCode.GDmartianObjects1[i].setZOrder(1);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.MarzCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("bolt"), gdjs.MarzCode.GDboltObjects1);

gdjs.MarzCode.condition0IsTrue_0.val = false;
{
gdjs.MarzCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MarzCode.mapOfGDgdjs_46MarzCode_46GDPlayerObjects1Objects, gdjs.MarzCode.mapOfGDgdjs_46MarzCode_46GDboltObjects1Objects, false, runtimeScene, false);
}if (gdjs.MarzCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MarzCode.GDboltObjects1 */
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.MarzCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.MarzCode.GDboltObjects1.length ;i < len;++i) {
    gdjs.MarzCode.GDboltObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}{for(var i = 0, len = gdjs.MarzCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.MarzCode.GDscoreObjects1[i].setString("Score:" + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0))));
}
}
{ //Subevents
gdjs.MarzCode.eventsList1(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.MarzCode.condition0IsTrue_0.val = false;
{
gdjs.MarzCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "f");
}if (gdjs.MarzCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}}

}


{


gdjs.MarzCode.condition0IsTrue_0.val = false;
{
gdjs.MarzCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Escape");
}if (gdjs.MarzCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, false, true);
}}

}


{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("NewObject3"), gdjs.MarzCode.GDNewObject3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.MarzCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("cheats"), gdjs.MarzCode.GDcheatsObjects1);
gdjs.copyArray(runtimeScene.getObjects("fps"), gdjs.MarzCode.GDfpsObjects1);
gdjs.copyArray(runtimeScene.getObjects("gamelife"), gdjs.MarzCode.GDgamelifeObjects1);
gdjs.copyArray(runtimeScene.getObjects("live"), gdjs.MarzCode.GDliveObjects1);
gdjs.copyArray(runtimeScene.getObjects("lives"), gdjs.MarzCode.GDlivesObjects1);
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.MarzCode.GDscoreObjects1);
gdjs.copyArray(runtimeScene.getObjects("timer"), gdjs.MarzCode.GDtimerObjects1);
{for(var i = 0, len = gdjs.MarzCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.MarzCode.GDscoreObjects1[i].setString("Amount of bolts " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0))) + "/ " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4))));
}
}{for(var i = 0, len = gdjs.MarzCode.GDlivesObjects1.length ;i < len;++i) {
    gdjs.MarzCode.GDlivesObjects1[i].setString("X" + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1))));
}
}{for(var i = 0, len = gdjs.MarzCode.GDtimerObjects1.length ;i < len;++i) {
    gdjs.MarzCode.GDtimerObjects1[i].setString("Time: " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9))));
}
}{for(var i = 0, len = gdjs.MarzCode.GDfpsObjects1.length ;i < len;++i) {
    gdjs.MarzCode.GDfpsObjects1[i].setString(gdjs.evtTools.common.toString(Math.round(1 / gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene))) + "fps");
}
}{for(var i = 0, len = gdjs.MarzCode.GDNewObject3Objects1.length ;i < len;++i) {
    gdjs.MarzCode.GDNewObject3Objects1[i].setString("no of objects : " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(13))));
}
}{for(var i = 0, len = gdjs.MarzCode.GDgamelifeObjects1.length ;i < len;++i) {
    gdjs.MarzCode.GDgamelifeObjects1[i].setString("Total Game time = " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(14))));
}
}{for(var i = 0, len = gdjs.MarzCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.MarzCode.GDscoreObjects1[i].setX((( gdjs.MarzCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.MarzCode.GDPlayerObjects1[0].getPointX("")) - 200);
}
}{for(var i = 0, len = gdjs.MarzCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.MarzCode.GDscoreObjects1[i].setY((( gdjs.MarzCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.MarzCode.GDPlayerObjects1[0].getPointY("")) - 200);
}
}{for(var i = 0, len = gdjs.MarzCode.GDlivesObjects1.length ;i < len;++i) {
    gdjs.MarzCode.GDlivesObjects1[i].setX((( gdjs.MarzCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.MarzCode.GDPlayerObjects1[0].getPointX("")) - 130);
}
}{for(var i = 0, len = gdjs.MarzCode.GDlivesObjects1.length ;i < len;++i) {
    gdjs.MarzCode.GDlivesObjects1[i].setY((( gdjs.MarzCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.MarzCode.GDPlayerObjects1[0].getPointY("")) - 150);
}
}{for(var i = 0, len = gdjs.MarzCode.GDliveObjects1.length ;i < len;++i) {
    gdjs.MarzCode.GDliveObjects1[i].setX((( gdjs.MarzCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.MarzCode.GDPlayerObjects1[0].getPointX("")) - 200);
}
}{for(var i = 0, len = gdjs.MarzCode.GDliveObjects1.length ;i < len;++i) {
    gdjs.MarzCode.GDliveObjects1[i].setY((( gdjs.MarzCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.MarzCode.GDPlayerObjects1[0].getPointY("")) - 170);
}
}{for(var i = 0, len = gdjs.MarzCode.GDtimerObjects1.length ;i < len;++i) {
    gdjs.MarzCode.GDtimerObjects1[i].setX((( gdjs.MarzCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.MarzCode.GDPlayerObjects1[0].getPointX("")) + 200);
}
}{for(var i = 0, len = gdjs.MarzCode.GDtimerObjects1.length ;i < len;++i) {
    gdjs.MarzCode.GDtimerObjects1[i].setY((( gdjs.MarzCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.MarzCode.GDPlayerObjects1[0].getPointY("")) - 200);
}
}{for(var i = 0, len = gdjs.MarzCode.GDcheatsObjects1.length ;i < len;++i) {
    gdjs.MarzCode.GDcheatsObjects1[i].setX((( gdjs.MarzCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.MarzCode.GDPlayerObjects1[0].getPointX("")));
}
}{for(var i = 0, len = gdjs.MarzCode.GDcheatsObjects1.length ;i < len;++i) {
    gdjs.MarzCode.GDcheatsObjects1[i].setY((( gdjs.MarzCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.MarzCode.GDPlayerObjects1[0].getPointY("")) - 200);
}
}{for(var i = 0, len = gdjs.MarzCode.GDfpsObjects1.length ;i < len;++i) {
    gdjs.MarzCode.GDfpsObjects1[i].setX((( gdjs.MarzCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.MarzCode.GDPlayerObjects1[0].getPointX("")) + 290);
}
}{for(var i = 0, len = gdjs.MarzCode.GDfpsObjects1.length ;i < len;++i) {
    gdjs.MarzCode.GDfpsObjects1[i].setY((( gdjs.MarzCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.MarzCode.GDPlayerObjects1[0].getPointY("")) - 200);
}
}{for(var i = 0, len = gdjs.MarzCode.GDNewObject3Objects1.length ;i < len;++i) {
    gdjs.MarzCode.GDNewObject3Objects1[i].setX((( gdjs.MarzCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.MarzCode.GDPlayerObjects1[0].getPointX("")) + 220);
}
}{for(var i = 0, len = gdjs.MarzCode.GDNewObject3Objects1.length ;i < len;++i) {
    gdjs.MarzCode.GDNewObject3Objects1[i].setY((( gdjs.MarzCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.MarzCode.GDPlayerObjects1[0].getPointY("")) - 160);
}
}{for(var i = 0, len = gdjs.MarzCode.GDgamelifeObjects1.length ;i < len;++i) {
    gdjs.MarzCode.GDgamelifeObjects1[i].setX((( gdjs.MarzCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.MarzCode.GDPlayerObjects1[0].getPointX("")) + 220);
}
}{for(var i = 0, len = gdjs.MarzCode.GDgamelifeObjects1.length ;i < len;++i) {
    gdjs.MarzCode.GDgamelifeObjects1[i].setY((( gdjs.MarzCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.MarzCode.GDPlayerObjects1[0].getPointY("")) - 140);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.MarzCode.GDPlayerObjects1);

gdjs.MarzCode.condition0IsTrue_0.val = false;
gdjs.MarzCode.condition1IsTrue_0.val = false;
gdjs.MarzCode.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MarzCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.MarzCode.GDPlayerObjects1[i].getY() >= 600 ) {
        gdjs.MarzCode.condition0IsTrue_0.val = true;
        gdjs.MarzCode.GDPlayerObjects1[k] = gdjs.MarzCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.MarzCode.GDPlayerObjects1.length = k;}if ( gdjs.MarzCode.condition0IsTrue_0.val ) {
{
gdjs.MarzCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) != 0;
}if ( gdjs.MarzCode.condition1IsTrue_0.val ) {
{
gdjs.MarzCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) != 1;
}}
}
if (gdjs.MarzCode.condition2IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).sub(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}{runtimeScene.getGame().getVariables().getFromIndex(1).sub(1);
}{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Marz");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.MarzCode.GDPlayerObjects1);

gdjs.MarzCode.condition0IsTrue_0.val = false;
gdjs.MarzCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MarzCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.MarzCode.GDPlayerObjects1[i].getY() >= 600 ) {
        gdjs.MarzCode.condition0IsTrue_0.val = true;
        gdjs.MarzCode.GDPlayerObjects1[k] = gdjs.MarzCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.MarzCode.GDPlayerObjects1.length = k;}if ( gdjs.MarzCode.condition0IsTrue_0.val ) {
{
gdjs.MarzCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) == 1;
}}
if (gdjs.MarzCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Marz");
}}

}


{


gdjs.MarzCode.condition0IsTrue_0.val = false;
{
gdjs.MarzCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 0;
}if (gdjs.MarzCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Dead", true);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("BlueEnemy1"), gdjs.MarzCode.GDBlueEnemy1Objects1);
gdjs.copyArray(runtimeScene.getObjects("left"), gdjs.MarzCode.GDleftObjects1);

gdjs.MarzCode.condition0IsTrue_0.val = false;
{
gdjs.MarzCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MarzCode.mapOfGDgdjs_46MarzCode_46GDBlueEnemy1Objects1Objects, gdjs.MarzCode.mapOfGDgdjs_46MarzCode_46GDleftObjects1Objects, false, runtimeScene, false);
}if (gdjs.MarzCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(10).setString("Left");
}}

}


{


gdjs.MarzCode.condition0IsTrue_0.val = false;
{
gdjs.MarzCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(10)) == "Left";
}if (gdjs.MarzCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BlueEnemy1"), gdjs.MarzCode.GDBlueEnemy1Objects1);
{for(var i = 0, len = gdjs.MarzCode.GDBlueEnemy1Objects1.length ;i < len;++i) {
    gdjs.MarzCode.GDBlueEnemy1Objects1[i].addPolarForce(180, 100, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlueEnemy1"), gdjs.MarzCode.GDBlueEnemy1Objects1);
gdjs.copyArray(runtimeScene.getObjects("right"), gdjs.MarzCode.GDrightObjects1);

gdjs.MarzCode.condition0IsTrue_0.val = false;
{
gdjs.MarzCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MarzCode.mapOfGDgdjs_46MarzCode_46GDBlueEnemy1Objects1Objects, gdjs.MarzCode.mapOfGDgdjs_46MarzCode_46GDrightObjects1Objects, false, runtimeScene, false);
}if (gdjs.MarzCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(10).setString("Right");
}}

}


{


gdjs.MarzCode.condition0IsTrue_0.val = false;
{
gdjs.MarzCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(10)) == "Right";
}if (gdjs.MarzCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BlueEnemy1"), gdjs.MarzCode.GDBlueEnemy1Objects1);
{for(var i = 0, len = gdjs.MarzCode.GDBlueEnemy1Objects1.length ;i < len;++i) {
    gdjs.MarzCode.GDBlueEnemy1Objects1[i].addPolarForce(0, 100, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("left"), gdjs.MarzCode.GDleftObjects1);
gdjs.copyArray(runtimeScene.getObjects("martian"), gdjs.MarzCode.GDmartianObjects1);

gdjs.MarzCode.condition0IsTrue_0.val = false;
{
gdjs.MarzCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MarzCode.mapOfGDgdjs_46MarzCode_46GDmartianObjects1Objects, gdjs.MarzCode.mapOfGDgdjs_46MarzCode_46GDleftObjects1Objects, false, runtimeScene, false);
}if (gdjs.MarzCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(2).setString("Left");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("martian"), gdjs.MarzCode.GDmartianObjects1);
gdjs.copyArray(runtimeScene.getObjects("right"), gdjs.MarzCode.GDrightObjects1);

gdjs.MarzCode.condition0IsTrue_0.val = false;
{
gdjs.MarzCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MarzCode.mapOfGDgdjs_46MarzCode_46GDmartianObjects1Objects, gdjs.MarzCode.mapOfGDgdjs_46MarzCode_46GDrightObjects1Objects, false, runtimeScene, false);
}if (gdjs.MarzCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(2).setString("Right");
}}

}


{


gdjs.MarzCode.condition0IsTrue_0.val = false;
{
gdjs.MarzCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)) == "Left";
}if (gdjs.MarzCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("martian"), gdjs.MarzCode.GDmartianObjects1);
{for(var i = 0, len = gdjs.MarzCode.GDmartianObjects1.length ;i < len;++i) {
    gdjs.MarzCode.GDmartianObjects1[i].addPolarForce(180, 100, 0);
}
}{for(var i = 0, len = gdjs.MarzCode.GDmartianObjects1.length ;i < len;++i) {
    gdjs.MarzCode.GDmartianObjects1[i].flipX(true);
}
}}

}


{


gdjs.MarzCode.condition0IsTrue_0.val = false;
{
gdjs.MarzCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)) == "Right";
}if (gdjs.MarzCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("martian"), gdjs.MarzCode.GDmartianObjects1);
{for(var i = 0, len = gdjs.MarzCode.GDmartianObjects1.length ;i < len;++i) {
    gdjs.MarzCode.GDmartianObjects1[i].addPolarForce(0, 100, 0);
}
}{for(var i = 0, len = gdjs.MarzCode.GDmartianObjects1.length ;i < len;++i) {
    gdjs.MarzCode.GDmartianObjects1[i].flipX(false);
}
}}

}


{



}


{


gdjs.MarzCode.condition0IsTrue_0.val = false;
{
gdjs.MarzCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.MarzCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject3"), gdjs.MarzCode.GDNewObject3Objects1);
gdjs.copyArray(runtimeScene.getObjects("cheats"), gdjs.MarzCode.GDcheatsObjects1);
gdjs.copyArray(runtimeScene.getObjects("crashedship"), gdjs.MarzCode.GDcrashedshipObjects1);
gdjs.copyArray(runtimeScene.getObjects("fps"), gdjs.MarzCode.GDfpsObjects1);
gdjs.copyArray(runtimeScene.getObjects("gamelife"), gdjs.MarzCode.GDgamelifeObjects1);
gdjs.copyArray(runtimeScene.getObjects("left"), gdjs.MarzCode.GDleftObjects1);
gdjs.copyArray(runtimeScene.getObjects("notcomplete"), gdjs.MarzCode.GDnotcompleteObjects1);
gdjs.copyArray(runtimeScene.getObjects("right"), gdjs.MarzCode.GDrightObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(2).setString("Left");
}{for(var i = 0, len = gdjs.MarzCode.GDrightObjects1.length ;i < len;++i) {
    gdjs.MarzCode.GDrightObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.MarzCode.GDleftObjects1.length ;i < len;++i) {
    gdjs.MarzCode.GDleftObjects1[i].hide();
}
}{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(0);
}{for(var i = 0, len = gdjs.MarzCode.GDnotcompleteObjects1.length ;i < len;++i) {
    gdjs.MarzCode.GDnotcompleteObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.MarzCode.GDcrashedshipObjects1.length ;i < len;++i) {
    gdjs.MarzCode.GDcrashedshipObjects1[i].setAnimationName("stand");
}
}{runtimeScene.getGame().getVariables().getFromIndex(5).setNumber(0);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "fire");
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(13).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(15).setNumber(0);
}{for(var i = 0, len = gdjs.MarzCode.GDfpsObjects1.length ;i < len;++i) {
    gdjs.MarzCode.GDfpsObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.MarzCode.GDcheatsObjects1.length ;i < len;++i) {
    gdjs.MarzCode.GDcheatsObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.MarzCode.GDNewObject3Objects1.length ;i < len;++i) {
    gdjs.MarzCode.GDNewObject3Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.MarzCode.GDgamelifeObjects1.length ;i < len;++i) {
    gdjs.MarzCode.GDgamelifeObjects1[i].hide();
}
}
{ //Subevents
gdjs.MarzCode.eventsList3(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.MarzCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("martian"), gdjs.MarzCode.GDmartianObjects1);

gdjs.MarzCode.condition0IsTrue_0.val = false;
gdjs.MarzCode.condition1IsTrue_0.val = false;
{
gdjs.MarzCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MarzCode.mapOfGDgdjs_46MarzCode_46GDPlayerObjects1Objects, gdjs.MarzCode.mapOfGDgdjs_46MarzCode_46GDmartianObjects1Objects, false, runtimeScene, false);
}if ( gdjs.MarzCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.MarzCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.MarzCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.MarzCode.condition1IsTrue_0.val = true;
        gdjs.MarzCode.GDPlayerObjects1[k] = gdjs.MarzCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.MarzCode.GDPlayerObjects1.length = k;}}
if (gdjs.MarzCode.condition1IsTrue_0.val) {
/* Reuse gdjs.MarzCode.GDPlayerObjects1 */
/* Reuse gdjs.MarzCode.GDmartianObjects1 */
{for(var i = 0, len = gdjs.MarzCode.GDmartianObjects1.length ;i < len;++i) {
    gdjs.MarzCode.GDmartianObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.MarzCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.MarzCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").setCanJump();
}
}{for(var i = 0, len = gdjs.MarzCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.MarzCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}{runtimeScene.getGame().getVariables().getFromIndex(13).sub(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlueEnemy1"), gdjs.MarzCode.GDBlueEnemy1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.MarzCode.GDPlayerObjects1);

gdjs.MarzCode.condition0IsTrue_0.val = false;
gdjs.MarzCode.condition1IsTrue_0.val = false;
{
gdjs.MarzCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MarzCode.mapOfGDgdjs_46MarzCode_46GDPlayerObjects1Objects, gdjs.MarzCode.mapOfGDgdjs_46MarzCode_46GDBlueEnemy1Objects1Objects, false, runtimeScene, false);
}if ( gdjs.MarzCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.MarzCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.MarzCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.MarzCode.condition1IsTrue_0.val = true;
        gdjs.MarzCode.GDPlayerObjects1[k] = gdjs.MarzCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.MarzCode.GDPlayerObjects1.length = k;}}
if (gdjs.MarzCode.condition1IsTrue_0.val) {
/* Reuse gdjs.MarzCode.GDBlueEnemy1Objects1 */
/* Reuse gdjs.MarzCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.MarzCode.GDBlueEnemy1Objects1.length ;i < len;++i) {
    gdjs.MarzCode.GDBlueEnemy1Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.MarzCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.MarzCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").setCanJump();
}
}{for(var i = 0, len = gdjs.MarzCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.MarzCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}{runtimeScene.getGame().getVariables().getFromIndex(13).sub(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.MarzCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("martian"), gdjs.MarzCode.GDmartianObjects1);

gdjs.MarzCode.condition0IsTrue_0.val = false;
gdjs.MarzCode.condition1IsTrue_0.val = false;
{
gdjs.MarzCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MarzCode.mapOfGDgdjs_46MarzCode_46GDPlayerObjects1Objects, gdjs.MarzCode.mapOfGDgdjs_46MarzCode_46GDmartianObjects1Objects, false, runtimeScene, false);
}if ( gdjs.MarzCode.condition0IsTrue_0.val ) {
{
gdjs.MarzCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) != 1;
}}
if (gdjs.MarzCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).sub(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}{runtimeScene.getGame().getVariables().getFromIndex(1).sub(1);
}{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Marz");
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.MarzCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("crashedship"), gdjs.MarzCode.GDcrashedshipObjects1);

gdjs.MarzCode.condition0IsTrue_0.val = false;
{
gdjs.MarzCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MarzCode.mapOfGDgdjs_46MarzCode_46GDPlayerObjects1Objects, gdjs.MarzCode.mapOfGDgdjs_46MarzCode_46GDcrashedshipObjects1Objects, true, runtimeScene, false);
}if (gdjs.MarzCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("notcomplete"), gdjs.MarzCode.GDnotcompleteObjects1);
{for(var i = 0, len = gdjs.MarzCode.GDnotcompleteObjects1.length ;i < len;++i) {
    gdjs.MarzCode.GDnotcompleteObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.MarzCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("crashedship"), gdjs.MarzCode.GDcrashedshipObjects1);

gdjs.MarzCode.condition0IsTrue_0.val = false;
gdjs.MarzCode.condition1IsTrue_0.val = false;
{
gdjs.MarzCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MarzCode.mapOfGDgdjs_46MarzCode_46GDPlayerObjects1Objects, gdjs.MarzCode.mapOfGDgdjs_46MarzCode_46GDcrashedshipObjects1Objects, false, runtimeScene, false);
}if ( gdjs.MarzCode.condition0IsTrue_0.val ) {
{
{gdjs.MarzCode.conditionTrue_1 = gdjs.MarzCode.condition1IsTrue_0;
gdjs.MarzCode.conditionTrue_1.val = (gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) != gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}}
if (gdjs.MarzCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("notcomplete"), gdjs.MarzCode.GDnotcompleteObjects1);
{for(var i = 0, len = gdjs.MarzCode.GDnotcompleteObjects1.length ;i < len;++i) {
    gdjs.MarzCode.GDnotcompleteObjects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.MarzCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("crashedship"), gdjs.MarzCode.GDcrashedshipObjects1);

gdjs.MarzCode.condition0IsTrue_0.val = false;
gdjs.MarzCode.condition1IsTrue_0.val = false;
{
gdjs.MarzCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MarzCode.mapOfGDgdjs_46MarzCode_46GDcrashedshipObjects1Objects, gdjs.MarzCode.mapOfGDgdjs_46MarzCode_46GDPlayerObjects1Objects, false, runtimeScene, false);
}if ( gdjs.MarzCode.condition0IsTrue_0.val ) {
{
{gdjs.MarzCode.conditionTrue_1 = gdjs.MarzCode.condition1IsTrue_0;
gdjs.MarzCode.conditionTrue_1.val = (gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}}
if (gdjs.MarzCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.MarzCode.GDNewObjectObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.MarzCode.GDNewObject2Objects1);
/* Reuse gdjs.MarzCode.GDPlayerObjects1 */
/* Reuse gdjs.MarzCode.GDcrashedshipObjects1 */
{for(var i = 0, len = gdjs.MarzCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.MarzCode.GDPlayerObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.MarzCode.GDNewObject2Objects1.length ;i < len;++i) {
    gdjs.MarzCode.GDNewObject2Objects1[i].setY((( gdjs.MarzCode.GDcrashedshipObjects1.length === 0 ) ? 0 :gdjs.MarzCode.GDcrashedshipObjects1[0].getPointY("")));
}
}{for(var i = 0, len = gdjs.MarzCode.GDNewObject2Objects1.length ;i < len;++i) {
    gdjs.MarzCode.GDNewObject2Objects1[i].setX((( gdjs.MarzCode.GDcrashedshipObjects1.length === 0 ) ? 0 :gdjs.MarzCode.GDcrashedshipObjects1[0].getPointX("")) + 500);
}
}{for(var i = 0, len = gdjs.MarzCode.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.MarzCode.GDNewObjectObjects1[i].setY((( gdjs.MarzCode.GDcrashedshipObjects1.length === 0 ) ? 0 :gdjs.MarzCode.GDcrashedshipObjects1[0].getPointY("")));
}
}{for(var i = 0, len = gdjs.MarzCode.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.MarzCode.GDNewObjectObjects1[i].setY((( gdjs.MarzCode.GDcrashedshipObjects1.length === 0 ) ? 0 :gdjs.MarzCode.GDcrashedshipObjects1[0].getPointX("")) - 400);
}
}{for(var i = 0, len = gdjs.MarzCode.GDcrashedshipObjects1.length ;i < len;++i) {
    gdjs.MarzCode.GDcrashedshipObjects1[i].setAnimationName("fixit");
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "fixingtime");
}{runtimeScene.getGame().getVariables().getFromIndex(5).setNumber(1);
}}

}


{


gdjs.MarzCode.condition0IsTrue_0.val = false;
gdjs.MarzCode.condition1IsTrue_0.val = false;
{
gdjs.MarzCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 3, "fixingtime");
}if ( gdjs.MarzCode.condition0IsTrue_0.val ) {
{
{gdjs.MarzCode.conditionTrue_1 = gdjs.MarzCode.condition1IsTrue_0;
gdjs.MarzCode.conditionTrue_1.val = (gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5)) == 1);
}
}}
if (gdjs.MarzCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("crashedship"), gdjs.MarzCode.GDcrashedshipObjects1);
{for(var i = 0, len = gdjs.MarzCode.GDcrashedshipObjects1.length ;i < len;++i) {
    gdjs.MarzCode.GDcrashedshipObjects1[i].setAnimationName("fly");
}
}{for(var i = 0, len = gdjs.MarzCode.GDcrashedshipObjects1.length ;i < len;++i) {
    gdjs.MarzCode.GDcrashedshipObjects1[i].addForce(0, -(1000), 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("crashedship"), gdjs.MarzCode.GDcrashedshipObjects1);
gdjs.copyArray(runtimeScene.getObjects("end"), gdjs.MarzCode.GDendObjects1);

gdjs.MarzCode.condition0IsTrue_0.val = false;
{
gdjs.MarzCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MarzCode.mapOfGDgdjs_46MarzCode_46GDcrashedshipObjects1Objects, gdjs.MarzCode.mapOfGDgdjs_46MarzCode_46GDendObjects1Objects, false, runtimeScene, false);
}if (gdjs.MarzCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(3);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "intro:E", false);
}}

}


{



}


{


gdjs.MarzCode.condition0IsTrue_0.val = false;
{
gdjs.MarzCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "i");
}if (gdjs.MarzCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(6).setNumber(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.MarzCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("robotting"), gdjs.MarzCode.GDrobottingObjects1);

gdjs.MarzCode.condition0IsTrue_0.val = false;
gdjs.MarzCode.condition1IsTrue_0.val = false;
{
gdjs.MarzCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) == 1;
}if ( gdjs.MarzCode.condition0IsTrue_0.val ) {
{
gdjs.MarzCode.condition1IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MarzCode.mapOfGDgdjs_46MarzCode_46GDrobottingObjects1Objects, gdjs.MarzCode.mapOfGDgdjs_46MarzCode_46GDPlayerObjects1Objects, false, runtimeScene, false);
}}
if (gdjs.MarzCode.condition1IsTrue_0.val) {
/* Reuse gdjs.MarzCode.GDrobottingObjects1 */
{for(var i = 0, len = gdjs.MarzCode.GDrobottingObjects1.length ;i < len;++i) {
    gdjs.MarzCode.GDrobottingObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(13).sub(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlueEnemy1"), gdjs.MarzCode.GDBlueEnemy1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.MarzCode.GDPlayerObjects1);

gdjs.MarzCode.condition0IsTrue_0.val = false;
gdjs.MarzCode.condition1IsTrue_0.val = false;
{
gdjs.MarzCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) == 1;
}if ( gdjs.MarzCode.condition0IsTrue_0.val ) {
{
gdjs.MarzCode.condition1IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MarzCode.mapOfGDgdjs_46MarzCode_46GDBlueEnemy1Objects1Objects, gdjs.MarzCode.mapOfGDgdjs_46MarzCode_46GDPlayerObjects1Objects, false, runtimeScene, false);
}}
if (gdjs.MarzCode.condition1IsTrue_0.val) {
/* Reuse gdjs.MarzCode.GDBlueEnemy1Objects1 */
{for(var i = 0, len = gdjs.MarzCode.GDBlueEnemy1Objects1.length ;i < len;++i) {
    gdjs.MarzCode.GDBlueEnemy1Objects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(13).sub(1);
}}

}


{


gdjs.MarzCode.condition0IsTrue_0.val = false;
{
gdjs.MarzCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "c");
}if (gdjs.MarzCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MarzCode.eventsList5(runtimeScene);} //End of subevents
}

}


{


gdjs.MarzCode.condition0IsTrue_0.val = false;
{
gdjs.MarzCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "k");
}if (gdjs.MarzCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MarzCode.eventsList8(runtimeScene);} //End of subevents
}

}


{


gdjs.MarzCode.condition0IsTrue_0.val = false;
{
gdjs.MarzCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "t");
}if (gdjs.MarzCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(12).setNumber(1);
}}

}


{



}


{


gdjs.MarzCode.condition0IsTrue_0.val = false;
{
gdjs.MarzCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.MarzCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "leveltimer");
}{runtimeScene.getGame().getVariables().getFromIndex(9).setNumber(60);
}}

}


{


gdjs.MarzCode.condition0IsTrue_0.val = false;
gdjs.MarzCode.condition1IsTrue_0.val = false;
{
gdjs.MarzCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "leveltimer");
}if ( gdjs.MarzCode.condition0IsTrue_0.val ) {
{
gdjs.MarzCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(12)) != 1;
}}
if (gdjs.MarzCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(9).sub(1);
}{runtimeScene.getGame().getVariables().getFromIndex(14).add(1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "leveltimer");
}}

}


{


gdjs.MarzCode.condition0IsTrue_0.val = false;
{
gdjs.MarzCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9)) == 0;
}if (gdjs.MarzCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Marz", false);
}{runtimeScene.getVariables().getFromIndex(1).sub(1);
}}

}


{



}


{


gdjs.MarzCode.condition0IsTrue_0.val = false;
{
gdjs.MarzCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 4, "fire");
}if (gdjs.MarzCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(11).setNumber(gdjs.randomInRange(1, 3));
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "fire");
}}

}


{


gdjs.MarzCode.condition0IsTrue_0.val = false;
gdjs.MarzCode.condition1IsTrue_0.val = false;
{
gdjs.MarzCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(11)) == 1;
}if ( gdjs.MarzCode.condition0IsTrue_0.val ) {
{
gdjs.MarzCode.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 3, "firerate");
}}
if (gdjs.MarzCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BlueEnemy1"), gdjs.MarzCode.GDBlueEnemy1Objects1);
gdjs.copyArray(runtimeScene.getObjects("RedLaser08"), gdjs.MarzCode.GDRedLaser08Objects1);
{for(var i = 0, len = gdjs.MarzCode.GDBlueEnemy1Objects1.length ;i < len;++i) {
    gdjs.MarzCode.GDBlueEnemy1Objects1[i].getBehavior("FireBullet").Fire((gdjs.MarzCode.GDBlueEnemy1Objects1[i].getPointX("")), (gdjs.MarzCode.GDBlueEnemy1Objects1[i].getPointY("")) + 40, gdjs.MarzCode.mapOfGDgdjs_46MarzCode_46GDRedLaser08Objects1Objects, 90, 100, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "firerate");
}}

}


{


gdjs.MarzCode.condition0IsTrue_0.val = false;
gdjs.MarzCode.condition1IsTrue_0.val = false;
{
gdjs.MarzCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(11)) == 2;
}if ( gdjs.MarzCode.condition0IsTrue_0.val ) {
{
gdjs.MarzCode.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 3, "firerate");
}}
if (gdjs.MarzCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BlueEnemy1"), gdjs.MarzCode.GDBlueEnemy1Objects1);
gdjs.copyArray(runtimeScene.getObjects("GreenLaser09"), gdjs.MarzCode.GDGreenLaser09Objects1);
{for(var i = 0, len = gdjs.MarzCode.GDBlueEnemy1Objects1.length ;i < len;++i) {
    gdjs.MarzCode.GDBlueEnemy1Objects1[i].getBehavior("FireBullet").Fire((gdjs.MarzCode.GDBlueEnemy1Objects1[i].getPointX("")), (gdjs.MarzCode.GDBlueEnemy1Objects1[i].getPointY("")) + 40, gdjs.MarzCode.mapOfGDgdjs_46MarzCode_46GDGreenLaser09Objects1Objects, 90, 40, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "firerate");
}}

}


{


gdjs.MarzCode.condition0IsTrue_0.val = false;
gdjs.MarzCode.condition1IsTrue_0.val = false;
{
gdjs.MarzCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(11)) == 3;
}if ( gdjs.MarzCode.condition0IsTrue_0.val ) {
{
gdjs.MarzCode.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 3, "firerate");
}}
if (gdjs.MarzCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BlueEnemy1"), gdjs.MarzCode.GDBlueEnemy1Objects1);
gdjs.copyArray(runtimeScene.getObjects("GreenLaser09"), gdjs.MarzCode.GDGreenLaser09Objects1);
gdjs.copyArray(runtimeScene.getObjects("RedLaser08"), gdjs.MarzCode.GDRedLaser08Objects1);
{for(var i = 0, len = gdjs.MarzCode.GDBlueEnemy1Objects1.length ;i < len;++i) {
    gdjs.MarzCode.GDBlueEnemy1Objects1[i].getBehavior("FireBullet").Fire((gdjs.MarzCode.GDBlueEnemy1Objects1[i].getPointX("")), (gdjs.MarzCode.GDBlueEnemy1Objects1[i].getPointY("")) + 40, gdjs.MarzCode.mapOfGDgdjs_46MarzCode_46GDGreenLaser09Objects1Objects, 90, 40, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.MarzCode.GDBlueEnemy1Objects1.length ;i < len;++i) {
    gdjs.MarzCode.GDBlueEnemy1Objects1[i].getBehavior("FireBullet").Fire((gdjs.MarzCode.GDBlueEnemy1Objects1[i].getPointX("")), (gdjs.MarzCode.GDBlueEnemy1Objects1[i].getPointY("")) + 40, gdjs.MarzCode.mapOfGDgdjs_46MarzCode_46GDRedLaser08Objects1Objects, 90, 100, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "firerate");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GreenLaser09"), gdjs.MarzCode.GDGreenLaser09Objects1);
gdjs.copyArray(runtimeScene.getObjects("alienfloor"), gdjs.MarzCode.GDalienfloorObjects1);

gdjs.MarzCode.condition0IsTrue_0.val = false;
{
gdjs.MarzCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MarzCode.mapOfGDgdjs_46MarzCode_46GDGreenLaser09Objects1Objects, gdjs.MarzCode.mapOfGDgdjs_46MarzCode_46GDalienfloorObjects1Objects, false, runtimeScene, false);
}if (gdjs.MarzCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MarzCode.GDGreenLaser09Objects1 */
{for(var i = 0, len = gdjs.MarzCode.GDGreenLaser09Objects1.length ;i < len;++i) {
    gdjs.MarzCode.GDGreenLaser09Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("RedLaser08"), gdjs.MarzCode.GDRedLaser08Objects1);
gdjs.copyArray(runtimeScene.getObjects("alienfloor"), gdjs.MarzCode.GDalienfloorObjects1);

gdjs.MarzCode.condition0IsTrue_0.val = false;
{
gdjs.MarzCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MarzCode.mapOfGDgdjs_46MarzCode_46GDRedLaser08Objects1Objects, gdjs.MarzCode.mapOfGDgdjs_46MarzCode_46GDalienfloorObjects1Objects, false, runtimeScene, false);
}if (gdjs.MarzCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MarzCode.GDRedLaser08Objects1 */
{for(var i = 0, len = gdjs.MarzCode.GDRedLaser08Objects1.length ;i < len;++i) {
    gdjs.MarzCode.GDRedLaser08Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GreenLaser09"), gdjs.MarzCode.GDGreenLaser09Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.MarzCode.GDPlayerObjects1);

gdjs.MarzCode.condition0IsTrue_0.val = false;
gdjs.MarzCode.condition1IsTrue_0.val = false;
{
gdjs.MarzCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MarzCode.mapOfGDgdjs_46MarzCode_46GDGreenLaser09Objects1Objects, gdjs.MarzCode.mapOfGDgdjs_46MarzCode_46GDPlayerObjects1Objects, false, runtimeScene, false);
}if ( gdjs.MarzCode.condition0IsTrue_0.val ) {
{
gdjs.MarzCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) != 1;
}}
if (gdjs.MarzCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).sub(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}{runtimeScene.getGame().getVariables().getFromIndex(1).sub(1);
}{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Marz");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.MarzCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("RedLaser08"), gdjs.MarzCode.GDRedLaser08Objects1);

gdjs.MarzCode.condition0IsTrue_0.val = false;
gdjs.MarzCode.condition1IsTrue_0.val = false;
{
gdjs.MarzCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MarzCode.mapOfGDgdjs_46MarzCode_46GDRedLaser08Objects1Objects, gdjs.MarzCode.mapOfGDgdjs_46MarzCode_46GDPlayerObjects1Objects, false, runtimeScene, false);
}if ( gdjs.MarzCode.condition0IsTrue_0.val ) {
{
gdjs.MarzCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) != 1;
}}
if (gdjs.MarzCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).sub(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}{runtimeScene.getGame().getVariables().getFromIndex(1).sub(1);
}{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Marz");
}}

}


{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.MarzCode.GDNewObjectObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.MarzCode.GDNewObject2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.MarzCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.MarzCode.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.MarzCode.GDNewObjectObjects1[i].setX((( gdjs.MarzCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.MarzCode.GDPlayerObjects1[0].getPointX("")) - 700);
}
}{for(var i = 0, len = gdjs.MarzCode.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.MarzCode.GDNewObjectObjects1[i].setY((( gdjs.MarzCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.MarzCode.GDPlayerObjects1[0].getPointY("")));
}
}{for(var i = 0, len = gdjs.MarzCode.GDNewObject2Objects1.length ;i < len;++i) {
    gdjs.MarzCode.GDNewObject2Objects1[i].setX((( gdjs.MarzCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.MarzCode.GDPlayerObjects1[0].getPointX("")) + 700);
}
}{for(var i = 0, len = gdjs.MarzCode.GDNewObject2Objects1.length ;i < len;++i) {
    gdjs.MarzCode.GDNewObject2Objects1[i].setY((( gdjs.MarzCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.MarzCode.GDPlayerObjects1[0].getPointY("")));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.MarzCode.GDPlayerObjects1);

for(gdjs.MarzCode.forEachIndex2 = 0;gdjs.MarzCode.forEachIndex2 < gdjs.MarzCode.GDPlayerObjects1.length;++gdjs.MarzCode.forEachIndex2) {
gdjs.MarzCode.GDPlayerObjects2.length = 0;


gdjs.MarzCode.forEachTemporary2 = gdjs.MarzCode.GDPlayerObjects1[gdjs.MarzCode.forEachIndex2];
gdjs.MarzCode.GDPlayerObjects2.push(gdjs.MarzCode.forEachTemporary2);
gdjs.MarzCode.condition0IsTrue_0.val = false;
{
gdjs.MarzCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.MarzCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(13).add(1);
}}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("alienfloor"), gdjs.MarzCode.GDalienfloorObjects1);

for(gdjs.MarzCode.forEachIndex2 = 0;gdjs.MarzCode.forEachIndex2 < gdjs.MarzCode.GDalienfloorObjects1.length;++gdjs.MarzCode.forEachIndex2) {
gdjs.MarzCode.GDalienfloorObjects2.length = 0;


gdjs.MarzCode.forEachTemporary2 = gdjs.MarzCode.GDalienfloorObjects1[gdjs.MarzCode.forEachIndex2];
gdjs.MarzCode.GDalienfloorObjects2.push(gdjs.MarzCode.forEachTemporary2);
gdjs.MarzCode.condition0IsTrue_0.val = false;
{
gdjs.MarzCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.MarzCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(13).add(1);
}}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("rocketplat"), gdjs.MarzCode.GDrocketplatObjects1);

for(gdjs.MarzCode.forEachIndex2 = 0;gdjs.MarzCode.forEachIndex2 < gdjs.MarzCode.GDrocketplatObjects1.length;++gdjs.MarzCode.forEachIndex2) {
gdjs.MarzCode.GDrocketplatObjects2.length = 0;


gdjs.MarzCode.forEachTemporary2 = gdjs.MarzCode.GDrocketplatObjects1[gdjs.MarzCode.forEachIndex2];
gdjs.MarzCode.GDrocketplatObjects2.push(gdjs.MarzCode.forEachTemporary2);
gdjs.MarzCode.condition0IsTrue_0.val = false;
{
gdjs.MarzCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.MarzCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(13).add(1);
}}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("martian"), gdjs.MarzCode.GDmartianObjects1);

for(gdjs.MarzCode.forEachIndex2 = 0;gdjs.MarzCode.forEachIndex2 < gdjs.MarzCode.GDmartianObjects1.length;++gdjs.MarzCode.forEachIndex2) {
gdjs.MarzCode.GDmartianObjects2.length = 0;


gdjs.MarzCode.forEachTemporary2 = gdjs.MarzCode.GDmartianObjects1[gdjs.MarzCode.forEachIndex2];
gdjs.MarzCode.GDmartianObjects2.push(gdjs.MarzCode.forEachTemporary2);
gdjs.MarzCode.condition0IsTrue_0.val = false;
{
gdjs.MarzCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.MarzCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(13).add(1);
}}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlueEnemy1"), gdjs.MarzCode.GDBlueEnemy1Objects1);

for(gdjs.MarzCode.forEachIndex2 = 0;gdjs.MarzCode.forEachIndex2 < gdjs.MarzCode.GDBlueEnemy1Objects1.length;++gdjs.MarzCode.forEachIndex2) {
gdjs.MarzCode.GDBlueEnemy1Objects2.length = 0;


gdjs.MarzCode.forEachTemporary2 = gdjs.MarzCode.GDBlueEnemy1Objects1[gdjs.MarzCode.forEachIndex2];
gdjs.MarzCode.GDBlueEnemy1Objects2.push(gdjs.MarzCode.forEachTemporary2);
gdjs.MarzCode.condition0IsTrue_0.val = false;
{
gdjs.MarzCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.MarzCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(13).add(1);
}}
}

}


{


gdjs.MarzCode.condition0IsTrue_0.val = false;
{
gdjs.MarzCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "m");
}if (gdjs.MarzCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(16).setNumber(0);
}
{ //Subevents
gdjs.MarzCode.eventsList14(runtimeScene);} //End of subevents
}

}


{


gdjs.MarzCode.condition0IsTrue_0.val = false;
{
gdjs.MarzCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "F1");
}if (gdjs.MarzCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(15).setNumber(0);
}
{ //Subevents
gdjs.MarzCode.eventsList15(runtimeScene);} //End of subevents
}

}


};

gdjs.MarzCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MarzCode.GDPlayerObjects1.length = 0;
gdjs.MarzCode.GDPlayerObjects2.length = 0;
gdjs.MarzCode.GDPlayerObjects3.length = 0;
gdjs.MarzCode.GDalienfloorObjects1.length = 0;
gdjs.MarzCode.GDalienfloorObjects2.length = 0;
gdjs.MarzCode.GDalienfloorObjects3.length = 0;
gdjs.MarzCode.GDrocketplatObjects1.length = 0;
gdjs.MarzCode.GDrocketplatObjects2.length = 0;
gdjs.MarzCode.GDrocketplatObjects3.length = 0;
gdjs.MarzCode.GDcloudObjects1.length = 0;
gdjs.MarzCode.GDcloudObjects2.length = 0;
gdjs.MarzCode.GDcloudObjects3.length = 0;
gdjs.MarzCode.GDboltObjects1.length = 0;
gdjs.MarzCode.GDboltObjects2.length = 0;
gdjs.MarzCode.GDboltObjects3.length = 0;
gdjs.MarzCode.GDscoreObjects1.length = 0;
gdjs.MarzCode.GDscoreObjects2.length = 0;
gdjs.MarzCode.GDscoreObjects3.length = 0;
gdjs.MarzCode.GDliveObjects1.length = 0;
gdjs.MarzCode.GDliveObjects2.length = 0;
gdjs.MarzCode.GDliveObjects3.length = 0;
gdjs.MarzCode.GDlivesObjects1.length = 0;
gdjs.MarzCode.GDlivesObjects2.length = 0;
gdjs.MarzCode.GDlivesObjects3.length = 0;
gdjs.MarzCode.GDrobottingObjects1.length = 0;
gdjs.MarzCode.GDrobottingObjects2.length = 0;
gdjs.MarzCode.GDrobottingObjects3.length = 0;
gdjs.MarzCode.GDleftObjects1.length = 0;
gdjs.MarzCode.GDleftObjects2.length = 0;
gdjs.MarzCode.GDleftObjects3.length = 0;
gdjs.MarzCode.GDrightObjects1.length = 0;
gdjs.MarzCode.GDrightObjects2.length = 0;
gdjs.MarzCode.GDrightObjects3.length = 0;
gdjs.MarzCode.GDcrashedshipObjects1.length = 0;
gdjs.MarzCode.GDcrashedshipObjects2.length = 0;
gdjs.MarzCode.GDcrashedshipObjects3.length = 0;
gdjs.MarzCode.GDnotcompleteObjects1.length = 0;
gdjs.MarzCode.GDnotcompleteObjects2.length = 0;
gdjs.MarzCode.GDnotcompleteObjects3.length = 0;
gdjs.MarzCode.GDendObjects1.length = 0;
gdjs.MarzCode.GDendObjects2.length = 0;
gdjs.MarzCode.GDendObjects3.length = 0;
gdjs.MarzCode.GDtimerObjects1.length = 0;
gdjs.MarzCode.GDtimerObjects2.length = 0;
gdjs.MarzCode.GDtimerObjects3.length = 0;
gdjs.MarzCode.GDcheatsObjects1.length = 0;
gdjs.MarzCode.GDcheatsObjects2.length = 0;
gdjs.MarzCode.GDcheatsObjects3.length = 0;
gdjs.MarzCode.GDBlueEnemy1Objects1.length = 0;
gdjs.MarzCode.GDBlueEnemy1Objects2.length = 0;
gdjs.MarzCode.GDBlueEnemy1Objects3.length = 0;
gdjs.MarzCode.GDRedLaser08Objects1.length = 0;
gdjs.MarzCode.GDRedLaser08Objects2.length = 0;
gdjs.MarzCode.GDRedLaser08Objects3.length = 0;
gdjs.MarzCode.GDGreenLaser09Objects1.length = 0;
gdjs.MarzCode.GDGreenLaser09Objects2.length = 0;
gdjs.MarzCode.GDGreenLaser09Objects3.length = 0;
gdjs.MarzCode.GDNewObject22Objects1.length = 0;
gdjs.MarzCode.GDNewObject22Objects2.length = 0;
gdjs.MarzCode.GDNewObject22Objects3.length = 0;
gdjs.MarzCode.GDNewObject2Objects1.length = 0;
gdjs.MarzCode.GDNewObject2Objects2.length = 0;
gdjs.MarzCode.GDNewObject2Objects3.length = 0;
gdjs.MarzCode.GDNewObjectObjects1.length = 0;
gdjs.MarzCode.GDNewObjectObjects2.length = 0;
gdjs.MarzCode.GDNewObjectObjects3.length = 0;
gdjs.MarzCode.GDbackground1Objects1.length = 0;
gdjs.MarzCode.GDbackground1Objects2.length = 0;
gdjs.MarzCode.GDbackground1Objects3.length = 0;
gdjs.MarzCode.GDbackground2Objects1.length = 0;
gdjs.MarzCode.GDbackground2Objects2.length = 0;
gdjs.MarzCode.GDbackground2Objects3.length = 0;
gdjs.MarzCode.GDmartianObjects1.length = 0;
gdjs.MarzCode.GDmartianObjects2.length = 0;
gdjs.MarzCode.GDmartianObjects3.length = 0;
gdjs.MarzCode.GDNewObject3Objects1.length = 0;
gdjs.MarzCode.GDNewObject3Objects2.length = 0;
gdjs.MarzCode.GDNewObject3Objects3.length = 0;
gdjs.MarzCode.GDgamelifeObjects1.length = 0;
gdjs.MarzCode.GDgamelifeObjects2.length = 0;
gdjs.MarzCode.GDgamelifeObjects3.length = 0;
gdjs.MarzCode.GDfpsObjects1.length = 0;
gdjs.MarzCode.GDfpsObjects2.length = 0;
gdjs.MarzCode.GDfpsObjects3.length = 0;

gdjs.MarzCode.eventsList16(runtimeScene);
return;

}

gdjs['MarzCode'] = gdjs.MarzCode;
