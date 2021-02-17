gdjs.UranusbossCode = {};
gdjs.UranusbossCode.GDNewObjectObjects1= [];
gdjs.UranusbossCode.GDNewObjectObjects2= [];
gdjs.UranusbossCode.GDplayerObjects1= [];
gdjs.UranusbossCode.GDplayerObjects2= [];
gdjs.UranusbossCode.GDbossshipObjects1= [];
gdjs.UranusbossCode.GDbossshipObjects2= [];
gdjs.UranusbossCode.GDNewObject2Objects1= [];
gdjs.UranusbossCode.GDNewObject2Objects2= [];
gdjs.UranusbossCode.GDNewObject3Objects1= [];
gdjs.UranusbossCode.GDNewObject3Objects2= [];
gdjs.UranusbossCode.GDbulletplayerObjects1= [];
gdjs.UranusbossCode.GDbulletplayerObjects2= [];
gdjs.UranusbossCode.GDbulletbossObjects1= [];
gdjs.UranusbossCode.GDbulletbossObjects2= [];
gdjs.UranusbossCode.GDbigchungusObjects1= [];
gdjs.UranusbossCode.GDbigchungusObjects2= [];
gdjs.UranusbossCode.GDbosshealthObjects1= [];
gdjs.UranusbossCode.GDbosshealthObjects2= [];
gdjs.UranusbossCode.GDplayerhealthObjects1= [];
gdjs.UranusbossCode.GDplayerhealthObjects2= [];

gdjs.UranusbossCode.conditionTrue_0 = {val:false};
gdjs.UranusbossCode.condition0IsTrue_0 = {val:false};
gdjs.UranusbossCode.condition1IsTrue_0 = {val:false};
gdjs.UranusbossCode.condition2IsTrue_0 = {val:false};


gdjs.UranusbossCode.mapOfGDgdjs_46UranusbossCode_46GDbulletplayerObjects1Objects = Hashtable.newFrom({"bulletplayer": gdjs.UranusbossCode.GDbulletplayerObjects1});gdjs.UranusbossCode.mapOfGDgdjs_46UranusbossCode_46GDbulletbossObjects1Objects = Hashtable.newFrom({"bulletboss": gdjs.UranusbossCode.GDbulletbossObjects1});gdjs.UranusbossCode.mapOfGDgdjs_46UranusbossCode_46GDbulletbossObjects1Objects = Hashtable.newFrom({"bulletboss": gdjs.UranusbossCode.GDbulletbossObjects1});gdjs.UranusbossCode.mapOfGDgdjs_46UranusbossCode_46GDbulletbossObjects1Objects = Hashtable.newFrom({"bulletboss": gdjs.UranusbossCode.GDbulletbossObjects1});gdjs.UranusbossCode.mapOfGDgdjs_46UranusbossCode_46GDbulletbossObjects1Objects = Hashtable.newFrom({"bulletboss": gdjs.UranusbossCode.GDbulletbossObjects1});gdjs.UranusbossCode.mapOfGDgdjs_46UranusbossCode_46GDbulletbossObjects1Objects = Hashtable.newFrom({"bulletboss": gdjs.UranusbossCode.GDbulletbossObjects1});gdjs.UranusbossCode.mapOfGDgdjs_46UranusbossCode_46GDbigchungusObjects1Objects = Hashtable.newFrom({"bigchungus": gdjs.UranusbossCode.GDbigchungusObjects1});gdjs.UranusbossCode.mapOfGDgdjs_46UranusbossCode_46GDbossshipObjects1Objects = Hashtable.newFrom({"bossship": gdjs.UranusbossCode.GDbossshipObjects1});gdjs.UranusbossCode.mapOfGDgdjs_46UranusbossCode_46GDbulletplayerObjects1Objects = Hashtable.newFrom({"bulletplayer": gdjs.UranusbossCode.GDbulletplayerObjects1});gdjs.UranusbossCode.mapOfGDgdjs_46UranusbossCode_46GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.UranusbossCode.GDplayerObjects1});gdjs.UranusbossCode.mapOfGDgdjs_46UranusbossCode_46GDbulletbossObjects1Objects = Hashtable.newFrom({"bulletboss": gdjs.UranusbossCode.GDbulletbossObjects1});gdjs.UranusbossCode.mapOfGDgdjs_46UranusbossCode_46GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.UranusbossCode.GDplayerObjects1});gdjs.UranusbossCode.mapOfGDgdjs_46UranusbossCode_46GDbigchungusObjects1Objects = Hashtable.newFrom({"bigchungus": gdjs.UranusbossCode.GDbigchungusObjects1});gdjs.UranusbossCode.eventsList0 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.UranusbossCode.GDNewObject2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject3"), gdjs.UranusbossCode.GDNewObject3Objects1);
gdjs.copyArray(runtimeScene.getObjects("bossship"), gdjs.UranusbossCode.GDbossshipObjects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.UranusbossCode.GDplayerObjects1);
{for(var i = 0, len = gdjs.UranusbossCode.GDNewObject2Objects1.length ;i < len;++i) {
    gdjs.UranusbossCode.GDNewObject2Objects1[i].setZOrder(2);
}
}{for(var i = 0, len = gdjs.UranusbossCode.GDNewObject3Objects1.length ;i < len;++i) {
    gdjs.UranusbossCode.GDNewObject3Objects1[i].setZOrder(2);
}
}{for(var i = 0, len = gdjs.UranusbossCode.GDNewObject2Objects1.length ;i < len;++i) {
    gdjs.UranusbossCode.GDNewObject2Objects1[i].setX((( gdjs.UranusbossCode.GDplayerObjects1.length === 0 ) ? 0 :gdjs.UranusbossCode.GDplayerObjects1[0].getPointX("")) + 55);
}
}{for(var i = 0, len = gdjs.UranusbossCode.GDNewObject2Objects1.length ;i < len;++i) {
    gdjs.UranusbossCode.GDNewObject2Objects1[i].setY((( gdjs.UranusbossCode.GDplayerObjects1.length === 0 ) ? 0 :gdjs.UranusbossCode.GDplayerObjects1[0].getPointY("")) + 30);
}
}{for(var i = 0, len = gdjs.UranusbossCode.GDNewObject3Objects1.length ;i < len;++i) {
    gdjs.UranusbossCode.GDNewObject3Objects1[i].setX((( gdjs.UranusbossCode.GDbossshipObjects1.length === 0 ) ? 0 :gdjs.UranusbossCode.GDbossshipObjects1[0].getPointX("")) + 10);
}
}{for(var i = 0, len = gdjs.UranusbossCode.GDNewObject3Objects1.length ;i < len;++i) {
    gdjs.UranusbossCode.GDNewObject3Objects1[i].setY((( gdjs.UranusbossCode.GDbossshipObjects1.length === 0 ) ? 0 :gdjs.UranusbossCode.GDbossshipObjects1[0].getPointY("")) + 70);
}
}}

}


