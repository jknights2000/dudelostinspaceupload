gdjs.intro_58UCode = {};
gdjs.intro_58UCode.GDNewObjectObjects1= [];
gdjs.intro_58UCode.GDNewObjectObjects2= [];
gdjs.intro_58UCode.GDLevel1Objects1= [];
gdjs.intro_58UCode.GDLevel1Objects2= [];

gdjs.intro_58UCode.conditionTrue_0 = {val:false};
gdjs.intro_58UCode.condition0IsTrue_0 = {val:false};
gdjs.intro_58UCode.condition1IsTrue_0 = {val:false};


gdjs.intro_58UCode.eventsList0 = function(runtimeScene) {

{


gdjs.intro_58UCode.condition0IsTrue_0.val = false;
{
gdjs.intro_58UCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.intro_58UCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "intro");
}}

}


{


gdjs.intro_58UCode.condition0IsTrue_0.val = false;
{
gdjs.intro_58UCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 5, "intro");
}if (gdjs.intro_58UCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Uranus", false);
}}

}


};

gdjs.intro_58UCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.intro_58UCode.GDNewObjectObjects1.length = 0;
gdjs.intro_58UCode.GDNewObjectObjects2.length = 0;
gdjs.intro_58UCode.GDLevel1Objects1.length = 0;
gdjs.intro_58UCode.GDLevel1Objects2.length = 0;

gdjs.intro_58UCode.eventsList0(runtimeScene);
return;

}

gdjs['intro_58UCode'] = gdjs.intro_58UCode;
