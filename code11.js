gdjs.SaturnCode = {};
gdjs.SaturnCode.forEachIndex2 = 0;

gdjs.SaturnCode.forEachIndex3 = 0;

gdjs.SaturnCode.forEachObjects2 = [];

gdjs.SaturnCode.forEachObjects3 = [];

gdjs.SaturnCode.forEachTemporary2 = null;

gdjs.SaturnCode.forEachTemporary3 = null;

gdjs.SaturnCode.forEachTotalCount2 = 0;

gdjs.SaturnCode.forEachTotalCount3 = 0;

gdjs.SaturnCode.GDPlayerObjects1= [];
gdjs.SaturnCode.GDPlayerObjects2= [];
gdjs.SaturnCode.GDPlayerObjects3= [];
gdjs.SaturnCode.GDalienfloorObjects1= [];
gdjs.SaturnCode.GDalienfloorObjects2= [];
gdjs.SaturnCode.GDalienfloorObjects3= [];
gdjs.SaturnCode.GDrocketplatObjects1= [];
gdjs.SaturnCode.GDrocketplatObjects2= [];
gdjs.SaturnCode.GDrocketplatObjects3= [];
gdjs.SaturnCode.GDrockbackObjects1= [];
gdjs.SaturnCode.GDrockbackObjects2= [];
gdjs.SaturnCode.GDrockbackObjects3= [];
gdjs.SaturnCode.GDboltObjects1= [];
gdjs.SaturnCode.GDboltObjects2= [];
gdjs.SaturnCode.GDboltObjects3= [];
gdjs.SaturnCode.GDscoreObjects1= [];
gdjs.SaturnCode.GDscoreObjects2= [];
gdjs.SaturnCode.GDscoreObjects3= [];
gdjs.SaturnCode.GDliveObjects1= [];
gdjs.SaturnCode.GDliveObjects2= [];
gdjs.SaturnCode.GDliveObjects3= [];
gdjs.SaturnCode.GDlivesObjects1= [];
gdjs.SaturnCode.GDlivesObjects2= [];
gdjs.SaturnCode.GDlivesObjects3= [];
gdjs.SaturnCode.GDrobottingObjects1= [];
gdjs.SaturnCode.GDrobottingObjects2= [];
gdjs.SaturnCode.GDrobottingObjects3= [];
gdjs.SaturnCode.GDleftObjects1= [];
gdjs.SaturnCode.GDleftObjects2= [];
gdjs.SaturnCode.GDleftObjects3= [];
gdjs.SaturnCode.GDrightObjects1= [];
gdjs.SaturnCode.GDrightObjects2= [];
gdjs.SaturnCode.GDrightObjects3= [];
gdjs.SaturnCode.GDcrashedshipObjects1= [];
gdjs.SaturnCode.GDcrashedshipObjects2= [];
gdjs.SaturnCode.GDcrashedshipObjects3= [];
gdjs.SaturnCode.GDnotcompleteObjects1= [];
gdjs.SaturnCode.GDnotcompleteObjects2= [];
gdjs.SaturnCode.GDnotcompleteObjects3= [];
gdjs.SaturnCode.GDendObjects1= [];
gdjs.SaturnCode.GDendObjects2= [];
gdjs.SaturnCode.GDendObjects3= [];
gdjs.SaturnCode.GDtimerObjects1= [];
gdjs.SaturnCode.GDtimerObjects2= [];
gdjs.SaturnCode.GDtimerObjects3= [];
gdjs.SaturnCode.GDcheatsObjects1= [];
gdjs.SaturnCode.GDcheatsObjects2= [];
gdjs.SaturnCode.GDcheatsObjects3= [];
gdjs.SaturnCode.GDBlueEnemy1Objects1= [];
gdjs.SaturnCode.GDBlueEnemy1Objects2= [];
gdjs.SaturnCode.GDBlueEnemy1Objects3= [];
gdjs.SaturnCode.GDRedLaser08Objects1= [];
gdjs.SaturnCode.GDRedLaser08Objects2= [];
gdjs.SaturnCode.GDRedLaser08Objects3= [];
gdjs.SaturnCode.GDGreenLaser09Objects1= [];
gdjs.SaturnCode.GDGreenLaser09Objects2= [];
gdjs.SaturnCode.GDGreenLaser09Objects3= [];
gdjs.SaturnCode.GDrockObjects1= [];
gdjs.SaturnCode.GDrockObjects2= [];
gdjs.SaturnCode.GDrockObjects3= [];
gdjs.SaturnCode.GDrockcatchObjects1= [];
gdjs.SaturnCode.GDrockcatchObjects2= [];
gdjs.SaturnCode.GDrockcatchObjects3= [];
gdjs.SaturnCode.GDspawn1Objects1= [];
gdjs.SaturnCode.GDspawn1Objects2= [];
gdjs.SaturnCode.GDspawn1Objects3= [];
gdjs.SaturnCode.GDspawn2Objects1= [];
gdjs.SaturnCode.GDspawn2Objects2= [];
gdjs.SaturnCode.GDspawn2Objects3= [];
gdjs.SaturnCode.GDspawn3Objects1= [];
gdjs.SaturnCode.GDspawn3Objects2= [];
gdjs.SaturnCode.GDspawn3Objects3= [];
gdjs.SaturnCode.GDgamelifeObjects1= [];
gdjs.SaturnCode.GDgamelifeObjects2= [];
gdjs.SaturnCode.GDgamelifeObjects3= [];
gdjs.SaturnCode.GDfpsObjects1= [];
gdjs.SaturnCode.GDfpsObjects2= [];
gdjs.SaturnCode.GDfpsObjects3= [];
gdjs.SaturnCode.GDNewObject3Objects1= [];
gdjs.SaturnCode.GDNewObject3Objects2= [];
gdjs.SaturnCode.GDNewObject3Objects3= [];
gdjs.SaturnCode.GDspawn4Objects1= [];
gdjs.SaturnCode.GDspawn4Objects2= [];
gdjs.SaturnCode.GDspawn4Objects3= [];

gdjs.SaturnCode.conditionTrue_0 = {val:false};
gdjs.SaturnCode.condition0IsTrue_0 = {val:false};
gdjs.SaturnCode.condition1IsTrue_0 = {val:false};
gdjs.SaturnCode.condition2IsTrue_0 = {val:false};
gdjs.SaturnCode.condition3IsTrue_0 = {val:false};
gdjs.SaturnCode.conditionTrue_1 = {val:false};
gdjs.SaturnCode.condition0IsTrue_1 = {val:false};
gdjs.SaturnCode.condition1IsTrue_1 = {val:false};
gdjs.SaturnCode.condition2IsTrue_1 = {val:false};
gdjs.SaturnCode.condition3IsTrue_1 = {val:false};


gdjs.SaturnCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.SaturnCode.GDPlayerObjects1, gdjs.SaturnCode.GDPlayerObjects2);


