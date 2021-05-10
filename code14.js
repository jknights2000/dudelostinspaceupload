gdjs.EarthCode = {};
gdjs.EarthCode.forEachIndex2 = 0;

gdjs.EarthCode.forEachIndex3 = 0;

gdjs.EarthCode.forEachObjects2 = [];

gdjs.EarthCode.forEachObjects3 = [];

gdjs.EarthCode.forEachTemporary2 = null;

gdjs.EarthCode.forEachTemporary3 = null;

gdjs.EarthCode.forEachTotalCount2 = 0;

gdjs.EarthCode.forEachTotalCount3 = 0;

gdjs.EarthCode.GDPlayerObjects1= [];
gdjs.EarthCode.GDPlayerObjects2= [];
gdjs.EarthCode.GDPlayerObjects3= [];
gdjs.EarthCode.GDearthfloorObjects1= [];
gdjs.EarthCode.GDearthfloorObjects2= [];
gdjs.EarthCode.GDearthfloorObjects3= [];
gdjs.EarthCode.GDrocketplatObjects1= [];
gdjs.EarthCode.GDrocketplatObjects2= [];
gdjs.EarthCode.GDrocketplatObjects3= [];
gdjs.EarthCode.GDcloudObjects1= [];
gdjs.EarthCode.GDcloudObjects2= [];
gdjs.EarthCode.GDcloudObjects3= [];
gdjs.EarthCode.GDboltObjects1= [];
gdjs.EarthCode.GDboltObjects2= [];
gdjs.EarthCode.GDboltObjects3= [];
gdjs.EarthCode.GDscoreObjects1= [];
gdjs.EarthCode.GDscoreObjects2= [];
gdjs.EarthCode.GDscoreObjects3= [];
gdjs.EarthCode.GDliveObjects1= [];
gdjs.EarthCode.GDliveObjects2= [];
gdjs.EarthCode.GDliveObjects3= [];
gdjs.EarthCode.GDlivesObjects1= [];
gdjs.EarthCode.GDlivesObjects2= [];
gdjs.EarthCode.GDlivesObjects3= [];
gdjs.EarthCode.GDrobottingObjects1= [];
gdjs.EarthCode.GDrobottingObjects2= [];
gdjs.EarthCode.GDrobottingObjects3= [];
gdjs.EarthCode.GDleftObjects1= [];
gdjs.EarthCode.GDleftObjects2= [];
gdjs.EarthCode.GDleftObjects3= [];
gdjs.EarthCode.GDrightObjects1= [];
gdjs.EarthCode.GDrightObjects2= [];
gdjs.EarthCode.GDrightObjects3= [];
gdjs.EarthCode.GDcrashedshipObjects1= [];
gdjs.EarthCode.GDcrashedshipObjects2= [];
gdjs.EarthCode.GDcrashedshipObjects3= [];
gdjs.EarthCode.GDnotcompleteObjects1= [];
gdjs.EarthCode.GDnotcompleteObjects2= [];
gdjs.EarthCode.GDnotcompleteObjects3= [];
gdjs.EarthCode.GDendObjects1= [];
gdjs.EarthCode.GDendObjects2= [];
gdjs.EarthCode.GDendObjects3= [];
gdjs.EarthCode.GDtimerObjects1= [];
gdjs.EarthCode.GDtimerObjects2= [];
gdjs.EarthCode.GDtimerObjects3= [];
gdjs.EarthCode.GDcheatsObjects1= [];
gdjs.EarthCode.GDcheatsObjects2= [];
gdjs.EarthCode.GDcheatsObjects3= [];
gdjs.EarthCode.GDBlueEnemy1Objects1= [];
gdjs.EarthCode.GDBlueEnemy1Objects2= [];
gdjs.EarthCode.GDBlueEnemy1Objects3= [];
gdjs.EarthCode.GDRedLaser08Objects1= [];
gdjs.EarthCode.GDRedLaser08Objects2= [];
gdjs.EarthCode.GDRedLaser08Objects3= [];
gdjs.EarthCode.GDGreenLaser09Objects1= [];
gdjs.EarthCode.GDGreenLaser09Objects2= [];
gdjs.EarthCode.GDGreenLaser09Objects3= [];
gdjs.EarthCode.GDmovingObjects1= [];
gdjs.EarthCode.GDmovingObjects2= [];
gdjs.EarthCode.GDmovingObjects3= [];
gdjs.EarthCode.GDrollerObjects1= [];
gdjs.EarthCode.GDrollerObjects2= [];
gdjs.EarthCode.GDrollerObjects3= [];
gdjs.EarthCode.GDNewObjectObjects1= [];
gdjs.EarthCode.GDNewObjectObjects2= [];
gdjs.EarthCode.GDNewObjectObjects3= [];
gdjs.EarthCode.GDdroneleftObjects1= [];
gdjs.EarthCode.GDdroneleftObjects2= [];
gdjs.EarthCode.GDdroneleftObjects3= [];
gdjs.EarthCode.GDdronerightObjects1= [];
gdjs.EarthCode.GDdronerightObjects2= [];
gdjs.EarthCode.GDdronerightObjects3= [];
gdjs.EarthCode.GDNewObject2Objects1= [];
gdjs.EarthCode.GDNewObject2Objects2= [];
gdjs.EarthCode.GDNewObject2Objects3= [];
gdjs.EarthCode.GDNewObject3Objects1= [];
gdjs.EarthCode.GDNewObject3Objects2= [];
gdjs.EarthCode.GDNewObject3Objects3= [];
gdjs.EarthCode.GDgamelifeObjects1= [];
gdjs.EarthCode.GDgamelifeObjects2= [];
gdjs.EarthCode.GDgamelifeObjects3= [];
gdjs.EarthCode.GDfpsObjects1= [];
gdjs.EarthCode.GDfpsObjects2= [];
gdjs.EarthCode.GDfpsObjects3= [];

gdjs.EarthCode.conditionTrue_0 = {val:false};
gdjs.EarthCode.condition0IsTrue_0 = {val:false};
gdjs.EarthCode.condition1IsTrue_0 = {val:false};
gdjs.EarthCode.condition2IsTrue_0 = {val:false};
gdjs.EarthCode.condition3IsTrue_0 = {val:false};
gdjs.EarthCode.conditionTrue_1 = {val:false};
gdjs.EarthCode.condition0IsTrue_1 = {val:false};
gdjs.EarthCode.condition1IsTrue_1 = {val:false};
gdjs.EarthCode.condition2IsTrue_1 = {val:false};
gdjs.EarthCode.condition3IsTrue_1 = {val:false};


gdjs.EarthCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.EarthCode.GDPlayerObjects1, gdjs.EarthCode.GDPlayerObjects2);


