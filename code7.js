gdjs.intro_58VCode = {};
gdjs.intro_58VCode.GDNewObjectObjects1= [];
gdjs.intro_58VCode.GDNewObjectObjects2= [];
gdjs.intro_58VCode.GDLevel6Objects1= [];
gdjs.intro_58VCode.GDLevel6Objects2= [];
gdjs.intro_58VCode.GDbackgroundObjects1= [];
gdjs.intro_58VCode.GDbackgroundObjects2= [];
gdjs.intro_58VCode.GDleveldescObjects1= [];
gdjs.intro_58VCode.GDleveldescObjects2= [];

gdjs.intro_58VCode.conditionTrue_0 = {val:false};
gdjs.intro_58VCode.condition0IsTrue_0 = {val:false};
gdjs.intro_58VCode.condition1IsTrue_0 = {val:false};


gdjs.intro_58VCode.eventsList0 = function(runtimeScene) {

{


gdjs.intro_58VCode.condition0IsTrue_0.val = false;
{
gdjs.intro_58VCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.intro_58VCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "intro");
}}

}


{


gdjs.intro_58VCode.condition0IsTrue_0.val = false;
{
gdjs.intro_58VCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 5, "intro");
}if (gdjs.intro_58VCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Venus", false);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("background"), gdjs.intro_58VCode.GDbackgroundObjects1);
{for(var i = 0, len = gdjs.intro_58VCode.GDbackgroundObjects1.length ;i < len;++i) {
    gdjs.intro_58VCode.GDbackgroundObjects1[i].setZOrder(-(2));
}
}}

}


};

gdjs.intro_58VCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.intro_58VCode.GDNewObjectObjects1.length = 0;
gdjs.intro_58VCode.GDNewObjectObjects2.length = 0;
gdjs.intro_58VCode.GDLevel6Objects1.length = 0;
gdjs.intro_58VCode.GDLevel6Objects2.length = 0;
gdjs.intro_58VCode.GDbackgroundObjects1.length = 0;
gdjs.intro_58VCode.GDbackgroundObjects2.length = 0;
gdjs.intro_58VCode.GDleveldescObjects1.length = 0;
gdjs.intro_58VCode.GDleveldescObjects2.length = 0;

gdjs.intro_58VCode.eventsList0(runtimeScene);
return;

}

gdjs['intro_58VCode'] = gdjs.intro_58VCode;