gdjs.SaturnCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.SaturnCode.GDPlayerObjects2.length;i<l;++i) {
    if ( !(gdjs.SaturnCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.SaturnCode.condition0IsTrue_0.val = true;
        gdjs.SaturnCode.GDPlayerObjects2[k] = gdjs.SaturnCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.SaturnCode.GDPlayerObjects2.length = k;}if (gdjs.SaturnCode.condition0IsTrue_0.val) {
/* Reuse gdjs.SaturnCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.SaturnCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.SaturnCode.GDPlayerObjects2[i].setAnimationName("stand");
}
}}

}


{

gdjs.copyArray(gdjs.SaturnCode.GDPlayerObjects1, gdjs.SaturnCode.GDPlayerObjects2);


gdjs.SaturnCode.condition0IsTrue_0.val = false;
gdjs.SaturnCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.SaturnCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.SaturnCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.SaturnCode.condition0IsTrue_0.val = true;
        gdjs.SaturnCode.GDPlayerObjects2[k] = gdjs.SaturnCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.SaturnCode.GDPlayerObjects2.length = k;}if ( gdjs.SaturnCode.condition0IsTrue_0.val ) {
{
gdjs.SaturnCode.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}}
if (gdjs.SaturnCode.condition1IsTrue_0.val) {
/* Reuse gdjs.SaturnCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.SaturnCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.SaturnCode.GDPlayerObjects2[i].setAnimationName("run");
}
}{for(var i = 0, len = gdjs.SaturnCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.SaturnCode.GDPlayerObjects2[i].playAnimation();
}
}{for(var i = 0, len = gdjs.SaturnCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.SaturnCode.GDPlayerObjects2[i].flipX(false);
}
}}

}


{

/* Reuse gdjs.SaturnCode.GDPlayerObjects1 */

gdjs.SaturnCode.condition0IsTrue_0.val = false;
gdjs.SaturnCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.SaturnCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.SaturnCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.SaturnCode.condition0IsTrue_0.val = true;
        gdjs.SaturnCode.GDPlayerObjects1[k] = gdjs.SaturnCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.SaturnCode.GDPlayerObjects1.length = k;}if ( gdjs.SaturnCode.condition0IsTrue_0.val ) {
{
gdjs.SaturnCode.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}}
if (gdjs.SaturnCode.condition1IsTrue_0.val) {
/* Reuse gdjs.SaturnCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.SaturnCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.SaturnCode.GDPlayerObjects1[i].setAnimationName("run");
}
}{for(var i = 0, len = gdjs.SaturnCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.SaturnCode.GDPlayerObjects1[i].playAnimation();
}
}{for(var i = 0, len = gdjs.SaturnCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.SaturnCode.GDPlayerObjects1[i].flipX(true);
}
}}

}


};gdjs.SaturnCode.mapOfGDgdjs_46SaturnCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.SaturnCode.GDPlayerObjects1});gdjs.SaturnCode.mapOfGDgdjs_46SaturnCode_46GDboltObjects1Objects = Hashtable.newFrom({"bolt": gdjs.SaturnCode.GDboltObjects1});gdjs.SaturnCode.eventsList1 = function(runtimeScene) {

{


gdjs.SaturnCode.condition0IsTrue_0.val = false;
{
gdjs.SaturnCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(17)) == 0;
}if (gdjs.SaturnCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "66136__aji__ding30603-spedup.wav", false, 5, 1);
}}

}


};gdjs.SaturnCode.mapOfGDgdjs_46SaturnCode_46GDrobottingObjects1Objects = Hashtable.newFrom({"robotting": gdjs.SaturnCode.GDrobottingObjects1});gdjs.SaturnCode.mapOfGDgdjs_46SaturnCode_46GDleftObjects1Objects = Hashtable.newFrom({"left": gdjs.SaturnCode.GDleftObjects1});gdjs.SaturnCode.mapOfGDgdjs_46SaturnCode_46GDrobottingObjects1Objects = Hashtable.newFrom({"robotting": gdjs.SaturnCode.GDrobottingObjects1});gdjs.SaturnCode.mapOfGDgdjs_46SaturnCode_46GDrightObjects1Objects = Hashtable.newFrom({"right": gdjs.SaturnCode.GDrightObjects1});gdjs.SaturnCode.eventsList2 = function(runtimeScene) {

};gdjs.SaturnCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("bolt"), gdjs.SaturnCode.GDboltObjects1);

for(gdjs.SaturnCode.forEachIndex2 = 0;gdjs.SaturnCode.forEachIndex2 < gdjs.SaturnCode.GDboltObjects1.length;++gdjs.SaturnCode.forEachIndex2) {
gdjs.SaturnCode.GDboltObjects2.length = 0;


gdjs.SaturnCode.forEachTemporary2 = gdjs.SaturnCode.GDboltObjects1[gdjs.SaturnCode.forEachIndex2];
gdjs.SaturnCode.GDboltObjects2.push(gdjs.SaturnCode.forEachTemporary2);
gdjs.SaturnCode.condition0IsTrue_0.val = false;
{
gdjs.SaturnCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.SaturnCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(4).add(1);
}}
}

}


};gdjs.SaturnCode.mapOfGDgdjs_46SaturnCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.SaturnCode.GDPlayerObjects1});gdjs.SaturnCode.mapOfGDgdjs_46SaturnCode_46GDrobottingObjects1Objects = Hashtable.newFrom({"robotting": gdjs.SaturnCode.GDrobottingObjects1});gdjs.SaturnCode.mapOfGDgdjs_46SaturnCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.SaturnCode.GDPlayerObjects1});gdjs.SaturnCode.mapOfGDgdjs_46SaturnCode_46GDrobottingObjects1Objects = Hashtable.newFrom({"robotting": gdjs.SaturnCode.GDrobottingObjects1});gdjs.SaturnCode.mapOfGDgdjs_46SaturnCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.SaturnCode.GDPlayerObjects1});gdjs.SaturnCode.mapOfGDgdjs_46SaturnCode_46GDcrashedshipObjects1Objects = Hashtable.newFrom({"crashedship": gdjs.SaturnCode.GDcrashedshipObjects1});gdjs.SaturnCode.mapOfGDgdjs_46SaturnCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.SaturnCode.GDPlayerObjects1});gdjs.SaturnCode.mapOfGDgdjs_46SaturnCode_46GDcrashedshipObjects1Objects = Hashtable.newFrom({"crashedship": gdjs.SaturnCode.GDcrashedshipObjects1});gdjs.SaturnCode.mapOfGDgdjs_46SaturnCode_46GDcrashedshipObjects1Objects = Hashtable.newFrom({"crashedship": gdjs.SaturnCode.GDcrashedshipObjects1});gdjs.SaturnCode.mapOfGDgdjs_46SaturnCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.SaturnCode.GDPlayerObjects1});gdjs.SaturnCode.mapOfGDgdjs_46SaturnCode_46GDcrashedshipObjects1Objects = Hashtable.newFrom({"crashedship": gdjs.SaturnCode.GDcrashedshipObjects1});gdjs.SaturnCode.mapOfGDgdjs_46SaturnCode_46GDendObjects1Objects = Hashtable.newFrom({"end": gdjs.SaturnCode.GDendObjects1});gdjs.SaturnCode.mapOfGDgdjs_46SaturnCode_46GDrobottingObjects1Objects = Hashtable.newFrom({"robotting": gdjs.SaturnCode.GDrobottingObjects1});gdjs.SaturnCode.mapOfGDgdjs_46SaturnCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.SaturnCode.GDPlayerObjects1});gdjs.SaturnCode.mapOfGDgdjs_46SaturnCode_46GDrockObjects1Objects = Hashtable.newFrom({"rock": gdjs.SaturnCode.GDrockObjects1});gdjs.SaturnCode.mapOfGDgdjs_46SaturnCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.SaturnCode.GDPlayerObjects1});gdjs.SaturnCode.eventsList4 = function(runtimeScene) {

};gdjs.SaturnCode.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("bolt"), gdjs.SaturnCode.GDboltObjects1);

for(gdjs.SaturnCode.forEachIndex2 = 0;gdjs.SaturnCode.forEachIndex2 < gdjs.SaturnCode.GDboltObjects1.length;++gdjs.SaturnCode.forEachIndex2) {
gdjs.SaturnCode.GDboltObjects2.length = 0;


gdjs.SaturnCode.forEachTemporary2 = gdjs.SaturnCode.GDboltObjects1[gdjs.SaturnCode.forEachIndex2];
gdjs.SaturnCode.GDboltObjects2.push(gdjs.SaturnCode.forEachTemporary2);
if (true) {
{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}{for(var i = 0, len = gdjs.SaturnCode.GDboltObjects2.length ;i < len;++i) {
    gdjs.SaturnCode.GDboltObjects2[i].deleteFromScene(runtimeScene);
}
}}
}

}


};gdjs.SaturnCode.eventsList6 = function(runtimeScene) {

};gdjs.SaturnCode.eventsList7 = function(runtimeScene) {

};gdjs.SaturnCode.eventsList8 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("robotting"), gdjs.SaturnCode.GDrobottingObjects2);

for(gdjs.SaturnCode.forEachIndex3 = 0;gdjs.SaturnCode.forEachIndex3 < gdjs.SaturnCode.GDrobottingObjects2.length;++gdjs.SaturnCode.forEachIndex3) {
gdjs.SaturnCode.GDrobottingObjects3.length = 0;


gdjs.SaturnCode.forEachTemporary3 = gdjs.SaturnCode.GDrobottingObjects2[gdjs.SaturnCode.forEachIndex3];
gdjs.SaturnCode.GDrobottingObjects3.push(gdjs.SaturnCode.forEachTemporary3);
if (true) {
{for(var i = 0, len = gdjs.SaturnCode.GDrobottingObjects3.length ;i < len;++i) {
    gdjs.SaturnCode.GDrobottingObjects3[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(13).sub(1);
}}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("rock"), gdjs.SaturnCode.GDrockObjects1);

for(gdjs.SaturnCode.forEachIndex2 = 0;gdjs.SaturnCode.forEachIndex2 < gdjs.SaturnCode.GDrockObjects1.length;++gdjs.SaturnCode.forEachIndex2) {
gdjs.SaturnCode.GDrockObjects2.length = 0;


gdjs.SaturnCode.forEachTemporary2 = gdjs.SaturnCode.GDrockObjects1[gdjs.SaturnCode.forEachIndex2];
gdjs.SaturnCode.GDrockObjects2.push(gdjs.SaturnCode.forEachTemporary2);
if (true) {
{for(var i = 0, len = gdjs.SaturnCode.GDrockObjects2.length ;i < len;++i) {
    gdjs.SaturnCode.GDrockObjects2[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(13).sub(1);
}}
}

}


};gdjs.SaturnCode.mapOfGDgdjs_46SaturnCode_46GDrockObjects1Objects = Hashtable.newFrom({"rock": gdjs.SaturnCode.GDrockObjects1});gdjs.SaturnCode.mapOfGDgdjs_46SaturnCode_46GDrockcatchObjects1Objects = Hashtable.newFrom({"rockcatch": gdjs.SaturnCode.GDrockcatchObjects1});gdjs.SaturnCode.mapOfGDgdjs_46SaturnCode_46GDrockcatchObjects1Objects = Hashtable.newFrom({"rockcatch": gdjs.SaturnCode.GDrockcatchObjects1});gdjs.SaturnCode.mapOfGDgdjs_46SaturnCode_46GDrockObjects1Objects = Hashtable.newFrom({"rock": gdjs.SaturnCode.GDrockObjects1});gdjs.SaturnCode.mapOfGDgdjs_46SaturnCode_46GDrockcatchObjects1Objects = Hashtable.newFrom({"rockcatch": gdjs.SaturnCode.GDrockcatchObjects1});gdjs.SaturnCode.mapOfGDgdjs_46SaturnCode_46GDrockObjects1Objects = Hashtable.newFrom({"rock": gdjs.SaturnCode.GDrockObjects1});gdjs.SaturnCode.mapOfGDgdjs_46SaturnCode_46GDrockcatchObjects1Objects = Hashtable.newFrom({"rockcatch": gdjs.SaturnCode.GDrockcatchObjects1});gdjs.SaturnCode.mapOfGDgdjs_46SaturnCode_46GDrockObjects1Objects = Hashtable.newFrom({"rock": gdjs.SaturnCode.GDrockObjects1});gdjs.SaturnCode.mapOfGDgdjs_46SaturnCode_46GDrockcatchObjects1Objects = Hashtable.newFrom({"rockcatch": gdjs.SaturnCode.GDrockcatchObjects1});gdjs.SaturnCode.mapOfGDgdjs_46SaturnCode_46GDrockObjects1Objects = Hashtable.newFrom({"rock": gdjs.SaturnCode.GDrockObjects1});gdjs.SaturnCode.mapOfGDgdjs_46SaturnCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.SaturnCode.GDPlayerObjects1});gdjs.SaturnCode.mapOfGDgdjs_46SaturnCode_46GDrockObjects1Objects = Hashtable.newFrom({"rock": gdjs.SaturnCode.GDrockObjects1});gdjs.SaturnCode.eventsList9 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("cheats"), gdjs.SaturnCode.GDcheatsObjects2);

gdjs.SaturnCode.condition0IsTrue_0.val = false;
gdjs.SaturnCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.SaturnCode.GDcheatsObjects2.length;i<l;++i) {
    if ( !(gdjs.SaturnCode.GDcheatsObjects2[i].isVisible()) ) {
        gdjs.SaturnCode.condition0IsTrue_0.val = true;
        gdjs.SaturnCode.GDcheatsObjects2[k] = gdjs.SaturnCode.GDcheatsObjects2[i];
        ++k;
    }
}
gdjs.SaturnCode.GDcheatsObjects2.length = k;}if ( gdjs.SaturnCode.condition0IsTrue_0.val ) {
{
gdjs.SaturnCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(15)) == 0;
}}
if (gdjs.SaturnCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject3"), gdjs.SaturnCode.GDNewObject3Objects2);
/* Reuse gdjs.SaturnCode.GDcheatsObjects2 */
gdjs.copyArray(runtimeScene.getObjects("fps"), gdjs.SaturnCode.GDfpsObjects2);
gdjs.copyArray(runtimeScene.getObjects("gamelife"), gdjs.SaturnCode.GDgamelifeObjects2);
{for(var i = 0, len = gdjs.SaturnCode.GDcheatsObjects2.length ;i < len;++i) {
    gdjs.SaturnCode.GDcheatsObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.SaturnCode.GDfpsObjects2.length ;i < len;++i) {
    gdjs.SaturnCode.GDfpsObjects2[i].hide(false);
}
}{runtimeScene.getGame().getVariables().getFromIndex(15).setNumber(1);
}{for(var i = 0, len = gdjs.SaturnCode.GDNewObject3Objects2.length ;i < len;++i) {
    gdjs.SaturnCode.GDNewObject3Objects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.SaturnCode.GDgamelifeObjects2.length ;i < len;++i) {
    gdjs.SaturnCode.GDgamelifeObjects2[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("cheats"), gdjs.SaturnCode.GDcheatsObjects1);

gdjs.SaturnCode.condition0IsTrue_0.val = false;
gdjs.SaturnCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.SaturnCode.GDcheatsObjects1.length;i<l;++i) {
    if ( gdjs.SaturnCode.GDcheatsObjects1[i].isVisible() ) {
        gdjs.SaturnCode.condition0IsTrue_0.val = true;
        gdjs.SaturnCode.GDcheatsObjects1[k] = gdjs.SaturnCode.GDcheatsObjects1[i];
        ++k;
    }
}
gdjs.SaturnCode.GDcheatsObjects1.length = k;}if ( gdjs.SaturnCode.condition0IsTrue_0.val ) {
{
gdjs.SaturnCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(15)) == 0;
}}
if (gdjs.SaturnCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject3"), gdjs.SaturnCode.GDNewObject3Objects1);
/* Reuse gdjs.SaturnCode.GDcheatsObjects1 */
gdjs.copyArray(runtimeScene.getObjects("fps"), gdjs.SaturnCode.GDfpsObjects1);
gdjs.copyArray(runtimeScene.getObjects("gamelife"), gdjs.SaturnCode.GDgamelifeObjects1);
{for(var i = 0, len = gdjs.SaturnCode.GDcheatsObjects1.length ;i < len;++i) {
    gdjs.SaturnCode.GDcheatsObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.SaturnCode.GDfpsObjects1.length ;i < len;++i) {
    gdjs.SaturnCode.GDfpsObjects1[i].hide();
}
}{runtimeScene.getGame().getVariables().getFromIndex(15).setNumber(1);
}{for(var i = 0, len = gdjs.SaturnCode.GDNewObject3Objects1.length ;i < len;++i) {
    gdjs.SaturnCode.GDNewObject3Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.SaturnCode.GDgamelifeObjects1.length ;i < len;++i) {
    gdjs.SaturnCode.GDgamelifeObjects1[i].hide();
}
}}

}


};gdjs.SaturnCode.eventsList10 = function(runtimeScene) {

};gdjs.SaturnCode.eventsList11 = function(runtimeScene) {

};gdjs.SaturnCode.eventsList12 = function(runtimeScene) {

};gdjs.SaturnCode.eventsList13 = function(runtimeScene) {

};gdjs.SaturnCode.eventsList14 = function(runtimeScene) {

};gdjs.SaturnCode.eventsList15 = function(runtimeScene) {

{


gdjs.SaturnCode.condition0IsTrue_0.val = false;
gdjs.SaturnCode.condition1IsTrue_0.val = false;
{
gdjs.SaturnCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(16)) == 0;
}if ( gdjs.SaturnCode.condition0IsTrue_0.val ) {
{
gdjs.SaturnCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(17)) == 0;
}}
if (gdjs.SaturnCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(16).setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(17).setNumber(1);
}}

}


