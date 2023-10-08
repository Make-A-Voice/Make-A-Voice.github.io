function createAudioHTML(path) {
  return '<audio controls controlslist="nodownload" class="px-1"> <source src=' +
      path +
      ' type="audio/wav">Your browser does not support the audio element.</audio>';
}


function generateExampleRow(table_row, base_path, filename_ext, col_offset) {
  for (var i = 0; i < filename_ext.length; i++) {
    let p = base_path + filename_ext[i];
    let cell = table_row.cells[col_offset + i];
    // console.log(table_row.cells.length)
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

function generateExampleRowCross(table_row, base_path, filename_ext, col_offset) {
  for (var i = 0; i < filename_ext.length; i++) {
    let p = base_path + filename_ext[i];
    if (i === 1) {
      col_offset = col_offset + 1
    } 

    let cell = table_row.cells[col_offset + i];
    // console.log(table_row.cells.length)
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
  let ext = ['_txt.txt', '_gt.wav', '_generspeech.wav', '_yourtts.wav', '_ours.wav'];

  for (var i = 0; i < 8; i++) {
    generateExampleRow(table.rows[1 + i], 'data/tts/' + i, ext, 0);
  }
}

function generateVoiceConversion(tableId) {
  let table = document.getElementById(tableId);
  let ext = ['_source.wav', '_prompt.wav', '_nansy.wav', '_ppg-vc.wav', '_ours.wav'];

  for (var i = 0; i < 8; i++) {
    generateExampleRow(table.rows[1 + i], 'data/vc/' + i, ext, 0);
  }
}

function generateSingingVoiceSynthesis(tableId) {
  let table = document.getElementById(tableId);
  let ext = ['_txt.txt', '_gt.wav', '_fftsinger.wav', '_diffsinger.wav', '_ours.wav'];

  for (var i = 0; i < 8; i++) {
    generateExampleRow(table.rows[1 + i], 'data/svs/' + i, ext, 0);
  }
}

function generateSingingVoiceConversion(tableId) {
  let table = document.getElementById(tableId);
  let ext = ['_source.wav', '_prompt.wav','_ours.wav'];

  for (var i = 0; i < 8; i++) {
    generateExampleRow(table.rows[1 + i], 'data/svc/' + i, ext, 0);
  }
}

function generateCrossLingualTTSEn(tableId) {
  let table = document.getElementById(tableId);
  let ext = ['_txt.txt', '_prompt.wav','_voicebox.wav', '_yourtts.wav', '_ours.wav'];

  for (var i = 0; i < 3; i++) {
    generateExampleRowCross(table.rows[1 + i], 'data/crtts/x-en/' + i, ext, 0);
  }
}

function generateCrossLingualTTSDe(tableId) {
  let table = document.getElementById(tableId);
  let ext = ['_txt.txt', '_prompt.wav','_voicebox.wav', '_yourtts.wav', '_ours.wav'];

  for (var i = 0; i < 3; i++) {
    generateExampleRowCross(table.rows[1 + i], 'data/crtts/x-de/' + i, ext, 0);
  }
}

function generateCrossLingualTTSCn(tableId) {
  let table = document.getElementById(tableId);
  let ext = ['_txt.txt', '_prompt.wav', '_yourtts.wav', '_ours.wav'];

  for (var i = 0; i < 4; i++) {
    generateExampleRowCross(table.rows[1 + i], 'data/crtts/x-cn/' + i, ext, 0);
  }
}

function generateValle(tableId) {
  let table = document.getElementById(tableId);
  let ext = ['_txt.txt', '_prompt.wav', '_valle.wav','_ours.wav'];

  for (var i = 0; i < 7; i++) {
    generateExampleRow(table.rows[1 + i], 'data/valle/' + i, ext, 0);
  }
}

function generateSpearTTS(tableId) {
  let table = document.getElementById(tableId);
  let ext = ['_txt.txt', '_prompt.wav', '_speartts.wav','_ours.wav'];

  for (var i = 0; i < 4; i++) {
    generateExampleRow(table.rows[1 + i], 'data/speartts/' + i, ext, 0);
  }
}

function generateVoicebox(tableId) {
  let table = document.getElementById(tableId);
  let ext = ['_txt.txt', '_prompt.wav', '_voicebox.wav','_ours.wav'];

  for (var i = 0; i < 4; i++) {
    generateExampleRow(table.rows[1 + i], 'data/voicebox/' + i, ext, 0);
  }
}

function generateAblationSizeTTS(tableId) {
  let table = document.getElementById(tableId);
  let ext = ['_txt.txt', '_gt.wav', '_base.wav','_medium.wav', '_large.wav'];

  for (var i = 0; i < 8; i++) {
    generateExampleRow(table.rows[1 + i], 'data/ablation_size_tts/' + i, ext, 0);
  }
}

function generateAblationSizeVC(tableId) {
  let table = document.getElementById(tableId);
  let ext = ['_source.wav', '_prompt.wav', '_base.wav','_medium.wav', '_large.wav'];

  for (var i = 0; i < 8; i++) {
    generateExampleRow(table.rows[1 + i], 'data/ablation_size_vc/' + i, ext, 0);
  }
}

function generateAblationDataTTS(tableId) {
  let table = document.getElementById(tableId);
  let ext = ['_txt.txt', '_prompt.wav','_singletask.wav', '_multitask.wav'];

  for (var i = 0; i < 5; i++) {
    generateExampleRowCross(table.rows[1 + i], 'data/ablation_data_tts/' + i, ext, 0);
  }
}

function generateAblationDataVC(tableId) {
  let table = document.getElementById(tableId);
  let ext = ['_source.wav', '_prompt.wav','_singletask.wav', '_multitask.wav'];

  for (var i = 0; i < 6; i++) {
    generateExampleRowCross(table.rows[1 + i], 'data/ablation_data_vc/' + i, ext, 0);
  }
}

function generateCrossLingual(tableId) {
  let table = document.getElementById(tableId);
  let ext = ['_source.wav', '_prompt.wav', '_ours.wav'];

  for (var i = 0; i < 4; i++) {
    generateExampleRow(table.rows[1 + i], 'data/cross_style/' + i, ext, 0);
  }
}

function generateEmotion(tableId) {
  let table = document.getElementById(tableId);
  let ext = ['_ref.wav', '_prompt.wav', '_syn.wav'];

  for (var i = 0; i < 3; i++) {
    generateExampleRow(table.rows[1 + i], 'data/emotion_new/' + i, ext, 1);
  }
}

function generateNoise(tableId) {
  let table = document.getElementById(tableId);
  
  let ext = ['_txt.txt', '_prompt.wav', '_ours.wav'];
  for (var i = 0; i < 2; i++) {
    generateExampleRow(table.rows[1 + i], 'data/noise/' + i, ext, 0);
  }
  
  ext = ['_source.wav', '_prompt.wav', '_ours.wav'];
  for (var i = 2; i < 4; i++) {
    generateExampleRow(table.rows[1 + i], 'data/noise/' + i, ext, 0);
  }
}


generateTextToSpeech('text-to-speech-table')
generateVoiceConversion('voice-conversion-table')
generateSingingVoiceSynthesis('singing-voice-synthesis-table')
generateSingingVoiceConversion('singing-voice-conversion-table')
generateCrossLingualTTSEn('crosslingual-text-to-speech-table-en')
generateCrossLingualTTSDe('crosslingual-text-to-speech-table-de')
generateCrossLingualTTSCn('crosslingual-text-to-speech-table-cn')
generateValle('valle-table')
generateSpearTTS('speartts-table')
generateVoicebox('voicebox-table')
generateAblationSizeTTS('ablation-size-tts-table')
generateAblationSizeVC('ablation-size-vc-table')
generateAblationDataTTS('ablation-data-tts-table')
generateAblationDataVC('ablation-data-vc-table')
generateCrossLingual('crosslingual-table')
generateEmotion('emotion-table')
generateNoise('noise-table')