gdjs.EarthCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.EarthCode.GDPlayerObjects2.length;i<l;++i) {
    if ( !(gdjs.EarthCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.EarthCode.condition0IsTrue_0.val = true;
        gdjs.EarthCode.GDPlayerObjects2[k] = gdjs.EarthCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.EarthCode.GDPlayerObjects2.length = k;}if (gdjs.EarthCode.condition0IsTrue_0.val) {
/* Reuse gdjs.EarthCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.EarthCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.EarthCode.GDPlayerObjects2[i].setAnimationName("stand");
}
}}

}


{

gdjs.copyArray(gdjs.EarthCode.GDPlayerObjects1, gdjs.EarthCode.GDPlayerObjects2);


gdjs.EarthCode.condition0IsTrue_0.val = false;
gdjs.EarthCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.EarthCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.EarthCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.EarthCode.condition0IsTrue_0.val = true;
        gdjs.EarthCode.GDPlayerObjects2[k] = gdjs.EarthCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.EarthCode.GDPlayerObjects2.length = k;}if ( gdjs.EarthCode.condition0IsTrue_0.val ) {
{
gdjs.EarthCode.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}}
if (gdjs.EarthCode.condition1IsTrue_0.val) {
/* Reuse gdjs.EarthCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.EarthCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.EarthCode.GDPlayerObjects2[i].setAnimationName("run");
}
}{for(var i = 0, len = gdjs.EarthCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.EarthCode.GDPlayerObjects2[i].playAnimation();
}
}{for(var i = 0, len = gdjs.EarthCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.EarthCode.GDPlayerObjects2[i].flipX(false);
}
}}

}


{

/* Reuse gdjs.EarthCode.GDPlayerObjects1 */

gdjs.EarthCode.condition0IsTrue_0.val = false;
gdjs.EarthCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.EarthCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.EarthCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.EarthCode.condition0IsTrue_0.val = true;
        gdjs.EarthCode.GDPlayerObjects1[k] = gdjs.EarthCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.EarthCode.GDPlayerObjects1.length = k;}if ( gdjs.EarthCode.condition0IsTrue_0.val ) {
{
gdjs.EarthCode.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}}
if (gdjs.EarthCode.condition1IsTrue_0.val) {
/* Reuse gdjs.EarthCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.EarthCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.EarthCode.GDPlayerObjects1[i].setAnimationName("run");
}
}{for(var i = 0, len = gdjs.EarthCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.EarthCode.GDPlayerObjects1[i].playAnimation();
}
}{for(var i = 0, len = gdjs.EarthCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.EarthCode.GDPlayerObjects1[i].flipX(true);
}
}}

}


};gdjs.EarthCode.mapOfGDgdjs_46EarthCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.EarthCode.GDPlayerObjects1});gdjs.EarthCode.mapOfGDgdjs_46EarthCode_46GDboltObjects1Objects = Hashtable.newFrom({"bolt": gdjs.EarthCode.GDboltObjects1});gdjs.EarthCode.eventsList1 = function(runtimeScene) {

{


gdjs.EarthCode.condition0IsTrue_0.val = false;
{
gdjs.EarthCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(17)) == 0;
}if (gdjs.EarthCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "66136__aji__ding30603-spedup.wav", false, 5, 1);
}}

}


};gdjs.EarthCode.mapOfGDgdjs_46EarthCode_46GDrollerObjects1Objects = Hashtable.newFrom({"roller": gdjs.EarthCode.GDrollerObjects1});gdjs.EarthCode.mapOfGDgdjs_46EarthCode_46GDleftObjects1Objects = Hashtable.newFrom({"left": gdjs.EarthCode.GDleftObjects1});gdjs.EarthCode.mapOfGDgdjs_46EarthCode_46GDrollerObjects1Objects = Hashtable.newFrom({"roller": gdjs.EarthCode.GDrollerObjects1});gdjs.EarthCode.mapOfGDgdjs_46EarthCode_46GDrightObjects1Objects = Hashtable.newFrom({"right": gdjs.EarthCode.GDrightObjects1});gdjs.EarthCode.eventsList2 = function(runtimeScene) {

};gdjs.EarthCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("bolt"), gdjs.EarthCode.GDboltObjects1);

for(gdjs.EarthCode.forEachIndex2 = 0;gdjs.EarthCode.forEachIndex2 < gdjs.EarthCode.GDboltObjects1.length;++gdjs.EarthCode.forEachIndex2) {
gdjs.EarthCode.GDboltObjects2.length = 0;


gdjs.EarthCode.forEachTemporary2 = gdjs.EarthCode.GDboltObjects1[gdjs.EarthCode.forEachIndex2];
gdjs.EarthCode.GDboltObjects2.push(gdjs.EarthCode.forEachTemporary2);
gdjs.EarthCode.condition0IsTrue_0.val = false;
{
gdjs.EarthCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.EarthCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(4).add(1);
}}
}

}


};gdjs.EarthCode.mapOfGDgdjs_46EarthCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.EarthCode.GDPlayerObjects1});gdjs.EarthCode.mapOfGDgdjs_46EarthCode_46GDrollerObjects1Objects = Hashtable.newFrom({"roller": gdjs.EarthCode.GDrollerObjects1});gdjs.EarthCode.mapOfGDgdjs_46EarthCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.EarthCode.GDPlayerObjects1});gdjs.EarthCode.mapOfGDgdjs_46EarthCode_46GDrollerObjects1Objects = Hashtable.newFrom({"roller": gdjs.EarthCode.GDrollerObjects1});gdjs.EarthCode.mapOfGDgdjs_46EarthCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.EarthCode.GDPlayerObjects1});gdjs.EarthCode.mapOfGDgdjs_46EarthCode_46GDcrashedshipObjects1Objects = Hashtable.newFrom({"crashedship": gdjs.EarthCode.GDcrashedshipObjects1});gdjs.EarthCode.mapOfGDgdjs_46EarthCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.EarthCode.GDPlayerObjects1});gdjs.EarthCode.mapOfGDgdjs_46EarthCode_46GDcrashedshipObjects1Objects = Hashtable.newFrom({"crashedship": gdjs.EarthCode.GDcrashedshipObjects1});gdjs.EarthCode.mapOfGDgdjs_46EarthCode_46GDcrashedshipObjects1Objects = Hashtable.newFrom({"crashedship": gdjs.EarthCode.GDcrashedshipObjects1});gdjs.EarthCode.mapOfGDgdjs_46EarthCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.EarthCode.GDPlayerObjects1});gdjs.EarthCode.mapOfGDgdjs_46EarthCode_46GDcrashedshipObjects1Objects = Hashtable.newFrom({"crashedship": gdjs.EarthCode.GDcrashedshipObjects1});gdjs.EarthCode.mapOfGDgdjs_46EarthCode_46GDendObjects1Objects = Hashtable.newFrom({"end": gdjs.EarthCode.GDendObjects1});gdjs.EarthCode.mapOfGDgdjs_46EarthCode_46GDrollerObjects1Objects = Hashtable.newFrom({"roller": gdjs.EarthCode.GDrollerObjects1});gdjs.EarthCode.mapOfGDgdjs_46EarthCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.EarthCode.GDPlayerObjects1});gdjs.EarthCode.mapOfGDgdjs_46EarthCode_46GDNewObjectObjects1Objects = Hashtable.newFrom({"NewObject": gdjs.EarthCode.GDNewObjectObjects1});gdjs.EarthCode.mapOfGDgdjs_46EarthCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.EarthCode.GDPlayerObjects1});gdjs.EarthCode.eventsList4 = function(runtimeScene) {

};gdjs.EarthCode.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("bolt"), gdjs.EarthCode.GDboltObjects1);

for(gdjs.EarthCode.forEachIndex2 = 0;gdjs.EarthCode.forEachIndex2 < gdjs.EarthCode.GDboltObjects1.length;++gdjs.EarthCode.forEachIndex2) {
gdjs.EarthCode.GDboltObjects2.length = 0;


gdjs.EarthCode.forEachTemporary2 = gdjs.EarthCode.GDboltObjects1[gdjs.EarthCode.forEachIndex2];
gdjs.EarthCode.GDboltObjects2.push(gdjs.EarthCode.forEachTemporary2);
if (true) {
{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}{for(var i = 0, len = gdjs.EarthCode.GDboltObjects2.length ;i < len;++i) {
    gdjs.EarthCode.GDboltObjects2[i].deleteFromScene(runtimeScene);
}
}}
}

}


};gdjs.EarthCode.eventsList6 = function(runtimeScene) {

};gdjs.EarthCode.eventsList7 = function(runtimeScene) {

};gdjs.EarthCode.eventsList8 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("roller"), gdjs.EarthCode.GDrollerObjects2);

for(gdjs.EarthCode.forEachIndex3 = 0;gdjs.EarthCode.forEachIndex3 < gdjs.EarthCode.GDrollerObjects2.length;++gdjs.EarthCode.forEachIndex3) {
gdjs.EarthCode.GDrollerObjects3.length = 0;


gdjs.EarthCode.forEachTemporary3 = gdjs.EarthCode.GDrollerObjects2[gdjs.EarthCode.forEachIndex3];
gdjs.EarthCode.GDrollerObjects3.push(gdjs.EarthCode.forEachTemporary3);
if (true) {
{for(var i = 0, len = gdjs.EarthCode.GDrollerObjects3.length ;i < len;++i) {
    gdjs.EarthCode.GDrollerObjects3[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(13).sub(1);
}}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.EarthCode.GDNewObjectObjects1);

for(gdjs.EarthCode.forEachIndex2 = 0;gdjs.EarthCode.forEachIndex2 < gdjs.EarthCode.GDNewObjectObjects1.length;++gdjs.EarthCode.forEachIndex2) {
gdjs.EarthCode.GDNewObjectObjects2.length = 0;


gdjs.EarthCode.forEachTemporary2 = gdjs.EarthCode.GDNewObjectObjects1[gdjs.EarthCode.forEachIndex2];
gdjs.EarthCode.GDNewObjectObjects2.push(gdjs.EarthCode.forEachTemporary2);
if (true) {
{for(var i = 0, len = gdjs.EarthCode.GDNewObjectObjects2.length ;i < len;++i) {
    gdjs.EarthCode.GDNewObjectObjects2[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(13).sub(1);
}}
}

}


};gdjs.EarthCode.mapOfGDgdjs_46EarthCode_46GDmovingObjects1Objects = Hashtable.newFrom({"moving": gdjs.EarthCode.GDmovingObjects1});gdjs.EarthCode.mapOfGDgdjs_46EarthCode_46GDleftObjects1Objects = Hashtable.newFrom({"left": gdjs.EarthCode.GDleftObjects1});gdjs.EarthCode.mapOfGDgdjs_46EarthCode_46GDmovingObjects1Objects = Hashtable.newFrom({"moving": gdjs.EarthCode.GDmovingObjects1});gdjs.EarthCode.mapOfGDgdjs_46EarthCode_46GDrightObjects1Objects = Hashtable.newFrom({"right": gdjs.EarthCode.GDrightObjects1});gdjs.EarthCode.mapOfGDgdjs_46EarthCode_46GDNewObjectObjects1Objects = Hashtable.newFrom({"NewObject": gdjs.EarthCode.GDNewObjectObjects1});gdjs.EarthCode.mapOfGDgdjs_46EarthCode_46GDdroneleftObjects1Objects = Hashtable.newFrom({"droneleft": gdjs.EarthCode.GDdroneleftObjects1});gdjs.EarthCode.mapOfGDgdjs_46EarthCode_46GDNewObjectObjects1Objects = Hashtable.newFrom({"NewObject": gdjs.EarthCode.GDNewObjectObjects1});gdjs.EarthCode.mapOfGDgdjs_46EarthCode_46GDdronerightObjects1Objects = Hashtable.newFrom({"droneright": gdjs.EarthCode.GDdronerightObjects1});gdjs.EarthCode.mapOfGDgdjs_46EarthCode_46GDNewObject2Objects1Objects = Hashtable.newFrom({"NewObject2": gdjs.EarthCode.GDNewObject2Objects1});gdjs.EarthCode.mapOfGDgdjs_46EarthCode_46GDNewObject2Objects1Objects = Hashtable.newFrom({"NewObject2": gdjs.EarthCode.GDNewObject2Objects1});gdjs.EarthCode.mapOfGDgdjs_46EarthCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.EarthCode.GDPlayerObjects1});gdjs.EarthCode.mapOfGDgdjs_46EarthCode_46GDNewObject2Objects1Objects = Hashtable.newFrom({"NewObject2": gdjs.EarthCode.GDNewObject2Objects1});gdjs.EarthCode.mapOfGDgdjs_46EarthCode_46GDearthfloorObjects1Objects = Hashtable.newFrom({"earthfloor": gdjs.EarthCode.GDearthfloorObjects1});gdjs.EarthCode.eventsList9 = function(runtimeScene) {

};gdjs.EarthCode.eventsList10 = function(runtimeScene) {

};gdjs.EarthCode.eventsList11 = function(runtimeScene) {

};gdjs.EarthCode.eventsList12 = function(runtimeScene) {

};gdjs.EarthCode.eventsList13 = function(runtimeScene) {

};gdjs.EarthCode.eventsList14 = function(runtimeScene) {

{


gdjs.EarthCode.condition0IsTrue_0.val = false;
gdjs.EarthCode.condition1IsTrue_0.val = false;
{
gdjs.EarthCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(16)) == 0;
}if ( gdjs.EarthCode.condition0IsTrue_0.val ) {
{
gdjs.EarthCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(17)) == 0;
}}
if (gdjs.EarthCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(16).setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(17).setNumber(1);
}}

}


{


gdjs.EarthCode.condition0IsTrue_0.val = false;
gdjs.EarthCode.condition1IsTrue_0.val = false;
{
gdjs.EarthCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(16)) == 0;
}if ( gdjs.EarthCode.condition0IsTrue_0.val ) {
{
gdjs.EarthCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(17)) == 1;
}}
if (gdjs.EarthCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(16).setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(17).setNumber(0);
}}

}


};gdjs.EarthCode.eventsList15 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("fps"), gdjs.EarthCode.GDfpsObjects2);

gdjs.EarthCode.condition0IsTrue_0.val = false;
gdjs.EarthCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.EarthCode.GDfpsObjects2.length;i<l;++i) {
    if ( !(gdjs.EarthCode.GDfpsObjects2[i].isVisible()) ) {
        gdjs.EarthCode.condition0IsTrue_0.val = true;
        gdjs.EarthCode.GDfpsObjects2[k] = gdjs.EarthCode.GDfpsObjects2[i];
        ++k;
    }
}
gdjs.EarthCode.GDfpsObjects2.length = k;}if ( gdjs.EarthCode.condition0IsTrue_0.val ) {
{
gdjs.EarthCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(15)) == 0;
}}
if (gdjs.EarthCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject3"), gdjs.EarthCode.GDNewObject3Objects2);
gdjs.copyArray(runtimeScene.getObjects("cheats"), gdjs.EarthCode.GDcheatsObjects2);
/* Reuse gdjs.EarthCode.GDfpsObjects2 */
gdjs.copyArray(runtimeScene.getObjects("gamelife"), gdjs.EarthCode.GDgamelifeObjects2);
{for(var i = 0, len = gdjs.EarthCode.GDfpsObjects2.length ;i < len;++i) {
    gdjs.EarthCode.GDfpsObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.EarthCode.GDNewObject3Objects2.length ;i < len;++i) {
    gdjs.EarthCode.GDNewObject3Objects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.EarthCode.GDcheatsObjects2.length ;i < len;++i) {
    gdjs.EarthCode.GDcheatsObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.EarthCode.GDgamelifeObjects2.length ;i < len;++i) {
    gdjs.EarthCode.GDgamelifeObjects2[i].hide(false);
}
}{runtimeScene.getGame().getVariables().getFromIndex(15).setNumber(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("fps"), gdjs.EarthCode.GDfpsObjects1);

gdjs.EarthCode.condition0IsTrue_0.val = false;
gdjs.EarthCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.EarthCode.GDfpsObjects1.length;i<l;++i) {
    if ( gdjs.EarthCode.GDfpsObjects1[i].isVisible() ) {
        gdjs.EarthCode.condition0IsTrue_0.val = true;
        gdjs.EarthCode.GDfpsObjects1[k] = gdjs.EarthCode.GDfpsObjects1[i];
        ++k;
    }
}
gdjs.EarthCode.GDfpsObjects1.length = k;}if ( gdjs.EarthCode.condition0IsTrue_0.val ) {
{
gdjs.EarthCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(15)) == 0;
}}
if (gdjs.EarthCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject3"), gdjs.EarthCode.GDNewObject3Objects1);
gdjs.copyArray(runtimeScene.getObjects("cheats"), gdjs.EarthCode.GDcheatsObjects1);
/* Reuse gdjs.EarthCode.GDfpsObjects1 */
gdjs.copyArray(runtimeScene.getObjects("gamelife"), gdjs.EarthCode.GDgamelifeObjects1);
{for(var i = 0, len = gdjs.EarthCode.GDfpsObjects1.length ;i < len;++i) {
    gdjs.EarthCode.GDfpsObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.EarthCode.GDNewObject3Objects1.length ;i < len;++i) {
    gdjs.EarthCode.GDNewObject3Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.EarthCode.GDcheatsObjects1.length ;i < len;++i) {
    gdjs.EarthCode.GDcheatsObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.EarthCode.GDgamelifeObjects1.length ;i < len;++i) {
    gdjs.EarthCode.GDgamelifeObjects1[i].hide();
}
}{runtimeScene.getGame().getVariables().getFromIndex(15).setNumber(1);
}}

}


};gdjs.EarthCode.eventsList16 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.EarthCode.GDPlayerObjects1);