{


gdjs.SaturnCode.condition0IsTrue_0.val = false;
gdjs.SaturnCode.condition1IsTrue_0.val = false;
{
gdjs.SaturnCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(16)) == 0;
}if ( gdjs.SaturnCode.condition0IsTrue_0.val ) {
{
gdjs.SaturnCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(17)) == 1;
}}
if (gdjs.SaturnCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(16).setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(17).setNumber(0);
}}

}


};gdjs.SaturnCode.eventsList16 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.SaturnCode.GDPlayerObjects1);

gdjs.SaturnCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.SaturnCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.SaturnCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.SaturnCode.condition0IsTrue_0.val = true;
        gdjs.SaturnCode.GDPlayerObjects1[k] = gdjs.SaturnCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.SaturnCode.GDPlayerObjects1.length = k;}if (gdjs.SaturnCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.SaturnCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.SaturnCode.GDPlayerObjects1);

gdjs.SaturnCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.SaturnCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.SaturnCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.SaturnCode.condition0IsTrue_0.val = true;
        gdjs.SaturnCode.GDPlayerObjects1[k] = gdjs.SaturnCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.SaturnCode.GDPlayerObjects1.length = k;}if (gdjs.SaturnCode.condition0IsTrue_0.val) {
/* Reuse gdjs.SaturnCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.SaturnCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.SaturnCode.GDPlayerObjects1[i].setAnimationName("jump");
}
}{runtimeScene.getGame().getVariables().getFromIndex(3).setString("none");
}{for(var i = 0, len = gdjs.SaturnCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.SaturnCode.GDPlayerObjects1[i].clearForces();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.SaturnCode.GDPlayerObjects1);

gdjs.SaturnCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.SaturnCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.SaturnCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.SaturnCode.condition0IsTrue_0.val = true;
        gdjs.SaturnCode.GDPlayerObjects1[k] = gdjs.SaturnCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.SaturnCode.GDPlayerObjects1.length = k;}if (gdjs.SaturnCode.condition0IsTrue_0.val) {
/* Reuse gdjs.SaturnCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.SaturnCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.SaturnCode.GDPlayerObjects1[i].setAnimationName("jump");
}
}}

}


{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.SaturnCode.GDPlayerObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.SaturnCode.GDPlayerObjects1.length !== 0 ? gdjs.SaturnCode.GDPlayerObjects1[0] : null), false, "", 0);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("rocketplat"), gdjs.SaturnCode.GDrocketplatObjects1);
{for(var i = 0, len = gdjs.SaturnCode.GDrocketplatObjects1.length ;i < len;++i) {
    gdjs.SaturnCode.GDrocketplatObjects1[i].setZOrder(1);
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("crashedship"), gdjs.SaturnCode.GDcrashedshipObjects1);
gdjs.copyArray(runtimeScene.getObjects("rockback"), gdjs.SaturnCode.GDrockbackObjects1);
{for(var i = 0, len = gdjs.SaturnCode.GDrockbackObjects1.length ;i < len;++i) {
    gdjs.SaturnCode.GDrockbackObjects1[i].setZOrder(-(2));
}
}{for(var i = 0, len = gdjs.SaturnCode.GDcrashedshipObjects1.length ;i < len;++i) {
    gdjs.SaturnCode.GDcrashedshipObjects1[i].setZOrder(1);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.SaturnCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("bolt"), gdjs.SaturnCode.GDboltObjects1);

gdjs.SaturnCode.condition0IsTrue_0.val = false;
{
gdjs.SaturnCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.SaturnCode.mapOfGDgdjs_46SaturnCode_46GDPlayerObjects1Objects, gdjs.SaturnCode.mapOfGDgdjs_46SaturnCode_46GDboltObjects1Objects, false, runtimeScene, false);
}if (gdjs.SaturnCode.condition0IsTrue_0.val) {
/* Reuse gdjs.SaturnCode.GDboltObjects1 */
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.SaturnCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.SaturnCode.GDboltObjects1.length ;i < len;++i) {
    gdjs.SaturnCode.GDboltObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playMusic(runtimeScene, "66136__aji__ding30603-spedup.wav", false, 5, 1);
}{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}{for(var i = 0, len = gdjs.SaturnCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.SaturnCode.GDscoreObjects1[i].setString("Score:" + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0))));
}
}
{ //Subevents
gdjs.SaturnCode.eventsList1(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.SaturnCode.condition0IsTrue_0.val = false;
{
gdjs.SaturnCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "f");
}if (gdjs.SaturnCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}}

}


