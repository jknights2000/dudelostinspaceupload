gdjs.EndCode = {};
gdjs.EndCode.GDbackgroundObjects1= [];
gdjs.EndCode.GDbackgroundObjects2= [];
gdjs.EndCode.GDbackgroundObjects3= [];
gdjs.EndCode.GDVictoryObjects1= [];
gdjs.EndCode.GDVictoryObjects2= [];
gdjs.EndCode.GDVictoryObjects3= [];
gdjs.EndCode.GDdancingguyObjects1= [];
gdjs.EndCode.GDdancingguyObjects2= [];
gdjs.EndCode.GDdancingguyObjects3= [];
gdjs.EndCode.GDBackObjects1= [];
gdjs.EndCode.GDBackObjects2= [];
gdjs.EndCode.GDBackObjects3= [];
gdjs.EndCode.GDNewObjectObjects1= [];
gdjs.EndCode.GDNewObjectObjects2= [];
gdjs.EndCode.GDNewObjectObjects3= [];

gdjs.EndCode.conditionTrue_0 = {val:false};
gdjs.EndCode.condition0IsTrue_0 = {val:false};
gdjs.EndCode.condition1IsTrue_0 = {val:false};
gdjs.EndCode.condition2IsTrue_0 = {val:false};


gdjs.EndCode.eventsList0 = function(runtimeScene) {

{


gdjs.EndCode.condition0IsTrue_0.val = false;
gdjs.EndCode.condition1IsTrue_0.val = false;
{
gdjs.EndCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(16)) == 0;
}if ( gdjs.EndCode.condition0IsTrue_0.val ) {
{
gdjs.EndCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(17)) == 0;
}}
if (gdjs.EndCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(16).setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(17).setNumber(1);
}}

}


{


gdjs.EndCode.condition0IsTrue_0.val = false;
gdjs.EndCode.condition1IsTrue_0.val = false;
{
gdjs.EndCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(16)) == 0;
}if ( gdjs.EndCode.condition0IsTrue_0.val ) {
{
gdjs.EndCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(17)) == 1;
}}
if (gdjs.EndCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(16).setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(17).setNumber(0);
}}

}


};gdjs.EndCode.eventsList1 = function(runtimeScene) {

{


gdjs.EndCode.condition0IsTrue_0.val = false;
{
gdjs.EndCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Back");
}if (gdjs.EndCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Title screen", false);
}}

}


{


gdjs.EndCode.condition0IsTrue_0.val = false;
{
gdjs.EndCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "m");
}if (gdjs.EndCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(16).setNumber(0);
}
{ //Subevents
gdjs.EndCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.EndCode.condition0IsTrue_0.val = false;
{
gdjs.EndCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.EndCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "Pixel Peeker Polka - faster2.mp3", true, 100, 1);
}}

}


{


gdjs.EndCode.condition0IsTrue_0.val = false;
{
gdjs.EndCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(17)) == 1;
}if (gdjs.EndCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 0);
}}

}


{


gdjs.EndCode.condition0IsTrue_0.val = false;
{
gdjs.EndCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(17)) == 0;
}if (gdjs.EndCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 100);
}}

}


};

gdjs.EndCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.EndCode.GDbackgroundObjects1.length = 0;
gdjs.EndCode.GDbackgroundObjects2.length = 0;
gdjs.EndCode.GDbackgroundObjects3.length = 0;
gdjs.EndCode.GDVictoryObjects1.length = 0;
gdjs.EndCode.GDVictoryObjects2.length = 0;
gdjs.EndCode.GDVictoryObjects3.length = 0;
gdjs.EndCode.GDdancingguyObjects1.length = 0;
gdjs.EndCode.GDdancingguyObjects2.length = 0;
gdjs.EndCode.GDdancingguyObjects3.length = 0;
gdjs.EndCode.GDBackObjects1.length = 0;
gdjs.EndCode.GDBackObjects2.length = 0;
gdjs.EndCode.GDBackObjects3.length = 0;
gdjs.EndCode.GDNewObjectObjects1.length = 0;
gdjs.EndCode.GDNewObjectObjects2.length = 0;
gdjs.EndCode.GDNewObjectObjects3.length = 0;

gdjs.EndCode.eventsList1(runtimeScene);
return;

}

gdjs['EndCode'] = gdjs.EndCode;
