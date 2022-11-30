const PDFMerger = require('pdf-merger-js');

function mergedName() {
  const mergedName = document.getElementById(mergedName).value;
  return(mergedName + '.pdf');
}

var merger = new PDFMerger();

const mergePDF = async (p1, p2) => {
  await merger.add(p1);  //merge all pages. parameter is the path to file and filename.
  await merger.add(p2); // merge only page 2

  await merger.save('public/merged.pdf'); //save under given name and reset the internal document
}

module.exports = {mergePDF}