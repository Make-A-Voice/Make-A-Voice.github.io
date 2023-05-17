function createAudioHTML(path) {
  return '<audio controls controlslist="nodownload" class="px-1"> <source src=' +
      path +
      ' type="audio/wav">Your browser does not support the audio element.</audio>';
}


function generateExampleRow(table_row, base_path, filename_ext, col_offset) {
  for (var i = 0; i < filename_ext.length; i++) {
    let p = base_path + filename_ext[i];
    let cell = table_row.cells[col_offset + i];
    if (p.endsWith('txt')) {
      var req = new XMLHttpRequest();
      req.open("GET", p, false);
      req.send(null);
      cell.innerHTML = '<font size="-1">' + req.responseText + '</font>';
    } else {
      cell.innerHTML = cell.innerHTML + createAudioHTML(p);
    }
  }
}


function generateTextToSpeech(tableId) {
  let table = document.getElementById(tableId);
  let ext = ['_text.txt', '_gt.wav', '_prompt.wav', '_metastylespeech.wav', '_yourtts.wav', '_generspeech.wav', '_ours.wav'];

  for (var i = 0; i < 5; i++) {
    generateExampleRow(table.rows[1 + i], 'data/tts/' + i, ext, 0);
  }
}


generateTextToSpeech('text-to-speech-table')