{


gdjs.SaturnCode.condition0IsTrue_0.val = false;
{
gdjs.SaturnCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Escape");
}if (gdjs.SaturnCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, false, true);
}}

}


{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("NewObject3"), gdjs.SaturnCode.GDNewObject3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.SaturnCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("cheats"), gdjs.SaturnCode.GDcheatsObjects1);
gdjs.copyArray(runtimeScene.getObjects("fps"), gdjs.SaturnCode.GDfpsObjects1);
gdjs.copyArray(runtimeScene.getObjects("gamelife"), gdjs.SaturnCode.GDgamelifeObjects1);
gdjs.copyArray(runtimeScene.getObjects("live"), gdjs.SaturnCode.GDliveObjects1);
gdjs.copyArray(runtimeScene.getObjects("lives"), gdjs.SaturnCode.GDlivesObjects1);
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.SaturnCode.GDscoreObjects1);
gdjs.copyArray(runtimeScene.getObjects("timer"), gdjs.SaturnCode.GDtimerObjects1);
{for(var i = 0, len = gdjs.SaturnCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.SaturnCode.GDscoreObjects1[i].setString("Amount of bolts " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0))) + "/ " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4))));
}
}{for(var i = 0, len = gdjs.SaturnCode.GDlivesObjects1.length ;i < len;++i) {
    gdjs.SaturnCode.GDlivesObjects1[i].setString("X" + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1))));
}
}{for(var i = 0, len = gdjs.SaturnCode.GDtimerObjects1.length ;i < len;++i) {
    gdjs.SaturnCode.GDtimerObjects1[i].setString("Time: " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9))));
}
}{for(var i = 0, len = gdjs.SaturnCode.GDfpsObjects1.length ;i < len;++i) {
    gdjs.SaturnCode.GDfpsObjects1[i].setString(gdjs.evtTools.common.toString(Math.round(1 / gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene))) + "fps");
}
}{for(var i = 0, len = gdjs.SaturnCode.GDNewObject3Objects1.length ;i < len;++i) {
    gdjs.SaturnCode.GDNewObject3Objects1[i].setString("no of objects : " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(13))));
}
}{for(var i = 0, len = gdjs.SaturnCode.GDgamelifeObjects1.length ;i < len;++i) {
    gdjs.SaturnCode.GDgamelifeObjects1[i].setString("Total Game time = " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(14))));
}
}{for(var i = 0, len = gdjs.SaturnCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.SaturnCode.GDscoreObjects1[i].setX((( gdjs.SaturnCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.SaturnCode.GDPlayerObjects1[0].getPointX("")) - 200);
}
}{for(var i = 0, len = gdjs.SaturnCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.SaturnCode.GDscoreObjects1[i].setY((( gdjs.SaturnCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.SaturnCode.GDPlayerObjects1[0].getPointY("")) - 200);
}
}{for(var i = 0, len = gdjs.SaturnCode.GDlivesObjects1.length ;i < len;++i) {
    gdjs.SaturnCode.GDlivesObjects1[i].setX((( gdjs.SaturnCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.SaturnCode.GDPlayerObjects1[0].getPointX("")) - 130);
}
}{for(var i = 0, len = gdjs.SaturnCode.GDlivesObjects1.length ;i < len;++i) {
    gdjs.SaturnCode.GDlivesObjects1[i].setY((( gdjs.SaturnCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.SaturnCode.GDPlayerObjects1[0].getPointY("")) - 150);
}
}{for(var i = 0, len = gdjs.SaturnCode.GDliveObjects1.length ;i < len;++i) {
    gdjs.SaturnCode.GDliveObjects1[i].setX((( gdjs.SaturnCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.SaturnCode.GDPlayerObjects1[0].getPointX("")) - 200);
}
}{for(var i = 0, len = gdjs.SaturnCode.GDliveObjects1.length ;i < len;++i) {
    gdjs.SaturnCode.GDliveObjects1[i].setY((( gdjs.SaturnCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.SaturnCode.GDPlayerObjects1[0].getPointY("")) - 170);
}
}{for(var i = 0, len = gdjs.SaturnCode.GDtimerObjects1.length ;i < len;++i) {
    gdjs.SaturnCode.GDtimerObjects1[i].setX((( gdjs.SaturnCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.SaturnCode.GDPlayerObjects1[0].getPointX("")) + 200);
}
}{for(var i = 0, len = gdjs.SaturnCode.GDtimerObjects1.length ;i < len;++i) {
    gdjs.SaturnCode.GDtimerObjects1[i].setY((( gdjs.SaturnCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.SaturnCode.GDPlayerObjects1[0].getPointY("")) - 200);
}
}{for(var i = 0, len = gdjs.SaturnCode.GDcheatsObjects1.length ;i < len;++i) {
    gdjs.SaturnCode.GDcheatsObjects1[i].setX((( gdjs.SaturnCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.SaturnCode.GDPlayerObjects1[0].getPointX("")));
}
}{for(var i = 0, len = gdjs.SaturnCode.GDcheatsObjects1.length ;i < len;++i) {
    gdjs.SaturnCode.GDcheatsObjects1[i].setY((( gdjs.SaturnCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.SaturnCode.GDPlayerObjects1[0].getPointY("")) - 200);
}
}{for(var i = 0, len = gdjs.SaturnCode.GDfpsObjects1.length ;i < len;++i) {
    gdjs.SaturnCode.GDfpsObjects1[i].setX((( gdjs.SaturnCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.SaturnCode.GDPlayerObjects1[0].getPointX("")) + 290);
}
}{for(var i = 0, len = gdjs.SaturnCode.GDfpsObjects1.length ;i < len;++i) {
    gdjs.SaturnCode.GDfpsObjects1[i].setY((( gdjs.SaturnCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.SaturnCode.GDPlayerObjects1[0].getPointY("")) - 200);
}
}{for(var i = 0, len = gdjs.SaturnCode.GDNewObject3Objects1.length ;i < len;++i) {
    gdjs.SaturnCode.GDNewObject3Objects1[i].setX((( gdjs.SaturnCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.SaturnCode.GDPlayerObjects1[0].getPointX("")) + 220);
}
}{for(var i = 0, len = gdjs.SaturnCode.GDNewObject3Objects1.length ;i < len;++i) {
    gdjs.SaturnCode.GDNewObject3Objects1[i].setY((( gdjs.SaturnCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.SaturnCode.GDPlayerObjects1[0].getPointY("")) - 160);
}
}{for(var i = 0, len = gdjs.SaturnCode.GDgamelifeObjects1.length ;i < len;++i) {
    gdjs.SaturnCode.GDgamelifeObjects1[i].setX((( gdjs.SaturnCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.SaturnCode.GDPlayerObjects1[0].getPointX("")) + 220);
}
}{for(var i = 0, len = gdjs.SaturnCode.GDgamelifeObjects1.length ;i < len;++i) {
    gdjs.SaturnCode.GDgamelifeObjects1[i].setY((( gdjs.SaturnCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.SaturnCode.GDPlayerObjects1[0].getPointY("")) - 140);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.SaturnCode.GDPlayerObjects1);

gdjs.SaturnCode.condition0IsTrue_0.val = false;
gdjs.SaturnCode.condition1IsTrue_0.val = false;
gdjs.SaturnCode.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.SaturnCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.SaturnCode.GDPlayerObjects1[i].getY() >= 600 ) {
        gdjs.SaturnCode.condition0IsTrue_0.val = true;
        gdjs.SaturnCode.GDPlayerObjects1[k] = gdjs.SaturnCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.SaturnCode.GDPlayerObjects1.length = k;}if ( gdjs.SaturnCode.condition0IsTrue_0.val ) {
{
gdjs.SaturnCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) != 0;
}if ( gdjs.SaturnCode.condition1IsTrue_0.val ) {
{
gdjs.SaturnCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) != 1;
}}
}
if (gdjs.SaturnCode.condition2IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).sub(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}{runtimeScene.getGame().getVariables().getFromIndex(1).sub(1);
}{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Saturn");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.SaturnCode.GDPlayerObjects1);

gdjs.SaturnCode.condition0IsTrue_0.val = false;
gdjs.SaturnCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.SaturnCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.SaturnCode.GDPlayerObjects1[i].getY() >= 600 ) {
        gdjs.SaturnCode.condition0IsTrue_0.val = true;
        gdjs.SaturnCode.GDPlayerObjects1[k] = gdjs.SaturnCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.SaturnCode.GDPlayerObjects1.length = k;}if ( gdjs.SaturnCode.condition0IsTrue_0.val ) {
{
gdjs.SaturnCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) == 1;
}}
if (gdjs.SaturnCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Saturn");
}}

}


{


gdjs.SaturnCode.condition0IsTrue_0.val = false;
{
gdjs.SaturnCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 0;
}if (gdjs.SaturnCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Dead", true);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("left"), gdjs.SaturnCode.GDleftObjects1);
gdjs.copyArray(runtimeScene.getObjects("robotting"), gdjs.SaturnCode.GDrobottingObjects1);

gdjs.SaturnCode.condition0IsTrue_0.val = false;
{
gdjs.SaturnCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.SaturnCode.mapOfGDgdjs_46SaturnCode_46GDrobottingObjects1Objects, gdjs.SaturnCode.mapOfGDgdjs_46SaturnCode_46GDleftObjects1Objects, false, runtimeScene, false);
}if (gdjs.SaturnCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(2).setString("Left");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("right"), gdjs.SaturnCode.GDrightObjects1);
gdjs.copyArray(runtimeScene.getObjects("robotting"), gdjs.SaturnCode.GDrobottingObjects1);

gdjs.SaturnCode.condition0IsTrue_0.val = false;
{
gdjs.SaturnCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.SaturnCode.mapOfGDgdjs_46SaturnCode_46GDrobottingObjects1Objects, gdjs.SaturnCode.mapOfGDgdjs_46SaturnCode_46GDrightObjects1Objects, false, runtimeScene, false);
}if (gdjs.SaturnCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(2).setString("Right");
}}

}


{


gdjs.SaturnCode.condition0IsTrue_0.val = false;
{
gdjs.SaturnCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)) == "Left";
}if (gdjs.SaturnCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("robotting"), gdjs.SaturnCode.GDrobottingObjects1);
{for(var i = 0, len = gdjs.SaturnCode.GDrobottingObjects1.length ;i < len;++i) {
    gdjs.SaturnCode.GDrobottingObjects1[i].addPolarForce(180, 100, 0);
}
}{for(var i = 0, len = gdjs.SaturnCode.GDrobottingObjects1.length ;i < len;++i) {
    gdjs.SaturnCode.GDrobottingObjects1[i].flipX(false);
}
}}

}


{


gdjs.SaturnCode.condition0IsTrue_0.val = false;
{
gdjs.SaturnCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)) == "Right";
}if (gdjs.SaturnCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("robotting"), gdjs.SaturnCode.GDrobottingObjects1);
{for(var i = 0, len = gdjs.SaturnCode.GDrobottingObjects1.length ;i < len;++i) {
    gdjs.SaturnCode.GDrobottingObjects1[i].addPolarForce(0, 100, 0);
}
}{for(var i = 0, len = gdjs.SaturnCode.GDrobottingObjects1.length ;i < len;++i) {
    gdjs.SaturnCode.GDrobottingObjects1[i].flipX(true);
}
}}

}


{



}


{


gdjs.SaturnCode.condition0IsTrue_0.val = false;
{
gdjs.SaturnCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.SaturnCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject3"), gdjs.SaturnCode.GDNewObject3Objects1);
gdjs.copyArray(runtimeScene.getObjects("cheats"), gdjs.SaturnCode.GDcheatsObjects1);
gdjs.copyArray(runtimeScene.getObjects("crashedship"), gdjs.SaturnCode.GDcrashedshipObjects1);
gdjs.copyArray(runtimeScene.getObjects("fps"), gdjs.SaturnCode.GDfpsObjects1);
gdjs.copyArray(runtimeScene.getObjects("gamelife"), gdjs.SaturnCode.GDgamelifeObjects1);
gdjs.copyArray(runtimeScene.getObjects("left"), gdjs.SaturnCode.GDleftObjects1);
gdjs.copyArray(runtimeScene.getObjects("notcomplete"), gdjs.SaturnCode.GDnotcompleteObjects1);
gdjs.copyArray(runtimeScene.getObjects("right"), gdjs.SaturnCode.GDrightObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(2).setString("Left");
}{for(var i = 0, len = gdjs.SaturnCode.GDrightObjects1.length ;i < len;++i) {
    gdjs.SaturnCode.GDrightObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.SaturnCode.GDleftObjects1.length ;i < len;++i) {
    gdjs.SaturnCode.GDleftObjects1[i].hide();
}
}{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(0);
}{for(var i = 0, len = gdjs.SaturnCode.GDnotcompleteObjects1.length ;i < len;++i) {
    gdjs.SaturnCode.GDnotcompleteObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.SaturnCode.GDcrashedshipObjects1.length ;i < len;++i) {
    gdjs.SaturnCode.GDcrashedshipObjects1[i].setAnimationName("stand");
}
}{runtimeScene.getGame().getVariables().getFromIndex(5).setNumber(0);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "fire");
}{for(var i = 0, len = gdjs.SaturnCode.GDcheatsObjects1.length ;i < len;++i) {
    gdjs.SaturnCode.GDcheatsObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.SaturnCode.GDfpsObjects1.length ;i < len;++i) {
    gdjs.SaturnCode.GDfpsObjects1[i].hide();
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(13).setNumber(0);
}{for(var i = 0, len = gdjs.SaturnCode.GDgamelifeObjects1.length ;i < len;++i) {
    gdjs.SaturnCode.GDgamelifeObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.SaturnCode.GDNewObject3Objects1.length ;i < len;++i) {
    gdjs.SaturnCode.GDNewObject3Objects1[i].hide();
}
}
{ //Subevents
gdjs.SaturnCode.eventsList3(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.SaturnCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("robotting"), gdjs.SaturnCode.GDrobottingObjects1);

gdjs.SaturnCode.condition0IsTrue_0.val = false;
gdjs.SaturnCode.condition1IsTrue_0.val = false;
{
gdjs.SaturnCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.SaturnCode.mapOfGDgdjs_46SaturnCode_46GDPlayerObjects1Objects, gdjs.SaturnCode.mapOfGDgdjs_46SaturnCode_46GDrobottingObjects1Objects, false, runtimeScene, false);
}if ( gdjs.SaturnCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.SaturnCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.SaturnCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.SaturnCode.condition1IsTrue_0.val = true;
        gdjs.SaturnCode.GDPlayerObjects1[k] = gdjs.SaturnCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.SaturnCode.GDPlayerObjects1.length = k;}}
if (gdjs.SaturnCode.condition1IsTrue_0.val) {
/* Reuse gdjs.SaturnCode.GDPlayerObjects1 */
/* Reuse gdjs.SaturnCode.GDrobottingObjects1 */
{for(var i = 0, len = gdjs.SaturnCode.GDrobottingObjects1.length ;i < len;++i) {
    gdjs.SaturnCode.GDrobottingObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.SaturnCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.SaturnCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").setCanJump();
}
}{for(var i = 0, len = gdjs.SaturnCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.SaturnCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}{runtimeScene.getGame().getVariables().getFromIndex(13).sub(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.SaturnCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("robotting"), gdjs.SaturnCode.GDrobottingObjects1);

gdjs.SaturnCode.condition0IsTrue_0.val = false;
gdjs.SaturnCode.condition1IsTrue_0.val = false;
{
gdjs.SaturnCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.SaturnCode.mapOfGDgdjs_46SaturnCode_46GDPlayerObjects1Objects, gdjs.SaturnCode.mapOfGDgdjs_46SaturnCode_46GDrobottingObjects1Objects, false, runtimeScene, false);
}if ( gdjs.SaturnCode.condition0IsTrue_0.val ) {
{
gdjs.SaturnCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) != 1;
}}
if (gdjs.SaturnCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).sub(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}{runtimeScene.getGame().getVariables().getFromIndex(1).sub(1);
}{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Saturn");
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.SaturnCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("crashedship"), gdjs.SaturnCode.GDcrashedshipObjects1);

gdjs.SaturnCode.condition0IsTrue_0.val = false;
{
gdjs.SaturnCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.SaturnCode.mapOfGDgdjs_46SaturnCode_46GDPlayerObjects1Objects, gdjs.SaturnCode.mapOfGDgdjs_46SaturnCode_46GDcrashedshipObjects1Objects, true, runtimeScene, false);
}if (gdjs.SaturnCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("notcomplete"), gdjs.SaturnCode.GDnotcompleteObjects1);
{for(var i = 0, len = gdjs.SaturnCode.GDnotcompleteObjects1.length ;i < len;++i) {
    gdjs.SaturnCode.GDnotcompleteObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.SaturnCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("crashedship"), gdjs.SaturnCode.GDcrashedshipObjects1);

gdjs.SaturnCode.condition0IsTrue_0.val = false;
gdjs.SaturnCode.condition1IsTrue_0.val = false;
{
gdjs.SaturnCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.SaturnCode.mapOfGDgdjs_46SaturnCode_46GDPlayerObjects1Objects, gdjs.SaturnCode.mapOfGDgdjs_46SaturnCode_46GDcrashedshipObjects1Objects, false, runtimeScene, false);
}if ( gdjs.SaturnCode.condition0IsTrue_0.val ) {
{
{gdjs.SaturnCode.conditionTrue_1 = gdjs.SaturnCode.condition1IsTrue_0;
gdjs.SaturnCode.conditionTrue_1.val = (gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) != gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}}
if (gdjs.SaturnCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("notcomplete"), gdjs.SaturnCode.GDnotcompleteObjects1);
{for(var i = 0, len = gdjs.SaturnCode.GDnotcompleteObjects1.length ;i < len;++i) {
    gdjs.SaturnCode.GDnotcompleteObjects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.SaturnCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("crashedship"), gdjs.SaturnCode.GDcrashedshipObjects1);

gdjs.SaturnCode.condition0IsTrue_0.val = false;
gdjs.SaturnCode.condition1IsTrue_0.val = false;
{
gdjs.SaturnCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.SaturnCode.mapOfGDgdjs_46SaturnCode_46GDcrashedshipObjects1Objects, gdjs.SaturnCode.mapOfGDgdjs_46SaturnCode_46GDPlayerObjects1Objects, false, runtimeScene, false);
}if ( gdjs.SaturnCode.condition0IsTrue_0.val ) {
{
{gdjs.SaturnCode.conditionTrue_1 = gdjs.SaturnCode.condition1IsTrue_0;
gdjs.SaturnCode.conditionTrue_1.val = (gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}}
if (gdjs.SaturnCode.condition1IsTrue_0.val) {
/* Reuse gdjs.SaturnCode.GDPlayerObjects1 */
/* Reuse gdjs.SaturnCode.GDcrashedshipObjects1 */
{for(var i = 0, len = gdjs.SaturnCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.SaturnCode.GDPlayerObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.SaturnCode.GDcrashedshipObjects1.length ;i < len;++i) {
    gdjs.SaturnCode.GDcrashedshipObjects1[i].setAnimationName("fixit");
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "fixingtime");
}{runtimeScene.getGame().getVariables().getFromIndex(5).setNumber(1);
}}

}


{


gdjs.SaturnCode.condition0IsTrue_0.val = false;
gdjs.SaturnCode.condition1IsTrue_0.val = false;
{
gdjs.SaturnCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 3, "fixingtime");
}if ( gdjs.SaturnCode.condition0IsTrue_0.val ) {
{
{gdjs.SaturnCode.conditionTrue_1 = gdjs.SaturnCode.condition1IsTrue_0;
gdjs.SaturnCode.conditionTrue_1.val = (gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5)) == 1);
}
}}
if (gdjs.SaturnCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("crashedship"), gdjs.SaturnCode.GDcrashedshipObjects1);
{for(var i = 0, len = gdjs.SaturnCode.GDcrashedshipObjects1.length ;i < len;++i) {
    gdjs.SaturnCode.GDcrashedshipObjects1[i].setAnimationName("fly");
}
}{for(var i = 0, len = gdjs.SaturnCode.GDcrashedshipObjects1.length ;i < len;++i) {
    gdjs.SaturnCode.GDcrashedshipObjects1[i].addForce(0, -(1000), 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("crashedship"), gdjs.SaturnCode.GDcrashedshipObjects1);
gdjs.copyArray(runtimeScene.getObjects("end"), gdjs.SaturnCode.GDendObjects1);

gdjs.SaturnCode.condition0IsTrue_0.val = false;
{
gdjs.SaturnCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.SaturnCode.mapOfGDgdjs_46SaturnCode_46GDcrashedshipObjects1Objects, gdjs.SaturnCode.mapOfGDgdjs_46SaturnCode_46GDendObjects1Objects, false, runtimeScene, false);
}if (gdjs.SaturnCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(3);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "intro:J", false);
}}

}


{



}


{


gdjs.SaturnCode.condition0IsTrue_0.val = false;
{
gdjs.SaturnCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "i");
}if (gdjs.SaturnCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(6).setNumber(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.SaturnCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("robotting"), gdjs.SaturnCode.GDrobottingObjects1);

gdjs.SaturnCode.condition0IsTrue_0.val = false;
gdjs.SaturnCode.condition1IsTrue_0.val = false;
{
gdjs.SaturnCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) == 1;
}if ( gdjs.SaturnCode.condition0IsTrue_0.val ) {
{
gdjs.SaturnCode.condition1IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.SaturnCode.mapOfGDgdjs_46SaturnCode_46GDrobottingObjects1Objects, gdjs.SaturnCode.mapOfGDgdjs_46SaturnCode_46GDPlayerObjects1Objects, false, runtimeScene, false);
}}
if (gdjs.SaturnCode.condition1IsTrue_0.val) {
/* Reuse gdjs.SaturnCode.GDrobottingObjects1 */
{for(var i = 0, len = gdjs.SaturnCode.GDrobottingObjects1.length ;i < len;++i) {
    gdjs.SaturnCode.GDrobottingObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(13).sub(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.SaturnCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("rock"), gdjs.SaturnCode.GDrockObjects1);

gdjs.SaturnCode.condition0IsTrue_0.val = false;
gdjs.SaturnCode.condition1IsTrue_0.val = false;
{
gdjs.SaturnCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) == 1;
}if ( gdjs.SaturnCode.condition0IsTrue_0.val ) {
{
gdjs.SaturnCode.condition1IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.SaturnCode.mapOfGDgdjs_46SaturnCode_46GDrockObjects1Objects, gdjs.SaturnCode.mapOfGDgdjs_46SaturnCode_46GDPlayerObjects1Objects, false, runtimeScene, false);
}}
if (gdjs.SaturnCode.condition1IsTrue_0.val) {
/* Reuse gdjs.SaturnCode.GDrockObjects1 */
{for(var i = 0, len = gdjs.SaturnCode.GDrockObjects1.length ;i < len;++i) {
    gdjs.SaturnCode.GDrockObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(13).sub(1);
}}

}


{


gdjs.SaturnCode.condition0IsTrue_0.val = false;
{
gdjs.SaturnCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "c");
}if (gdjs.SaturnCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.SaturnCode.eventsList5(runtimeScene);} //End of subevents
}

}


