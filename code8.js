gdjs.intro_58M2Code = {};
gdjs.intro_58M2Code.GDNewObjectObjects1= [];
gdjs.intro_58M2Code.GDNewObjectObjects2= [];
gdjs.intro_58M2Code.GDLevel7Objects1= [];
gdjs.intro_58M2Code.GDLevel7Objects2= [];
gdjs.intro_58M2Code.GDbackgroundObjects1= [];
gdjs.intro_58M2Code.GDbackgroundObjects2= [];
gdjs.intro_58M2Code.GDleveldescObjects1= [];
gdjs.intro_58M2Code.GDleveldescObjects2= [];

gdjs.intro_58M2Code.conditionTrue_0 = {val:false};
gdjs.intro_58M2Code.condition0IsTrue_0 = {val:false};
gdjs.intro_58M2Code.condition1IsTrue_0 = {val:false};


gdjs.intro_58M2Code.eventsList0 = function(runtimeScene) {

{


gdjs.intro_58M2Code.condition0IsTrue_0.val = false;
{
gdjs.intro_58M2Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.intro_58M2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "intro");
}}

}


{


gdjs.intro_58M2Code.condition0IsTrue_0.val = false;
{
gdjs.intro_58M2Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 5, "intro");
}if (gdjs.intro_58M2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Mercury", false);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("background"), gdjs.intro_58M2Code.GDbackgroundObjects1);
{for(var i = 0, len = gdjs.intro_58M2Code.GDbackgroundObjects1.length ;i < len;++i) {
    gdjs.intro_58M2Code.GDbackgroundObjects1[i].setZOrder(-(2));
}
}}

}


};

gdjs.intro_58M2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.intro_58M2Code.GDNewObjectObjects1.length = 0;
gdjs.intro_58M2Code.GDNewObjectObjects2.length = 0;
gdjs.intro_58M2Code.GDLevel7Objects1.length = 0;
gdjs.intro_58M2Code.GDLevel7Objects2.length = 0;
gdjs.intro_58M2Code.GDbackgroundObjects1.length = 0;
gdjs.intro_58M2Code.GDbackgroundObjects2.length = 0;
gdjs.intro_58M2Code.GDleveldescObjects1.length = 0;
gdjs.intro_58M2Code.GDleveldescObjects2.length = 0;

gdjs.intro_58M2Code.eventsList0(runtimeScene);
return;

}

gdjs['intro_58M2Code'] = gdjs.intro_58M2Code;
