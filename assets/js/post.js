
    // Copies code to the clipboard
function copyCode(elem, containerId) {
    // Copy code to clipboard
    var range = document.createRange();
    range.selectNode(document.getElementById(containerId));
    window.getSelection().removeAllRanges(); // clear current selection
    window.getSelection().addRange(range); // to select text
    document.execCommand("copy");
    window.getSelection().removeAllRanges();// to deselect

    var alertContent = "Kode berhasil di copy ke clipboard.";
    // Built-in function
    zxce3.initStickyAlert({
      content: alertContent,
      title: "Berhasil di copy",
      alertType: "alert-success",
      fillType: "filled",
      hasDismissButton: true,
      timeShown: 5000
    });
};
// Set code-block
var codeBl = document.querySelectorAll('.highlight');
var cpbtn = document.querySelectorAll('.cpbtn');
var chn = document.querySelectorAll('.chn');
// Set Id
for (var i = 0; i < codeBl.length; i++)
    codeBl[i].id = 'code-block-' + i;
// Set Attr
for (var i = 0; i < cpbtn.length; i++)
    cpbtn[i].setAttribute("onclick", "copyCode(this, 'code-block-" + i + "')");

// Set Attr
for (var i = 0; i < chn.length; i++)
    chn[i].setAttribute("onclick", "change(this, 'code-block-" + i + "')");



    // D-none for codeblock
function change(elem, containerId) {
    var swq = document.getElementById(containerId)
    if (swq.classList.contains('d-none')) {
      swq.classList.remove('d-none')
    } else {
      swq.classList.add('d-none')
    }
};


    function prints(content) {
        var printContents = document.getElementById(content).innerHTML;
        w=window.open();
        w.document.write(printContents);
        w.print();
        w.close();
    }
