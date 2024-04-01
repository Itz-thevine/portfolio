function setModalMaxHeight(element) {
    var $element = document.querySelector(element);
    var $content = $element.querySelector('.modal-content');
    var borderWidth = $content.offsetHeight - $content.clientHeight;
    var dialogMargin = window.innerWidth < 768 ? 20 : 60;
    var contentHeight = window.innerHeight - (dialogMargin + borderWidth);
    var headerHeight = $element.querySelector('.modal-header').offsetHeight || 0;
    var footerHeight = $element.querySelector('.modal-footer').offsetHeight || 0;
    var maxHeight = contentHeight - (headerHeight + footerHeight);
  
    $content.style.overflow = 'hidden';
    
    $element
      .querySelector('.modal-body').style.maxHeight = maxHeight + 'px';
  }
  
  document.querySelectorAll('.modal').forEach(function(modal) {
    modal.addEventListener('show.bs.modal', function() {
      this.style.display = 'block';
      setModalMaxHeight(this);
    });
  });
  
  window.addEventListener('resize', function() {
    var modalIn = document.querySelector('.modal.in');
    if (modalIn) {
      setModalMaxHeight(modalIn);
    }
  });
  
  /* CodeMirror */
  document.querySelectorAll('.code').forEach(function(codeElement) {
    var code = codeElement.textContent;
    var mode = codeElement.dataset.language;
  
    codeElement.innerHTML = ''; // Empty the code container
    codeElement.classList.add('cm-s-bootstrap'); // Add CodeMirror theme class
    CodeMirror.runMode(code, mode, codeElement); // Run CodeMirror mode
  });
  