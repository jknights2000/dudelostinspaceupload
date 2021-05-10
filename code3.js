gdjs.intro_58SCode = {};
gdjs.intro_58SCode.GDNewObjectObjects1= [];
gdjs.intro_58SCode.GDNewObjectObjects2= [];
gdjs.intro_58SCode.GDLevel1Objects1= [];
gdjs.intro_58SCode.GDLevel1Objects2= [];
gdjs.intro_58SCode.GDbackgroundObjects1= [];
gdjs.intro_58SCode.GDbackgroundObjects2= [];
gdjs.intro_58SCode.GDleveldescObjects1= [];
gdjs.intro_58SCode.GDleveldescObjects2= [];

gdjs.intro_58SCode.conditionTrue_0 = {val:false};
gdjs.intro_58SCode.condition0IsTrue_0 = {val:false};
gdjs.intro_58SCode.condition1IsTrue_0 = {val:false};


gdjs.intro_58SCode.eventsList0 = function(runtimeScene) {

{


gdjs.intro_58SCode.condition0IsTrue_0.val = false;
{
gdjs.intro_58SCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.intro_58SCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "intro");
}}

}


{


gdjs.intro_58SCode.condition0IsTrue_0.val = false;
{
gdjs.intro_58SCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 5, "intro");
}if (gdjs.intro_58SCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Saturn", false);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("background"), gdjs.intro_58SCode.GDbackgroundObjects1);
{for(var i = 0, len = gdjs.intro_58SCode.GDbackgroundObjects1.length ;i < len;++i) {
    gdjs.intro_58SCode.GDbackgroundObjects1[i].setZOrder(-(2));
}
}}

}


};

gdjs.intro_58SCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.intro_58SCode.GDNewObjectObjects1.length = 0;
gdjs.intro_58SCode.GDNewObjectObjects2.length = 0;
gdjs.intro_58SCode.GDLevel1Objects1.length = 0;
gdjs.intro_58SCode.GDLevel1Objects2.length = 0;
gdjs.intro_58SCode.GDbackgroundObjects1.length = 0;
gdjs.intro_58SCode.GDbackgroundObjects2.length = 0;
gdjs.intro_58SCode.GDleveldescObjects1.length = 0;
gdjs.intro_58SCode.GDleveldescObjects2.length = 0;

gdjs.intro_58SCode.eventsList0(runtimeScene);
return;

}

gdjs['intro_58SCode'] = gdjs.intro_58SCode;