gdjs.EarthCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.EarthCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.EarthCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.EarthCode.condition0IsTrue_0.val = true;
        gdjs.EarthCode.GDPlayerObjects1[k] = gdjs.EarthCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.EarthCode.GDPlayerObjects1.length = k;}if (gdjs.EarthCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.EarthCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.EarthCode.GDPlayerObjects1);

gdjs.EarthCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.EarthCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.EarthCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.EarthCode.condition0IsTrue_0.val = true;
        gdjs.EarthCode.GDPlayerObjects1[k] = gdjs.EarthCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.EarthCode.GDPlayerObjects1.length = k;}if (gdjs.EarthCode.condition0IsTrue_0.val) {
/* Reuse gdjs.EarthCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.EarthCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.EarthCode.GDPlayerObjects1[i].setAnimationName("jump");
}
}{runtimeScene.getGame().getVariables().getFromIndex(3).setString("none");
}{for(var i = 0, len = gdjs.EarthCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.EarthCode.GDPlayerObjects1[i].clearForces();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.EarthCode.GDPlayerObjects1);

gdjs.EarthCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.EarthCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.EarthCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.EarthCode.condition0IsTrue_0.val = true;
        gdjs.EarthCode.GDPlayerObjects1[k] = gdjs.EarthCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.EarthCode.GDPlayerObjects1.length = k;}if (gdjs.EarthCode.condition0IsTrue_0.val) {
/* Reuse gdjs.EarthCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.EarthCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.EarthCode.GDPlayerObjects1[i].setAnimationName("jump");
}
}}

}


{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.EarthCode.GDPlayerObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.EarthCode.GDPlayerObjects1.length !== 0 ? gdjs.EarthCode.GDPlayerObjects1[0] : null), false, "", 0);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("rocketplat"), gdjs.EarthCode.GDrocketplatObjects1);
{for(var i = 0, len = gdjs.EarthCode.GDrocketplatObjects1.length ;i < len;++i) {
    gdjs.EarthCode.GDrocketplatObjects1[i].setZOrder(1);
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.EarthCode.GDNewObjectObjects1);
gdjs.copyArray(runtimeScene.getObjects("cloud"), gdjs.EarthCode.GDcloudObjects1);
gdjs.copyArray(runtimeScene.getObjects("crashedship"), gdjs.EarthCode.GDcrashedshipObjects1);
{for(var i = 0, len = gdjs.EarthCode.GDcloudObjects1.length ;i < len;++i) {
    gdjs.EarthCode.GDcloudObjects1[i].setZOrder(-(2));
}
}{for(var i = 0, len = gdjs.EarthCode.GDcrashedshipObjects1.length ;i < len;++i) {
    gdjs.EarthCode.GDcrashedshipObjects1[i].setZOrder(1);
}
}{for(var i = 0, len = gdjs.EarthCode.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.EarthCode.GDNewObjectObjects1[i].setZOrder(-(1));
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.EarthCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("bolt"), gdjs.EarthCode.GDboltObjects1);

gdjs.EarthCode.condition0IsTrue_0.val = false;
{
gdjs.EarthCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.EarthCode.mapOfGDgdjs_46EarthCode_46GDPlayerObjects1Objects, gdjs.EarthCode.mapOfGDgdjs_46EarthCode_46GDboltObjects1Objects, false, runtimeScene, false);
}if (gdjs.EarthCode.condition0IsTrue_0.val) {
/* Reuse gdjs.EarthCode.GDboltObjects1 */
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.EarthCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.EarthCode.GDboltObjects1.length ;i < len;++i) {
    gdjs.EarthCode.GDboltObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}{for(var i = 0, len = gdjs.EarthCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.EarthCode.GDscoreObjects1[i].setString("Score:" + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0))));
}
}
{ //Subevents
gdjs.EarthCode.eventsList1(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.EarthCode.condition0IsTrue_0.val = false;
{
gdjs.EarthCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "f");
}if (gdjs.EarthCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}}

}