{


gdjs.SaturnCode.condition0IsTrue_0.val = false;
{
gdjs.SaturnCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "k");
}if (gdjs.SaturnCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.SaturnCode.eventsList8(runtimeScene);} //End of subevents
}

}


{


gdjs.SaturnCode.condition0IsTrue_0.val = false;
{
gdjs.SaturnCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "t");
}if (gdjs.SaturnCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(12).setNumber(1);
}}

}


{



}


{


gdjs.SaturnCode.condition0IsTrue_0.val = false;
{
gdjs.SaturnCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.SaturnCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "leveltimer");
}{runtimeScene.getGame().getVariables().getFromIndex(9).setNumber(60);
}}

}


{


gdjs.SaturnCode.condition0IsTrue_0.val = false;
gdjs.SaturnCode.condition1IsTrue_0.val = false;
{
gdjs.SaturnCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "leveltimer");
}if ( gdjs.SaturnCode.condition0IsTrue_0.val ) {
{
gdjs.SaturnCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(12)) != 1;
}}
if (gdjs.SaturnCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(9).sub(1);
}{runtimeScene.getGame().getVariables().getFromIndex(14).add(1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "leveltimer");
}}

}


{


gdjs.SaturnCode.condition0IsTrue_0.val = false;
{
gdjs.SaturnCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9)) == 0;
}if (gdjs.SaturnCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Saturn", false);
}{runtimeScene.getVariables().getFromIndex(1).sub(1);
}}

}


