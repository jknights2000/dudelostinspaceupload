gdjs.Title_32screenCode = {};
gdjs.Title_32screenCode.GDbackgroundObjects1= [];
gdjs.Title_32screenCode.GDbackgroundObjects2= [];
gdjs.Title_32screenCode.GDTitleObjects1= [];
gdjs.Title_32screenCode.GDTitleObjects2= [];
gdjs.Title_32screenCode.GDdescObjects1= [];
gdjs.Title_32screenCode.GDdescObjects2= [];
gdjs.Title_32screenCode.GDDudeObjects1= [];
gdjs.Title_32screenCode.GDDudeObjects2= [];
gdjs.Title_32screenCode.GDLeftObjects1= [];
gdjs.Title_32screenCode.GDLeftObjects2= [];
gdjs.Title_32screenCode.GDRightObjects1= [];
gdjs.Title_32screenCode.GDRightObjects2= [];
gdjs.Title_32screenCode.GDNewObjectObjects1= [];
gdjs.Title_32screenCode.GDNewObjectObjects2= [];

gdjs.Title_32screenCode.conditionTrue_0 = {val:false};
gdjs.Title_32screenCode.condition0IsTrue_0 = {val:false};
gdjs.Title_32screenCode.condition1IsTrue_0 = {val:false};


gdjs.Title_32screenCode.mapOfGDgdjs_46Title_9532screenCode_46GDDudeObjects1Objects = Hashtable.newFrom({"Dude": gdjs.Title_32screenCode.GDDudeObjects1});gdjs.Title_32screenCode.mapOfGDgdjs_46Title_9532screenCode_46GDLeftObjects1Objects = Hashtable.newFrom({"Left": gdjs.Title_32screenCode.GDLeftObjects1});gdjs.Title_32screenCode.mapOfGDgdjs_46Title_9532screenCode_46GDDudeObjects1Objects = Hashtable.newFrom({"Dude": gdjs.Title_32screenCode.GDDudeObjects1});gdjs.Title_32screenCode.mapOfGDgdjs_46Title_9532screenCode_46GDRightObjects1Objects = Hashtable.newFrom({"Right": gdjs.Title_32screenCode.GDRightObjects1});gdjs.Title_32screenCode.eventsList0 = function(runtimeScene) {

{


gdjs.Title_32screenCode.condition0IsTrue_0.val = false;
{
gdjs.Title_32screenCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}if (gdjs.Title_32screenCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "intro:N", false);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(3);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Dude"), gdjs.Title_32screenCode.GDDudeObjects1);
gdjs.copyArray(runtimeScene.getObjects("Left"), gdjs.Title_32screenCode.GDLeftObjects1);

gdjs.Title_32screenCode.condition0IsTrue_0.val = false;
{
gdjs.Title_32screenCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Title_32screenCode.mapOfGDgdjs_46Title_9532screenCode_46GDDudeObjects1Objects, gdjs.Title_32screenCode.mapOfGDgdjs_46Title_9532screenCode_46GDLeftObjects1Objects, false, runtimeScene, false);
}if (gdjs.Title_32screenCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).setString("Left");
}}

}


{


gdjs.Title_32screenCode.condition0IsTrue_0.val = false;
{
gdjs.Title_32screenCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)) == "Left";
}if (gdjs.Title_32screenCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Dude"), gdjs.Title_32screenCode.GDDudeObjects1);
{for(var i = 0, len = gdjs.Title_32screenCode.GDDudeObjects1.length ;i < len;++i) {
    gdjs.Title_32screenCode.GDDudeObjects1[i].addPolarForce(180, 100, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Dude"), gdjs.Title_32screenCode.GDDudeObjects1);
gdjs.copyArray(runtimeScene.getObjects("Right"), gdjs.Title_32screenCode.GDRightObjects1);

gdjs.Title_32screenCode.condition0IsTrue_0.val = false;
{
gdjs.Title_32screenCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Title_32screenCode.mapOfGDgdjs_46Title_9532screenCode_46GDDudeObjects1Objects, gdjs.Title_32screenCode.mapOfGDgdjs_46Title_9532screenCode_46GDRightObjects1Objects, false, runtimeScene, false);
}if (gdjs.Title_32screenCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).setString("Right");
}}

}


{


gdjs.Title_32screenCode.condition0IsTrue_0.val = false;
{
gdjs.Title_32screenCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)) == "Right";
}if (gdjs.Title_32screenCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Dude"), gdjs.Title_32screenCode.GDDudeObjects1);
{for(var i = 0, len = gdjs.Title_32screenCode.GDDudeObjects1.length ;i < len;++i) {
    gdjs.Title_32screenCode.GDDudeObjects1[i].addPolarForce(0, 100, 0);
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Dude"), gdjs.Title_32screenCode.GDDudeObjects1);
{for(var i = 0, len = gdjs.Title_32screenCode.GDDudeObjects1.length ;i < len;++i) {
    gdjs.Title_32screenCode.GDDudeObjects1[i].rotate(100, runtimeScene);
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Dude"), gdjs.Title_32screenCode.GDDudeObjects1);
{for(var i = 0, len = gdjs.Title_32screenCode.GDDudeObjects1.length ;i < len;++i) {
    gdjs.Title_32screenCode.GDDudeObjects1[i].setZOrder(-(1));
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("background"), gdjs.Title_32screenCode.GDbackgroundObjects1);
{for(var i = 0, len = gdjs.Title_32screenCode.GDbackgroundObjects1.length ;i < len;++i) {
    gdjs.Title_32screenCode.GDbackgroundObjects1[i].setZOrder(-(2));
}
}}

}


};

gdjs.Title_32screenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Title_32screenCode.GDbackgroundObjects1.length = 0;
gdjs.Title_32screenCode.GDbackgroundObjects2.length = 0;
gdjs.Title_32screenCode.GDTitleObjects1.length = 0;
gdjs.Title_32screenCode.GDTitleObjects2.length = 0;
gdjs.Title_32screenCode.GDdescObjects1.length = 0;
gdjs.Title_32screenCode.GDdescObjects2.length = 0;
gdjs.Title_32screenCode.GDDudeObjects1.length = 0;
gdjs.Title_32screenCode.GDDudeObjects2.length = 0;
gdjs.Title_32screenCode.GDLeftObjects1.length = 0;
gdjs.Title_32screenCode.GDLeftObjects2.length = 0;
gdjs.Title_32screenCode.GDRightObjects1.length = 0;
gdjs.Title_32screenCode.GDRightObjects2.length = 0;
gdjs.Title_32screenCode.GDNewObjectObjects1.length = 0;
gdjs.Title_32screenCode.GDNewObjectObjects2.length = 0;

gdjs.Title_32screenCode.eventsList0(runtimeScene);
return;

}

gdjs['Title_32screenCode'] = gdjs.Title_32screenCode;