{


gdjs.EarthCode.condition0IsTrue_0.val = false;
{
gdjs.EarthCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Escape");
}if (gdjs.EarthCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, false, true);
}}

}


{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("NewObject3"), gdjs.EarthCode.GDNewObject3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.EarthCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("cheats"), gdjs.EarthCode.GDcheatsObjects1);
gdjs.copyArray(runtimeScene.getObjects("fps"), gdjs.EarthCode.GDfpsObjects1);
gdjs.copyArray(runtimeScene.getObjects("gamelife"), gdjs.EarthCode.GDgamelifeObjects1);
gdjs.copyArray(runtimeScene.getObjects("live"), gdjs.EarthCode.GDliveObjects1);
gdjs.copyArray(runtimeScene.getObjects("lives"), gdjs.EarthCode.GDlivesObjects1);
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.EarthCode.GDscoreObjects1);
gdjs.copyArray(runtimeScene.getObjects("timer"), gdjs.EarthCode.GDtimerObjects1);
{for(var i = 0, len = gdjs.EarthCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.EarthCode.GDscoreObjects1[i].setString("Amount of bolts " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0))) + "/ " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4))));
}
}{for(var i = 0, len = gdjs.EarthCode.GDlivesObjects1.length ;i < len;++i) {
    gdjs.EarthCode.GDlivesObjects1[i].setString("X" + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1))));
}
}{for(var i = 0, len = gdjs.EarthCode.GDtimerObjects1.length ;i < len;++i) {
    gdjs.EarthCode.GDtimerObjects1[i].setString("Time: " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9))));
}
}{for(var i = 0, len = gdjs.EarthCode.GDfpsObjects1.length ;i < len;++i) {
    gdjs.EarthCode.GDfpsObjects1[i].setString(gdjs.evtTools.common.toString(Math.round(1 / gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene))) + "fps");
}
}{for(var i = 0, len = gdjs.EarthCode.GDNewObject3Objects1.length ;i < len;++i) {
    gdjs.EarthCode.GDNewObject3Objects1[i].setString("no of objects : " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(13))));
}
}{for(var i = 0, len = gdjs.EarthCode.GDgamelifeObjects1.length ;i < len;++i) {
    gdjs.EarthCode.GDgamelifeObjects1[i].setString("Total Game time = " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(14))));
}
}{for(var i = 0, len = gdjs.EarthCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.EarthCode.GDscoreObjects1[i].setX((( gdjs.EarthCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.EarthCode.GDPlayerObjects1[0].getPointX("")) - 200);
}
}{for(var i = 0, len = gdjs.EarthCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.EarthCode.GDscoreObjects1[i].setY((( gdjs.EarthCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.EarthCode.GDPlayerObjects1[0].getPointY("")) - 200);
}
}{for(var i = 0, len = gdjs.EarthCode.GDlivesObjects1.length ;i < len;++i) {
    gdjs.EarthCode.GDlivesObjects1[i].setX((( gdjs.EarthCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.EarthCode.GDPlayerObjects1[0].getPointX("")) - 130);
}
}{for(var i = 0, len = gdjs.EarthCode.GDlivesObjects1.length ;i < len;++i) {
    gdjs.EarthCode.GDlivesObjects1[i].setY((( gdjs.EarthCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.EarthCode.GDPlayerObjects1[0].getPointY("")) - 150);
}
}{for(var i = 0, len = gdjs.EarthCode.GDliveObjects1.length ;i < len;++i) {
    gdjs.EarthCode.GDliveObjects1[i].setX((( gdjs.EarthCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.EarthCode.GDPlayerObjects1[0].getPointX("")) - 200);
}
}{for(var i = 0, len = gdjs.EarthCode.GDliveObjects1.length ;i < len;++i) {
    gdjs.EarthCode.GDliveObjects1[i].setY((( gdjs.EarthCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.EarthCode.GDPlayerObjects1[0].getPointY("")) - 170);
}
}{for(var i = 0, len = gdjs.EarthCode.GDtimerObjects1.length ;i < len;++i) {
    gdjs.EarthCode.GDtimerObjects1[i].setX((( gdjs.EarthCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.EarthCode.GDPlayerObjects1[0].getPointX("")) + 200);
}
}{for(var i = 0, len = gdjs.EarthCode.GDtimerObjects1.length ;i < len;++i) {
    gdjs.EarthCode.GDtimerObjects1[i].setY((( gdjs.EarthCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.EarthCode.GDPlayerObjects1[0].getPointY("")) - 200);
}
}{for(var i = 0, len = gdjs.EarthCode.GDcheatsObjects1.length ;i < len;++i) {
    gdjs.EarthCode.GDcheatsObjects1[i].setX((( gdjs.EarthCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.EarthCode.GDPlayerObjects1[0].getPointX("")));
}
}{for(var i = 0, len = gdjs.EarthCode.GDcheatsObjects1.length ;i < len;++i) {
    gdjs.EarthCode.GDcheatsObjects1[i].setY((( gdjs.EarthCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.EarthCode.GDPlayerObjects1[0].getPointY("")) - 200);
}
}{for(var i = 0, len = gdjs.EarthCode.GDfpsObjects1.length ;i < len;++i) {
    gdjs.EarthCode.GDfpsObjects1[i].setX((( gdjs.EarthCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.EarthCode.GDPlayerObjects1[0].getPointX("")) + 290);
}
}{for(var i = 0, len = gdjs.EarthCode.GDfpsObjects1.length ;i < len;++i) {
    gdjs.EarthCode.GDfpsObjects1[i].setY((( gdjs.EarthCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.EarthCode.GDPlayerObjects1[0].getPointY("")) - 200);
}
}{for(var i = 0, len = gdjs.EarthCode.GDNewObject3Objects1.length ;i < len;++i) {
    gdjs.EarthCode.GDNewObject3Objects1[i].setX((( gdjs.EarthCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.EarthCode.GDPlayerObjects1[0].getPointX("")) + 220);
}
}{for(var i = 0, len = gdjs.EarthCode.GDNewObject3Objects1.length ;i < len;++i) {
    gdjs.EarthCode.GDNewObject3Objects1[i].setY((( gdjs.EarthCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.EarthCode.GDPlayerObjects1[0].getPointY("")) - 160);
}
}{for(var i = 0, len = gdjs.EarthCode.GDgamelifeObjects1.length ;i < len;++i) {
    gdjs.EarthCode.GDgamelifeObjects1[i].setX((( gdjs.EarthCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.EarthCode.GDPlayerObjects1[0].getPointX("")) + 220);
}
}{for(var i = 0, len = gdjs.EarthCode.GDgamelifeObjects1.length ;i < len;++i) {
    gdjs.EarthCode.GDgamelifeObjects1[i].setY((( gdjs.EarthCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.EarthCode.GDPlayerObjects1[0].getPointY("")) - 140);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.EarthCode.GDPlayerObjects1);

gdjs.EarthCode.condition0IsTrue_0.val = false;
gdjs.EarthCode.condition1IsTrue_0.val = false;
gdjs.EarthCode.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.EarthCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.EarthCode.GDPlayerObjects1[i].getY() >= 600 ) {
        gdjs.EarthCode.condition0IsTrue_0.val = true;
        gdjs.EarthCode.GDPlayerObjects1[k] = gdjs.EarthCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.EarthCode.GDPlayerObjects1.length = k;}if ( gdjs.EarthCode.condition0IsTrue_0.val ) {
{
gdjs.EarthCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) != 0;
}if ( gdjs.EarthCode.condition1IsTrue_0.val ) {
{
gdjs.EarthCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) != 1;
}}
}
if (gdjs.EarthCode.condition2IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).sub(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}{runtimeScene.getGame().getVariables().getFromIndex(1).sub(1);
}{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Earth");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.EarthCode.GDPlayerObjects1);

gdjs.EarthCode.condition0IsTrue_0.val = false;
gdjs.EarthCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.EarthCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.EarthCode.GDPlayerObjects1[i].getY() >= 600 ) {
        gdjs.EarthCode.condition0IsTrue_0.val = true;
        gdjs.EarthCode.GDPlayerObjects1[k] = gdjs.EarthCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.EarthCode.GDPlayerObjects1.length = k;}if ( gdjs.EarthCode.condition0IsTrue_0.val ) {
{
gdjs.EarthCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) == 1;
}}
if (gdjs.EarthCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Earth");
}}

}


{


gdjs.EarthCode.condition0IsTrue_0.val = false;
{
gdjs.EarthCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 0;
}if (gdjs.EarthCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Dead", true);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("left"), gdjs.EarthCode.GDleftObjects1);
gdjs.copyArray(runtimeScene.getObjects("roller"), gdjs.EarthCode.GDrollerObjects1);

gdjs.EarthCode.condition0IsTrue_0.val = false;
{
gdjs.EarthCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.EarthCode.mapOfGDgdjs_46EarthCode_46GDrollerObjects1Objects, gdjs.EarthCode.mapOfGDgdjs_46EarthCode_46GDleftObjects1Objects, false, runtimeScene, false);
}if (gdjs.EarthCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(2).setString("Left");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("right"), gdjs.EarthCode.GDrightObjects1);
gdjs.copyArray(runtimeScene.getObjects("roller"), gdjs.EarthCode.GDrollerObjects1);

gdjs.EarthCode.condition0IsTrue_0.val = false;
{
gdjs.EarthCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.EarthCode.mapOfGDgdjs_46EarthCode_46GDrollerObjects1Objects, gdjs.EarthCode.mapOfGDgdjs_46EarthCode_46GDrightObjects1Objects, false, runtimeScene, false);
}if (gdjs.EarthCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(2).setString("Right");
}}

}


{


gdjs.EarthCode.condition0IsTrue_0.val = false;
{
gdjs.EarthCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)) == "Left";
}if (gdjs.EarthCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("roller"), gdjs.EarthCode.GDrollerObjects1);
{for(var i = 0, len = gdjs.EarthCode.GDrollerObjects1.length ;i < len;++i) {
    gdjs.EarthCode.GDrollerObjects1[i].addPolarForce(180, 100, 0);
}
}{for(var i = 0, len = gdjs.EarthCode.GDrollerObjects1.length ;i < len;++i) {
    gdjs.EarthCode.GDrollerObjects1[i].flipX(true);
}
}}

}


{


gdjs.EarthCode.condition0IsTrue_0.val = false;
{
gdjs.EarthCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)) == "Right";
}if (gdjs.EarthCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("roller"), gdjs.EarthCode.GDrollerObjects1);
{for(var i = 0, len = gdjs.EarthCode.GDrollerObjects1.length ;i < len;++i) {
    gdjs.EarthCode.GDrollerObjects1[i].addPolarForce(0, 100, 0);
}
}{for(var i = 0, len = gdjs.EarthCode.GDrollerObjects1.length ;i < len;++i) {
    gdjs.EarthCode.GDrollerObjects1[i].flipX(false);
}
}}

}


{



}


{


gdjs.EarthCode.condition0IsTrue_0.val = false;
{
gdjs.EarthCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.EarthCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject3"), gdjs.EarthCode.GDNewObject3Objects1);
gdjs.copyArray(runtimeScene.getObjects("cheats"), gdjs.EarthCode.GDcheatsObjects1);
gdjs.copyArray(runtimeScene.getObjects("crashedship"), gdjs.EarthCode.GDcrashedshipObjects1);
gdjs.copyArray(runtimeScene.getObjects("droneleft"), gdjs.EarthCode.GDdroneleftObjects1);
gdjs.copyArray(runtimeScene.getObjects("droneright"), gdjs.EarthCode.GDdronerightObjects1);
gdjs.copyArray(runtimeScene.getObjects("fps"), gdjs.EarthCode.GDfpsObjects1);
gdjs.copyArray(runtimeScene.getObjects("gamelife"), gdjs.EarthCode.GDgamelifeObjects1);
gdjs.copyArray(runtimeScene.getObjects("left"), gdjs.EarthCode.GDleftObjects1);
gdjs.copyArray(runtimeScene.getObjects("notcomplete"), gdjs.EarthCode.GDnotcompleteObjects1);
gdjs.copyArray(runtimeScene.getObjects("right"), gdjs.EarthCode.GDrightObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(2).setString("Left");
}{for(var i = 0, len = gdjs.EarthCode.GDrightObjects1.length ;i < len;++i) {
    gdjs.EarthCode.GDrightObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.EarthCode.GDleftObjects1.length ;i < len;++i) {
    gdjs.EarthCode.GDleftObjects1[i].hide();
}
}{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(0);
}{for(var i = 0, len = gdjs.EarthCode.GDnotcompleteObjects1.length ;i < len;++i) {
    gdjs.EarthCode.GDnotcompleteObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.EarthCode.GDcrashedshipObjects1.length ;i < len;++i) {
    gdjs.EarthCode.GDcrashedshipObjects1[i].setAnimationName("stand");
}
}{runtimeScene.getGame().getVariables().getFromIndex(5).setNumber(0);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "fire");
}{for(var i = 0, len = gdjs.EarthCode.GDdroneleftObjects1.length ;i < len;++i) {
    gdjs.EarthCode.GDdroneleftObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.EarthCode.GDdronerightObjects1.length ;i < len;++i) {
    gdjs.EarthCode.GDdronerightObjects1[i].hide();
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(13).setNumber(0);
}{for(var i = 0, len = gdjs.EarthCode.GDfpsObjects1.length ;i < len;++i) {
    gdjs.EarthCode.GDfpsObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.EarthCode.GDNewObject3Objects1.length ;i < len;++i) {
    gdjs.EarthCode.GDNewObject3Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.EarthCode.GDgamelifeObjects1.length ;i < len;++i) {
    gdjs.EarthCode.GDgamelifeObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.EarthCode.GDcheatsObjects1.length ;i < len;++i) {
    gdjs.EarthCode.GDcheatsObjects1[i].hide();
}
}
{ //Subevents
gdjs.EarthCode.eventsList3(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.EarthCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("roller"), gdjs.EarthCode.GDrollerObjects1);

gdjs.EarthCode.condition0IsTrue_0.val = false;
gdjs.EarthCode.condition1IsTrue_0.val = false;
{
gdjs.EarthCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.EarthCode.mapOfGDgdjs_46EarthCode_46GDPlayerObjects1Objects, gdjs.EarthCode.mapOfGDgdjs_46EarthCode_46GDrollerObjects1Objects, false, runtimeScene, false);
}if ( gdjs.EarthCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.EarthCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.EarthCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.EarthCode.condition1IsTrue_0.val = true;
        gdjs.EarthCode.GDPlayerObjects1[k] = gdjs.EarthCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.EarthCode.GDPlayerObjects1.length = k;}}
if (gdjs.EarthCode.condition1IsTrue_0.val) {
/* Reuse gdjs.EarthCode.GDPlayerObjects1 */
/* Reuse gdjs.EarthCode.GDrollerObjects1 */
{for(var i = 0, len = gdjs.EarthCode.GDrollerObjects1.length ;i < len;++i) {
    gdjs.EarthCode.GDrollerObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.EarthCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.EarthCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").setCanJump();
}
}{for(var i = 0, len = gdjs.EarthCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.EarthCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}{runtimeScene.getGame().getVariables().getFromIndex(13).sub(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.EarthCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("roller"), gdjs.EarthCode.GDrollerObjects1);

gdjs.EarthCode.condition0IsTrue_0.val = false;
gdjs.EarthCode.condition1IsTrue_0.val = false;
{
gdjs.EarthCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.EarthCode.mapOfGDgdjs_46EarthCode_46GDPlayerObjects1Objects, gdjs.EarthCode.mapOfGDgdjs_46EarthCode_46GDrollerObjects1Objects, false, runtimeScene, false);
}if ( gdjs.EarthCode.condition0IsTrue_0.val ) {
{
gdjs.EarthCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) != 1;
}}
if (gdjs.EarthCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).sub(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}{runtimeScene.getGame().getVariables().getFromIndex(1).sub(1);
}{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Earth");
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.EarthCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("crashedship"), gdjs.EarthCode.GDcrashedshipObjects1);

gdjs.EarthCode.condition0IsTrue_0.val = false;
{
gdjs.EarthCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.EarthCode.mapOfGDgdjs_46EarthCode_46GDPlayerObjects1Objects, gdjs.EarthCode.mapOfGDgdjs_46EarthCode_46GDcrashedshipObjects1Objects, true, runtimeScene, false);
}if (gdjs.EarthCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("notcomplete"), gdjs.EarthCode.GDnotcompleteObjects1);
{for(var i = 0, len = gdjs.EarthCode.GDnotcompleteObjects1.length ;i < len;++i) {
    gdjs.EarthCode.GDnotcompleteObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.EarthCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("crashedship"), gdjs.EarthCode.GDcrashedshipObjects1);

gdjs.EarthCode.condition0IsTrue_0.val = false;
gdjs.EarthCode.condition1IsTrue_0.val = false;
{
gdjs.EarthCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.EarthCode.mapOfGDgdjs_46EarthCode_46GDPlayerObjects1Objects, gdjs.EarthCode.mapOfGDgdjs_46EarthCode_46GDcrashedshipObjects1Objects, false, runtimeScene, false);
}if ( gdjs.EarthCode.condition0IsTrue_0.val ) {
{
{gdjs.EarthCode.conditionTrue_1 = gdjs.EarthCode.condition1IsTrue_0;
gdjs.EarthCode.conditionTrue_1.val = (gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) != gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}}
if (gdjs.EarthCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("notcomplete"), gdjs.EarthCode.GDnotcompleteObjects1);
{for(var i = 0, len = gdjs.EarthCode.GDnotcompleteObjects1.length ;i < len;++i) {
    gdjs.EarthCode.GDnotcompleteObjects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.EarthCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("crashedship"), gdjs.EarthCode.GDcrashedshipObjects1);

gdjs.EarthCode.condition0IsTrue_0.val = false;
gdjs.EarthCode.condition1IsTrue_0.val = false;
{
gdjs.EarthCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.EarthCode.mapOfGDgdjs_46EarthCode_46GDcrashedshipObjects1Objects, gdjs.EarthCode.mapOfGDgdjs_46EarthCode_46GDPlayerObjects1Objects, false, runtimeScene, false);
}if ( gdjs.EarthCode.condition0IsTrue_0.val ) {
{
{gdjs.EarthCode.conditionTrue_1 = gdjs.EarthCode.condition1IsTrue_0;
gdjs.EarthCode.conditionTrue_1.val = (gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}}
if (gdjs.EarthCode.condition1IsTrue_0.val) {
/* Reuse gdjs.EarthCode.GDPlayerObjects1 */
/* Reuse gdjs.EarthCode.GDcrashedshipObjects1 */
{for(var i = 0, len = gdjs.EarthCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.EarthCode.GDPlayerObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.EarthCode.GDcrashedshipObjects1.length ;i < len;++i) {
    gdjs.EarthCode.GDcrashedshipObjects1[i].setAnimationName("fixit");
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "fixingtime");
}{runtimeScene.getGame().getVariables().getFromIndex(5).setNumber(1);
}}

}


{


gdjs.EarthCode.condition0IsTrue_0.val = false;
gdjs.EarthCode.condition1IsTrue_0.val = false;
{
gdjs.EarthCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 3, "fixingtime");
}if ( gdjs.EarthCode.condition0IsTrue_0.val ) {
{
{gdjs.EarthCode.conditionTrue_1 = gdjs.EarthCode.condition1IsTrue_0;
gdjs.EarthCode.conditionTrue_1.val = (gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5)) == 1);
}
}}
if (gdjs.EarthCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("crashedship"), gdjs.EarthCode.GDcrashedshipObjects1);
{for(var i = 0, len = gdjs.EarthCode.GDcrashedshipObjects1.length ;i < len;++i) {
    gdjs.EarthCode.GDcrashedshipObjects1[i].setAnimationName("fly");
}
}{for(var i = 0, len = gdjs.EarthCode.GDcrashedshipObjects1.length ;i < len;++i) {
    gdjs.EarthCode.GDcrashedshipObjects1[i].addForce(0, -(1000), 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("crashedship"), gdjs.EarthCode.GDcrashedshipObjects1);
gdjs.copyArray(runtimeScene.getObjects("end"), gdjs.EarthCode.GDendObjects1);

gdjs.EarthCode.condition0IsTrue_0.val = false;
{
gdjs.EarthCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.EarthCode.mapOfGDgdjs_46EarthCode_46GDcrashedshipObjects1Objects, gdjs.EarthCode.mapOfGDgdjs_46EarthCode_46GDendObjects1Objects, false, runtimeScene, false);
}if (gdjs.EarthCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(3);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "intro:V", false);
}}

}


{



}


{


gdjs.EarthCode.condition0IsTrue_0.val = false;
{
gdjs.EarthCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "i");
}if (gdjs.EarthCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(6).setNumber(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.EarthCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("roller"), gdjs.EarthCode.GDrollerObjects1);

gdjs.EarthCode.condition0IsTrue_0.val = false;
gdjs.EarthCode.condition1IsTrue_0.val = false;
{
gdjs.EarthCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) == 1;
}if ( gdjs.EarthCode.condition0IsTrue_0.val ) {
{
gdjs.EarthCode.condition1IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.EarthCode.mapOfGDgdjs_46EarthCode_46GDrollerObjects1Objects, gdjs.EarthCode.mapOfGDgdjs_46EarthCode_46GDPlayerObjects1Objects, false, runtimeScene, false);
}}
if (gdjs.EarthCode.condition1IsTrue_0.val) {
/* Reuse gdjs.EarthCode.GDrollerObjects1 */
{for(var i = 0, len = gdjs.EarthCode.GDrollerObjects1.length ;i < len;++i) {
    gdjs.EarthCode.GDrollerObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(13).sub(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.EarthCode.GDNewObjectObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.EarthCode.GDPlayerObjects1);

gdjs.EarthCode.condition0IsTrue_0.val = false;
gdjs.EarthCode.condition1IsTrue_0.val = false;
{
gdjs.EarthCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) == 1;
}if ( gdjs.EarthCode.condition0IsTrue_0.val ) {
{
gdjs.EarthCode.condition1IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.EarthCode.mapOfGDgdjs_46EarthCode_46GDNewObjectObjects1Objects, gdjs.EarthCode.mapOfGDgdjs_46EarthCode_46GDPlayerObjects1Objects, false, runtimeScene, false);
}}
if (gdjs.EarthCode.condition1IsTrue_0.val) {
/* Reuse gdjs.EarthCode.GDNewObjectObjects1 */
{for(var i = 0, len = gdjs.EarthCode.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.EarthCode.GDNewObjectObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(13).sub(1);
}}

}


{


gdjs.EarthCode.condition0IsTrue_0.val = false;
{
gdjs.EarthCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "c");
}if (gdjs.EarthCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.EarthCode.eventsList5(runtimeScene);} //End of subevents
}

}


