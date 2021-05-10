gdjs.intro_58ECode = {};
gdjs.intro_58ECode.GDNewObjectObjects1= [];
gdjs.intro_58ECode.GDNewObjectObjects2= [];
gdjs.intro_58ECode.GDLevel5Objects1= [];
gdjs.intro_58ECode.GDLevel5Objects2= [];
gdjs.intro_58ECode.GDbackgroundObjects1= [];
gdjs.intro_58ECode.GDbackgroundObjects2= [];
gdjs.intro_58ECode.GDleveldescObjects1= [];
gdjs.intro_58ECode.GDleveldescObjects2= [];

gdjs.intro_58ECode.conditionTrue_0 = {val:false};
gdjs.intro_58ECode.condition0IsTrue_0 = {val:false};
gdjs.intro_58ECode.condition1IsTrue_0 = {val:false};


gdjs.intro_58ECode.eventsList0 = function(runtimeScene) {

{


gdjs.intro_58ECode.condition0IsTrue_0.val = false;
{
gdjs.intro_58ECode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.intro_58ECode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "intro");
}}

}


{


gdjs.intro_58ECode.condition0IsTrue_0.val = false;
{
gdjs.intro_58ECode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 5, "intro");
}if (gdjs.intro_58ECode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Earth", false);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("background"), gdjs.intro_58ECode.GDbackgroundObjects1);
{for(var i = 0, len = gdjs.intro_58ECode.GDbackgroundObjects1.length ;i < len;++i) {
    gdjs.intro_58ECode.GDbackgroundObjects1[i].setZOrder(-(2));
}
}}

}


};

gdjs.intro_58ECode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.intro_58ECode.GDNewObjectObjects1.length = 0;
gdjs.intro_58ECode.GDNewObjectObjects2.length = 0;
gdjs.intro_58ECode.GDLevel5Objects1.length = 0;
gdjs.intro_58ECode.GDLevel5Objects2.length = 0;
gdjs.intro_58ECode.GDbackgroundObjects1.length = 0;
gdjs.intro_58ECode.GDbackgroundObjects2.length = 0;
gdjs.intro_58ECode.GDleveldescObjects1.length = 0;
gdjs.intro_58ECode.GDleveldescObjects2.length = 0;

gdjs.intro_58ECode.eventsList0(runtimeScene);
return;

}

gdjs['intro_58ECode'] = gdjs.intro_58ECode;