{



}


{


gdjs.SaturnCode.condition0IsTrue_0.val = false;
{
gdjs.SaturnCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.SaturnCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("spawn1"), gdjs.SaturnCode.GDspawn1Objects1);
gdjs.copyArray(runtimeScene.getObjects("spawn2"), gdjs.SaturnCode.GDspawn2Objects1);
gdjs.copyArray(runtimeScene.getObjects("spawn3"), gdjs.SaturnCode.GDspawn3Objects1);
gdjs.copyArray(runtimeScene.getObjects("spawn4"), gdjs.SaturnCode.GDspawn4Objects1);
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}{for(var i = 0, len = gdjs.SaturnCode.GDspawn1Objects1.length ;i < len;++i) {
    gdjs.SaturnCode.GDspawn1Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.SaturnCode.GDspawn3Objects1.length ;i < len;++i) {
    gdjs.SaturnCode.GDspawn3Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.SaturnCode.GDspawn2Objects1.length ;i < len;++i) {
    gdjs.SaturnCode.GDspawn2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.SaturnCode.GDspawn4Objects1.length ;i < len;++i) {
    gdjs.SaturnCode.GDspawn4Objects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("rock"), gdjs.SaturnCode.GDrockObjects1);

gdjs.SaturnCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.SaturnCode.GDrockObjects1.length;i<l;++i) {
    if ( gdjs.SaturnCode.GDrockObjects1[i].isVisible() ) {
        gdjs.SaturnCode.condition0IsTrue_0.val = true;
        gdjs.SaturnCode.GDrockObjects1[k] = gdjs.SaturnCode.GDrockObjects1[i];
        ++k;
    }
}
gdjs.SaturnCode.GDrockObjects1.length = k;}if (gdjs.SaturnCode.condition0IsTrue_0.val) {
/* Reuse gdjs.SaturnCode.GDrockObjects1 */
{for(var i = 0, len = gdjs.SaturnCode.GDrockObjects1.length ;i < len;++i) {
    gdjs.SaturnCode.GDrockObjects1[i].addPolarForce(180, 600, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("rock"), gdjs.SaturnCode.GDrockObjects1);
gdjs.copyArray(runtimeScene.getObjects("rockcatch"), gdjs.SaturnCode.GDrockcatchObjects1);

gdjs.SaturnCode.condition0IsTrue_0.val = false;
{
gdjs.SaturnCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.SaturnCode.mapOfGDgdjs_46SaturnCode_46GDrockObjects1Objects, gdjs.SaturnCode.mapOfGDgdjs_46SaturnCode_46GDrockcatchObjects1Objects, false, runtimeScene, false);
}if (gdjs.SaturnCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(2).setNumber(gdjs.randomInRange(1, 4));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("rock"), gdjs.SaturnCode.GDrockObjects1);
gdjs.copyArray(runtimeScene.getObjects("rockcatch"), gdjs.SaturnCode.GDrockcatchObjects1);

gdjs.SaturnCode.condition0IsTrue_0.val = false;
gdjs.SaturnCode.condition1IsTrue_0.val = false;
{
gdjs.SaturnCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.SaturnCode.mapOfGDgdjs_46SaturnCode_46GDrockcatchObjects1Objects, gdjs.SaturnCode.mapOfGDgdjs_46SaturnCode_46GDrockObjects1Objects, false, runtimeScene, false);
}if ( gdjs.SaturnCode.condition0IsTrue_0.val ) {
{
gdjs.SaturnCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 1;
}}
if (gdjs.SaturnCode.condition1IsTrue_0.val) {
/* Reuse gdjs.SaturnCode.GDrockObjects1 */
gdjs.copyArray(runtimeScene.getObjects("spawn1"), gdjs.SaturnCode.GDspawn1Objects1);
{for(var i = 0, len = gdjs.SaturnCode.GDrockObjects1.length ;i < len;++i) {
    gdjs.SaturnCode.GDrockObjects1[i].setPosition((( gdjs.SaturnCode.GDspawn1Objects1.length === 0 ) ? 0 :gdjs.SaturnCode.GDspawn1Objects1[0].getPointX("")),(( gdjs.SaturnCode.GDspawn1Objects1.length === 0 ) ? 0 :gdjs.SaturnCode.GDspawn1Objects1[0].getPointY("")));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("rock"), gdjs.SaturnCode.GDrockObjects1);
gdjs.copyArray(runtimeScene.getObjects("rockcatch"), gdjs.SaturnCode.GDrockcatchObjects1);

gdjs.SaturnCode.condition0IsTrue_0.val = false;
gdjs.SaturnCode.condition1IsTrue_0.val = false;
{
gdjs.SaturnCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.SaturnCode.mapOfGDgdjs_46SaturnCode_46GDrockcatchObjects1Objects, gdjs.SaturnCode.mapOfGDgdjs_46SaturnCode_46GDrockObjects1Objects, false, runtimeScene, false);
}if ( gdjs.SaturnCode.condition0IsTrue_0.val ) {
{
gdjs.SaturnCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 2;
}}
if (gdjs.SaturnCode.condition1IsTrue_0.val) {
/* Reuse gdjs.SaturnCode.GDrockObjects1 */
gdjs.copyArray(runtimeScene.getObjects("spawn2"), gdjs.SaturnCode.GDspawn2Objects1);
{for(var i = 0, len = gdjs.SaturnCode.GDrockObjects1.length ;i < len;++i) {
    gdjs.SaturnCode.GDrockObjects1[i].setPosition((( gdjs.SaturnCode.GDspawn2Objects1.length === 0 ) ? 0 :gdjs.SaturnCode.GDspawn2Objects1[0].getPointX("")),(( gdjs.SaturnCode.GDspawn2Objects1.length === 0 ) ? 0 :gdjs.SaturnCode.GDspawn2Objects1[0].getPointY("")));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("rock"), gdjs.SaturnCode.GDrockObjects1);
gdjs.copyArray(runtimeScene.getObjects("rockcatch"), gdjs.SaturnCode.GDrockcatchObjects1);

gdjs.SaturnCode.condition0IsTrue_0.val = false;
gdjs.SaturnCode.condition1IsTrue_0.val = false;
{
gdjs.SaturnCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.SaturnCode.mapOfGDgdjs_46SaturnCode_46GDrockcatchObjects1Objects, gdjs.SaturnCode.mapOfGDgdjs_46SaturnCode_46GDrockObjects1Objects, false, runtimeScene, false);
}if ( gdjs.SaturnCode.condition0IsTrue_0.val ) {
{
gdjs.SaturnCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 3;
}}
if (gdjs.SaturnCode.condition1IsTrue_0.val) {
/* Reuse gdjs.SaturnCode.GDrockObjects1 */
gdjs.copyArray(runtimeScene.getObjects("spawn3"), gdjs.SaturnCode.GDspawn3Objects1);
{for(var i = 0, len = gdjs.SaturnCode.GDrockObjects1.length ;i < len;++i) {
    gdjs.SaturnCode.GDrockObjects1[i].setPosition((( gdjs.SaturnCode.GDspawn3Objects1.length === 0 ) ? 0 :gdjs.SaturnCode.GDspawn3Objects1[0].getPointX("")),(( gdjs.SaturnCode.GDspawn3Objects1.length === 0 ) ? 0 :gdjs.SaturnCode.GDspawn3Objects1[0].getPointY("")));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("rock"), gdjs.SaturnCode.GDrockObjects1);
gdjs.copyArray(runtimeScene.getObjects("rockcatch"), gdjs.SaturnCode.GDrockcatchObjects1);

gdjs.SaturnCode.condition0IsTrue_0.val = false;
gdjs.SaturnCode.condition1IsTrue_0.val = false;
{
gdjs.SaturnCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.SaturnCode.mapOfGDgdjs_46SaturnCode_46GDrockcatchObjects1Objects, gdjs.SaturnCode.mapOfGDgdjs_46SaturnCode_46GDrockObjects1Objects, false, runtimeScene, false);
}if ( gdjs.SaturnCode.condition0IsTrue_0.val ) {
{
gdjs.SaturnCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 4;
}}
if (gdjs.SaturnCode.condition1IsTrue_0.val) {
/* Reuse gdjs.SaturnCode.GDrockObjects1 */
gdjs.copyArray(runtimeScene.getObjects("spawn4"), gdjs.SaturnCode.GDspawn4Objects1);
{for(var i = 0, len = gdjs.SaturnCode.GDrockObjects1.length ;i < len;++i) {
    gdjs.SaturnCode.GDrockObjects1[i].setPosition((( gdjs.SaturnCode.GDspawn4Objects1.length === 0 ) ? 0 :gdjs.SaturnCode.GDspawn4Objects1[0].getPointX("")),(( gdjs.SaturnCode.GDspawn4Objects1.length === 0 ) ? 0 :gdjs.SaturnCode.GDspawn4Objects1[0].getPointY("")));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.SaturnCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("rock"), gdjs.SaturnCode.GDrockObjects1);

gdjs.SaturnCode.condition0IsTrue_0.val = false;
gdjs.SaturnCode.condition1IsTrue_0.val = false;
{
gdjs.SaturnCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.SaturnCode.mapOfGDgdjs_46SaturnCode_46GDPlayerObjects1Objects, gdjs.SaturnCode.mapOfGDgdjs_46SaturnCode_46GDrockObjects1Objects, false, runtimeScene, false);
}if ( gdjs.SaturnCode.condition0IsTrue_0.val ) {
{
gdjs.SaturnCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) != 1;
}}
if (gdjs.SaturnCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).sub(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}{runtimeScene.getGame().getVariables().getFromIndex(1).sub(1);
}{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Saturn");
}}

}


{


gdjs.SaturnCode.condition0IsTrue_0.val = false;
{
gdjs.SaturnCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "F1");
}if (gdjs.SaturnCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(15).setNumber(0);
}
{ //Subevents
gdjs.SaturnCode.eventsList9(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.SaturnCode.GDPlayerObjects1);

for(gdjs.SaturnCode.forEachIndex2 = 0;gdjs.SaturnCode.forEachIndex2 < gdjs.SaturnCode.GDPlayerObjects1.length;++gdjs.SaturnCode.forEachIndex2) {
gdjs.SaturnCode.GDPlayerObjects2.length = 0;


gdjs.SaturnCode.forEachTemporary2 = gdjs.SaturnCode.GDPlayerObjects1[gdjs.SaturnCode.forEachIndex2];
gdjs.SaturnCode.GDPlayerObjects2.push(gdjs.SaturnCode.forEachTemporary2);
gdjs.SaturnCode.condition0IsTrue_0.val = false;
{
gdjs.SaturnCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.SaturnCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(13).add(1);
}}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("alienfloor"), gdjs.SaturnCode.GDalienfloorObjects1);

for(gdjs.SaturnCode.forEachIndex2 = 0;gdjs.SaturnCode.forEachIndex2 < gdjs.SaturnCode.GDalienfloorObjects1.length;++gdjs.SaturnCode.forEachIndex2) {
gdjs.SaturnCode.GDalienfloorObjects2.length = 0;


gdjs.SaturnCode.forEachTemporary2 = gdjs.SaturnCode.GDalienfloorObjects1[gdjs.SaturnCode.forEachIndex2];
gdjs.SaturnCode.GDalienfloorObjects2.push(gdjs.SaturnCode.forEachTemporary2);
gdjs.SaturnCode.condition0IsTrue_0.val = false;
{
gdjs.SaturnCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.SaturnCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(13).add(1);
}}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("rocketplat"), gdjs.SaturnCode.GDrocketplatObjects1);

for(gdjs.SaturnCode.forEachIndex2 = 0;gdjs.SaturnCode.forEachIndex2 < gdjs.SaturnCode.GDrocketplatObjects1.length;++gdjs.SaturnCode.forEachIndex2) {
gdjs.SaturnCode.GDrocketplatObjects2.length = 0;


gdjs.SaturnCode.forEachTemporary2 = gdjs.SaturnCode.GDrocketplatObjects1[gdjs.SaturnCode.forEachIndex2];
gdjs.SaturnCode.GDrocketplatObjects2.push(gdjs.SaturnCode.forEachTemporary2);
gdjs.SaturnCode.condition0IsTrue_0.val = false;
{
gdjs.SaturnCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.SaturnCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(13).add(1);
}}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("robotting"), gdjs.SaturnCode.GDrobottingObjects1);

