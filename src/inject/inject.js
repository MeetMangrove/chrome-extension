var element = document.createElement('div');
var content = '<div class="mangroveExtension"><div class="wrapExtension"><div class="labelExtension">Disable Message</div><label class="switch"><input type="checkbox"  id="messageExtension"><div class="slider round"></div></label></div><div class="wrapExtension"><div class="labelExtension">Disable All Timeline</div><label class="switch"><input type="checkbox"  id="timelineExtension"><div class="slider round"></div></label></div></div>';
element.innerHTML = content;
document.getElementById("contentArea").prepend(element);


document.getElementById("messageExtension").addEventListener("change", toogleElement.bind(null, ['.fbChatSidebar', '.fbDockChatTabFlyout']));

document.getElementById("timelineExtension").addEventListener("change", toogleElement.bind(null, ['._5pcb']));

function toogleElement (classNameArray, e) {
  console.log(e);
  var isActive = e.target.checked;
    classNameArray.forEach(function(classSingle) {
      if(isActive) {
      document.querySelector(classSingle).style.visibility = 'hidden';
    } else {
      document.querySelector(classSingle).style.visibility = 'initial';    
    }
  });
  
}