{


gdjs.EarthCode.condition0IsTrue_0.val = false;
{
gdjs.EarthCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "k");
}if (gdjs.EarthCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.EarthCode.eventsList8(runtimeScene);} //End of subevents
}

}


{


gdjs.EarthCode.condition0IsTrue_0.val = false;
{
gdjs.EarthCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "t");
}if (gdjs.EarthCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(12).setNumber(1);
}}

}


{



}


{


gdjs.EarthCode.condition0IsTrue_0.val = false;
{
gdjs.EarthCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.EarthCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "leveltimer");
}{runtimeScene.getGame().getVariables().getFromIndex(9).setNumber(60);
}}

}


{


gdjs.EarthCode.condition0IsTrue_0.val = false;
gdjs.EarthCode.condition1IsTrue_0.val = false;
{
gdjs.EarthCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "leveltimer");
}if ( gdjs.EarthCode.condition0IsTrue_0.val ) {
{
gdjs.EarthCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(12)) != 1;
}}
if (gdjs.EarthCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "leveltimer");
}{runtimeScene.getGame().getVariables().getFromIndex(9).sub(1);
}{runtimeScene.getGame().getVariables().getFromIndex(14).add(1);
}}

}


{


gdjs.EarthCode.condition0IsTrue_0.val = false;
{
gdjs.EarthCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9)) == 0;
}if (gdjs.EarthCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(1).sub(1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Earth", false);
}}

}