{


gdjs.UranusbossCode.condition0IsTrue_0.val = false;
gdjs.UranusbossCode.condition1IsTrue_0.val = false;
{
gdjs.UranusbossCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}if ( gdjs.UranusbossCode.condition0IsTrue_0.val ) {
{
gdjs.UranusbossCode.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.5, "firerate");
}}
if (gdjs.UranusbossCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("bulletplayer"), gdjs.UranusbossCode.GDbulletplayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.UranusbossCode.GDplayerObjects1);
{for(var i = 0, len = gdjs.UranusbossCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.UranusbossCode.GDplayerObjects1[i].getBehavior("FireBullet").Fire((gdjs.UranusbossCode.GDplayerObjects1[i].getPointX("")) - 60, (gdjs.UranusbossCode.GDplayerObjects1[i].getPointY("")) - 5, gdjs.UranusbossCode.mapOfGDgdjs_46UranusbossCode_46GDbulletplayerObjects1Objects, 180, 500, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "firerate");
}}

}


{


gdjs.UranusbossCode.condition0IsTrue_0.val = false;
{
gdjs.UranusbossCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 2, "choose");
}if (gdjs.UranusbossCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(1).setNumber(gdjs.randomInRange(1, 3));
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "choose");
}}

}


{


gdjs.UranusbossCode.condition0IsTrue_0.val = false;
gdjs.UranusbossCode.condition1IsTrue_0.val = false;
{
gdjs.UranusbossCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.25, "bossfirerate");
}if ( gdjs.UranusbossCode.condition0IsTrue_0.val ) {
{
gdjs.UranusbossCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 1;
}}
if (gdjs.UranusbossCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("bossship"), gdjs.UranusbossCode.GDbossshipObjects1);
gdjs.copyArray(runtimeScene.getObjects("bulletboss"), gdjs.UranusbossCode.GDbulletbossObjects1);
{for(var i = 0, len = gdjs.UranusbossCode.GDbossshipObjects1.length ;i < len;++i) {
    gdjs.UranusbossCode.GDbossshipObjects1[i].getBehavior("FireBullet").Fire((gdjs.UranusbossCode.GDbossshipObjects1[i].getPointX("")) + 100, (gdjs.UranusbossCode.GDbossshipObjects1[i].getPointY("")) + 60, gdjs.UranusbossCode.mapOfGDgdjs_46UranusbossCode_46GDbulletbossObjects1Objects, 22, 500, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.UranusbossCode.GDbossshipObjects1.length ;i < len;++i) {
    gdjs.UranusbossCode.GDbossshipObjects1[i].getBehavior("FireBullet").Fire((gdjs.UranusbossCode.GDbossshipObjects1[i].getPointX("")) + 100, (gdjs.UranusbossCode.GDbossshipObjects1[i].getPointY("")) + 60, gdjs.UranusbossCode.mapOfGDgdjs_46UranusbossCode_46GDbulletbossObjects1Objects, 338, 500, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "bossfirerate");
}}

}


