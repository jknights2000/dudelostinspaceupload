gdjs.intro_58M1Code = {};
gdjs.intro_58M1Code.GDNewObjectObjects1= [];
gdjs.intro_58M1Code.GDNewObjectObjects2= [];
gdjs.intro_58M1Code.GDLevel4Objects1= [];
gdjs.intro_58M1Code.GDLevel4Objects2= [];
gdjs.intro_58M1Code.GDbackgroundObjects1= [];
gdjs.intro_58M1Code.GDbackgroundObjects2= [];
gdjs.intro_58M1Code.GDleveldescObjects1= [];
gdjs.intro_58M1Code.GDleveldescObjects2= [];

gdjs.intro_58M1Code.conditionTrue_0 = {val:false};
gdjs.intro_58M1Code.condition0IsTrue_0 = {val:false};
gdjs.intro_58M1Code.condition1IsTrue_0 = {val:false};


gdjs.intro_58M1Code.eventsList0 = function(runtimeScene) {

{


gdjs.intro_58M1Code.condition0IsTrue_0.val = false;
{
gdjs.intro_58M1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.intro_58M1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "intro");
}}

}


{


gdjs.intro_58M1Code.condition0IsTrue_0.val = false;
{
gdjs.intro_58M1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 5, "intro");
}if (gdjs.intro_58M1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Marz", false);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("background"), gdjs.intro_58M1Code.GDbackgroundObjects1);
{for(var i = 0, len = gdjs.intro_58M1Code.GDbackgroundObjects1.length ;i < len;++i) {
    gdjs.intro_58M1Code.GDbackgroundObjects1[i].setZOrder(-(2));
}
}}

}


};

gdjs.intro_58M1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.intro_58M1Code.GDNewObjectObjects1.length = 0;
gdjs.intro_58M1Code.GDNewObjectObjects2.length = 0;
gdjs.intro_58M1Code.GDLevel4Objects1.length = 0;
gdjs.intro_58M1Code.GDLevel4Objects2.length = 0;
gdjs.intro_58M1Code.GDbackgroundObjects1.length = 0;
gdjs.intro_58M1Code.GDbackgroundObjects2.length = 0;
gdjs.intro_58M1Code.GDleveldescObjects1.length = 0;
gdjs.intro_58M1Code.GDleveldescObjects2.length = 0;

gdjs.intro_58M1Code.eventsList0(runtimeScene);
return;

}

gdjs['intro_58M1Code'] = gdjs.intro_58M1Code;