{



}


{


gdjs.EarthCode.condition0IsTrue_0.val = false;
{
gdjs.EarthCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableBoolean(runtimeScene.getVariables().getFromIndex(2), true);
}if (gdjs.EarthCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("moving"), gdjs.EarthCode.GDmovingObjects1);
{for(var i = 0, len = gdjs.EarthCode.GDmovingObjects1.length ;i < len;++i) {
    gdjs.EarthCode.GDmovingObjects1[i].addPolarForce(180, 100, 0);
}
}}

}


{


gdjs.EarthCode.condition0IsTrue_0.val = false;
{
gdjs.EarthCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableBoolean(runtimeScene.getVariables().getFromIndex(2), false);
}if (gdjs.EarthCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("moving"), gdjs.EarthCode.GDmovingObjects1);
{for(var i = 0, len = gdjs.EarthCode.GDmovingObjects1.length ;i < len;++i) {
    gdjs.EarthCode.GDmovingObjects1[i].addPolarForce(0, 100, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("left"), gdjs.EarthCode.GDleftObjects1);
gdjs.copyArray(runtimeScene.getObjects("moving"), gdjs.EarthCode.GDmovingObjects1);

gdjs.EarthCode.condition0IsTrue_0.val = false;
{
gdjs.EarthCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.EarthCode.mapOfGDgdjs_46EarthCode_46GDmovingObjects1Objects, gdjs.EarthCode.mapOfGDgdjs_46EarthCode_46GDleftObjects1Objects, false, runtimeScene, false);
}if (gdjs.EarthCode.condition0IsTrue_0.val) {
{gdjs.evtTools.common.setVariableBoolean(runtimeScene.getVariables().getFromIndex(2), true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("moving"), gdjs.EarthCode.GDmovingObjects1);
gdjs.copyArray(runtimeScene.getObjects("right"), gdjs.EarthCode.GDrightObjects1);

gdjs.EarthCode.condition0IsTrue_0.val = false;
{
gdjs.EarthCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.EarthCode.mapOfGDgdjs_46EarthCode_46GDmovingObjects1Objects, gdjs.EarthCode.mapOfGDgdjs_46EarthCode_46GDrightObjects1Objects, false, runtimeScene, false);
}if (gdjs.EarthCode.condition0IsTrue_0.val) {
{gdjs.evtTools.common.setVariableBoolean(runtimeScene.getVariables().getFromIndex(2), false);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.EarthCode.GDNewObjectObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.EarthCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("droneleft"), gdjs.EarthCode.GDdroneleftObjects1);
gdjs.copyArray(runtimeScene.getObjects("droneright"), gdjs.EarthCode.GDdronerightObjects1);
{for(var i = 0, len = gdjs.EarthCode.GDdronerightObjects1.length ;i < len;++i) {
    gdjs.EarthCode.GDdronerightObjects1[i].setX((( gdjs.EarthCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.EarthCode.GDPlayerObjects1[0].getPointX("")) - 300);
}
}{for(var i = 0, len = gdjs.EarthCode.GDdroneleftObjects1.length ;i < len;++i) {
    gdjs.EarthCode.GDdroneleftObjects1[i].setX((( gdjs.EarthCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.EarthCode.GDPlayerObjects1[0].getPointX("")) + 400);
}
}{for(var i = 0, len = gdjs.EarthCode.GDdronerightObjects1.length ;i < len;++i) {
    gdjs.EarthCode.GDdronerightObjects1[i].setY((( gdjs.EarthCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.EarthCode.GDPlayerObjects1[0].getPointY("")) - 200);
}
}{for(var i = 0, len = gdjs.EarthCode.GDdroneleftObjects1.length ;i < len;++i) {
    gdjs.EarthCode.GDdroneleftObjects1[i].setY((( gdjs.EarthCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.EarthCode.GDPlayerObjects1[0].getPointY("")) - 200);
}
}{for(var i = 0, len = gdjs.EarthCode.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.EarthCode.GDNewObjectObjects1[i].setY((( gdjs.EarthCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.EarthCode.GDPlayerObjects1[0].getPointY("")) - 200);
}
}}

}


{


gdjs.EarthCode.condition0IsTrue_0.val = false;
{
gdjs.EarthCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableBoolean(runtimeScene.getVariables().getFromIndex(3), true);
}if (gdjs.EarthCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.EarthCode.GDNewObjectObjects1);
{for(var i = 0, len = gdjs.EarthCode.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.EarthCode.GDNewObjectObjects1[i].addPolarForce(180, 100, 0);
}
}}

}


{


gdjs.EarthCode.condition0IsTrue_0.val = false;
{
gdjs.EarthCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableBoolean(runtimeScene.getVariables().getFromIndex(3), false);
}if (gdjs.EarthCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.EarthCode.GDNewObjectObjects1);
{for(var i = 0, len = gdjs.EarthCode.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.EarthCode.GDNewObjectObjects1[i].addPolarForce(0, 100, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.EarthCode.GDNewObjectObjects1);
gdjs.copyArray(runtimeScene.getObjects("droneleft"), gdjs.EarthCode.GDdroneleftObjects1);

gdjs.EarthCode.condition0IsTrue_0.val = false;
{
gdjs.EarthCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.EarthCode.mapOfGDgdjs_46EarthCode_46GDNewObjectObjects1Objects, gdjs.EarthCode.mapOfGDgdjs_46EarthCode_46GDdroneleftObjects1Objects, false, runtimeScene, false);
}if (gdjs.EarthCode.condition0IsTrue_0.val) {
{gdjs.evtTools.common.setVariableBoolean(runtimeScene.getVariables().getFromIndex(3), true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.EarthCode.GDNewObjectObjects1);
gdjs.copyArray(runtimeScene.getObjects("droneright"), gdjs.EarthCode.GDdronerightObjects1);

gdjs.EarthCode.condition0IsTrue_0.val = false;
{
gdjs.EarthCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.EarthCode.mapOfGDgdjs_46EarthCode_46GDNewObjectObjects1Objects, gdjs.EarthCode.mapOfGDgdjs_46EarthCode_46GDdronerightObjects1Objects, false, runtimeScene, false);
}if (gdjs.EarthCode.condition0IsTrue_0.val) {
{gdjs.evtTools.common.setVariableBoolean(runtimeScene.getVariables().getFromIndex(3), false);
}}

}


{


gdjs.EarthCode.condition0IsTrue_0.val = false;
{
gdjs.EarthCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, gdjs.randomInRange(6, 10), "drop");
}if (gdjs.EarthCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.EarthCode.GDNewObjectObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.EarthCode.GDNewObject2Objects1);
{for(var i = 0, len = gdjs.EarthCode.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.EarthCode.GDNewObjectObjects1[i].getBehavior("FireBullet").Fire((gdjs.EarthCode.GDNewObjectObjects1[i].getPointX("")), (gdjs.EarthCode.GDNewObjectObjects1[i].getPointY("")), gdjs.EarthCode.mapOfGDgdjs_46EarthCode_46GDNewObject2Objects1Objects, 90, 80, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "drop");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.EarthCode.GDNewObject2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.EarthCode.GDPlayerObjects1);

gdjs.EarthCode.condition0IsTrue_0.val = false;
gdjs.EarthCode.condition1IsTrue_0.val = false;
{
gdjs.EarthCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.EarthCode.mapOfGDgdjs_46EarthCode_46GDNewObject2Objects1Objects, gdjs.EarthCode.mapOfGDgdjs_46EarthCode_46GDPlayerObjects1Objects, false, runtimeScene, false);
}if ( gdjs.EarthCode.condition0IsTrue_0.val ) {
{
gdjs.EarthCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) != 1;
}}
if (gdjs.EarthCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).sub(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}{runtimeScene.getGame().getVariables().getFromIndex(1).sub(1);
}{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Earth");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.EarthCode.GDNewObject2Objects1);
gdjs.copyArray(runtimeScene.getObjects("earthfloor"), gdjs.EarthCode.GDearthfloorObjects1);

gdjs.EarthCode.condition0IsTrue_0.val = false;
{
gdjs.EarthCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.EarthCode.mapOfGDgdjs_46EarthCode_46GDNewObject2Objects1Objects, gdjs.EarthCode.mapOfGDgdjs_46EarthCode_46GDearthfloorObjects1Objects, false, runtimeScene, false);
}if (gdjs.EarthCode.condition0IsTrue_0.val) {
/* Reuse gdjs.EarthCode.GDNewObject2Objects1 */
{for(var i = 0, len = gdjs.EarthCode.GDNewObject2Objects1.length ;i < len;++i) {
    gdjs.EarthCode.GDNewObject2Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.EarthCode.GDPlayerObjects1);

for(gdjs.EarthCode.forEachIndex2 = 0;gdjs.EarthCode.forEachIndex2 < gdjs.EarthCode.GDPlayerObjects1.length;++gdjs.EarthCode.forEachIndex2) {
gdjs.EarthCode.GDPlayerObjects2.length = 0;


gdjs.EarthCode.forEachTemporary2 = gdjs.EarthCode.GDPlayerObjects1[gdjs.EarthCode.forEachIndex2];
gdjs.EarthCode.GDPlayerObjects2.push(gdjs.EarthCode.forEachTemporary2);
gdjs.EarthCode.condition0IsTrue_0.val = false;
{
gdjs.EarthCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.EarthCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(13).add(1);
}}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("earthfloor"), gdjs.EarthCode.GDearthfloorObjects1);

for(gdjs.EarthCode.forEachIndex2 = 0;gdjs.EarthCode.forEachIndex2 < gdjs.EarthCode.GDearthfloorObjects1.length;++gdjs.EarthCode.forEachIndex2) {
gdjs.EarthCode.GDearthfloorObjects2.length = 0;


gdjs.EarthCode.forEachTemporary2 = gdjs.EarthCode.GDearthfloorObjects1[gdjs.EarthCode.forEachIndex2];
gdjs.EarthCode.GDearthfloorObjects2.push(gdjs.EarthCode.forEachTemporary2);
gdjs.EarthCode.condition0IsTrue_0.val = false;
{
gdjs.EarthCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.EarthCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(13).add(1);
}}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("rocketplat"), gdjs.EarthCode.GDrocketplatObjects1);

for(gdjs.EarthCode.forEachIndex2 = 0;gdjs.EarthCode.forEachIndex2 < gdjs.EarthCode.GDrocketplatObjects1.length;++gdjs.EarthCode.forEachIndex2) {
gdjs.EarthCode.GDrocketplatObjects2.length = 0;


gdjs.EarthCode.forEachTemporary2 = gdjs.EarthCode.GDrocketplatObjects1[gdjs.EarthCode.forEachIndex2];
gdjs.EarthCode.GDrocketplatObjects2.push(gdjs.EarthCode.forEachTemporary2);
gdjs.EarthCode.condition0IsTrue_0.val = false;
{
gdjs.EarthCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.EarthCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(13).add(1);
}}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("roller"), gdjs.EarthCode.GDrollerObjects1);

for(gdjs.EarthCode.forEachIndex2 = 0;gdjs.EarthCode.forEachIndex2 < gdjs.EarthCode.GDrollerObjects1.length;++gdjs.EarthCode.forEachIndex2) {
gdjs.EarthCode.GDrollerObjects2.length = 0;


gdjs.EarthCode.forEachTemporary2 = gdjs.EarthCode.GDrollerObjects1[gdjs.EarthCode.forEachIndex2];
gdjs.EarthCode.GDrollerObjects2.push(gdjs.EarthCode.forEachTemporary2);
gdjs.EarthCode.condition0IsTrue_0.val = false;
{
gdjs.EarthCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.EarthCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(13).add(1);
}}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.EarthCode.GDNewObjectObjects1);

for(gdjs.EarthCode.forEachIndex2 = 0;gdjs.EarthCode.forEachIndex2 < gdjs.EarthCode.GDNewObjectObjects1.length;++gdjs.EarthCode.forEachIndex2) {
gdjs.EarthCode.GDNewObjectObjects2.length = 0;


gdjs.EarthCode.forEachTemporary2 = gdjs.EarthCode.GDNewObjectObjects1[gdjs.EarthCode.forEachIndex2];
gdjs.EarthCode.GDNewObjectObjects2.push(gdjs.EarthCode.forEachTemporary2);
gdjs.EarthCode.condition0IsTrue_0.val = false;
{
gdjs.EarthCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.EarthCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(13).add(1);
}}
}

}


{


gdjs.EarthCode.condition0IsTrue_0.val = false;
{
gdjs.EarthCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "m");
}if (gdjs.EarthCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(16).setNumber(0);
}
{ //Subevents
gdjs.EarthCode.eventsList14(runtimeScene);} //End of subevents
}

}


{


gdjs.EarthCode.condition0IsTrue_0.val = false;
{
gdjs.EarthCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "F1");
}if (gdjs.EarthCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(15).setNumber(0);
}
{ //Subevents
gdjs.EarthCode.eventsList15(runtimeScene);} //End of subevents
}

}


};

