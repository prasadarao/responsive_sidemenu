function menu() {
  this.init= function() {
    this.bindEvents();
  }

  this.bindEvents = function() { 
    bindAccordionEvent();
    bindLinksEvent();
    ele('.navicon').addEventListener('click', getNavigation, false);
    ele('#sidenav-overlay').addEventListener('click', function() {
      closeMenu();
    }, false);
  }

  function bindAccordionEvent() {
    var elements = ele('.accordion', true);
    for (i = 0; i < elements.length; i++) {
      elements[i].onclick = function() {
        var currentEle = this.parentElement;
        if(!currentEle.classList.contains('active')) {
          closeAccordion()
          this.parentElement.classList.add('active');
        } else {
          currentEle.classList.remove('active');
        }
      }
    }
  }

  function bindLinksEvent() {
    var links = ele('.link', true);
    var container = ele('#datacontainer').getElementsByClassName('content')[0];
    for(var j=0; j< links.length; j++) {
      links[j].onclick = function(e) {
        e.preventDefault();
        container.innerHTML = this.innerText;
        closeMenu();
        return false;
      }
    }
  }

  function getNavigation(e) {
    var el = ele('.sidenav');
    if(el.classList.contains('open')) {
      el.classList.remove('open');
    } else {
      closeAccordion();
      ele('#sidenav-overlay').style.display = 'block';
      el.classList.add('open');
    }
  }

  function closeMenu() {
    var hasOpen = ele('.open', true);
    if(hasOpen.length > 0) {
      hasOpen[0].classList.remove('open');
      ele('#sidenav-overlay').style.display = 'none';
    }
  }

  function closeAccordion() {
    var activeEle = ele('.active', true);
    if(activeEle.length > 0) {
      activeEle[0].classList.remove('active');
    }
  }

  function ele(str, allFlag) {
    var obj;
    if(typeof allFlag == 'undefined') {
      obj = document.querySelector(str);
    } else {
      obj = document.querySelectorAll(str);
    }
    return obj;
  }
}

window.onload = function() {
  var me = new menu();
  me.init();
}