{


gdjs.UranusbossCode.condition0IsTrue_0.val = false;
gdjs.UranusbossCode.condition1IsTrue_0.val = false;
{
gdjs.UranusbossCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "firerate");
}if ( gdjs.UranusbossCode.condition0IsTrue_0.val ) {
{
gdjs.UranusbossCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 2;
}}
if (gdjs.UranusbossCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("bossship"), gdjs.UranusbossCode.GDbossshipObjects1);
gdjs.copyArray(runtimeScene.getObjects("bulletboss"), gdjs.UranusbossCode.GDbulletbossObjects1);
{for(var i = 0, len = gdjs.UranusbossCode.GDbossshipObjects1.length ;i < len;++i) {
    gdjs.UranusbossCode.GDbossshipObjects1[i].getBehavior("FireBullet").Fire((gdjs.UranusbossCode.GDbossshipObjects1[i].getPointX("")) + 100, (gdjs.UranusbossCode.GDbossshipObjects1[i].getPointY("")) + 60, gdjs.UranusbossCode.mapOfGDgdjs_46UranusbossCode_46GDbulletbossObjects1Objects, 5, 300, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.UranusbossCode.GDbossshipObjects1.length ;i < len;++i) {
    gdjs.UranusbossCode.GDbossshipObjects1[i].getBehavior("FireBullet").Fire((gdjs.UranusbossCode.GDbossshipObjects1[i].getPointX("")) + 100, (gdjs.UranusbossCode.GDbossshipObjects1[i].getPointY("")) + 60, gdjs.UranusbossCode.mapOfGDgdjs_46UranusbossCode_46GDbulletbossObjects1Objects, 0, 300, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.UranusbossCode.GDbossshipObjects1.length ;i < len;++i) {
    gdjs.UranusbossCode.GDbossshipObjects1[i].getBehavior("FireBullet").Fire((gdjs.UranusbossCode.GDbossshipObjects1[i].getPointX("")) + 100, (gdjs.UranusbossCode.GDbossshipObjects1[i].getPointY("")) + 60, gdjs.UranusbossCode.mapOfGDgdjs_46UranusbossCode_46GDbulletbossObjects1Objects, 355, 300, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "bossfirerate");
}}

}


{


gdjs.UranusbossCode.condition0IsTrue_0.val = false;
gdjs.UranusbossCode.condition1IsTrue_0.val = false;
{
gdjs.UranusbossCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "bossfirerate");
}if ( gdjs.UranusbossCode.condition0IsTrue_0.val ) {
{
gdjs.UranusbossCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 3;
}}
if (gdjs.UranusbossCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("bigchungus"), gdjs.UranusbossCode.GDbigchungusObjects1);
gdjs.copyArray(runtimeScene.getObjects("bossship"), gdjs.UranusbossCode.GDbossshipObjects1);
{for(var i = 0, len = gdjs.UranusbossCode.GDbossshipObjects1.length ;i < len;++i) {
    gdjs.UranusbossCode.GDbossshipObjects1[i].getBehavior("FireBullet").Fire((gdjs.UranusbossCode.GDbossshipObjects1[i].getPointX("")) + 100, (gdjs.UranusbossCode.GDbossshipObjects1[i].getPointY("")) + 60, gdjs.UranusbossCode.mapOfGDgdjs_46UranusbossCode_46GDbigchungusObjects1Objects, 0, 300, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "bossfirerate");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("bossship"), gdjs.UranusbossCode.GDbossshipObjects1);
gdjs.copyArray(runtimeScene.getObjects("bulletplayer"), gdjs.UranusbossCode.GDbulletplayerObjects1);

gdjs.UranusbossCode.condition0IsTrue_0.val = false;
{
gdjs.UranusbossCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.UranusbossCode.mapOfGDgdjs_46UranusbossCode_46GDbossshipObjects1Objects, gdjs.UranusbossCode.mapOfGDgdjs_46UranusbossCode_46GDbulletplayerObjects1Objects, false, runtimeScene, false);
}if (gdjs.UranusbossCode.condition0IsTrue_0.val) {
/* Reuse gdjs.UranusbossCode.GDbulletplayerObjects1 */
{runtimeScene.getVariables().getFromIndex(0).sub(2);
}{for(var i = 0, len = gdjs.UranusbossCode.GDbulletplayerObjects1.length ;i < len;++i) {
    gdjs.UranusbossCode.GDbulletplayerObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("bulletboss"), gdjs.UranusbossCode.GDbulletbossObjects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.UranusbossCode.GDplayerObjects1);

gdjs.UranusbossCode.condition0IsTrue_0.val = false;
{
gdjs.UranusbossCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.UranusbossCode.mapOfGDgdjs_46UranusbossCode_46GDplayerObjects1Objects, gdjs.UranusbossCode.mapOfGDgdjs_46UranusbossCode_46GDbulletbossObjects1Objects, false, runtimeScene, false);
}if (gdjs.UranusbossCode.condition0IsTrue_0.val) {
/* Reuse gdjs.UranusbossCode.GDbulletbossObjects1 */
{for(var i = 0, len = gdjs.UranusbossCode.GDbulletbossObjects1.length ;i < len;++i) {
    gdjs.UranusbossCode.GDbulletbossObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("bigchungus"), gdjs.UranusbossCode.GDbigchungusObjects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.UranusbossCode.GDplayerObjects1);

gdjs.UranusbossCode.condition0IsTrue_0.val = false;
{
gdjs.UranusbossCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.UranusbossCode.mapOfGDgdjs_46UranusbossCode_46GDplayerObjects1Objects, gdjs.UranusbossCode.mapOfGDgdjs_46UranusbossCode_46GDbigchungusObjects1Objects, false, runtimeScene, false);
}if (gdjs.UranusbossCode.condition0IsTrue_0.val) {
/* Reuse gdjs.UranusbossCode.GDbigchungusObjects1 */
{for(var i = 0, len = gdjs.UranusbossCode.GDbigchungusObjects1.length ;i < len;++i) {
    gdjs.UranusbossCode.GDbigchungusObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


};

gdjs.UranusbossCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.UranusbossCode.GDNewObjectObjects1.length = 0;
gdjs.UranusbossCode.GDNewObjectObjects2.length = 0;
gdjs.UranusbossCode.GDplayerObjects1.length = 0;
gdjs.UranusbossCode.GDplayerObjects2.length = 0;
gdjs.UranusbossCode.GDbossshipObjects1.length = 0;
gdjs.UranusbossCode.GDbossshipObjects2.length = 0;
gdjs.UranusbossCode.GDNewObject2Objects1.length = 0;
gdjs.UranusbossCode.GDNewObject2Objects2.length = 0;
gdjs.UranusbossCode.GDNewObject3Objects1.length = 0;
gdjs.UranusbossCode.GDNewObject3Objects2.length = 0;
gdjs.UranusbossCode.GDbulletplayerObjects1.length = 0;
gdjs.UranusbossCode.GDbulletplayerObjects2.length = 0;
gdjs.UranusbossCode.GDbulletbossObjects1.length = 0;
gdjs.UranusbossCode.GDbulletbossObjects2.length = 0;
gdjs.UranusbossCode.GDbigchungusObjects1.length = 0;
gdjs.UranusbossCode.GDbigchungusObjects2.length = 0;
gdjs.UranusbossCode.GDbosshealthObjects1.length = 0;
gdjs.UranusbossCode.GDbosshealthObjects2.length = 0;
gdjs.UranusbossCode.GDplayerhealthObjects1.length = 0;
gdjs.UranusbossCode.GDplayerhealthObjects2.length = 0;

gdjs.UranusbossCode.eventsList0(runtimeScene);
return;

}

gdjs['UranusbossCode'] = gdjs.UranusbossCode;