gdjs.EarthCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.EarthCode.GDPlayerObjects1.length = 0;
gdjs.EarthCode.GDPlayerObjects2.length = 0;
gdjs.EarthCode.GDPlayerObjects3.length = 0;
gdjs.EarthCode.GDearthfloorObjects1.length = 0;
gdjs.EarthCode.GDearthfloorObjects2.length = 0;
gdjs.EarthCode.GDearthfloorObjects3.length = 0;
gdjs.EarthCode.GDrocketplatObjects1.length = 0;
gdjs.EarthCode.GDrocketplatObjects2.length = 0;
gdjs.EarthCode.GDrocketplatObjects3.length = 0;
gdjs.EarthCode.GDcloudObjects1.length = 0;
gdjs.EarthCode.GDcloudObjects2.length = 0;
gdjs.EarthCode.GDcloudObjects3.length = 0;
gdjs.EarthCode.GDboltObjects1.length = 0;
gdjs.EarthCode.GDboltObjects2.length = 0;
gdjs.EarthCode.GDboltObjects3.length = 0;
gdjs.EarthCode.GDscoreObjects1.length = 0;
gdjs.EarthCode.GDscoreObjects2.length = 0;
gdjs.EarthCode.GDscoreObjects3.length = 0;
gdjs.EarthCode.GDliveObjects1.length = 0;
gdjs.EarthCode.GDliveObjects2.length = 0;
gdjs.EarthCode.GDliveObjects3.length = 0;
gdjs.EarthCode.GDlivesObjects1.length = 0;
gdjs.EarthCode.GDlivesObjects2.length = 0;
gdjs.EarthCode.GDlivesObjects3.length = 0;
gdjs.EarthCode.GDrobottingObjects1.length = 0;
gdjs.EarthCode.GDrobottingObjects2.length = 0;
gdjs.EarthCode.GDrobottingObjects3.length = 0;
gdjs.EarthCode.GDleftObjects1.length = 0;
gdjs.EarthCode.GDleftObjects2.length = 0;
gdjs.EarthCode.GDleftObjects3.length = 0;
gdjs.EarthCode.GDrightObjects1.length = 0;
gdjs.EarthCode.GDrightObjects2.length = 0;
gdjs.EarthCode.GDrightObjects3.length = 0;
gdjs.EarthCode.GDcrashedshipObjects1.length = 0;
gdjs.EarthCode.GDcrashedshipObjects2.length = 0;
gdjs.EarthCode.GDcrashedshipObjects3.length = 0;
gdjs.EarthCode.GDnotcompleteObjects1.length = 0;
gdjs.EarthCode.GDnotcompleteObjects2.length = 0;
gdjs.EarthCode.GDnotcompleteObjects3.length = 0;
gdjs.EarthCode.GDendObjects1.length = 0;
gdjs.EarthCode.GDendObjects2.length = 0;
gdjs.EarthCode.GDendObjects3.length = 0;
gdjs.EarthCode.GDtimerObjects1.length = 0;
gdjs.EarthCode.GDtimerObjects2.length = 0;
gdjs.EarthCode.GDtimerObjects3.length = 0;
gdjs.EarthCode.GDcheatsObjects1.length = 0;
gdjs.EarthCode.GDcheatsObjects2.length = 0;
gdjs.EarthCode.GDcheatsObjects3.length = 0;
gdjs.EarthCode.GDBlueEnemy1Objects1.length = 0;
gdjs.EarthCode.GDBlueEnemy1Objects2.length = 0;
gdjs.EarthCode.GDBlueEnemy1Objects3.length = 0;
gdjs.EarthCode.GDRedLaser08Objects1.length = 0;
gdjs.EarthCode.GDRedLaser08Objects2.length = 0;
gdjs.EarthCode.GDRedLaser08Objects3.length = 0;
gdjs.EarthCode.GDGreenLaser09Objects1.length = 0;
gdjs.EarthCode.GDGreenLaser09Objects2.length = 0;
gdjs.EarthCode.GDGreenLaser09Objects3.length = 0;
gdjs.EarthCode.GDmovingObjects1.length = 0;
gdjs.EarthCode.GDmovingObjects2.length = 0;
gdjs.EarthCode.GDmovingObjects3.length = 0;
gdjs.EarthCode.GDrollerObjects1.length = 0;
gdjs.EarthCode.GDrollerObjects2.length = 0;
gdjs.EarthCode.GDrollerObjects3.length = 0;
gdjs.EarthCode.GDNewObjectObjects1.length = 0;
gdjs.EarthCode.GDNewObjectObjects2.length = 0;
gdjs.EarthCode.GDNewObjectObjects3.length = 0;
gdjs.EarthCode.GDdroneleftObjects1.length = 0;
gdjs.EarthCode.GDdroneleftObjects2.length = 0;
gdjs.EarthCode.GDdroneleftObjects3.length = 0;
gdjs.EarthCode.GDdronerightObjects1.length = 0;
gdjs.EarthCode.GDdronerightObjects2.length = 0;
gdjs.EarthCode.GDdronerightObjects3.length = 0;
gdjs.EarthCode.GDNewObject2Objects1.length = 0;
gdjs.EarthCode.GDNewObject2Objects2.length = 0;
gdjs.EarthCode.GDNewObject2Objects3.length = 0;
gdjs.EarthCode.GDNewObject3Objects1.length = 0;
gdjs.EarthCode.GDNewObject3Objects2.length = 0;
gdjs.EarthCode.GDNewObject3Objects3.length = 0;
gdjs.EarthCode.GDgamelifeObjects1.length = 0;
gdjs.EarthCode.GDgamelifeObjects2.length = 0;
gdjs.EarthCode.GDgamelifeObjects3.length = 0;
gdjs.EarthCode.GDfpsObjects1.length = 0;
gdjs.EarthCode.GDfpsObjects2.length = 0;
gdjs.EarthCode.GDfpsObjects3.length = 0;

gdjs.EarthCode.eventsList16(runtimeScene);
return;

}

gdjs['EarthCode'] = gdjs.EarthCode;