for(gdjs.SaturnCode.forEachIndex2 = 0;gdjs.SaturnCode.forEachIndex2 < gdjs.SaturnCode.GDrobottingObjects1.length;++gdjs.SaturnCode.forEachIndex2) {
gdjs.SaturnCode.GDrobottingObjects2.length = 0;


gdjs.SaturnCode.forEachTemporary2 = gdjs.SaturnCode.GDrobottingObjects1[gdjs.SaturnCode.forEachIndex2];
gdjs.SaturnCode.GDrobottingObjects2.push(gdjs.SaturnCode.forEachTemporary2);
gdjs.SaturnCode.condition0IsTrue_0.val = false;
{
gdjs.SaturnCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.SaturnCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(13).add(1);
}}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("rock"), gdjs.SaturnCode.GDrockObjects1);

for(gdjs.SaturnCode.forEachIndex2 = 0;gdjs.SaturnCode.forEachIndex2 < gdjs.SaturnCode.GDrockObjects1.length;++gdjs.SaturnCode.forEachIndex2) {
gdjs.SaturnCode.GDrockObjects2.length = 0;


gdjs.SaturnCode.forEachTemporary2 = gdjs.SaturnCode.GDrockObjects1[gdjs.SaturnCode.forEachIndex2];
gdjs.SaturnCode.GDrockObjects2.push(gdjs.SaturnCode.forEachTemporary2);
gdjs.SaturnCode.condition0IsTrue_0.val = false;
{
gdjs.SaturnCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.SaturnCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(13).add(1);
}}
}

}


