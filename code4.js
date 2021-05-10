gdjs.intro_58JCode = {};
gdjs.intro_58JCode.GDNewObjectObjects1= [];
gdjs.intro_58JCode.GDNewObjectObjects2= [];
gdjs.intro_58JCode.GDLevel3Objects1= [];
gdjs.intro_58JCode.GDLevel3Objects2= [];
gdjs.intro_58JCode.GDbackgroundObjects1= [];
gdjs.intro_58JCode.GDbackgroundObjects2= [];
gdjs.intro_58JCode.GDleveldescObjects1= [];
gdjs.intro_58JCode.GDleveldescObjects2= [];

gdjs.intro_58JCode.conditionTrue_0 = {val:false};
gdjs.intro_58JCode.condition0IsTrue_0 = {val:false};
gdjs.intro_58JCode.condition1IsTrue_0 = {val:false};


gdjs.intro_58JCode.eventsList0 = function(runtimeScene) {

{


gdjs.intro_58JCode.condition0IsTrue_0.val = false;
{
gdjs.intro_58JCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.intro_58JCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "intro");
}}

}


{


gdjs.intro_58JCode.condition0IsTrue_0.val = false;
{
gdjs.intro_58JCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 5, "intro");
}if (gdjs.intro_58JCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Jupiter", false);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("background"), gdjs.intro_58JCode.GDbackgroundObjects1);
{for(var i = 0, len = gdjs.intro_58JCode.GDbackgroundObjects1.length ;i < len;++i) {
    gdjs.intro_58JCode.GDbackgroundObjects1[i].setZOrder(-(2));
}
}}

}


};

gdjs.intro_58JCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.intro_58JCode.GDNewObjectObjects1.length = 0;
gdjs.intro_58JCode.GDNewObjectObjects2.length = 0;
gdjs.intro_58JCode.GDLevel3Objects1.length = 0;
gdjs.intro_58JCode.GDLevel3Objects2.length = 0;
gdjs.intro_58JCode.GDbackgroundObjects1.length = 0;
gdjs.intro_58JCode.GDbackgroundObjects2.length = 0;
gdjs.intro_58JCode.GDleveldescObjects1.length = 0;
gdjs.intro_58JCode.GDleveldescObjects2.length = 0;

gdjs.intro_58JCode.eventsList0(runtimeScene);
return;

}

gdjs['intro_58JCode'] = gdjs.intro_58JCode;