{


gdjs.SaturnCode.condition0IsTrue_0.val = false;
{
gdjs.SaturnCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "m");
}if (gdjs.SaturnCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(16).setNumber(0);
}
{ //Subevents
gdjs.SaturnCode.eventsList15(runtimeScene);} //End of subevents
}

}


};

gdjs.SaturnCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.SaturnCode.GDPlayerObjects1.length = 0;
gdjs.SaturnCode.GDPlayerObjects2.length = 0;
gdjs.SaturnCode.GDPlayerObjects3.length = 0;
gdjs.SaturnCode.GDalienfloorObjects1.length = 0;
gdjs.SaturnCode.GDalienfloorObjects2.length = 0;
gdjs.SaturnCode.GDalienfloorObjects3.length = 0;
gdjs.SaturnCode.GDrocketplatObjects1.length = 0;
gdjs.SaturnCode.GDrocketplatObjects2.length = 0;
gdjs.SaturnCode.GDrocketplatObjects3.length = 0;
gdjs.SaturnCode.GDrockbackObjects1.length = 0;
gdjs.SaturnCode.GDrockbackObjects2.length = 0;
gdjs.SaturnCode.GDrockbackObjects3.length = 0;
gdjs.SaturnCode.GDboltObjects1.length = 0;
gdjs.SaturnCode.GDboltObjects2.length = 0;
gdjs.SaturnCode.GDboltObjects3.length = 0;
gdjs.SaturnCode.GDscoreObjects1.length = 0;
gdjs.SaturnCode.GDscoreObjects2.length = 0;
gdjs.SaturnCode.GDscoreObjects3.length = 0;
gdjs.SaturnCode.GDliveObjects1.length = 0;
gdjs.SaturnCode.GDliveObjects2.length = 0;
gdjs.SaturnCode.GDliveObjects3.length = 0;
gdjs.SaturnCode.GDlivesObjects1.length = 0;
gdjs.SaturnCode.GDlivesObjects2.length = 0;
gdjs.SaturnCode.GDlivesObjects3.length = 0;
gdjs.SaturnCode.GDrobottingObjects1.length = 0;
gdjs.SaturnCode.GDrobottingObjects2.length = 0;
gdjs.SaturnCode.GDrobottingObjects3.length = 0;
gdjs.SaturnCode.GDleftObjects1.length = 0;
gdjs.SaturnCode.GDleftObjects2.length = 0;
gdjs.SaturnCode.GDleftObjects3.length = 0;
gdjs.SaturnCode.GDrightObjects1.length = 0;
gdjs.SaturnCode.GDrightObjects2.length = 0;
gdjs.SaturnCode.GDrightObjects3.length = 0;
gdjs.SaturnCode.GDcrashedshipObjects1.length = 0;
gdjs.SaturnCode.GDcrashedshipObjects2.length = 0;
gdjs.SaturnCode.GDcrashedshipObjects3.length = 0;
gdjs.SaturnCode.GDnotcompleteObjects1.length = 0;
gdjs.SaturnCode.GDnotcompleteObjects2.length = 0;
gdjs.SaturnCode.GDnotcompleteObjects3.length = 0;
gdjs.SaturnCode.GDendObjects1.length = 0;
gdjs.SaturnCode.GDendObjects2.length = 0;
gdjs.SaturnCode.GDendObjects3.length = 0;
gdjs.SaturnCode.GDtimerObjects1.length = 0;
gdjs.SaturnCode.GDtimerObjects2.length = 0;
gdjs.SaturnCode.GDtimerObjects3.length = 0;
gdjs.SaturnCode.GDcheatsObjects1.length = 0;
gdjs.SaturnCode.GDcheatsObjects2.length = 0;
gdjs.SaturnCode.GDcheatsObjects3.length = 0;
gdjs.SaturnCode.GDBlueEnemy1Objects1.length = 0;
gdjs.SaturnCode.GDBlueEnemy1Objects2.length = 0;
gdjs.SaturnCode.GDBlueEnemy1Objects3.length = 0;
gdjs.SaturnCode.GDRedLaser08Objects1.length = 0;
gdjs.SaturnCode.GDRedLaser08Objects2.length = 0;
gdjs.SaturnCode.GDRedLaser08Objects3.length = 0;
gdjs.SaturnCode.GDGreenLaser09Objects1.length = 0;
gdjs.SaturnCode.GDGreenLaser09Objects2.length = 0;
gdjs.SaturnCode.GDGreenLaser09Objects3.length = 0;
gdjs.SaturnCode.GDrockObjects1.length = 0;
gdjs.SaturnCode.GDrockObjects2.length = 0;
gdjs.SaturnCode.GDrockObjects3.length = 0;
gdjs.SaturnCode.GDrockcatchObjects1.length = 0;
gdjs.SaturnCode.GDrockcatchObjects2.length = 0;
gdjs.SaturnCode.GDrockcatchObjects3.length = 0;
gdjs.SaturnCode.GDspawn1Objects1.length = 0;
gdjs.SaturnCode.GDspawn1Objects2.length = 0;
gdjs.SaturnCode.GDspawn1Objects3.length = 0;
gdjs.SaturnCode.GDspawn2Objects1.length = 0;
gdjs.SaturnCode.GDspawn2Objects2.length = 0;
gdjs.SaturnCode.GDspawn2Objects3.length = 0;
gdjs.SaturnCode.GDspawn3Objects1.length = 0;
gdjs.SaturnCode.GDspawn3Objects2.length = 0;
gdjs.SaturnCode.GDspawn3Objects3.length = 0;
gdjs.SaturnCode.GDgamelifeObjects1.length = 0;
gdjs.SaturnCode.GDgamelifeObjects2.length = 0;
gdjs.SaturnCode.GDgamelifeObjects3.length = 0;
gdjs.SaturnCode.GDfpsObjects1.length = 0;
gdjs.SaturnCode.GDfpsObjects2.length = 0;
gdjs.SaturnCode.GDfpsObjects3.length = 0;
gdjs.SaturnCode.GDNewObject3Objects1.length = 0;
gdjs.SaturnCode.GDNewObject3Objects2.length = 0;
gdjs.SaturnCode.GDNewObject3Objects3.length = 0;
gdjs.SaturnCode.GDspawn4Objects1.length = 0;
gdjs.SaturnCode.GDspawn4Objects2.length = 0;
gdjs.SaturnCode.GDspawn4Objects3.length = 0;

gdjs.SaturnCode.eventsList16(runtimeScene);
return;

}

gdjs['SaturnCode'] = gdjs.SaturnCode;
